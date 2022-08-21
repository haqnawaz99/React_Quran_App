import { Surah } from "../Assets/Surah.js";
import SurahComponent from "../components/SurahComponent";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <div className="container">
      {Surah.map((surah, index) => (
        <div onClick={() => history.push(`/surah-detail/${index}`)}>
          <SurahComponent surah={surah} />
        </div>
      ))}
    </div>
  );
}

export default Home;
