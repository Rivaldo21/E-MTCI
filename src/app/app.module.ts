import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "./environments/environments";
import { ForgotpssComponent } from "./forgotpss/forgotpss.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { HeaderComponent } from "./layout/header/header.component";
import { LayoutComponent } from "./layout/layout.component";
import { SearchResultComponent } from "./search-result/search-result.component";
import { ProductCardComponent } from "./shared/product-card/product-card.component";
import { CompanypfeComponent } from "./views/companypfe/companypfe.component";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";
import { PublisidadeComponent } from "./views/publisidade/publisidade.component";
import { RejistuComponent } from "./views/rejistu/rejistu.component";
import { SubcatgoryComponent } from './views/subcatgory/subcatgory.component';
import { SubcategoryChipComponent } from './shared/subcategory-chip/subcategory-chip.component';
import { LocationPickerComponent } from './core/location-picker/location-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RejistuComponent,
    PublisidadeComponent,
    CompanypfeComponent,
    ForgotpssComponent,
    ItemDetailComponent,
    SearchResultComponent,
    ProductCardComponent,
    SubcatgoryComponent,
    SubcategoryChipComponent,
    LocationPickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
