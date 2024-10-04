import { LeadingComment } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { Course } from '../../model/curse';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [],
  templateUrl: './curso.component.html',
})
export class CursoComponent {
  @Input()learning!:Course;
}
