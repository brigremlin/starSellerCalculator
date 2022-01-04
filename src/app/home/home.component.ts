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
  neededMessages: number;
  shipmentNumber: number;
  shipmentPercentage: number;
  neededShipments: number;
  shipped: number;
  ratingNumber: number;
  ratingPercentage: number;
  ratings: number;
  fiveStar: number;

  constructor() {}

  ngOnInit(): void {}

  calculateMessage(messageNumber: number, messagePercentage: number) {
    messagePercentage = this.messagePercentage;
    this.respondedMessages = Math.round(messageNumber * messagePercentage);
    while (messagePercentage <= 0.945) {
      this.messageNumber++;
      this.respondedMessages++;
      messagePercentage = this.respondedMessages / this.messageNumber;
      var num = new Number(messagePercentage);
      console.log(num.toPrecision(2));
      console.log(this.messageNumber);
      console.log(this.respondedMessages);
      if (num >= 0.945) {
        this.neededMessages = this.messageNumber - messageNumber;
        console.log('I am' + this.neededMessages);
        return this.neededMessages;
      }
    }
  }

  calculateShipments(shipmentNumber: number, shipmentPercentage: number) {
    shipmentPercentage = this.shipmentPercentage;
    this.shipped = Math.round(shipmentNumber * shipmentPercentage);
    while (shipmentPercentage <= 0.945) {
      this.shipmentNumber++;
      this.shipped++;
      shipmentPercentage = this.shipped / this.shipmentNumber;
      var num = new Number(shipmentPercentage);
      console.log(num.toPrecision(2));
      console.log(this.shipmentNumber);
      console.log(this.shipped);
      if (num >= 0.945) {
        this.neededShipments = this.shipmentNumber - shipmentNumber;
        console.log('I am' + this.neededShipments);
        return this.neededShipments;
      }
    }
  }

  calculateRating(ratingNumber: number, fiveStar: number) {
    var fiveStarPercentage = fiveStar / ratingNumber;
    console.log(fiveStarPercentage);
    while (fiveStarPercentage <= 0.945) {
      this.ratingNumber++;
      this.fiveStar++;
      fiveStarPercentage = this.fiveStar / this.ratingNumber;
      var num = new Number(fiveStarPercentage);
      console.log(num.toPrecision(2));
      if (num >= 0.945) {
        this.ratings = this.fiveStar - fiveStar;
        return this.ratings;
      }
    }
  }

  calculateStarSeller(
    messageNumber: number,
    messagePercentage: number,
    shipmentNumber: number,
    shipmentPercentage: number,
    ratingNumber: number,
    fiveStar: number
  ) {
    var fiveStarPercentage = fiveStar / ratingNumber;
    console.log(fiveStarPercentage);
    while (fiveStarPercentage <= 0.945) {
      this.ratingNumber++;
      this.fiveStar++;
      fiveStarPercentage = this.fiveStar / this.ratingNumber;
      var num = new Number(fiveStarPercentage);
      console.log(num.toPrecision(2));
      if (num >= 0.945) {
        this.ratings = this.fiveStar - fiveStar;
      }
    }
    shipmentPercentage = this.shipmentPercentage;
    this.shipped = Math.round(shipmentNumber * shipmentPercentage);
    while (shipmentPercentage <= 0.945) {
      this.shipmentNumber++;
      this.shipped++;
      shipmentPercentage = this.shipped / this.shipmentNumber;
      var num = new Number(shipmentPercentage);
      console.log(num.toPrecision(2));
      console.log(this.shipmentNumber);
      console.log(this.shipped);
      if (num >= 0.945) {
        this.neededShipments = this.shipmentNumber - shipmentNumber;
        console.log('I am' + this.neededShipments);
      }
    }
    messagePercentage = this.messagePercentage;
    this.respondedMessages = Math.round(messageNumber * messagePercentage);
    while (messagePercentage <= 0.945) {
      this.messageNumber++;
      this.respondedMessages++;
      messagePercentage = this.respondedMessages / this.messageNumber;
      var num = new Number(messagePercentage);
      console.log(num.toPrecision(2));
      console.log(this.messageNumber);
      console.log(this.respondedMessages);
      if (num >= 0.945) {
        this.neededMessages = this.messageNumber - messageNumber;
        console.log('I am' + this.neededMessages);
      }
    }
    return this.neededMessages,this.ratings, this.neededShipments;
  }
}
