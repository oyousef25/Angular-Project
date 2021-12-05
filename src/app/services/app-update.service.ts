import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class AppUpdateService {

  constructor(updates: SwUpdate) {
    //If there is a new update available
    updates.available.subscribe(event => {
      console.log('current version is', event.current); //displays current hash
      console.log('available version is', event.available); //displays new available hash
    });

    //If the user installed the new update
    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });

  }
}
