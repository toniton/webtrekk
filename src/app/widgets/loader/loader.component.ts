import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationCancel, NavigationStart } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { loadingMessages } from '../../config/loading-messages';
import { LoaderService } from '../../widgets/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [
    trigger('show', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(100, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(150, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoaderComponent implements OnInit, AfterViewInit, OnDestroy {
  public pageLoading = true;
  subscription: any;
  interval: any;
  messages: string[] = loadingMessages || [];
  message = 'loading...';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.subscribeToLoadingState();
  }

  ngAfterViewInit() {
    this.subscribeToNavigationStart();
    this.subscribeToNavigationEnd();
    this.subscribeToNavigationCancel();
  }

  subscribeToLoadingState = () => {
    this.loaderService.getLoadingState().subscribe((showLoading) => {
      setTimeout(() => {
        showLoading === true ? this.getLoadingMessage() : clearInterval(this.interval);
        this.pageLoading = showLoading;
      }, 1000)
    });
  }

  subscribeToNavigationStart = () => {
    this.router.events
      .filter((event) => event instanceof NavigationStart)
      .map(() => this.activatedRoute)
      .subscribe(() => this.setLoadingState(true));
  }

  subscribeToNavigationEnd = () => {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .subscribe(() => this.setLoadingState(false));
  }

  subscribeToNavigationCancel = () => {
    this.router.events
      .filter((event) => event instanceof NavigationCancel)
      .subscribe(() => {
        this.setLoadingState(false);
        this.message = 'page encountered error while loading';
      })
  }

  setLoadingState = (state: boolean) => {
    this.loaderService.getLoadingState().next(state)
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.message = this.messages[this.getRandomIndex()];
  }

  getRandomIndex() {
    return Math.floor(Math.random() * (this.messages.length + 1));
  }

  getLoadingMessage() {
    this.loadComponent();
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 5000);
  }

}
