import { Component } from '@angular/core';
import { Course } from '../model/course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses: Course[] = [
    { _id: '1', name: 'Js', category: 'Front' }
  ];

  displayedColumns: string[] = ['name', 'category'];
  constructor() { }


}
