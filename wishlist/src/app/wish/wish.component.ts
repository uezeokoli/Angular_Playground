import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './../wish/wish-list/wish-list.component';
import { AddWishFormComponent } from './../wish/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './../wish/wish-filter/wish-filter.component';
import {EventService} from '../../shared/services/EventService'
import { WishService } from './../wish.service';
import { HttpClient } from '@angular/common/http';


@Component({
  standalone: true,
  selector: 'app-wish',
  imports: [
    CommonModule,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent
  ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.scss',
  providers: [HttpClient]
})
export class WishComponent implements OnInit{
  items : WishItem[] = [ 
    // new WishItem('To Learn Angular'),
    // new WishItem('Get Coffee', true),
    // new WishItem('Find grass that cuts itself')
  ]

  constructor(events : EventService, private wishService: WishService){
    events.listen('removeWish', (wish : any) => {

      // console.log(wish)
      let index = this.items.indexOf(wish)
      this.items.splice(index, 1)

    })
  }
  filter : any;

  addWish(wish: WishItem){
    this.items.push(wish)
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data
      // console.log(data)
    }, 
    (error : any) => {
    alert(error.message)
    }
  )
  }
}

