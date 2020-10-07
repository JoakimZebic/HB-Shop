import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartCounterService {
  counterValue = new BehaviorSubject(this.counter);

  constructor() {}

  set counter(value) {
    this.counterValue.next(value);
  }

  get counter(): any {
    return this.counterValue;
  }
}
