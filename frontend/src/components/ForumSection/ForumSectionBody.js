import ForumListItem from "./ForumListItem";

const ForumSectionBody = ({ forumPosts }) => {
  return (
    <div className="forumsectionbody-container">
      {
        forumPosts.map(post => <ForumListItem key={post.postID} post={post} />)
      }
    </div>
  );
};

export default ForumSectionBody;