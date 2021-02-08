import { UrlValidator } from './url.validator';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

describe('UrlValidator', () => {
  const urlValidator = UrlValidator();
  const url = new FormControl('', [UrlValidator()])

  it('should fail validation if no value has been entered', () => {

    url.setValue('');
    let controlError = url.errors;

    expect(controlError).toEqual({ 'url': 'Invalid url' });
  });

  it('should return null if the password is valid', () => {
    url.setValue('https://google.com');
    let controlError = url.errors;

    expect(controlError).toBeNull();
  });

  it('should fail validation the URL entered is invalid', () => {
    url.setValue('https://google');
    let controlError = url.errors;

    expect(controlError).toEqual({ 'url': 'Invalid url' });
  });

});
