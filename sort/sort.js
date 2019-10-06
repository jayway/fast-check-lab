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

const sort = array => array.sort();

/**
 * Sorts an array, but with some flaws...
 * @param {Array<T>} array The array that should be sorted
 * @returns {Array<T>} A sorted array
 */
const crappySort = array => {
  return new Array(array.length).fill("a");
};

module.exports = {
  sort,
  crappySort
};
