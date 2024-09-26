import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import ScrollOut from 'scroll-out';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements AfterContentInit {
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


  tools = { languages: [`Javascript`, `Typescript`, `CSS`, `HTML`, `Sass`], frameworks: [`React`, `Redux`, `React Query`, `Tailwind`, `Angular`, `Bootstrap`, `JQuery`,] }
  goTo(section: string) {
    this.scroller.scrollToAnchor(section)
  }




}

