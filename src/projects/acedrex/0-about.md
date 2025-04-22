---
title: About
project: acedrex
layout: 'layouts/project-single.html'
order: 0
---


## Overview
This project is about designing and implementing an online multiplayer [chess](https://en.wikipedia.org/wiki/Chess)-[variant](https://en.wikipedia.org/wiki/Chess_variant) ([grant acedrex](https://en.wikipedia.org/wiki/Grant_Acedrex)) platform. I will be sharing with you my journey through this ordeal. This series is intended for readers who are more interested in project design and architecture as implementation is rather naive. If this platform gains popularity, I will be implementing better performance algorithms. If you are more interested in chess programming, you should definitely check out [chessprogramming.org](https://www.chessprogramming.org/Main_Page).  Without further ado, lets start.

## Motivation
I love chess and as a developer I always wanted to write a chess engine. But for this project, I wanted to create something new as there are many good implementations of classical chess. Looking through chess variants, I stumbled upon Grant Acedrex and after a quick investigation, found that there are no online platforms to play this variant. The variant seemed fun to me on the first glance and I decided to implement it.

## Technology
### Frontend
#### Angular as Frontend Framework
I decided to use Angular as I've never tried it and I've heard that it is great for enterprise and is great for organising big projects (as I've been struggling with it using [React](https://react.dev/)).
#### TailwindCSS as CSS library
I decided to use [TailwindCSS](https://tailwindcss.com/) as I was creating one of my passion projects and wanted it to have an original design. This means I have to design how my platform will look as opposed to using something more opinionated like [Bulma](https://bulma.io/) or [Bootstrap](https://getbootstrap.com/)

### Backend
#### Go as Backend
I've used Go before but not in a deployed project. I wanted to quickly create a webservice with good performance and found Go to be the best alternative. Other options I've pondered were Haskell, Scala and C++. Getting closer to finishing the project, I've come to the conclusion that using C++ to implement the engine and using LaravelPHP or Go as the platform's web backend would have been more appropriate.
#### No DB
I didn't plan any auth or history database for this project. I only wanted a platform where friends can play together. After publishing it, if a userbase is formed, I will implement these features. If that time comes, I am considering [Redis](https://github.com/redis/redis) and [SQLite](https://www.sqlite.org/) for databases.