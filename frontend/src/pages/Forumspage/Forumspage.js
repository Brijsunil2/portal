import "./Forumspage.css";
import Section from "../../components/Section/Section";
import SectionHeader from "../../components/Section/SectionHeader";
import ForumsSection from "../../components/ForumsSection/ForumsSection";

const Forumspage = () => {
  return (
    <div className="forumspage-container container">
      <Section 
        sectionName={"forums-container"} 
        content={<ForumsSection />}
        backgroundColor={"white"}
        header={
          <SectionHeader headerName="Forums" />
        }
      />
    </div>
  )
}

export default Forumspage