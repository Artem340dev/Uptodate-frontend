# Uptodate Front-end v1.1.2

This is the minimalistic version of Uptodate's frontend: A web application for sharing one's minds by publishing articles and exploring them as a consumer

![The applied changes](/git/search.gif)

## Authentication

While developing this web application, it was considered to move away from common standarts where the authentication microservice is approached as a separate page and embed it into the top menu. This approach looks very modern and user-friendly

![The modern authentication system](/git/sign-in.gif)

## Languages

This web application is multilingual and supports at least three different languages (English, French, Russian)

![Switching languages](/git/languages.gif)

## Categories

There are a lot of different topics that an user can choose a needed article between. 
It also has a lovely interface that allows customers to filter articles they want to find

![Filtering system](/git/categories.gif)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file or the full text at [MIT License](https://opensource.org/licenses/MIT) for details.

## Overview

This is a nextjs-based web application that represents the Front-end of Uptodate. 
Uptodate is a service intended to empower consumers to publish their articles and find out necessary information.

[Check out the Back-end](https://github.com/Artem340dev/Uptodate)

## What's new

The issue applies some changes in authorization system:
  - The authentication system has been implemented as well as the **/logout** endpoint
  - The multilingualism has been implemented with the three supporting languages (English, French, Russian)
  - The filter system has been finally implemented
