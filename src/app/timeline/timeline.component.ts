import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  timeline = [
    {
      heading: 'PT.Ogya Tekno Nusantara',
      duration: 'current',
      content: 'Software Enginer at Ogya',
      className: 'direction-r',
    },
    {
      heading: 'RubyH',
      duration: '2020 - 2020',
      content: 'Software Engineer (Back-end)',
      className: 'direction-l',
    },
    // {
    //   heading: "Intermediate",
    //   duration: "2015-2016",
    //   content: "Successfully completed my intermediate studies in 2016 from Gyan Deep Sr. Secondary Public School, Shikohabad.\n" +
    //     "Major: PCM.",
    //   className: "direction-r"
    // },
    // {
    //   heading: "High School",
    //   duration: "2013-2014",
    //   content: "Successfully completed my high school studies in 2014 from Georgions Academy, Shikohabad.",
    //   className: "direction-l"
    // }
  ];
  constructor() {}

  ngOnInit(): void {}
}
