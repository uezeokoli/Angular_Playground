import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

@Component({
  selector: 'wish-filter',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.scss'
})
export class WishFilterComponent implements OnInit{

  @Output() filter = new EventEmitter<any>

  listFilter : any = '0'

  selectFilter(value : any){
    this.filter.emit(filters[parseInt(value)])
  }

  ngOnInit(): void {
    this.filter.emit(filters[parseInt(this.listFilter)])
  }
}
