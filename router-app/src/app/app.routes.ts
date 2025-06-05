import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';

//first match policy
export const routes: Routes = [
    {path: '', component: FirstComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'second', component: SecondComponent},
    {path: 'products', component: ProductsComponent},
    {path: '**', component: NotFoundComponent} // wildcard (**): the wildcard path will be taken if there are no other paths that match above

];
