import { Injectable } from '@angular/core';
import { StringUtils } from '../../../utils/string-utils';

@Injectable()
export class LocalStorageService {
  APP_STORAGE_NAMESPACE = 'hb';

  constructor() {}

  public add(key: string, itemToAdd: any): void {
    let appLocalData = window.localStorage.getItem(this.APP_STORAGE_NAMESPACE);
    let appLocalDataObject = StringUtils.getJsObjectFromJsonString(
      appLocalData
    );
    if (appLocalDataObject) {
      appLocalDataObject[key] = itemToAdd;
    } else {
      appLocalDataObject = {};
      appLocalDataObject[key] = itemToAdd;
    }
    appLocalData = StringUtils.getJsonStringFromJsObject(appLocalDataObject);
    window.localStorage.setItem(this.APP_STORAGE_NAMESPACE, appLocalData);
  }

  public get(key: string): any {
    const appLocalData = window.localStorage.getItem(
      this.APP_STORAGE_NAMESPACE
    );
    let appLocalDataObject = StringUtils.getJsObjectFromJsonString(
      appLocalData
    );
    if (appLocalDataObject) {
      appLocalDataObject = appLocalDataObject[key];
    }
    return appLocalDataObject;
  }

  public delete(key: string): void {
    let appLocalData = window.localStorage.getItem(this.APP_STORAGE_NAMESPACE);
    const appLocalDataObject = StringUtils.getJsObjectFromJsonString(
      appLocalData
    );
    if (appLocalDataObject && appLocalDataObject[key]) {
      delete appLocalDataObject[key];
      appLocalData = StringUtils.getJsonStringFromJsObject(appLocalDataObject);
      window.localStorage.setItem(this.APP_STORAGE_NAMESPACE, appLocalData);
    }
  }
}
