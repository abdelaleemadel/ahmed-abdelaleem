import { Component, ElementRef, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// @ts-ignore
import ScrollOut from 'scroll-out';


@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss']
})
export class ProjectdetailsComponent implements OnInit, AfterContentInit {
  constructor(private _ActivatedRoute: ActivatedRoute, private _Router: Router, private el: ElementRef) { }
  scroll: any;
  id: any;
  path: string = '../../assets/images/details';
  source: string[] = [`home`, `details`, `hover`, `categories`];
  project: any = null;

  projects = [
    {
      name: 'The Wild Oasis', type: 'img', source: ['two/home-light', 'two/bookings', 'two/booking-detail', 'two/cabins', 'two/new-cabin', 'two/new-cabin', 'two/new-user', 'two/account', 'two/settings'

      ], purpose: `The Wild Oasis - Hotel Management Application`, description: `A comprehensive hotel management web application that allows hotel employees to manage cabins, bookings, and guests. Employees can create, update, and delete cabin records, handle guest check-ins and check-outs, and view booking statuses. The application also features a dashboard with visual statistics on bookings and sales, and supports dark mode for a personalized user experience.`, tools: { languages: [`Javascript`, `CSS`, `HTML`], frameworks: [`React`, `React Query`, `Styled Components`] }, github: `https://github.com/abdelaleemadel/fast-react-pizza`, live: `https://fast-react-pizza-sigma-azure.vercel.app/`
    },
    {
      name: 'Fast React Pizza', type: 'img', source: ['frp/menu', 'frp/cart', 'frp/checkout', 'frp/order', 'frp/priorty',

      ], purpose: `Fast React Pizza: Order Your Pizza Now!`, description: `Fast React Pizza is a feature-rich web application built with React. It offers users an intuitive interface to browse a variety of pizzas, customize their orders, and track their order status in real-time.

      The application leverages React Router for seamless navigation and the Redux for efficient state management. With a focus on responsive design, Fast React Pizza ensures a smooth user experience across both desktop and mobile devices.This project highlights modern web development practices and provides a solid foundation for building scalable and maintainable React applications.`, tools: { languages: [`Javascript`, `CSS`, `HTML`], frameworks: [`React`, `Redux`, `Tailwind`] }, github: `https://github.com/abdelaleemadel/fast-react-pizza`, live: `https://fast-react-pizza-sigma-azure.vercel.app/`
    },
    {
      name: 'WorldWise', type: 'img', source: ['worldwise/home', 'worldwise/login', 'worldwise/cities', 'worldwise/addCity', 'worldwise/cityDetails', 'worldwise/pricing', 'worldwise/product'], purpose: `WorldWise: Track Your Global Adventures!`, description: `Embark on a journey with WorldWise, your personal travel diary designed to log and cherish your trips around the globe. Whether you’re exploring new destinations or revisiting beloved places, WorldWise lets you effortlessly record details about each country you visit. Add countries by typing their names, selecting them on an interactive map, or using your current location. Capture the date, time, and personal notes for every trip, creating a rich tapestry of your travel experiences.

      Built as part of the Ultimate React Course, this project showcases my skills in using Supabase for data storage, implementing a fake login system for practicing protected routes, managing state with React Context, and navigating with React Router. Dive into WorldWise and start documenting your adventures today!`, tools: { languages: [`Javascript`, `CSS`, `HTML`], frameworks: [`React`] }, github: `https://github.com/abdelaleemadel/WorldWise`, live: `https://world-wise-eta-seven.vercel.app/`
    },
    { name: 'React Quiz', type: 'img', source: ['hoverAnswer', 'answered', 'wrongAnswer', 'score'], purpose: `React Quiz: This Quiz features 15 questions designed to test your knowledge of React concepts.`, description: `React Quiz is a fun and interactive quiz application built with React. The app showcases the use of the useReducer hook, providing a practical example of its implementation. Based on “The Ultimate React Course 2024” by Jonas Schmedtmann, this project highlights my skills in React development and my ability to create engaging user interfaces. The application was built using React, JSX, CSS, JavaScript.`, tools: { languages: [`Javascript`, `CSS`, `HTML`], frameworks: [`React`] }, github: `https://github.com/abdelaleemadel/React-Quiz`, live: `https://react-quiz-five-iota.vercel.app/` },

    { name: 'E-Commerce', type: 'video', vsource: `<iframe class="e2e-iframe-trusted-src position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 border-0"  src="https://www.youtube.com/embed/jnPLFJYV8tg?si=GsdZ3KAQN1xhaRhO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`, purpose: `El-Adl Market: A modern e-commerce web application that offers you a wide range of products at affordable prices and high quality`, description: `El-Adl Market is an e-commerce web application that allows users to purchase products online. Users can browse different products and filter them by price and rating. The application was built using Angular, Node.js, MongoDB, and Bootstrap. It also uses an application programming interface (API) to fetch various data.`, tools: { languages: [`Typescript`, `CSS`, `HTML`], frameworks: [`Angular`, `Bootstrap`, `JQuery`] }, github: `https://github.com/abdelaleemadel/El-Adl-Market`, live: `https://el-adl-market.vercel.app/` },

    { name: 'Recipes', type: 'video', vsource: '<iframe class="e2e-iframe-trusted-src position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 border-0" src="https://www.youtube.com/embed/9oJQrVE8R3k?si=Nn0WSX-4lnxqAmDi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', purpose: `Recipes: Your online destination for finding and sharing delectable dishes from around the world`, description: `Recipes is a web application that allows users to browse and share recipes online. Users can search for recipes by name, ingredient, or category, and view the recipe details including the ingredients, instructions, and nutritional information. The application is built with JavaScript, Bootstrap, and jQuery. It also uses API to get the recipe data.`, tools: { languages: [`Javascript`, `CSS`, `HTML`], frameworks: [`Bootstrap`, `JQuery`] }, github: `https://github.com/abdelaleemadel/recipes`, live: `https://abdelaleemadel.github.io/recipes/` },

    { name: 'Free Games ', type: 'img', source: this.source, purpose: `Free Games: Your online source for playing and discovering awesome games for free.`, description: `Free Games is a web application that allows users to play various games online for free. Users can choose from different genres and categories of games, and enjoy the fun and challenge of gaming. The application was built using HTML, CSS, JavaScript, and Bootstrap. It also uses an API to fetch the game data from a third-party source.`, tools: { languages: [`Javascript`, `CSS`, `HTML`], frameworks: [`Bootstrap`, `JQuery`] }, github: `https://github.com/abdelaleemadel/freegames`, live: `https://abdelaleemadel.github.io/freegames/` },





  ]

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


}
