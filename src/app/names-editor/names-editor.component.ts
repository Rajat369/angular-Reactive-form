import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-names-editor',
  templateUrl: './names-editor.component.html',
  styleUrls: ['./names-editor.component.css']
})
export class NamesEditorComponent implements OnInit {
   name=new FormControl('');

   updateName(){
     this.name.setValue('Nancy');
   }
  constructor() { }

  ngOnInit() {
  }

}
