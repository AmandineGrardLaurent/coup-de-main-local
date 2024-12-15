import style from "./homePage.module.css";
import banner from "../../assets/images/entraide-banner.jpg";
import { HelperType } from "../../lib/definitions";
import { useLoaderData } from "react-router-dom";
import HelperCard from "../../components/helperCard/HelperCard";

export default function HomePage() {
  const { helper } = useLoaderData() as {
    helper: HelperType[];
  };

  if (!helper) {
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
          <HelperCard helper={helper[1]} />
        </div>
      </section>
    </div>
  );
}
