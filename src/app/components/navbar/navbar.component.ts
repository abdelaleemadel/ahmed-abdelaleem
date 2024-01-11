import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private scroller: ViewportScroller, private _Router: Router) { }
  root: Element | null = null;
  availWidth: number = 993;
  isSmall: boolean = false;
  isDark: boolean = true;
  ngOnInit(): void {
    this.screenWidth();
    /* Select The Root */
    this.root = document.querySelector(':root');
  }
  /* Decide wether the screen isSmall or Large to cancel the closing navbar effect if its large */
  screenWidth() {
    this.availWidth = screen.availWidth;
    this.isSmall = !(this.availWidth > 991)
    addEventListener('resize', () => {
      this.availWidth = screen.availWidth;
      this.isSmall = !(this.availWidth > 991)
    })
  }

  /* Select Root to change toggle mode between light/dark */
  changeMode() {
    this.isDark = !this.isDark;
    this.root?.classList.toggle('light')
  }

  goTo(section: string) {
    this.scroller.scrollToAnchor(section)
  }
}
