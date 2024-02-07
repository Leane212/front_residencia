import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estacao',
  templateUrl: './estacao.component.html',
  styleUrl: './estacao.component.css'
})
export class EstacaoComponent {
  exemploForm: FormGroup;

  
  constructor() { 
    this.exemploForm = new FormGroup({
      'nome': new FormControl(null, Validators.required ),
      'email': new FormControl(null,  [Validators.required, 
                                        Validators.email]),
      'localizacao': new FormControl(null, Validators.required),
      'status': new FormControl(null, Validators.required),
      
    });
  }
    onSubmit(){
      console.log(this.exemploForm);
      console.log(this.exemploForm.value);
    }

    Validator(control: AbstractControl): 
    { [key: string]: boolean } | null {
      
      const value = control.value;
      if (value == '') {
        return { 'invalidNome': true };
      }
      return null;
    }
}
