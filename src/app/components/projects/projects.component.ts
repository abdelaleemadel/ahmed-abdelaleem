import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnChanges {
  @Input() id: Number | null = null;

  path: string = `../../assets/images`;
  ngOnChanges({ id }: SimpleChanges): void {

    if (!isNaN(Number(id['currentValue']))) {
      this.id = id['currentValue'];
      this.projects = this.allProjects.filter(project => project.id != this.id)
    }


  }
  allProjects = [
    { id: 0, name: 'E-Commerce', source: `${this.path}/e-commerce.PNG` },
    { id: 1, name: 'Recipes', source: `${this.path}/recipes.PNG` },
    { id: 2, name: 'Free Games', source: `${this.path}/freeGames.png` },
  ]
  projects = this.allProjects;

}
