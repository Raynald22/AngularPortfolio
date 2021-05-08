import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-skill',
  templateUrl: './software-skill.component.html',
  styleUrls: ['./software-skill.component.scss'],
})
export class SoftwareSkillComponent implements OnInit {
  skillsSection = {
    softwareSkills: [
      {
        skillName: 'HTML5',
        fontAwesomeClassname: 'fab fa-html5',
      },
      {
        skillName: 'CSS3',
        fontAwesomeClassname: 'fab fa-css3-alt',
      },
      {
        skillName: 'Sass',
        fontAwesomeClassname: 'fab fa-sass',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'fab fa-js',
      },
      {
        skillName: 'Angular',
        fontAwesomeClassname: 'fab fa-angular',
      },
      {
        skillName: 'PHP',
        fontAwesomeClassname: 'fab fa-php',
      },
      {
        skillName: 'npm',
        fontAwesomeClassname: 'fab fa-npm',
      },
      {
        skillName: 'Sql-database',
        fontAwesomeClassname: 'fas fa-database',
      },
      {
        skillName: 'Java',
        fontAwesomeClassname: 'fab fa-java',
      },
      // {
      //   skillName: "Tensorflow",
      //   fontAwesomeClassname: "logos-tensorflow"
      // },
      // {
      //   skillName: "Firebase",
      //   fontAwesomeClassname: "simple-icons:firebase"
      // }
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
