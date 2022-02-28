import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IAlbum } from '../models/album';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  private subject = new Subject<any>();
  album_url:string='https://jsonplaceholder.typicode.com/albums';

  getString(): Observable<any>{
    return this.subject.asObservable();
  }

  setString(inputText:string){
    this.subject.next(inputText);
  }

  getAllAlbums():Observable<IAlbum[]>{
    return this.http
        .get<IAlbum[]>(this.album_url)
        // .pipe(tap((data)=>console.log(JSON.stringify(data))));
  }
}
