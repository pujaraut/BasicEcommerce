import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map} from "rxjs/operators";
import { Product } from '../shared/Product';
import { Observable } from 'rxjs';
import { Order, OrderItem } from '../shared/Order';
import { LoginRequest, LoginResults } from '../shared/LoginResults';
//import { resolveAny } from 'dns';

@Injectable({
    providedIn: 'root'
})
     
export class Store 
{

    constructor(private http: HttpClient)   
    { }
                     

    //public products: Product[] = [];

    //public products:Observable<Product[]> = [];

    public order: Order = new Order();
    public token= "";
    public expiration = new Date();
    public data!: string;

    loadProducts()
    {
        return this.http.get<Product[]>("/api/products");
            //.pipe(map((data: Product[]) => {


            //    this.products = data;
            //}));
    }

 

    get loginRequired(): boolean
    {
        return this.token.length === 0 || this.expiration > new Date();
    }

     
    //login(creds: LoginRequest)    
    //{
    //    return this.http.post<LoginResults>("/account/createtoken", creds);
    //        //.pipe(map(data => {
    //        //    this.token = data.token;
    //        //    this.expiration = data.expiration
    //        //}));
    //} 

    login(creds: LoginRequest): Observable<LoginResults>
    {
        return this.http.post<LoginResults>("/account/createtoken", creds)
            .pipe(map((data: LoginResults) => {
                this.token = data.token;
                this.expiration = data.expiration;
            }));
    }


    checkout()
    {
        const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
        return this.http.post("/api/orders", this.order, {
            headers: headers
        })
            .pipe(map(() => {
                this.order = new Order();
            }));
    }


    addToOrder(product:Product)
    {

        let item:undefined| OrderItem;

        item = this.order.items.find(o => o.productId === product.id);

        if (item)
        {
            item.quantity++;
        }

        else
        {
            item = new OrderItem();
            item.productId = product.id;
            item.productArtist = product.artist;
            item.productArtId = product.artId;
            item.productCategory = product.category;
            item.productTitle = product.title;
            item.productSize = product.size;
            item.unitPrice = product.price;
            item.quantity = 1;

            this.order.items.push(item);

        }
        
    }

    
}