import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.scss']
})
export class Contact2Component implements OnInit {

  myReactiveForm: any;
  gender =[
    {
      id:1,
      genderType:'Female'
    },
    {
      id:2,
      genderType:'Female'
    },
  ];

  constructor(
  ) { }

  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      'user name':new FormControl('hello'),
      'email': new FormControl('null'),
      'course':new FormControl('null'),
      'gender':new FormControl('Female')

    });
  }
  onSubmit(){
    console.log(this.myReactiveForm)
  }

}
