import { Injectable } from '@angular/core';

//import { HttpClient, HttpHeaders } from '@angular/common/http';
   
//import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ville } from '../models/ville';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class VilleservService {


  private apiURL = "http://localhost:50017";
     
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
     
  getAll(): Observable<any[]> {

    return this.httpClient.get<any[]>(this.apiURL + '/getVille')

    .pipe(
      catchError(this.errorHandler)
    )
  }
     
  create(post:Ville): void {
     this.httpClient.post(this.apiURL + '/addVille', JSON.stringify(post), this.httpOptions)
    //.pipe(
     // catchError(this.errorHandler)
    //)
  }  
     
 // find(id:number): Observable<any[]> {
   // return this.httpClient.get(this.apiURL + '/posts/' + id)
   // .pipe(
     // catchError(this.errorHandler)
    //)
  //}

 // getProducts(): Observable<any[]> {
   // return this.http.get<any[]>(apiUrl)
     // .pipe(
       // tap(product => console.log('fetched products')),
        //catchError(this.handleError('getProducts', []))
      //);
  //}
     
 // update(id:number, post:Ville): Observable<any[]>
  //{

  //  return this.httpClient.put(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)

   // .pipe(
     // catchError(this.errorHandler)
    //)
  //}
     
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/posts/' + id, this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }
    
    
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
 
}
