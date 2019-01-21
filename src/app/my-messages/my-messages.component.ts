import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMessage } from '../core/definition/message';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.css']
})
export class MyMessagesComponent implements OnInit {
  @Input() public messages: IMessage[] = [];
  @Output() public clearClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public refreshClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  public clear(): void {
    this.clearClick.emit(true);
  }
  public refresh(): void {
    this.refreshClick.emit(true);
  }
}
