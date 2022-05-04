import { PortfolioService } from './../../service/portfolio/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { PorfolioResponse } from 'src/app/model/porfolio/PorfolioResponse';
import { PorfolioItemResponse } from 'src/app/model/porfolio/PorfolioItemResponse';

// import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent  implements OnInit {

  constructor(private portfolioService: PortfolioService ) {
    this.portfolioObject = [];
   }

  public portfolioObject: PorfolioItemResponse[];

  ngOnInit(): void {
    this.portfolioService.getImages().subscribe(data => {

      this.portfolioObject = data.items;
      console.log('===');
      console.log(JSON.stringify(this.portfolioObject));
      console.log('===!');
      for(var i = 0;i< this.portfolioObject.length;i++) { 
          console.log("-----------"+JSON.stringify(this.portfolioObject[i]));
      }
    })
  }

  imagesConfig = {
    1: [{grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)'}]
  };
  images = [
    {src: 'https://res.cloudinary.com/thebellhop/image/upload/c_fill,fl_progressive,q_auto,f_auto,dpr_auto,h_300,w_800/v1495185249/hotels/264/facadelobby.jpg', grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)'},
    {src: 'https://res.cloudinary.com/thebellhop/image/upload/c_fill,fl_progressive,q_auto,f_auto,dpr_auto,h_300,w_800/v1495185251/hotels/264/sample-img-main-1.jpg', grow: 1, shrink: 0, basis: 'calc(50% - 0.5rem)'},
    {src: 'https://res.cloudinary.com/thebellhop/image/upload/c_fill,fl_progressive,q_auto,f_auto,dpr_auto,h_300,w_800/v1495185599/hotels/264/53.jpg', grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)'},
    {src: 'https://res.cloudinary.com/thebellhop/image/upload/c_fill,fl_progressive,q_auto,f_auto,dpr_auto,h_300,w_800/v1495185601/hotels/264/D7L_2879-A.jpg', grow: 1, shrink: 0, basis: 'calc(50% - 0.5rem)'},
    {src: 'https://res.cloudinary.com/thebellhop/image/upload/c_fill,fl_progressive,q_auto,f_auto,dpr_auto,h_300,w_800/v1495185603/hotels/264/D7L_2957-A.jpg', grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)'},
    // {src: 'https://res.cloudinary.com/thebellhop/image/upload/c_fill,fl_progressive,q_auto,f_auto,dpr_auto,h_300,w_800/v1495185604/hotels/264/D7L_3065-A.jpg', grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)'},
    
  ];
}
