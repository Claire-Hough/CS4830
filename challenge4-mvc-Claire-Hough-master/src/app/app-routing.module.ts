import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ReviewComponent } from './review/review.component';
import { AddReviewComponent } from './add-review/add-review.component';

const routes: Routes = [
    { path: '', redirectTo: 'city', pathMatch: 'full' },
    { path: 'city', component: CityComponent },
    { path: 'city/:cityId/restaurant', component: RestaurantComponent},
    { path: 'city/:cityId/restaurant/:restaurantId/review', component: ReviewComponent},
    { path: 'addReview', component: AddReviewComponent}
    // {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

export const routing = RouterModule.forRoot(routes);
