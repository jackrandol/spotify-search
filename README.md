# Spotify API

### Project Overview

A simple search tool to browse the Spotify database using Spotify's own API with an infinite scroll that loads more results as users scroll to the bottom of the page.

![](https://github.com/jackrandol/spotify-api/blob/master/screenshot.png "Knitting Page")

### Features

Users can sign up or log in with a user account and first edit their profile with a picture of themselves and a small text about themselves. In the 'Knit' section users are asked to upload different images to three segments of a sweater, body, left sleeve and right sleeve. After the users uploads three images ( stored with AWS S3 in the cloud ) they will choose a color for the "ribbed" edges of the sweater. In the 'Preview' section users can then view their sweater with their images mapped onto a three dimensional model. In the 'Projects' section users can view all projects from other users and make/read comments on a comment wall.

#### Tech Stack:

- HTML, CSS, JavaScript, Node.js, Express, bcrypt/salt, PostgreSQL, Three.js, bcrypt/salt, Moment.js

#### Framework:

- React with Redux and Hooks

## Run-through

![](https://github.com/jackrandol/knitables-II/blob/master/public/KnittingProcess.gif "Knitting Time")

## _For Further Development_

- Right now users can only develop one project. It would be helpful to be able to develop more than one sweater option and edit the individual pieces.
- Once the users can develop multiple sweaters, there should be a project list page for viewing those projects. Ideally you would be able to see the sweaters together to be able to compare options.
- The 3D Meshes for the sweater were coded with Three.js geometries. It would be better to make these in blender, or similar 3D modelling software, to have more realistic shapes.
