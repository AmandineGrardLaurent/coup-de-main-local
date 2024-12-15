import { useLoaderData } from "react-router-dom";
import type { ServiceType } from "../../lib/definitions";
import style from "./serviceDetailsPage.module.css";

export default function ServiceDetailsPage() {
  const data: ServiceType = useLoaderData() as ServiceType;
  return (
    <main className={style.serviceDetails}>
      <div className={style.categorieService}>
        <span>{data.categorie}</span>
      </div>
      <section className={style.informationsServiceDetails}>
        <img
          src={data.image}
          alt={data.nom}
          className={style.imageServiceDetails}
        />
        <div className={style.categorieServiceDescription}>
          <div className={style.categorieServiceMobile}>
            <span>{data.categorie}</span>
          </div>
          <h2>{data.nom}</h2>
          <p>
            <strong>Adresse</strong> <span>{data.adresse}</span>
          </p>
          <p>
            <strong>Tel.</strong> <span>{data.tel}</span>
          </p>
          <p>
            <strong>Horaires</strong>
            <span>{data.horaires_ouverture}</span>
          </p>
        </div>
      </section>
    </main>
  );
}
