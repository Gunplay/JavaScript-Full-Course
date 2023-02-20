'use strict'

// const category = "toys"

// console.log(`https://someurl.com/${category}/5`);

// const user ="Ivan";

// alert(`HI, ${user}`);

function createDirectory(directoryName) {
  const fs = require('fs')

  // Проверяем, существует ли папка с таким именем
  if (!fs.existsSync(directoryName)) {
    // Создаем папку
    fs.mkdirSync(directoryName)
    console.log(`Папка ${directoryName} создана`)
  } else {
    console.log(`Папка ${directoryName} уже существует`)
  }
}
createDirectory('newFolder')
