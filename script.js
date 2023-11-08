const profile_imgs = ['IMG_0837.JPG' , '676B0FEE-1788-445B-A6F1-F4049D7C89D9.JPG' , 'IMG_0844.JPG' , 'IMG_0146.jpg' , 'IMG_0513.jpg' , 'IMG_5911.JPG'];
const next_button = document.getElementById('next-button');
let i = 0;


next_button.addEventListener('click' , () =>{
    if (i === 5) {
        i = 0;
    } else {
        i += 1;
    };

    document.getElementById('top-img').src = profile_imgs[i];
});
