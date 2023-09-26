import Emballage from './Emballage'
interface Article {
    ID: number;
    libelle: string;
    designation: string;
    categorie: string;
    quantite: number;
    taille: number;
    poid: number;
    TVA: number;
    emballages: Emballage[]; // You should define the Emballage type
}

export default Article