import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {ProfilePage} from '../profile/profile';

@Component({
  templateUrl: 'editProfile.html'
})
export class EditPage {

  fullName: string;
  email: string;
  birthday: any;
  callback: any;

  constructor(public navCtrl: NavController, public params:NavParams) {
      this.fullName = params.get('fullName');
      this.email = params.get('email');
      this.birthday = params.get('birthday');
      this.callback = params.get("callback");
  }

  saveProfile(fullName, email, birthday){
    this.callback(fullName, email, birthday).then(()=>{
       this.navCtrl.pop();
   });
  }
}