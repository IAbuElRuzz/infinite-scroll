import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Airline } from 'src/app/interfaces/airline.model';
import { JsonService } from './json.service';

@Injectable( {
  providedIn: 'root',
} )
export class StoreDataService {
  mainDataSource: BehaviorSubject<Airline[]> = new BehaviorSubject<Airline[]>(
    [],
  );

  dataService$: Observable<any> = this.mainDataSource.asObservable();
  constructor ( private jsonService: JsonService ) {
    this.initDataSource();
  }

  initDataSource (): void {
    this.jsonService.getData().subscribe( {
      next: ( data: Airline[] ) => {
        this.mainDataSource.next( data );
      },
      error: ( err: any ) => {
        console.log( 'Error err ', err );
      },
    } );
  }
}
