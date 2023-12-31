import "./Forumspage.css";
import Section from "../../components/Section/Section";
import SectionHeader from "../../components/Section/SectionHeader";
import ForumsSection from "../../components/ForumsSection/ForumsSection";

const Forumspage = ({user}) => {

  return (
    <div className="forumspage-container container body-container">
      <Section 
        sectionName={"forums-container"} 
        content={<ForumsSection user={user} />}
        backgroundColor={"white"}
        header={
          <SectionHeader headerName="Forums" />
        }
      />
    </div>
  );
};

export default Forumspage;