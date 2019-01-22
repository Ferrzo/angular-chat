import { Component } from '@angular/core';
import { IMessage } from './core/definition/message';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'ChatZZZ';
  public datasource: IMessage[] = [];
  public inputUser = '';
  public inputMessage = '';

  constructor(private appService: AppService) {
    this.appService.getNewMessages();
    this.appService.getMessages()
    .subscribe((messages: IMessage[]) => {
      if (messages) {
        this.datasource = messages;
      }
    });
  }

  public sendMessage(): void {
    const request: IMessage = {message: this.inputMessage.trim(), created: null, user: this.inputUser.trim()};
    this.appService.sendMessage(request);
    this.inputUser = '';
    this.inputMessage = '';
  }

  public refreshMessages(): void {
    this.appService.getNewMessages();
  }

  public clearMessages(): void {
    this.datasource = [];
  }
}
