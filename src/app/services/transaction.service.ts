import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  createTransaction(appName: string, ob: Object) {
    return this.http.post<any>(environment.transactionUrl + "transactions/create-cad-transaction?appName=" + appName, ob);
  }
}
