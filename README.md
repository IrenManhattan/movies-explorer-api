# Бэкенд для сервиса Movies Explorer - дипломный проект Яндекс Практикум.

## [Домен сервера](https://api-iren-movies.nomoredomains.icu) 

## 📖 Документация к API

+ Пользователи
  + `POST /signup` — создает пользователя с переданными в теле `email`, `password`, `name`
  + `POST /signin` — проверяет переданные в теле `email` и `password` и возвращает `JWT`
  + `GET /users/me` - возвращает информацию о пользователе, его `email` и `name` - **роут защищен авторизацией**
  + `PATCH /users/me` — обновляет профиль, в теле запроса передаются `name` и `email` - **роут защищен авторизацией**
+ Фильмы
  + `GET /movies` — возвращает все сохранённые пользователем фильмы - **роут защищен авторизацией**
  + `POST /movies` — создаёт фильм с переданными в теле `country`, `director`, `duration`, `year`, `description`, `image`, `trailerLink`, `nameRU`, `nameEN`, `thumbnail` и `movieId` - **роут защищен авторизацией**
  + `DELETE /movies/:movieId` — удаляет сохранённый фильм по `_id` - **роут защищен авторизацией**


## 📃 Стек

- Javascript
- Node.js
- Express.js
- MongoDB
