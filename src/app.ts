const navToggle = document.querySelector(".mobile-nav-toggle")as HTMLDivElement;
const primaryNav = document.querySelector(".nav-links") as HTMLUListElement;

if (navToggle !== null) {
  navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", "true");
      navToggle.setAttribute("aria-expanded", "true");
      navToggle.classList.add("active");
      // primaryNav.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      primaryNav.setAttribute("data-visible", "false");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.classList.remove("active");
      // primaryNav.style.overflow = "hidden";
      document.body.style.overflow = "scroll";
      // contactBtn.style.display = "block";
    }
  });
}

interface Artist {
    id: number;
    artist_name: string;
    song_title: string;
    artist_picture: string;
    artist_avatar: string;
    artist_since: string;
    artist_streams: number;
    artist_bio: string;
    last_release_btn: string;
    see_artist_btn: string;
    visible: boolean;
    class_bar_one: string;
    class_bar_two: string;
    class_container_one: string;
    class_container_two: string;
  }
  
  const artists: Artist[] = [
    {
      id: 0,
      artist_name: "Rihanna",
      song_title: "Diamonds",
      artist_avatar: "https://i.iplsc.com/-/000GSBNZ59S9VNM8-C122.jpg",
      artist_picture: "https://i.iplsc.com/-/000GSBNZ59S9VNM8-C122.jpg",
      artist_since: "since Jun 2012",
      artist_streams: 640.8,
      artist_bio:'Rihanna is a Barbadian singer, songwriter, and actress who first gained recognition for her hit single "Pon de Replay" in 2005. Since then, she has become one of the most successful and influential musicians of our time, with numerous chart-topping hits and awards under her belt. Her music style is a blend of pop, R&B, and dancehall, and her distinctive voice and strong stage presence have made her a beloved icon in the music industry. Rihanna has also made a name for herself as a businesswoman, with successful ventures in the beauty and fashion industries.',
      last_release_btn: "",
      see_artist_btn: "",
      visible: true,


      class_bar_one: "artist-one-btn",
      // class_bar_one: "artist-btn",


      class_bar_two: "active-artist",


      class_container_one: "artist-one-container",
      // class_container_one: "artist-container",


      class_container_two: "artist-selected-wrapper",
    },
    {
        id: 1,
        artist_name: "Eminem",
        song_title: "Love the Way You Lie",
        artist_picture: "https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b",
        artist_avatar: "https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b",
        artist_since: "since Aug 2012",
        artist_streams: 840.8,
        artist_bio: "Eminem, also known as Marshall Bruce Mathers III, is an American rapper, songwriter, and record producer who first gained mainstream success with his album 'The Slim Shady LP' in 1999. He is widely regarded as one of the greatest rappers of all time, with his intricate wordplay, storytelling ability, and unique flow setting him apart from his peers. Eminem's music often tackles controversial topics such as drug addiction, family issues, and societal problems, and he has been known to use his platform to address social and political issues. Throughout his career, he has won numerous awards, including 15 Grammy Awards, and has sold over 150 million records worldwide.",
        last_release_btn: "",
        see_artist_btn: "",
        visible: false,


        class_bar_one: "artist-two-btn",
        // class_bar_one: "artist-btn",


        class_bar_two: "no-active-artist",


        class_container_one: "artist-two-container",
        // class_container_one: "artist-container",


        class_container_two: "artist-no-selected-wrapper",
    },
    {
        id: 2,
        artist_name: "Martin Garrix",
        song_title: "Scared to be Lonely",
        artist_picture: "https://yt3.googleusercontent.com/in7ji16oeon_ypiAMeH-ZdTWSaIC54yZqMsFg0X3uhTBk4MDCuIkRf6TIoQQCqjl20DSdakhSQ=s900-c-k-c0x00ffffff-no-rj",
        artist_avatar: "https://yt3.googleusercontent.com/in7ji16oeon_ypiAMeH-ZdTWSaIC54yZqMsFg0X3uhTBk4MDCuIkRf6TIoQQCqjl20DSdakhSQ=s900-c-k-c0x00ffffff-no-rj",
        artist_since: "since Feb 2016",
        artist_streams: 420.8,
        artist_bio: 'Martin Garrix, born Martijn Gerard Garritsen, is a Dutch DJ, record producer, and musician who first gained worldwide fame with his hit single "Animals" in 2013. He is known for his energetic and uplifting electronic dance music, which often incorporates catchy melodies and powerful drops. Garrix has since become one of the most sought-after DJs and producers in the world, performing at major festivals and venues and collaborating with some of the biggest names in the music industry. In addition to his music career, he is also involved in philanthropy, with his own charity organization, the Martin Garrix Foundation, supporting various causes such as clean water projects and education initiatives.',
        last_release_btn: "",
        see_artist_btn: "",
        visible: false,


        class_bar_one: "artist-three-btn",
        // class_bar_one: "artist-btn",

        class_bar_two: "no-active-artist",


        class_container_one: "artist-three-container",
        // class_container_one: "artist-container",



        class_container_two: "artist-no-selected-wrapper",
    },
]



