export const randomFloat = (min, max) => Math.random() * (max - min) + min;
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export const shuffle = array => array.sort(() => Math.random() - 0.5);

// export let Game = {
//     score: 100,
//     method1: function(param1 ) {
        
//     },
//     method2: function(param1 ) {
        
//     },
//     method3: function(param1 ) {
        
//     },
//     method4: function(param1 ) {
        
//     }
// }
