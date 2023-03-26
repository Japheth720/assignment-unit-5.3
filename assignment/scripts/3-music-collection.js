console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };

    collection.push(album);

    return album;

};


console.log(addToCollection('Yellow Cab', 'DPR Live', '2022'));

console.log(addToCollection('Jam and Butterfly', 'DPR Live', '2020'));

console.log(addToCollection('Cheese and Wine', 'DPR Live', '2017'));

console.log(addToCollection('Any Song', 'ZICO', '2020'));

console.log(addToCollection('So Beautiful', 'DPR Ian', '2020'));

console.log(addToCollection('Calico', 'DPR Ian', '2022'));

console.log(collection);


function showCollection(array){
    console.log(array.length);
    for (let album of array) {
        console.log( album.title + ' by ' + album.artist + ', published in ' + album.yearPublished);

    }
};

showCollection(collection);


function findByArtist(artist){
    let array = [];
    for (let object of collection){
        if(object.artist === artist) {
            array.push(object);
        }
    
    }

    return array;
};
// Example of artists showing twice
console.log(findByArtist('DPR Live'));
console.log(findByArtist('ZICO'));

// Example of empty array
console.log(findByArtist('pepsi'));