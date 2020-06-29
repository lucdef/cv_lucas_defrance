import { Component, OnInit } from "@angular/core";
import { Experience } from "./experience";
import { EXPERIENCES } from "./mock-experiences";
@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent implements OnInit {
  constructor() {}
  experiences: Experience[];
  ngOnInit(): void {
    this.experiences = EXPERIENCES;
  }
}
