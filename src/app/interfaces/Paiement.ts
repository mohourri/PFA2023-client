import Commande from "./Commande";

interface Paiement {
    ID: number;
    date_paiement: Date;
    montant: number;
    mode_paiement: string;
    commande: Commande;
}

export default Paiement