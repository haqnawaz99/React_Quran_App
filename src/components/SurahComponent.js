const SurahComponent = ({ surah }) => {
  console.log("surah", surah);
  return (
    <>
      <div className="task">
        <h3>{surah?.SurahNameU}</h3>
        {/* <p>{surah.SurahIntro}</p> */}
      </div>
    </>
  );
};

export default SurahComponent;
