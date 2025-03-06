let mainImage = document.querySelectorAll(".main-image img");
let thumbImage = document.querySelectorAll(".image-thumbnail img");
let lightboxImg = document.getElementById("lightboxImg");
let thumbnailsContainer = document.getElementById("thumbnails");
let carouselImages = document.getElementById("mobile-");
let currentIndex = 1;

function changeImage(index) {
	let imageContainer = document.getElementById("main");
	imageContainer.innerHTML = "";
	let image = `<img src="images/image-product-${index}.jpg" alt="" onclick="openLightbox(${index})"/>`;
	imageContainer.innerHTML = image;
}

// change image on desktop when you click on thumbnail
thumbImage[0].onclick = () => {
	thumbImage[0].parentNode.classList.add("active");
	thumbImage[1].parentNode.classList.remove("active");
	thumbImage[2].parentNode.classList.remove("active");
	thumbImage[3].parentNode.classList.remove("active");
	changeImage(0);
};
thumbImage[1].onclick = () => {
	thumbImage[1].parentNode.classList.add("active");
	thumbImage[0].parentNode.classList.remove("active");
	thumbImage[2].parentNode.classList.remove("active");
	thumbImage[3].parentNode.classList.remove("active");
	changeImage(1);
};
thumbImage[2].onclick = () => {
	thumbImage[2].parentNode.classList.add("active");
	thumbImage[1].parentNode.classList.remove("active");
	thumbImage[0].parentNode.classList.remove("active");
	thumbImage[3].parentNode.classList.remove("active");
	changeImage(2);
};
thumbImage[3].onclick = () => {
	thumbImage[3].parentNode.classList.add("active");
	thumbImage[1].parentNode.classList.remove("active");
	thumbImage[2].parentNode.classList.remove("active");
	thumbImage[0].parentNode.classList.remove("active");
	changeImage(3);
};

// *********LIGHTBOX*************
function openLightbox(index) {
	currentIndex = index;
	lightbox.style.display = "flex";
	lightboxImg.src = `images/image-product-${index}.jpg`;
	updateThumbnails();
}
function closeLightbox() {
	lightbox.style.display = "none";
}

function changeLightboxImage(index) {
	currentIndex += index;
	if (currentIndex < 0) currentIndex = mainImage.length - 1;
	if (currentIndex >= mainImage.length) currentIndex = 0;
	lightboxImg.src = `images/image-product-${currentIndex}.jpg`;
	updateThumbnails();
}

function updateThumbnails() {
	thumbnailsContainer.innerHTML = "";
	thumbImage.forEach((img, index) => {
		let thumb = document.createElement('img');
		thumb.src = img.src;
		if (index === currentIndex) thumb.classList.add("activeThumb");
		thumb.onclick = () => openLightbox(index);
		thumbnailsContainer.appendChild(thumb);
	});
}

const linkHover = document.querySelectorAll(".link-hover a");
for (let i = 0; i < linkHover.length; i++){
	linkHover[i].onmouseover = () => {
		linkHover[i].nextElementSibling.classList.add("bg-orange");
	}
	linkHover[i].onmouseout = () => {
		linkHover[i].nextElementSibling.classList.remove("bg-orange");
	};
}


// **********MOBILE VIEW**************
function changeCarouselImage(index) {
	currentIndex += index;
	if (currentIndex < 0) currentIndex = 3;
	if (currentIndex >= 4) currentIndex = 0;
	// let carouselImg = document.createElement("img");
	carouselImages.src = `images/image-product-${currentIndex}.jpg`;
	console.log(currentIndex);
	
}
// HAMBUGGER
const hambug = document.getElementById("menu");
const juwss = document.querySelector(".hamburg-bg");
function toggleMenu() {
	hambug.classList.toggle("active");
	juwss.classList.toggle("blur");
}



// ********KEYDOWN*********
document.addEventListener("keydown", function (event) {
	if (event.key === "Escape") closeLightbox();
	if (event.key === "ArrowRight") changeLightboxImage(1);
	if (event.key === "ArrowLeft") changeLightboxImage(-1);
});