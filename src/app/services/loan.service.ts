import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from '../models/loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient) { }

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>('assets/mock/current-loans.json');
  }
}
