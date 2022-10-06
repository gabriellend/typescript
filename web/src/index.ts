import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { ApiSync } from "./models/ApiSync";

const users = new Collection('http://localhost:3000/users', 
  (json: UserProps) => {
    return User.buildUser(json);
  }
)

users.on ('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetchAll();

users.fetchOne(5);





