import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: 'What I do💁‍♂️',
    subTitle:
      'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      '⚡ Develop highly interactive Front end / User Interfaces for your web',
      '⚡ Creating application backend in Java, Laravel/Codeigniter & NodeJs',
      '⚡ Integration of third party services such as Firebase/ Heroku/ Netlify',
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
