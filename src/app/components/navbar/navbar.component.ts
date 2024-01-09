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
  availWidth: number = 993;
  isSmall: boolean = false;
  ngOnInit(): void {
    this.screenWidth();
  }

  screenWidth() {
    this.availWidth = screen.availWidth;
    this.isSmall = !(this.availWidth > 991)
    addEventListener('resize', () => {
      this.availWidth = screen.availWidth;
      this.isSmall = !(this.availWidth > 991)
    })
  }


  goTo(section: string) {
    this.scroller.scrollToAnchor(section)
  }
}
