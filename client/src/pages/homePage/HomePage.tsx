import style from "./homePage.module.css";
import banner from "../../assets/images/entraide-banner.jpg";
import { HelperType } from "../../lib/definitions";
import { Link, useLoaderData } from "react-router-dom";
import HelperCard from "../../components/helperCard/HelperCard";

export default function HomePage() {
  const helpers = useLoaderData() as HelperType[];

  if (!helpers) {
    return <div>No data...</div>;
  }

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
          <Link to={`/helpers/${helpers[1].id}`} className={style.link}>
            <HelperCard helper={helpers[1]} />
          </Link>
          <Link to={`/helpers/${helpers[5].id}`} className={style.link}>
            <HelperCard helper={helpers[5]} />
          </Link>
          <Link to={`/helpers/${helpers[8].id}`} className={style.link}>
            <HelperCard helper={helpers[8]} />
          </Link>
        </div>
      </section>
    </div>
  );
}
