import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import * as _ from 'lodash';
import { IMessage } from './core/definition/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public messages: IMessage[] = [];
  public textfield = '';
  public username = '';

  constructor(private appService: AppService) {
    this.appService.getMessages()
      .pipe()
      .subscribe((values: IMessage[]) => {
        if (values) {
          this.messages = values;
        }
      });
  }

  public ngOnInit(): void {
    this.appService.loadData();
  }

  public send(): void {
    if (this.textfield !== '' && this.username !== '') {
      this.appService.sendMessage({message: this.textfield, user: this.username});
      this.textfield = '';
    }
  }

  public clear(): void {
    this.appService.setMessages([]);
  }

  public refresh(): void {
    this.appService.loadData();
  }
}
