import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
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
        "CLOSE": "Close"

      },
    },
    tm: {
      translation: {
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
        "LATEST_NEWS": "Täze Täzelikler",
        "PUBLISHED_ON": "Neşir edilen",
        "READ_MORE": "Giňişleýin oka",
        "BACK_TO_NEWS": "Täzeliklere Yzyna",
        "PHOTO_GALLERY": "Suratlar",
        "CLOSE": "Ýap"

      },
    },
    ru: {
      translation: {
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
