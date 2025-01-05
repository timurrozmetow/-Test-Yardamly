import React, { useState, useEffect } from "react";
import "./AdminPanel.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPanel = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("Contact");

  // Обработка входа
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      if (response.data.success) {
        setLoggedIn(true);
        toast.success("Вход выполнен успешно!");
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      console.error("Ошибка авторизации:", err);
      toast.error("Ошибка авторизации");
    }
    setLoading(false);
  };

  const AddNews = () => {
    const [formData, setFormData] = useState({
      title_ru: "",
      title_tm: "",
      title_tr: "",
      title_en: "",
      description_ru: "",
      description_tm: "",
      description_tr: "",
      description_en: "",
      content_ru: "",
      content_tm: "",
      content_tr: "",
      content_en: "",
      image_url: "",
    });
    const [image, setImage] = useState(null); // Для файла изображения
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
      setImage(e.target.files[0]); // Устанавливаем выбранный файл
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      if (!formData.title_ru || !formData.description_ru || !formData.content_ru) {
        toast.error("Пожалуйста, заполните все обязательные поля.");
        setIsSubmitting(false);
        return;
      }

      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });
      if (image) {
        formDataToSend.append("image", image);
      }

      try {
        await axios.post("http://localhost:5000/api/news", formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Новость успешно добавлена");
      } catch (err) {
        console.error("Ошибка при добавлении новости:", err);
        toast.error("Произошла ошибка");
      } finally {
        setIsSubmitting(false);
      }
    };

  
    return (
      <div className="add-news-container admin-form">
        <h2>Добавить новость</h2>
        <form onSubmit={handleSubmit}>
          {/* Заголовки */}
          <div className="form-group">
            <label>Заголовок (Русский):</label>
            <input
              type="text"
              name="title_ru"
              value={formData.title_ru}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Заголовок (Туркменский):</label>
            <input
              type="text"
              name="title_tm"
              value={formData.title_tm}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Заголовок (Турецкий):</label>
            <input
              type="text"
              name="title_tr"
              value={formData.title_tr}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Заголовок (Английский):</label>
            <input
              type="text"
              name="title_en"
              value={formData.title_en}
              onChange={handleChange}
              required
            />
          </div>
  
          {/* Описания */}
          <div className="form-group">
            <label>Описание (Русский):</label>
            <textarea
              name="description_ru"
              value={formData.description_ru}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Описание (Туркменский):</label>
            <textarea
              name="description_tm"
              value={formData.description_tm}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Описание (Турецкий):</label>
            <textarea
              name="description_tr"
              value={formData.description_tr}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Описание (Английский):</label>
            <textarea
              name="description_en"
              value={formData.description_en}
              onChange={handleChange}
              required
            ></textarea>
          </div>
  
          {/* Содержимое */}
          <div className="form-group">
            <label>Содержимое (Русский):</label>
            <textarea
              name="content_ru"
              value={formData.content_ru}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Содержимое (Туркменский):</label>
            <textarea
              name="content_tm"
              value={formData.content_tm}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Содержимое (Турецкий):</label>
            <textarea
              name="content_tr"
              value={formData.content_tr}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Содержимое (Английский):</label>
            <textarea
              name="content_en"
              value={formData.content_en}
              onChange={handleChange}
              required
            ></textarea>
          </div>
  
          {/* Ссылка на изображение */}
          <div className="form-group">
          <label>Загрузить изображение:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
  
        <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Добавление..." : "Добавить"}
          </button>
        </form>
      </div>
    );
  };
  

  const NewsList = () => {
    const [newsList, setNewsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      let isActive = true;
      const fetchNews = async () => {
        try {
          const { data } = await axios.get("http://localhost:5000/api/news");
          if (isActive) {
            setNewsList(data);
            setIsLoading(false);
          }
        } catch (err) {
          console.error("Ошибка при получении новостей:", err);
          if (isActive) setIsLoading(false);
        }
      };
      fetchNews();
      return () => {
        isActive = false;
      };
    }, []);

    const deleteNews = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/api/news/${id}`);
        toast.success("Новость удалена");
        setNewsList(newsList.filter((news) => news.id !== id));
      } catch (err) {
        console.error("Ошибка при удалении новости:", err);
        toast.error("Произошла ошибка при удалении");
      }
    };

    if (isLoading) return <div>Загрузка...</div>;

    return (
      
      <div className="news-list-container admin-form">
        <h2>Список новостей</h2>
        {newsList.map((news) => (
          <div className="news-item" key={news.id}>
            <h3>{news.title_ru}</h3>
            <p>{news.description_ru}</p>
            <button onClick={() => deleteNews(news.id)}>Удалить</button>
          </div>
        ))}
      </div>
    );
  };

  const ManageGallery = () => {
    const [formData, setFormData] = useState({
      title_ru: "",
      title_tm: "",
      title_tr: "",
      title_en: "",
    });
    const [image, setImage] = useState(null);
    const [gallery, setGallery] = useState([]);
  
    useEffect(() => {
      const fetchGallery = async () => {
        const response = await axios.get("http://localhost:5000/api/gallery");
        setGallery(response.data);
      };
      fetchGallery();
    }, []);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));
      if (image) data.append("image", image);
  
      try {
        await axios.post("http://localhost:5000/api/gallery", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Фотография добавлена");
      } catch (err) {
        console.error("Ошибка добавления фотографии:", err);
      }
    };
  

  
    return (
      <div className="manage-gallery admin-form">
        <h2>Управление галереей</h2>
        <form onSubmit={handleSubmit} className="admin-form">
          <input type="text" name="title_ru" required placeholder="Название (рус)" onChange={handleChange} />
          <input type="text" name="title_tm" required placeholder="Название (тм)" onChange={handleChange} />
          <input type="text" name="title_tr" required placeholder="Название (тр)" onChange={handleChange} />
          <input type="text" name="title_en" required placeholder="Название (ен)" onChange={handleChange} />
          <input type="file" accept="image/*" required onChange={handleImageChange} />
          <button type="submit">Добавить</button>
        </form>
      </div>
    );
  };
  
  const PhotoDelete = () => {
    const [gallery, setGallery] = useState([]);
  
    useEffect(() => {
      const fetchGallery = async () => {
        try {
          const response = await axios.get("http://localhost:5000/api/gallery");
          setGallery(response.data);
        } catch (err) {
          console.error("Ошибка загрузки галереи:", err);
        }
      };
      fetchGallery();
    }, []);
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/api/gallery/${id}`);
        setGallery(gallery.filter((photo) => photo.id !== id));
      } catch (err) {
        console.error("Ошибка удаления фотографии:", err);
      }
    };
  
    return (
      <>
        <h2>Управление галереей</h2>
        <div className="gallery-list">
          {gallery.map((photo) => (
            <div className="gallery-img" key={photo.id}>
              <img src={`http://localhost:5000${photo.image_url}`} alt={photo.title_ru} />
              <button onClick={() => handleDelete(photo.id)}>Удалить</button>
            </div>
          ))}
        </div>
      </>
    );
  };


  const AdminContact = () => {
    const [contacts, setContacts] = useState([]);
  
    useEffect(() => {
      fetchContacts();
    }, []);
  
    // Функция для получения данных с сервера
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/contact");
        setContacts(response.data);
      } catch (err) {
        console.error("Ошибка загрузки данных контактов:", err);
      }
    };
  
    // Функция для отправки данных на почту через Formspree
    const sendToEmail = async (contact) => {
      try {
        await axios.post("https://formspree.io/f/mbllpavj", {
          name: contact.name,
          phone: contact.phone,
          message: contact.message,
        });
        alert("Данные успешно отправлены на почту!");
      } catch (err) {
        console.error("Ошибка отправки данных на почту:", err);
        alert("Ошибка при отправке данных.");
      }
    };
  
    return (
      <div className="admin-contact">
        <h2>Заполненные формы</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Имя</th>
              <th>Телефон</th>
              <th>Сообщение</th>
              <th>Дата</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.message}</td>
                <td>{new Date(contact.created_at).toLocaleString()}</td>
                <td>
                  <button onClick={() => sendToEmail(contact)}>Отправить на почту</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };


