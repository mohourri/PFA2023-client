import Personne from "./Personne";

interface User extends Personne {
    email: string;
    password: string;
}
  
export default User;