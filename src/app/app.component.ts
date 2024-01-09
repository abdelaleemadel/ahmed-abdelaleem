import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ahmedabdelaleem';
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


}
