import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user.model';
import { Router } from '@angular/router';
import { Property } from '../../models/property/property.model';
import { PropertyService } from '../../services/property/property.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  currentUser: User;
  properties: Property[];
  
  constructor(
    public userService: UserService,
    public propertyService: PropertyService) {

  }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
    // TODO: redirect back to login page. 
    if (!this.currentUser) {
      this.currentUser = this.userService.getAllUsers()[0];
    }
    this.properties = this.propertyService.getAllProperties();
  }
}
