import { Link, useLoaderData } from "react-router-dom";
import banner from "../../assets/images/entraide-banner.jpg";
import HelperCard from "../../components/helperCard/HelperCard";
import type { HelperType } from "../../lib/definitions";
import style from "./homePage.module.css";

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
          <Link to={`/helpers/${helper[1].id}`} className={style.link}>
            <HelperCard helper={helper[1]} />
          </Link>
          <Link to={`/helpers/${helper[2].id}`} className={style.link}>
            <HelperCard helper={helper[2]} />
          </Link>
          <Link to={`/helpers/${helper[5].id}`} className={style.link}>
            <HelperCard helper={helper[5]} />
          </Link>
        </div>
      </section>
    </div>
  );
}
