import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent  {

  public breakpoint: number;
  checkoutForm = this.formBuilder.group({
    name: '',
    phone: ''
  });

  constructor(private formBuilder: FormBuilder) {
    this.breakpoint = 1;
  }

    ngOnInit() {
      this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
    }

    onResize(event : any) {
      this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
   }





}
