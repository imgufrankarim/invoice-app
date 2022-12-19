import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  savedData : any = [];
  invoice : any = []

  public afterDelete: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  constructor() { 
    this.savedData = JSON.parse(localStorage.getItem('MyData') || '{}');
    console.log(this.savedData)
    this.invoice  = this.savedData.length==0?[]: this.savedData;
  }
  
  
}
