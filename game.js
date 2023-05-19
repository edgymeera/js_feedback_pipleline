
var player = {
    userName: "",
    health: 100,
    inventory: [],
    currentLocation: "start"
};

var rooms = {

    start: {
        description: "You are in a dark room... you have a hallway to the north and a door to the east",
        exits: {
            north: "hallway"
        }
    },

    hallway: {
        description: "You are in a a scary hallway... there are zombies behind you, and a door to the east",
        exits: {
            back: "start",
            behind: "zombies",
            east: "door locked"
        },
        items: ["key"]
    },

    "door locked": {
        description: "You are in front of a locked room, but there is a keyhole",
        exits: {
            //east: "treasure room"
        }
    },

    "treasure room": {
        description: "You are in the treasure room, look for it",
        items: ["treasure"]
    }
};

function getCurrentRoomObject(){

    var currentLocation = player.currentLocation;
    return rooms[currentLocation];

}

function use(item){

    if (!player.inventory.includes(item)){
        return console.log("This item is not in your inventory")
    }

    if (player.currentLocation == "locked room" && item == "key")
    {

        var itemIndex = inventory.indexOf(item);
        player.inventory.splice(itemIndex, 1);

        currentLocation.exits["east"] = "treasure room"
        
    }

}

function take(item){

    var roomObject = getCurrentRoomObject();
    var roomItems = roomObject.items;

    if(!roomItems.includes(item)){
        return console.log("This item is not located in your location")
    }

    var itemIndex = roomItems.indexOf(item);
    player.inventory.push(item);
    roomItems.splice(itemIndex, 1);

    return console.log("We got the item!")

}

function go(direction){
    var roomObject = getCurrentRoomObject();
    var roomExits = roomObject.exits;

    if(!roomExits[direction]){
        return console.log("Sorry, you cannot go this way...");
    }

    player.currentLocation = roomExits[direction];
}

function parseCommand(command){

    if(typeof command !== "string"){
        throw new TypeError("Command should be a string")
    }

    var commandBreakdown =  command.split(" ");
    var action = commandBreakdown.shift();
    var objective = commandBreakdown.join(" ");
  
    switch (action){
        case "go":
            go(objective);
            break;
        case "take":
            take(objective);
            break;
        default:
            console.log("This action is not supported");
            break;
    }

}

while(player.health > 0){

    var currentRoom = rooms[player.currentLocation];
    console.log(currentRoom.description);
    console.log("Available exits:", currentRoom.exits);
    console.log("Health:", player.health);
    console.log("Inventory:", player.inventory);

    var userCommand = prompt("What do you want to do?");
    parseCommand(userCommand);

    if (player.inventory.includes("treasure")){
        console.log("You win!");
        break;
    }

}