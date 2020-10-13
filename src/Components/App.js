import React, { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";
import data from "../colleges.json";
function App() {
  const [count, setCount] = useState(0);
  const [colleges, setColleges] = useState([]);
  const [loader, toggleLoader] = useState(true);
  useEffect(() => {
    toggleLoader(true);
    let end = count + 10;
    let newCollegeArray = [];
    if (end >= data.colleges.length) {
      end = data.colleges.length;
    }
    for (let i = count; i < end; i++) {
      newCollegeArray.push(data.colleges[i]);
    }
    setColleges([...colleges, ...newCollegeArray]);
    toggleLoader(false);
  }, [count]);
  const handleEndPoint = (e) => {
    if (count + 10 > data.colleges.length) {
      return;
    }
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setCount((prev) => prev + 10);
    }
  };
  return (
    <div className="app">
      <div className="AppContainer" onScroll={handleEndPoint}>
        <p className="heading1">Colleges in North India</p>
        <div className="colleges_container">
          {colleges &&
            colleges.map((college, index) => (
              <CollegeCard college={college} key={index} />
            ))}
          {loader && <p className="Loader">Fetching College List...</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
