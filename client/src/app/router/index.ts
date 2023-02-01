import { ShopPage } from '../pages/shopPage.component';
import { CheckoutPage } from '../pages/checkout.component';
import { RouterModule } from '@angular/router';
import { LoginPage } from '../pages/LoginPage.component';
import { AuthActivator } from '../services/authActivator.service';


const routes = [
    { path: "", component: ShopPage },
    { path: "checkout", component: CheckoutPage, canActivate: [AuthActivator] },
    { path: "login", component: LoginPage },
    {path:"**", redirectTo:"/"}
]; 

const router = RouterModule.forRoot(routes, {
useHash:false 
});

export default router;