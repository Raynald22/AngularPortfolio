import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/Raynald22",
    linkedin: "https://www.linkedin.com/in/reynaldi-fikri-hidayat-3b095a173/",
    gmail: "reynaldifkr@gmail.com",
    instagram : "#",
    facebook: "#"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
