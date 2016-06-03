import { Component, OnInit } from '@angular/core';

var jsSHA = require("jssha"); // ==> loads `sha512.js` file dynamically using `systemjs.config.js` file definitions
//declare var jsSHA: any; // ==> this requires adding <script src="node_modules/jssha/src/sha512.js"></script> to the first page manually.

@Component({
    templateUrl: 'app/using-third-party-libraries/untyped-sha.component.html'
})
export class UnTypedShaComponent implements OnInit {
    hash: String;

    ngOnInit(): void {
        let shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.update("This is a test");
        this.hash = shaObj.getHash("HEX");
    }
}