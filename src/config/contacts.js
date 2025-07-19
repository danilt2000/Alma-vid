export const CONTACTS = {
  phone: {
    display: "8(351)217-00-74",
    link: "tel:+73512170074",
  },
  email: {
    display: "sdelka.74@yandex.ru",
    link: "mailto:sdelka.74@yandex.ru",
  },

  address: {
    main: {
      street: "ул. Комаровского, 4А, офис 210",
      city: "Челябинск",
      postalCode: "454052",
      full: "ул. Комаровского, 4А, офис 210, Челябинск, 454052",
    },
  },

  coordinates: [55.242355, 61.37697],

  social: {
    vk: {
      url: "https://vk.com/almavid_74",
      name: "ВКонтакте",
    },
    telegram: {
      url: "https://t.me/almavid_74",
      name: "Telegram",
    },
    instagram: {
      url: "https://instagram.com/almavid_74",
      name: "Instagram",
    },
  },

  companyName: "Агентство недвижимости АЛМА-ВИД",
  companyNameShort: "АЛМА-ВИД",

  workingHours: "Пн-Пт: 9:00-18:00, Сб: 10:00-16:00",

  getBalloonContent: () => {
    return `
      <div>
        <strong>${CONTACTS.companyName}</strong><br/>
        Адрес: ${CONTACTS.address.main.street}<br/>
        ${CONTACTS.address.main.city}, ${CONTACTS.address.main.postalCode}<br/>
        Тел: ${CONTACTS.phone.display}
      </div>
    `;
  },
};

export const API_CONFIG = {
  baseURL: "https://almavid.ngr1.ru",
  endpoints: {
    feedback: "/api/feedback/send",
    rental: "/api/rental/send",
  },

  getFullURL: (endpoint) => {
    return `${API_CONFIG.baseURL}${endpoint}`;
  },
};
