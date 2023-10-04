import HeaderToolbarLink from "./HeaderToolbarLink";

const HeaderToolbar = ({ paths }) => {
  const keys = Object.keys(paths);

  return (
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      {keys.map((key, i) => (
        <HeaderToolbarLink key={i} title={key} path={paths[key]} />
      ))}
    </ul>
  );
};

export default HeaderToolbar;
