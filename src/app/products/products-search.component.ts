import { Component, OnInit } from '@angular/core';

import { ProductsService } from './products.service';

@Component({
  moduleId: module.id,
  selector: 'smshop-products-search',
  templateUrl: 'products-search.component.html',
  styleUrls: ['products-search.component.css']
})
export class ProductsComponent implements OnInit {

	constructor(
    	private productsService: ProductsService) { }

  	ngOnInit() {
  	}

}
