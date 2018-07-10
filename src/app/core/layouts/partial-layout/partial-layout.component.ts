import {
  Component, ViewEncapsulation,
  OnInit, OnChanges, SimpleChanges, Inject, forwardRef,
  ElementRef, ViewChild
} from '@angular/core';
import { ROUTER_FADE_ANIMATION } from '../../../config/animations';

@Component({
  selector: 'app-body',
  templateUrl: './partial-layout.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [
    ROUTER_FADE_ANIMATION()
  ]
})
export class PartialLayoutComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
