import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {
  

  constructor( private _article : ArticleService,
  ) {}

  @Input() infoElement: any;
  @Output() childChange = new EventEmitter<boolean>();
  
  goBack() {
    this.childChange.emit(true);
  }

  deleteItem() {
    this._article.invoice = this._article.invoice.filter((item: any)=>item!==this.infoElement);
    this._article.afterDelete.next(true);
    localStorage.setItem('MyData', JSON.stringify(this._article.invoice));
    this.goBack();
  }

  markAsPaid() {
    this.infoElement.paymentTerms = 'Paid'
    localStorage.setItem('MyData', JSON.stringify(this._article.invoice));
  }

  
  public editItem() {
    // return this.sidenav.open();
}
}
