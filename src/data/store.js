import { reactive } from 'vue';

const ilMioOggettone = {

    linkHeader: [
        'Home',
        'About',
        'Service',
        'Showcase',
        'Blog',
        'Contact'
    ],

    slidesJumbo: [
        {
            image: 'Group-36-2x.png',
            title: 'We Are a Web Designe ',
            lastWord: 'Agency',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.'
        },
        {
            image: 'Group-40-2x.png',
            title: 'A Group of Expert ',
            lastWord: 'Planners',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.'
        },
        {
            image: 'Group-35-2x.png',
            title: 'Focus on your ',
            lastWord: 'business',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.'
        }
    ],

    
cards:[
    {
        image:"serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg",
        data: "May 24, 2018 by Alex",
        titolo:"Marketing Ideas",
    },
    {
        image:"Businessman-at-the-desk-in-his-office-resting--1024x768.jpg",
        data: "May 24, 2018 by Alex",
        titolo:"Rest During Working Hours",
    },
    {
        image:"simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg",
        data: "May 24, 2018 by Alex",
        titolo:"Develop Your Startup Idea",
    }, 
],

images:[
    {
        image:"client-1-2x.png",
    },
    {
        image:"client-3-2x.png",
    },
    {
        image:"client-4-2x.png",
    }, 
    {
        image:"client-5-2x.png",
    }, 
    {
        image:"client-7-2x.png",
    }, 
    {
        image:"client-9-2x.png",
    }, 
   
],

info: [
    {
        image: "cropped-Group-39-2x.png",
        didascalia: "While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.While the lovely valley teems with vapour around me."
    },
    {
        titolo: "QUICK LINKS",
        links: ["Careers", "News", "Termd of use", "Privacy Projects", "About", "Contact"]
    },
    {
        titolo: "CONTACT",
        indirizzo: " Patrivia C. Amadee 4401 Waldeck Street Grapevine Nashville, TX 76051 ",
        email: " info@yourdomain.com",
        cellulare: "+99(0)101 0000 888"
    },
    {
        titolo: "LOCATION ON MAP",
        image:"map.png"
    }
],

immagini: [
   {
    immagine: "ina-soulis-227104-unsplash-1024x1024.jpg"
   },
   {
    immagine: "sunisa-misa-531163-unsplash-1024x1024.jpg"
   },
   {
    immagine: "355H-1024x1024.jpg"
   },
   {
    immagine: "photo-1448932252197-d19750584e56-1024x1024.jpg"
   },
   {
    immagine: "business-competition-PB366D8-1024x1024.jpg"
   },
   {
    immagine: "cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg"
   },
   {
    immagine: "aa9a4539-PQGJ7HU-1024x1024.jpg"
   },
   {
    immagine: "cody-davis-253928-unsplash-1024x1024.jpg"
   },
   
]

};

const iMieiDati = reactive(ilMioOggettone);

export default iMieiDati