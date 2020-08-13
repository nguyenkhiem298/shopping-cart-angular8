import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() { }

  // tslint:disable-next-line:typedef
  senMeg( product ) { // Nhận 1 sự kiện từ bên product-item
    // console.log(product);
    this.subject.next(product); // Kich hoạt sự kiện
  }

  // tslint:disable-next-line:typedef
  getMeg() { // Dữ liệu nhận được sẽ gửi đến Cart Component
    return this.subject.asObservable();
  }

}
