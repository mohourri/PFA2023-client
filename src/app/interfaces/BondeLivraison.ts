import Commande from "./Commande";
import Transporteur from "./Transporteur";

interface BondeLivraison {
    ID: number;
    date_charge: Date;
    date_livraison: Date;
    cout: number;
    commande: Commande; 
    transporteur: Transporteur;
}

export default BondeLivraison