const AdminFAQ = () => {
    const [faqs, setFaqs] = useState([]);
    const [formData, setFormData] = useState({
        question_ru: "",
        question_tm: "",
        question_tr: "",
        question_en: "",
        answer_ru: "",
        answer_tm: "",
        answer_tr: "",
        answer_en: "",
    });

    useEffect(() => {
        fetchFaqs();
    }, []);

    const fetchFaqs = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/faqs");
            setFaqs(response.data);
        } catch (err) {
            console.error("Ошибка загрузки FAQ:", err);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/faqs", formData);
            fetchFaqs();
            setFormData({
                question_ru: "",
                question_tm: "",
                question_tr: "",
                question_en: "",
                answer_ru: "",
                answer_tm: "",
                answer_tr: "",
                answer_en: "",
            });
        } catch (err) {
            console.error("Ошибка добавления FAQ:", err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/faqs/${id}`);
            fetchFaqs();
        } catch (err) {
            console.error("Ошибка удаления FAQ:", err);
        }
    };

    return (
        <div className="admin-faq">
            <h2>Управление FAQ</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="question_ru" placeholder="Вопрос (RU)" value={formData.question_ru} onChange={handleChange} required />
                <input type="text" name="question_tm" placeholder="Вопрос (TM)" value={formData.question_tm} onChange={handleChange} required />
                <input type="text" name="question_tr" placeholder="Вопрос (TR)" value={formData.question_tr} onChange={handleChange} required />
                <input type="text" name="question_en" placeholder="Вопрос (EN)" value={formData.question_en} onChange={handleChange} required />
                <textarea name="answer_ru" placeholder="Ответ (RU)" value={formData.answer_ru} onChange={handleChange} required />
                <textarea name="answer_tm" placeholder="Ответ (TM)" value={formData.answer_tm} onChange={handleChange} required />
                <textarea name="answer_tr" placeholder="Ответ (TR)" value={formData.answer_tr} onChange={handleChange} required />
                <textarea name="answer_en" placeholder="Ответ (EN)" value={formData.answer_en} onChange={handleChange} required />
                <button type="submit">Добавить</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Вопрос (RU)</th>
                        <th>Ответ (RU)</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {faqs.map((faq) => (
                        <tr key={faq.id}>
                            <td>{faq.id}</td>
                            <td>{faq.question_ru}</td>
                            <td>{faq.answer_ru}</td>
                            <td>
                                <button onClick={() => handleDelete(faq.id)}>Удалить</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


  
  


  

  return  <>
  <ToastContainer position="top-right" autoClose={5000} />
  {!loggedIn ? (
    <form className="Form12" onSubmit={handleLogin}>
      <input
        className="Log"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Логин"
        required
      />
      <input
        className="Pas"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        required
      />
      <button className="btn" type="submit" disabled={loading}>
        {loading ? "Загрузка..." : "Войти"}
      </button>
    </form>
  ) : (
    <div className="admin-panel">
      <div className="admin-tabs">
        <button onClick={() => setActiveTab("News")}>Добавить Новость</button>
        <button onClick={() => setActiveTab("NewsList")}>Редактировать Новость</button>
        <button onClick={() => setActiveTab("Gallery")}>Добавить Фото</button>
        <button onClick={() => setActiveTab("GalleryDelete")}>Редактировать Фото</button>
        <button onClick={() => setActiveTab("FAQ")}>Часто задаваемые вопосы</button>
        <button onClick={() => setActiveTab("Contact")}>Почта</button>
      </div>
      <div className="admin-content">
        {activeTab === "News" && <AddNews />}
        {activeTab === "NewsList" && <NewsList />}
        {activeTab === "Gallery" && <ManageGallery />}
        {activeTab === "GalleryDelete" && <PhotoDelete />}
        {activeTab === "Contact" && <AdminContact />}
        {activeTab === "FAQ" && <AdminFAQ />}
        
        

      </div>
    </div>
  )}
</>
};

export default AdminPanel;
