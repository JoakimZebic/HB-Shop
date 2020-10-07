export class StringUtils {

  static getJsonStringFromJsObject(item: any): string {
    let appLocalDataObject = '';
    try {
      appLocalDataObject = JSON.stringify(item);
    } catch (e) {
      console.log('Could not stringify JSON. Bad JSON.', e);
    }
    return appLocalDataObject;
  }

  static getJsObjectFromJsonString(item: string): any {
    let appLocalDataObject = null;
    try {
      appLocalDataObject = JSON.parse(item);
    } catch (e) {
      console.log('Could not parse JSON.', e);
    }
    return appLocalDataObject;
  }

  static validateFileExtension(fileName: string): boolean {
    const dotIndex = fileName.lastIndexOf('.') + 1;
    const fileExt = fileName.substr(dotIndex, fileName.length).toLowerCase();
    return fileExt === 'jpg' || fileExt === 'jpeg' || fileExt === 'png';
  }

}
