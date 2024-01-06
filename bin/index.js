#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const options = { "padding": 1, "width": 60, "title": "Hello There!", "titleAlignment": "center", "borderStyle": "single", "borderColor": "#FF2C2C" };
const data = { "intro": "\u001b[37mI am Saptarshi! I love tech, anime, guitars and counter-strike. Working on backend and communities.\u001b[39m", "twitter": "\u001b[90mhttps://twitter.com/\u001b[39m\u001b[36msbk_2k1\u001b[39m", "github": "\u001b[90mhttps://github.com/\u001b[39m\u001b[32msbk2k1\u001b[39m", "linkedin": "\u001b[90mhttps://linkedin.com/in/\u001b[39m\u001b[34msbk2k1\u001b[39m", "youtube": "\u001b[90mhttps://youtube.com/@\u001b[39m\u001b[31msbk2k1\u001b[39m", "web": "\u001b[36m\u001b[4mhttps://sbk2k1.tech\u001b[24m\u001b[39m", "resume": "\u001b[36m\u001b[4mhttps://bio.link/sbk2k1\u001b[24m\u001b[39m", "labelWork": "\u001b[1mWork:\u001b[22m", "labelTwitter": "\u001b[1mTwitter:\u001b[22m", "labelGitHub": "\u001b[1mGitHub:\u001b[22m", "labelLinkedIn": "\u001b[1mLinkedIn:\u001b[22m", "labelYouTube": "\u001b[1mYouTube:\u001b[22m", "labelWeb": "\u001b[1mWebsite:\u001b[22m", "labelResume": "\u001b[1mLinks:\u001b[22m" };

const output = [
  data.intro,
  // `${data.labelWork} ${data.work}`,
  `${data.labelTwitter} ${data.twitter}`,
  `${data.labelGitHub} ${data.github}`,
  `${data.labelLinkedIn} ${data.linkedin}`,
  `${data.labelYouTube} ${data.youtube}`,
  `${data.labelWeb} ${data.web}`,
  `${data.labelResume} ${data.resume}`,
]
  .filter(Boolean)
  .join("\n\n");

console.log(chalk.white(boxen(output, options)));
