import { Component, VERSION } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sub: PushSubscription;
  constructor(private swPush: SwPush, public _ws: AppService) {}

  readonly VAPID_PUBLIC_KEY =
    'BExV10y8NjJdzQgnen1RQlu681dSKCStyKkRvFlrxv-jzqmHl7gjHpYaDZlvSJf4Wg8x3SGFQxWr2_GDaamVsSw';

  subscribeToNotifications() {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      })
      .then((sub) => {
        console.log(JSON.stringify(sub));
      })
      .catch((err) => console.error('****requestSubscription Error: ', err));
  }
}
