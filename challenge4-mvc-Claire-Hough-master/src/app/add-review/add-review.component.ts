import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  reviewForm = this.fb.group({
    city: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
    restaurant: ['', [Validators.required]],
    cuisine: ['', [Validators.required]],
    author: ['', [Validators.required]],
    rating: ['', [Validators.required, Validators.pattern('^[1-5]*$')]],
    body: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private dataService: DataServiceService, private router: Router) { }

  ngOnInit() {
  }

  get city() {
    return this.reviewForm.get('city');
  }

  get restaurant() {
    return this.reviewForm.get('restaurant');
  }

  get cuisine() {
    return this.reviewForm.get('cuisine');
  }

  get author() {
    return this.reviewForm.get('author');
  }

  get rating(){
    return this.reviewForm.get('rating');
  }

  get body() {
    return this.reviewForm.get('body');
  }

  onSubmit() {
    console.warn(this.reviewForm.value);
    this.dataService.createReview(this.reviewForm.value.city, this.reviewForm.value.restaurant, this.reviewForm.value.cuisine, this.reviewForm.value.author, this.reviewForm.value.rating, this.reviewForm.value.body);
    this.router.navigate(['/city']);
  }
}
