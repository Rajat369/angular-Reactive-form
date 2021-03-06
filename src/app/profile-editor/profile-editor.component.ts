import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators,FormArray} from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
// profileForm = new FormGroup({
//   firstName: new FormControl(''),
//   lastName: new FormControl(''),
//   address:new FormGroup({
//   street:new FormControl(''),
//   city:new FormControl(''),
//   state:new FormControl(''),
//   zip:new FormControl('')
// })
// });
profileForm=this.fb.group({
firstName:['',Validators.required],
lastName:[''],
address:this.fb.group({
  street:[''],
  city:[''],
  state:[''],
  zip:['']
}),
aliases:this.fb.array([
  this.fb.control('')
])
});

get aliases(){
  return this.profileForm.get('aliases') as FormArray;
}
 
addAlias(){
  this.aliases.push(this.fb.control(''));
}


  updateProfile(){
    this.profileForm.patchValue({
      firstName:'Rajat',
      address:{
       street:'636 Lajpat Nagar'
      }
    });
  }
  onSubmit(){
    console.warn(this.profileForm.value);
  }
  
  
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

}
