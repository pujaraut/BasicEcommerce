////import { Component} from '@angular/core';
////import { Store } from '../services/store.service';
////import { Product } from '../shared/product';
////import { Order } from '../shared/order';

import { Component } from "@angular/core";
import { Store } from '../services/store.service';
import { Order } from '../shared/Order';

////@component({
////    selector: "cart",
////    templateurl: "cartview.component.html",
////    styleurls: ["cartview.component.css"]
    
////})

////export default class cartview implements oninit

////export class Cartview 
////{ 
////    public products: product[] = [];
////    //public order: order[] = [];
////    public orders: order = new order();

////    constructor(public store: store)
////    {
////    }

////    ngoninit(): void {
////        this.store.addToOrder(product)
////            .subscribe();
////    }

////}

@Component({
    selector: "cart",
    templateUrl: "cartView.component.html"
    /*styleUrls: ["cartView.component.css"]*/
})

export class CartView
{

    //public order: Order = new Order();

    constructor(public store: Store)
    {

    }
}