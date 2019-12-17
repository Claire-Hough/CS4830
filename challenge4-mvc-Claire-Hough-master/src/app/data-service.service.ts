import { Injectable } from '@angular/core';
import { Restaurant, City, Review } from 'src/types';
import { IdServiceService } from './id-service.service';
import { CityComponent } from './city/city.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  citiesArray: City[] = [];

  constructor(private idService: IdServiceService) {
    this.citiesArray = localStorage.getItem("cities") !== null
      ? JSON.parse(localStorage.getItem("cities")) : [];
  }

  // Display list of all cities that have reviewed restaurants in them
  getCitiesWithReviewedRestaurants(): City[] {
    return this.citiesArray.filter((city) => {
      let restaurantsWithReviews = city.restaurants.filter((restaurant) => {
        return restaurant.reviews !== null && restaurant.reviews.length > 0;
      });
      return restaurantsWithReviews.length > 0;
    });
  }

  // returns an array of restaurants for each city
  getRestaurantsByCity(cityId: string): Restaurant[] {
    const city = this.citiesArray.find((city) => {
      return city.id === cityId;
    });

    return city !== undefined ? city.restaurants : [];
  }

  //returns an array of reviews for each restaurant
  getReviewsByRestaurant(cityId: string, restaurantId: string): Review[] {
    const restaurantArray = this.getRestaurantsByCity(cityId);
    const restaurant = restaurantArray.find((restaurant) => {
      return restaurant.id === restaurantId;
    });

    return restaurant.reviews !== null ? restaurant.reviews : [];
  }

  createReview(cityName: string, restaurantName: string, cuisine: string, author: string, rating: number, body: string) {

    let city: City = this.findCityByName(cityName);
    if (city === undefined) {
      city = {
        id: this.idService.idGenerator(16),
        name: cityName,
        restaurants: []
      };
      this.citiesArray.push(city);
    }

    let restaurant: Restaurant = this.findRestaurantByName(restaurantName, city.restaurants);
    if (restaurant === undefined) {
      restaurant = {
        id: this.idService.idGenerator(16),
        name: restaurantName,
        cuisine: cuisine,
        reviews: []
      };
      city.restaurants.push(restaurant);
    }

    let review: Review = {
      id: this.idService.idGenerator(16),
      author: author,
      rating: rating,
      body: body
    }
    restaurant.reviews.push(review);

    localStorage.setItem("cities", JSON.stringify(this.citiesArray));
  }

  private findCityByName(cityName: string): City {
    const city = this.citiesArray.find((city) => {
      return city.name === cityName;
    });
    return city;
  }

  private findRestaurantByName(restaurantName: string, restaurantArray: Restaurant[]): Restaurant {
    const restaurant = restaurantArray.find((restaurant) => {
      return restaurant.name === restaurantName;
    });
    return restaurant;
  }

}
