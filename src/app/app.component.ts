import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular14test';
  status = "logged out";
  loginForm!: FormGroup;
  constructor(private _fb: FormBuilder, private _appService: AppService) {

  }
  ngOnInit(): void {
    this.loginForm = this._fb.group({
      name: ['test_director', [Validators.required]],
      password: ['\'r4\\P]P/.sN{v;K', [Validators.required, Validators.minLength(6)]],

    })
  }

  login() {
    let data = {
      client_id: 'cc-all-in-one-backend',
      client_secret: 'f763974f-93ae-4be5-b9b9-b0c98be6f89a',
      grant_type: 'password',
      ...this.loginForm.value
    };

    this._appService.login(data).subscribe((data: any) => {
      console.log(data);

    }, (err) => {
      console.error(err);

    });
  }
}
