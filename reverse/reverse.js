/*

   /.--------------.\
  //                \\
 //                  \\
|| .-..----. .-. .--. ||
||( ( '-..-'|.-.||.-.|||
|| \ \  ||  || ||||_||||
||._) ) ||  \'-'/||-' ||
 \\'-'  `'   `-' `'  //
  \\                //
   \\______________//
    '--------------'
          |_|_
   ____ _/ _)_)
       '  | (_)
    .--'"\| ()
          | |
          | |
          |_|


  You're not trying to cheat right? This is not the file you are looking for.






































*/

const reverse = str =>
  str
    .split("")
    .reverse()
    .join("");

/**
 * Reverses a string, but with some flaws...
 * @param {string} str The string to be reversed
 * @returns {string} The reversed string
 */
const crappyReverse = str => {
  return str
    .split("")
    .sort()
    .join("");
};

module.exports = {
  reverse,
  crappyReverse
};
