var movies = ["Conan", "Star wars", "Speed", "Terminator"];
var movieName ="";
function preview_Element_Array (content){
  "use strict";
movieName += "<li>" + content + "</li>";
}
function addMovies_To_Selectbox(i, p) {
  "use strict";
    $("#listOfMovies").append($("<option></option>").val(p).html(p));
    }
function addMovies_To_FavoriteBox(i, p) {
  "use strict";
    $("#listOfFavoriteFilms").append($("<option></option>").val(p).html(p));
    }

    function input_Name_Of_Movies(){
      "use strict";
$.each(movies, addMovies_To_Selectbox);
$.each(movies, addMovies_To_FavoriteBox);
    }
function defaultMovies() {
  "use strict";
    movies.forEach(preview_Element_Array);
    $("#demo").html(movieName);
    input_Name_Of_Movies();
}
function fullSort(first_Element, second_Element) {
  "use strict";
  var first=first_Element.toLowerCase();
  var second=second_Element.toLowerCase();
        if (first < second){
        return -1;
     }
     else if (first > second){
       return  1;
     }
     else{
       return 0;
     }
}
function addMovie(){
"use strict";
var insMovie="";
insMovie=$("#addNewMovie").val();
        if (insMovie===""){
            alert ("Your text is empty");
        }

        else if(movies.indexOf(insMovie)!==-1 ){
            alert("This text has already");
        }
        else
movies.push(insMovie);
movies.sort(fullSort);
movieName="";
refreshArray();
}
function refreshArray(){
    movies.forEach(preview_Element_Array);
    $("#demo").html(movieName);
    $("#favoriteDemo").html(favoriteFilmName);
    $("#addNewMovie").val("");
    $("#listOfMovies").empty();
    $("#listOfFavoriteFilms").empty();
    input_Name_Of_Movies();
}
function removeMovie(){
var remove_from_List_Of_Movie = $("#listOfMovies").prop("selectedIndex");
  movies.splice(remove_from_List_Of_Movie,1);
  movieName="";
  refreshArray();
}
var favoriteListFilm = [];
var favoriteFilmName="";

function preview_Element_Of_Favorite_Array (favoriteContent){
   favoriteFilmName += "<li>" + favoriteContent + "</li>";
}
function Movies_To_FavoriteBox_To_Remove(i, p) {
  "use strict";
    $("#listOfFavoriteFilmsToRemove").append($("<option></option>").val(p).html(p));
  }

function add_To_Favorite_Movies() {
  "use strict";
    favoriteListFilm.forEach(preview_Element_Of_Favorite_Array);
    $("#favoriteDemo").html(favoriteFilmName);
    $.each(favoriteListFilm,Movies_To_FavoriteBox_To_Remove );
  $(function() {
    $( "#favoriteDemo" ).sortable();
    $( "#favoriteDemo" ).select();
  });
}
function refresh_List_Of_Favorite_Movies (){
  favoriteFilmName="";
  $("#listOfFavoriteFilmsToRemove").empty();
  add_To_Favorite_Movies();
}

function addFavoritesFilm(){

  var insert_Element_To_Favorite_Movies="";
insert_Element_To_Favorite_Movies = $("#listOfFavoriteFilms").val();
        if(favoriteListFilm.indexOf(insert_Element_To_Favorite_Movies)!==-1 ){
            alert("This text has already");
        }
        else
  favoriteListFilm.push(insert_Element_To_Favorite_Movies);
  insert_Element_To_Favorite_Movies="";
  refresh_List_Of_Favorite_Movies ();
}
function removeFavoritesFilm(){

var remove_from_Favorite_List_Of_Movie = $("#listOfFavoriteFilmsToRemove").prop("selectedIndex");
  favoriteListFilm.splice(remove_from_Favorite_List_Of_Movie,1);
  refresh_List_Of_Favorite_Movies ();
}