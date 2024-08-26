const jellyPic = document.querySelector("#jelly-con img");
const jellyFlavor = document.getElementById("flavor");
const jellyDescription = document.getElementById("description");
const jellyGroup = document.getElementById("group");
const getJellyBtn = document.getElementById("get-jelly-btn");

insertImgSrc = (imgEl, imgSrc) => {
    imgEl.setAttribute("src", imgSrc);
};

insertText = (el, text) => {
    el.textContent = text;
};

setBasicInfo = (jellyBean) => {
    insertText(jellyFlavor, `${jellyBean.flavorName}`);
    insertText(jellyDescription, `${jellyBean.description}`);
    insertText(jellyGroup, `${jellyBean.groupName}`);
};

createJellyProfile = (jellyBean) => {
    const picSrc = jellyBean.imageUrl;
    insertImgSrc(jellyPic, picSrc);
    setBasicInfo(jellyBean);
};

getJellyBean = () => {
    const randomBeanId = Math.floor(Math.random() * 114 + 1);

    fetch(`https://jellybellywikiapi.onrender.com/api/Beans/${randomBeanId}`)
        .then((res) => res.json())
        .then((json) => {
            const jellyBean = json;
            createJellyProfile(jellyBean);
        })
        .catch((err) => console.log('Fetch error:', err));
};

jellyPic.addEventListener("click", () => {
    getJellyBean();
});

getJellyBean();