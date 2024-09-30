import { Injectable } from '@angular/core';
import { Course } from '../model/curse';
import { learnigData } from '../data/learning-data';

@Injectable({
  providedIn: 'root'
})
export class LearningService {
  private learnig:Course = learnigData;
  constructor() { }

  getLearning():Course{
    return this.learnig;
  }
}
