let brandonFraserImages = [
    "https://dlisted.com/wp-content/uploads/2021/08/wenn34354507.jpg",
    "http://www.dlisted.com/files/spl71140_001_0.jpg",
    "https://i.kym-cdn.com/entries/icons/original/000/038/051/bre.jpg",
    "https://imagez.tmz.com/image/45/o/2012/07/12/45ce92173f4a5170a19136e4eff98f4b_md.jpg"

];

const imgs = document.getElementsByTagName("img");

for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * brandonFraserImages.length);
    imgs[i].src = brandonFraserImages[randomImg];
}