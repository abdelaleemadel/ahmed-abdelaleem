import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {
  constructor(private scroller: ViewportScroller, private router: Router) { }
  tools = { languages: [`Javascript`, `Typescript`, `CSS`, `HTML`, `Sass`], frameworks: [`Angular`, `Bootstrap`, `JQuery`, `React`] }
  goToProjects() {
    this.scroller.scrollToAnchor('works')
  }
}
