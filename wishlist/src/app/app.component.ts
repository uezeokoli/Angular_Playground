import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';


@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  items : WishItem[] = [ 
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ]

  listFilter : any = '0'

  filter : any  = () => true;

  get visibleItems(): WishItem[] {
    return this.items.filter(this.filter)
  }

  changeFilter(value : any){
    this.listFilter = value
  }

  addWish(wish: WishItem){
    this.items.push(wish)
  }

}

