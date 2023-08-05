import ForumListItem from "./ForumListItem";

const ForumSectionBody = ({ forumPosts }) => {
  return (
    <div className="forumsectionbody-container">
      {
        forumPosts.map(post => <ForumListItem key={post._id} post={post} />)
      }
    </div>
  );
};

export default ForumSectionBody;