const dictionary = require("./dictionary.json");

const index = (serachWord) => {

    //console.log(dictionary)

        let searchLeft = 0;
        let searchRight = dictionary.length - 1;
        let half;
        let counter=0

        while (searchLeft < searchRight) {
            half = Math.ceil((searchRight + searchLeft) / 2);
            console.log(half)
            if (serachWord.toLowerCase() === dictionary[half].English.toLowerCase()) {
              //  console.log(dictionary[half].katakana)
              console.log(counter)

                return dictionary[half].katakana
            } else if (serachWord.toLowerCase() < dictionary[half].English.toLowerCase()) {
                console.log('right')
                console.log('conper;'+dictionary[half].English)
                console.log(counter)
                if(searchRight === half){
                    return "該当なし"
                }
                searchRight = half;
            } else if (serachWord.toLowerCase() > dictionary[half].English.toLowerCase()) {
                console.log('left')
                console.log('conper;'+dictionary[half].English)
                console.log(counter)
                if(searchLeft === half){
                    return "該当なし"
                }
                searchLeft = half;
            } 
            counter++
        }
}

module.exports = index;
