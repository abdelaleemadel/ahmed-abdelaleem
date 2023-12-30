import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.scss']
})
export class ProjectdetailsComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute) { }
  id: any;
  projects = [
    { name: 'E-Commerce', source: `<iframe class="e2e-iframe-trusted-src" width="800" height="450" src="https://www.youtube.com/embed/jnPLFJYV8tg?si=GsdZ3KAQN1xhaRhO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>` },
    { name: 'Finance Landing Page', source: '../../assets/images/Home-mediumScreen.png' },
    { name: 'Finance Landing Page', source: '../../assets/images/Home-mediumScreen.png' },
    { name: 'Finance Landing Page', source: '../../assets/images/Home-mediumScreen.png' }]
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);

    })
  }

}
