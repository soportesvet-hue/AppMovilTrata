import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  alertCircle,
  airplane,
  bagHandle,
  book,
  bulb,
  business,
  call,
  chatbubbleEllipses,
  checkmark,
  chevronBack,
  compass,
  earth,
  flag,
  gameController,
  globe,
  helpCircle,
  home,
  location,
  lockClosed,
  logoWhatsapp,
  mail,
  people,
  person,
  playCircle,
  search,
  shieldCheckmark,
  sparkles,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({
      alertCircle,
      airplane,
      bagHandle,
      book,
      bulb,
      business,
      call,
      chatbubbleEllipses,
      checkmark,
      chevronBack,
      compass,
      earth,
      flag,
      gameController,
      globe,
      helpCircle,
      home,
      location,
      lockClosed,
      logoWhatsapp,
      mail,
      people,
      person,
      playCircle,
      search,
      shieldCheckmark,
      sparkles,
    });
  }
}
