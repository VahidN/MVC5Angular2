import { Component, OnInit } from '@angular/core';
//import { jsSHA } from "jssha";
import * as jsSHA from "jssha"; // ===> var jsSHA = require("jssha"); // ===> loads `sha512.js` file dynamically using `systemjs.config.js` file definitions

@Component({
    templateUrl: 'app/using-third-party-libraries/typed-sha.component.html'
})
export class TypedShaComponent implements OnInit{
    hash: String;

    ngOnInit(): void {
        let shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.update("This is a test");
        this.hash = shaObj.getHash("HEX");
    }
}