import { Component, OnInit } from '@angular/core';
import { ContactUsService } from './contactUs.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;
  constructor(
    private contactusService: ContactUsService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      lastName: new FormControl(null, { validators: [Validators.required] }),
      subject: new FormControl(null, {
        validators: [Validators.required],
      })
    });
  }

  send() {
    console.log('buttom');
    this.contactusService.sendEmail().subscribe(res => {
      console.log('senedddf;ajf;o');

    })
  }

}
