import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { GalleryService } from '../../../_service/gallery.service';
import { GalleryAlbumView } from '../../../_model/view/galleryItem';
import { GalleryConverter } from '../../../_helper/gallery.converter';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbCarouselConfig]
})

export class GalleryComponent {

  gallery!: GalleryAlbumView[];

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  constructor(config: NgbCarouselConfig, private galleryService: GalleryService, private converter: GalleryConverter) {
    config.interval = 0;
    config.keyboard = true;
    config.showNavigationIndicators = true;
    config.showNavigationArrows = false;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.galleryService.getWithLimit().subscribe(data => {
      this.gallery = this.converter.convertAlbums(data);
    });

  }
}
