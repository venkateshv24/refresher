//Grouping a related variable and its method in single object

const gamer = {
    name:'vegeta',
    gameType:'Historic',
    favGame: function(){
        return this.name + " fav game type is " +this.gameType
    }
}

console.log(gamer.favGame())