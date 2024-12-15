import { FilterHelperType } from "../../lib/definitions";
import style from "./helpersFilter.module.css";

export default function HelpersFilter({
  setCurrentCategory,
  categories,
  setSearch,
  search,
}: FilterHelperType) {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentCategory(e.target.value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={style.filterHelpersContainer}>
      <form className={style.filterHelper}>
        <select id="categorySelect" onChange={handleSelect}>
          <option value="">Toutes les catégories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </form>
      <form className={style.searchHelpers}>
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
