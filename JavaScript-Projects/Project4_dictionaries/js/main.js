function my_Dictionary() {
    var animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Husky",
        Age:5,
        Sound:"Bark!"

    };
    delete animal.Sound;
    document.getElementById("Dictionary").innerHTML = animal.Sound;
}