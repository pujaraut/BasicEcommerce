import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from '../services/store.service';

@Component({
    selector: "checkout",
    templateUrl: "checkout.component.html",
    styleUrls:['checkout.component.css']
})
export class CheckoutPage 
{
    public errorMessage = "";

    constructor(public store: Store, private router: Router)
    { }

    onCheckout()
    {
        this.errorMessage = "";
        this.store.checkout()
            .subscribe(() => {
                console.log("Checkout1");
                this.router.navigate(["/"]);
                console.log("Checkout2");
            },


                (error: any) => {
                    console.log(error);
                    this.errorMessage = `Failed to checkout: ${error}`;
                });
    }
   
}