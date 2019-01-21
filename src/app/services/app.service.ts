import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppApiService } from './app-api.service.service';
import { IMessage } from '../core/definition/message';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private messages: BehaviorSubject<IMessage[]> = new BehaviorSubject<IMessage[]>([]);

  constructor(private appApiService: AppApiService) {}

  public setMessages(values: IMessage[]): void {
    this.messages.next(values);
  }

  public sendMessage(message: IMessage): void {
    this.appApiService
      .sendMessage(message)
      .pipe()
      .subscribe((newMessages: IMessage[]) => {
        if (newMessages) {
          this.setMessages(newMessages.reverse());
        }
      });
  }

  public loadData(): void {
    this.appApiService
      .getMessages()
      .pipe()
      .subscribe((messages: IMessage[]) => {
        if (messages) {
          this.setMessages(messages.reverse());
        }
      });
  }

  public getMessages(): Observable<IMessage[]> {
    return this.messages.asObservable();
  }
}
