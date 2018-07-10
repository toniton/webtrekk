import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoaderService {
  public loaderSubject: BehaviorSubject<any> = new BehaviorSubject<boolean>(false);
  constructor() {

  }
  showLoading(load: boolean) {
    this.loaderSubject.next(load);
  }
  getLoadingState(): BehaviorSubject<boolean> {
    return this.loaderSubject;
  }
}
