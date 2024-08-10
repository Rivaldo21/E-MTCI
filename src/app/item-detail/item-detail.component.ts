import { Component, OnInit } from "@angular/core";
import { ProductService } from "../views/home/product.service";

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.component.html",
  styleUrl: "./item-detail.component.scss",
})
export class ItemDetailComponent implements OnInit {
  detailProductString!: any;
  detailProductObj!: any;

  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.detailProductString = localStorage.getItem("detailProduct");
    this.detailProductObj = JSON.parse(this.detailProductString);
  }
}
