// Here is the testimony carousel code

function testimonyNext() {
  const max = 4; // the max number of slides
  let current = Number(
    getComputedStyle(
      document.getElementById("testimony-carousel")
    ).getPropertyValue("--selectedIndex")
  );
  const btnNext = document.querySelector("[title='Next']");
  const btnPrevious = document.querySelector("[title='Previous']");
  const newSlide = current + 1 > max ? 0 : current + 1;

  updateTestimonyButton(newSlide);

  document
    .getElementById("testimony-carousel")
    .style.setProperty("--selectedIndex", newSlide);

  if (newSlide === max) {
    btnNext.classList.add("invisible");
  } else {
    btnNext.classList.remove("invisible");
    btnPrevious.classList.remove("invisible");
  }

  if (newSlide === 0) {
    btnPrevious.classList.add("invisible");
  }
}

function testimonyPrevious() {
  const max = 4; // the max number of slides
  let current = Number(
    getComputedStyle(
      document.getElementById("testimony-carousel")
    ).getPropertyValue("--selectedIndex")
  );
  const btnNext = document.querySelector("[title='Next']");
  const btnPrevious = document.querySelector("[title='Previous']");

  const newSlide = current === 0 ? max : current - 1;
  updateTestimonyButton(newSlide);

  document
    .getElementById("testimony-carousel")
    .style.setProperty("--selectedIndex", newSlide);

  btnNext.classList.remove("invisible");
  if (newSlide === 0) {
    btnPrevious.classList.add("invisible");
  }
}

// This is for the dot buttons ( <- . . . . ->)
function updateTestimonyButton(index) {
  const colour = `block w-[9px] h-[9px] rounded-full cursor-pointer !bg-new-gold-primary`;
  const noColour = `block w-[9px] h-[9px] rounded-full cursor-pointer bg-new-gray-100 hover:bg-new-gold-primary`;
  for (let i = 0; i < 5; i++) {
    document.getElementById("testimony-carousel-buttons").children[
      i
    ].classList = i === index ? colour : noColour;
  }
}

// Here is the sample investment carousel code

const mapping = {
  1: {
    allowed: [0, 1, 2, 3, 4, 5],
  },
  2: {
    allowed: [0, 2, 4],
  },
  3: {
    allowed: [0, 3],
  },
};

function sampleNext() {
  const btnNext = document.querySelectorAll("[title='Next']")[1];
  const btnPrevious = document.querySelectorAll("[title='Previous']")[1];

  const carousel = document.getElementById("sample-carousel");
  let incrementBy = Number(
    getComputedStyle(carousel).getPropertyValue("--itemsInViewport")
  );
  let current = Number(
    getComputedStyle(carousel).getPropertyValue("--selectedIndex")
  );

  const allowed = mapping[incrementBy].allowed;
  const newSlide =
    current + incrementBy > allowed[allowed.length - 1]
      ? 0
      : current + incrementBy;

  btnPrevious.classList.toggle("invisible", newSlide === 0);
  btnNext.classList.toggle(
    "invisible",
    newSlide === allowed[allowed.length - 1]
  );

  const val = `--dragOffset: 0px; --gap: 20px; --itemsInViewport: ${incrementBy}; --selectedIndex: ${newSlide};`;
  carousel.style = val;

  updateSampleButton(newSlide, newSlide + incrementBy - 1);
}

function samplePrevious() {
  const btnNext = document.querySelectorAll("[title='Next']")[1];
  const btnPrevious = document.querySelectorAll("[title='Previous']")[1];

  const carousel = document.getElementById("sample-carousel");
  let incrementBy = Number(
    getComputedStyle(carousel).getPropertyValue("--itemsInViewport")
  );
  let current = Number(
    getComputedStyle(carousel).getPropertyValue("--selectedIndex")
  );

  const allowed = mapping[incrementBy].allowed;
  const newSlide =
    current - incrementBy < 0
      ? allowed[allowed.length - 1]
      : current - incrementBy;

  btnPrevious.classList.toggle("invisible", newSlide === 0);
  btnNext.classList.remove("invisible");

  const val = `--dragOffset: 0px; --gap: 20px; --itemsInViewport: ${incrementBy}; --selectedIndex: ${newSlide};`;
  carousel.style = val;

  updateSampleButton(newSlide, newSlide + incrementBy - 1);
}

// This is for the dot buttons ( <- . . . . ->)
function updateSampleButton(startIndex, endIndex) {
  const colour = `block w-[9px] h-[9px] rounded-full cursor-pointer !bg-new-gold-primary`;
  const noColour = `block w-[9px] h-[9px] rounded-full cursor-pointer bg-new-gray-100 hover:bg-new-gold-primary`;
  for (let i = 0; i < 6; i++) {
    document.getElementById("sample-carousel-buttons").children[i].classList =
      i >= startIndex && i <= endIndex ? colour : noColour;
  }
}

function widthResizer() {
  var width = window.innerWidth;
  var val;
  if (width >= 1280) {
    val = `--dragOffset: 0px; --gap: 20px; --itemsInViewport: 3; --selectedIndex: 0;`;
  } else if (width >= 1024) {
    val = `--dragOffset: 0px; --gap: 20px; --itemsInViewport: 2; --selectedIndex: 0;`;
  } else {
    val = `--dragOffset: 0px; --gap: 20px; --itemsInViewport: 1; --selectedIndex: 0;`;
  }
  document.getElementById("sample-carousel").style = val;
  updateSampleButton(
    0,
    Number(
      getComputedStyle(
        document.getElementById("sample-carousel")
      ).getPropertyValue("--itemsInViewport")
    ) - 1
  );
}
