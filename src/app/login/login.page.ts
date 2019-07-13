import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;
  error: boolean;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  login() {
    if (this.username == "rafi" && this.password == "rafi") {
      this.error = false;
      this.navCtrl.navigateForward("/home");
    } else {
      this.error = true;
    }
  }
}
