export interface ProductModel {
  id: number;
  name: string;
  img: string;
  price: {
    en: {
      value: number;
      currency: string;
    };
    sr: {
      value: number;
      currency: string;
    };
  };
  description: {
    en: string;
    sr: string;
  };
}
