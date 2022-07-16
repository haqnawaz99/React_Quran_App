import Header from "../components/Header";
import Tasks from "../components/Tasks";
import { Quran } from "../Assets/Quran.js";
import { Surah } from "../Assets/Surah.js";
import SurahComponent from "../components/SurahComponent";

import { useState } from "react";

function SurahDetail() {
  return (
    <div className="container  ">
      <h2>Details</h2>
      <SurahComponent surahs={Surah} />
    </div>
  );
}

export default SurahDetail;
