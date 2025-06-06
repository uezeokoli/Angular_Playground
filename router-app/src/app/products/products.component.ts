import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products: any[] = []
  constructor(private store: ProductsService){

  }

  ngOnInit(): void {
    this.store.getAllProducts().subscribe(products => {
      this.products = products
    })
  }
}
