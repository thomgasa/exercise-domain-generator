var articles = ["the", "a", "an"];
var names = ["Sarah", "lady", "cat", "New York", "Canada", "room", "school", "football", "reading"];
var adjectives = ["Big", "pretty", "expensive", "green", "round", "French", "loud", "quick", "fat"];
var domains = [".com", ".net", ".co", ".gov", ".ve", ".es", ".online"];

for(let i=0; i<articles.length; i++){
    for(let n=0; n<names.length; n++){
        for(let a=0; a<adjectives.length; a++){
            for(let d=0; d<domains.length; d++){
                console.log(articles[i]+names[n]+adjectives[a]+domains[d]);
            }
        }
    }
}