function steamrollArray(arr) {
  
    return arr.toString().match(/[^,]+/g).map(
      (item) => {
        if(/[^0-9]+/.test(item)) {
          if(item !== "[object Object]") {
            return item;
          } else {
            return {};
          }
        } else {
          return parseInt(item);
        }
      }
    );
  }
  
  
  
  //console.log(steamrollArraySingle([[1,2]]));
  console.log(steamrollArray([1, {}, [3, [[4]]]]));