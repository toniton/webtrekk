import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WidgetsModule } from './widgets/widgets.module';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertService } from './widgets/alert/alert.service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WidgetsModule, RouterTestingModule],
      declarations: [
        AppComponent
      ],
      providers: [AlertService]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Webtrekk'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.getTitle()).toContain('Webtrekk');
  }));
});
