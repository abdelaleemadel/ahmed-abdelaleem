import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [
    { id: 0, name: 'Finance Landing Page', source: '../../assets/images/Home-mediumScreen.png' },
    { id: 1, name: 'Finance Landing Page', source: '../../assets/images/Home-mediumScreen.png' },
    { id: 2, name: 'Finance Landing Page', source: '../../assets/images/Home-mediumScreen.png' },
    { id: 3, name: 'Finance Landing Page', source: '../../assets/images/Home-mediumScreen.png' }]


}
