import "./ForumSection.css";
import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ForumSectionHeader from "./ForumSectionHeader";
import ForumSectionBody from "./ForumSectionBody";

const ForumSection = ({ socket, user }) => {
  const { id } = useParams();
  const init = useRef(false);
  const navagate = useNavigate();

  const [forumData, setForumData] = useState({
    title: "",
    desc: "",
    userid: 0,
    creator: "",
    _id: 0,
    posts: [],
    dateCreated: ""
  });
  const [message, setMessage] = useState("");

  const setData = (data) => {
    const tempArr = forumData.posts;
    tempArr.push(data);
    setForumData({
      ...forumData,
      posts: tempArr
    });
  }

  useEffect(() => {
    if (!init.current) {
      init.current = true;
      fetch("http://localhost:4000/forum/" + id, {
        method: "GET"
      }).then(res => res.json())
        .then(data => {
          if (data.error) {
            navagate("http://localhost:3000/forums/");
          } else {
            setForumData(data);
          }
        });
    }

    socket.on("forumReplyUpdate/" + id, data => setData(data));

    return () => socket.off("forumReplyUpdate/" + id);
  }, [setData, forumData]);


  return (
    <div className="forumsection-container">
      <ForumSectionHeader 
        forumData={forumData} 
        modalData={message} 
        setModalData={setMessage} 
        socket={socket} 
        user={user}
      />
      <ForumSectionBody forumPosts={ forumData.posts } />
    </div>
  )
};

export default ForumSection;