import Client from "./Client";
import User from "./User";

interface Vendeur extends User {
    clients: Client[];
  }
export default Vendeur;  