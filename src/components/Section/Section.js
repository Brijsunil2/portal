import "./Section.css";
import SectionHeader from "./SectionHeader";

const Section = ({ headerName, sectionName, content, backgroundColor, headerColor}) => {
  return (
    <div className={sectionName + " background-container"} style={{backgroundColor: backgroundColor}}>
      { headerName && <SectionHeader headerName={ headerName } headerColor={headerColor} /> }
      { content }
    </div>
  )
};

export default Section;