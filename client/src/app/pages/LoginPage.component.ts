import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '../services/store.service';
import { LoginRequest, LoginResults } from '../shared/LoginResults';
//import { error } from 'console';



@Component({
    selector: "login-page",
    templateUrl: "LoginPage.component.html",
})

export class LoginPage
{
    errors: any;  
    constructor(private store: Store, private router: Router) { }

    public creds: LoginRequest = {
        username: "",
        password:""
    }

    //public token = "";
    //public expiration = new Date();

    

    ////onLogin()
    ////{
    ////    this.store.login(this.creds)
    ////        .subscribe(() => {
    ////            //Successfully logged in
    ////            if (this.store.order.items.length > 0) {
    ////                this.router.navigate(["checkout"]);
    ////            }

    ////            else
    ////            {
    ////                this.router.navigate([""]);
    ////            }
    ////        }, error(() => {
    ////            console.log(error);
    ////            this.errorMessage = "Failed to login";
    ////        }));
    ////}

    //onLogin()
    //{

    //    this.store.login(this.creds)
    //        .subscribe(
    //            (data: LoginResults) => {

    //                this.token = data.token;
    //                this.expiration = data.expiration;
    //                // Successfully logged in

    //                if (this.store.order.items.length > 0)
    //                {
    //                    this.router.navigate(["checkout"]);
    //                    console.log("Welcome");
    //                    console.log(data);
    //                    console.log("Nepal");
    //                }


    //                else {
    //                    this.router.navigate([""]);
    //                    console.log(data);
    //                } 
    //                // Handle result
    //                console.log(data)
    //            },
    //            (                error: any) => {
    //                console.log(error);
    //                this.errorMessage = "Failed to login";
    //            });


    //}

    public errorMessage = "";

    onLogin()
    {
        this.store.login(this.creds)
            .subscribe(() => {
                //Successfully logged in
                if (this.store.order.items.length > 0)
                {
                    this.router.navigate(["checkout"]);
                }
                else
                {
                    this.router.navigate([""]);
                }
            },
                (error: any) => {
                    console.log(error);
                    this.errorMessage = "Failed to login";
                });
    }

}