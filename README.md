# Tao Bin Admin Dashboard

This is a project made by Josh Perry

## Install using taobin.sh

```bash
./taobin.sh
```


## Manual installation

### Install JSON-Server
> First install the dependencies
```bash
npm i json-server
# or
npm install json-server
```

>

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

In this project I used TailwindCSS instead of MaterialUI which is used at Tao Bin, as its what I am most proficient in.

## Component Library (kind of)

For ease of use I have implemented ShadCN's component library, it is built as seperate customizable-components instead of installing as a dependency allowing me to build the dashboard according to my needs

ShadCN : https://ui.shadcn.com/

# Project Overview 

## Key Tasks

- Machine Status Display : The dashboard view ....(add later)
- 
- 