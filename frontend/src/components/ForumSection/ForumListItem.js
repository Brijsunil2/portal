import { BsFillChatDotsFill } from "react-icons/bs";

const ForumListItem = ({ post }) => {
  return (
    <div className="forum-message-body py-2">
      <div className="row forumitem-header">
        <div className="col-3 col-sm-2 col-lg-1 d-flex justify-content-center">
          <div className="text-center userinfo-container">
            <BsFillChatDotsFill />
            <p className="forum-light-text">{post.username}</p>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <p className="forum-message-date">{ post.dateCreated }</p>
          </div>
          <div className="row">
            <p className="forum-message">{post.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumListItem;