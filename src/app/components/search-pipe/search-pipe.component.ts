import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-pipe',
  templateUrl: './search-pipe.component.html',
  styleUrls: ['./search-pipe.component.css']
})
export class SearchPipeComponent implements OnInit {

  constructor() { }
  date:Date=new Date();
  price:number=123;
  title:string="welcome to angular";
  nameList:Array<string> = ['Pavan','Meena','Mitesh','Vijay']
  searchStr:string="";

  ngOnInit(): void {
  }

}
