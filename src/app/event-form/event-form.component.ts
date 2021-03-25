import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  eventTitle: string;
  eventCategory: string;
  eventRequirement: string;

  categoriesList = ['Виставка', 'Концерт', 'Вистава', 'Навчання', 'Зустріч', 'Свято', 'Інше'];

  eventForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    requirement: new FormControl('', [Validators.required]),
    date: new FormControl(''),
    time: new FormControl(''),
    place: new FormControl(''),
    file: new FormControl('')
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onResetClick(): void {
    this.eventForm.reset();
  }

}
