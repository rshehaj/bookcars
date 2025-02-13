[![build](https://github.com/aelassas/bookcars/actions/workflows/build.yml/badge.svg)](https://github.com/aelassas/bookcars/actions/workflows/build.yml) [![test](https://github.com/aelassas/bookcars/actions/workflows/test.yml/badge.svg)](https://github.com/aelassas/bookcars/actions/workflows/test.yml) [![codecov](https://codecov.io/gh/aelassas/bookcars/graph/badge.svg?token=FSB0H9RDEQ)](https://codecov.io/gh/aelassas/bookcars) [![](https://img.shields.io/badge/docs-wiki-brightgreen)](https://github.com/aelassas/bookcars/wiki) [![](https://img.shields.io/badge/live-demo-brightgreen)](https://github.com/aelassas/bookcars?tab=readme-ov-file#live-demo)

BookCars is a car rental platform, supplier-oriented, with a backend for managing car fleets and bookings, as well as a frontend and a mobile app for renting cars.

BookCars is designed to work with multiple suppliers. Each supplier can manage his car fleet and bookings from the backend. BookCars can also work with only one supplier as well.

From the backend, admins can create and manage suppliers, cars, locations, customers and bookings.

When new suppliers are created, they receive an email prompting them to create an account in order to access the backend and manage their car fleet and bookings.

Customers can sign up from the frontend or the mobile app, search for available cars based on pickup and drop-off points and time, choose a car and complete the checkout process.

A key design decision was made to use TypeScript instead of JavaScript due to its numerous advantages. TypeScript offers strong typing, tooling, and integration, resulting in high-quality, scalable, more readable and maintainable code that is easy to debug and test.

BookCars can run in a Docker container. Follow this step by step [guide](https://github.com/aelassas/bookcars/wiki/Docker) to walk you through on how to build BookCars Docker image and run it in a Docker container.

## Features

* Supplier management
* Ready for one or multiple suppliers
* Car fleet management
* Booking management
* Customer management
* Multiple payment methods (Credit Card, Pay Later)
* Multiple language support (English, French)
* Multiple pagination options (Classic pagination with next and previous buttons, infinite scroll)
* Responsive backend and frontend
* Native Mobile app for Android and iOS with single codebase
* Push notifications
* Secure against XSS, XST, CSRF and MITM
* Supported Platforms: ![iOS](https://img.shields.io/badge/iOS-4630EB.svg?logo=APPLE&labelColor=999999&logoColor=fff) ![Android](https://img.shields.io/badge/Android-4630EB.svg?&logo=ANDROID&labelColor=A4C639&logoColor=fff) ![Web](https://img.shields.io/badge/web-4630EB.svg?logo=GOOGLE-CHROME&labelColor=FBC117&logoColor=fff) ![Docker](https://img.shields.io/badge/Docker-4630EB.svg?logo=DOCKER&labelColor=4285F4&logoColor=fff)

## Live Demo

### Frontend
* URL: https://bookcars.v6.rocks:3002/
* Login: jdoe@bookcars.ma
* Password: B00kC4r5

### Backend
* URL: https://bookcars.v6.rocks:3001/
* Login: admin@bookcars.ma
* Password: B00kC4r5

### Mobile App

You can install the Android app on any Android device.

#### Scan this code with a device

Open the Camera app and point it at this code. Then tap the notification that appears.

![Mobile App Demo QR Code](https://bookcars.github.io/content/bookcars-3.4.1-qr-code.png)

#### How to install the Mobile App on Android

* On devices running Android 8.0 (API level 26) and higher, you must navigate to the Install unknown apps system settings screen to enable app installations from a particular location (i.e. the web browser you are downloading the app from).

* On devices running Android 7.1.1 (API level 25) and lower, you should enable the Unknown sources system setting, found in Settings > Security on your device.

#### Alternative Way

You can also install the Android App by directly downloading the APK and installing it on an Android device.

* [Download APK](https://expo.dev/artifacts/eas/sxig6NJkVmSr79MX15imhx.apk)
* Login: jdoe@bookcars.ma
* Password: B00kC4r5

## Resources

1. [Overview](https://github.com/aelassas/bookcars/wiki/Overview)
2. [Architecture](https://github.com/aelassas/bookcars/wiki/Architecture)
3. [Installing](https://github.com/aelassas/bookcars/wiki/Installing)
4. [Installing on VPS](https://github.com/aelassas/bookcars/wiki/Installing-on-VPS)
5. [Docker](https://github.com/aelassas/bookcars/wiki/Docker)
   1. [Docker Image](https://github.com/aelassas/bookcars/wiki/Docker#docker-image)
   2. [SSL](https://github.com/aelassas/bookcars/wiki/Docker#ssl)
6. [Build Mobile App](https://github.com/aelassas/bookcars/wiki/Build-Mobile-App)
7. [Demo Database](https://github.com/aelassas/bookcars/wiki/Demo-Database)
   1. [Windows, Linux and macOS](https://github.com/aelassas/bookcars/wiki/Demo-Database#windows-linux-and-macos)
   2. [Docker](https://github.com/aelassas/bookcars/wiki/Demo-Database#docker)
8. [Run from Source](https://github.com/aelassas/bookcars/wiki/Run-from-Source)
9. [Run Mobile App](https://github.com/aelassas/bookcars/wiki/Run-Mobile-App)
   1. [Prerequisites](https://github.com/aelassas/bookcars/wiki/Run-Mobile-App#prerequisites)
   2. [Instructions](https://github.com/aelassas/bookcars/wiki/Run-Mobile-App#instructions)
   3. [Push Notifications](https://github.com/aelassas/bookcars/wiki/Run-Mobile-App#push-notifications)
10. [Change Currency](https://github.com/aelassas/bookcars/wiki/Change-Currency)
11. [Add New Language](https://github.com/aelassas/bookcars/wiki/Add-New-Language)
12. [Unit Tests and Coverage](https://github.com/aelassas/bookcars/wiki/Unit-Tests-and-Coverage)
13. [Logs](https://github.com/aelassas/bookcars/wiki/Logs)

## License

BookCars is [MIT licensed](https://github.com/aelassas/bookcars/blob/main/LICENSE).
