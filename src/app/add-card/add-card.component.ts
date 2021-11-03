import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  List_cards : any[] = [];
  List_of_cards : FormGroup;
  Register = false;

  constructor(private fb:FormBuilder) {
    this.List_of_cards = fb.group({
      Headline: ['',Validators.required],
      Card_Number: ['',[Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
      date: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]],
      key: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]]  
    })
   }

  ngOnInit(): void {
  }

  SentData():void{
    this.List_cards.push(this.List_of_cards.value);
    this.Register = true;
    setTimeout(()=>{
      this.Register = false;
    },1500);
    this.List_of_cards.setValue({
      Headline: "",
      Card_Number: "",
      date: "",
      key: ""
    })
  }

  
  actualization(array:any[]):void{
    this.List_of_cards.setValue(array);
    console.log(array)
  }

}
