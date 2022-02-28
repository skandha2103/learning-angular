import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private dataService:DataService) { }
  child2Str:string="";

  ngOnInit(): void {
    this.dataService.getString()
    .subscribe(inputStr=>{
      this.child2Str = inputStr;
    });
  }

}
