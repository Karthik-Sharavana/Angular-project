import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-room',
  templateUrl: './register-room.component.html',
  styleUrls: ['./register-room.component.css']
})
export class RegisterRoomComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  register():void
  {
    alert("Succesfully registered");
  }

  ngOnInit() {
      this.firstFormGroup = new FormGroup
      ({
        rid: new FormControl('', [Validators.required]),
        rnumber: new FormControl('', [Validators.required]),
        rname: new FormControl('', [Validators.required]),
      });
      this.secondFormGroup = this._formBuilder.group
      ({
        bnumber: ['',Validators.required],
        bname: ['',Validators.required],
        sname: ['',Validators.required],
        area: ['',Validators.required],
        lmark: ['',Validators.required],
        pincode: ['',Validators.required],
        city: ['',Validators.required],
        state: ['',Validators.required],
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

}
