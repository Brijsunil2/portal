const Header = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 border-bottom">
      <div className="mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <h1>Header</h1>
        </a>
      </div>

      <ul className="nav nav-underline col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="./" className="nav-link px-2 active"><h3>Home</h3></a></li>
        <li><a href="./" className="nav-link px-2"><h3>Forums</h3></a></li>
        <li><a href="./" className="nav-link px-2"><h3>Calendar</h3></a></li>
      </ul>

      <div className="dropdown">
        <a href="#" className="d-block link-body-emphasis text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-question-mark-vector-icon-png-image_963976.jpg" alt="question mark" width="40" height="40" className="rounded-circle" />
        </a>
        <ul className="dropdown-menu text-small" >
          <li><a className="dropdown-item" href="./">Settings</a></li>
          <li><a className="dropdown-item" href="./">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="./">Sign out</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;