const selectedArtistContainer = document.querySelector('.selected-artist-container') as HTMLDivElement;
const selectedArtistTab = document.querySelector('.artist-selection-wrapper') as HTMLDivElement;

const renderArtist = (artist: Artist) => {
    const artistTab = document.createElement('div');
    const artistContainer = document.createElement('div');
    artistTab.classList.add(`${artist.class_bar_one}`,`${artist.class_bar_two}`, 'artist-selected-wrapper', 'flex', 'items-center', 'gap-04rem', 'active-artist', 'cursor-pointer');
    artistTab.innerHTML = `
        <div class="art-img-wrapper relative flex-center border-rounded-full over-hidden">
          <img class="w-full object-cover breake-img-width" src="${artist.artist_avatar}" alt="">
        </div>
        <h1 data-visible="true" class="main-tex-color-section-white font-weight-600 artis-font-active">${artist.artist_name}</h1>
      </div>
    `;
    

    artistContainer.classList.add(`${artist.class_container_one}`,`${artist.class_container_two}`, 'grid', 'grid-temp-col');
    artistContainer.innerHTML = ` <div class="relative wh-full artist-selected-pictures">
    <img class="wh-full object-cover absolute " src="${artist.artist_picture}" alt="">
    <div class="artist-selected-title absolute bottom-0 padd-block-2rem flex flex-col items-center justify-center w-full ">
        <h2 class="main-tex-color-section-dark font-size-title">${artist.artist_name}</h2>
        <p class="main-tex-color-section-dark font-weight-400 font-btn">${artist.artist_since}</p>
  </div>
  </div>
  <div class="section-dark w-full flex flex-col items-start justify-center gap-2rem padd-block-2rem padd-in-section">
    <div class="flex justify-start items-end gap-04rem w-full relative">
      <h3 class="main-tex-color-section-dark font-size-title">${artist.artist_streams}M</h3>
      <div class="relative wh-full">
        <p class="stream-text parag-color-section-dark font-weight-400 font-btn">streams</p>
      </div>
    </div>
    <p class="parag-color-section-dark parag-text">${artist.artist_bio}</p>
    <a href="" class="action-btn btn-artist flex-center gap-1rem text-decolist-none w-full link-grey-background-section-dark">
      <div class="flex-center">

        <p class="main-tex-color-section-dark font-weight-400 padd-block-1rem font-btn">See artist</p>
        <div class="icon-wrapper flex-center">  
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 25.242">
            <g id="arrow-rigth" transform="translate(-6 -5.379)">
              <path id="Path_105" data-name="Path 105" d="M7.5,18h21" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
              <path id="Path_106" data-name="Path 106" d="M18,7.5,28.5,18,18,28.5" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            </g>
          </svg>                  
        </div>
      </div>
    </a>
  </div>
</div>`


    selectedArtistTab.appendChild(artistTab);
    selectedArtistContainer.appendChild(artistContainer);

};

for (const artist of artists) {
    renderArtist(artist);
}

// ==========================================================================================

//TUTAJ SA DOBRE TABY KTORE PRZELACZAJA 

const artistOneContainer = document.querySelector('.artist-one-container') as HTMLDivElement;
const artistTwoContainer = document.querySelector('.artist-two-container') as HTMLDivElement;
const artistThreeContainer = document.querySelector('.artist-three-container') as HTMLDivElement;

const artistOneBtn = document.querySelector('.artist-one-btn') as HTMLDivElement;
const artistTwoBtn = document.querySelector('.artist-two-btn') as HTMLDivElement;
const artistThreeBtn = document.querySelector('.artist-three-btn') as HTMLDivElement;

if(artistOneBtn !== null) {
   
    artistOneBtn.addEventListener('click' ,() =>{
        artistOneContainer.setAttribute("data-visible", "true");
        artistTwoContainer.setAttribute("data-visible", "false");
        artistThreeContainer.setAttribute("data-visible", "false");
        
        artistThreeBtn.classList.remove('active-artist');
        artistTwoBtn.classList.remove('active-artist');
        artistOneBtn.classList.remove('no-active-artist')
        
        artistThreeBtn.classList.add('no-active-artist');
        artistTwoBtn.classList.add('no-active-artist');
        artistOneBtn.classList.add('active-artist');
    })
}

if(artistTwoBtn !== null) {
artistTwoBtn.addEventListener('click' ,() =>{
    artistOneContainer.setAttribute("data-visible", "false");
    artistTwoContainer.setAttribute("data-visible", "true");
    artistThreeContainer.setAttribute("data-visible", "false");

    artistOneBtn.classList.remove('active-artist');
    artistThreeBtn.classList.remove('active-artist');
    artistTwoBtn.classList.remove('no-active-artist')
    
    artistOneBtn.classList.add('no-active-artist');
    artistThreeBtn.classList.add('no-active-artist');
    artistTwoBtn.classList.add('active-artist');
})
}
if(artistThreeBtn !== null) {
artistThreeBtn.addEventListener('click' ,() =>{
    artistOneContainer.setAttribute("data-visible", "false");
    artistTwoContainer.setAttribute("data-visible", "false");
    artistThreeContainer.setAttribute("data-visible", "true");
    
    artistOneBtn.classList.remove('active-artist');
    artistTwoBtn.classList.remove('active-artist');
    artistThreeBtn.classList.remove('no-active-artist')
    
    artistOneBtn.classList.add('no-active-artist');
    artistTwoBtn.classList.add('no-active-artist');
    artistThreeBtn.classList.add('active-artist');
})
};

