import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public notificationURL = 'http://localhost:3000/subscribe';

  constructor(private _http: HttpClient) {}

  postSubscription(sub: PushSubscription) {
    return this._http
      .post(this.notificationURL, sub)
      .pipe(catchError(this.handlError));
  }
  handlError(error) {
    return throwError(error);
  }
}
