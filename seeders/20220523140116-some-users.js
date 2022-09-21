"use strict";
const bcrypt = require("bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Apple",
          email: "apple@apple.com",
          phone: 1234567,
          password: bcrypt.hashSync("apple", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        }, 
        {
          name: "Banana",
          email: "banana@banana.com",
          phone: 1234567,
          password: bcrypt.hashSync("banana", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },  
        {
          name: "Coco",
          email: "coco@coco.com",
          phone: 1234567,
          password: bcrypt.hashSync("coco", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },     
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'spaces',[
        {
          title:'First Space',
        description:'This is My first Space',
      backgroundColor:'#fff',
      color:'#000',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId:1
    },
        {
          title:'Second Space',
        description:'This is My Second Space',
        backgroundColor:'#fff',
        color:'#000',
      createdAt: new Date(),
      updatedAt: new Date(),
      userId:2
    }
      ]
    )
    await queryInterface.bulkInsert(
      'stories',[
        {
          name:'First Story',
        content:'This is My first Story',
        imageUrl:'https://images.unsplash.com/photo-1663717249250-804cb861ed74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80',
      createdAt: new Date(),
      updatedAt: new Date(),
      spaceId:1
    },
        {
          name:'Second Story',
        content:'This is My Second Story',
      imageUrl:'https://unsplash.com/photos/jgT1sy3UTxE',
      createdAt: new Date(),
      updatedAt: new Date(),
      spaceId:1
    },
        {
          name:'third Story',
        content:'This is My third Story',
      imageUrl:'https://unsplash.com/photos/eBf3ZHnzJjA',
      createdAt: new Date(),
      updatedAt: new Date(),
      spaceId:2
    },
        {
          name:'fourth Story',
        content:'This is My fourth Story',
      imageUrl:'https://unsplash.com/photos/gQG_4OxlZYs',
      createdAt: new Date(),
      updatedAt: new Date(),
      spaceId:2
    }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("spaces", null, {});
    await queryInterface.bulkDelete("stories", null, {});
  },
};