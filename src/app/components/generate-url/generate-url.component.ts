import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { UrlValidator } from '../../validators/index';

@Component({
  selector: 'app-generate-url',
  templateUrl: './generate-url.component.html',
  styleUrls: ['./generate-url.component.scss']
})
export class GenerateUrlComponent implements OnInit {
  // Creating FormGroup to ensure its easier to add fields later if needed.
  public urlForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    // Define the form fields.
    this.urlForm = this.formBuilder.group({
      url: new FormControl('', [ Validators.required, UrlValidator() ])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.urlForm.value);
  }

}
