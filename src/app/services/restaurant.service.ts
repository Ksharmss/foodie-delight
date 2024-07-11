import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_RESTAURANTS } from '../mocks/mock-restaurants';

@Injectable({
  providedIn: 'root'
})
export class MockRestaurantService {

  constructor() { }

  getRestaurants(): Observable<any> {
    return of(MOCK_RESTAURANTS);
  }

  addRestaurant(restaurant: any): Observable<any> {
    restaurant.id = (MOCK_RESTAURANTS.length + 1).toString();
    MOCK_RESTAURANTS.push(restaurant);
    return of(restaurant);
  }

  updateRestaurant(id: string, restaurant: any): Observable<any> {
    const index = MOCK_RESTAURANTS.findIndex(r => r.id === id);
    if (index !== -1) {
      MOCK_RESTAURANTS[index] = { ...MOCK_RESTAURANTS[index], ...restaurant };
    }
    return of(MOCK_RESTAURANTS[index]);
  }

  deleteRestaurant(id: string): Observable<any> {
    const index = MOCK_RESTAURANTS.findIndex(r => r.id === id);
    if (index !== -1) {
      MOCK_RESTAURANTS.splice(index, 1);
    }
    return of({ message: 'Restaurant deleted successfully' });
  }
}