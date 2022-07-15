import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import jwt_decode from 'jwt-decode';

export class User {
  constructor(public status: string) { }
}

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) { }
  // Provide username and password for authentication, and once authentication is successful, 
  //store JWT token in session
  authenticate(username: any, password: any) {
    return this.httpClient
      .post<any>("http://localhost:8081/demo/login", { username, password })
      .pipe(
        map(userData => {
          if (userData !== null) {
            let tokenStr = userData.token;
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("token", tokenStr);
          } else {
            return userData;

          }

          return userData;

        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    if (user === null) {
      return false
    }
    return true;
  }

  getDecodedAccessToken(token: string): any { // 解析token
    try {
      return jwt_decode(token);
    } catch (Error) {
      return 'token is null';
    }
  }

  isUserAdmin() {
    const tokenInfo = this.getDecodedAccessToken(`${sessionStorage.getItem('token')}`);
    const role = tokenInfo.role; // 取得role
    if (role === "admin") {
      return true;
    }
    return false;
  }

  logOut() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem('token');
  }
}
