import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent  {

  checkoutForm = this.formBuilder.group({
    name: '',
    phone: ''
  });

  constructor(
    private formBuilder: FormBuilder
  ) {
   
  }

  onSubmit(): void {
    // Process checkout data here
    
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
