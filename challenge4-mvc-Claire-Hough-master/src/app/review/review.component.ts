import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Review } from 'src/types';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  reviews: Review[];
  private sub: any;
  cityId: string;
  restaurantId: string;

  constructor(private router: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.cityId = params['cityId'];
      this.restaurantId = params['restaurantId'];
      this.reviews = this.dataService.getReviewsByRestaurant(this.cityId, this.restaurantId);
    });
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }

  

}
