function sliderInit(collectionOfImages) {
    const imgList = getImageList(collectionOfImages);
    const slider = document.getElementById('slider');

    let imageIntervalSwitcher = setInterval(switchImage, 3000, imgList, 'next');

    setImage(imgList.getCurrentNode());

    slider.addEventListener('click', event => {
        clearInterval(imageIntervalSwitcher);
        imageIntervalSwitcher = setInterval(switchImage, 3000, imgList, 'next');

        switchImage(imgList, event.target.dataset.sliderButton);
    });
}


