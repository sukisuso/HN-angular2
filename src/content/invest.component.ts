import { Component } from '@angular/core';

@Component({
  selector: 'invest',
  templateUrl: '/templates/content/search.html'
})
export class InvestComponent {

  allAvailableContent = [];

   constructor() {
     this.allAvailableContent = [];
   }

   createImdbId() {
     //Send to the node server
   }
} 