import Header from "../components/Header";
import Tasks from "../components/Tasks";
import { Quran } from "../Assets/Quran.js";
import { Surah } from "../Assets/Surah.js";
import SurahComponent from "../components/SurahComponent";
import { Link, useHistory } from "react-router-dom";

import { useState } from "react";

function Home() {
  const history = useHistory();
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doc Appointment",
      day: "July 16 at 9:0 pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Pack Appointment",
      day: "July 17 at 10:0 pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Loop Appointment",
      day: "July 18 at 11:0 pm",
      reminder: true,
    },
  ]);

  return (
    // console.log("Surah", Surah),
    <div className="container">
      {Surah.map((surah) => (
        <div
          onClick={() =>
            history.push("surah-details", { state: "sample data" })
          }
        >
          <SurahComponent surah={surah} />
        </div>
      ))}

      {/* <Header /> */}
      {/* <Tasks tasks={tasks} /> */}
    </div>
  );
}

export default Home;
