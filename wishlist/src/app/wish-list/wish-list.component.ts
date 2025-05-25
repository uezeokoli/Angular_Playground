import { Component, Input, input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wish-list',
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent {

  // wishes = input.required<WishItem[]>() //for signals
  @Input() wishes : WishItem[] = []

  toggleItem(item : WishItem, e : any ){
    item.isComplete = !item.isComplete
    // console.log(`Item is ${item.isComplete ? "":"not "}checked`)
    // console.log(e)
  }
}
