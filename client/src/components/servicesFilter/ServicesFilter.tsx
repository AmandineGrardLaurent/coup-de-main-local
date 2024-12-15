import { FilterServiceType } from "../../lib/definitions";
import style from "./servicesFilter.module.css";

export default function ServicesFilter({
  setCurrentCategory,
  categories,
  setSearch,
  search,
}: FilterServiceType) {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentCategory(e.target.value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={style.filterServicesContainer}>
      <form className={style.filterServices}>
        <select id="category-select" onChange={handleSelect}>
          <option value="">Toutes les catégories</option>
          {categories.map((categorie) => (
            <option key={categorie} value={categorie}>
              {categorie}
            </option>
          ))}
        </select>
      </form>
      <form className={style.searchServices}>
        <input
          type="text"
          placeholder="Rechercher..."
          onChange={handleSearch}
          value={search}
        />
      </form>
    </div>
  );
}
