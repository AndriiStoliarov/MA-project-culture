import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
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
    {value: 1, viewValue: 'Виставка'},
    {value: 2, viewValue: 'Концерт'},
    {value: 3, viewValue: 'Вистава'},
    {value: 4, viewValue: 'Навчання'},
    {value: 5, viewValue: 'Зустріч'},
    {value: 6, viewValue: 'Свято'},
    {value: 7, viewValue: 'Інше'}
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
      body: new FormControl('',
        [Validators.required]
      ),
      category_id: new FormControl('',
        [Validators.required]
      ),
      starts_at: new FormControl('',
        [Validators.required]
      ),
      location: new FormControl(''),
      requests_attributes: this.fb.array([]),
      image: new FormControl('')
    });
  }

  requests_attributes(): FormArray {
    return this.eventForm.get('requests_attributes') as FormArray;
  }

  newRequirement(): FormControl {
    return new FormControl('');
  }

  addRequirement(): void {
    this.requests_attributes().push(this.newRequirement());
  }

  removeRequirement(i: number): void {
    this.requests_attributes().removeAt(i);
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
    console.log('sending...');

    console.log(this.eventForm.value);

    // tslint:disable-next-line: deprecation
    this.eventService.postData(this.eventForm.value).subscribe(
      (response: any) => {
      console.log('created Event', response);
    });
  }

}
