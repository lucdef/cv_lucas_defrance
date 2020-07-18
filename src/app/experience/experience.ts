import { NumericLiteral } from "typescript";
import { Skill } from "../skill/skill";

export class Experience {
  id: number;
  company: string;
  pictureCompahy: string;
  startDate: Date;
  endDate: Date;
  title: string;
  description: string;
  skills: Array<Skill>;
}
