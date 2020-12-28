# rimworldmultiplayer.github.io-content
Hugo files used to build the website.

# Contributing.

This is the [Hugo](https://gohugo.io) content used to build [the website](https://rimworldmultiplayer.com/).

## Setup (I'm assuming you're on Windows 10)
1. Install hugo from the [releases page](https://github.com/gohugoio/hugo/releases)
2. If you use the installer, there should be an option to add it to your `PATH`. Check that. If there's not, go to [this page](https://bwaycer.github.io/hugo_tutorial.hugo/tutorials/installing-on-windows/) and in the "Less Technical Users" section, look for "For Windows 10 Users" and it'll walk you through adding Hugo to your `PATH`.
3. Once you've done that, check it's actually in your path by opening cmd or powershell and typing `hugo help`. If it pops up with some stuff, you're good to go!
4. Clone this repository to your computer.
5. Shift-right click inside the folder and open cmd or powershell.

## Building

**Build the TypeScript code** before anything else! The compiled version isn't in the repo.

To build the site, run `$ hugo` inside the project. That's it. This dumps the output files into the `/public/` folder. This isn't really practical for making sure your site's up to scratch though. If you want that, run `$ hugo serve` instead. It'll create a local (automatically updating) web server that you can connect at `http://localhost:1313/` to to make sure everything checks out.

>> Only if you have write access... When you're SURE you did everything right, run `publish.py`. You'll need to run ```$ git submodule init``` first. Note that this pushes directly to the submodule (and as such website) so only do this when you're sure! Also push your stuff.

## Writing Posts 101

GOLDEN RULE: Just copy one of my posts and fill in the stuff again.

To add a post, simply create a markdown file under `/content/post/` that ends in `.md`. Sane naming please. Inside this file will be the content of the page, along with some other stuff defining title, date of creation, etc...

The content is just regular markdown, the title and stuff however is called "front matter" and is written in TOML inside +++ at the top of the markdown file.Tt looks like this:

```md
+++
title = "doodad" # Title. Duh.
date = 1970-01-30 # Time. As this is TOML, any TOML date-time will do: https://github.com/toml-lang/toml#offset-date-time
author = "Your Name" # Your name.
reddit = "https://reddit.com/link/to/reddit/thread" # Optional, when provided with a link it'll show as "Join the discussion on Reddit" below the article.
tags = [
	"tag1",
	"tag2",
	...
]

categories = [
	"cat1",
	"cat2",
	...
]
# Google the difference between categories and tags, seriously Google results give much better results than I can explain here.
+++

Hi, I'm a blog post!

<!--more-->

And I'm behind the "Read more..." section! Clickbait!
```

Also important is the summary split, `<!--more-->`. Put this where you want the summary on the main page listing to split with a "Read More..." link. This happens automatically with Hugo, but Hugo isn't exactly smart about it so I advise you you do it yourself. See [Hugo's documentation](https://gohugo.io/content/summaries/)
