export interface Kategoria {
  id: number;
  naran: string;
}

export interface Subkategoria {
  id: number;
  naran: string;
  kategoria: Kategoria;
  kategoria_id: number;
}

export interface Munisipiu {
  id: number;
  naran: string;
}

export interface Postu {
  id: number;
  naran: string;
  munisipiu: Munisipiu;
  munisipiu_id: number;
}