// ==========================================================================================


// const artistContainer = document.querySelector('.artist-container') as HTMLDivElement;

// if(artistContainer !== null) {
//     artistContainer.addEventListener('click', (event) => {
//         const targetBtn = event.target as HTMLDivElement;
//         if(targetBtn.classList.contains('artist-btn')) {
//             const targetContainer = document.querySelector(`.${targetBtn.dataset.target}`) as HTMLDivElement;
//             const allContainers = document.querySelectorAll('.artist-container') as NodeListOf<HTMLDivElement>;
//             allContainers.forEach((container) => {
//                 container.classList.remove('artist-selected-wrapper');
//                 container.classList.add('artist-no-selected-wrapper');
//                 container.setAttribute('data-visible', container === targetContainer ? 'true' : 'false');
//             });
//             const allBtns = document.querySelectorAll('.artist-btn') as NodeListOf<HTMLDivElement>;
//             allBtns.forEach((btn) => {
//                 btn.classList.remove('active-artist');
//                 btn.classList.add('no-active-artist');
//             });
//             targetContainer.classList.remove('artist-no-selected-wrapper');
//             targetContainer.classList.add('artist-selected-wrapper');
//             targetBtn.classList.remove('no-active-artist');
//             targetBtn.classList.add('active-artist');
//         }
//     });
// }

// const artistContainer = document.querySelector('.artist-container') as HTMLDivElement;

// if(artistContainer !== null) {
//     artistContainer.addEventListener('click', (event) => {
//         const targetBtn = event.target as HTMLDivElement;
//         if(targetBtn.classList.contains('artist-btn')) {
//             const targetContainer = document.querySelector(`.${targetBtn.dataset.target}`) as HTMLDivElement;
//             const allContainers = document.querySelectorAll('.artist-container') as NodeListOf<HTMLDivElement>;
//             allContainers.forEach((container) => {
//                 container.classList.remove('artist-selected-wrapper');
//                 container.classList.add('artist-no-selected-wrapper');
//                 container.setAttribute('data-visible', 'false');
//             });
//             const allBtns = document.querySelectorAll('.artist-btn') as NodeListOf<HTMLDivElement>;
//             allBtns.forEach((btn) => {
//                 btn.classList.remove('active-artist');
//                 btn.classList.add('no-active-artist');
//             });
//             targetContainer.classList.remove('artist-no-selected-wrapper');
//             targetContainer.classList.add('artist-selected-wrapper');
//             targetBtn.classList.remove('no-active-artist');
//             targetBtn.classList.add('active-artist');
//         }
//     });
//     const artistBtns = document.querySelectorAll('.artist-btn') as NodeListOf<HTMLDivElement>;
//     if(artistBtns !== null && artistBtns.length > 0) {
//         const firstBtn = artistBtns[0];
//         const firstContainer = document.querySelector(`.${firstBtn.dataset.target}`) as HTMLDivElement;
//         firstBtn.classList.add('active-artist');
//         firstContainer.classList.remove('artist-no-selected-wrapper');
//         firstContainer.classList.add('artist-selected-wrapper');
//         firstContainer.setAttribute('data-visible', 'true');
//     }
// }





// const artistContainers = document.querySelectorAll('.artist-container') as NodeListOf<HTMLDivElement>;
// const artistButtons = document.querySelectorAll('.artist-btn') as NodeListOf<HTMLDivElement>;

// artistButtons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     artistContainers.forEach((container, containerIndex) => {
//       const visible = containerIndex === index;
//       container.setAttribute("data-visible", visible.toString());

//       const isActiveContainer = visible ? "active-container" : "no-active-container";
//       container.classList.remove("active-container", "no-active-container");
//       container.classList.add(isActiveContainer);
//     });

//     artistButtons.forEach((btn, btnIndex) => {
//       const isActive = btnIndex === index;
//       btn.classList.toggle('active-artist', isActive);
//       btn.classList.toggle('no-active-artist', !isActive);
//     });
//   });
// });










const faders = document.querySelectorAll<HTMLElement>(".fade-in");
const fadersImgOne = document.querySelectorAll<HTMLElement>(".fade-in-img-one");
const fadersImgTwo = document.querySelectorAll<HTMLElement>(".fade-in-img-two");

