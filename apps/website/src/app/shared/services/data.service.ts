import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  communityDetails = {
    description:
      'We are a Non Profit Tech Community who are passionate on organizing events such as meetups, seminars and conferences here in the Philippines for developers, students, and professionals.',
    history:
      'Founded on year 2016 by a group of developers where they share the same advocacy in building an organization which has a goal to help other developers in using the latest technologies not just related to Angular and now we are continuously helping fellow developers through our community improve their skills and guide them on the real IT world.',
    historyPhoto: '/photos/foundation.png',
    vision:
      'To have a bigger community and more experts that will be our future community leader that will continue the growth of the organizations and maintain the advocacy of helping and guiding aspiring developers in the country.',
    visionPhoto: '/photos/foundation.png',
    mission:
      'To continuously conduct and provide seminars, mentorship and training to students and professionals that can help them advance their skills in technology especially in web and mobile development and to promote a larger connection of developers to have a better source of ideas and knowledge  ',
    missionPhoto: '/photos/foundation.png',
    numbers: {
      'fb-group': '3001',
      'fb-followers': '6000',
      seminars: '81',
      years: '10',
    },
    joinFacebookGroupDescription:
      'The official Angular community in the Philippines group on Facebook.',
    joinFacebookGroupPhoto: '/photos/fb-group.png',
    linkfbpage: 'https://www.facebook.com/AngularPhilippines',
    linkfbgroup: 'https://www.facebook.com/groups/1133816916630570',
    contacts: [
      {
        type: 'Email',
        value: 'angularph@gmail.com',
        thumbnail: './images/gmail-logo.png',
        url: 'mailto:angularph@gmail.com',
      },
      {
        type: 'Facebook Page',
        value: 'Angular PH',
        thumbnail: './images/facebook-logo.png',
        url: 'https://www.facebook.com/AngularPhilippines',
      },
      {
        type: 'Facebook Group',
        value: 'Angular Philippines',
        thumbnail: './images/facebook-group-logo.png',
        url: 'https://www.facebook.com/groups/1133816916630570',
      },
      {
        type: 'LinkedIn',
        value: 'Angular Philippines',
        thumbnail: './images/linked-in-logo.png',
        url: 'https://www.linkedin.com/company/angular-philippines/',
      },
    ],
  };
}
