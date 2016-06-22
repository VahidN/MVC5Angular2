import { provideRouter, RouterConfig } from '@angular/router';

import { ProductListComponent } from "./products/product-list.component";
import { WelcomeComponent } from "./home/welcome.component";
import { ProductDetailComponent } from "./products/product-detail.component";
import { ProductFormComponent }  from "./products/product-form.component";
import { SignupFormComponent } from "./users/signup-form.component";
import { TypedShaComponent } from "./using-third-party-libraries/typed-sha.component";
import { UnTypedShaComponent } from "./using-third-party-libraries/untyped-sha.component";
import { UsingJQueryAddonsComponent } from "./using-jquery-addons/using-jquery-addons.component";

export const routes: RouterConfig = [
    { path: "", component: WelcomeComponent, terminal: true }, // default route
    { path: "welcome", component: WelcomeComponent },
    { path: "products", component: ProductListComponent },
    { path: "product/:id", component: ProductDetailComponent },
    { path: "addproduct", component: ProductFormComponent },
    { path: "adduser", component: SignupFormComponent },
    { path: "typedsha", component: TypedShaComponent },
    { path: "untypedsha", component: UnTypedShaComponent },
    { path: "usingjquery", component: UsingJQueryAddonsComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];