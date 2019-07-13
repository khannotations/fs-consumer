import { Property } from './../../models/property/property.model';
import { PropertyService } from './../../services/property/property.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property',
  templateUrl: './property.page.html',
  styleUrls: ['./property.page.scss'],
})
export class PropertyPage implements OnInit {
  property: Property;

  constructor(private route: ActivatedRoute, public propertyService: PropertyService) { }

  ngOnInit() {
    let propertyId: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.property = this.propertyService.getProperty(propertyId);
  }

}
