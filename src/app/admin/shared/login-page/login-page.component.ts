import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  submit(): void {
    if (this.form.invalid) {
      console.log(this.form);
    }
    this.submitted = true;

    const user = {
      email: this.form.value.email,
      password: this.form.value.password
    };
  }

}
