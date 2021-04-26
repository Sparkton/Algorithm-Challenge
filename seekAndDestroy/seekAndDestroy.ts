function seekAndDestroy(arr1: number[], arr2: number[]): number[] {
  return arr1.filter(element => !arr2.includes(element));
}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));

/* 
JavaScript Array filter() Method

Definition and Usage
The filter() method creates an array filled with all array elements that pass a test (provided as a function).

Note: filter() does not execute the function for array elements without values.

Note: filter() does not change the original array.

Syntax
array.filter(function(currentValue, index, arr), thisValue)

Parameter Values
Parameter	                          Description
function(currentValue, index,arr)	  Required. A function to be run for each                                                               element in the array.

                                    Function arguments:
                                    Argument	      Description
                                    currentValue	  Required. The value of the current element
                                    index	          Optional. The array index of the current element
                                    arr	            Optional. The array object the current element                    belongs to
                                    
thisValue	                          Optional. A value to be passed to the function to                                                     be used as its "this" value.
                                    If this parameter is empty, the value "undefined" will be passed as its "this" value

*/
