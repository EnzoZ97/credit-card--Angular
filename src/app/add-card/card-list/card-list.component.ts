import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() List : any[] = [];
  Card : any[] = [];
  @Output() CardUpdate = new EventEmitter<any[]>();
  Remove = false;
  actualization = false;
  constructor() { }

  ngOnInit(): void {
  }

  removeCard(index:number):void{
    this.List.splice(index,1);
    this.Remove = true;
    setTimeout(()=>{
      this.Remove = false;
    },1500);
  }

  EditCard(index:number):void{
    this.Card = this.List
    this.CardUpdate.emit(this.Card[index]);
    this.List.splice(index,1);
    this.actualization = true;
    setTimeout(()=>{
      this.actualization = false;
    },1500);
  }



}
