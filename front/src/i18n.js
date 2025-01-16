import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        SHOW_MORE_NEWS:'More',
        ALL_NEWS:'News',
        FAQ_TITLE:'Frequently Asked Questions',
        "HOME": "HOME",
        "NEWS": "NEWS",
        "CONTACT": "CONTACT",
        "ABOUT_US": "ABOUT US",
        "LOADING_NEWS": "Loading news...",
        "ERROR_LOADING_NEWS": "Failed to load news.",
        "LATEST_NEWS": "Latest News",
        "PUBLISHED_ON": "Published on",
        "READ_MORE": "Read More",
        "BACK_TO_NEWS": "Back to News",
        "PHOTO_GALLERY": "Photo Galery",
        "CLOSE": "Close",
        aboutGen:'About company',
        about1:'This is a travel company specializing in organizing travel and tours for clients from Turkmenistan and other countries. The company provides a wide range of services, including booking air tickets, organizing tours, visa support, hotel reservations and transportation services.',
        digit1:'1610',
        digit2:'5415',
        digit3:'54',
        about2:'Fluent communication in Turkish, Turkmen, English, Russian, and Farsi ensures smooth collaboration across borders.        ',
        about3:'Fluent communication in Turkish, Turkmen, English, Russian, and Farsi ensures smooth collaboration across borders.        ',
        about4:'Fluent communication in Turkish, Turkmen, English, Russian, and Farsi ensures smooth collaboration across borders.        ',

      },
    },
    tm: {
      translation: {
        SHOW_MORE_NEWS:'Giňişleýin',
        ALL_NEWS:'Habarlar',
        FAQ_TITLE:'Köp soralýaň soraglar',
        "HOME": "BAŞ SAHYPA",
        "NEWS": "TAZELIKLER",
        "CONTACT": "HABARLAŞMAK",
        "ABOUT_US": "BIZ BARADA",
        "LOADING_NEWS": "Täzelikler ýüklenýär...",
        "ERROR_LOADING_NEWS": "Täzelikleri ýüklemek başartmady.",
        "LATEST_NEWS": "Täze Täzelikler",
        "PUBLISHED_ON": "Neşir edilen",
        "READ_MORE": "Giňişleýin oka",
        "LOADING_NEWS": "Täzelikler ýüklenýär...",
        "ERROR_LOADING_NEWS": "Täzelikleri ýüklemek başartmady.",
        "LATEST_NEWS": "Täzelikler",
        "PUBLISHED_ON": "Neşir edilen",
        "READ_MORE": "Giňişleýin oka",
        "BACK_TO_NEWS": "Täzeliklere Yzyna",
        "PHOTO_GALLERY": "Suratlar",
        "CLOSE": "Ýap"

      },
    },
    ru: {
      translation: {
        SHOW_MORE_NEWS:'Подробнее',
        ALL_NEWS:'Новости',
        FAQ_TITLE:'Часто задаваемые вопросы',
        "HOME": "ГЛАВНАЯ",
        "NEWS": "НОВОСТИ",
        "CONTACT": "КОНТАКТЫ",
        "ABOUT_US": "О НАС",
        "LOADING_NEWS": "Загрузка новостей...",
        "ERROR_LOADING_NEWS": "Не удалось загрузить новости.",
        "LATEST_NEWS": "Последние новости",
        "PUBLISHED_ON": "Опубликовано",
        "READ_MORE": "Читать далее",
        "BACK_TO_NEWS": "Назад к новостям",
        "PHOTO_GALLERY": "Фотогалерея",
        "CLOSE": "Закрыть",
        "FAQ_TITLE": "Часто задаваемые вопросы",
        "LOADING": "Загрузка...",
  "FAQ_LOAD_ERROR": "Не удалось загрузить FAQ. Попробуйте позже.",
  "NO_FAQS_AVAILABLE": "На данный момент нет доступных вопросов.",
  


      },
    },
    tr: {
      translation: {
        SHOW_MORE_NEWS:'Detaylar',
        "HOME": "ANASAYFA",
        "NEWS": "HABERLER",
        "CONTACT": "İLETİŞİM",
        "ABOUT_US": "HAKKIMIZDA",
        "LOADING_NEWS": "Haberler yükleniyor...",
        "ERROR_LOADING_NEWS": "Haberler yüklenemedi.",
        "LATEST_NEWS": "Son Haberler",
        "PUBLISHED_ON": "Yayınlanma Tarihi",
        "READ_MORE": "Devamını Oku",
        "BACK_TO_NEWS": "Haberler'e Dön",
        "PHOTO_GALLERY": "Photolar",
        "CLOSE": "Kapat"

      },
    },
  },
  lng: "tm",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
