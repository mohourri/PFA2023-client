import Arrivage from './Arrivage'
import Article from './Article'

interface Emballage {
  ID: number;
  type: string;
  numero: number;
  nombre_unitees: number;
  casses: number;
  prixHT_unite: number;
  garantie: number;
  article: Article; 
  arrivage: Arrivage;
}
export default Emballage