import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  errorSession: boolean = false;
  constructor(
    private asAuthService: AuthService
  ) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required, Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    });
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this.asAuthService.sendCredentials(email, password)
      .subscribe( response => {

      }, error => {
        this.errorSession = true;
        console.error("Las credenciales no coinciden!", error);
      }); 
  }
}