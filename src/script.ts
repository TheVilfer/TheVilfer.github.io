import './styles.css';
import { formatDistanceToNow } from 'date-fns';

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

async function fetchComic(): Promise<void> {
  try {
    const email = 's.polin@innopolis.university';
    const urlParams = new URLSearchParams({ email });
    const response = await fetch(`https://fwd.innopolis.university/api/hw2?${urlParams}`);
    if (!response.ok) {
      throw new Error('Failed to fetch comic ID');
    }

    const comicId = await response.text();
    const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
    if (!comicResponse.ok) {
      throw new Error('Failed to fetch comic');
    }

    const comicData: Comic = await comicResponse.json();
    console.log('Comic data:', comicData); // Логируем данные комикса для проверки
    displayComic(comicData);
  } catch (error) {
    console.error(error);
    const comicContainer = document.getElementById('comic');
    if (comicContainer) {
      comicContainer.textContent = `Error loading comic: ${(error as Error).message}`;
    }
  }
}

function displayComic(comic: Comic): void {
  const comicContainer = document.getElementById('comic');
  if (!comicContainer) return;

  // Проверяем корректность значений month, day и year
  const year = parseInt(comic.year, 10);
  const month = parseInt(comic.month, 10) - 1; // месяцы начинаются с 0 в JavaScript
  const day = parseInt(comic.day, 10);

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    comicContainer.textContent = 'Invalid date format in comic data';
    return;
  }

  const date = new Date(year, month, day);
  if (isNaN(date.getTime())) {
    comicContainer.textContent = 'Invalid date value';
    return;
  }

  comicContainer.innerHTML = '';
  
  const img = document.createElement('img');
  img.src = comic.img;
  img.alt = comic.alt;
  img.className = 'comic-image';

  const title = document.createElement('div');
  title.className = 'comic-title';
  title.textContent = comic.safe_title;

  const dateDiv = document.createElement('div');
  dateDiv.className = 'comic-date';
  dateDiv.textContent = date.toLocaleDateString();

  const dateDistanceDiv = document.createElement('div');
  dateDistanceDiv.className = 'comic-date--distance';
  dateDistanceDiv.textContent = formatDistanceToNow(date, { addSuffix: true });

  comicContainer.appendChild(img);
  comicContainer.appendChild(title);
  comicContainer.appendChild(dateDiv);
  comicContainer.appendChild(dateDistanceDiv);
}

if (window.location.pathname.endsWith('comic.html')) {
  fetchComic();
}
