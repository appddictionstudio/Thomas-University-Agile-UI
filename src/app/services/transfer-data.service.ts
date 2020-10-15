import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {


  transactionObject: any[] = []

  subject: Subject<any> = new Subject<any>();
  observable: Observable<any> = this.subject.asObservable();
  constructor() { }
}