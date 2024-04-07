# Tao Bin Admin Dashboard

This is a project made by Josh Perry

## Install using script.sh

```bash
./script.sh
```


## Manual installation

### Install JSON-Server
> First install the dependencies
```bash
npm i json-server
# or
npm install json-server
```

> To run both the database JSON-Server and Frontend/Backend Next.js server

```bash
npm run both
```

#### If you want to run them individually

> Individually run database and Frontend/Backend

```bash
# Runs Database
npm run db
# Runs Frontend/Backend
npm run dashboard
```


# Project Architecture

A small description of what the project has and the choices I made for the project

## Preface

During the duration of this project I was going through multiple exams and university projects, most of choices I made for this project was to hopefully 
create the best possible _dashboard_ in the shortest amount of time possible.

## Stack

Frontend / Backend : Next.js
Database : JSON-Server

## Why Next.js?

I personally like a filesystem-based routing in Next.js to keep my project workspace clean and easy to read. It also offers flexibility in building a adaptable web application, like in this situation where I have limited time and need to rapidly develop a web application

## CSS

In this project I used TailwindCSS instead of MaterialUI which is used at Tao Bin, as its what I am most proficient in currently.

## Component Library (kind of)

For ease of use I have implemented ShadCN's component library, it is built as seperate customizable-components instead of installing as a dependency allowing me to build the dashboard according to my needs and helps lessen time needed to design components

# Project Overview 

## Key Features

- Dashboard Display : The dashboard view which compiles all the data from the machines such as revenue, total items sold, current active machines and etc..
- Machine Status : A page which shows every machine and their details, includes pagination and filters for actives and inactives machine
- SignIn / SignUp : Currently just a mock signin / signup page that can be accesed using test@taobin.com and any password

## Features Missing

- Proper SignIn/SignUp : As mentioned above it is still currently a mock authentication system
- Edit / Deletion of Machines : though the buttons are there, they are currently not working
- Variation in pages : Currently only 2 pages in which displays useful information