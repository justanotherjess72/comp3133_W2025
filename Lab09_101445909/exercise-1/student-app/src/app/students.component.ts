import { Component } from '@angular/core';

@Component({
  selector: 'students',
  standalone: true,
  template: `
    <div>
      <h2>{{ getTitle() }}</h2>
      <p>Today's Date: {{ getCurrentDate() }}</p>
    </div>
  `
})
export class StudentsComponent {
  title: string = 'COMP 3133 - Lab 09: Student Component';

  getTitle(): string {
    return this.title;
  }

  getCurrentDate(): string {
    const today = new Date();
    return today.toDateString();
  }
}
