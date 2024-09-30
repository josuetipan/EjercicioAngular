import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/curse';
import { LearningService } from '../../service/learning.service';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [],
  templateUrl: './learning.component.html',
})
export class LearningComponent implements OnInit{
    learning!:Course;
    constructor(private service:LearningService){}
  ngOnInit(): void {
    this.learning=this.service.getLearning();
  }
}
