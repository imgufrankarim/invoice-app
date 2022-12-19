import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  constructor( private _article : ArticleService,  ) {}
  showGrid : boolean = true;
  infoElement : any = {};
  invoice: any = [];

  ngOnInit() {
      this.invoice = this._article.invoice;
  }



  showInfo(item:any) {
      this.infoElement = item;
      this.showGrid = false;
  }

  parentEventHandlerFunction(event:boolean) {
    if(event) {
      this.showGrid = true;
      this.invoice = this._article.invoice;
    }
  }
}
