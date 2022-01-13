import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  name = new FormControl('');
  class= new FormControl('');
  roll= new FormControl('');
  mark1= new FormControl('');
  updateName() {
    
  }
}