import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-templateforms",
  templateUrl: "./templateforms.component.html",
  styleUrls: ["./templateforms.component.scss"]
})
export class TemplateformsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  onSubmit(f) {
    console.log(f.value);
  }
}
