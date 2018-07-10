import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs/Rx';
import { Alert, AlertType } from '../../widgets/alert/alert';
import { Router, NavigationStart } from '@angular/router';

@Injectable()
export class AlertService {
    private subject = new BehaviorSubject<Alert>(null);
    private keepAfterRouteChange = false;

    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    this.keepAfterRouteChange = false;
                } else {
                    this.clear();
                }
            }
        });
    }

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    success(id: string, message: string, keepAfterRouteChange = false) {
        this.alert(id, AlertType.Success, message, keepAfterRouteChange);
    }

    error(id: string, message: string, keepAfterRouteChange = false) {
        this.alert(id, AlertType.Error, message, keepAfterRouteChange);
    }

    info(id: string, message: string, keepAfterRouteChange = false) {
        this.alert(id, AlertType.Info, message, keepAfterRouteChange);
    }

    warn(id: string, message: string, keepAfterRouteChange = false) {
        this.alert(id, AlertType.Warning, message, keepAfterRouteChange);
    }

    alert(id: string = null, type: AlertType, message: string, keepAfterRouteChange = false, customIcon = '', dismissable = true) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next(<Alert>{ id: id, type: type, message: message, customIcon: customIcon, dismissable: dismissable });
    }

    clear() {
        this.subject.next(null);
    }
}
