import { Component, inject } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Meeting } from '../meetings';

@Component({
  selector: 'app-meeting-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './meeting-form.component.html',
  styleUrl: './meeting-form.component.css'
})

export class MeetingComponent {
  //properties or fields
  submitted: boolean = false;

  model: Meeting;

  
//////METHODS//////

  constructor(){
    
    this.model = new Meeting('Client meeting', 3,  new Date);
  }


  onSubmit(){
   
    console.log(this.model);
    this.submitted = true;
    //this.model = new Meeting('Client meeting', 3,  new Date);
    //this.submitted = false; // Reset submitted flag

  } 

  newMeeting() {
    this.model = new Meeting('',0, new Date);
    this.submitted = false;
  }

   
}
