document.addEventListener("DOMContentLoaded", function () {
  const recentPlaylistContainer = document.querySelector(
    ".Recent-playlists .list"
  );
  const playlistContainer = document.querySelector(".spotify-playlists .list");
  const likedSongsContainer = document.querySelector(".liked-songs-container");

  const masterPlay = document.getElementById("masterPlay");
  const myProgressBar = document.getElementById("myProgressBar");
  const audioElement = new Audio("1.mpeg");
  const nowPlayingImage = document.getElementById("nowPlayingImage");
  const playlists = [
    {
      name: "Today's Top Hits",
      image: "./assets/Today_s Top Hits.jpg",
      description: "English hits",
      song: "./assets/english/WhatsApp Audio 2023-12-19 at 6.45.06 PM (1).mpeg",
      duration: "3.55",
      artist: "Nick jhon",
    },
    {
      name: "Udanpirappe",
      image:
        "./assets/Sid sri ram/WhatsApp Image 2023-12-19 at 10.09.36 PM.jpeg",
      description: "Sid Sriram hits",
      song: "/assets/WhatsApp Audio 2023-11-17 at 9.10.25 AM (2).mpeg",
      duration: "6.00",
      artist: "Sid Sriram",
    },
    {
      name: "Velli malare",
      image:
        "./assets/ar rahmanimg/WhatsApp Image 2023-12-19 at 2.51.03 PM (1).jpeg",
      description: "AR Rahman hits",
      song: "./assets/tamilsongs/WhatsApp Audio 2023-12-19 at 2.50.55 PM.mpeg",
      duration: "3.00",
      artist: "A R Rahman",
    },

    {
      name: "Rock Classics",
      image: "./assets/Focus Flow.jpg",
      description: "English hits.",
      song: "./assets/english/WhatsApp Audio 2023-12-19 at 6.45.08 PM.mpeg",
      duration: "5.05",
      artist: "Nick jhon",
    },

    {
      name: "Margalippoove",
      image:
        "./assets/ar rahmanimg/WhatsApp Image 2023-12-19 at 2.51.03 PM.jpeg",
      description: "AR Rahman hits",
      song: "./assets/tamilsongs/WhatsApp Audio 2023-12-19 at 2.51.02 PM.mpeg",
      duration: "4.00",
      artist: "A R Rahman",
    },

    {
      name: "Va Va pennae",
      image:
        "./assets/Sid sri ram/WhatsApp Image 2023-12-19 at 10.09.36 PM.jpeg",
      description: "Sid Sriram hits",
      song: "./assets/WhatsApp Audio 2023-11-17 at 9.10.26 AM.mpeg",
      duration: "4.15",
      artist: "Sid Sriram",
    },
    {
      name: "All out 2010s",
      image: "./assets/All Out 2010s.jpg",
      description: "English hits",
      song: "./assets/english/WhatsApp Audio 2023-12-19 at 6.45.06 PM.mpeg",
      duration: "3.45",
      artist: "Nick jhon",
    },
    {
      name: "Dhil Dhil",
      image:
        "./assets/ar rahmanimg/WhatsApp Image 2023-12-19 at 2.51.03 PM (1).jpeg",
      description: "AR Rahman hits",
      song: "./assets/tamilsongs/WhatsApp Audio 2023-12-19 at 2.50.48 PM.mpeg",
      duration: "3.45",
      artist: "A R Rahman",
    },

    {
      name: "Kannil Mazhai",
      image:
        "./assets/Sid sri ram/WhatsApp Image 2023-12-19 at 10.09.36 PM.jpeg",
      description: "Sid Sriram hits",
      song: "./assets/WhatsApp Audio 2023-11-17 at 9.10.26 AM (2).mpeg",
      duration: "4.51",
      artist: "Sid Sriram",
    },

    {
      name: "China China Asai",
      image:
        "./assets/ar rahmanimg/WhatsApp Image 2023-12-19 at 2.51.03 PM.jpeg",
      description: "AR Rahman hits",
      song: "./assets/tamilsongs/WhatsApp Audio 2023-12-19 at 2.50.55 PM (1).mpeg",
      duration: "3.55",
      artist: "A R Rahman",
    },
    {
      name: "Pushpa",
      image:
        "./assets/Sid sri ram/WhatsApp Image 2023-12-19 at 10.09.36 PM.jpeg",
      description: "Sid Sriram hits",
      song: "./assets/WhatsApp Audio 2023-11-17 at 9.10.26 AM (1).mpeg",
      duration: "3.23",
      artist: "Sid Sriram",
    },
    {
      name: "RapCaviar",
      image: "./assets/Peaceful Piano.jpg",
      description: "English hits",
      song: "./assets/english/WhatsApp Audio 2023-12-19 at 6.45.06 PM (2).mpeg",
      duration: "4.55",
      artist: "Nick jhon",
    },
    {
      name: "Thangame",
      image:
        "./assets/ar rahmanimg/WhatsApp Image 2023-12-19 at 2.51.03 PM (1).jpeg",
      description: "AR Rahman hits",
      song: "./assets/tamilsongs/WhatsApp Audio 2023-12-19 at 2.51.02 PM (1).mpeg",
      duration: "5.35",
      artist: "A R Rahman",
    },

    {
      name: "sendu malli",
      image:
        "./assets/Sid sri ram/WhatsApp Image 2023-12-19 at 10.09.36 PM.jpeg",
      description: "Sid Sriram hits",
      song: "./assets/WhatsApp Audio 2023-11-17 at 9.10.25 AM.mpeg",
      duration: "3.00",
      artist: "Sid Sriram",
    },
  ];
  let matchingPlaylists = [];
  const recentlyPlayed = [];
  const likedSongs = [];
  let currentPage = 1;

  //spotify playlist..............................................................................
  playlists.forEach((playlist) => {
    const playlistRow = document.createElement("div");
    playlistRow.classList.add("row");

    const playlistCard = document.createElement("div");
    playlistCard.classList.add("col-md-3", "item");

    playlistCard.innerHTML = `
      <div class="card-wrapper">
        <div class="heart-icon" onclick="toggleFavorite('${playlist.name}', '${playlist.image}', '${playlist.duration}', '${playlist.song}', '${playlist.artist}', '${playlist.description}' )">
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        <img src="${playlist.image}" />
        <div class="play" onclick="playSong('${playlist.song}', '${playlist.name}', '${playlist.image}', '${playlist.duration}', '${playlist.artist}' '${playlist.description}'  )">
          <span class="fa fa-play"></span>
        </div>
        <h4>${playlist.name}</h4>
        <p>${playlist.description}</p>
        <p>${playlist.duration}</p>
        <p>${playlist.artist}</p>
      </div>
    `;

    const heartIcon = playlistCard.querySelector(".heart-icon");
    heartIcon.addEventListener("click", () =>
      toggleFavorite(
        playlist.name,
        playlist.image,
        playlist.duration,
        playlist.song,
        playlist.artist,
        playlist.description
      )
    );

    const playButton = playlistCard.querySelector(".play");
    playButton.addEventListener("click", () =>
      playSong(
        playlist.song,
        playlist.name,
        playlist.image,
        playlist.duration,
        playlist.artist,
        playlist.description
      )
    );

    playlistRow.appendChild(playlistCard);
    playlistContainer.appendChild(playlistRow);
  });
  //liked songs.............................................................................
  function toggleFavorite(name, image, duration, song, artist, description) {
    const isLiked = likedSongs.some((liked) => liked.song === song);

    if (isLiked) {
      const indexToRemove = likedSongs.findIndex(
        (liked) => liked.song === song
      );
      likedSongs.splice(indexToRemove, 1);
    } else {
      likedSongs.unshift({ name, image, duration, song, artist, description });
    }

    updateLikedSongsContainerVisibility();
  }

  function updateLikedSongsContainerVisibility() {
    likedSongsContainer.style.display =
      likedSongs.length > 0 ? "block" : "none";
    updateLikedSongs();
  }

  function updateLikedSongs() {
    likedSongsContainer.innerHTML = "";

    likedSongs.forEach((liked) => {
      const likedItem = document.createElement("div");
      likedItem.classList.add("liked-song-item");
      likedItem.innerHTML = `
          <img src="${liked.image}" alt="${liked.name}" />
          <div class="heart-icon" onclick="toggleFavorite('${liked.name}', '${
        liked.image
      }', '${liked.duration}', '${liked.song}','${liked.artist}' '${
        liked.description
      }  )">
              <i class="${
                liked.type === "playlist" ? "fa fa-heart-o" : ""
              }" aria-hidden="true"></i>
          </div>
          <span>${liked.name}</span>
      `;

      likedItem.addEventListener("click", (e) => {
        e.preventDefault();
        playSong(
          liked.song,
          liked.name,
          liked.image,
          liked.duration,
          liked.artist,
          liked.description
        );
      });

      likedSongsContainer.appendChild(likedItem);
    });
  }

  //audio............................................................................
  function playSong(song, name, image, duration) {
    console.log("Playing:", name);

    if (!audioElement.paused && audioElement.duration > 0) {
      audioElement.pause();
      masterPlay.classList.remove("fa-pause-circle-o");
      masterPlay.classList.add("fa-play-circle-o");

      nowPlayingImage.style.display = "none";
    } else {
      audioElement.src = song;
      audioElement.play();

      nowPlayingImage.src = image;
      nowPlayingImage.style.display = "inline";

      recentlyPlayed.unshift({ name, image, duration, song });
      updateRecentlyPlayedList();

      masterPlay.classList.remove("fa-play-circle-o");
      masterPlay.classList.add("fa-pause-circle-o");
    }
  }
  //progressbar...................................................................
  masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.add("fa-pause-circle-o");
      masterPlay.classList.remove("fa-play-circle-o");
    } else {
      audioElement.pause();
      masterPlay.classList.add("fa-play-circle-o");
      masterPlay.classList.remove("fa-pause-circle-o");
    }
  });

  audioElement.addEventListener("timeupdate", () => {
    progress = parseInt(
      (audioElement.currentTime / audioElement.duration) * 100
    );

    myProgressBar.value = progress;
  });
  myProgressBar.addEventListener("change", () => {
    audioElement.currentTime =
      (myProgressBar.value * audioElement.duration) / 100;
  });

  const backwardButton = document.querySelector(".fa-backward");
  const forwardButton = document.querySelector(".fa-forward");

  backwardButton.addEventListener("click", () => {
    audioElement.currentTime -= 20;
  });

  forwardButton.addEventListener("click", () => {
    audioElement.currentTime += 20;
  });
  //recently played songs..................................................................
  function updateRecentlyPlayedList() {
    recentPlaylistContainer.innerHTML = "";

    if (recentlyPlayed.length > 0) {
      const { name, image, duration, song, artist, description } =
        recentlyPlayed[0];
      const isCurrentlyPlaying =
        !audioElement.paused && audioElement.currentTime > 0;

      const recentCard = document.createElement("div");
      recentCard.classList.add("item");
      recentCard.innerHTML = `
       
        <div class="card-wrapper">
          <div class="heart-icon" onclick="toggleFavorite('${name}', '${image}', '${duration}', '${song}','${artist}, '${description}',   'recentlyPlayed')">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
          </div>
          <img src="${image}" />
          <div class="play" onclick="playSong('${song}', '${name}', '${image}', '${duration}','${artist}' ,'${description}' )">
            <span class="fa fa-play"></span>
          </div>
          <h4>${isCurrentlyPlaying ? name : ""}</h4>
          <p>${isCurrentlyPlaying ? "" : ` ${name}`}</p>
          </div>
      `;

      const playButton = recentCard.querySelector(".play");
      playButton.addEventListener("click", () =>
        playSong(song, name, image, duration, artist, description)
      );

      const heartIcon = recentCard.querySelector(".heart-icon");
      heartIcon.addEventListener("click", () =>
        toggleFavorite(name, image, duration, song, artist, description)
      );

      recentPlaylistContainer.appendChild(recentCard);
    }
  }

  //search............................................................
  let searchResultsVisible = false;

  function handleSearchIconClick() {
    const searchResults = document.getElementById("searchResults");
    searchResultsVisible = !searchResultsVisible;

    if (searchResultsVisible) {
      searchResults.style.display = "block";
      document.getElementById("input").focus();
    } else {
      searchResults.style.display = "none";
    }
  }

  document.getElementById("input").addEventListener("input", function () {
    handleSearch();
  });

  document
    .getElementById("input")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        handleSelection();
      }
    });
  function handleSearch() {
    const inputValue = document
      .getElementById("input")
      .value.trim()
      .toLowerCase();
    const searchResultsList = document.getElementById("searchResults");
    searchResultsList.innerHTML = "";
    searchResultsVisible = inputValue.length > 0;
    const searchResults = document.getElementById("searchResults");
    searchResults.style.display = searchResultsVisible ? "block" : "none";

    matchingPlaylists = playlists.filter(
      (playlist) =>
        playlist.name.toLowerCase().includes(inputValue) ||
        playlist.description.toLowerCase().includes(inputValue) ||
        playlist.artist.toLowerCase().includes(inputValue)
    );

    matchingPlaylists.forEach((playlist) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${playlist.name} - ${playlist.description}`;
      listItem.addEventListener("click", () => {
        handleSelection(playlist);
        playSongFromSearch(
          playlist.song,
          playlist.name,
          playlist.image,
          playlist.duration,
          playlist.artist,
          playlist.description
        );
      });
      searchResultsList.appendChild(listItem);
    });
    console.log(searchResultsList);
  }

  function playSongFromSearch(
    song,
    name,
    image,
    duration,
    artist,
    description
  ) {
    playSong(song, name, image, duration, artist, description);
  }

  function handleSelection(selectedPlaylist) {
    searchResultsVisible = false;
    const searchResults = document.getElementById("searchResults");
    searchResults.style.display = "none";
    playlistContainer.innerHTML = "";
    const listOfSongs =
      matchingPlaylists.length > 0 ? [...matchingPlaylists] : [...playlists];

    const selectedPlaylistIndex = playlists.findIndex(
      (playlist) => playlist === selectedPlaylist
    );
    if (selectedPlaylistIndex !== -1) {
      playlists.splice(selectedPlaylistIndex, 1);
      playlists.unshift(selectedPlaylist);
    }

    listOfSongs.forEach((playlist) => {
      const playlistRow = document.createElement("div");
      playlistRow.classList.add("row");

      const playlistCard = document.createElement("div");
      playlistCard.classList.add("col-md-3", "item");

      playlistCard.innerHTML = `
   
      <div class="card-wrapper">
        <div class="heart-icon" onclick="toggleFavorite('${playlist.name}', '${playlist.image}', '${playlist.duration}', '${playlist.song}' '${playlist.artist}' '${playlist.description} ')">
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        <img src="${playlist.image}"  />
        <div class="play">
          <span class="fa fa-play"></span>
        </div>
        <h4>${playlist.name}</h4>
        <p>${playlist.description}</p>
        <p>${playlist.duration}</p>
        <p>${playlist.artist}</p>
      </div>
    `;

      const heartIcon = playlistCard.querySelector(".heart-icon");
      heartIcon.addEventListener("click", () =>
        toggleFavorite(
          playlist.name,
          playlist.image,
          playlist.duration,
          playlist.song,
          playlist.artist,
          playlist.description
        )
      );

      const playButton = playlistCard.querySelector(".play");
      playButton.addEventListener("click", () =>
        playSong(
          playlist.song,
          playlist.name,
          playlist.image,
          playlist.duration,
          playlist.artist,
          playlist.description
        )
      );

      playlistRow.appendChild(playlistCard);
      playlistContainer.appendChild(playlistRow);
    });

    if (selectedPlaylistIndex !== -1) {
      const selectedPlaylistCard = playlistContainer.children[0].children[0];
      selectedPlaylistCard.classList.add("selected");
      selectedPlaylistCard.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
    document.getElementById("input").value = "";
  }

  // show all.............................................................................................
  const allPlaylistsContainer = document.querySelector(
    ".spotify-playlists .list"
  );
 
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const playlistsPerPage = 6; 


  prevButton.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      renderPlaylists(currentPage);
    }
  });

  nextButton.addEventListener("click", function () {
    const totalPages = Math.ceil(
      (matchingPlaylists.length || playlists.length) / playlistsPerPage
    );
    if (currentPage < totalPages) {
      currentPage++;
      renderPlaylists(currentPage);
    }
  });

  function renderPlaylists(page) {
    const startIndex = (page - 1) * playlistsPerPage;
    const endIndex = startIndex + playlistsPerPage;
    const displayedPlaylists = playlists.slice(startIndex, endIndex);

    allPlaylistsContainer.innerHTML = "";

    displayedPlaylists.forEach((playlist) => {
      const playlistItem = document.createElement("div");
      playlistItem.classList.add("col-md-3", "playlist-item");

      playlistItem.innerHTML = `
              <div class="card-wrapper">
                  <div class="heart-icon" onclick="toggleFavorite('${playlist.name}', '${playlist.image}', '${playlist.duration}', '${playlist.song}', '${playlist.artist}'  '${playlist.description}' )">
                      <i class="fa fa-heart-o" aria-hidden="true"></i>
                  </div>
                  <img src="${playlist.image}" />
                  <div class="play" onclick="playSong('${playlist.song}', '${playlist.name}', '${playlist.image}', '${playlist.duration}', '${playlist.artist}''${playlist.description}')">
                      <span class="fa fa-play"></span>
                  </div>
                  <h4>${playlist.name}</h4>
                  <p>${playlist.description}</p>
                  <p>${playlist.duration}</p>
                  <p>${playlist.artist}</p>
              </div>
          `;

      const heartIcon = playlistItem.querySelector(".heart-icon");
      heartIcon.addEventListener("click", () =>
        toggleFavorite(
          playlist.name,
          playlist.image,
          playlist.duration,
          playlist.song,
          playlist.artist,
          playlist.description
        )
      );

      const playButton = playlistItem.querySelector(".play");
      playButton.addEventListener("click", () =>
        playSong(
          playlist.song,
          playlist.name,
          playlist.image,
          playlist.duration,
          playlist.artist,
          playlist.description
        )
      );

      allPlaylistsContainer.appendChild(playlistItem);
    });
  }

  renderPlaylists(currentPage);

  //volume control.........................................................

  // Get volume elements
  var volumeIcon = document.getElementById("volumeIcon");
  var volumeControl = document.getElementById("volumeControl");

  // Event listener for volume icon click
  volumeIcon.addEventListener("click", function () {
    if (audioElement.volume > 0) {
      audioElement.volume = 0;
      volumeControl.value = 0;
    } else {
      audioElement.volume = 1;
      volumeControl.value = 1;
    }
  });

  // Event listener for volume control change
  volumeControl.addEventListener("input", function () {
    audioElement.volume = volumeControl.value;
  });
});
