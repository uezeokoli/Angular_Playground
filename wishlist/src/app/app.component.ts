import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    WishComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent implements OnInit{
  constructor(){ }

  ngOnInit(): void {
  }

  showWish : boolean = false
}

