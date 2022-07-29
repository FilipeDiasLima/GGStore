'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        user_id: 1,
        name: "assassin's creed valhalla",
        price: 69.99,
        image_cover: "ac-cover.webp",
        image_poster: "ac-thumb.jpg",
        plataform: "pc",
        studio: "ubisoft",
        release: "10/11/2021",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: "asseto corsa",
        price: 9.90,
        image_cover: "asseto-cover.jpg",
        image_poster: "ac-thumb.jpg",
        plataform: "pc",
        studio: "kunos simulazioni",
        release: "19/12/2014",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: "battlefield 4",
        price: 39.90,
        image_cover: "bf-cover.png",
        image_poster: "bf-thumb.jpg",
        plataform: "pc",
        studio: "dice",
        release: "29/10/2013",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: "battlefield 1",
        price: 56.10,
        image_cover: "bf1-cover.jpg",
        image_poster: "bf1-thumb.jpg",
        plataform: "pc",
        studio: "dice",
        release: "29/10/2016",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: "battlefield 5",
        price: 60.20,
        image_cover: "bf5-cover.webp",
        image_poster: "bf5-thumb.png",
        plataform: "pc",
        studio: "dice",
        release: "29/10/2018",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: "cuphead",
        price: 36.90,
        image_cover: "cup-cover.png",
        image_poster: "cup-thumb.jpg",
        plataform: "pc",
        studio: "studio mdhr",
        release: "29/07/2017",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: "cyberpunk 2077",
        price: 129.90,
        image_cover: "cyber-cover.jpg",
        image_poster: "cyber-thumb.png",
        plataform: "pc",
        studio: "cd projekt red",
        release: "09/12/2020",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: "elden ring",
        price: 189.70,
        image_cover: "elden-cover.webp",
        image_poster: "elden-thumb.webp",
        plataform: "pc",
        studio: "fromSoftware inc.",
        release: "24/02/2022",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: "forza horizon 5",
        price: 130.80,
        image_cover: "forza-cover.jpg",
        image_poster: "forza-thumb.jpg",
        plataform: "pc",
        studio: "playground games",
        release: "09/11/2021",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: "god of war",
        price: 100.90,
        image_cover: "gow-cover.png",
        image_poster: "gow-thumb.jpg",
        plataform: "pc",
        studio: "santa monica studio",
        release: "14/01/2022",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: "hollow knight",
        price: 27.99,
        image_cover: "hollow-cover.jpg",
        image_poster: "hollow-thumb.jpg",
        plataform: "pc",
        studio: "team cherry",
        release: "24/02/2017",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: "life is strange",
        price: 36.99,
        image_cover: "life-cover.webp",
        image_poster: "life-thumb.jpg",
        plataform: "pc",
        studio: "square enix",
        release: "29/01/2015",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: "little nightmares II",
        price: 76.99,
        image_cover: "night-cover.webp",
        image_poster: "night-thumb.jpg",
        plataform: "pc",
        studio: "tarsier studios",
        release: "10/02/2021",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: "no man's sky",
        price: 64.40,
        image_cover: "noman-cover.jpg",
        image_poster: "noman-thumb.jpg",
        plataform: "pc",
        studio: "hello hames",
        release: "12/08/2016",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: "red dead redemption 2",
        price: 120.90,
        image_cover: "red-cover.jfif",
        image_poster: "red-thumb.jpg",
        plataform: "pc",
        studio: "rockstar games",
        release: "05/12/2019",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        name: "stray",
        price: 45.10,
        image_cover: "stray-cover.jpg",
        image_poster: "stray-thumb.jpg",
        plataform: "pc",
        studio: "bluetwelve studio",
        release: "19/07/2022",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
