// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.




function translatePigLatin(str) {
  var vowel = /[aeiou]/gi;
  var consonant = /[^aeiou]/;
  var latinStr = "";
  if(vowel.test(str[0])){
    latinStr = str+"way";
  }else{
  var conStr = str.substr(0,str.indexOf(str.match(vowel)[0]));//returns 'c'
  latinStr = str.slice(conStr.length)+conStr+"ay"; //onsonant+c+ay
  } 
  return latinStr;
}
translatePigLatin("consonant");
