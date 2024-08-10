import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-subcategory-chip",
  templateUrl: "./subcategory-chip.component.html",
  styleUrl: "./subcategory-chip.component.scss",
})
export class SubcategoryChipComponent {
  @Input() title!: string;
  @Output() subCategoryEmitter = new EventEmitter();

  emitSubCategory(event: any) {
    this.subCategoryEmitter.emit(event);
  }
}
