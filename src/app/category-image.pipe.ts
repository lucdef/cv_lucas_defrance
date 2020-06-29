import { Pipe, PipeTransform } from "@angular/core";
/*
Transform a category to image url
Some sort of factory
TODO : R&D search if there an another méthod
*/
@Pipe({
  name: "categoryImage",
})
export class CategoryImagePipe implements PipeTransform {
  transform(category: string): string {
    let imageUrl: string = "";
    switch (category) {
      case "Développement":
        imageUrl =
          "https://image.freepik.com/free-vector/programming-code-made-with-binary-code-coding-hacker-background-digital-binary-data-streaming-digital-code_127544-778.jpg";
        break;
      case "Management":
        imageUrl =
          "https://image.freepik.com/free-vector/scrum-team-discussing-tasks_1262-19878.jpg";
        break;
      case "Test":
        imageUrl =
          "https://image.freepik.com/free-photo/qa-quality-assurance-quality-control-concept_31965-2329.jpg";
        break;
      case "Outils de développement":
        imageUrl =
          "https://image.freepik.com/free-vector/builders-desktop-with-webpage-construction_24911-50983.jpg";
        break;
      case "Base de données":
        return "https://www.silicon.fr/wp-content/uploads/logos/SGBD-base-de-donn%C3%A9es.jpg";
        break;
    }
    return imageUrl;
  }
}
