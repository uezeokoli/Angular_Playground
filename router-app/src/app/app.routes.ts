import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';

//first match policy
export const routes: Routes = [
    {path: '', component: FirstComponent},
    {path: 'second', component: SecondComponent},
    {path: '**', component: NotFoundComponent} // wildcard (**): the wildcard path will be taken if there are no other paths that match above

];
