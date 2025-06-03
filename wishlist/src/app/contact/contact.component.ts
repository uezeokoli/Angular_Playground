import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    
  }

  senderNameControl = new FormControl('');
  senderEmailControl = new FormControl('');
  senderMessageControl = new FormControl('')

  submitForm(){
    if(this.senderNameControl.dirty){
      alert('you changed the name field');
    }
  }

}
