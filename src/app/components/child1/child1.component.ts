import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private dataService:DataService) { }
  @Input() text:string = "";
  @Output() updateText = new EventEmitter<string>()
  child1Input:string = "";

  ngOnInit(): void {
  }

  onChildInputChange(){
    this.updateText.emit(this.child1Input)
    this.dataService.setString(this.child1Input)
  }

}
