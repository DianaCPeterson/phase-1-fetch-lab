fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((json) => console.log(json)) 