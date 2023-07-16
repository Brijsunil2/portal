import { BiSolidUpArrowAlt, BiSolidDownArrowAlt } from "react-icons/bi";

const ForumsListItem = ({data}) => {
  return (
    <div className="d-flex flex-column forumslistitem-container">
      <div className="row">
        <div className="col-sm">
          <h2 className="forum-title">{ data.title }</h2>
        </div>
        <div className="col-sm">
          <div className="row">
            <p className="forum-light-text text-end">{ data.dateCreated }</p>
          </div>
          <div className="row">
            <p className="forum-light-text text-end">{ data.author }</p>
          </div>
        </div>
      </div>
      <div className="row flex-fill py-4">
        <div className="col-sm">
          <p className="forum-summary">{ data.summary.slice(0, 300) + " ..." }</p>
        </div>
      </div>
      {/* <div className="row text-end">
        <div className="col-sm">
          <div className="container upvotes-container d-inline">
            <BiSolidUpArrowAlt style={{ color: "#2D841F" }} /> 
            <p className="d-inline forum-light-text">{ data.upvotes }</p>
          </div>
          <div className="container downvotes-container d-inline">
            <BiSolidDownArrowAlt style={{ color: "#DE2D2D" }}/>
            <p className="d-inline forum-light-text">{ data.downvotes }</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ForumsListItem;