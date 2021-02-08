import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.scss']
})
export class UrlListComponent implements OnInit {
  @Input() viewAllLink: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.viewAllLink)
  }

}
