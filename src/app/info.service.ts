import { Injectable } from '@angular/core';
import { Info } from "./info";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private log(message: string) {
    //Bir Şey Yapma
  }

  private infosUrl = 'api/infos';

  constructor( private http: HttpClient,
    ) { }

  getInfos(): Observable<Info[]>{
    return this.http.get<Info[]>(this.infosUrl)
  }

  getInfosCategory(category: string): Observable<Info[]>{
    const url = `${this.infosUrl}/?category=^${category}`;
    return this.http.get<Info[]>(url).pipe(
      catchError(this.handleError<Info[]>('getHeroes', []))
    );
  }

  getInfosFromuser(): Observable<Info[]>{
    const url = `${this.infosUrl}/?author=^Kullanıcı`;
    return this.http.get<Info[]>(url).pipe(
      catchError(this.handleError<Info[]>('getHeroes', []))
    );
  }
  addInfo(info: Info): Observable<Info> {
    return this.http.post<Info>(this.infosUrl, info, this.httpOptions).pipe(
      tap((newHero: Info) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Info>('addHero'))
    );
  }

  deleteHero(info: Info | number): Observable<Info> {
    const id = typeof info === 'number' ? info : info.id;
    const url = `${this.infosUrl}/${id}`;
  
    return this.http.delete<Info>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Info>('deleteHero'))
    );
  }

}
