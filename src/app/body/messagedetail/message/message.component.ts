import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../message';
import { TieappService } from "../../../tieapp.service";


@Component({
  selector: 'tieapp-message',
  templateUrl: './Message.component.html',
  styleUrls: ['./Message.component.css']
})
export class MessageComponent implements OnInit {

  private currentMessage: Message;
  constructor(private _tieappService: TieappService) {
    // this.currentMessage = new Message("Mary", "Cbcr1", "This is cbcr 1", "12-12-2015", "sent", "John",
    // "01-01-2016", "Mike@MX.com", "This is cbct document for Mexican SAT", "Warning information", "John, Mike,Tom", "CBC 1", ["CBC","Other"], ["1","2","3"],
    // "MX", "US,MX", ["en","ch","es"]);

  }

  ngOnInit() {
    this.currentMessage = this._tieappService.getCurrentMsg();
  }


  // ngOnInit() {
  //   // this.currentMessage = this._tieappService.getCurrentMsg();
  //
  //   this._tieappService.getCurrentMsg()
  //       .subscribe(currentMsgData => {
  //
  //           this.currentMessage = currentMsgData;
  //       });
  // }
  // }
  // ngOnInit() {
  //   this._tieappService.getData()
  //       .subscribe(tieMsgData => {
  //
  //           this.tieapp = tieMsgData;
  //       });
  // }

}
