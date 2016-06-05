/// <reference path="../typings/browser/ambient/core-js/index.d.ts" />
/// <reference path="../typings/browser/ambient/node/index.d.ts" />
/// <reference path="../typings/browser/ambient/jssha/index.d.ts" />
/// <reference path="../typings/browser/ambient/jquery/index.d.ts" />

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// Our main component
import { AppComponent } from "./app.component";

//if (process.env.ENV === "production") {
//    enableProdMode();
//}

bootstrap(AppComponent, []);