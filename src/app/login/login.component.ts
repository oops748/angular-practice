import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  @Input() error?: string | null;

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  save() {
    (this.loginservice.authenticate(this.username, this.password)
      .subscribe(
        data => {
          if (data === null) {
            this.error = ('帳密錯誤');
            this.username = '';
            this.password = '';
          } else {
            this.router.navigate([''])
            this.invalidLogin = false

          }
        })
    );
  }

  checkLogin() {
    if (this.username === '' && this.password === '') {
      this.error = ('請輸入帳號密碼')
    } else if (this.password === '') {
      this.error = ('請輸入密碼')
    } else if (this.username === '') {
      this.error = ('請輸入帳號')
    } else {
      this.save();
    }
  }

}