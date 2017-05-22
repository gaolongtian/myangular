import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../shared/product.service";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input()
  private rating: number;

  constructor() {
  }

  ngOnInit() {
  }

}
