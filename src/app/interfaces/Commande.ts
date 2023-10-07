import LigneCommande from "./LigneCommande";
import Paiement from "./Paiement";
import Client from "./Client";
import Vendeur from "./Vendeur";

interface Commande {
    ID: number;
    nom: string;
    description: string;
    datedemande: string;
    date_validation: string;
    status: string;
    valide: boolean;
    client: Client; 
    vendeur: Vendeur;
    ligne_commandes: LigneCommande[]; 
    paiements: Paiement[];
  }
export default Commande  