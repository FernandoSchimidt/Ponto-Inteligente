import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'

import { Login } from '../../models'
import { LoginService } from '../../services'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.gerarForm()
  }
  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  logar() {
    if (this.form.invalid) {
      return
    }
    const login: Login = this.form.value;
    this.loginService.logar(login)
      .subscribe(
        data => {
          localStorage['token'] = data['data']['token'];
          const usuarioData = JSON.parse(
            atob(data['data']['token'].split('.')[1]));
          if (usuarioData['role'] == 'ROLE_ADMIN') {
            alert('Deve rediricionar para a pagina de admin');
          } else {
            alert('Deve rediricionar para a pagina de funcionario');
          }
        },
        err => {
          let msg: string = 'Tente novamente em instantes'
          if (err['status'] == 401) {
            msg = 'Email/Senha invlaido(s)'
          }
          this.snackBar.open(msg, "ERRO", { duration: 5000 });
        }
      );
  }
}
