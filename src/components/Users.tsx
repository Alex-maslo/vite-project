import { useEffect, useState } from "react";
import { IUser } from "../models/IUserBase.ts";
import { getData } from "../services/api.service.ts";

const usersUrl = "https://dummyjson.com/users";

const Users = () => {
  const [usersArray, setUsersArray] = useState<IUser[]>([]);

  useEffect(() => {
    getData(usersUrl).then((data) => setUsersArray(data.users));
  }, []);

  console.log(usersArray);
  return <div></div>;
};

export default Users;
