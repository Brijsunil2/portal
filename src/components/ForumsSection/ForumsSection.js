import "./ForumsSection.css";

import { useState } from "react";
import forumsData from "../../temp/forumsData";
import ForumsListItem from "./ForumsListItem";

const ForumsSection = () => {
  const [dataset, setDataset] = useState(forumsData);

  return (
    <>
    <h2>Stuff</h2>
    <div className='container forumslist-container'>
      {
        dataset.map(data => {
          return <ForumsListItem data={data} />
        })
      }
    </div>
    </>
  )
}

export default ForumsSection