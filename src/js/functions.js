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


