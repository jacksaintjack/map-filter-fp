

//Question 1
var arrPrice = items.map(function(el){
  return el.price;
});
var sum = arrPrice.reduce(function(acc, curr){
  return acc + curr;
});
var avgPriceCost = sum / arrPrice.length;
Math.floor(avgPriceCost);
document.querySelector("#answer1").innerHTML = avgPriceCost;

//Question 2
var question2 = items.filter(function(priceObj){
  return priceObj.price >= 14.0 && priceObj.price <= 18.0;

});

var artsiItem = question2.map(function(obj){
  return obj.title;
});
  document.querySelector("#answer2").innerHTML = artsiItem;

  //question 3
  var arrCurrency = items.filter(function(cur){
    return cur.currency_code === "GBP"
  });

  var titleCurrency = arrCurrency.map(function(obj){
    return obj.title + obj.price;

  });

  document.querySelector("#answer3").innerHTML = titleCurrency;

  //question4
  var arrMaterial = items.filter(function(mat){
   return _.contains(mat.materials, "wood", 0)
  });

  var typeMaterial = arrMaterial.map(function(obj){
    return obj.title;
  });
  document.querySelector("#answer4").innerHTML = typeMaterial;

//question5
  var amountMaterial = items.filter(function(mat){
   return mat.materials.length >= 8;
});

  var multiMaterial = amountMaterial.map(function(obj){
    return  obj.title + obj.materials + obj.materials.length;
  });
  document.querySelector("#answer5").innerHTML = multiMaterial;

  //question6
  var theirMade =  items.filter(function(mad){
    return _.contains(mad, 'i_did');
  });

  var finalAnswer = theirMade.length;
  document.querySelector("#answer6").innerHTML = finalAnswer;
