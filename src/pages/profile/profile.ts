import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import {EditPage} from '../editProfile/editProfile';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {
  fullName: string;
  email: string;
  birthday: any;
  myCallbackFunction = (fullName, email, birthday) => {
     return new Promise((resolve, reject) => {
         this.fullName = fullName;
        this.email = email;
        this.birthday = birthday;
         resolve();
     });
}

  constructor(public navCtrl: NavController, public params?:NavParams) {
      if(params.get('fullName') == null || params.get('email') == null || params.get('birthday') == null){
        this.fullName = "Bruce Wayne";
        this.email = "bat@gotham.gov";
        this.birthday = new Date(1939, 1, 19).toISOString();;
      }    
  }   

  editProfile(fullName, email, birthday){
    this.navCtrl.push(EditPage, {
      fullName: fullName, 
      email:email,
      birthday:birthday,
      callback: this.myCallbackFunction
    })
  }

}
