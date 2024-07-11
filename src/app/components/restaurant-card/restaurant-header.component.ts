import { Component } from '@angular/core';
import { RestaurantFormComponent } from '../restaurant-form/restaurant-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-header',
  standalone: true,
  imports: [RestaurantFormComponent],
  templateUrl: './restaurant-header.component.html',
  styleUrl: './restaurant-header.component.scss'
})
export class RestaurantHeaderomponent {
  showAddRestaurantForm: boolean = false

  constructor(public router: Router) {

  }
  navigate() {
    this.router.navigate(['addRestro'])
  }
}
