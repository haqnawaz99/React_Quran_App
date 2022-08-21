import { Surah } from "../Assets/Surah.js";
import AyahComponent from "../components/AyahComponent";
import { useParams } from "react-router-dom";
import { Api } from "../Utils/Api.js";
import { useState, useEffect } from "react";

function SurahDetail(props) {
  const { surahNumber } = useParams();

  const [ayahs, setAyahs] = useState([]);

  useEffect(() => {
    getAyahsBySurahId(parseInt(surahNumber) + 1);
  }, [surahNumber]);

  const getAyahsBySurahId = async (id) => {
    const response = await Api("get", `ayah/get-ayahs-by-surah/${id}`);
    if (response.status === 200) {
      setAyahs(response.data.data);
    } else {
      alert(response.data.msg);
    }
  };

  return (
    <div className="container">
      <div className="task font-face-noorehuda">
        <h1> {Surah[surahNumber].SurahNameU}</h1>
      </div>
      {ayahs.map((ayah, index) => (
        <div>
          <AyahComponent ayah={ayah} />
        </div>
      ))}
    </div>
  );
}

export default SurahDetail;
