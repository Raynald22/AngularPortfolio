import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.scss'],
})
export class SkillProgressComponent implements OnInit {
  techStack = {
    viewSkillBars: true,
    experience: [
      {
        Stack: 'Frontend/Design',
        progressPercentage: '100%',
      },
      {
        Stack: 'Backend',
        progressPercentage: '100%',
      },
      {
        Stack: 'Programming',
        progressPercentage: '100%',
      },
      {
        Stack: 'UI/UX',
        progressPercentage: '100%',
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}

  progressStyle(percentage: string) {
    return { width: percentage };
  }
}
