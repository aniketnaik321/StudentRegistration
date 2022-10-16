import { Component, OnInit } from '@angular/core';
import { NeetDataService } from '../shared/services/neet-data.service';

@Component({
  selector: 'app-neet-status',
  templateUrl: './neet-status.component.html',
  styleUrls: ['./neet-status.component.scss']
})
export class NeetStatusComponent implements OnInit {


  Colleges:any[]=[]
  constructor(private _neetDataService:NeetDataService) { }

  ngOnInit(): void {
    this.GetCollegesByQuery()
  }



  GetCollegesByQuery(){
      this._neetDataService.GetQueryData('1').subscribe((resp)=>{

        return this.Colleges= resp.map((T:any)=>{
        return {name:T.R2.split(":")[1], code:T.R2.split(":")[0]}
        })

      })

  }

}
