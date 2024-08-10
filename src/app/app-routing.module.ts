import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";
import { PublisidadeComponent } from "./views/publisidade/publisidade.component";
import { RejistuComponent } from "./views/rejistu/rejistu.component";
import { CompanypfeComponent } from "./views/companypfe/companypfe.component";
import { ForgotpssComponent } from "./forgotpss/forgotpss.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { SearchResultComponent } from "./search-result/search-result.component";
import { SubcatgoryComponent } from "./views/subcatgory/subcatgory.component";
// import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
  },

  // { path: 'login', component: LoginComponent },
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "publisidade",
        component: PublisidadeComponent,
      },
      {
        path: "rejistu",
        component: RejistuComponent,
      },
      {
        path: "companypfe",
        component: CompanypfeComponent,
      },
      {
        path: "forgotpss",
        component: ForgotpssComponent,
      },
      {
        path: "item-detail",
        component: ItemDetailComponent,
      },
      {
        path: "search-result",
        component: SearchResultComponent,
      },
      {
        path: "subcategory",
        component: SubcatgoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
