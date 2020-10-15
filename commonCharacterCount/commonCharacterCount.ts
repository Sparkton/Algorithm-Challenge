function commonCharacterCount(s1: string, s2: string): number {
   var c1: string[] = [];
   var c2: string[] = [];
   var ctr: number = 0;
   for (let i = 0; i < c1.length; i++) {
       for (let j = 0; j < c2.length; j++) {
           if (c1[i] == c2[j]){
               ctr++;
               c1[i] = '0';
               c2[j] = '0';
               //break;
           }
       }
   }
   return ctr;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));