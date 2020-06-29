import { ProfilService } from "./profil.service";
import { Profil } from "./profil";
import { Component, OnInit } from "@angular/core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.scss"],
})
export class ProfilComponent implements OnInit {
  userProfil: Profil;
  faEmail = faEnvelope;
  faLinkdin = faLinkedin;
  constructor(private profilService: ProfilService) {}

  ngOnInit(): void {
    this.userProfil = this.profilService.getProfil();
  }
}
