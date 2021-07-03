import { Routes } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";

export const productRoutes: Routes = [
    {
        path: "",
        component: ProductListComponent,
    },
    {
        path: ":id",
        component: ProductDetailComponent
    }
];