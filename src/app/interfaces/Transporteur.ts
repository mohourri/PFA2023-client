import BondeLivraison from "./BondeLivraison";
interface Transporteur {
    ID: number;
    nom: string;
    adresse: string;
    livraisons: BondeLivraison[];
  }

  export default Transporteur