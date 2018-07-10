import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class BaseComponent implements OnDestroy {
  protected unsubscribe = new Subject<void>();

  protected constructor() { }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
