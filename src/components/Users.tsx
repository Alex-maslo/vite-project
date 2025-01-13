import User from "./User.tsx";
import { useEffect, useState } from "react";
import { getData } from "../services/getData.ts";
import { IUser } from "../models/IUser.ts";

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [item, setItem] = useState<IUser | null>(null);

  useEffect(() => {
    getData<IUser[]>(import.meta.env.VITE_API_USERS).then((value) =>
      setUsers(value),
    );
  }, []);

  const foo = (item: IUser) => {
    console.log(item);
    setItem(item);
  };

  return (
    <div>
      {JSON.stringify(item)}
      {users.map((value) => {
        return <User foo={foo} key={value.id} item={value} />;
      })}
    </div>
  );
};

export default Users;
