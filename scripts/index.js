//edit profile
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton =
  editProfileModal.querySelector(".modal__close-btn");

// new post
const newPostButton = document.querySelector(".profile__post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-btn");

//fill profile modal
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileName.textContent;
  editProfileDescriptionInput.value = profileDescription.textContent;
  editProfileModal.classList.add("modal_is-opened");
});
editProfileCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostButton.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});
newPostCloseButton.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

//edit profile submission handler
const editProfileForm = editProfileModal.querySelector(".modal__form");

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

//new post submmission handler

const newPostForm = newPostModal.querySelector(".modal__form");
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");
const newPostImageInput = newPostModal.querySelector("#card-image-input");

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log(newPostCaptionInput.value);
  console.log(newPostImageInput.value);
}
newPostForm.addEventListener("submit", handleNewPostSubmit);
