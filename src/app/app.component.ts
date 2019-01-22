import { Component } from '@angular/core';
import { IMessage } from './core/definition/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'ChatZZZ';
  public datasource: IMessage[] = [];

  constructor() {}
}
