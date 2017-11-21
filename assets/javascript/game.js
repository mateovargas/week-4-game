var character = class character{

	constructor(name, health_points, attack_power, counter_attack_power, image_url){

		this.name = name;
		this.health_points = health_points;
		this.attack_power = attack_power;
		this.base_attack_power = attack_power;
		this.counter_attack_power = counter_attack_power;
		this.image = image_url;
	}

	attack(){

		//figure out way to indicate attack power to other characters
		this.attack_power = this.attack_power + this.base_attack_power; 

	}

	counter_attack(){

		//figure out way to indicate counter to other characters
	}

	calculateHealth(attacker){

		//figure out way to indicate damage from enemy.

	}

	getHealth(){

		return this.health_points;

	}

	getAttack(){

		return this.attack_power;

	} 

	getCounter(){

		return this.counter_attack_power;

	}

	getImage(){

		return this.image;

	}

	getName(){

		return this.name;

	}

	setName(name){

		this.name = name;

	}

	setHealth(health){

		this.health_points = health;

	}

	setAttack(attack){

		this.attack_power = attack;

	}

	setCounter(counter){

		this.counter_attack_power = counter;

	}

	setImage(url){

		this.image = url;

	}

}


var gameManager = {

	characters: {},
	player_character: "",
	npcs: [],
	enemy: "",
	setFlag: false,
	winFlag: false,

	setUp: function(){

		var obi_wan = new character(120, 8, 5, "assets/images/obi wan.jpg");
		var luke = new character(100, 6, 10, "assets/images/luke.jpg");
		var kylo = new character(80, 10, 20, "assets/images/kylo.jpg");
		var darth = new character(150, 7, 20, "assets/images/darth.jpg");

		this.characters["obi wan kenobi"] = obi_wan;
		this.characters["luke skywalker"] = luke;
		this.characters["kylo ren"] = kylo;
		this.characters["darth vader"] = darth;

		this.setFlag = true;
		console.log(this.characters);

	},

	playerSelector: function(character){

		this.player_character = character;

		for(i = 0; i < this.characters.length; i++){

			if(this.player_character == npc){
				continue;
			}

			npcs.push(npc);

		}

	},

	enemySelector: function(enemy){

		this.enemy = enemy;

	},

	game: function(){

		this.player_character.attack();
		this.enemy.counter_attack();

	},

	win: function(){
		//do something

	},

	lose: function(){

		//do something

	},

}

$(document).ready(function() {

	gameManager.setUp();

	$(".obi-wan").on("click", function() {
		
		if(gameManager.playercharacter == ""){

        	gameManager.playerSelector("obi wan kenobi");

        }
        else{

        	gameManager.enemySelector("obi wan kenobi");

        }

    });

    $(".luke-skywalker").on("click", function(){

    	if(gameManager.playercharacter == ""){

        	gameManager.playerSelector("luke skywalker");

        }
        else{

        	gameManager.enemySelector("luke skywalker");
        	
        }

    });

    $(".kylo-ren").on("click", function(){

    	if(gameManager.playercharacter == ""){

        	gameManager.playerSelector("kylo ren");

        }
        else{

        	gameManager.enemySelector("kylo ren");
        }

    });

    $(".darth-vader").on("click", function(){

    	if(gameManager.playercharacter == ""){

        	gameManager.playerSelector("darth vader");

        }
        else{

        	gameManager.enemySelector("darth vader");

        }

    });

    $(".attack-button").on("click", function(){

    	gameManager.game();

    });


});