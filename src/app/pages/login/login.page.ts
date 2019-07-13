import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public userService: UserService) { }

  ngOnInit() {
  }

  async presentErrorToast() {
    const toast = await this.toastCtrl.create({
      message: 'Incorrect username or password!',
      duration: 2000,
      position: 'top',
      color: 'danger'
    });
    toast.present();
  }

  async presentSuccessToast(name?: string) {
    const toast = await this.toastCtrl.create({
      message: 'Welcome, ' + name + '!',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }

  login() {
    const user = this.userService.login(this.email, this.password);
    if (user) {
      this.presentSuccessToast(user.firstName);
      this.navCtrl.navigateForward("/properties");
    } else {
      this.presentErrorToast();
    }
  }
}