const appearOptions: IntersectionObserverInit = {
  rootMargin: "0px 0px -200px 0px",
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

fadersImgOne.forEach((fader) => {
  appearOnScroll.observe(fader);
});
fadersImgTwo.forEach((fader) => {
  appearOnScroll.observe(fader);
});


const navContainer = document.querySelector('.nav-container') as HTMLElement;
let lastScrollPosition = 0;
const fadeOutThreshold = window.innerHeight * 0.5; // Set the fade-out threshold to 50% of the viewport height

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > lastScrollPosition && currentScrollPosition > fadeOutThreshold) {
    // Scrolling down past the fade-out threshold, fade out the nav container
    // navContainer.style.opacity = '0';
    navContainer.style.animation = 'fadeOutNav .4s forwards';
  } else if (currentScrollPosition < lastScrollPosition || currentScrollPosition <= fadeOutThreshold) {
    // Scrolling up or not past the fade-out threshold, show the nav container again
    navContainer.style.animation = 'fadeInNav .4s forwards';
  }

  lastScrollPosition = currentScrollPosition;
});



interface RandomArtist {
  id: number;
  artist_avatar: string;
  artist_background_picture: string;
  artist_name: string;
  artist_song: string;
  link_last_release: string;
  alt_avatar: string;
}

const randomArtists: RandomArtist[] = [
  {
    id: 0,
    artist_avatar: 'https://images.unsplash.com/flagged/photo-1563205764-79ea509b3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1561&q=80',
    artist_background_picture: 'https://images.unsplash.com/photo-1575285113814-f770cb8c796e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    artist_name: 'Cloud 9',
    artist_song: 'You need me',
    link_last_release: '',
    alt_avatar: '',
  },
  {
    id: 1,
    artist_avatar: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80',
    artist_background_picture: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80',
    artist_name: 'Anomaly',
    artist_song: 'Never Ending Story',
    link_last_release: '',
    alt_avatar: '',
  },
  {
    id: 2,
    artist_avatar: 'https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
    artist_background_picture: 'https://images.unsplash.com/photo-1560800452-f2d475982b96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80',
    artist_name: 'Kiëra',
    artist_song: 'Not for you',
    link_last_release: '',
    alt_avatar: '',
  },
  {
    id: 3,
    artist_avatar: 'https://images.unsplash.com/photo-1520012046139-d5cc1ee6f11c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80',
    artist_background_picture: 'https://images.unsplash.com/photo-1520012046139-d5cc1ee6f11c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80',
    artist_name: 'Scott Random',
    artist_song: 'Goone',
    link_last_release: '',
    alt_avatar: '',
  },
  {
    id: 4,
    artist_avatar: 'https://images.unsplash.com/photo-1640080878866-938a9766ef55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80',
    artist_background_picture: 'https://images.unsplash.com/photo-1640080878866-938a9766ef55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80',
    artist_name: 'Samuella',
    artist_song: 'Be loved',
    link_last_release: '',
    alt_avatar: '',
  },
 
];
const randomArtistContainer = document.querySelector('.random-artist-container') as HTMLDivElement;

function showRandomElement() {
  const randomIndex = Math.floor(Math.random() * randomArtists.length);
  const randomElement = randomArtists[randomIndex];

  const artistContainer = document.createElement('div');
  artistContainer.className = 'artist-container';
  artistContainer.style.backgroundImage = `url(${randomElement.artist_background_picture})`;
  artistContainer.innerHTML = `<div class="artist-wrapper margin flex items-center justify-between gap-04rem">
  <div class="artist-avatar">
    <img class="artist-avatar-img wh-full" src="${randomElement.artist_avatar}" alt="${randomElement.alt_avatar}">
  </div>
  <div class="artist-info w-full flex items-center justify-between gap-04rem padd-in-1rem">

    <div class="artist-name flex-col-start gap-04rem">
      <h2 class="uppercase font-size-span">${randomElement.artist_name}</h2>
      <p class="font-size-paragraph">${randomElement.artist_song}</p>
    </div>
    <a href="${randomElement.link_last_release}" class="explore-btn button-background-white main-tex-color-section-white text-decolist-none font-weight-600 padd-block-04rem padd-in-1rem parag-text">Latest release</a>
  </div>
</div>
  `

  randomArtistContainer.appendChild(artistContainer);
}

showRandomElement();



// interface randomHour{
//   id: number;
// }
// interface randomDay{
//   id: number;
// }
// const randomHours: randomHour[] = [{1},{2},{3},{4},{5},{1},{1},{1},{1},{1},{1},{1},{1},{1},{1},{1},{1},{1},{1},{1},{1},{1},{1},{1},{1}];
// const randomDays: randomDay[] = [1, 2, 3, 4,5]
// const lastDropTime = document.querySelector('.last-drop-time');

// function randomHoursDays() {
//   const randomIndexHour = Math.floor(Math.random() * randomHours.length);
//   const randomIndexDay = Math.floor(Math.random() * randomDays.length);
//   const randomElementHour = randomHours[randomIndexHour];
//   const randomElementDay = randomDays[randomIndexHour];
//   lastDropTime.innerHTML = `${randomElementDay.id}d ${randomElementHour}h `
// }



