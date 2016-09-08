import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

import { UsernameValidators } from './usernameValidators';
import { EmailValidators } from './emailValidators';
import { UserService } from './user.service';
import { IUser } from './user';
import { IResult } from './result';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/users/signup-form.component.html',
    //template: require('./signup-form.component.html'),//for webpack
    providers: [UserService]
})
export class SignupFormComponent {

    form: FormGroup;
    nameCtrl = new FormControl('', [Validators.required, UsernameValidators.cannotContainSpace],
                                   [(control: FormControl) => this.nameShouldBeUnique(control)]);
    emailCtrl = new FormControl('', [Validators.required, EmailValidators.email]);
    passwordCtrl = new FormControl('', [Validators.required]);

    constructor(private _userService: UserService) {
        this.form = new FormGroup({
            name: this.nameCtrl,
            email: this.emailCtrl,
            password: this.passwordCtrl
        });
    }

    onSubmit(): void {
        console.log(this.form);
        console.log(this.form.value);

        /*this.form.find('name').setErrors({
            invalidData : true
        });*/

        this._userService.addUser(<IUser>this.form.value)
            .subscribe((user: IUser) => {
                console.log(`ID: ${user.id}`);
            });
    }

    nameShouldBeUnique(control: FormControl) {
        return new Observable((obs: any) => {
            control
                .valueChanges
                .debounceTime(400)
                .distinctUntilChanged()
                .flatMap(term => this._userService.isUserNameUnique(<IUser>{ "name": term }))
                .subscribe((result: IResult) => {
                    if (result.result) {
                        obs.next(null);
                    }
                    else {
                        obs.next({ 'nameShouldBeUnique': true });
                    }

                    obs.complete();
                },
                error => {
                    obs.next(null);
                    obs.complete();
                });
        });
    }

    nameShouldBeUniqueNormal(control: FormControl) {
        let name: string = control.value;
        return new Promise((resolve) => {
            this._userService.isUserNameUnique(<IUser>{ "name": name }).subscribe(
                (result: IResult) => {
                    resolve(
                        result.result ? null : { 'nameShouldBeUnique': true }
                    );
                },
                error => {
                    resolve(null);
                }
            );
        });
    }
}