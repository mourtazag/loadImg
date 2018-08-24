export default function loadImg(imgSrc) {

    return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = imgSrc

        img.onload = () => {
            resolve(img);
        }

        img.onerror = () => {
            reject();
        }
    })
}
