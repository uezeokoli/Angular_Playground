import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.scss'
})
export class AddWishFormComponent {
  
  @Output() addWish = new EventEmitter<WishItem>
  //   new WishItem('To Learn Angular'),
  //   new WishItem('Get Coffee', true),
  //   new WishItem('Find grass that cuts itself')
  // ]

  newWishText = ''

  addNewWish() {
    // this.items.push(new WishItem(this.newWishText))
    this.addWish.emit(new WishItem(this.newWishText))
    this.newWishText = ""
  }
}
