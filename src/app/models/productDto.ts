import { Kategoria, Munisipiu, Postu, Subkategoria } from "./publisidadeDto";

export interface Product {
  id: number;
  titlu: string;
  presu: string;
  datapublika: string;
  telemovel: string;
  status: string;
  imagem: string;
  deskrisaun: string;
  kategoria: Kategoria;
  subkategoria: Subkategoria;
  munisipiu: Munisipiu;
  postu: Postu;
  kategoria_id: number;
  subkategoria_id: number;
  munisipiu_id: number;
  postu_id: number;
}
