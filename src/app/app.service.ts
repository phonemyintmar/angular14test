import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post('https://ethereal-admin-portal.vercel.app/firebase/auth', data);
  }
}
