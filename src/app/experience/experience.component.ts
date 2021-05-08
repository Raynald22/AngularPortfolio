import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: 'Software Engineer',
        company: 'PT.Ogya Tekno Nusantara',
        color: '#3781c2',
        companylogo: '../../../assets/images/ogya.png',
        date: 'Present',
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: 'Software Enginer at Ogya',
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: 'Software Engineer',
        company: 'RubyH',
        color: '#3f703f',
        companylogo: '../../../assets/images/rubyh.png',
        date: 'Feb 2020 – Jul 2020',
        desc: 'Software Engineer (Back-end)',
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: 'Arsip',
        company: 'BASARNAS',
        color: '#ff9102',
        companylogo: '../../../assets/images/basarnas.png',
        date: 'Aug 2018 – Sep 2018',
        desc: 'Intern',
      },
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
