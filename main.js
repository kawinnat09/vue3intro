const app = Vue.createApp({
    data() {
        return {
            product:"iPhone 14",
            image:'./assets/images/iphone-12-red.png',
            description:'Apple A14 Bionic',
            url:'https://www.apple.com',
            inStock:true,
            inventory:0,
        }
    }
}).mount("#app")