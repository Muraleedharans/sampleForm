import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
 
  profileForm = new FormGroup({
    name : new FormControl(''),
    class : new FormControl(''),
    roll : new FormControl(''),
    mark1 : new FormControl(''),
});
  onSubmit() {
      var student={};
      student = this.profileForm.value;
      const p = document.createElement("p");
      p.textContent = JSON.stringify(student);
      document.body.appendChild(p);
  }

}