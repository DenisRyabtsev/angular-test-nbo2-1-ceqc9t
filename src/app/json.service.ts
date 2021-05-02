import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import * as moment from "moment";

@Injectable()
export class JsonService {
  constructor(private http: HttpClient) {}

  getData() {
    console.info("calling...");
    return this.http.get("assets/test.json");
  }

  pushData(timestamp: number, value: number) {
    alert(moment.utc(timestamp).format("MM DD YYYY hh:mm"));
  }
}
