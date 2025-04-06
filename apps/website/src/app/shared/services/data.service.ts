import { Injectable } from '@angular/core';
import { Activity } from '@angularph-monorepo/models';
import { Blog } from '@angularph-monorepo/models';
import { CommunityLead } from '@angularph-monorepo/models';
 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  communityDetails = { 
    "description" : "We are a Non Profit Tech Community who are passionate on organizing events such as meetups, seminars and conferences here in the philippines for developer students and professionals.",
    "history": "Founded on year 2016 by a group of developers where they share the same advocacy in building an organization which has a goal to help other developers in using the latest technologies not just related to Angular and now we are continuously helping fellow developers through our community improve their skills and guide them on the real IT world.",
    "historyPhoto" : "/photos/foundation.png", 
    "vision": "i am vision",
    "visionPhoto": "/photos/foundation.png",  
    "mission": "i am mission",
    "missionPhoto":"/photos/foundation.png",
    "numbers" : {
        "fb-group" : "3001",
        "fb-followers" :  "6000",
        "seminars" : "81",
        "years" : "10", 
      },
    "joinFacebookGroupDescription" : "The official Angular community in the Philippines group on Facebook.",
    "joinFacebookGroupPhoto" : "/photos/fb-group.png", 
    "linkfbpage": "https://www.google.com",
    "linkfbgroup":"https://www.google.com",
    "contacts" : [{
        "type" : "Email",
        "value" : "angularph@gmail.com"
    },{
      "type" : "Facebook Page",
      "value" : "Angular PH"
    },{
          "type" : "Facebook Group",
          "value" : "Angular Philippines"
    },{
      "type" : "LinkedIn",
      "value" : "https://www.linkedin.com/company/angular-philippines"
    },{
        "type" : "WhatsApp",
        "value" : "82834826"
    }]
  };
  
  // list of events temporary
  eventItems : Array<Activity> = [ 
    {
      eventid: 1,
      title: "Intro to HTML and CSS",
      description: "Learn the basics of HTML and CSS, and start building your first website.",
      thumbnail: "https://picsum.photos/300/200?grayscale",
      datetimestamp:   new Date('2025-06-30T10:00:00'),
      id: 1
    },
    {
      eventid: 2,
      title: "JavaScript for Beginners",
      description: "A hands-on workshop for beginners to dive into JavaScript programming and dynamic web pages.",
      thumbnail: "https://picsum.photos/300/200?grayscale",
      datetimestamp:  new Date('2025-05-30T10:00:00'),
      id: 2
    },
    {
      eventid: 3,
      title: "Responsive Web Design",
      description: "Understand the principles of responsive web design and how to create websites that adapt to all screen sizes.",
      thumbnail: "https://picsum.photos/300/200?grayscale",
      datetimestamp:  new Date('2025-04-30T10:00:00'),
      id: 3
    },
    {
      eventid: 4,
      title: "Advanced React.js Techniques",
      description: "Level up your React.js skills by exploring hooks, context, and performance optimization techniques.",
      thumbnail: "https://picsum.photos/300/200?grayscale",
      datetimestamp: new Date('2025-03-30T10:00:00'),
      id: 4
    },
    {
      eventid: 5,
      title: "Building APIs with Node.js",
      description: "Learn how to create RESTful APIs using Node.js and Express, and connect them to your frontend applications.",
      thumbnail: "https://picsum.photos/300/200?grayscale",
      datetimestamp: new Date('2025-02-30T10:00:00'),
      id: 5
    },
    {
      eventid: 6,
      title: "Web Accessibility Essentials",
      description: "Explore the principles of web accessibility and how to make your websites usable for everyone.",
      thumbnail: "https://picsum.photos/300/200?grayscale",
      datetimestamp: new Date('2025-01-30T10:00:00'),
      id: 6
    }
  ];

  blogItems : Array<Blog> = [ 
    {
      blogid: 1,
      title: "Intro to HTML and CSS",
      description: "Learn the basics of HTML and CSS, and start building your first website.",
      thumbnail: "https://picsum.photos/300/200?grayscale",
      datetimestamp:  new Date(),
      id: 1,
      body:""
    },
    {
      blogid: 2,
      title: "JavaScript for Beginners",
      description: "A hands-on workshop for beginners to dive into JavaScript programming and dynamic web pages.",
      thumbnail: "https://picsum.photos/300/200?grayscale",
      datetimestamp: new Date(),
      id: 2,
      body:""
    },
    {
      blogid: 3,
      title: "Responsive Web Design",
      description: "Understand the principles of responsive web design and how to create websites that adapt to all screen sizes.",
      thumbnail: "https://picsum.photos/300/200?grayscale",
      datetimestamp:  new Date(),
      id: 3,
      body:""
    },
    {
      blogid: 4,
      title: "Advanced React.js Techniques",
      description: "Level up your React.js skills by exploring hooks, context, and performance optimization techniques.",
      thumbnail: "https://picsum.photos/300/200?grayscale",
      datetimestamp:  new Date(),
      id: 4,
      body:""
    },
    {
      blogid: 5,
      title: "Building APIs with Node.js",
      description: "Learn how to create RESTful APIs using Node.js and Express, and connect them to your frontend applications.",
      thumbnail: "https://picsum.photos/300/200?grayscale",
      datetimestamp:  new Date(),
      id: 5,
      body:""
    },
    {
      blogid: 6,
      title: "Web Accessibility Essentials",
      description: "Explore the principles of web accessibility and how to make your websites usable for everyone.",
      thumbnail: "https://picsum.photos/300/200?grayscale",
      datetimestamp: new Date(),
      id: 6,
      body:""
    }
  ];
 
  communityLeadsItems : Array<CommunityLead> = [
    
    { 
      name: "Seiji Villafranca",
      description: "Community Lead | Senior Software Engineer",
      thumbnail: "https://static.wixstatic.com/media/a59f1d_a43079b5c6614b5ea7b82bf0e72dbc1d~mv2.jpg/v1/fill/w_560,h_560,al_c,lg_1,q_80,enc_avif,quality_auto/seiji.jpg",
      datetimestamp:  new Date(),
      id: 1
    }, { 
      name: "Jezreel Maghuyop",
      description: "Community Lead | Senior Software Engineer",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb6wnS3eq1clwHYApARCZUOGsVx5uxcz4hlQ&s",
      datetimestamp:  new Date(),
      id: 2
    }, { 
      name: "Ryan Dizon",
      description: "Community Lead | Senior Software Engineer",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI08oRVJ4m2p9s6i5R9Pqh8N-kHYpcWNtXKQ&s",
      datetimestamp:  new Date(),
      id: 3
    }, { 
      name: "Roselle Magbunga",
      description: "Community Lead | Senior Software Engineer",
      thumbnail: "https://picsum.photos/300/200?grayscale",
      datetimestamp:  new Date(),
      id: 4
    },{ 
      name: "Matt",
      description: " Senior Software Engineer",
      thumbnail: "https://picsum.photos/300/200?grayscale",
      datetimestamp:  new Date(),
      id: 1
    },{ 
    name: "Dani Quinto",
    description: "Manager",
    thumbnail: "https://picsum.photos/300/200?grayscale",
    datetimestamp:  new Date(),
    id: 2
  },
    { 
      name: "Matthew Uy",
      description: " Senior Software Engineer",
      thumbnail: "https://media.licdn.com/dms/image/v2/D5603AQFs2rtCCCF2xw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1694467392753?e=2147483647&v=beta&t=jqg7yIkBfyA6WTFfyUFKwiocbDjEAL5gWKU33yr8Gp8",
      datetimestamp:  new Date(),
      id: 1
    },{ 
      name: "Thonie Fernandez",
      description: "Community Lead  ",
      thumbnail: "https://picsum.photos/300/200?grayscale",
      datetimestamp:  new Date(),
      id: 2
    },{ 
      name: "Philip Moran",
      description: "Software Engineer",
      thumbnail: "https://avatars.githubusercontent.com/u/68763761?v=4",
      datetimestamp:  new Date(),
      id: 2
    } ,{ 
      name: "Felix Dela Fuente",
      description: " Software Engineer",
      thumbnail: "https://media.licdn.com/dms/image/v2/D5603AQEKLS88q545zQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726065170154?e=2147483647&v=beta&t=QyftviHmMU7Gz_3Ekqcgk2lak3HPdUxR8toaUKe5xBk",
      datetimestamp:  new Date(),
      id: 2
    }, { 
      name: "Mark Montealto",
      description: " Software Engineer",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVkqFLvMNMwc9nYI9BVkMn49VoMxljqdGjg&s",
      datetimestamp:  new Date(),
      id: 3
    }, { 
      name: "Gabriel Mariano",
      description: "Software Engineer",
      thumbnail: "https://media.licdn.com/dms/image/v2/D5603AQEJdUp0giez9Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709869299151?e=2147483647&v=beta&t=a17oNamwrGJGUPrmQlRQsOdLVqNTmnTSVHZzVQ248Xg",
      datetimestamp:  new Date(),
      id: 4
    },{ 
      name: "Jp Lazaro",
      description: " Senior Software Engineer",
      thumbnail: "https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1746632%2Fac58dbed-050a-4a7f-9885-f7c3a773e9bc.jpg",
      datetimestamp:  new Date(),
      id: 2
    }]

}
