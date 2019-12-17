import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdServiceService {

  constructor() { }

  // reference: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  idGenerator(length: number){
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
