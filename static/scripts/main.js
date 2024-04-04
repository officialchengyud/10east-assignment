function main() {
  // Setup event listener for nav button clicks
  initialiseNavigation();

  // Setup event listener for modal button clicks
  initialiseModal();

  // Setup carousel loop so that it rotates every 10s
  setTimeout(function () {
    testimonyCarouselLoop();
    sampleCarouselLoop();
  }, 10000);

  // Getting the width of the browser on load
  widthResizer();

  // Getting the width of the browser whenever the screen resolution changes.
  window.addEventListener("resize", widthResizer);

  // Animating the statistics
  let reached = {
    "counter-2": false,
    counter: false,
  };

  window.onscroll = function () {
    statsAnimate(12, 15000, "counter-2");
    statsAnimate(355, 600, "counter");
  };

  function statsAnimate(val, speed, elementId) {
    var testDivFromTop = document.getElementById("leverage-stats").offsetTop;
    var pageHeight = window.innerHeight;
    if (
      document.body.scrollTop > testDivFromTop - pageHeight ||
      document.documentElement.scrollTop > testDivFromTop - pageHeight
    ) {
      if (!reached[elementId]) {
        var i = 0;

        var inv = setInterval(function () {
          if (i < val)
            document.getElementById(elementId).innerHTML =
              ++i + "<sup class='text-4xl align-top'>+</sup>";
          else clearInterval(inv);
        }, speed / 100);
        reached[elementId] = true;
      }
    }
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Loop for the testimony carousel
function testimonyCarouselLoop() {
  (function nextSlide() {
    testimonyNext();
    // I timed the app.10east.co site, and it takes about 10 seconds
    setTimeout(nextSlide, 10000);
  })();
}

// Loop for the sample investment carousel
function sampleCarouselLoop() {
  (function nextSlide() {
    sampleNext();
    // I timed the app.10east.co site, and it takes about 10 seconds
    setTimeout(nextSlide, 10000);
  })();
}
