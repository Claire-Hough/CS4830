import { TestBed } from '@angular/core/testing';

import { DataServiceService } from './data-service.service';

describe('DataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataServiceService = TestBed.get(DataServiceService);
    expect(service).toBeTruthy();
  });

  describe('RetrieveMethods', () => {

    fit('should return one city', () => {
      spyOn(localStorage, 'getItem').and.returnValue(`[{
        "id": "24324324",
        "name": "STL",
        "restaurants": [{
          "id": "76869707",
          "name": "Guidos",
          "cuisine": "Italian",
          "reviews": [{
            "id": "7583435",
            "author": "John Smith",
            "rating": 5,
            "body": "Delicious!"
          }]
        }]
      }]`);
      const service: DataServiceService = TestBed.get(DataServiceService);
      const cities = service.getCitiesWithReviewedRestaurants();
      expect(cities.length).toEqual(1);
    });

    fit('should ignore cities with no restaurants', () => {
      spyOn(localStorage, 'getItem').and.returnValue(`[{
        "id": "24324324",
        "name": "STL",
        "restaurants": [{
          "id": "76869707",
          "name": "Guidos",
          "cuisine": "Italian",
          "reviews": []
        }]
      }]`);

      const service: DataServiceService = TestBed.get(DataServiceService);
      const cities = service.getCitiesWithReviewedRestaurants();
      expect(cities.length).toEqual(0);
    })
  });

  describe('get cities with reviewed restaurants', () => {
    fit('should return an empty array when cities is empty', () => {
      spyOn(localStorage, 'getItem').and.returnValue(`[]`);

      const service: DataServiceService = TestBed.get(DataServiceService);
      const restaurants = service.getRestaurantsByCity("doesntMatter");
      expect(restaurants).not.toBeNull();
      expect(restaurants.length).toEqual(0);
    });

    fit('should return a single restaurant for this city', () => {
      spyOn(localStorage, 'getItem').and.returnValue(`[{
        "id": "24324324",
        "name": "STL",
        "restaurants": [{
          "id": "76869707",
          "name": "Guidos",
          "cuisine": "Italian",
          "reviews": [{
            "id": "7583435",
            "author": "John Smith",
            "rating": 5,
            "body": "Delicious!"
          }]
        }]
      }]`);

      const service: DataServiceService = TestBed.get(DataServiceService);
      const restaurants = service.getRestaurantsByCity("24324324");
      expect(restaurants).not.toBeNull();
      expect(restaurants.length).toEqual(1);
    });

    fit('should return a two restaurants for this city', () => {
      spyOn(localStorage, 'getItem').and.returnValue(`[{
        "id": "24324324",
        "name": "STL",
        "restaurants": [{
          "id": "76869707",
          "name": "Guidos",
          "cuisine": "Italian",
          "reviews": [{
            "id": "7583435",
            "author": "John Smith",
            "rating": 5,
            "body": "Delicious!"
          }]
        }]
      },{
        "id": "12345678",
        "name": "Chicago",
        "restaurants": [{
          "id": "9878787",
          "name": "Weber Grill",
          "cuisine": "Americana",
          "reviews": [{
            "id": "3563456",
            "author": "John Smith",
            "rating": 5,
            "body": "Delicious!"
          }]
        }]
      }]`);

      const service: DataServiceService = TestBed.get(DataServiceService);
      const restaurants = service.getRestaurantsByCity("12345678");
      expect(restaurants).not.toBeNull();
      expect(restaurants.length).toEqual(1);
      expect(restaurants[0].name).toBe("Weber Grill");
    });
  });

});
