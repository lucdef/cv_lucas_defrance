import { Component, OnInit } from "@angular/core";
import { Skill } from "./skill";
import { SKILLS } from "./mock-skill";
interface IDictionn<T> {
  [Key: string]: T;
}
@Component({
  selector: "app-skill",
  templateUrl: "./skill.component.html",
  styleUrls: ["./skill.component.scss"],
})
export class SkillComponent implements OnInit {
  NB_SKILL_DISPLAY = 5;
  skills: Skill[];
  groupedArray: IDictionn<Skill[]>;
  constructor() {}

  ngOnInit(): void {
    this.skills = SKILLS;
    console.log(this.skills);
    this.getSkills();
  }

  getSkills(): void {
    this.groupedArray = this.skills.reduce((r, a) => {
      r[a.category] = [...(r[a.category] || []), a];
      return r;
    }, {});
    // console.log(test);
  }
}
