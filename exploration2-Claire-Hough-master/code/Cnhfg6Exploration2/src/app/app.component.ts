import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Magic Kingdom Attractions';
  description = 'Enter a new attraction, or view current attractions below.';

  attractionValue = '';
  locationValue = '';
  MagicKingdom: Observable<any[]>;

  constructor(public db: AngularFireDatabase){
    this.MagicKingdom = db.list('MagicKingdom').valueChanges();
  }

  onSubmit(){
    this.db.list('MagicKingdom').push({attraction: this.attractionValue, location: this.locationValue});
    this.attractionValue = '';
    this.locationValue = '';
  }

  onDelete(){
    this.db.list('MagicKingdom').remove();
  }
}
