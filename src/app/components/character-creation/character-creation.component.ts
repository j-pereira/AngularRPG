import { Component } from '@angular/core';
import { CharacterOptions } from '../../models/character-options';

@Component({
	selector: 'character-creation-component',
  	templateUrl: './character-creation.component.html',
  	styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent{
	character = {
		race: '--Choose--',
		class: '--Choose--',
		gender: undefined,
		name: undefined
	}

	characterComplete: boolean = false;

	races = CharacterOptions.races;
	classes = CharacterOptions.classes;
	genders = CharacterOptions.genders;


	changeRace(race: string){
		this.character.race = race;
		this.checkCompleted();
	}

	changeClass(newClass: string){
		this.character.class = newClass;
		this.checkCompleted();
	}

	changeGender(gender: string){
		this.character.gender = gender;
		this.checkCompleted();
	}

	changeName(name: string){
		//this.character.name = name; no need cause its already a input in character.name
		this.checkCompleted();
	}

	checkCompleted(){
		this.characterComplete = 
			this.character.race !== "--Choose--" &&
			this.character.class !== "--Choose--" &&
			this.character.gender &&
			this.character.name; 
	} 
	//If gender and name are undefined, they're both false, anything else, they're true.

	createCharacter(){
		if(!this.characterComplete){
			return;
		}

		console.log(this.character);
	}

}

