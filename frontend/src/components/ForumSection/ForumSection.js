import "./ForumSection.css";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import ForumSectionHeader from "./ForumSectionHeader";
import ForumSectionBody from "./ForumSectionBody";

// {
//   title: 'dsadsa',
//   desc: 'dsaddasdad',
//   userid: 1,
//   creator: 'joe',
//   id: 1,
//   posts: [],
//   dateCreated: 'Saturday, July 29, 2023 1:20 PM'
// }

const ForumSection = ({ socket, user }) => {
  const { id } = useParams();
  const init = useRef(false);
  const temp = useRef(false);

  const [forumData, setForumData] = useState({
    title: "",
    desc: "",
    userid: 0,
    creator: "",
    id: 0,
    posts: [],
    dateCreated: ""
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!init.current) {
      init.current = true;
      fetch("http://localhost:4000/forum/" + id, {
        method: "GET"
      }).then(res => res.json())
        .then(data => setForumData(data));
    }
  }, []);

  useEffect(() => {
    if (!temp.current) {
      socket.on('forumReplyUpdate/'+ id, data => console.log(data));
    }

    return () => temp.current = true;
  }, [forumData]);

  return (
    <div className="forumsection-container">
      <ForumSectionHeader 
        forumData={forumData} 
        modalData={message} 
        setModalData={setMessage} 
        socket={socket} 
        user={user}
      />
      {/* <ForumSectionBody forumPosts={ forumData.posts } /> */}
    </div>
  )
};

export default ForumSection;