import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ElementRef, AfterContentInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import ScrollOut from 'scroll-out';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements AfterContentInit, OnDestroy {
  scroll: any;

  constructor(private scroller: ViewportScroller, private router: Router, private el: ElementRef) {
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


  tools = { languages: [`Javascript`, `Typescript`, `CSS`, `HTML`, `Sass`], frameworks: [`Angular`, `Bootstrap`, `JQuery`, `React`] }
  goTo(section: string) {
    this.scroller.scrollToAnchor(section)
  }



  /* Destroy scroll out */
  ngOnDestroy(): void {
/*     this.scroll.tearDown()
 */  }

}

/* Depracted Code for Showing on Scrolling */
/*  */
/*  windowBottom: number = 0;
  newsOffset: number = 0;
  homeProjectsOffset: number = 0;
  homeSkillsOffset: number = 0;
  displayedSections: any[] = [];
  projectHeight: number = 0; */

/* this.setWindowBottom();
    setTimeout(() => {
      this.projectHeight = $('.projectsComponent').height();
    }, 100)
    this.setSectionsOffsets();
    this.changeDisplay();

    this.didYouScroll();

   this.changeOffsetsWhenResizing(); */ /* RESIZE EVENT */
/* didYouScroll() {
  $(window).on("scroll", () => {
    this.setWindowBottom()
    this.changeDisplay();
    console.log(this.windowBottom, `news: ${this.newsOffset}, projects: ${this.homeProjectsOffset}, skills: ${this.projectHeight} `);

  });
} */

/* ReCalculate section offsets when resizing */
/* changeOffsetsWhenResizing() {
  $(window).resize(() => {
    this.setWindowBottom();
    this.setSectionsOffsets();
    this.changeDisplay();
  })
} */

/* Get main sections offset */
/* setSectionsOffsets() {
  this.newsOffset = $('#homeNews').offset().top;
  this.homeProjectsOffset = $('#homeProjects').offset().top;
  this.homeSkillsOffset = $('#homeSkills').offset().top;

} */

/*   */
/*  setWindowBottom() {
  const top = $(window).scrollTop();
  const windowHeight = $(window).height();
  this.windowBottom = top + windowHeight;
} */


/* Calculate which sections are above the user is  */
/* onScreenSections(): any[] {
 let displayedSections: any[] = [];
 if (this.windowBottom > this.homeSkillsOffset + this.projectHeight) {
   displayedSections = ['homeNews', 'homeProjects', `homeSkills`];
 } else if (this.windowBottom > this.homeProjectsOffset) {
   displayedSections = ['homeNews', 'homeProjects'];
 } else if (this.windowBottom > this.newsOffset) {
   displayedSections = ['homeNews']
 } else {
   displayedSections = []
 }
 return displayedSections
} */

/*   displaySections(section: string) {
    let targetSection = $(`#${section}`);

    console.log(`DISPLAY section: ${section}, Opacity: ${targetSection.css('opacity')}`);
    targetSection.removeClass('animate__fadeOut');
    targetSection.addClass('animate__fadeInUp')

  }
 */

/* toHideSections */
/*  hideSections(section: string) {
   let targetSection = $(`#${section}`);
   console.log(`HIDE section: ${section}, Opacity: ${targetSection.css('opacity')}`);
   targetSection.addClass('animate__fadeOut');
   targetSection.removeClass('animate__fadeInUp');
 } */



/* did the onScreenSections change?? */
/* changeDisplay() {
  console.log(`Change Display function called`);

  let currentOnScreenSections = this.onScreenSections();
  const currentOnScreenSectionsString = currentOnScreenSections.toString();
  const displayedSectionsString = this.displayedSections.toString();
  console.log(`OnScreen: ${currentOnScreenSections}, displayed: ${displayedSectionsString}`);
  if (currentOnScreenSectionsString == displayedSectionsString) return;


  currentOnScreenSections.forEach(section => {

    displayedSectionsString.includes(section) ? '' : this.displaySections(section)
  });

  this.displayedSections.forEach(section => {


    currentOnScreenSectionsString.includes(section) ? '' : this.hideSections(section);

  })

  this.displayedSections = currentOnScreenSections;

} */
