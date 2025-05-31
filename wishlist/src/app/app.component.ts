import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishComponent } from './wish/wish.component';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    WishComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent implements OnInit{
  constructor(){ }

  ngOnInit(): void {
  }

}

