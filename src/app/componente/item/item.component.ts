import { Component, Input } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'tr[app-item]',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
})
export class ItemComponent {
  @Input()item!:Student;
}
