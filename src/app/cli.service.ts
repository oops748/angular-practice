import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CliService {

  constructor(private http: HttpClient) { } // 注入

  getcli() {
    return this.http.get<{ name: string; introduce: string }[]>(
      '/assets/cli.json'
    );
  }
}
