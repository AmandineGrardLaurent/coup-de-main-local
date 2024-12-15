import style from "./homePage.module.css";
import banner from "../../assets/images/entraide-banner.jpg";
import { HelperType, ServiceType } from "../../lib/definitions";
import HelperCard from "../../components/helperCard/HelperCard";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../../components/serviceCard/ServiceCard";

export default function HomePage() {
  const { helper, service } = useLoaderData() as {
    helper: HelperType[];
    service: ServiceType[];
  };

  if (!service || !helper) {
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
          <Link to={`/helpers/${helper[1].id}`} className={style.link}>
            <HelperCard helper={helper[1]} />
          </Link>
          {/* <Link to={`/helpers/${helper[5].id}`} className={style.link}>
            <HelperCard helper={helper[5]} />
          </Link>
          <Link to={`/helpers/${helper[8].id}`} className={style.link}>
            <HelperCard helper={helper[8]} />
          </Link> */}
        </div>
        <div>
          <h2>Les services dans le quartier</h2>
        </div>
        <div className={style.cards}>
          <Link to={`/services/${service[1].id}`} className={style.link}>
            <ServiceCard service={service[1]} />
          </Link>
          {/* <Link to={`/services/${service[5].id}`} className={style.link}>
            <ServiceCard service={service[5]} />
          </Link>
          <Link to={`/services/${service[10].id}`} className={style.link}>
            <ServiceCard service={service[10]} />
          </Link> */}
        </div>
      </section>
    </div>
  );
}
