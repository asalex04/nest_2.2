const socket = io('http://localhost:7000');
const msgBox = document.getElementById('exampleFormControlTextarea1');
const msgCont = document.getElementById('data-container');
const bookId = document.getElementById('bookId');
const bookId1 = document.getElementById('bookId1');
const create = document.getElementById('create');
const button = document.querySelector("#submit");
const messages = [];

create.addEventListener('click', () => {
    addComment({ bookId: bookId.value, comment: msgBox.value });
    bookId.value = '';
    msgBox.value = '';
});

button.addEventListener('click', () => {
  getAllComments(bookId1.value)
  bookId1.value = ''
})

function loadDate(data) {
  let messages = '';
  data.map((message) => {
    messages += ` <li class="bg-primary p-2 rounded mb-2 text-light">
      <span class="fw-bolder">${message.bookId}</span>
      ${message.comment}
    </li>`;
  });
  msgCont.innerHTML = messages;
}

function addComment(message) {
  socket.emit('create', message);
}

function getAllComments(message) {
  socket.emit('comments', message);
}

socket.on('recMessage', (messages) => {
  loadDate(messages);
})
