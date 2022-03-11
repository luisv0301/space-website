/* Global variables */

const btns = document.querySelectorAll(".slider-btn");
let previousBtn = 0;
const images = [
  "assets/crew/image-douglas-hurley.png",
  "assets/crew/image-mark-shuttleworth.png",
  "assets/crew/image-victor-glover.png",
  "assets/crew/image-anousheh-ansari.png",
  "assets/technology/image-launch-vehicle-portrait.jpg",
  "assets/technology/image-spaceport-portrait.jpg",
  "assets/technology/image-space-capsule-portrait.jpg",
];
let preloadedImages = [];
let crewImages = [];
let techImages = [];

const toggleActiveBtn = (id) => {
  btns[previousBtn].classList.remove("btn-active");
  btns[id].classList.add("btn-active");
  previousBtn = id;
};

const crewSlider = () => {
  const name = document.getElementById("name");
  const profession = document.getElementById("profession");
  const crewBtns = document.querySelectorAll(".btn");
  const crewMembers = [
    {
      name: "Douglas Hurley",
      proffesion: "commander",
      description:
        " Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      proffesion: "Mission Specialist",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "victor glover",
      proffesion: "pilot",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer",
    },
    {
      name: " Anousheh Ansari",
      proffesion: "Flight Engineer",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];

  const changeCrewContent = (id) => {
    const crewImg = document.getElementById("crewImage");
    const newImage = crewImages[id];
    newImage.setAttribute("id", "crewImage");
    crewImg.parentNode.replaceChild(newImage, crewImg);
    name.textContent = crewMembers[id].name;
    profession.textContent = crewMembers[id].proffesion;
    description.textContent = crewMembers[id].description;
  };

  [...crewBtns].forEach((btn, index) => {
    btn.addEventListener("click", () => {
      changeCrewContent(index);
      toggleActiveBtn(index);
    });
  });
};

const techSlider = () => {
  const techName = document.getElementById("name");
  const techDescription = document.getElementById("description");
  const techBtns = document.querySelectorAll(".tech-btn");
  const techInfo = [
    {
      name: "LAUNCH VEHICLE",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "SPACEPORT",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "SPACE CAPSULE",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  const changeTechContent = (id) => {
    const techImg = document.getElementById("image");
    const newImage = techImages[id];
    newImage.setAttribute("id", "image");
    techImg.parentNode.replaceChild(newImage, techImg);
    techName.textContent = techInfo[id].name;
    techDescription.textContent = techInfo[id].description;
  };

  [...techBtns].forEach((btn, index) => {
    btn.addEventListener("click", () => {
      changeTechContent(index);
      toggleActiveBtn(index);
    });
  });
};

const activateMobileNavbar = () => {
  const hamburMenu = document.querySelector(".hambur-menu");
  const closebtn = document.querySelector(".close-btn");
  const navList = document.querySelector(".nav-items--primary");

  const toggleClasses = () => {
    hamburMenu.classList.toggle("isInactive");
    navList.classList.toggle("nav--visible");
    closebtn.classList.toggle("close-btn--visible");
  };

  hamburMenu.addEventListener("click", toggleClasses);
  closebtn.addEventListener("click", toggleClasses);
};

const preloadImages = () => {
  window.addEventListener("DOMContentLoaded", () => {
    images.forEach((img) => {
      let newImage = new Image();
      newImage.src = img;
      preloadedImages.push(newImage);
    });

    crewImages = preloadedImages.slice(0, 4);
    techImages = preloadedImages.slice(4);
  });
};

activateMobileNavbar();
preloadImages();
crewSlider();
techSlider();
