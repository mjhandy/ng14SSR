import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { 
    AbstractControl, 
    FormBuilder, 
    FormControl, 
    FormGroup, 
    Validators 
  } from '@angular/forms';
import Validation from 'src/utils/validation';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @ViewChild("submitButton", { static: false })
  submitButton!: ElementRef;

  private _form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  public get form(): FormGroup {
    return this._form;
  }
  public set form(value: FormGroup) {
    this._form = value;
  }

  submitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
   
    // enable the submit button
    
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  ngAfterViewInit(){
    console.debug('view has initialized');
    this.submitButton.nativeElement.removeAttribute('disabled');
  }

  onSubmit(): void {
    console.debug('form submit');
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));

  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
