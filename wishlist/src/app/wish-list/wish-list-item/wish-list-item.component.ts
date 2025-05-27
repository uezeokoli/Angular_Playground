import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import {EventService} from '../../../shared/services/EventService';

@Component({
  standalone: true,
  selector: 'wish-list-item',
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.scss'
})
export class WishListItemComponent {

  constructor(private events: EventService){}

  @Input() wish! : WishItem 
  // @Input() fullfilled! : boolean
  // @Output() fullfilledChange = new EventEmitter<boolean>h

  updateFullfilled(){
    this.wish.isComplete = !this.wish.isComplete
    // this.fullfilledChange.emit(this.fullfilled)
  }

  get cssClass() {
    return this.wish.isComplete ? 'strikethrough text-muted': ''
  }

  removeWish(){
    this.events.emit('removeWish', this.wish)
  }
}