interface randomHour {
  id: number;
}

interface randomDay {
  id: number;
}

const randomHours: randomHour[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 3 }, { id: 14 }, { id: 15 }, { id: 16 }, { id: 17 }, { id: 18 }, { id: 19 }, { id: 20 }, { id: 21 }, { id: 22 }, { id: 23 }];
const randomDays: randomDay[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const lastDropTime: HTMLElement | null = document.querySelector('.last-drop-time');


function randomHoursDays() {
  if (lastDropTime) {
    const randomIndexHour = Math.floor(Math.random() * randomHours.length);
    const randomIndexDay = Math.floor(Math.random() * randomDays.length);
    const randomElementHour = randomHours[randomIndexHour];
    const randomElementDay = randomDays[randomIndexDay];
    lastDropTime.innerHTML = `${randomElementDay.id}d ${randomElementHour.id}h `;
  }
}

randomHoursDays();

interface ScrolledArtist {
  name: string;
  img: string;
};

const scrolled: ScrolledArtist[] = [
  // { name: '', 
  //   img: '' 
  // },
  { name: 'Alesso', 
    img: 'https://edm.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTYzODA2NTIzMDExNzA0NTQ1/alesso.png' 
  },
  { name: 'Ed Sheeran', 
    img: 'https://www.rollingstone.com/wp-content/uploads/2018/06/ed-sheeran-cover-story-rolling-stone-interview-8e2ddd75-2223-4cad-ae6a-247b9f0d9e9b.jpg' 
  },
  { name: 'Alicia Keys ', 
    img: 'https://media.vanityfair.com/photos/5fca8d5c7bbdf3f96726bd0c/master/w_2560%2Cc_limit/alicia-keys-lede.jpg' 
  },
  { name: 'Swedish House Mafia', 
    img: 'https://edm.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTYyNDY0MDg1NjE3NjgxNzg1/swedish-house-mafia.png' 
  },
  { name: 'Weeknd', 
    img: 'https://wallpapers.com/images/hd/the-weeknd-iphone-4p52uitjhtz359xh.jpg' 
  },
  { name: 'Grimes', 
    img: 'https://media.vogue.co.uk/photos/5e4fe5bae0904c0008eb9aac/2:3/w_2560%2Cc_limit/GettyImages-1128719695.jpg' 
  },
  { name: 'A$AP Rocky', 
    img: 'https://hips.hearstapps.com/hmg-prod/images/aap-rocky-from-the-film-monster-poses-for-a-portrait-in-the-youtube-x-getty-images-portrait-studio-at-2018-sundance-film-festival-on-january-22-2018-in-park-city-utah-photo-by-robby-klein_getty-images.jpg?resize=1200:*' 
  },
  { name: 'FKA Twigs', 
    img: 'https://img.redbull.com/images/c_fill,g_auto,w_400,h_540/q_auto:low,f_auto/redbullcom/2014/02/27/1331635816717_2/fka-twigs' 
  },
  { name: 'Harry Style', 
    img: 'https://media.npr.org/assets/img/2020/02/27/wide-use_hpromophoto_helenepambrun-72fdb64792139d94a06f18686d0bb3131a238a70-s1100-c50.jpg' 
  },
  { name: 'Dr. Dre', 
    img: 'https://cdn2.hubspot.net/hubfs/2008411/Images/Dr_Dre.jpg' 
  },
  { name: 'Tiësto', 
    img: 'https://res.cloudinary.com/dr89d8ldb/image/upload/v1/Content%20-%20arty%C5%9Bci/tiesto_pobtcz' 
  },
  { name: 'Calvin Harris', 
    img: 'https://cdns-images.dzcdn.net/images/artist/566c5a0826b2981a396850ad6ab54429/500x500.jpg' 
  },
  { name: 'Beyonce', 
    img: 'https://images.bstatic.de/guBina9xSyrdswXX7HSlTgyOEtk=/480x480/filters:focal(640x362:660x382)/images/0e129c32/14bb/4ce1/9d0e/1c96bc0ed2da.jpeg' 
  },
  
];


const scrollContainer = document.querySelector(".picture-wrapper") as HTMLElement;
scrolled.forEach((artist) => {
  const breakImg = document.createElement('div');
  breakImg.className = 'breake-img break-img-two fade-in-img-one img-top';
  breakImg.innerHTML = `<img class="breake-img-width" src="${artist.img}" alt="">`
  scrollContainer.appendChild(breakImg);
});








// const scrollContainer = document.querySelector(".scroll-container") as HTMLElement;
// scrolled.forEach((artist) => {
//   const imgBreakWrapper = document.createElement('div');
//   imgBreakWrapper.className = 'flex flex-col gap-1rem flex-center'
//   const breakImg = document.createElement('div');
//   const artistName = document.createElement('span');
//   artistName.className = 'main-tex-color-section-dark';
//   artistName.innerText = `${artist.name}`
//   breakImg.className = 'breake-img break-img-two img-top';
//   breakImg.innerHTML = `<img class="breake-img-width" src="${artist.img}" alt="">`
//   scrollContainer.appendChild(imgBreakWrapper);
//   imgBreakWrapper.appendChild(breakImg);
//   imgBreakWrapper.appendChild(artistName);
// });



// const scrollContainer = document.querySelector(".scroll-container") as HTMLElement;
// scrolled.forEach((artist) => {
//   const scrolledDiv = document.createElement('div');
//   scrolledDiv.className = 'flex flex-col flex-center w-full gap-1rem'
//   scrolledDiv.innerHTML = `
//     <img src="${artist.img}" alt="${artist.name}" class ="img-width">
//     <span class="main-tex-color-section-dark">${artist.name}</span>
//   `;
//   scrollContainer.appendChild(scrolledDiv);
// });

// const scrollContainer = document.querySelector('.scroll-container')!;
// const scrollContainer = document.querySelector('.scroll-container') as HTMLDivElement;

// let isMouseDown = false;
// let startX = 0;
// let scrollLeft = 0;

// scrollContainer.addEventListener('mousedown', (e: MouseEvent) => {
//   isMouseDown = true;
//   startX = e.pageX - scrollContainer.offsetLeft;
//   scrollLeft = scrollContainer.scrollLeft;
// });

// scrollContainer.addEventListener('mouseleave', () => {
//   isMouseDown = false;
// });

// scrollContainer.addEventListener('mouseup', () => {
//   isMouseDown = false;
// });

// scrollContainer.addEventListener('mousemove', (e: MouseEvent) => {
//   if (!isMouseDown) {
//     return;
//   }
//   e.preventDefault();
//   const x = e.pageX - scrollContainer.offsetLeft;
//   const walk = x - startX;
//   scrollContainer.scrollLeft = scrollLeft - walk;
// });


// const scrollContainer = document.querySelector(".scroll-container");
// let isScrolling = false;
// let lastScrollPosition = 0;
// let scrollTarget = 0;

// function smoothScrollTo(target: number, duration: number) {
//   isScrolling = true;
//   const start = scrollContainer.scrollLeft;
//   const distance = target - start;
//   const startTime = performance.now();

//   function step(timestamp: number) {
//     const elapsed = timestamp - startTime;
//     const progress = Math.min(elapsed / duration, 1);
//     const ease = easeInOutQuad(progress);
//     scrollContainer.scrollLeft = start + distance * ease;

//     if (elapsed < duration) {
//       requestAnimationFrame(step);
//     } else {
//       isScrolling = false;
//     }
//   }

//   requestAnimationFrame(step);
// }

// function handleScroll(event: Event) {
//   if (!isScrolling) {
//     const currentScrollPosition = scrollContainer.scrollLeft;
//     if (currentScrollPosition !== lastScrollPosition) {
//       scrollTarget = currentScrollPosition + (currentScrollPosition - lastScrollPosition);
//       lastScrollPosition = currentScrollPosition;
//       smoothScrollTo(scrollTarget, 200);
//     }
//   }
// }

// function easeInOutQuad(t: number) {
//   return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
// }

// scrollContainer.addEventListener("scroll", handleScroll);



// scrolled.forEach((artist) => {
//   const scrolledDiv = document.createElement('div');
//   scrolledDiv.innerHTML = `
//     <img src="${artist.img}" alt="${artist.name}" class ="img-width">
//     <span>${artist.name}</span>
//   `;
//   scrollContainer.appendChild(scrolledDiv);
// });


// let lastPositionScrolled = scrollContainer.scrollLeft;
// let isScrolling: NodeJS.Timeout;

// scrollContainer.addEventListener("scroll", () => {
//   const currentScrollPosition = scrollContainer.scrollLeft;
//   const scrollAmount = currentScrollPosition - lastPositionScrolled;

//   if (scrollAmount > 0) {
//     scrollContainer.scrollLeft += Math.ceil(scrollAmount / 10);
//   } else if (scrollAmount < 0) {
//     scrollContainer.scrollLeft += Math.floor(scrollAmount / 10);
//   }

//   lastPositionScrolled = currentScrollPosition;
// });

// scrollContainer.addEventListener("mousedown", (event) => {
//   event.preventDefault();
//   const startX = event.pageX;
//   const startScrollLeft = scrollContainer.scrollLeft;

//   scrollContainer.style.cursor = "grabbing";

//   const onMouseMove = (event: MouseEvent) => {
//     const diff = event.pageX - startX;
//     scrollContainer.scrollLeft = startScrollLeft - diff;
//   };

//   const onMouseUp = () => {
//     scrollContainer.style.cursor = "grab";
//     document.removeEventListener("mousemove", onMouseMove);
//     document.removeEventListener("mouseup", onMouseUp);
//   };

//   document.addEventListener("mousemove", onMouseMove);
//   document.addEventListener("mouseup", onMouseUp);
// });


// // Define variables
// const sliderWrapper = document.querySelector('.slider-wrapper') as HTMLDivElement;
// const sliderBox = document.querySelector('.slider-box') as HTMLDivElement;
// const slides = document.querySelectorAll('.slider-content') as NodeListOf<HTMLDivElement>;
// const slideTabs = document.querySelectorAll('.slide-tab') as NodeListOf<HTMLDivElement>;
// const prevArrow = document.querySelector('.arrow-prev') as HTMLDivElement;
// const nextArrow = document.querySelector('.arrow-next') as HTMLDivElement;
// const slideWidth = slides[0].offsetWidth;

// let currentIndex = 0;

// // Add event listeners to arrows
// prevArrow.addEventListener('click', showPrevSlide);
// nextArrow.addEventListener('click', showNextSlide);

// function showPrevSlide() {
//   currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
//   showSlide(currentIndex);
// }

// function showNextSlide() {
//   currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
//   showSlide(currentIndex);
// }

// function showSlide(index: number) {
//   // Hide all slides and slide tabs
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].classList.remove('slider-current');
//     slideTabs[i].classList.remove('slide-tab-current');
//     slides[i].classList.add('no-appeared');
//   }

