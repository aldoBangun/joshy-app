<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="https://res.cloudinary.com/nocturncloud/image/upload/v1662380511/joshy-app/README/Landing_Hero_b6v6qj.png" alt="Logo" width="500px">
  </a>

  <h3 align="center">Joshy(Jobs Huntsy)</h3>

  <p align="center">
    <a href="https://joshy-app.web.app/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/aldoBangun/joshy-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/aldoBangun/joshy-app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#setup-env-example">Setup .env example</a></li>
      </ul>
    </li>
    <li><a href="#screenshoots">Screenshots</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#related-project">Related Project</a></li>
    <li><a href="#our-team">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

**JOSHY** is a web based application that helps a lot of job seekers to find their dream jobs. Also, this application have a unique method for the recruitment, in **JOSHY** the recruiter is the one who will find the job seekers, so what job seekers do? Job seekers just need to put their personal information as complete as they could and after that they can wait until the recruiter send them a message for hiring process, simple isn't it?

### Built With

This app was built with some technologies below:

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://www.javascript.com/)
- [React](https://reactjs.org/)
- [React Redux](https://react-redux.js.org/introduction/getting-started)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux Persist](https://www.npmjs.com/package/redux-persist)
- [React Router DOM v6](https://reactrouter.com/en/v6.3.0/getting-started/overview)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [CryptoJS](https://cryptojs.gitbook.io/docs/)
- [Formik](https://formik.org)
- [Axios](https://axios-http.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Before going to the installation stage there are some software that must be installed first.

- [NodeJs](https://nodejs.org/en/download/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Installation

If you want to run this project locally, I recommend you to configure the [back-end](https://github.com/mikhaelkevin/joshy-back-end/tree/deployment) first before configuring this repo front-end.

- Clone the repo

```
git clone https://github.com/aldoBangun/joshy-app
```

- Go To Folder Repo

```
cd joshy-app
```

- Install Module

```
npm install
```

- <a href="#setup-env">Setup .env</a>
- Type ` npm run dev` To Start Website
- Type ` npm run start` To Start Production

<p align="right">(<a href="#top">back to top</a>)</p>

### Setup .env example

Create .env file in your root project folder.

```
REACT_APP_API_URL=example
REACT_APP_CRYPTO_SECRET_KEY=example
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Screenshots

<p align="center" display=flex>
   
<table>
<tr>
    <td style='text-align: center; background-color: #6661; font-weight: 600'>Login Page</td>
    <td style='text-align: center; background-color: #6661; font-weight: 600'>Register Page (Candidate)</td>
  </tr>
  <tr>
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1663229139/joshy-app/README/Login_lwabmq.png" alt="login" width=100%></td>
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1663229140/joshy-app/README/Reg_Candidate_qo0knl.png" alt ="register-candidate" width=100%/></td>
  </tr>
   <tr>
    <td style='text-align: center; background-color: #6661; font-weight: 600'>Register Page (Recruiter)</td>
    <td style='text-align: center; background-color: #6661; font-weight: 600'>Landing Page</td>
  </tr>
  <tr>
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1663229139/joshy-app/README/Reg_Company_ey7zhc.png" alt="register-recruiter" width=100%></td>
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1663229143/joshy-app/README/Landing_s8wn8n.png" alt="landing-page" width=100%/></td>
  </tr>
  <tr>
    <td style='text-align: center; background-color: #6661; font-weight: 600'>Search Candidate (Recruiter)</td>
    <td style='text-align: center; background-color: #6661; font-weight: 600'>View Candidate Profile (Recruiter)</td>
  </tr>
  <tr>
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1662378008/joshy-app/README/Search_candidate_jp7m6n.png" alt="search-candidate" width=100%></td>
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1662378008/joshy-app/README/Recruiter_View_Candidate_Profile_lgzz3t.png" alt="view-candidate-recruiter" width=100%/></td>
  </tr>
  <tr>
    <td style='text-align: center; background-color: #6661; font-weight: 600'>My Profile (Recruiter)</td>
    <td style='text-align: center; background-color: #6661; font-weight: 600'>Edit Profile (Recruiter)</td>
  </tr>
  <tr>
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1662378007/joshy-app/README/Profile_Company_puuhus.png" alt="my-profile-recruiter" width=100%></td>
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1662379979/joshy-app/README/Edit_Profile_Recruiter_cuhgjk.png" alt="edit-profile-recruiter" width=100%></td>
  </tr>
  <tr>
    <td style='text-align: center; background-color: #6661; font-weight: 600'>Candidate Hire (Recruiter)</td>
    <td style='text-align: center; background-color: #6661; font-weight: 600'>My Profile (Candidate)</td>
  </tr>
  <tr>
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1663320253/joshy-app/README/hirePage_nbjrb6.png" alt="candidate-hire" width=100%></td>
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1662378007/joshy-app/README/Profile_Candidate_k5eh0y.png" alt="my-profile-candidate" width=100%></td>
  </tr>
  <tr>
  <td style='text-align: center; background-color: #6661; font-weight: 600'>My Profile - Experience (Candidate)</td>
  <td style='text-align: center; background-color: #6661; font-weight: 600'>Edit Profile (Candidate)</td>
  </tr>
  <tr>
  <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1662378007/joshy-app/README/Profile_Candidate_Exp_wokjpm.png" alt="my-profile-candidate-exp" width=100%></td>
  <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1662379979/joshy-app/README/Edit_Profile_Candidate_c2u7kx.png" alt="edit-profile-candidate" width=100%></td>
  </tr>
</table>
      
</p>
<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b someFeature-features`)
3. Commit your Changes (`git commit -m 'add(someFeature): what kind of feature'`)
4. Push to the Branch (`git push origin someFeature-features`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## Related Project

<center>
<table> 
    <tr>
    <th>Backend</th>
    <th>Frontend</th>
    <th>Demo</th>
    </tr>
    <tr>
    <td>
    <a href="https://github.com/mikhaelkevin/joshy-back-end" target="_blank"> 
    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="be-github"/>
    </a>
    </td>
    <td> 
    <a href="https://github.com/aldoBangun/joshy-app"> 
    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="fe-github">
    <a/>
    </td>
    <td> 
    <a href="https://joshy-app.web.app/" target="_blank"> 
    <img src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white" alt="demo">
    <a/>
    </td>
    </tr>
</table>
</center>

<p align="right">(<a href="#top">back to top</a>)</p>

## Our Team

<center>
  <table>
  <tr>
  <th colspan=5>
    <b>JOSHY APP TEAM</b>
  </th>
  </tr>
    <tr>
      <td align="center">
        <a href="https://github.com/mikhaelkevin" target="_blank">
          <img width="100" src="https://avatars.githubusercontent.com/u/102899084?s=400&u=618d13a4fa77ad80e7a2cb9349c250aef1be6e2f&v=4" alt="kevin"><br/>
          <sub><b>Mikhael Kevin</b></sub> <br/>
          <sub>Project Leader | Backend Dev</sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/aldoBangun" target="_blank">
          <img width="100" src="https://avatars.githubusercontent.com/u/58449615?v=4" alt="aldo"><br/>
          <sub><b>Aldo Bangun</b></sub> <br/>
          <sub>Frontend Dev</sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/Jafarammer" target="_blank">
          <img width="100" src="https://avatars.githubusercontent.com/u/73752464?v=4" alt="jafar"><br/>
          <sub><b>Jafar Ammer</b></sub> <br/>
          <sub>Frontend Dev</sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/rahimatunnimah" target="_blank">
          <img width="100" src="https://avatars.githubusercontent.com/u/59507749?v=4" alt="nimah"><br/>
          <sub><b>Rahimatun Ni'mah</b></sub> <br/>
          <sub>Backend Dev</sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/VerdyNordsten" target="_blank">
          <img width="100" src="https://avatars.githubusercontent.com/u/51946708?v=4" alt="verdy"><br/>
          <sub><b>Verdy</b></sub> <br/>
          <sub>Frontend Dev</sub>
        </a>
      </td>
    </tr>
  </table>
</center>

## License

Distributed under the [MIT](/LICENSE) License.

<p align="right">(<a href="#top">back to top</a>)</p>
