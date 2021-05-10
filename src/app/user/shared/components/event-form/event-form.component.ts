import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../../../shared/types';
import { EventService } from '../../services';
import { Category } from '../../types';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  eventForm: any;
  image: string | ArrayBuffer = '';
  categories: Category[] = [
    {id: 1, name: 'Виставка'},
    {id: 2, name: 'Концерт'},
    {id: 3, name: 'Вистава'},
    {id: 4, name: 'Навчання'},
    {id: 5, name: 'Зустріч'},
    {id: 6, name: 'Свято'},
    {id: 7, name: 'Інше'}
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
      image: this.fb.group ({
        data: new FormControl('')
      })
    });
  }

  requests_attributes(): FormArray {
    return this.eventForm.get('requests_attributes') as FormArray;
  }

  newRequirement(): FormGroup {
    return new FormGroup ({
      description: new FormControl('')
    });
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

  onFileSelected(event): void {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.eventForm
        .get('image')
        .get('data')
        .patchValue(reader.result);
    };
  }

  submit(): void {
    if (this.eventForm.invalid) {
      return;
    }
    console.log('sending...');

    console.log(this.eventForm.value);

    // tslint:disable-next-line: deprecation
    this.eventService.postData(this.eventForm.value).subscribe(
      (response: Post) => {
      console.log('created Event', response);
    });
  }

}
