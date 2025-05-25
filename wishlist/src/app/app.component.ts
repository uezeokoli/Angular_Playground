import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  items : WishItem[] = [ 
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ]

  title = 'wishlist';

  newWishText = ''
  listFilter : String = '0'

  get visibleItems(): WishItem[] {
    let value = this.listFilter
    if (value == '0'){
          return this.items
        } else if (value == '1') { // unfulfilled wish
          return this.items.filter(item => !item.isComplete)
        } else{//fulfilled wish
          return this.items.filter(item => item.isComplete)
        }
    
  }

  addNewWish(e : any) {
    // console.log(this.newWishText)
    this.items.push(new WishItem(this.newWishText))
    this.newWishText = ""
  }

  toggleItem(item : WishItem, e : any ){
    item.isComplete = !item.isComplete
    // console.log(`Item is ${item.isComplete ? "":"not "}checked`)
    // console.log(e)
  }
}

