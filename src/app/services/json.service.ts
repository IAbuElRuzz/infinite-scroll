import {
  JsonpClientBackend,
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Airline } from 'src/app/interfaces/airline.model';

@Injectable( {
  providedIn: 'root',
} )

/**
 * Kayak Http service
 * Utility Methods to handle http
 * requests via Kayak Api
 */
export class JsonService {
  private kayakEndpointUrl = environment.JSON_DATA_URL;

  constructor ( private httpClient: HttpClient ) {}

  /**
   * Get all Airlines from Kayak URL
   * @return An `Observable` containing an Array of Airlines
   */
  getData (): Observable<Airline[]> {
    return this.httpClient
      .jsonp<Airline[]>( `${ this.kayakEndpointUrl }`, 'jsonp' )
      .pipe(
        map( ( response: Airline[] ) => response ),
        catchError( this.handleError ),
      );
  }

  /**
   * Get HttpError Responses
   * @param error from HttpClient
   * @return An `Error Message` of Http Client Request
   *
   */
  handleError ( error: HttpErrorResponse ) {
    let errorMessage = '';

    if ( error.error instanceof ErrorEvent ) {
      // Client Side error
      errorMessage = `Error: ${ error.error.message }`;
    } else {
      // Server Side error
      errorMessage = `Error Code: ${ error.status }\nMessage: ${ error.message }`;
    }

    // console.log(errorMessage);
    return throwError( () => errorMessage );
  }
}
