import { Component, ElementRef } from '@angular/core';
import { AdressTypesService } from '../service/adresstypes.service';

@Component({
  selector: 'assets',
  templateUrl: '/templates/content/assets.html',
  providers: [AdressTypesService]
})

export class AssetsComponent {

   private houseData: Object= {};
   private adressTypes:Object[];
   private propertyTypes:Object[];
   private indexPage: number;

   constructor(private adressService: AdressTypesService) {
     this.indexPage = 1;

     this.adressService.getAdressTypes().subscribe((data: Object[]) => {
          this.adressTypes = data;
     });

     this.adressService.getPropertyTypes().subscribe((data: Object[]) => {
          this.propertyTypes = data;
     });
   }

    public showNext() : void {
        this.indexPage++;
    }

    public showPrev() : void {
        this.indexPage--;
    }
} 

