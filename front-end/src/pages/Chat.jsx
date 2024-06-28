import React from "react";

const Chat = () => {
  return (
    <div>
      <section class="container">
        <section class="chat">
          <section class="chat__messages"></section>
          <form class="chat__form">
            <input
              type="text"
              class="chat__input"
              placeholder="Digite uma mensagem"
              required
            />
            <button type="submit" class="chat__button">
              <span class="material-symbols-outlined">send</span>
            </button>
          </form>
        </section>
      </section>
    </div>
  );
};

export default Chat;
