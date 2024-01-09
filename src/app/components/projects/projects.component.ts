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
    { id: 0, name: 'E-Commerce', source: `${this.path}/e-commerce.PNG`, github: `https://github.com/abdelaleemadel/El-Adl-Market`, live: `https://el-adl-market.vercel.app/` },
    { id: 1, name: 'Recipes', source: `${this.path}/recipes.PNG`, github: `https://github.com/abdelaleemadel/recipes`, live: `https://abdelaleemadel.github.io/recipes/` },
    { id: 2, name: 'Free Games', source: `${this.path}/freeGames.png`, github: `https://github.com/abdelaleemadel/freegames`, live: `https://abdelaleemadel.github.io/freegames/` },
  ]
  projects = this.allProjects;

  showProject(url: string | undefined) {
    window.open(url);
  }
}
