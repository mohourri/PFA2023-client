import Commande from "./Commande";
import Personne from './Personne';
import Vendeur from "./Vendeur";

interface Client extends Personne {
    cree_par: Vendeur;
    commandes: Commande[]; 
}

export default Client