import { Component, VERSION } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sub: PushSubscription;
  constructor(private swPush: SwPush) {}

  readonly VAPID_PUBLIC_KEY =
    'BJuJKigoLdIfSxV_3bJnZOT0zZU-nTkZgZqFVEATgb4oDTj6Drj9dnvJ3qXCsqxumQVQ4O3jFcIO9_RVIoYEegI';

  subscribeToNotifications() {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      })
      .then((sub) => {
        this.sub = sub;
        console.log('notification Subscription', sub);
      })
      .catch((err) => console.error('****requestSubscription Error: ', err));
  }
}