//   // Show current slide and slide tab
//   slides[index].classList.remove('no-appeared');
//   slides[index].classList.add('slider-current');
//   slideTabs[index].classList.add('slide-tab-current');
// }

// // Initialize slider
// showSlide(currentIndex);

// type Slider = {
//   imgSrc: string;
//   title: string;
//   paragraph: string;
//   visible: boolean;
//   span2: string;
//   p2: string;
// };

// const sliders: Slider[] = [
//   {
//     imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
//     title: "Allan Kingdom",
//     paragraph: "streams since purchase",
//     visible: true,
//     span2: "Span 2",
//     p2: "Paragraph 2"
//   },
//   {
//     imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
//     title: "",
//     paragraph: "",
//     visible: false,
//     span2: "",
//     p2: ""
//   },
//   {
//     imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
//     title: "",
//     paragraph: "",
//     visible: false,
//     span2: "",
//     p2: ""
//   },
//   {
//     imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
//     title: "",
//     paragraph: "",
//     visible: false,
//     span2: "",
//     p2: ""
//   },
// ];
// let currentSlide = 0;

// function renderSlider(slider: Slider) {
//   const sliderBoxContent = document.querySelector('.slider-box-content');
//   if (!sliderBoxContent) return;

//   const sliderContent = document.createElement('div');
//   sliderContent.classList.add('slider-content', 'flex', 'flex-col', 'justify-start', 'gap-1rem');
  
