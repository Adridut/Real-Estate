let imageContainer = document.getElementById("imageContainer");
for (let i = 0; i < 9; i++) {
    imageContainer.innerHTML += ('<div class="cardContainerHorizontal"><a href="#popup" rel="modal:open"><img src="../../Assets/Images/home.jpg" class="cardImageHorizontal" alt="home"></img></a><h3 class="infos"><a href="../Property details/index.html" class="header-link">Beautiful 500qm house</a></h3><h4 class="title">300 000$</h4><p class="infos">5824 Boul. Saint-Laurent, Montréal, QC H2T 1T3, Canada</p></div>')
}
