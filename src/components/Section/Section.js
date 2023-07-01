import "./Section.css";
import SectionHeader from "./SectionHeader";

const Section = ({ headerName, sectionName, content }) => {
  return (
    <div className={sectionName + " background-container"}>
      { headerName && <SectionHeader headerName={ headerName }/> }
      { content }
    </div>
  )
};

export default Section;