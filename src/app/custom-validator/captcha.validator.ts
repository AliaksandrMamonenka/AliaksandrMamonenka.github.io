import { FormControl } from '@angular/forms';

export function validateCaptcha(c: FormControl): {[key: string]: boolean} {
  let CAPTCHA_WORD = 'Alex1';

  return (c.value === CAPTCHA_WORD) ? null : {invalidCaptcha: true};
}

