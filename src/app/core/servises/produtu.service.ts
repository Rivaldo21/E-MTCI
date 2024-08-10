import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProdutuService {
  private apiUrl ="https://backendecomerce.apps06.tic.gov.tl/api/vizitor/produtu/";
  private categoriesUrl = "https://backendecomerce.apps06.tic.gov.tl/api/vizitor/kategoria/";

  constructor(private http: HttpClient) {}

  // Method to fetch product data
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(catchError(this.handleError));
  }

  // Method to fetch categories
  getCategories(): Observable<any> {
    return this.http.get<any>(this.categoriesUrl).pipe(catchError(this.handleError));
  }

  // Method to post product data
  postData(data: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, data).pipe(catchError(this.handleError));
  }

  // Centralized error handling
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error("An error occurred:", error);

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error("An error occurred:", error.error.message);
    } else {
      // Server-side error
      console.error(
        `Server returned code: ${error.status}, ` + `body was: ${error.error}`
      );
    }

    return throwError(
      () => new Error("Something bad happened; please try again later.")
    );
  }
}
