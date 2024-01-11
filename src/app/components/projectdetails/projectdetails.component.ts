import { Component, ElementRef, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// @ts-ignore
import ScrollOut from 'scroll-out';


@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss']
})
export class ProjectdetailsComponent implements OnInit, AfterContentInit, OnDestroy {
  constructor(private _ActivatedRoute: ActivatedRoute, private _Router: Router, private el: ElementRef) { }
  scroll: any;

  id: any;
  path: string = '../../assets/images/recipes';
  source: string[] = [`home`, `details`, `hover`, `categories`];
  project: any = null;
  projects = [
    { name: 'E-Commerce', type: 'video', vsource: `<iframe class="e2e-iframe-trusted-src position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 border-0"  src="https://www.youtube.com/embed/jnPLFJYV8tg?si=GsdZ3KAQN1xhaRhO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, purpose: `El-Adl Market: A modern e-commerce web application that offers you a wide range of products at affordable prices and high quality`, description: `El-Adl Market is an e-commerce web application that allows users to purchase products online. Users can browse different products and filter them by price and rating. The application was built using Angular, Node.js, MongoDB, and Bootstrap. It also uses an application programming interface (API) to fetch various data.`, tools: { languages: [`Typescript`, `CSS`, `HTML`], frameworks: [`Angular`, `Bootstrap`, `JQuery`] }, github: `https://github.com/abdelaleemadel/El-Adl-Market`, live: `https://el-adl-market.vercel.app/` },

    { name: 'Recipes', type: 'video', vsource: '<iframe class="e2e-iframe-trusted-src position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 border-0" src="https://www.youtube.com/embed/9oJQrVE8R3k?si=Nn0WSX-4lnxqAmDi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', purpose: `Recipes: Your online destination for finding and sharing delectable dishes from around the world`, description: `Recipes is a web application that allows users to browse and share recipes online. Users can search for recipes by name, ingredient, or category, and view the recipe details including the ingredients, instructions, and nutritional information. The application is built with JavaScript, Bootstrap, and jQuery. It also uses API to get the recipe data.`, tools: { languages: [`Javascript`, `CSS`, `HTML`], frameworks: [`Bootstrap`, `JQuery`] }, github: `https://github.com/abdelaleemadel/recipes`, live: `https://abdelaleemadel.github.io/recipes/` },

    { name: 'Free Games ', type: 'img', source: this.source, purpose: `Free Games: Your online source for playing and discovering awesome games for free.`, description: `Free Games is a web application that allows users to play various games online for free. Users can choose from different genres and categories of games, and enjoy the fun and challenge of gaming. The application was built using HTML, CSS, JavaScript, and Bootstrap. It also uses an API to fetch the game data from a third-party source.`, tools: { languages: [`Javascript`, `CSS`, `HTML`], frameworks: [`Bootstrap`, `JQuery`] }, github: `https://github.com/abdelaleemadel/freegames`, live: `https://abdelaleemadel.github.io/freegames/` }]

  ngOnInit(): void {

    this.displaySpecificProject();

  }
  ngAfterContentInit(): void {
    this.scroll = ScrollOut({
      onShown(el: any) {
        el.classList.remove("animate__fadeOut");
        el.classList.add("animate__fadeInUp");
      },
      onHidden(el: any) {
        el.classList.add("animate__fadeOut")
      }
    });
  }

  showProject(url: string | undefined) {
    window.open(url);
  }

  displaySpecificProject() {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      if (isNaN(this.id) || (this.id > this.projects.length - 1) || this.id < 0) {
        this._Router.navigate(['notfound'])
      } else {
        this.project = this.projects[this.id];
        this.scrollToTopFunction()
      }
    })
  }

  /* When navigating between projects in project details */
  scrollToTopFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  /* Destroy scroll out */
  ngOnDestroy(): void {
/*     this.scroll.tearDown()
 */  }
}
