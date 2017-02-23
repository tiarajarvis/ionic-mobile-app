import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService} from '../../app/services/reddit.service';
import {DetailsPage} from '../details/details';

@Component({
  selector: 'page-rssfeed',
  templateUrl: 'rssfeed.html'
})

export class RssFeedPage {
  items: any;
  limit: any;
  category: any;

  constructor(public navCtrl: NavController, private reddit:RedditService) {
      this.getDefaults();
  }

  ngOnInit(){
      this.getPosts(this.category, this.limit);
  }

  getDefaults(){
      this.category = 'gaming';
      this.limit = 10;
  }

  getPosts(category, limit){
      this.reddit.getPosts(category, limit).subscribe(response => { 
      this.items = response.data.children;
    })
  }

  viewItem(item){
      this.navCtrl.push(DetailsPage, {
      item:item
    })
  }

  changeCategory(category){
      this.getPosts(this.category, this.limit);
  }
}
