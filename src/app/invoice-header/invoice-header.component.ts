import { _isTestEnvironment } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-invoice-header',
  templateUrl: './invoice-header.component.html',
  styleUrls: ['./invoice-header.component.scss']
})
export class InvoiceHeaderComponent implements OnInit {
  showFiller = false;
  invoiceForm: FormGroup;
  showErrorMessage = false;
  saveddata : number = 0;
  
  constructor( private _article : ArticleService,
    private fb: FormBuilder,
  ) {
    this.invoiceForm = this.fb.group({
      id : 'EE5555',
      invoiceDetails: this.fb.group({
        street:   ['', Validators.required],
        city:     ['', Validators.required],
        postcode: ['', Validators.required],
        country:  ['', Validators.required],
      }),
      clientName:  ['', Validators.required],
      clientEmail: ['', [Validators.required, Validators.email]],
      clientAddress: this.fb.group({
        street:   ['', Validators.required],
        city:     ['', Validators.required],
        postcode: ['', Validators.required],
        country:  ['', Validators.required],
      }),
      invoiceDate:   ['', Validators.required],
      paymentTerms: [30, [Validators.required, Validators.min(0)]],
      description:  ['', [Validators.required, Validators.min(0)]],
      items: this.fb.group({
        itemName: ['', Validators.required],
        qty: ['', [Validators.required, Validators.min(1)]],
        price: ['', [Validators.required, Validators.min(0)]],
        total: [''],
      }),
      
    });
  }

  ngOnInit() {
    this.saveddata = this._article.invoice.length;
    this._article.afterDelete.subscribe((data)=>{
      if(data) {
        this.saveddata = this._article.invoice.length;
      }
    })
  }
  onSubmit() {
    this.showErrorMessage = this.invoiceForm.invalid;
    if(!this.showErrorMessage) {
      let value : any = this.invoiceForm.value;
      // this.invoice.push(value);
      this._article.invoice.push(value);
      this.saveddata = this._article.invoice.length;
      this.invoiceForm.reset();
      localStorage.setItem('MyData', JSON.stringify(this._article.invoice));
    }
  }
}
