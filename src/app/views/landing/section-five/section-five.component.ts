import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section-five',
  templateUrl: './section-five.component.html',
  styleUrls: ['./section-five.component.scss']
})
export class SectionFiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: false,
    stagePadding: 60,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    autoWidth:false,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 2,
      },
      1000: {
        items: 4,
      }
    },
    nav: false
  }


}
