import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  exemploForm: FormGroup;

  
  constructor() { 
    this.exemploForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      
      'senha': new FormControl(null),
      
    });
  }
    onSubmit(){
      console.log(this.exemploForm);
      console.log(this.exemploForm.value);
    }
}


