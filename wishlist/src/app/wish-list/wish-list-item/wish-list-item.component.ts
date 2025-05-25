import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  imports: [],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.scss'
})
export class WishListItemComponent {

  @Input() wishText! : string 
  @Input() fullfilled! : boolean
  @Output() fullfilledChange = new EventEmitter<boolean>

  updateFullfilled(){
    this.fullfilled = !this.fullfilled
    this.fullfilledChange.emit(this.fullfilled)

  }
}
