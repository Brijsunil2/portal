import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Forumpage = () => {
  const { id } = useParams();

  // useEffect(() => {
  //   fetch(`http://localhost:4000/forum/${id}`)
  //     .then(res => res.json());
  // }, []);

  return (
    <div>Forumpage {id}</div>
  )
}

export default Forumpage