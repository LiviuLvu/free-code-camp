// Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
// Assume that all characters in the provided string are each unique.
function permAlone(str) {
  // [2,3]
  repeatingLetterGroups = [];


  // if str is one element return 1
  if (str.length === 1) {
    return 1;
  }
  // if string is made of one repeating letter return 0
  if (str.match(/^([a-z])\1+$/g)){
    return 0;
  }

  // count groups of repeating letters, and their size


  // count++ each valid combination
  // 
  // []
  // skip each combination with repeating neighbours

  return str;
}

permAlone('abfdefa');
// permAlone("aaab");
// 
// 

// ===================================
// permutations for string abfdefa

// repeating group aa = 2

// total permutations
// 7! = 5040

// count invalid permutations (aa)bfdef
// 6! * 2! = 720 * 2 = 1440
// count invalid permutations (ff)abdea
// 6! * 2! = 720 * 2 = 1440

// 5040 - 1440

// - - - - - - - -
// aabb must result in 8 permutations 

// 4! = 24

// for duplicate in one box (aa)bb
// 2! * 2!
// same for b 

// overlaps
// 2! * 2! * 2!

// total - invalid - overlaps
// 4! - (2 * 2! * 2!) + (2! * 2! * 2!) = 
// 24 - (8 + 8) = 8

// - - - - - - - 
// aaab must result in 0 permutations
// 
// repeat group aaa = 3
// 4! = 24
// for aaa in same box (aaa)b there are 2 boxes total
// 2! * 3!
// for aa in same box (aa)ab
// 3! * 2!

// 24 - (12 + 12) = 0

// - - - - - - -
// aaabb must result in 12 permutations
// 
// 5! = 120
// invalidations
// (aaa)bb -> 3! * 3! = 36
// (aa)abb -> 2! * 4! = 48
// (bb)aaa -> 2! * 3! = 12 ?
// overlaps
// 3! * 2! * 2! * 3!
// 5! - (84) + (48) = 12

// - - - - - - -
// aab should result in 2 permutations
// 
// 3! = 6
// invalidations
// (aa)b -> 2! * 2!
// 
// 3! - (2! * 2!) = 2
