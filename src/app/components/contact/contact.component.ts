import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private _HttpClient: HttpClient) { }
  statusMessage: string = '';
  failureMessage: string = '';
  successMessage: string = "Thanks for your submission!";
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null, [Validators.required])
  });

  contact(contactForm: FormGroup): void {
    if (contactForm.status === 'VALID') {
      try {
        this.handleContact(contactForm.value).subscribe({
          next: response => {
            this.statusMessage = 'success';
            contactForm.reset();
          },
          error: err => {
            this.statusMessage = 'fail';
            if (Object.hasOwn(err.error, 'errors')) {
              this.failureMessage = err.error["errors"].map((error: { message: any; }) => error.message).join(", ")

            } else {
              this.failureMessage = "Oops! There was a problem submitting your form"
            }
          }
        })
      } catch (error) {
        this.statusMessage = 'fail';
        this.failureMessage = "Oops! There was a problem submitting your form"
      }
    } else {
      this.statusMessage = 'fail';
      this.failureMessage = "Oops! This Form is not Valid"
    }


  }



  handleContact(contactForm: any): Observable<any> {
    return this._HttpClient.post(`https://formspree.io/f/xwkgkpdz`, contactForm)
  }

}
