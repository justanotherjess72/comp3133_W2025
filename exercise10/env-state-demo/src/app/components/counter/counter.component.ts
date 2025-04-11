import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../../state/counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter$;

  constructor(private counterService: CounterService) {
    this.counter$ = this.counterService.counter$;
  }

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }
}
