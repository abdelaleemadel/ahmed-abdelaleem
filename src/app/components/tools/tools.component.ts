import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnChanges, OnInit {
  @Input() tools: { languages: string[], frameworks: string[] } | null = null;
  languages: boolean = true;
  ngOnInit(): void {
    console.log(this.shownTools);
  }
  shownTools: string[] = ['null'];
  path: string = `../../../assets/images/`

  ngOnChanges(tools: SimpleChanges): void {
    if (this.tools) {
      this.shownTools = this.tools?.languages;
    }
  }

  showFrameworks(): void {
    if (this.tools) {
      this.shownTools = this.tools?.frameworks;
      this.languages = false;
    }
  }
  showLanguages(): void {
    if (this.tools) {
      this.shownTools = this.tools?.languages;
      this.languages = true;
    }
  }
}
