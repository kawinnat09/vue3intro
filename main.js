const app = Vue.createApp({
    data() {
        return {
            product:"iPhone 14",
            image:'./assets/images/iphone-12-red.png',
            description:'Apple A14 Bionic',
            url:'https://www.apple.com',
            inStock:true,
            inventory:0,
            details: ["64GB","128GB","256GB"],
            varians: [
                {
                    id: 239, color: "Purple", image:"./assets/images/iphone-12-purple.png",
                    id: 240, color: "Red", image:"./assets/images/iphone-12-red.png",
                    id: 241, color: "White", image:"./assets/images/iphone-12-white.png",
                }
            ]
        }
    }
}).mount("#app")