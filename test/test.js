 let array=  [
    {
      "id": 1,
      "name": "Apple iPhone 12 Pro Max",
      "description": "The latest iPhone model with advanced camera features and powerful performance.",
      "imageUrl": "https://1.bp.blogspot.com/-NOU4Vn7yW84/X9GX3MNKruI/AAAAAAABcqU/FIFxd04wg_Qda1RMLrd0ThpTaRxiNB4jgCNcBGAsYHQ/s180-c/bird_crested_duck_ahiru.png",
      "price": 1149.00,
      
    },

    {
        "id": 1,
        "name": "Apple iPhone 12 Pro Max",
        "description": "The latest iPhone model with advanced camera features and powerful performance.",
        "imageUrl": "https://1.bp.blogspot.com/-NOU4Vn7yW84/X9GX3MNKruI/AAAAAAABcqU/FIFxd04wg_Qda1RMLrd0ThpTaRxiNB4jgCNcBGAsYHQ/s180-c/bird_crested_duck_ahiru.png",
        "price": 1149.00,
        
      },
      {
        "id": 1,
        "name": "Apple iPhone 12 Pro Max",
        "description": "The latest iPhone model with advanced camera features and powerful performance.",
        "imageUrl": "https://1.bp.blogspot.com/-NOU4Vn7yW84/X9GX3MNKruI/AAAAAAABcqU/FIFxd04wg_Qda1RMLrd0ThpTaRxiNB4jgCNcBGAsYHQ/s180-c/bird_crested_duck_ahiru.png",
        "price": 1149.00,
        
      },
    {
      "id": 2,
      "name": "Samsung Galaxy S21 Ultra",
      "description": "A high-end smartphone with a large screen and top-of-the-line camera technology.",
      "imageUrl": "https://1.bp.blogspot.com/-_0tLdAB6wVs/X7zMVCQ8k7I/AAAAAAABcZ4/BS-S_XwqcdkQJaX4wSVdkLi1dMVjQiInACNcBGAsYHQ/s180-c/bird_gachou.png",
      "price": 1149.00,
      
    },
    {
        "id": 2,
        "name": "Samsung Galaxy S21 Ultra",
        "description": "A high-end smartphone with a large screen and top-of-the-line camera technology.",
        "imageUrl": "https://1.bp.blogspot.com/-_0tLdAB6wVs/X7zMVCQ8k7I/AAAAAAABcZ4/BS-S_XwqcdkQJaX4wSVdkLi1dMVjQiInACNcBGAsYHQ/s180-c/bird_gachou.png",
        "price": 1149.00,
        
      },
    {
      "id": 3,
      "name": "Google Pixel 6 Pro",
      "description": "A smartphone with a sleek design and advanced camera features powered by Google.",
      "imageUrl": "https://1.bp.blogspot.com/-bxlD0epIwJY/X7zMVGrK_EI/AAAAAAABcZw/Xgmc3-cnfOsuGQqDw7GIyNjOPXkmXRKtwCNcBGAsYHQ/s180-c/bird_shiro_sagi.png",
      "price": 799.00,
      
    }
  ]
//指定したいidを消す これは働く
//   function removeElementsWithId(array, id) {
//     return array.filter(function(item) {
//         return item.id !== id;
//     });
// }

// let filteredArray = removeElementsWithId(array, 1);

// console.log(filteredArray);

//ネットから拾ってきたやつ

// var count = array.reduce(function(prev, current) {
//     prev[current] = (prev[current] || 0) + 1;
//     return prev;
//   }, {});
  
//   console.log(count); 実行結果：{ '[object Object]': 6 }


//jsonの中のcountの数を変えてくれる（笑）
// function countDuplicates(array) {
//     let countMap = new Map();
  
//     array.forEach(function(item) {
//       let key = JSON.stringify(item);
//       if (countMap.has(key)) {
//         countMap.set(key, countMap.get(key) + 1);
//       } else {
//         countMap.set(key, 1);
//       }
//     });
  
//     let duplicates = [];
//     countMap.forEach(function(value, key) {
//       if (value > 1) {
//         duplicates.push({
//           item: JSON.parse(key),
//           count: value
//         });
//       }
//     });
  
//     return duplicates;
//   }


//   let result = countDuplicates(array);
//   console.log(result);

  // //To count how many duplicats there are
// function count(arr){
//   var count = arr.reduce(function(prev, current) {
//     prev[current] = (prev[current] || 0) + 1;
//     return prev;
//   }, {});
  
//   console.log(count);
// }

function countDuplicates(array) {
  let counts = {};
  for (let i = 0; i < array.length; i++) {
    let id = array[i].id;
    if (counts[id]) {
      counts[id]++;
    } else {
      counts[id] = 1;
    }
  }
  return counts;
}

console.log(countDuplicates(array));
 