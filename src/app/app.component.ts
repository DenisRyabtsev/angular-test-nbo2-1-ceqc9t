import { Component, OnInit } from "@angular/core";

import { JsonService } from "./json.service";

@Component({
  selector: "app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public jsonData: any;

  constructor(private jsonService: JsonService) {}

  public ngOnInit(): void {
    // this.jsonService.getData()
    // this.jsonService.pushData(123123, 123);
  }
}
