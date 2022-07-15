import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-first-project';
  name = '';
  role = 'admin';
  login = false;


  constructor(
    private route: Router, public loginService: AuthenticationService
  ) { }

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   this.name = params['name'];
    // });

    this.login = this.loginService.isUserLoggedIn();
    // this.loginService.isUserAdmin() == true;
    if (this.login) {

    } else {
      this.route.navigate(['login']);
    }
  }

}
