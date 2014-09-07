var states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
var capitals = ["Montgomery","Juneau","Phoenix","Little Rock","Sacramento","Denver","Hartford","Dover","Tallahassee","Atlanta","Honolulu","Boise","Springfield","Indianapolis","Des Moines","Topeka","Frankfort","Baton Rouge","Augusta","Annapolis","Boston","Lansing","Saint Paul","Jackson","Jefferson City","Helena","Lincoln","Carson City","Concord","Trenton","Santa Fe","Albany","Raleigh","Bismarck","Columbus","Oklahoma City","Salem","Harrisburg","Providence","Columbia","Pierre","Nashville","Austin","Salt Lake City","Montpelier","Richmond","Olympia","Charleston","Madison","Cheyenne"]
var mottos = ["Audemus jura nostra defendere (Latin, \"We dare to defend our rights\")", "North to the future", "Ditat Deus (Latin, \"God enriches\")", "Regnat populus (Latin, \"The people rule\")", "Eureka (Greek, \"I have found it\")", "Nil sine numine (Latin, \"Nothing without Providence\" or \"Nothing without the Deity\")", "Qui transtulit sustinet (Latin, \"He who transplanted sustains\")", "Liberty and independence ", "In God we trust ", "Wisdom, justice, and moderation ", "Ua Mau ke Ea o ka Aina i ka Pono (Hawaiian, \"The life of the land is perpetuated in righteousness\")", "Esto perpetua (Latin, \"Let it be perpetual\")", "State sovereignty, national union ", "The crossroads of America ", "Our liberties we prize and our rights we will maintain ", "Ad astra per aspera (Latin, \"To the stars through adversity\")", "This state has two mottos - English: United we stand, divided we fall Latin: Deo gratiam habeamus (\"Let us give thanks to God\")", "Union, justice, and confidence", "Dirigo (Latin, \"I direct\")", "Fatti maschi, parole femmine (Italian, \"Manly deeds, womanly words\")", "Ense petit placidam sub libertate quietem (Latin, \"By the sword we seek peace, but peace only under liberty\")", "Si quaeris peninsulam amoenam circumspice / Tuebor (Latin, \"If you seek a pleasant peninsula, look about you\") / (Latin, \"I will be defended\")", "L\'étoile du Nord (Official state motto) / Quae sursum volo videre (Territorial motto never repealed) (French, \"The star of the North\") / (Latin, \"I long to see what is beyond\")", "Virtute et armis (Latin, \"By valor and arms\")", "Salus populi suprema lex esto (Latin, \"The Welfare of the People is the Highest Law\")", "Oro y plata (Spanish, \"Gold and silver\")", "Equality before the law", "All for our country", "Live free or die", "Liberty and prosperity", "Crescit eundo (Latin, \"It grows as it goes\")", "Excelsior! (Latin, \"Ever Upward!\")", "Esse quam videri (Latin, \"To be rather than to seem\")", "Liberty and union, now and forever, one and inseparable / Strength from the soil Daniel Webster quote used on the Great Seal / motto used on the Coat of Arms", "With God, all things are possible", "Labor omnia vincit (Latin, \"Hard work conquers all things\")", "The Union, and Alis volat propriis (Latin, \"She flies with her own wings\")", "Virtue, liberty, and independence", "Hope", "Dum spiro spero (Latin, \"While I breathe, I hope\")", "Under God the people rule", "Agriculture and commerce", "Friendship", "Industry", "Freedom and Unity", "Sic semper tyrannis (Latin, \"Thus always to tyrants\")", "Al-ki (Chinook Jargon, \"By and by\")", "Virginia Montani semper liberi (Latin, \"Mountaineers are always free\")", "Forward", "Equal rights"]
var random = Math.floor(Math.random() * states.length);
var state = states[random];
var capital = capitals[random];
var firstLetter = state.charAt(0);
var firstLetterCapital = capital.charAt(0);
var pacific = ["California", "Oregon", "Washington", "Nevada"];
var mountain = ["Montana", "Idaho", "Wyoming", "Utah", "Colorado", "Arizona", "New Mexico"];
var central = ["North Dakota", "South Dakota", "Nebraska", "Kansas", "Oklahoma", "Texas", "Minnesota", "Iowa", "Missouri", "Arkansas", "Louisiana", "Wisconsin", "Illinois", "Tennessee", "Missouri", "Alabama"]
switch(true) {
	case (pacific.indexOf(state) > -1):
		var timeZone = "Pacific";
		break;
	case (mountain.indexOf(state) > -1):
		var timeZone = "Mountain";
		break;
	case (central.indexOf(state) > -1):
		var timeZone = "Central";
		break;
	default:
		var timeZone = "Eastern";
}
var mottoHint = "This state's motto is \"" + mottos[random] + "\"";
var firstLetterCapitalHint = "The first letter of this state's capital is " + firstLetterCapital;
var timeZoneHint = "Most of this state is in the " + timeZone + " Time Zone";
var firstLetterHint = "The first letter of this state is " + firstLetter;
var capitalHint = "The capital of this state is " + capital;
var hints = [mottoHint, firstLetterCapitalHint, timeZoneHint, firstLetterHint, capitalHint];

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
  	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

var response = prompt("I'm thinking of a state in the USA. Can you guess what it is?");

for(i = 0; i < 6; i++) {
	switch(true) {
		case (states.indexOf(toTitleCase(response)) === -1):
			i--;
			response = prompt("Invalid response. Please try again. You have " + (5-i) + " tries remaining. I'm thinking of a state in the USA. Can you guess what it is?");
			break;
		case (response.toUpperCase() === state.toUpperCase()):
			alert("Correct!");
			break;
		case (i < 5):
			response = prompt("Incorrect. You have " + (5 - i) + " tries remaining. I'm thinking of a state in the USA. Can you guess what it is? " + hints[i]);
			break;
		case (i === 5):
			alert("The correct answer is " + state);
			break;
		default:
			break;
	}
}