import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'form-validation',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormValidationComponent {
  complexForm : FormGroup;
  status = 'active';

  constructor(fb: FormBuilder, private router: Router){
  //private searchService: SearchService,

    this.complexForm = fb.group({
      'budget' : [null, Validators.required],
      'transport' : [null, Validators.required],
      'group' : [null, Validators.required],
      'restaurent' : [false],
      'bar' : [false],
      'caffe' : [false],
      'concert' : [false],
      'movie' : [false]
    })
    console.log(this.complexForm);

    this.complexForm.valueChanges.subscribe( (form: any) => {
      console.log('form changed to:', form);
      var x  = 90;
    }
    );
  }

  submitForm(value: any){
    this.status = 'loading';
    this.router.navigate(['/results']);
  }
}
