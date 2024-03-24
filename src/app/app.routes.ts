import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        title: 'eShop | Home Page',
      },
    
      {
        path: 'login',
        component: LoginComponent,
        title: 'eShop | Login',
      },
    
      {
        path: 'register',
        component: RegisterComponent,
        title: 'eShop | Register',
      },
    
      {
        path: 'cart',
        component: CartComponent,
        title: 'eShop | Cart',
      },

      {
        path: 'favourite',
        component: FavouriteComponent,
        title: 'eShop | favourite',
      },
    
      {
        path: 'product-details/:id',
        component: ProductDetailsComponent,
        title: 'eShop | Product Details',
      },

      {
        path: '**',
        component: NotFoundComponent,
        title: 'Not Found',
      }
];
