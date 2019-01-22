import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { IMessage } from '../core/definition/message';
import { AppApiService } from './app.api.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private messages: BehaviorSubject<IMessage[]> = new BehaviorSubject<IMessage[]>([]);
  constructor(private appApiService: AppApiService) {
    this.getMessagesFromAPI();
  }

  public getMessages(): Observable<IMessage[]> {
    return this.messages.asObservable();
  }

  public setMessages(values: IMessage[]): void {
    this.messages.next(values);
  }
  public sendMessage(message: IMessage): void {
    this.appApiService.sendMessage(message)
      .pipe(take(1))
      .subscribe((response: IMessage[]) => {
        if (response) {
          this.setMessages(response);
        }
      });
  }

  private getMessagesFromAPI(): void {
    this.appApiService.getMessages()
      .pipe(take(1))
      .subscribe((response: IMessage[]) => {
        if (response) {
          this.setMessages(response);
        }
      });
  }
}
