const images = [
    "https://i.pinimg.com/564x/d3/1b/b9/d31bb905effbabb65e7ad7b8f08eec45.jpg",
    "https://i.pinimg.com/564x/da/de/ff/dadeffa6c113e136a130ed1467e7bd2c.jpg",
    "https://i.pinimg.com/564x/b3/af/b8/b3afb8482ac64a95d1ec54e907b39a03.jpg",
    "https://i.pinimg.com/736x/df/59/e1/df59e1fff672e8ce6f1a59d208000979.jpg",
    "https://i.pinimg.com/564x/40/1b/06/401b0689972a2dcf9e0a27162c2cceb6.jpg"
];

let currentImageIndex = 0;

function setBackground(index) {
    const imgWrapper = document.getElementById("img-wrapper");
    imgWrapper.style.backgroundImage = `url(${images[index]})`;
    currentImageIndex = index;
}

function showImage(index) {
    setBackground(index);
    togglePrevButton();
    toggleNextButton();
}

function nextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        setBackground(currentImageIndex);
    }
    togglePrevButton();
    toggleNextButton();
}

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        setBackground(currentImageIndex);
    }
    togglePrevButton();
    toggleNextButton();
}

function togglePrevButton() {
    const prevBtn = document.getElementById("prev-btn");
    prevBtn.style.display = currentImageIndex === 0 ? "none" : "block";
}

function toggleNextButton() {
    const nextBtn = document.getElementById("next-btn");
    nextBtn.style.display = currentImageIndex === images.length - 1 ? "none" : "block";
}

setBackground(currentImageIndex);

document.getElementById("next-btn").addEventListener("click", nextImage);
document.getElementById("prev-btn").addEventListener("click", prevImage);

const photoViewer = document.querySelectorAll('.img-items');
photoViewer.forEach((item, index) => {
    item.addEventListener('click', () => showImage(index));
});

togglePrevButton();
toggleNextButton();
