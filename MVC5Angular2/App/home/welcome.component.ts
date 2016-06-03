import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/home/welcome.component.html'
    //template: require('./welcome.component.html')//for webpack
})
export class WelcomeComponent {
    public pageTitle: string = "Welcome";
}