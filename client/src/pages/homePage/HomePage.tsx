import style from "./homePage.module.css";
import banner from "../../assets/images/entraide-banner.jpg";
import { HelperType } from "../../lib/definitions";
import HelperCard from "../../components/helperCard/HelperCard";
import { Link, useLoaderData } from "react-router-dom";

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
        <div>
          <h2>Les échanges de services dans le quartier</h2>
        </div>
        <div className={style.cards}>
          <Link to={`/helpers/${helper[1].id}`} className={style.link}>
            <HelperCard helper={helper[1]} />
          </Link>
          <Link to={`/helpers/${helper[5].id}`} className={style.link}>
            <HelperCard helper={helper[5]} />
          </Link>
          <Link to={`/helpers/${helper[8].id}`} className={style.link}>
            <HelperCard helper={helper[8]} />
          </Link>
        </div>
      </section>
    </div>
  );
}
