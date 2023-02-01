import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import ProductListView from './view/productListView.component';
import { Store } from './services/store.service';
import { CartView } from './view/cartView.component';
import { AuthActivator } from './services/authActivator.service';
import { FormsModule } from '@angular/forms';
import { CheckoutPage } from './pages/checkout.component';
import { ShopPage } from './pages/shopPage.component';
import { LoginPage } from './pages/LoginPage.component';
import router from './router';


@NgModule({
  declarations: [ 
        AppComponent,
        ProductListView,
        CartView,
        ShopPage,
        CheckoutPage,
        LoginPage
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      router,
      FormsModule
  ],
    providers: [
        Store,
        AuthActivator
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
