import { isPlatformBrowser } from "@angular/common";
import { Component, Inject, OnInit, PLATFORM_ID } from "@angular/core";
import { Router } from "@angular/router";
import { take } from "rxjs";
import { ProdutuService } from "../../core/servises/produtu.service";
import { ProductService } from "./product.service";
import { Product } from "../../models/productDto";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
categories: any;
  onImageError($event: ErrorEvent) {
    throw new Error("Method not implemented.");
  }
  products: Product[] = [
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
  categoryProducts: any;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private productService: ProdutuService,
    private productDataService: ProductService
  ) {}

  ngOnInit(): void {
    localStorage.removeItem("detailProduct");
    localStorage.removeItem("categorySelected");
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }

    this.productService
      .getData()
      .pipe(take(1))
      .subscribe(
        (data) => {
          this.products = data.results;
        },
        (error) => {
          console.error("Error fetching product data: ", error);
        }
      );
  }

  navigateToCompanyProfile() {
    this.router.navigate(["/company-profile"]); // Check if the route is correct
  }

  navigateToItemDetail(itemId: number) {
    this.router.navigate(["/item-detail"], { queryParams: { id: itemId } });
  }

  gotoDetailProduct(event: any) {
    this.productDataService.sendDetailProduct(event);
    localStorage.setItem("detailProduct", JSON.stringify(event));
  }

  showHideCategory(event: any) {
    this.router.navigate(["/subcategory"]);
    this.categoryProducts = this.products.filter(
      (data) => data.kategoria_id === event
    );
    localStorage.setItem(
      "categorySelected",
      JSON.stringify(this.categoryProducts)
    );
    console.log(this.categoryProducts);
  }

  showAllCategoryProduct() {
    this.categoryProducts = [];
  }
}
