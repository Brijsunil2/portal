const SectionHeader = ({ headerName, headerColor }) => {
  return (
    <div className="section-header" style={{backgroundColor: headerColor}}>
      <h2>{ headerName }</h2>
    </div>
  )
};

export default SectionHeader;