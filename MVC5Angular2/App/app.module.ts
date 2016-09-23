import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }   from './app.component';
import { routing, appRoutingProviders }        from './app.routing';

import { ProductListComponent } from "./products/product-list.component";
import { WelcomeComponent } from "./home/welcome.component";
import { ProductDetailComponent } from "./products/product-detail.component";
import { ProductFormComponent }  from "./products/product-form.component";
import { SignupFormComponent } from "./users/signup-form.component";
import { TypedShaComponent } from "./using-third-party-libraries/typed-sha.component";
import { UnTypedShaComponent } from "./using-third-party-libraries/untyped-sha.component";
import { UsingJQueryAddonsComponent } from "./using-jquery-addons/using-jquery-addons.component";
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
    imports: [
        // module dependencies
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing
    ],
    declarations: [ // You can optionally move your directives declarations from @Component to @NgModule
        // components and directives
        AppComponent,
        StarComponent,

        //You have to declare the components used in the routes in the NgModule.
        ProductListComponent,
        WelcomeComponent,
        ProductDetailComponent,
        ProductFormComponent,
        SignupFormComponent,
        TypedShaComponent,
        UnTypedShaComponent,
        UsingJQueryAddonsComponent,

        //Pipes
        ProductFilterPipe
    ],
    bootstrap: [
        // root component
        AppComponent
    ],
    providers: [ // You can optionally move your providers declarations from @Component to @NgModule
        // services
        appRoutingProviders
    ]
})

export class AppModule { }