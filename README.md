live link: https://hero-app-assig.netlify.app/apps

Technologies Used: React.js, HTML, CSS, JavaScript, Recharts, React Router DOM, LocalStorage

## 📖 Project Overview
Hero IO is a fully responsive web application that displays mobile apps with detailed information, ratings, downloads, and installation functionality.  
Users can explore apps, perform live searches, view detailed charts, install/uninstall apps, and enjoy a smooth experience across all devices.

## 🛠️ Technologies Used
- React.js  
- HTML5 & CSS3  
- JavaScript (ES6+)  
- React Router DOM  
- Recharts (for charts)  
- LocalStorage (for persistent app installations)  
- Deployment: Netlify / Vercel / Cloudflare Pages

## 📌 Core Features
- Responsive layout for all devices  
- Home Page: Banner, States Section, Top Apps  
- All Apps Page: Live search, total app count, "No App Found" message  
- App Details Page: App info, Install/Installed button, review charts  
- Challenge Features: My Installation Page, Uninstall, LocalStorage support, sort apps by downloads  
- Custom Error Page for invalid routes  
- Loading animations for navigation & search  

## ⚡ JSON Data Structure
```json
{
  "id": 1,
  "image": "string",
  "title": "string",
  "companyName": "string",
  "description": "string",
  "size": 50,
  "reviews": 100,
  "ratingAvg": 4.5,
  "downloads": 1000,
  "ratings": [
    { "name": "1 star", "count": 10 },
    { "name": "2 star", "count": 5 },
    { "name": "3 star", "count": 15 },
    { "name": "4 star", "count": 30 },
    { "name": "5 star", "count": 40 }
  ]
}
