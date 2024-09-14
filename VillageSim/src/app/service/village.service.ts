import { Injectable } from '@angular/core';
import { Improvement } from '../interfaces/improvement';

@Injectable({
  providedIn: 'root'
})
export class VillageService {

  constructor() { }

  allImprovements:Improvement[] = [];
  resourceLumber:number = 5;
  resourceGrain:number = 5;
  resourceWater:number = 5;
  resourceSheep:number = 1;
  resourcePeople:number = 0;

  addImprovement(){
    
  }

  removeImprovement(){

  }

  upgradeImprovement(){

  }

  downgradeImprovement(){

  }
}
