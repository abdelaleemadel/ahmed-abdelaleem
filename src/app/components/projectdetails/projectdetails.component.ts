import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss']
})
export class ProjectdetailsComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute, private _Router: Router) { }
  id: any;
  path: string = '../../assets/images/recipes';
  source: string[] = [`home`, `details`, `hover`, `categories`];
  project: any = null;
  projects = [
    { name: 'E-Commerce', type: 'video', vsource: `<iframe class="e2e-iframe-trusted-src position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 border-0"  src="https://www.youtube.com/embed/jnPLFJYV8tg?si=GsdZ3KAQN1xhaRhO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, purpose: `Desgin a SaaS tool to visualize and manage coomplex organizations`, description: `The newly founded startup wants to support organizations and teams in the design, control and optimization of their work.\n The tools aims to be an intelligent companion in setting up highly efficient organization structures to tackle overhead and lacks of transparency`, tools: [`angular`, `bootstrap`, `css-3`, 'html-5', `jquery`, `javascript`, `javascript`, `react`, `sass`, `typescript`] },
    { name: 'Recipes', type: 'video', vsource: '<iframe class="e2e-iframe-trusted-src position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 border-0" src="https://www.youtube.com/embed/9oJQrVE8R3k?si=Nn0WSX-4lnxqAmDi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', purpose: `Desgin a SaaS tool to visualize and manage coomplex organizations`, description: `The newly founded startup wants to support organizations and teams in the design, control and optimization of their work.\n The tools aims to be an intelligent companion in setting up highly efficient organization structures to tackle overhead and lacks of transparency`, tools: [`angular`, `bootstrap`, `css-3`, 'html-5', `jquery`, `javascript`, `javascript`, `react`, `sass`, `typescript`] }, { name: 'Free Games ', type: 'img', source: this.source, purpose: `Desgin a SaaS tool to visualize and manage coomplex organizations`, description: `The newly founded startup wants to support organizations and teams in the design, control and optimization of their work.\n\n The tools aims to be an intelligent companion in setting up highly efficient organization structures to tackle overhead and lacks of transparency`, tools: [`angular`, `bootstrap`, `css-3`, 'html-5', `jquery`, `javascript`, `javascript`, `react`, `sass`, `typescript`] }]

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (!Number(this.id) || (Number(this.id) > this.projects.length - 1)) {
        this._Router.navigate(['notfound'])
      } else {
        this.project = this.projects[this.id]
      }
      console.log(Number(this.id));

    })
  }

}
