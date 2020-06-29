import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "skillClass",
})
export class SkillClassPipe implements PipeTransform {
  transform(value: string): string {
    const classCss = "chip ";
    let colorcSS: string;
    switch (value) {
      case "Développement":
        colorcSS = "red light";
        break;
      case "Base de données":
        colorcSS = "blue dark";
      case "Infrastructure":
        colorcSS = "blue light";
        break;
      case "Management":
        colorcSS = "green light";
        break;
      case "Test":
        colorcSS = "orange light";
        break;
      case "Outils de développement":
        colorcSS = "red dark";
        break;
    }
    return classCss + colorcSS;
  }
}
