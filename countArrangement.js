// Time Complexity : O(n!)
// Space Complexity : O(n)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No

/**
 * @param {number} n
 * @return {number}
 */
 let count;
 let set = new Set();
 var helper = function(n) {
     //base
     if(set.size === n) {
         count++;
     }
 
     for(let i = 1; i <= n; i++) {
         if(!set.has(i) && (i % (set.size + 1) == 0 || (set.size + 1) % i == 0)) {
             //action
             set.add(i);
             //recurse
             helper(n);
             //backtrack
             set.delete(i);
         } 
     }
 }
 
 var countArrangement = function(n) {
     count = 0;
     helper(n);
     return count;
 };