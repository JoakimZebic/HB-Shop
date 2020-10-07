import {HttpParams} from '@angular/common/http';

export class HttpUtils {
  static toHttpParams(params: any): HttpParams {
    let httpParams = new HttpParams();
    for (const key in params) {
      if (params.hasOwnProperty(key) && params[key]) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return httpParams;
  }
}
