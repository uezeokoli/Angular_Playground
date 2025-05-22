import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
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

  toggleItem(item : WishItem, e : any ){
    item.isComplete = !item.isComplete
    console.log(`Item is ${item.isComplete ? "":"not "}checked`)
    console.log(e)
  }
}
