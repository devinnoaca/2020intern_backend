<h1>이노베이션 아카데미 2020intern-backend 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.2-blue.svg?cacheSeconds=2592000" />
</p>


## Environment
<h3> &nbsp; &nbsp; &nbsp; 1. OS </h3>

```sh
macOS Catalina -version: 10.15.1
```

<h3> &nbsp; &nbsp; &nbsp; 2. Server </h3>
 
```sh
Node.js -version: 12.18.3
Express -version: 4.16.1
```

<h3>  &nbsp; &nbsp; &nbsp; 3. Database </h3>
 
```sh
MySQL -version: 8.0.21
```

<br>


## Module Install

```sh
npm install
```
<br>

## Execution

```sh
npm start
```
<br>



## Description

<h2> 1. 구조 </h2>

```bash
│  .DS_Store
│  .env.development
│  .gitignore
│  app.js
│  logger.js
│  package-lock.json
│  package.json
│  README.md
│  
├─bin
│      www
│      
├─controllers
│  ├─auth
│  │      authController.js
│  │      
│  ├─lib
│  │      createReqDataObject.js
│  │      date.js
│  │      keyword.js
│  │      matchingList.js
│  │      mentorList.js
│  │      user_keyword.js
│  │      
│  ├─main
│  │      keywordController.js
│  │      mentorListController.js
│  │      
│  ├─matching
│  │      matchingController.js
│  │      
│  ├─notification
│  │      notificationController.js
│  │      
│  └─user
│          careerController.js
│          keywordController.js
│          matchingController.js
│          userController.js
│          
├─database
│      pool.js
│      
├─lib
│      paramsCheck.js
│      
├─models
│  ├─auth
│  │      authDAO.js
│  │      
│  ├─lib
│  │      conn.js
│  │      userKeyword.js
│  │      
│  ├─main
│  │      keywordListDAO.js
│  │      mentorListDAO.js
│  │      
│  ├─matching
│  │      matchingDAO.js
│  │      
│  ├─notification
│  │      notificationDAO.js
│  │      
│  └─user
│          careerDAO.js
│          keywordDAO.js
│          matchingDAO.js
│          userDAO.js
│          
├─public
│  │  swagger.yaml
│  │  
│  ├─docs
│  │      
│  ├─images
│  │      
│  └─stylesheets
│          
├─queries
│  ├─auth
│  │      authQuery.js
│  │      
│  ├─main
│  │      keywordListQuery.js
│  │      mentorListQuery.js
│  │      
│  ├─matching
│  │      matchingQuery.js
│  │      
│  ├─notification
│  │      notificationQuery.js
│  │      
│  └─user
│          careerQuery.js
│          keywordQuery.js
│          matchingQuery.js
│          userQuery.js
│          
├─rest
│      auth.rest
│      main.rest
│      matching.rest
│      notification.rest
│      user.rest
│      
├─routes
│      auth.js
│      main.js
│      matching.js
│      notification.js
│      user.js
│      
└─views
        career.ejs
        keyword.ejs
        login.ejs
        recommend_keyword.ejs
        total_keyword.ejs
        user.ejs
        
```

<h2> 2. </h2>
<br>
<br>



***
by 이노베이션 아카데미 서비스팀 <br>
(https://github.com/open-inno/2020intern_backend)
