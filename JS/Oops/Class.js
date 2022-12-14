class anime{
    constructor(name,episode){
        this.name=name
        this.episode=episode
    }
    display(){
        console.log(`You are watching ${this.episode}th episode in ${this.name}`)
    }
}
var Animename=new anime('One Piece',234)
Animename.display()