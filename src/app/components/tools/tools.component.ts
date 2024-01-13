import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnChanges {
  @Input() tools: { languages: string[], frameworks: string[] } | null = null;
  languages: boolean = true;

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
