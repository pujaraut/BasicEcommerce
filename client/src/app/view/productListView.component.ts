import { Component, OnInit } from '@angular/core';
import { Store } from '../services/store.service';
import { Product } from '../shared/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector:"product-list",
    templateUrl: "./productListView.component.html",
    styleUrls: ["productListView.component.css"]
})

export default class ProductListView implements OnInit
{

    //public c = "Microsoft";

    public products: Product[] = [];

    //public addToOrder: [] = [];

    constructor(public store: Store, private http: HttpClient)
    {
        //this.products = store.products;      
    }

    //microsoft()
    //{
        
    //}
    
    ngOnInit(): void {  

     
        this.store.loadProducts().subscribe((data: Product[]) => {

            
            this.products = data;
            console.log("before");
            console.log(data);
            console.log("after");
        });

        //this.store.loadProducts()
        //    .subscribe(); // <- Kicks off the operation
    }
    //loadProducts() {

    //    this.http.get<Product[]>('/api/products').subscribe((data: Product[]) => {
    //        this.products = data;
    //    })

        //this.http.get("/api/products")
        //    .subscribe((data: Product[]) => this.products = data


        //);
        //return this.http.get<Observable<Product[]>>("/api/products")
        //    .pipe(map(data =>
        //        this.products = data
        //    ));
    //}

}