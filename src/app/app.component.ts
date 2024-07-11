import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestaurantHeaderomponent } from './components/restaurant-header/restaurant-header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RestaurantHeaderomponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'foodie-delight';
}
