import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MockRestaurantService } from '../../services/restaurant.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './restaurant-form.component.html',
  styleUrl: './restaurant-form.component.scss'
})
export class RestaurantFormComponent {
  @Input() restaurant: any;
  @Output() refreshList = new EventEmitter<void>();
  @Output() cancelEdit = new EventEmitter<void>();
  restaurantForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private restaurantService: MockRestaurantService,
    private router: Router
  ) {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.restaurant) {
      this.restaurantForm.patchValue(this.restaurant);
    }
  }

  navigate()
  {
    this.router.navigate([''])
  }
  onSubmit(): void {
    if (this.restaurantForm.valid) {
      if (this.restaurant) {
        this.restaurantService.updateRestaurant(this.restaurant.id, this.restaurantForm.value).subscribe(() => {
          this.refreshList.emit();
          alert('Restaurant eddited successfully')
        });
      } else {
        this.restaurantService.addRestaurant(this.restaurantForm.value).subscribe(() => {
          this.router.navigate([''])
          alert('Restaurant added successfully')
        });
      }
    }
  }
  cancelEditing()
  {
   
    this.cancelEdit.emit();
  }
}
