import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Restaurant } from 'src/types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  restaurants: Restaurant[];
  private sub: any;
  cityId: string;

  constructor(private router: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.cityId = params['cityId'];
      this.restaurants = this.dataService.getRestaurantsByCity(this.cityId);
    });
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }

   // Display the average review (out of 5) for each restaurant
   averageRatingPerRestaurant(restaurantId){
    const reviews = this.dataService.getReviewsByRestaurant(this.cityId, restaurantId);
    let total = reviews.reduce((total, review) => total + review.rating, 0);
    return total/reviews.length;
  }

  // Display the total number of reviews for each restaurant
  totalReviewsPerRestaurant(restaurantId){
    const review = this.dataService.getReviewsByRestaurant(this.cityId, restaurantId);
    return review.length;
  }
}
