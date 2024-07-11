import { Routes } from '@angular/router';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';

export const routes: Routes = [

    {
        path:'',
        component:RestaurantListComponent
    },
    {
        path:'addRestro',
        component:RestaurantFormComponent
    },
    {
        path:'**',
        component:RestaurantListComponent
    }
];
