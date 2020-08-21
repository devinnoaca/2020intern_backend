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


## 개발 인원 및 기간
- 개발 기간 : 2020/06/29 ~ 2020/08/14
- 개발 인원 : 프론트엔드 2명, 백엔드(서버) 3명, 운영 : 3명
- [프론트엔드 github) [https://github.com/open-inno/2020intern_front]


# 사용 기술 및 구현 기능
## 사용 기술
- Java script, Node.js
- MySQL2 (2.1.0)
- nodemon (2.0.4), express (4.16.1)
- winston (3.3.3), crypto (1.0.1)



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

<h2> 2. 소개</h2>

### 프로젝트의 목적
이노베이션 아카데미의 학생들과 멘토단 사이의 매칭을 위한 멘토링 사이트.

### 사이트 사용 방법 
* 멘티(학생)는 로그인 후 자신이 이때까지 해왔던 것들에 대한 키워드를 전부 저장을 할 수 있다.(User total keyword)
* 멘토는 메인 멘토 찾기 페이지에서 자동으로 검색이 되기 위해 추천받고 싶은 키워드를 설정해 놓을 수 있다. (Recommend Keyword)
* 멘토 검색 페이지에서 멘티는 저장한 키워드를 기반으로 자신에게 적합한 멘토의 리스트를 자동으로 추천받는다.
* 매칭을 요청하는 멘티(학생)는 멘토탄을 검색 시 '키워드'를 선택하여 검색을 한다.

<br>
<br>



***
by 이노베이션 아카데미 서비스팀 <br>
(https://github.com/open-inno/2020intern_backend)
