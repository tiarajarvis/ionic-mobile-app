import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RssFeedPage } from '../pages/rssfeed/rssfeed';
import { APIPage } from '../pages/api/api';
import { ProfilePage } from '../pages/profile/profile';
import { EditPage } from '../pages/editProfile/editProfile';
import { DetailsPage } from '../pages/details/details';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RssFeedPage,
    APIPage,
    ProfilePage,
    EditPage,
    DetailsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RssFeedPage,
    APIPage,
    ProfilePage,
    EditPage,
    DetailsPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
