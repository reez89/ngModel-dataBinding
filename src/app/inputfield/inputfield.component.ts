import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.css'],
})
export class InputfieldComponent implements OnInit {
  updateName = '';
  constructor() {}

  ngOnInit(): void {}

  resetName() {
    this.updateName = '';
  }
}
