import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  messageNumber: number;
  messagePercentage: number;
  respondedMessages: number;
  neededMessaged: number;

  constructor() {}

  ngOnInit(): void {}

  calculateMessage(messageNumber, messagePercentage) {
    messagePercentage = this.messagePercentage/100;
    this.respondedMessages = Math.round(
      messageNumber * messagePercentage
    );
    console.log(this.respondedMessages);
    console.log(this.messagePercentage);
    while (this.messagePercentage < 0.95) {
      this.messageNumber++;
      this.respondedMessages++;
      this.messagePercentage = this.respondedMessages/this.messageNumber;
    }
    this.neededMessaged = this.messageNumber - this.respondedMessages;
  }
}
