import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import HelperCard from "../../components/helperCard/HelperCard";
import HelpersFilter from "../../components/helpersFilter/HelpersFilter";
import type { HelperType } from "../../lib/definitions";
import style from "./helpersPage.module.css";

export default function HelpersPage() {
  const datas: HelperType[] = useLoaderData() as HelperType[];
  const categories: string[] = [...new Set(datas.map((d) => d.categorie))];
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const filteredCategory = currentCategory ? [currentCategory] : categories;

  return (
    <div className={style.container}>
      <HelpersFilter
        setCurrentCategory={setCurrentCategory}
        categories={categories}
        setSearch={setSearch}
        search={search}
      />
      {filteredCategory.map((categorie) => {
        const filteredItems = datas
          .filter((data) => data.categorie === categorie)
          .filter(
            (searchResult) =>
              searchResult.type.toLowerCase().includes(search.toLowerCase()) ||
              searchResult.categorie
                .toLowerCase()
                .includes(search.toLowerCase()),
          );

        if (filteredItems.length === 0) return null;

        return (
          <div key={categorie} className={style.categoryContainer}>
            <h2>{categorie}</h2>
            <div className={style.categoryCardContainer}>
              {filteredItems.map((helper) => (
                <div key={helper.id}>
                  <Link to={`/helpers/${helper.id}`} className={style.link}>
                    <HelperCard helper={helper} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