//   if (!slider.visible) {
//     sliderContent.classList.add('no-appeared');
//   }
  
//   sliderBoxContent.appendChild(sliderContent);

//   const sliderBackground = document.createElement('div');
//   sliderBackground.classList.add('slider-background', 'absolute', 'wh-full', 'top-0', 'left-0', 'z-i-1');
//   sliderContent.appendChild(sliderBackground);

//   const sliderFlex = document.createElement('div');
//   sliderFlex.classList.add('flex', 'items-center', 'padd-block-1rem', 'gap-1rem', 'z-i-10');
//   sliderContent.appendChild(sliderFlex);

//   const artImgWrapper = document.createElement('div');
//   artImgWrapper.classList.add('art-img-wrapper', 'relative', 'flex-center', 'border-rounded-full', 'over-hidden');
//   sliderFlex.appendChild(artImgWrapper);

//   const img = document.createElement('img');
//   img.classList.add('w-full', 'object-cover', 'breake-img-width');
//   img.setAttribute('src', slider.imgSrc);
//   img.setAttribute('alt', '');
//   artImgWrapper.appendChild(img);

//   const span = document.createElement('span');
//   span.classList.add('main-tex-color-section-dark', 'font-weight-600', 'artis-font-active');
//   span.setAttribute('data-visible', slider.visible.toString());
//   span.textContent = slider.title;
//   sliderFlex.appendChild(span);

//   const flexCol = document.createElement('div');
//   flexCol.classList.add('flex', 'flex-col', 'gap-04rem', 'z-i-10');
//   sliderContent.appendChild(flexCol);

//   const titleSpan = document.createElement('span');
//   titleSpan.classList.add('main-tex-color-section-dark', 'title-text', 'letter-spacing-big');
//   titleSpan.textContent = slider.title;
//   flexCol.appendChild(titleSpan);
// }

// function show(direction: string) {
//   const previousSlide = currentSlide;
//   if (direction === 'prev') {
//     currentSlide = currentSlide === 0 ? sliders.length - 1 : currentSlide - 1;
//   } else if (direction === 'next') {
//     currentSlide = currentSlide === sliders.length - 1 ? 0 : currentSlide + 1;
//   }

//   if (previousSlide !== currentSlide) {
//     const previousSlider = sliders[previousSlide];
//     previousSlider.visible = false;

//     const currentSlider = sliders[currentSlide];
//     currentSlider.visible = true;

//     const sliderContent = document.querySelectorAll('.slider-content');
//     sliderContent.forEach((content) => {
//       content.remove();
//     });

