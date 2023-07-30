import "./Forumpage.css";
import Section from "../../components/Section/Section";
import ForumSection from "../../components/ForumSection/ForumSection";

const Forumpage = ({ socket, user }) => {

  return (
    <div className="forumpage-container container body-container">
      <Section 
          sectionName={"forum-container"} 
          content={<ForumSection socket={socket} user={user} />}
      />
    </div>
  )
}

export default Forumpage;