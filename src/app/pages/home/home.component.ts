import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  slideList:any[]=[
    {
      name:'pratik',
      alt:'pratik',
      src:'https://img.naukimg.com/logo_images/groups/v1/1715696.gif'
    },
    {
      name:'Maurya',
      alt:'pratik',
      src:'https://img.naukimg.com/logo_images/groups/v1/1715696.gif'
    },
    {
      name:'pratik',
      alt:'pratik',
      src:'https://img.naukimg.com/logo_images/groups/v1/1715696.gif'
    }
  ]

}
