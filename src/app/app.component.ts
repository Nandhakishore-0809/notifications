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
    'BGLV4nCOAw_qjaWCDW4PtUk5atAdkHGYPDrSXYHpR31MimhBuIWv6GpoDH0RMK5S-w8WOEtSTa03V1NxXnuOC0o';

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
