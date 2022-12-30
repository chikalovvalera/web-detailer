import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [NgbCarouselConfig]
})
export class MainComponent implements OnInit {

  ngOnInit(): void {
  }

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = false;
    config.showNavigationIndicators = false;
    config.showNavigationArrows = false;
    config.pauseOnHover = false;
  }
  // '/assets/image/wcar.png',
  // '/assets/image/car.png', '/assets/image/car.png', '/assets/image/car.png', '/assets/image/car.png'
  backgroundImg = [ ];
}
