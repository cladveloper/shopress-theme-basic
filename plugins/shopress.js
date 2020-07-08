import Vue from 'vue';

Vue.prototype.$resizeImage = (url = "", width = 100, height = 100, quality = 80) => {
    const baseURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:2616' : 'https://api.shopress.com';
    if(/svg/i.test(url.split('.').pop())) return url
    else return `${baseURL}/jimp/resize?url=${url}&w=${width}&h=${height}&q=${quality}`
};

Vue.prototype.$scaleImage = (url = "", width = 100, quality = 80) => {
    const baseURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:2616' : 'https://api.shopress.com';
    if(/svg/i.test(url.split('.').pop())) return url
    else return `${baseURL}/jimp/scale?url=${url}&w=${width}&q=${quality}`
};

Vue.prototype.$cutText = (text,maxLength = 25) => {
    if(typeof text != "undefined"){
        if(text.length > maxLength){
            return `${text.slice(0, maxLength)}...`;
        } else{
            return text
        }
    }
};

Vue.prototype.$formatedMoney = (clp = "") => {
    return `${clp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};