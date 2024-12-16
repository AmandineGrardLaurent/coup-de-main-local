import { useLoaderData } from "react-router-dom";
import banner from "../../assets/images/entraide-banner.jpg";
import HelperCard from "../../components/helperCard/HelperCard";
import style from "./homePage.module.css";
import { HelperType } from "../../lib/definitions";

export default function HomePage() {
  const helper: HelperType[] = useLoaderData() as HelperType[];
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
        <h2>Annonces d'entraides</h2>
        <div className={style.helperContainer}>
          <HelperCard helper={helper[1]} />
          <HelperCard helper={helper[2]} />
          <HelperCard helper={helper[5]} />
        </div>
      </section>
    </div>
  );
}
