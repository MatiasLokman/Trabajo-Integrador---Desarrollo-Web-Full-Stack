import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMessageComponent } from './new-message/new-message.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [
    NewMessageComponent,
    InboxComponent,
    SentComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class MessagesModule { }
