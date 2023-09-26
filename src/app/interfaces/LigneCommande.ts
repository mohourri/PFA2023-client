import Article from './Article'
import Commande from './Commande'
interface LigneCommande {
    ID: number;
    Quantite: number;
    article: Article; // You should define the Article type
    commande: Commande; // You should define the Commande type
  }
export default LigneCommande