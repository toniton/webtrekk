import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-partial-header',
  templateUrl: './partial-header.component.html'
})
export class PartialHeaderComponent implements OnInit {
  model: any = {};
  public searchOverlay = false;

  constructor() { }

  ngOnInit() {
  }

  setSearchOverlayStatus(status) {
      this.searchOverlay = status;
  }

  onSubmit(form: NgForm) {
      this.setSearchOverlayStatus(false);
  }

}
