import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      email: ['admin@example.net', [Validators.required, Validators.email]],
      password: ['password', [Validators.required, Validators.minLength(6)]]
    })
  }

  login() {
    let data = { ...this.loginForm.value };
    this._appService.login(data).subscribe((data: any) => {
      console.log(data);

    }, (err: any) => {
      console.log(err.error);

    });
  }
}
