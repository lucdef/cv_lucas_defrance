import { Pipe, PipeTransform } from "@angular/core";

/**
 * Transform an birthday date to an age (concat number + age)
 */
@Pipe({
  name: "age",
})
export class AgePipe implements PipeTransform {
  transform(value: Date): string {
    const timeDiff = Math.abs(Date.now() - value.getTime());
    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    return age + " ans";
  }
}
