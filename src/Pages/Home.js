import Header from "../components/Header";
import Tasks from "../components/Tasks";
import { Quran } from "../Assets/Quran.js";
import { Surah } from "../Assets/Surah.js";
import SurahComponent from "../components/SurahComponent";
import { Link, useHistory } from "react-router-dom";

import { useState } from "react";

function Home() {
  const history = useHistory();
  return (
    <div className="container">
      {Surah.map((surah,index) => (
        <div
          onClick={() =>
            history.push(`/surah-detail/${index}`)
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
