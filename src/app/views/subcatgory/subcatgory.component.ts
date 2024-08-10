import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/productDto";
import { Router } from "@angular/router";

@Component({
  selector: "app-subcatgory",
  templateUrl: "./subcatgory.component.html",
  styleUrl: "./subcatgory.component.scss",
})
export class SubcatgoryComponent implements OnInit {
  categorySelectedString!: any;
  categorySelectedObj!: Product[];
  subCategoryList: string[] = [];
  subCategoryFiltered: string[] = [];
  filterProductSubCategory!: any;
  showProduct = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.categorySelectedString = localStorage.getItem("categorySelected");
    this.categorySelectedObj = JSON.parse(this.categorySelectedString);

    this.categorySelectedObj.forEach((value: any) => {
      this.subCategoryList.push(value.subkategoria.naran);
    });

    this.subCategoryFiltered = [...new Set(this.subCategoryList)];
  }

  subCategoryHandler(event: any) {
    this.filterProductSubCategory = this.categorySelectedObj.filter(
      (data) => data.subkategoria.naran === event
    );
    this.showProduct = true;
    console.log(this.filterProductSubCategory);
  }

  onBackClick() {
    this.router.navigate([""]);
  }
}
