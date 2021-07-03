import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';

export const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "news",
    component: NewsComponent
  },
  {
    path: "product",
    loadChildren: () => import("./pages/product/product.module").then(m => m.ProductModule)
  }
];
