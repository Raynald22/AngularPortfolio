import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    {
      heading: 'Sistem Informasi Akuntansi',
      duration: '2021',
      subtitle: 'Universitas Bina Sarana Informatika',
      content: 'Present.',
      className1: 'mar-right',
      className2: 'prt_about_learnbox_left',
    },
    {
      heading: 'Highschool',
      duration: '2016',
      subtitle: 'SMA Ksatrya',
      content:
        'Successfully completed my highschool studies in 2016 from SMA Ksatrya.',
      className1: 'mar-left',
      className2: 'prt_about_learnbox_right',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
