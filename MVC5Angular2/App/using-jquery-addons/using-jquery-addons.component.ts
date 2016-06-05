import { Component, ElementRef, AfterViewInit } from "@angular/core";

// declare var jQuery: any; // untyped
declare var jQuery: JQueryStatic; // typed

@Component({
    templateUrl: "app/using-jquery-addons/using-jquery-addons.component.html"
})
export class UsingJQueryAddonsComponent implements AfterViewInit {

    dropDownItems = ["First", "Second", "Third"];
    selectedValue = "Second";

    constructor(private _el: ElementRef) {
    }

    ngAfterViewInit() {
        jQuery(this._el.nativeElement)
            .find("select")
            .chosen()
            .on("change", (e, args) => {
                this.selectedValue = args.selected;
            });
    }
}