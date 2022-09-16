import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="personal-info"
        title="Редактировать профиль"
        submit="Сохранить"
        children={
          <>
            <label className="error-label">
              <input
                type="text"
                className="info info_name"
                id="name"
                name="name"
                required
                minLength="2"
                maxLength="40"
              />
              <span className="error" id="name-error"></span>
            </label>
            <label className="error-label">
              <input
                type="text"
                className="info info_description"
                id="description"
                name="about"
                required
                minLength="2"
                maxLength="200"
              />
              <span className="error" id="description-error"></span>
            </label>
          </>
        }
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="add-picture"
        title="Новое место"
        submit="Сохранить"
        children={
          <>
            <label className="error-label">
              <input
                type="text"
                className="info info_place-name"
                id="place-name"
                name="name"
                placeholder="Название"
                required
                minLength="2"
                maxLength="30"
              />
              <span className="error" id="place-name-error"></span>
            </label>
            <label className="error-label">
              <input
                type="url"
                className="info info_place-link"
                id="place-link"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="error" id="place-link-error"></span>
            </label>
          </>
        }
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="change-icon"
        title="Закрыть попап"
        submit="Сохранить"
        children={
          <label className="error-label">
            <input
              type="url"
              className="info info_icon"
              id="avatar"
              name="avatar"
              placeholder="Ссылка на аватар"
              required
            />
            <span className="error" id="avatar-error"></span>
          </label>
        }
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup
        link={selectedCard.link}
        title={selectedCard.name}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
