import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  path: string = `../../assets/images`
  projects = [
    { id: 0, name: 'E-Commerce', source: `${this.path}/e-commerce.PNG` },
    { id: 1, name: 'Recipes', source: `${this.path}/recipes.PNG` },
    { id: 2, name: 'Free Games', source: `${this.path}/freeGames.png` },
  ]


}
