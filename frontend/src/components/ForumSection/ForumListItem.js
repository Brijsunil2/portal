const ForumListItem = ({ post }) => {
  return (
    <div className="forum-message-body py-2">
      <div className="row forumitem-header">
        <p className="forum-light-text">{ post.username + " --- " + post.dateCreated }</p>
      </div>
      <div className="row flex-fill">
        <div className="col-sm">
          <p className="forum-summary p-2">{ post.message }</p>
        </div>
      </div>
    </div>
  )
};

export default ForumListItem;