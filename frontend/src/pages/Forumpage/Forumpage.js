import { useEffect } from "react";
import { useParams } from "react-router-dom";


const Forumpage = ({ socket }) => {
  const { id } = useParams();

  useEffect(() => {
    socket.on('messageUpdate', data => console.log(data));
  });

  const handleMessageSend = (e) => {
    e.preventDefault();
    socket.emit('messageSend', {
      text: "hello",
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id,
      forumId: id
    });
  };

  return (
    <div onClick={handleMessageSend}>Forumpage {id}</div>
  )
}

export default Forumpage