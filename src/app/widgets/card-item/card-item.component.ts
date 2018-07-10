import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { formatDate, DATEFORMAT } from '../../utility/date.format';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input()
  item: any;
  @Output()
  onEdit: EventEmitter<any> = new EventEmitter();
  @Output()
  onDelete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editClicked($event) {
    if (this.onEdit) {
      this.onEdit.emit($event);
    }
  }

  deleteClicked($event) {
    if (this.onDelete) {
      this.onDelete.emit($event);
    }
  }

  formatDateOfBirth(dob) {
    return formatDate(dob, DATEFORMAT.easyToRead);
  }

}
