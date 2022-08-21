import "../App.css";
const AyahComponent = ({ ayah }) => {
  // let temp = ayah.TarjumaLafziDrFarhatHashmi.replaceAll("] [", "],[");

  // console.log("TarjumaLafziDrFarhatHashmiah", temp);
  return (
    <>
      <div className="task font-face-noorehuda">
        <h3>{ayah?.arabic_text}</h3>
      </div>
      <div className="urduTarjuma">
        <h3>مولانا فتح محمد جالندھری {ayah?.fateh_muhammad_jalandhri}</h3>
        <h3>مولانا محمود الحسن {ayah?.mehmood_ul_hassan}</h3>
        <h3>لفظی ترجمہ : {ayah?.TarjumaLafziNazarAhmad}</h3>
      </div>

      <div>
        <h3>Mufti Taqi Usmani: {ayah?.mufti_taqi_usmani}</h3>
        <h3>Dr Mohsin Khan: {ayah?.dr_mohsin_khan}</h3>
      </div>
    </>
  );
};

export default AyahComponent;
