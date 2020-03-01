import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {ShopComponent} from "./shop/shop.component";
import {ProductsComponent} from "./shop/products/products.component";
import {ShippingComponent} from "./shop/shipping/shipping.component";
import {EditorComponent} from "./shop/products/editor/editor.component";
import {UsersComponent} from "./users/users.component";
import {UserEditorComponent} from "./users/user-editor/user-editor.component";


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'shop', component: ShopComponent, children:[
      {path: '', component: ProductsComponent},
      {path: 'editor', component: EditorComponent},
      {path: 'editor/:id', component: EditorComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'products/editor', component: EditorComponent},
      {path: 'shipping', component: ShippingComponent},
          {path: 'users', component: UsersComponent},
          {path: 'users/editor', component: UserEditorComponent},
          {path: 'users/editor/:id', component: UserEditorComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
