import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Airline } from 'src/app/interfaces/airline.model';

@Injectable( {
  providedIn: 'root',
} )
export class ShareDataService {
  rowDetailsSource: BehaviorSubject<Airline> = new BehaviorSubject<Airline>(
    {} as any,
  );

  rowDetails$: Observable<any> = this.rowDetailsSource.asObservable();
  setRowDetails ( item: Airline ) {
    this.rowDetailsSource.next( item );
  }
}