//     sliders.forEach((slider) => {
//       renderSlider(slider);
//     });
//   }
// }


// const imageArr = [

// ]
const slider = document.querySelector(".slider-container");
const wrapper = document.querySelector(".slider-wrapper");
const sliderBox = document.querySelector('.slider-box')

type Slider = {
  name: string;
  avatar: string;
  avatar_alt: string;
  streams: number;
  totalPerc: number;
  backgroundImg: string;
};

const sliders:Slider[] = [
  {
    name: "Allan Kingdom",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    avatar_alt: "Allan Kingdom Avatar Picture",
    streams: 28.4,
    totalPerc: 16.9,
    backgroundImg: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80", 
  },
  {
    name: "Aiony Haust",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80",
    avatar_alt: "",
    streams: 57.9,
    totalPerc: 26.7,
    backgroundImg: "https://images.unsplash.com/photo-1608411404720-c8f0417bcdba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80", 
  },
  {
    name: "Nicolas Horn",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
    avatar_alt: "",
    streams: 76.2,
    totalPerc: 34.1,
    backgroundImg: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80", 
  },
  {
    name: "Natalia Onni",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    avatar_alt: "",
    streams: 18.4,
    totalPerc: 10.4,
    backgroundImg: "https://images.unsplash.com/photo-1522932753915-9ee97e43e3d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80", 
  }  
]


const renderSlider = (sliders:Slider) => {
  const sliderSlide = document.createElement('div');
  sliderSlide.className = 'slider-slide slider-box-content flex flex-col wh-full gap-1rem padd-1rem absolute top-0 left-0';
  const sliderBackground = document.createElement('div');
  sliderBackground.className = 'slider-background absolute wh-full top-0 left-0 z-i-1';
  sliderBackground.style.backgroundImage = `url(${sliders.backgroundImg})`;
  sliderSlide.innerHTML = ` <div class="slider-content flex flex-col justify-start gap-1rem">

  <div class="flex items-center padd-block-1rem gap-1rem z-i-10">
    <div class="art-img-wrapper relative flex-center border-rounded-full over-hidden">
      <img
        class="w-full object-cover breake-img-width"
        src="${sliders.avatar}"
        alt="${sliders.avatar_alt}"
      />
    </div>
    <span
      data-visible="true"
      class="main-tex-color-section-dark font-weight-600 artis-font-active"
      >${sliders.name}</span
    >
  </div>
  <div class="flex flex-col gap-04rem z-i-10">
    <span class="main-tex-color-section-dark title-text letter-spacing-big">+${sliders.streams}M</span>
    <p class="main-tex-color-section-dark parag-text">streams since purchase</p>
  </div>
  <div class="absolute bottom-0 flex flex-col gap-04rem padd-block-2rem z-i-10">
    <span class="main-tex-color-section-dark font-size-sub-title">${sliders.totalPerc}%</span>
    <p class="main-tex-color-section-dark parag-text">of your total portfolio streams</p>
  </div>
</div>`

sliderSlide?.appendChild(sliderBackground);
sliderBox?.appendChild(sliderSlide);


};

for (const slider of sliders) {
renderSlider(slider);
}


const slides = document.querySelectorAll(".slider-slide");
const prevArrow = document.querySelector(".prev-arrow") as HTMLElement;
const nextArrow = document.querySelector(".next-arrow") as HTMLElement;
const sliderTab = document.querySelectorAll('.slide-tab');
let currentSlide = 0;
const slideWidth = slides[0].clientWidth;



// Move the slider to the current slide
const moveToSlide = () => {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("currentSlide");
    } else {
      slide.classList.remove("currentSlide");
    }
  });
};

slides[0].classList.add("currentSlide");

const moveToTab = () =>{
  sliderTab.forEach((tab, index) =>{
    if(index === currentSlide){
      tab.classList.remove("slide-tab-no-active");
    }else{
      tab.classList.add("slide-tab-no-active");
    }
  })
}
// Move to the next slide
const nextSlide = () => {
  if (nextArrow && currentSlide < slides.length - 1) {
    currentSlide++;
    moveToSlide();
    moveToTab();
    nextArrow.style.opacity = currentSlide === slides.length - 1 ? "0.5" : "1";
    prevArrow.style.opacity = "1";
  } else if (nextArrow) {
    nextArrow.style.opacity = "0.5";
  }
};

// Move to the previous slide
const prevSlide = () => {
  if (prevArrow && currentSlide > 0) {
    currentSlide--;
    moveToSlide();
    moveToTab();
    prevArrow.style.opacity = currentSlide === 0 ? "0.5" : "1";
    nextArrow.style.opacity = "1";
  } else if (prevArrow) {
    prevArrow.style.opacity = "0.5";
  }
};

// Add event listeners to the arrows
if (prevArrow) {
  prevArrow.addEventListener("click", prevSlide);
  // prevArrow.style.opacity = "0.5";
}

if (nextArrow) {
  nextArrow.addEventListener("click", nextSlide);
}
