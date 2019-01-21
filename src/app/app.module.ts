import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { QRCodeModule } from 'angularx-qrcode';

import { AppService } from './services/app.service';
import { MyMessagesComponent } from './my-messages/my-messages.component';
import { AppApiService } from './services/app-api.service.service';
import { MessageDetailComponent } from './my-messages/message-detail/message-detail.component';
import { QrcodePanelComponent } from './my-messages/message-detail/qrcode-panel/qrcode-panel.component';

@NgModule({
  declarations: [AppComponent, MyMessagesComponent, MessageDetailComponent, QrcodePanelComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule
  ],
  providers: [AppService, AppApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
