import { Experience } from "./experience";

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    startDate: new Date("09/03/2017"),
    endDate: new Date("04/02/2020"),
    company: "datafirst",
    pictureCompahy:
      "https://media-exp1.licdn.com/dms/image/C560BAQEyv4S1_INdRA/company-logo_200_200/0?e=2159024400&v=beta&t=sopOlP8TkMtLlgsmMldOUFqHhz1Eyypyv71V4-NYd6k",
    title: "Ingénieur développement",
    description: `Développement	d'un	logiciel	de	gestion	de	relation	client	(CRM) pour	les	vendeurs	automobiles
    dans	les	concessions.\n
    - Maintenance	des	webservices	utilisés	par	le	CRM`,
  },
  {
    id: 2,
    startDate: new Date("09/02/2015"),
    endDate: new Date("08/29/2017"),
    company: "fiducial",
    pictureCompahy:
      "https://www.lorientnatation.com/media/uploaded/sites/4529/partenaire/59c5206404822_FIDUCIAL.jpg",

    title: "Développeur Web",
    description: `- Développement	 et	 maintenance	 d'une application	 web	 mobile	 de	 gestion	 de	 relation	 client
    pour	les	commerciaux\n
    - Développement d'une	version	web	desktop	de	l'application	CRM.`,
  },

  {
    id: 1,
    startDate: new Date("09/02/2014"),
    endDate: new Date("08/02/2015"),
    company: "gfi informatique",
    title: "Développeur Web",
    pictureCompahy:
      "https://upload.wikimedia.org/wikipedia/fr/3/31/Logo_GFI_2011.jpg",
    description: `chez	 Bayer : Développement	 d'une	 application	 	 marketing	 pour	 aider	 les	 commerciaux	 à
    présenter	 et	 à	 vendre	 leur	 produits.`,
  },
  {
    id: 2,
    startDate: new Date("01/02/2014"),
    endDate: new Date("02/05/2014"),
    company: "altrabio",
    pictureCompahy:
      "https://media-exp1.licdn.com/dms/image/C560BAQEyv4S1_INdRA/company-logo_200_200/0?e=2159024400&v=beta&t=sopOlP8TkMtLlgsmMldOUFqHhz1Eyypyv71V4-NYd6k",

    title: "Développeur Web",
    description: `Réalisation	 d’une	 application	 permettant	 aux	 chercheurs	 d’agréger	 leurs	fichiers	 de
    données	 sous	 forme	 de	 graphiques	 interactifs.`,
  },
  {
    id: 1,
    startDate: new Date("07/02/2013"),
    endDate: new Date("08/02/2013"),
    company: "inserm",
    pictureCompahy:
      "https://www.soundofscience.fr/wp-content/uploads/2019/03/INSERM.jpg",
    title: "Développeur Web",
    description: ` Réalisation	 d’une	 application
    	 web	 de	 gestion	 de	 stock	 de	 consommables	 utilisés	 par	 les	`,
  },
];
