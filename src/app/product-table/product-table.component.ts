import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service'

import {Product} from "./product";

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
  providers: [HttpService]
})
export class ProductTableComponent implements OnInit{

  products: Product[] = [];

  constructor(private http_service: HttpService) {
  }


  ngOnInit() {
    this.http_service.getData().subscribe((data:any) => {
      console.log(data)
      this.products = data
    })
  }


}
