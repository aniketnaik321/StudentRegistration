import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

constructor(private _httpClient:HttpClient) { }

GetCall(url:string){
  return this._httpClient.get(environment.ApiUrl+url);
}

PostCall(url:string,bodyStr:string){
  return this._httpClient.post(environment.ApiUrl+url,bodyStr);
}
}
