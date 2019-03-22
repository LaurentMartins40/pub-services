const pubs = require('../mocks/pub.json');




class Owner{
    constructor(firstName,lastName,mail){
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
    }
}
class Beers {
    constructor(type,name){
        this.type = type;
        this.name = name;
    }
}
class OpenHours{
    constructor(start,end){
        this.start = start;
        this.end = end;
    }
}
class Pubs {
    constructor(name,owner,openDays,openHours,beers){
        this.name = name;
        this.owner = owner;
        this.openDays = openDays;
        this.openHours = openHours;
        this.beers = beers;
    }
}

function findAll(){
    return pubs.map(p=> new Pubs(p.name, 
        new Owner(p.owner.firstName,p.owner.lastName,p.owner.mail),
        p.openDays, 
        new OpenHours(p.openHours.start,p.openHours.end),p.beers.map(b=> new Beers(b.type,b.name))
        ))
    }

    module.exports= {
        findAll:findAll,
    } 