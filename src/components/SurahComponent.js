const SurahComponent = ({ surah }) => {
  // console.log("surah", surah);
  return (
    <>
      <div className="task font-face-noorehuda">
        <h3>{surah?.SurahNameU}</h3>
        {/* <p>{surah.SurahIntro}</p> */}
      </div>
    </>
  );
};

export default SurahComponent;
