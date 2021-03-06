import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { RssFeedPage } from '../rssfeed/rssfeed';
import { APIPage } from '../api/api';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = RssFeedPage;
  tab3Root: any = APIPage;
  tab4Root: any = ProfilePage;

  constructor() {

  }
}
