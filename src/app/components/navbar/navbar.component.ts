import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private scroller: ViewportScroller) { }
  availWidth: number = 993;
  @Input() isSmall: boolean = false;


  goTo(section: string) {
    this.scroller.scrollToAnchor(section)
  }


}
