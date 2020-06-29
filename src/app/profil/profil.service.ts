import { Profil } from "./profil";
import { PROFIL } from "./mock-profil";
import { Injectable } from "@angular/core";

@Injectable()
export class ProfilService {
  profil: Profil = PROFIL;
  constructor() {}
  getProfil(): Profil {
    return this.profil;
  }
}
