import { Component, OnInit, Input } from '@angular/core';
import { RetrieveUrlsService } from '../../services/index';


@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.scss']
})
export class UrlListComponent implements OnInit {
  @Input() viewAllLink: boolean = false;
  @Input() resultLimit: number | boolean = false;

  public title: string = 'All URLs';
  public urlList: any;

  constructor(
    private retrieveUrls: RetrieveUrlsService
  ) { }

  ngOnInit(): void {
    this.setTitle();
    this.loadUrlList();
  }

  setTitle(): void {
    if(!!this.viewAllLink)
      this.title = 'Example URLs';
  }

  loadUrlList() {
    this.retrieveUrls.getUrls(this.resultLimit)
      .subscribe(resp => {
          this.urlList = resp;
        })
  }

}
