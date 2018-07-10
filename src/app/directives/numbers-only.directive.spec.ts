import { NumbersOnlyDirective } from './numbers-only.directive';
import { Component, DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<input type="text" numbersOnly>`
})
class TestNumbersOnlyComponent {
}

describe('NumbersOnlyDirective', () => {
  let fixture: ComponentFixture<TestNumbersOnlyComponent>;
  let directive: NumbersOnlyDirective;
  let inputDe: DebugElement;
  let inputEl: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestNumbersOnlyComponent,
        NumbersOnlyDirective
      ]
    });
  }));

  beforeEach(() => {
    directive = new NumbersOnlyDirective();
    fixture = TestBed.createComponent(TestNumbersOnlyComponent);
    inputDe = fixture.debugElement.query(By.directive(NumbersOnlyDirective));
    inputEl = inputDe.nativeElement;
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('Input should be empty', () => {
    inputEl.value = 'abcde';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputEl.value).toBe('');
  });

  it('Input should be 1234', () => {
    inputEl.value = '1234';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputEl.value).toBe('1234');
  });

  it('False for Keyboardevent key of "A"', () => {
    const event = new KeyboardEvent('keydown', {
      code: '65'
    });
    expect(directive.onKeyDown(event)).toBe(false);
  });

  it('True for Keyboardevent key of "0"', () => {
    const event = new KeyboardEvent('keydown', {
      code: '48'
    });
    expect(directive.onKeyDown(event)).toBe(true);
  });

  it('False for Keyboardevent key of "5"', () => {
    const event = new KeyboardEvent('keydown', {
      code: '53'
    });
    expect(directive.onKeyDown(event)).toBe(true);
  });

  it('False for Keyboardevent key of "9"', () => {
    const event = new KeyboardEvent('keydown', {
      code: '57'
    });
    expect(directive.onKeyDown(event)).toBe(true);
  });

  it('False for Keyboardevent key of "i"', () => {
    const event = new KeyboardEvent('keydown', {
      code: '116'
    });
    expect(directive.onKeyDown(event)).toBe(false);
  });

});
