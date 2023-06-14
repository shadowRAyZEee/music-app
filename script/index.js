const container = document.querySelector(`.albums`);

for (let i = 0; i < albums.length; i++) {
    let album = albums[i];
    container.innerHTML += `
    <div class="col">
          <a href="${album.link}" class="text-decoration-none">
          <div class="card">
            <img src="${album.img}" class="card-img-top" width="200px" height="250px">
            <div class="card-body">
              <p class="card-text">${album.title}</p>
              <p class="card-text">${album.author}</p>
            </div>
          </div>
          </a>
        </div>`
}
