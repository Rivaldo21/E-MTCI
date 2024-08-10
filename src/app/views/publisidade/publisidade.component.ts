import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { forkJoin, of } from "rxjs";
import { catchError, expand, reduce, takeWhile } from "rxjs/operators";
import {
  Kategoria,
  Munisipiu,
  Postu,
  Subkategoria,
} from "../../models/publisidadeDto";
import { ProductService } from "../home/product.service";
import dayjs from "dayjs";

@Component({
  selector: "app-publisidade",
  templateUrl: "./publisidade.component.html",
  styleUrls: ["./publisidade.component.scss"],
})
export class PublisidadeComponent implements OnInit {
  private munisipiuPage = 1;
  private postoPage = 1;
  private readonly pageSize = 10;

  formData: any = {
    titlu: "",
    telemovel: "",
    imagens: [],
    deskrisaun: "",
    kategoria: "",
    munisipiu: "",
    price: null,
    postoAdministrativu: "",
    subkategoria: "",
  };

  categories: Kategoria[] = [];
  subCategories: Subkategoria[] = [];
  locations: Munisipiu[] = [];
  postoadministrativu: Postu[] = [];

  filterSubCategory: Subkategoria[] = [];
  filterMunisipiu: Postu[] = [];
  
  showSubkategori = false;
  showPostoadministrativu = false;

  loadingMunisipiu = false;
  loadingPostu = false;

  images: string[] = Array(4).fill(null);

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    forkJoin({
      categories: this.productService.getKategoria().pipe(catchError(error => of({ results: [] }))),
      subCategories: this.productService.getSubKategoria().pipe(catchError(error => of({ results: [] }))),
      munisipiuData: this.loadAllMunisipiu(),
      postuData: this.loadPostos()
    })
    .subscribe(
      ({ categories, subCategories, munisipiuData, postuData }) => {
        this.categories = categories.results || [];
        this.subCategories = subCategories.results || [];
        this.postoadministrativu = postuData.results || [];
        this.locations = munisipiuData || [];
      },
      error => {
        console.error("Failed to initialize component: ", error);
      }
    );
  }

  private loadAllMunisipiu() {
    return this.productService.getMunisipiu(this.munisipiuPage, this.pageSize).pipe(
      expand(response => {
        if (response.next) {
          const nextPage = new URL(response.next).searchParams.get('page');
          this.munisipiuPage = nextPage ? Number(nextPage) : this.munisipiuPage + 1;
          return this.productService.getMunisipiu(this.munisipiuPage, this.pageSize);
        } else {
          return of(null);
        }
      }),
      takeWhile(response => response !== null),
      reduce((acc, response) => acc.concat(response.results), []),
      catchError(error => {
        console.error("Failed to fetch Munisipiu data: ", error);
        return of([]);
      })
    );
  }

  private loadPostos() {
    return this.productService.getPostu(this.postoPage, this.pageSize).pipe(
      catchError(error => {
        console.error("Failed to fetch Postu data: ", error);
        return of({ results: [] });
      })
    );
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length && i < this.images.length; i++) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.images[i] = e.target.result;
        this.formData.imagens[i] = files[i];
      };
      reader.readAsDataURL(files[i]);
    }
  }

  onImageBoxClick(index: number) {
    const input = document.getElementById('fotoUpload') as HTMLInputElement;
    input.click();
  }

  onKategoriChange(event: any) {
    const selectedKategoria = event.target.value;
    this.filterSubCategory = this.subCategories.filter(
      data => data.kategoria_id === parseInt(selectedKategoria, 10)
    );
    this.showSubkategori = this.filterSubCategory.length > 0;
  }

  onLocationChange(event: any) {
    const selectedLocation = event.target.value;
    this.filterMunisipiu = this.postoadministrativu.filter(
      data => data.munisipiu_id === parseInt(selectedLocation, 10)
    );
    this.showPostoadministrativu = this.filterMunisipiu.length > 0;
  }

  onLocationScroll(event: any) {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (!this.loadingMunisipiu && scrollTop + clientHeight >= scrollHeight) {
      this.loadingMunisipiu = true;
      this.loadMunisipiuData().subscribe((response: any) => {
        this.locations = [...this.locations, ...response];
        this.loadingMunisipiu = false;
      });
    }
  }

  onPostoScroll(event: any) {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (!this.loadingPostu && scrollTop + clientHeight >= scrollHeight) {
      this.loadingPostu = true;
      this.loadPostData().subscribe(response => {
        this.postoadministrativu = [...this.postoadministrativu, ...response];
        this.loadingPostu = false;
      });
    }
  }

  private loadMunisipiuData() {
    return this.productService.getMunisipiu(this.munisipiuPage, this.pageSize).pipe(
      expand(response => {
        if (response.next) {
          const nextPage = new URL(response.next).searchParams.get('page');
          this.munisipiuPage = nextPage ? Number(nextPage) : this.munisipiuPage + 1;
          return this.productService.getMunisipiu(this.munisipiuPage, this.pageSize);
        } else {
          return of(null);
        }
      }),
      takeWhile(response => response !== null),
      reduce((acc, response) => acc.concat(response.results), [])
    );
  }

  private loadPostData() {
    return this.productService.getPostu(this.postoPage, this.pageSize).pipe(
      expand(response => {
        if (response.next) {
          const nextPage = new URL(response.next).searchParams.get('page');
          this.postoPage = nextPage ? Number(nextPage) : this.postoPage + 1;
          return this.productService.getPostu(this.postoPage, this.pageSize);
        } else {
          return of(null);
        }
      }),
      takeWhile(response => response !== null),
      reduce((acc, response) => acc.concat(response.results), [])
    );
  }

  postDataToAPI() {
    const deskrisaun = this.formData.deskrisaun ? this.formData.deskrisaun.trim() : "";

    if (!deskrisaun || deskrisaun.length === 0) {
      alert("Deskrisaun labele mamuk.");
      return;
    }

    const formData: FormData = new FormData();
    formData.append("titlu", this.formData.titlu);
    formData.append("telemovel", this.formData.telemovel);

    if (this.formData.imagens) {
      this.formData.imagens.forEach((imagem: File, index: number) => {
        formData.append(`imagem${index + 1}`, imagem);
      });
    }

    formData.append("datapublika", dayjs().format("YYYY-MM-DD"));
    formData.append("deskrisaun", deskrisaun);
    formData.append("kategoria_id", this.formData.kategoria);
    formData.append("munisipiu_id", this.formData.munisipiu);
    formData.append("postu_id", this.formData.postoAdministrativu);
    formData.append("subkategoria_id", this.formData.subkategoria);
    formData.append("presu", this.formData.price);

    this.productService.postData(formData).subscribe({
      next: response => {
        if (response) {
          alert("Success");
          this.router.navigate(["/"]);
        }
      },
      error: error => {
        console.error("Error posting data to API: ", error);
        if (error.error) {
          console.error("Server returned error: ", error.error);
        }
        alert("An error occurred while posting data. Please try again later.");
      }
    });
  }
}
