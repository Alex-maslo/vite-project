import { FC } from "react";
import { IUser } from "../models/IUser.ts";

type UserProps = { item: IUser; foo: (item: IUser) => void };

const User: FC<UserProps> = ({ item, foo }) => {
  return (
    <>
      <h2>{item.name}</h2>
      <button
        className={`p-3 bg-amber-300`}
        onClick={() => {
          foo(item);
        }}
      >
        Click
      </button>
    </>
  );
};

export default User;
