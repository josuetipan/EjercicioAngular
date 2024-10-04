import { Component, Input } from '@angular/core';
import { Student } from '../../model/student';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './estudiantes.component.html',
})
export class EstudiantesComponent {
  @Input()student!:Student[];
}
