import { Component, Input } from "@angular/core";
import { Product } from "../../models/productDto";
import { ProductService } from "../../views/home/product.service";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrl: "./product-card.component.scss",
})
export class ProductCardComponent {
  @Input() products: Product[] = [
    {
      id: 0,
      titlu: "",
      presu: "",
      datapublika: "",
      telemovel: "",
      status: "",
      imagem: "",
      deskrisaun: "",
      kategoria: {
        id: 0,
        naran: "",
      },
      subkategoria: {
        id: 0,
        naran: "",
        kategoria: {
          id: 0,
          naran: "",
        },
        kategoria_id: 0,
      },
      munisipiu: {
        id: 0,
        naran: "",
      },
      postu: {
        id: 0,
        naran: "",
        munisipiu: {
          id: 0,
          naran: "",
        },
        munisipiu_id: 0,
      },
      kategoria_id: 0,
      subkategoria_id: 0,
      munisipiu_id: 0,
      postu_id: 0,
    },
  ];

  constructor(private productDataService: ProductService) {}

  gotoDetailProduct(event: any) {
    this.productDataService.sendDetailProduct(event);
    localStorage.setItem("detailProduct", JSON.stringify(event));
  }
}
