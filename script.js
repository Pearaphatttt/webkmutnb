let slideIndex = 1; // เริ่มที่สไลด์ที่ 1
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {
    slideIndex = 1; // เมื่อคลิกข้ามไปสไลด์สุดท้าย กลับไปที่สไลด์แรก
  }
  if (n < 1) {
    slideIndex = slides.length; // เมื่อคลิกข้ามไปก่อนหน้าสไลด์แรก กลับไปที่สไลด์สุดท้าย
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}
