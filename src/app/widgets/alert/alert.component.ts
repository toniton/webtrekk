import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Alert, AlertType } from '../../widgets/alert/alert';
import { AlertService } from '../../widgets/alert/alert.service';
import { SLIDE_IN_OUT } from '../../config/animations';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-50%)'
        }),
        animate('0.4s ease-in')
      ]),
      transition('* => void', [
        animate('0.4s 0.2s ease-out', style({
          opacity: 0,
          transform: 'translateY(-50%)'
        }))
      ])
    ])
  ]
})
export class AlertComponent implements OnInit {
  public alerts: Array<Alert> = [];
  public isSuccess = false;
  @Input()
  public alertId;
  public state = 'in';

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert: Alert) => {
      if (!alert) {
        this.alerts = [];
        return;
      }
      if ((typeof (this.alertId) === 'undefined') && (alert.id === null)) {
        this.alerts.push(alert);
        setTimeout(() => this.removeAlert(alert), 6000);
        return;
      }
      if (this.alertId === alert.id) {
        this.alerts.push(alert);
        setTimeout(() => this.removeAlert(alert), 6000);
      }
    });
  }

  removeAlert(alert: Alert) {
    if (alert.dismissable) {
      this.alerts = this.alerts.filter(x => x !== alert);
    }
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return;
    }
    // return css class based on alert type
    switch (alert.type) {
      case AlertType.Success:
        return 'alert alert-success';
      case AlertType.Error:
        return 'alert alert-danger';
      case AlertType.Info:
        return 'alert alert-info';
      case AlertType.Warning:
        return 'alert alert-warning';
    }
  }
}
