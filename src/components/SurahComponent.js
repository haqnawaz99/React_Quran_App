const SurahComponent = ({ surah }) => {
  // console.log("surah", surah);
  return (
    <>
      <div className="task font-face-noorehuda">
        <h3>{surah?.SurahNameU}</h3>
        <h3>{surah?.SuraID}</h3>
        {/* <p>{su rah.SurahIntro}</p> */}
      </div>
    </>
  );
};

export default SurahComponent;
