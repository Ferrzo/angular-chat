import { Component, OnInit, Input } from '@angular/core';
import { IMessage } from '../../core/definition/message';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {
  @Input() public data: IMessage;
  public isPanelVisible = false;
  constructor() { }

  ngOnInit() {
  }

  public showPanel(value: boolean): void {
    this.isPanelVisible = value;
  }

}
