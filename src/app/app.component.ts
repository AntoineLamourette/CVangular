import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  titreCV! : string;
  nom!: string;
  prenom!: string;
  contact!: string;
  tel!: string;
  mail!: string;
  adresse!:string;
  competence!:string;
  diplome!:string;
  experience!:string;
  loisir!:string;
  

  ngOnInit(): void {
    this.titreCV = "Poste Développeur Web";
    this.nom = "LAMOURETTE" ;
    this.prenom = "Antoine";
    this.contact = "Contact";
    this.tel = "0632949587";
    this.mail = "antoine.lamourette59@gmail.com";
    this.adresse = "41 rue hubaut 59120 Loos";
    this.competence= "Compétence";
    this.diplome ="Diplôme";
    this.experience ="Expérience";
    this.loisir="Loisir";
    
  }
  title = 'cvAngular';
}
