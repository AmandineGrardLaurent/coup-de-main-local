import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import ServicesFilter from "../../components/servicesFilter/ServicesFilter";
import type { ServiceType } from "../../lib/definitions";
import style from "./servicesPage.module.css";

export default function ServicesPage() {
  const datas: ServiceType[] = useLoaderData() as ServiceType[];
  const categories: string[] = [...new Set(datas.map((d) => d.categorie))];
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const filteredCategory = currentCategory ? [currentCategory] : categories;

  return (
    <div className={style.container}>
      <ServicesFilter
        setCurrentCategory={setCurrentCategory}
        categories={categories}
        setSearch={setSearch}
        search={search}
      />
      {filteredCategory.map((category) => {
        const filteredItems = datas
          .filter((data) => data.categorie === category)
          .filter(
            (searchResult) =>
              searchResult.nom.toLowerCase().includes(search.toLowerCase()) ||
              searchResult.categorie
                .toLowerCase()
                .includes(search.toLowerCase()),
          );

        if (filteredItems.length === 0) return null;

        return (
          <div key={category} className={style.categoryContainer}>
            <h2>{category}</h2>
            <div className={style.categoryCardContainer}>
              {filteredItems.map((service) => (
                <div key={service.id}>
                  <Link to={`/services/${service.id}`} className={style.link}>
                    <ServiceCard service={service} />
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
