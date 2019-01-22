import { Component, Input } from '@angular/core';
import { IMessage } from '../core/definition/message';

@Component({
  selector: 'app-my-message',
  templateUrl: './my-message.component.html'
})
export class MyMessageComponent {
  @Input() public messages: IMessage[] = [];
}
