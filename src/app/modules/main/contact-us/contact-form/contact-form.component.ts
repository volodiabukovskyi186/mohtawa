import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      country: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      description: new FormControl('')
    });
  }

  onSubmit() {
    console.log('form submited!', this.form);
    this.form.reset();
  }

}
