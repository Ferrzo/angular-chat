import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMessage } from '../core/definition/message';

@Injectable({
  providedIn: 'root'
})
export class AppApiService {
  private messagesUrl = 'https://whispering-harbor-13260.herokuapp.com/messages';
  private httpOptions: any;

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
   }

  public getMessages(): Observable<IMessage[]> {
    return this.httpClient.get<IMessage[]>(this.messagesUrl);
  }

  public sendMessage(message: IMessage): Observable<any> {
    return this.httpClient.post(this.messagesUrl, message, this.httpOptions);
  }
}
