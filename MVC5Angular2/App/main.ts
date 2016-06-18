/// <reference path="../typings/browser/ambient/core-js/index.d.ts" />
/// <reference path="../typings/browser/ambient/node/index.d.ts" />
/// <reference path="../typings/browser/ambient/jssha/index.d.ts" />
/// <reference path="../typings/browser/ambient/jquery/index.d.ts" />

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

// Our main component
import { AppComponent } from "./app.component";
import { APP_ROUTER_PROVIDERS } from './app.routes';

//if (process.env.ENV === "production") {
//    enableProdMode();
//}

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    APP_ROUTER_PROVIDERS
])
.catch(err => console.error(err));