import type { ServiceType } from "../../lib/definitions";
import style from "./serviceCard.module.css";

export default function ServiceCard({ service }: { service: ServiceType }) {
  return (
    <div className={style.cardContainer}>
      <div className={style.cardImage}>
        <img src={service.image} alt={service.nom} />
      </div>
      <div className={style.cardContent}>
        {service.categorie ? (
          <div className={style.cardContentTag}>
            <span>{service.categorie}</span>
          </div>
        ) : (
          ""
        )}
        <div className={style.cardContentTitle}>
          <h3>{service.nom}</h3>
        </div>
      </div>
    </div>
  );
}
