# Docker Setup для Alma-vid

## Сборка и запуск контейнера

### Простой запуск с docker-compose (рекомендуется):

```bash
docker-compose up --build
```

### Или вручную:

1. Сборка образа:

```bash
docker build -t alma-vid .
```

2. Запуск контейнера:

```bash
docker run -p 80:80 alma-vid
```

## Структура Docker файлов

- `Dockerfile` - Многоэтапная сборка React приложения с nginx
- `docker-compose.yml` - Конфигурация для запуска с docker-compose
- `.dockerignore` - Исключения файлов при сборке
- `nginx.conf` - Кастомная конфигурация nginx с оптимизациями

## Особенности

- Использует Node.js 18 Alpine для сборки
- Nginx Alpine для продакшена
- Gzip сжатие
- Кеширование статических файлов
- Поддержка React Router
- Безопасность заголовков

## Доступ к приложению

После запуска приложение будет доступно по адресу: http://localhost

## Логи

Логи nginx сохраняются в папке `./logs` (при использовании docker-compose)
