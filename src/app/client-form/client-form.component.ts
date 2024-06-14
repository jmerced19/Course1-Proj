import { Component } from '@angular/core';
import {Client} from '../Client';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})



  export class ClientFormComponent {
    //property setting our FORM to not yet submitted
   
    submitted: boolean = false;
    //property representing an object of Client class
   
    model: Client;
   
    constructor(){
      //let model;
      this.model = new Client(-1, 'John Doe', 'john@doe.com', '123 Main Street', '');
    }
    onSubmit(){
      this.submitted = true;
      console.log(this.model);
    }
    newClient() {
      this.model = new Client(-1,'','','','');
      this.submitted = false;
    }
    


  }
  