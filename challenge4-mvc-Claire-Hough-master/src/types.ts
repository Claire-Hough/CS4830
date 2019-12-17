export interface City {
    id: string;
    name: string;
    restaurants: Restaurant[];
}

export interface Restaurant {
    id: string;
    name: string;
    cuisine: string;
    reviews: Review[];
    // averageReview: number;
    // totalReviews: number;
    // cityId: string;
}

export interface Review {
    id: string;
    author: string;
    rating: number;
    body: string;
    // restaurantId: string;
}