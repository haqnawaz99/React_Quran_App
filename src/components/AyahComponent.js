import "../App.css"
const AyahComponent = ({ ayah }) => {
    // console.log("ayah", ayah);
    return (
      <>
        <div className="task font-face-noorehuda">
          <h3>{ayah?.Arabic_Text}</h3>
          {/* <p>{surah.SurahIntro}</p> */}
        </div>
      </>
    );
  };
  
  export default AyahComponent;
  