# Currently in development!
README v0.1.0

# User authorization template

refresh-token.service - настройки куки при деплое
main ts - реализовать логирование winston
auth.helper.ts - указание домена для которого действует куки
------------------------------

- Установить pg admin (postgresql на пк)
- Создать БД через pg admin и запомнить ее название
- Получать username, password postgresql
- Обновить данные в env
DATABASE_URL=postgresql://postgres:123456@localhost:5432/auth-mk?schema=public

postgres - твой юзернейм postgresql
123456 - твой пароль postgresql
localhost - не меняется
5432 - дефолтный порт, иногда может меняться
auth-mk - название твое базы

Выполнить:
	npm install
	npm prisma db push

//GET social media auth api tokens
Google
Для получения ключей Google OAuth выполните следующие шаги:

Перейдите на Google Cloud Console.
Создайте новый проект или выберите существующий.
Перейдите в меню APIs & Services > Credentials (https://console.cloud.google.com/apis/dashboard).
Нажмите Create Credentials и выберите OAuth Client ID.
Настройте экран согласия OAuth (external), если вы еще этого не сделали.
Заполните необходимые поля (auth domains пропускаем, как и вкладку scopes и optional info).
Добавляем google аккаунт, который будем тестировать в поле "Test users"
Мне потребовалось еще раз вернуться на страницу https://console.cloud.google.com/apis/credentials и нажать кнопку Create credentials -> OAuth client ID
Выбираем тип веб-приложение
И далее наполянем поля (или свой домен на production
origins = http://localhost:4200
redirects = http://localhost:4200/auth/google/callback
После этого нажимаем кнопку создать и получаем Client ID и Client Secret.

GitHub
Для получения ключей GitHub OAuth выполните следующие шаги:

Перейдите на GitHub Developer Settings (https://github.com/settings/developers).
В разделе OAuth Apps нажмите New OAuth App.
Заполните необходимые поля, такие как Application name, Homepage URL, и Authorization callback URL.
Нажмите Register application и получите Client ID и Client Secret.









Добавление FAVICON:

Добавить свой файл favicon.svg в папку /public/




Настройка конфигурации и добавление метаданных для СЕО оптимизации в файлах: 

Добавить свои иконки в предпочтительных размерах в папку /public/touch-icons
Добавить предпочтительные данные в файлы /public/robots.txt и /public/manifest.json
Сконфигурировать карту сайта в файле /src/app/sitemap.xml/route.ts
Добавить свои метаданные в файле /src/app/layout.tsx
