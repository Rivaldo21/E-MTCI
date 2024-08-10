import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../app/services/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './kategoria.component.html',
  styleUrls: ['./kategoria.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  showHideCategory(id: number): void {
    // Logic to show or hide categories
  }
}
