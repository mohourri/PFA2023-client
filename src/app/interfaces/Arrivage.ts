import Fournisseur from './Fournisseur'
import Emballage from './Emballage'


interface Arrivage {
    ID: number;
    nom: string;
    description: string;
    Date_arrivage: Date;
    fournisseur: Fournisseur; // You should define the Fournisseur type
    emballages: Emballage[]; // You should define the Emballage type
  }

export default Arrivage