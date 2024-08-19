var dexList = getColumn("Pokedex", "#");
var nameList = getColumn("Pokedex", "Name");
var imageList = getColumn("Pokedex", "Image");
onEvent("dropdown1", "change", function( ) {
  for (var i = 0; i < dexList.length; i++) {
    if (getText("dropdown1") == nameList[i]) {
      setProperty("image1", "image", imageList[i]);
    }
  }
});

