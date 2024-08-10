import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../views/home/product.service';
import { Munisipiu } from '../../models/publisidadeDto';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss']
})
export class LocationPickerComponent implements OnInit {
  private currentPage = 1;
  private readonly pageSize = 20;
  public locations: Munisipiu[] = [];
  public loading = false;

  @Output() selectedLocation = new EventEmitter<Munisipiu>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadMunisipiuData();
  }

  loadMunisipiuData() {
    this.loading = true;
    this.productService.getMunisipiu(this.currentPage, this.pageSize)
      .pipe(catchError(error => {
        console.error('Failed to fetch Munisipiu data:', error);
        return of({ results: [] });
      }))
      .subscribe(response => {
        this.locations = [...this.locations, ...response.results];
        this.currentPage++;
        this.loading = false;
      });
  }

  onScroll(event: any): void {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight && !this.loading) {
      this.loadMunisipiuData();
    }
  }

  selectLocation(location: Munisipiu): void {
    this.selectedLocation.emit(location);
  }
}
