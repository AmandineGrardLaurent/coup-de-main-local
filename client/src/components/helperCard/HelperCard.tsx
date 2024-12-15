import { HelperType } from "../../lib/definitions";
import style from "./helperCard.module.css";

export default function HelperCard({ helper }: { helper: HelperType }) {
  return (
    <figure className={style.helperDisplayCard}>
      <div className={style.columnHelper}>
        <img className={style.helperImg} src={helper.image} alt={helper.nom} />

        <div>
          <div className={style.helperCategoryIcon1}>
            <p>{helper.categorie}</p>
          </div>
          <div className={style.helperCategoryIcon2}>
            <p>{helper.type}</p>
          </div>
        </div>
      </div>

      <div className={style.helperDetails}>
        <h1 className={style.helperTitle}>
          {helper.prenom} {helper.nom}
        </h1>

        <p>{helper.description}</p>
      </div>
    </figure>
  );
}
