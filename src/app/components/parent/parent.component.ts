import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  textStr:string = "Data shared from parent component to child component"
  parentInput:string="";


  onUpdateText($event:string){
    this.parentInput = $event;
  }

}
