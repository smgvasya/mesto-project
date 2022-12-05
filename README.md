# "Место" - социальная сеть на минималках
Одностраничный сайт (min-width: 320px and max-width: 900px)

Учебный проект Яндекс.Практикум
# Функционал
Страница подключается к серверу через API.

Подключен скрипт, вызывающий popup с формой, в зависимости от назначения формы можно:
1. Обновить информацию профиля: имя, профессия, аватар
2. Добавить карточку с описанием и фото
3. Фото из карточки открывается в полный растр

Модальные окна можно закрыть по нажатию на клавишу ESC, клику на overlay и кнопку закрытия (крестик).
Реализована валидация форм с помощью регулярных выражений и встроенной браузерной валидации. Стиль ошибки заранее прописан. Ошибки сбрасываются при закрытии окна.

Улучшенный UX всех форм. При сохранении данных от пользователя, текст кнопки меняется на: «Сохранение...», пока данные загружаются

Для каждой карточки реализована возможность её удаления (удалить может только тот пользователь, который ее добавил), а так же прописан функционал взаимодействия с лайком (поставить/удалить/счётчик лайков)

# Используемые технологии
- HTML5
- CCS3
- Методология БЭМ (файловая структура)
- Flexbox
- Позиционирование
- Grid
- Media queries
- Формы
- ООП
- Babel
- API
- Сборка Webpack

---
[Превьюшка](https://smgvasya.github.io/mesto-project/)
