import { Component, OnInit, ViewChild, ElementRef, HostBinding, Input } from '@angular/core';
import { FLY_IN_OUT } from '../../config/animations';

declare let $;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    // FLY_IN_OUT()
  ]
})
export class ModalComponent implements OnInit {
  modal: ElementRef;
  state = '';

  @Input()
  backdrop: any = true;

  @Input()
  keyboard = true;

  @Input()
  focus = true;

  constructor(private el: ElementRef) {
    this.modal = el;
  }

  ngOnInit() {
    $(this.modal.nativeElement).find('.modal').on('show.bs.modal', (e) => {
      this.state = 'in';
    });
    $(this.modal.nativeElement).find('.modal').on('hide.bs.modal', (e) => {
      this.state = 'out';
    });
    $(this.modal.nativeElement).find('.modal').on('hidden.bs.modal', (e) => {
      this.state = '';
    });
  }

  show = () => {
    const options = {
      backdrop: this.backdrop,
      keyboard: this.keyboard,
      focus: this.focus
    };
    $(this.modal.nativeElement).find('.modal').modal(options);
  }

  hide = () => {
    $(this.modal.nativeElement).find('.modal').modal('hide');
  }

  dispose = () => {
    $(this.modal.nativeElement).find('.modal').modal('dispose');
  }

}
