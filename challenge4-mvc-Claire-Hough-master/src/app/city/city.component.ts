import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { City } from 'src/types';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  cities: City[];

  constructor(private router: Router, private dataService: DataServiceService) {
  }

  ngOnInit() {
    this.cities = this.dataService.getCitiesWithReviewedRestaurants();
  }

  // Display the number of reviewed restaurants for each city
  reviewedRestaurantCount(cityId: string): number {
    const restaurants = this.dataService.getRestaurantsByCity(cityId);
    const restaurantsWithReviews = restaurants.filter((restaurant) => {
      return restaurant.reviews !== null && restaurant.reviews.length > 0;
    });

    return restaurantsWithReviews.length;
  }

  // Display the total number of reviewed restaurants in the system
  getTotalNumberofReviewedRestaurants(): number {
    const cities = this.dataService.getCitiesWithReviewedRestaurants();
    let total = 0;
    for(let i = 0; i < cities.length; i++){
      total = total + this.reviewedRestaurantCount(cities[i].id);
    }
    return total;
  }
}
