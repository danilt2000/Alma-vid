# Конфигурация контактной информации

Этот файл содержит всю контактную информацию агентства недвижимости АЛМА-ВИД в централизованном виде.

## Расположение файла

`src/config/contacts.js`

## Структура конфигурации

### Основные контакты

- `phone` - номер телефона с отображаемым текстом и ссылкой для набора
- `email` - электронная почта с отображаемым текстом и ссылкой mailto

### Адреса

- `address.main` - основной адрес офиса (для карт и контактов)
- `address.office` - рабочий адрес офиса (для страницы "Наш офис")

### Координаты

- `coordinates` - координаты для отображения на Яндекс.Картах

### Социальные сети

- `social.vk` - ВКонтакте
- `social.telegram` - Telegram
- `social.instagram` - Instagram

### Название компании

- `companyName` - полное название
- `companyNameShort` - сокращенное название

## Использование

### В компонентах

```jsx
import { CONTACTS } from '../../config/contacts';

// Использование телефона
<a href={CONTACTS.phone.link}>{CONTACTS.phone.display}</a>

// Использование email
<a href={CONTACTS.email.link}>{CONTACTS.email.display}</a>

// Использование соцсетей
<a href={CONTACTS.social.vk.url}>{CONTACTS.social.vk.name}</a>

// Координаты для карт
<Map defaultState={{ center: CONTACTS.coordinates, zoom: 12 }}>
  <Placemark
    geometry={CONTACTS.coordinates}
    properties={{
      balloonContent: CONTACTS.getBalloonContent(),
      hintContent: `Офис ${CONTACTS.companyNameShort}`
    }}
  />
</Map>
```

### С помощью хука useContacts

```jsx
import { useContacts } from "../../hooks/useContacts";

function MyComponent() {
  const contacts = useContacts();

  return (
    <div>
      <a href={contacts.getPhoneLink()}>{contacts.phone.display}</a>
      <a href={contacts.getSocialLink("vk")}>{contacts.getSocialName("vk")}</a>
    </div>
  );
}
```

### Компонент ContactInfo

```jsx
import { ContactInfo } from '../../components/ContactInfo/ContactInfo';

// Базовый вариант
<ContactInfo />

// Inline вариант
<ContactInfo variant="inline" />

// Полный вариант со всей информацией
<ContactInfo variant="full" />
```

## Обновленные страницы

Все следующие страницы теперь используют централизованную конфигурацию:

1. **Header** - номер телефона и социальные сети
2. **Footer** - социальные сети
3. **Home** - заголовок страницы, карта с координатами и balloon
4. **Office** - заголовок страницы, контактная информация, карта
5. **Services** - заголовок страницы, ссылка на ВКонтакте
6. **About** - заголовок страницы, название компании
7. **Objects** - заголовок страницы
8. **Apartament** - карта с координатами и balloon

## Преимущества централизованной конфигурации

1. **Единое место для изменений** - все контакты изменяются в одном файле
2. **Консистентность** - одинаковое отображение на всех страницах
3. **Легкость обслуживания** - не нужно искать и изменять контакты по всему проекту
4. **Типизация** - структурированные данные с понятным API
5. **Переиспользование** - легко добавлять контакты на новые страницы

## Как изменить контактную информацию

1. Откройте файл `src/config/contacts.js`
2. Измените нужные значения
3. Сохраните файл
4. Изменения автоматически применятся ко всем страницам
