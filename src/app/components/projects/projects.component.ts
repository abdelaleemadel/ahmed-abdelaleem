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
    { id: 0, name: 'The Wild Oasis', source: `${this.path}/two.png`, github: 'https://github.com/abdelaleemadel/the-wild-oasis', live: 'https://the-wild-oasis-pi-topaz.vercel.app/', ready: true },
    { id: 1, name: 'Fast React Pizza', source: `${this.path}/frp.png`, github: 'https://github.com/abdelaleemadel/fast-react-pizza', live: 'https://fast-react-pizza-sigma-azure.vercel.app/', ready: true },
    { id: 2, name: 'WorldWise', source: `${this.path}/worldwise.png`, github: 'https://github.com/abdelaleemadel/WorldWise', live: 'https://world-wise-eta-seven.vercel.app/', ready: true },
    { id: 3, name: 'React Quiz', source: `${this.path}/react-quiz.png`, github: `https://github.com/abdelaleemadel/React-Quiz`, live: `https://react-quiz-five-iota.vercel.app/`, ready: true },
    { id: 4, name: 'E-Commerce', source: `${this.path}/e-commerce.PNG`, ready: true, github: `https://github.com/abdelaleemadel/El-Adl-Market`, live: `https://el-adl-market.vercel.app/` },
    { id: 5, name: 'Recipes', source: `${this.path}/recipes.PNG`, ready: true, github: `https://github.com/abdelaleemadel/recipes`, live: `https://abdelaleemadel.github.io/recipes/` },
    { id: 6, name: 'Free Games', source: `${this.path}/freeGames.png`, ready: true, github: `https://github.com/abdelaleemadel/freegames`, live: `https://abdelaleemadel.github.io/freegames/` },
    { id: 7, name: 'Football Players', source: `${this.path}/football.PNG`, github: '', live: '', ready: false }

  ]
  projects = this.allProjects;


}
