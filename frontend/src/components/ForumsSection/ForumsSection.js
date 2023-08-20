import "./ForumsSection.css";
import { useState, useEffect, useRef } from "react";
import ForumsListItem from "./ForumsListItem";
import Searchbar from "../Searchbar/Searchbar";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { useNavigate } from "react-router-dom";

const ForumsSection = ({user}) => {
  const navagate = useNavigate();
  const init = useRef(false);
  const dropdownItems = ["Latest", "Oldest" , "Name"];
  const [forums, setForums] = useState([]);
  const [modalData, setModalData] = useState({ title: "", desc: "" });

  useEffect(() => {
    if (!init.current) {
      fetch("http://localhost:4000/forums", {
        method: "GET"
      }).then(res => res.json())
        .then(data => setForums(data));
    }

    return () => init.current = true;
  }, []);

  const clearModal = () => {
    setModalData({ title: "", desc: "" });
  };

  const modalChange = (e) => {
    if (e.target.id === "forumTitleInput") {
      setModalData({...modalData, title: e.target.value});
    } else if (e.target.id === "forumDescInput") {
      setModalData({...modalData, desc: e.target.value});
    };
  };

  const modalSubmit = () => {
    fetch("http://localhost:4000/forums", {
      method: "POST",
      body: JSON.stringify({
        title: modalData.title,
        desc: modalData.desc,
        userid: user.id,
        creator: user.username
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(forumID => {
        clearModal();
        navagate("/forum/" + forumID.forumID);
      })
      .catch((e) => console.log("Error creating a forum " + e));
  };

  const searchBarSubmit = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="container">
        <div className="forum-interact-bar row">
          <div className="col-md">
            <Searchbar submitFunc={searchBarSubmit} />
          </div>
          <div className="col-md d-flex justify-content-end">
            <button type="button" className="btn custom-btn" data-bs-toggle="modal" data-bs-target="#createForumModal">Create Forum</button>
            <DropdownMenu text="Filter By" dropdownItems={dropdownItems}/>
          </div>
        </div>
      </div>
      <div className='container forumslist-container'>
        {
          forums.map(forum => <ForumsListItem key={forum._id} data={forum} />)
        }
      </div>

      <div className="modal fade" id="createForumModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5" style={{color: "black"}}>New Forum</h2>
              <button type="button" className="btn-close" onClick={clearModal} data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Title:</label>
                  <input type="text" id="forumTitleInput" className="form-control" value={ modalData.title } onChange={modalChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Description:</label>
                  <textarea className="form-control" id="forumDescInput" value={ modalData.desc } onChange={modalChange}></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn custom-btn" onClick={modalSubmit}data-bs-dismiss="modal" >Create</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForumsSection;