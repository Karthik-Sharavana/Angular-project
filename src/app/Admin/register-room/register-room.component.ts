import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-room',
  templateUrl: './register-room.component.html',
  styleUrls: ['./register-room.component.css']
})
export class RegisterRoomComponent implements OnInit {

  pageTitle = "Meeting Application"

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  register():void
  {
    alert("Succesfully registered");
  }

  ngOnInit() {
      this.firstFormGroup = this._formBuilder.group
      ({
        rid: ['', Validators.required],
        rnumber: ['', Validators.required],
        rname: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group
      ({
        bnumber: ['',Validators.required],
        bname: ['',Validators.required],
        sname: ['',Validators.required],
        area: ['',Validators.required],
        lmark: ['',Validators.required],
        pincode: ['',Validators.required],
        selectedValue: ['',Validators.required],
        selectedCar: ['',Validators.required],
      });
      this.thirdFormGroup = this._formBuilder.group
      ({
        hasprojector: [false,Validators.required],
        haswhiteboard: [false,Validators.required],
        hasmarker: [false,Validators.required],
        hasspeakers: [false,Validators.required],
        hastable: [false,Validators.required],
        noofseats: ['',Validators.required]
      });
  }

  // selectedValue: string;
  // selectedCar: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];

}

export interface Food
{
  value: string;
  viewValue: string;
}

export interface Car
{
  value: string;
  viewValue: string;
}