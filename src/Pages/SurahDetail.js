import Header from "../components/Header";
import Tasks from "../components/Tasks";
import { Quran } from "../Assets/Quran.js";
import { Surah } from "../Assets/Surah.js";
import AyahComponent from "../components/AyahComponent";
import { Link, useHistory, useParams } from "react-router-dom";

import { useState, useEffect } from "react";

function SurahDetail(props) {
  const { surahNumber } = useParams();
  const history = useHistory();
  const [ayahs, setAyahs] = useState([]);
  useEffect(() => {
    let temp = Quran.filter((item) => item.SuraID == parseInt(surahNumber) + 1);
    setAyahs(temp);

    console.log("temp", Surah[surahNumber]);
  }, []);

  return (
    <div className="container">
      <div className="task font-face-noorehuda">
        <h1> {Surah[surahNumber].SurahNameU}</h1>
      </div>
      {ayahs.map((ayah, index) => (
        <div onClick={() => history.push(`/surah-detail/${index}`)}>
          <AyahComponent ayah={ayah} />
        </div>
      ))}
    </div>
  );
}

export default SurahDetail;
