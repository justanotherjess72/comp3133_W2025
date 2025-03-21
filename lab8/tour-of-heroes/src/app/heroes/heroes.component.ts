import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { RemoveSpacesPipe } from '../remove-spaces.pipe';// <!-- Added in Exercise 2 -->
import { InputFormatDirective } from '../input-format.directive'; // <!-- Added in Exercise 3 -->

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    RemoveSpacesPipe, // <!-- Added in Exercise 2 -->
    InputFormatDirective, // <!-- Added in Exercise 3 -->
  ],
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
