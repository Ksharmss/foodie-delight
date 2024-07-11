import { Component, EventEmitter, Output } from '@angular/core';
import { RestaurantFormComponent } from '../restaurant-form/restaurant-form.component';
import { MockRestaurantService } from '../../services/restaurant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [RestaurantFormComponent,CommonModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.scss'
})
export class RestaurantListComponent {
  restaurants: any[] = [];
  showEditButton:boolean=false;
  editIndex: number | null = null; 
  showAddRestaurantForm:boolean=false

  constructor(private restaurantService: MockRestaurantService) {}

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe((data) => {
      this.restaurants = data;
    });
  }

  deleteRestaurant(id: string) {
    this.restaurantService.deleteRestaurant(id).subscribe(() => {
      this.refreshList();
      alert('Restaurant deleted successfully')
    });
  }
  startEditing(index: number): void {
    this.editIndex = index;
  }
  refreshList(): void {
    this.loadRestaurants();
    this.editIndex=null;
  }
  removeEditIndex()
  {
    this.editIndex =null;
  }
 
}
