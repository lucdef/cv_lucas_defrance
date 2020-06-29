import { Component, OnInit } from "@angular/core";
import { FormatCodeOptions } from "typescript";
import { Formation } from "./formation";
import { FORMATIONS } from "./mock-formation";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-formation",
  templateUrl: "./formation.component.html",
  styleUrls: ["./formation.component.scss"],
})
export class FormationComponent implements OnInit {
  formations: Formation[];
  faCodeBranch = faCodeBranch;
  constructor() {}

  ngOnInit(): void {
    this.formations = FORMATIONS;
  }
}
