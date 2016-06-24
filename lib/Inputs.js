/*
This is the inputs library, it relies on your inputs being defined in obj/Inputs.js

to get whether an input is defined use Input.getKey(<INPUTNAME>) or Input.getKeyPressed(<INPUTNAME>) where <INPUTNAME> is the input defined in obj/Inputs.js.

*/

class Input {

   static getKey(input) {
      let res = false;
      let keys = inputs[input];
      for (let i = keys.length;i--;) {
         if (JSGMF.getKey(keys[i]))
            res = true;
      }
      return res;
   }

   static getKeyPressed(input) {
      let res = false;
      let keys = inputs[input];
      for (let i = keys.length;i--;) {
         if (JSGMF.getKeyPressed(keys[i]))
            res = true;
      }
      return res;
   }

   static getOptions(input) {
      return inputs[input];
   }

   static getOptionCount(input) {
      let res = false;
      let keys = inputs[input];
      return keys.length;
   }

   static addAlternativeKey(input, key) {
      let keys = inputs[input];
      return keys.push(key);
   }


}
