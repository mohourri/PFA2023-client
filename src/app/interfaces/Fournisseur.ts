import Arrivage from './Arrivage';

interface Fournisseur {
    ID: number;
    nom: string;
    pays: string;
    Adresse: string;
    arrivages: Arrivage[]; 
}
  
export default Fournisseur;