const tgData = {
  botToken: "2069403715:AAFZ-0LpT7i2L0sqjNOsw7ccsChvJK93_Lo",
  chatId: -463402438,
};

export const sendTgMessage = (name, tel) => {
  let { botToken, chatId } = tgData;
  let message =
    name === ""
      ? `<b>Телефон:</b> <i>${tel}</i>`
      : `<b>Имя:</b> <i>${name}</i>.%0A<b>Телефон:</b> <i>${tel}</i>.`;
  let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=html`;

  fetch(url);
};
