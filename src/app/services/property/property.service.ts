import { Property } from './../../models/property/property.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }

  getProperty(id: number): Property {

    return this.getAllProperties().filter(property => property.id == id)[0];
  }

  getAllProperties(): Property[] {
    return [
      new Property(
        1,
        "Beautiful 1 Bedroom",
        "https://via.placeholder.com/150x150/EEEEEE/111111.jpg?text='Beautiful 1 Bedroom'",
        'A beautiful one bedroom apartment in a great location',
        300,
        'Lisbon, Portugal'
      ),
      new Property(
        2,
        "Beautiful 2 Bedroom",
        "https://via.placeholder.com/150x150/BBBBBB/111111.jpg?text='Beautiful 2 Bedroom'",
        'A beautiful two bedroom apartment in a great location',
        400,
        'Berlin, Germany'
      ),
      new Property(
        3,
        "Beautiful 3 Bedroom",
        "https://via.placeholder.com/150x150/333333/EEEEEEE.jpg?text='Beautiful 3 Bedroom'",
        'A beautiful three bedroom apartment in a great location',
        500,
        'Cape Town, South Africa'
      ),
    ]
  }
}
