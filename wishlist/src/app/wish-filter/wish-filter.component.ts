import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

@Component({
  standalone: true,
  selector: 'wish-filter',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.scss'
})
export class WishFilterComponent implements OnInit{

  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>

  listFilter : any = '0'

  updateFilter(value : any){
    this.filter = filters[value]
    this.filterChange.emit(this.filter)
  }

  ngOnInit(): void {
    this.updateFilter('0')
  }
}
