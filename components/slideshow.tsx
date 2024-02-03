<!DOCTYPE html>
<html lang="en">
<head></head>
  <style>
    button{
        border:none;
        background: none;
        color: #fafafa;
    }
.slideshow-container {
  position: relative;
  margin: auto;
  transition:opacity 400ms cubic-bezier(0.42, 0, 0.58, 1);;
  animation:dissolve 3s infinite;
}

.mySlides {
  display: none;
}

.prev, .next {
  position: absolute;
  top: 50%;
  width: 61;
  height:67.3;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-size: 50px;
  cursor: pointer;
  z-index: 1;
  
}
.prev{
    left:0;
}
.next{
    right:0;
}

  </style>
</head>
<body>
  <div id="background" class="slideshow-container">
    <div class="mySlides">
      <img src="https://nitkkr.ac.in/wp-content/uploads/2023/11/IMG20220903190255-1-scaled.jpg" style="width:100%" loading="eager" height="1080" width="1920" id="hover">
    </div>

    <div class="mySlides">
      <img src="https://nitkkr.ac.in/wp-content/uploads/2022/01/24131961_285405678647849_426967072086000359_o.jpg" style="width:100%" loading="lazy" height="1080" width="1920" id="hove">
    </div>

    <a class="prev"  id="overlayText">&#10094;</a>
    <a class="next"  id="over">&#10095;</a>
  </div>

  <script >
    var slideIndex = 0;
showSlides();
function showSlides() {
    var slides = document.getElementsByClassName("mySlides ");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}
var hoverImage = document.getElementById('hover');
var overlayText = document.getElementById('overlayText');
var hoverimagee = document.getElementById('hove');
var over = document.getElementById('over');
if (hoverImage && overlayText && hoverimagee && over) {
    hoverImage.addEventListener('mouseover', function () {
        if (overlayText && over) {
            overlayText.style.opacity = '1';
            over.style.opacity = '1';
        }
    });
    hoverImage.addEventListener('mouseout', function () {
        if (overlayText && over) {
            overlayText.style.opacity = '0';
            over.style.opacity = '0';
        }
    });
    hoverimagee.addEventListener('mouseover', function () {
        if (overlayText && over) {
            overlayText.style.opacity = '1';
            over.style.opacity = '1';
        }
    });
    hoverimagee.addEventListener('mouseout', function () {
        if (overlayText && over) {
            overlayText.style.opacity = '0';
            over.style.opacity = '0';
        }
    });
}
    

</script>
</body>
</html>