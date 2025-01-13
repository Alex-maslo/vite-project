import { useEffect, useState } from "react";
import { getApiData } from "../services/api.service.ts";
import { IFilm } from "../models/IFilm.ts";
import Film from "./Film.tsx";

const Films = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    getApiData().then((data) => setArray(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {array.map((value: IFilm) => {
        return <Film key={value.id} item={value} />;
      })}
    </div>
  );
};

export default Films;
