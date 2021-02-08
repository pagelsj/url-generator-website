import { AbstractControl, ValidatorFn } from '@angular/forms';

export function UrlValidator(): ValidatorFn {

  return (control: AbstractControl): {[key: string]: any} | null => {
    const urlReg = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
    let valid = false;

    if(urlReg.test(control.value)) {
      valid = true;
    }

    return !valid ? {'url': 'Invalid url'} : null;
  }
};
