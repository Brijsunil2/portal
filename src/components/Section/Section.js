import "./Section.css";

const Section = ({ sectionName, content, backgroundColor, header}) => {
  return (
    <div className={sectionName + " background-container"} style={{backgroundColor: backgroundColor}}>
      { header }
      { content }
    </div>
  )
};

export default Section;