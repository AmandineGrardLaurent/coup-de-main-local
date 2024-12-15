import { useLoaderData } from "react-router-dom";
import style from "./helperDetailsPage.module.css";

export default function HelperDetailsPage() {
  const data: serviceType = useLoaderData() as serviceType;
  return (
    <main className={style.helperDetails}>
      <section>
        <img src={data.image} alt={data.nom} className={style.imageHelpers} />
      </section>

      <section className={style.informationsHelper}>
        <div className={style.categoryHelperContainer}>
          <div className={style.categorieTag}>
            <span>{data.categorie}</span>
          </div>
          <div className={style.typeTag}>
            <span>{data.type}</span>
          </div>
          <div className={style.echangeTag}>
            <span>En échange : {data.échange}</span>
          </div>
        </div>

        <div className={style.descriptionContainerHelper}>
          <h2>
            {data.prenom} {data.nom}
          </h2>
          <p>{data.description}</p>
          <p>
            <strong>Adresse</strong>
            <span> {data.adresse}</span>
          </p>
        </div>
        <button type="button">Contactez-moi</button>
      </section>
    </main>
  );
}
