import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialHeaderComponent } from './partial-header.component';
import { FormsModule } from '@angular/forms';

describe('PartialHeaderComponent', () => {
  let component: PartialHeaderComponent;
  let fixture: ComponentFixture<PartialHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [PartialHeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
