async function fetchComic() {
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

        const comicData = await comicResponse.json();
        displayComic(comicData);
    } catch (error) {
        console.error(error);
        const comicContainer = document.getElementById('comic');
        comicContainer.textContent = `Error loading comic: ${error.message}`;
    }
}

function displayComic(comic) {
    const comicContainer = document.getElementById('comic');
    const date = new Date(`${comic.year}-${comic.month}-${comic.day}`);

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

    comicContainer.appendChild(img);
    comicContainer.appendChild(title);
    comicContainer.appendChild(dateDiv);
}