export enum FOOTER_LINKS {
  CONTACT = 'contact',
  IMPRINT = 'imprint',
  PRIVACY_POLICY = 'privacy-policy',
}

export class GeneralUtils {
  static isObjectEmpty(obj: any): boolean {
    return Object.keys(obj).length === 0;
  }
}
