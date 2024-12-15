import banner from "../../assets/images/entraide-banner.jpg";
import style from "./homePage.module.css";

export default function HomePage() {
  return (
    <div className={style.homePage}>
      <div>
        <img className={style.banner} src={banner} alt="bannière entraide" />
      </div>
      <section className={style.container}>
        <div className={style.text}>
          Découvrez notre site d'entraide locale dans le quartier des Chartons
          dans la ville de Bordeaux. Un quartier dynamique où la vie
          collaborative est mise en avant. Retrouvez la liste des services
          locaux et les annonces d'entraides entre particuliers.
        </div>
      </section>
    </div>
  );
}
