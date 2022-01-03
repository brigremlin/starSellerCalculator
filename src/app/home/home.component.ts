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

  calculateMessage(messageNumber: number, messagePercentage: number) {
    messagePercentage = this.messagePercentage;
    this.respondedMessages = Math.round(messageNumber * messagePercentage);
    console.log(this.respondedMessages);
    console.log(this.messagePercentage);
    while (this.messagePercentage < 0.95) {
      this.messageNumber++;
      this.respondedMessages++;
      this.messagePercentage = this.respondedMessages / this.messageNumber;
      var num: number = Math.round(this.messagePercentage*100);
      console.log(num);
      if (num >= 95) {
        console.log('I am' + num);
        this.neededMessaged = this.messageNumber - this.respondedMessages;
      }
    }
  }
}
