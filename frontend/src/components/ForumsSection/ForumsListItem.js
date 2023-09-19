import { useNavigate } from "react-router-dom";
import { BsFillChatDotsFill } from "react-icons/bs";

const ForumsListItem = ({data}) => {
  const navagate = useNavigate();

  const forumOnClick = () => {
    navagate("/forum/" + data._id);
  };

  return (
    <div className="d-flex flex-column forumslistitem-container" onClick={forumOnClick}>
      <div className="row">
        <div className="col-3 col-sm-2 col-lg-1 text-center">
          <BsFillChatDotsFill />
          <p className="forum-light-text">{ data.creator }</p>
        </div>
        <div className="col">
          <div className="row">
            <h2 className="forum-title">{ data.title }</h2>
            <p className="forum-summary">{ data.desc.slice(0, 200) + " ..." }</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumsListItem;