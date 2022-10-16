import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCallerService } from './api-caller.service';

@Injectable({
  providedIn: 'root'
})
export class NeetDataService {
  constructor(private _apiCaller:ApiCallerService) { }

GetQueryData(queryID:string):Observable<any>{
  return this._apiCaller.GetCall("/GetQueryData/"+queryID);  
}

}
