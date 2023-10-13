import Article from './Article'
import Commande from './Commande'
interface LigneCommande {
    ID: number;
    Quantite: number;
    article: Article;
    commande: Commande;
  }
export default LigneCommande