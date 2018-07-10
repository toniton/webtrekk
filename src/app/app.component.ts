import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {
  Router, NavigationEnd,
  ActivatedRoute
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AlertService } from './widgets/alert/alert.service';
import { AlertType } from './widgets/alert/alert';
import { Observable } from 'rxjs/Observable';

declare var $: any;

@Component({
  styleUrls: [
    './app.scss',
  ],
  selector: 'app-root',
  template: `<div class="topbar"><app-alert></app-alert></div>
  <router-outlet></router-outlet><app-loader></app-loader><app-badge></app-badge>`,
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private alertService: AlertService
  ) {
    this.watchInternetConnectivity();
    this.titleService.setTitle('Webtrekk');
  }

  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => this.titleService.setTitle('Webtrekk | ' + event['title']));
  }

  getTitle() {
    return this.titleService.getTitle();
  }

  watchInternetConnectivity() {
    Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').mapTo(true),
      Observable.fromEvent(window, 'offline').mapTo(false)
    ).do((response) => {
      if (response) {
        this.alertService.alert(null,
          AlertType.Success, 'Connection Ok.',
          false, 'icon-close', true)
      } else {
        this.alertService.alert(null,
          AlertType.Error, 'Internet error, please check your connection.',
          false, 'icon-close', true)
      }
    }).debounceTime(400).distinctUntilChanged().subscribe();
  }

}
