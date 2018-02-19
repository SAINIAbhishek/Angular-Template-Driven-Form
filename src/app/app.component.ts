import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Driven Form';
  @ViewChild('localRefForm') templateForm: NgForm;
  message = '';
  genders = ['Male', 'Female']; //array for radio button
  userDetail = {
    username: '',
    email: '',
    password: '',
    gender: '',
    message: ''
  };
  formSubmitted = false;

  onSubmit(){
    this.formSubmitted = true;
    this.userDetail.username = this.templateForm.value.username;
    this.userDetail.email = this.templateForm.value.email;
    this.userDetail.password = this.templateForm.value.password;
    this.userDetail.message = this.templateForm.value.message;
    this.userDetail.gender = this.templateForm.value.gender;
    this.templateForm.reset();
  }

  onReset(){
    this.templateForm.reset(); //to reset the form
  }

}
