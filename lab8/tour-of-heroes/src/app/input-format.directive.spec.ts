import { InputFormatDirective } from './input-format.directive';
import { ElementRef } from '@angular/core';

describe('InputFormatDirective', () => {
  it('should create an instance', () => {
    const element = document.createElement('input');
    const directive = new InputFormatDirective(new ElementRef(element));
    expect(directive).toBeTruthy();
  });

  it('should convert text to uppercase on blur', () => {
    const element = document.createElement('input');
    element.value = 'test value';

    const directive = new InputFormatDirective(new ElementRef(element));

    directive.onBlur();

    expect(element.value).toBe('TEST VALUE');
  });
});
