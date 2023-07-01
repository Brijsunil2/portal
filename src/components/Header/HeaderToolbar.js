import HeaderToolbarLink from "./HeaderToolbarLink";

const HeaderToolbar = ({ toolbarLinkNames, activeLinkIndex }) => {
  return (
    <ul className="nav nav-underline col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      {
        toolbarLinkNames.map((toolbarLinkName, i) => 
          <HeaderToolbarLink 
            key={i}
            toolbarLinkName={toolbarLinkName}
            isActiveLink={activeLinkIndex === i}
          />
        )
      }
    </ul>
  )
}

export default HeaderToolbar