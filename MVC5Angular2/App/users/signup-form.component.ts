import { Component } from '@angular/core';
import { Control, ControlGroup, Validators, FormBuilder } from '@angular/common';
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
    //form = new ControlGroup({
    //    name: new Control('', Validators.required),
    //    email: new Control('', Validators.required),
    //    password: new Control('', Validators.required)
    //});

    form: ControlGroup;

    constructor(private _formBuilder: FormBuilder, private _userService: UserService) {
        this.form = _formBuilder.group({
            name: ['', Validators.compose([
                Validators.required,
                UsernameValidators.cannotContainSpace
            ]),
                (control: Control) => this.nameShouldBeUnique(control)], // Validators.composeAsync
            email: ['', Validators.compose([
                Validators.required,
                EmailValidators.email]
            )],
            password: ['', Validators.required]
        });
    }


    onSubmit(): void {
        console.log(this.form.value);

        /*this.form.find('name').setErrors({
            invalidData : true
        });*/

        this._userService.addUser(<IUser>this.form.value)
            .subscribe((user: IUser) => {
                console.log(`ID: ${user.id}`);
            });
    }

    nameShouldBeUnique(control: Control) {
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

    nameShouldBeUniqueNormal(control: Control) {
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