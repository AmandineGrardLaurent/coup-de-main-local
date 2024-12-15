export type ServiceType = {
  id: number;
  nom: string;
  adresse: string;
  tel: string;
  horaires_ouverture: string;
  categorie: string;
  image: string;
};

export type FilterHelperType = {
  setCurrentCategory: (category: string) => void;
  setSearch: (search: string) => void;
  categories: string[];
  search: string;
};

export type FilterServiceType = {
  setCurrentCategory: (category: string) => void;
  setSearch: (search: string) => void;
  categories: string[];
  search: string;
};

export type HelperType = {
  id: number;
  nom: string;
  prenom: string;
  adresse: string;
  description: string;
  categorie: string;
  type: string;
  échange: string;
  image: string;
};
