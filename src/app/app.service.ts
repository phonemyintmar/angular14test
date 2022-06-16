import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post('https://mpg.mytel.com.mm:9220/auth/realms/mytel-internal/protocol/openid-connect/token', data);
  }
}
