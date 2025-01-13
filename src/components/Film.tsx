import {FC} from "react";
import {IFilm} from "../models/IFilm.ts";

type FilmProps = { item: IFilm };

const Film: FC<FilmProps> = ({item}) => {
    return (
        <div className="flex flex-col gap-3 border-2 border-amber-600 p-4">
            <h2 className="text-blue-700 font-semibold text-xl">
                Episode {item.episodeId}#: {item.name}
            </h2>
            <h3 className="text-orange-600 italic font-semibold">
                Director: {item.director}
            </h3>
            <p>{item.openingCrawl}</p>
            <p>{item.characters}</p>
        </div>
    );
};

export default Film;
