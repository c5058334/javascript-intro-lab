(function() {
  let imageRotInterval = 5000;
  let imageAr = [
    'images/view1.jpg',
    'images/view2.jpg',
    'images/view3.jpg',
    'images/view4.jpg',
    'images/view5.jpg',
    'images/view6.jpg'
  ];

  let currentIndex = 0;

  function rotImage(rotBackward=false) {
    if (rotBackward) {
      currentIndex -= 1;

      if (currentIndex < 0) {
        currentIndex = imageAr.length -1;
      }
    } else {
      // Increment the index to get the next image
      currentIndex += 1;
  
      if (currentIndex >= imageAr.length) {
        currentIndex = 0;
      }
    }

    // Change the image source to the next image in the array
    document.getElementById('myImages').setAttribute('src', imageAr[currentIndex]);
  }

  // Automatically rotate image
  rotImage(); // Jumpstart the system so an image is always visible
  let rotTimer = setInterval(rotImage, imageRotInterval);

  // Manual image rotator buttons
  document.getElementById("imageRotBackward").addEventListener("click", (ev) => {
    rotImage(true);
    clearInterval(rotTimer);
    rotTimer = setInterval(rotImage, imageRotInterval);
  })

  document.getElementById("imageRotForward").addEventListener("click", (ev) => {
    rotImage(false);
    clearInterval(rotTimer);
    rotTimer = setInterval(rotImage, imageRotInterval);
  })
})();
