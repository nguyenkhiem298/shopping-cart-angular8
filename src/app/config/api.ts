import { environment } from '../../environments/environment';

export const baseUrl = environment.production ? 'httpp://api.shoppingcart.com' : 'http://localhost:8080';
export const productUrl = baseUrl + '/api/product';
export const cartUrl = baseUrl + '/api/cart';
