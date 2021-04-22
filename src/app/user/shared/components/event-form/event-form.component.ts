import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EventService } from '../../services';
import { Category } from '../../types';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  eventForm: any;
  categories: Category[] = [
    {value: 'Exhibition', viewValue: 'Виставка'},
    {value: 'Concert', viewValue: 'Концерт'},
    {value: 'Performance', viewValue: 'Вистава'},
    {value: 'Teaching', viewValue: 'Навчання'},
    {value: 'Meeting', viewValue: 'Зустріч'},
    {value: 'Holiday', viewValue: 'Свято'},
    {value: 'Other', viewValue: 'Інше'}
  ];

  constructor(
    private fb: FormBuilder,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.eventForm = this.fb.group ({
      title: new FormControl('',
        [Validators.required]
      ),
      category: new FormControl('',
        [Validators.required]
      ),
      description: new FormControl('',
        [Validators.required]
      ),
      requirement: new FormControl('',
        [Validators.required]
      ),
      datetime: new FormControl(''),
      place: new FormControl(''),
      file: new FormControl('')
    });
  }

  isControlInvalid(fieldName: string): boolean {
    return (this.eventForm.get(fieldName).invalid
      && (this.eventForm.get(fieldName).dirty
      || this.eventForm.get(fieldName).touched));
  }

  getContolError(controlName: string): string | null {
    const control = this.eventForm.get(controlName);
    if (control.errors.required) {
      return 'Поле не може бути порожнім';
    }
    return null;
  }

  submit(): void {
    if (this.eventForm.invalid) {
      return;
    }

    // tslint:disable-next-line: deprecation
    this.eventService.postData(this.eventForm.value).subscribe(() => {
      console.log('sending...');
    });
  }

  // onSubmit(value): void {
  //   // tslint:disable-next-line: deprecation
  //   this.eventService.postData(value).subscribe(() => {
  //     console.log('sending...');
  //   });
  // }

}
