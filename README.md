<!-- # AngularCourse

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->
Д/з 

Створити компонент movie-card(child) та movie-list(parent)

movie-card може містити такі елементи:

Постер фільму: Мініатюрне зображення або постер фільму
Назва фільму: Текстове поле з назвою фільму, можливо, з додатковою інформацією, такою як рік випуску.
Рейтинг фільму: Значення рейтингу фільму, яке може бути представлене у вигляді числа.
Короткий опис або жанр: Короткий опис сюжету фільму або його жанр, який допоможе користувачам швидко зрозуміти суть фільму.
Додаткова інформація: Можливість відобразити додаткову інформацію, таку як режисер, тривалість, вікові обмеження тощо.
Кнопка "Детальніше": Кнопка або посилання, яке згодом дозволяє користувачам перейти до детальної сторінки цього фільму для отримання більш докладної інформації або перегляду трейлера.
Іконки «favourite”, “watchList”

Реалізувати взаємодію parent-child використовуючи @Input та @Output

При натисканні на Іконку «favourite» відобразити карту фільму в новому блоці з назвою «Улюблені»

При натисканні на іконку «watchList» відобразити карту фільмів в новому блоці з назвою «Подивитись» 