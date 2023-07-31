const ForumListItem = ({ post }) => {
  return (
    <div className="d-flex flex-column forum-message-container" >
      <div className="row">
        <div className="row">
          <p className="forum-light-text text-end">{ post.dateCreated }</p>
        </div>
        <div className="row">
          <p className="forum-light-text text-end">{ post.username }</p>
        </div>
      </div>
      <div className="row flex-fill py-4">
        <div className="col-sm">
          <p className="forum-summary">{ post.message }</p>
        </div>
      </div>
    </div>
  )
};

export default ForumListItem;