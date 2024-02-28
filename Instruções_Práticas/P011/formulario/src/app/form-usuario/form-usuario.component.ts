import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrl: './form-usuario.component.css'
})
export class FormUsuarioComponent {
  formUsuario: FormGroup;

  constructor( ) {
    this.formUsuario = new FormGroup({
      'nomeUsuario': new FormControl(null, [Validators.pattern(/^\S{1,12}$/),
                                      ] ),                                
      'senha': new FormControl(null, [Validators.required,
                Validators.minLength(4),
                Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])[a-zA-Z0-9@$!%*#?&]+$/)]),
      'email': new FormControl(null, [Validators.required,
                                      Validators.email]),
      'nome': new FormControl(null,  [Validators.required, 
                Validators.pattern(/^[a-zA-Z]+\s[a-zA-Z]+$/)]),
      'telefone': new FormControl(null,  [Validators.required, 
                Validators.pattern(/^\(?[1-9]{2}\)?[2-9][0-9]{8}$/)]),
      'dataNasc': new FormControl(null,[Validators.required, this.ageValidator.bind(this)]),
      'endereco': new FormControl(null, Validators.required),
      'genero': new FormControl(null, Validators.required),
      
      'profis': new FormControl(null, Validators.required),
      
    });
  }

  ageValidator(control: FormControl): { [s: string]: boolean } | null {
    const dataNascimento = new Date(control.value);
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();
    if (idade < 18 || (idade === 18 && (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())))) {
      return { 'ageInvalid': true };
    }
    return null;
  }

   

  onSubmit() {
    if (this.formUsuario.valid) {
      console.log(this.formUsuario.value);
    }

  }
}
