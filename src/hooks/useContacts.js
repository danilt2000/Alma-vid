import { CONTACTS } from "../config/contacts";

// Хук для использования контактной информации
export const useContacts = () => {
  return {
    ...CONTACTS,
    // Дополнительные утилитарные функции
    getPhoneLink: () => CONTACTS.phone.link,
    getEmailLink: () => CONTACTS.email.link,
    getFullAddress: (type = "main") =>
      CONTACTS.address[type]?.full || CONTACTS.address.main.full,
    getSocialLink: (platform) => CONTACTS.social[platform]?.url || "#",
    getSocialName: (platform) => CONTACTS.social[platform]?.name || platform,
  };
};
