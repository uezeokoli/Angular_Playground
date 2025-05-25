import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wish-list-item',
  imports: [CommonModule],
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

  get cssClass() {
    console.log("yo")
    return this.fullfilled ? ['strikethrough', 'text-muted']: []
  }
}
