import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.scss']
})
export class UrlListComponent implements OnInit {
  @Input() viewAllLink: boolean = false;
  public title: string = 'All URLs';

  constructor() { }

  ngOnInit(): void {
    this.setTitle();
  }

  setTitle(): void {
    if(!!this.viewAllLink)
      this.title = 'Latest URLs';
  }

}
