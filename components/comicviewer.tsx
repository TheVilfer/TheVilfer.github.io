import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

interface Comic {
  month: string;
  num: number;
  link: string;
  year: string;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  day: string;
}

const ComicViewer: React.FC = () => {
  const [comic, setComic] = useState<Comic | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComic = async (): Promise<void> => {
      try {
        const email = "s.polin@innopolis.university";
        const urlParams = new URLSearchParams({ email });
        const response = await fetch(
          `https://fwd.innopolis.university/api/hw2?${urlParams}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch comic ID");
        }

        const comicId = await response.text();
        const comicResponse = await fetch(
          `https://fwd.innopolis.university/api/comic?id=${comicId}`
        );
        if (!comicResponse.ok) {
          throw new Error("Failed to fetch comic");
        }

        const comicData: Comic = await comicResponse.json();
        setComic(comicData);
      } catch (error) {
        console.error(error);
        setError((error as Error).message);
      }
    };

    fetchComic();
  }, []);

  const renderComic = (comic: Comic) => {
    const year = parseInt(comic.year, 10);
    const month = parseInt(comic.month, 10) - 1;
    const day = parseInt(comic.day, 10);

    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      return <p>Invalid date format in comic data</p>;
    }

    const date = new Date(year, month, day);
    if (isNaN(date.getTime())) {
      return <p>Invalid date value</p>;
    }

    return (
      <div className="comic-container">
        <Image
          src={comic.img}
          width={640}
          height={271}
          alt={comic.alt}
          className="comic-image"
        />
        <div className="comic-title">{comic.safe_title}</div>
        <div className="comic-date">{date.toLocaleDateString()}</div>
        <div className="comic-date--distance">
          {formatDistanceToNow(date, { addSuffix: true })}
        </div>
      </div>
    );
  };

  return (
    <section className="comic-viewer">
      <h2>XKCD Comic Viewer</h2>
      {error && <p>Error loading comic: {error}</p>}
      {comic ? renderComic(comic) : <p>Loading...</p>}
    </section>
  );
};

export default ComicViewer;
