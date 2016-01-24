/*jshint multistr:true */


var text = "Hey, how are Akos you \
doing? My Akos name is Akos Emily.";

var myName = "Akos";

var hits = [];

for (i = 0; i < text.length; i++) {
    if (text[i] === "A") {
        for (j = i; j < (i+ myName.length); j++) {
            hits.push(text[j]);
        };
    };

};

if (hits.length === 0) {
    console.log("Your name wasn't found!");
}

else {
    console.log(hits);
};