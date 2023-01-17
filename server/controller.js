module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }
}

module.exports = {
    getFortune: (req, res) => {
        const fortunes = ["Each day, compel yourself to do something you would rather not do.", "A fresh start will put you on your way.", "A new perspective will come with the new year.", "Believe it can be done.", "Determination is what you need now."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    }
}
