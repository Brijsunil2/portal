const ForumSectionHeader = ({ forumData, modalData, setModalData, socket, user }) => {
  const clearModal = () => {
    setModalData("");
  };

  const modalChange = (e) => {
    setModalData(e.target.value);
  };

  const modalSubmit = (e) => {
    e.preventDefault();

    socket.emit('forumReply', {
      userID: user.id,
      username: user.username,
      message: modalData,
      socketID: socket.id,
      forumID: forumData._id
    });
    clearModal();
  };

  return (
    <div className="d-flex flex-column forumsectionheader-container" >
      <div className="row forumitem-header">
        <div className="col-sm">
          <h2 className="forum-title">{ forumData.title }</h2>
        </div>
        <div className="col-sm">
          <div className="row">
            <p className="forum-light-text text-end">{ forumData.dateCreated }</p>
          </div>
          <div className="row">
            <p className="forum-light-text text-end">{ "Creator: " + forumData.creator }</p>
          </div>
        </div>
      </div>
      <div className="row flex-fill py-4">
        <div className="col-sm">
          <p className="forum-summary">{ forumData.desc }</p>
        </div>
      </div>

      <div className="col-md d-flex justify-content-end">
        <button type="button" className="btn custom-btn" data-bs-toggle="modal" data-bs-target="#replyModal">Reply</button>
      </div>

      <div className="modal fade" id="replyModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title fs-5" style={{color: "black"}}>Reply</h2>
              <button type="button" className="btn-close" onClick={clearModal} data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <textarea className="form-control" id="forumDescInput" value={ modalData } onChange={modalChange}></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn custom-btn" onClick={modalSubmit}data-bs-dismiss="modal" >Reply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ForumSectionHeader;