# HDControl
Project to catalog and manage HDs from Fantástica Filmes.

- [About](#about)
- [Objective](#objective)
- [Setup](#setup)
- [Project](#project)
- [React.js](#reactjs)
- [Web Page](#web-page)
    - [Login Page](#login-page)
    - [QR Code User Page](#qr-code-user-page)
    - [Admin access Page](#admin-access-page)
    - [HD Registration Page](#hd-registration-page)
    - [HDs Resume](#hds-resume)
- [References](#references)

## About
A problem here at Fantastica Filmes is the HDDs control in the movie set. 

When there is a job, some hard drives are needed to store movies and each hard drive needs to be shipped to different locations.<br />
One goes to editing, one to post-production, one to backup,... and so on.
The idea is to create a system to organize this process, and map where each HD is.

## Objective
The ideia to solve this problem is to add to each hard drive a QR code that will redirect to a webpage where the <br />
user can add some informations, like:

- Destination
- Content
- HD Size
- Job

Its is the main part, the other part is to develop a portal to register HDs and another <br />
page to show the summary of the situation of each HD.

## Setup
- Languages:
    - HTML
    - CSS
    - JavaScript
    - Python
    - JSON
- Libs:
    - React
- Tools:
    - Visual Code
    - Docker

## Project

### React.js
I chose React because it is a lib that we can quickly develop and is easy to maintain.

### Data
To store the hds info I will use a simple json-server. After I can change to a better Data Base.
We can see a example of each table below:

**hds**

| id | name | modification_date | size(TB) | code | qr_code | url_image |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FFHD_01 | 2022-02-01 | 4 | NVG123N | ***** | https://fantasticafilmes.com/img.png |
|  |  |  |  |  |  |  |

**hds_info**

The second will store all log information about the HDs traffic:

| id  | id_hd | location | responsible | phone | email | date | job |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | Fantastica Filmes | Juca | (41) 996836428 | stival@fantasticafilmes.com | 2022-01-10 | 2022_02_FRIMESA |
|  |  |  |  |  |  |  |  |

All these tables can change, they all are a first idea.

## Web Page
All system will work on a web browser, and mostly will be used on a smartphone. <br />
Because of this the webpage need to be responsible and the react.js will be useful to this.
The ideia is to has 4 pages:

### QR Code User Page<br />
Here is where the user will populate the HD infos. Here will exists the fields like:
- Location
- Description
- type (Backup, Edit)
- …

### HD Registration Page<br />
Here exists two pages:

- HD Registration
Page to register new HDs, this page will only be accessed by admins;
    
### HDs Resume<br />
Page that will show the HDs situation resume. 
This page can be accessed by anyone and only will show a table with each HD infos.

Will exists filters to show only specifics infos to be easy to find what the user want.

## References
- https://www.fastprint.co.uk/blog/quick-response-codes-what-are-they-and-how-do-they-work.html
- https://www.sproutqr.com/blog/how-do-qr-codes-work
- https://www.geeksforgeeks.org/generate-qr-code-using-qrcode-in-python/


npm install --save axios
npm install --save redux react-redux
npm install --save @reduxjs/toolkit
npm install --save react-router-dom
npm install --save json-server
npm install --save redux-thunk
npm install --save lodash
npm install --save qrcode