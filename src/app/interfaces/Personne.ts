import Ville from './Ville';

interface Personne {
    CIN: string;
    nom: string;
    prenom: string;
    sexe: 'm' | 'f'; // Assuming that 'sexe' can only be 'm' or 'f'
    date_naissance: Date;
    tele: string;
    adresse: string;
    ville: Ville; // You should define the Ville type
    prepar(): Personne;
  }
export default Personne