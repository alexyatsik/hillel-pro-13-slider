function sliderInit(collectionOfImages) {
    const imgList = getImageList(collectionOfImages);
    const slider = document.getElementById('slider');
    
    if (collectionOfImages.length > 0) {
        setImage(imgList.getCurrentNode());
    }

    if (collectionOfImages.length <= 1) {
        document.getElementById('sliderButtonPrev').classList.add('inactive');
        document.getElementById('sliderButtonNext').classList.add('inactive');
        return;
    }
    
    let imageIntervalSwitcher = setInterval(switchImage, 3000, imgList, 'next');

    slider.addEventListener('click', event => {
        clearInterval(imageIntervalSwitcher);

        switchImage(imgList, event.target.dataset.sliderButton);

        imageIntervalSwitcher = setInterval(switchImage, 3000, imgList, 'next');
    });
}

function getImageList(collectionOfImages) {
    const list = new DoubleLinkedList();
    setCollectionIntoList(collectionOfImages, list);
    return list;
}

function setCollectionIntoList(collection, list) {
    for (let i = 0; i < collection.length; i++) {
        list.addNode(collection[i]);
    }
}

function setImage(imgData) {
    const img = document.getElementById('sliderImage');
    img.setAttribute('src', imgData.path);
    img.setAttribute('alt', imgData.alt);
}

function switchImage(list, direction) {
    switch (direction) {
        case 'next':
            list.nextNode();
            setImage(list.getCurrentNode());
            break;
        case 'prev':
            list.prevNode();
            setImage(list.getCurrentNode());
            break;
    }
}
