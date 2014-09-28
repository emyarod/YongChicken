var states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
var capitals = ["Montgomery","Juneau","Phoenix","Little Rock","Sacramento","Denver","Hartford","Dover","Tallahassee","Atlanta","Honolulu","Boise","Springfield","Indianapolis","Des Moines","Topeka","Frankfort","Baton Rouge","Augusta","Annapolis","Boston","Lansing","Saint Paul","Jackson","Jefferson City","Helena","Lincoln","Carson City","Concord","Trenton","Santa Fe","Albany","Raleigh","Bismarck","Columbus","Oklahoma City","Salem","Harrisburg","Providence","Columbia","Pierre","Nashville","Austin","Salt Lake City","Montpelier","Richmond","Olympia","Charleston","Madison","Cheyenne"]
var mottos = ["Audemus jura nostra defendere (Latin, \"We dare to defend our rights\")", "North to the future", "Ditat Deus (Latin, \"God enriches\")", "Regnat populus (Latin, \"The people rule\")", "Eureka (Greek, \"I have found it\")", "Nil sine numine (Latin, \"Nothing without Providence\" or \"Nothing without the Deity\")", "Qui transtulit sustinet (Latin, \"He who transplanted sustains\")", "Liberty and independence", "In God we trust", "Wisdom, justice, and moderation", "Ua Mau ke Ea o ka Aina i ka Pono (Hawaiian, \"The life of the land is perpetuated in righteousness\")", "Esto perpetua (Latin, \"Let it be perpetual\")", "State sovereignty, national union", "The crossroads of America", "Our liberties we prize and our rights we will maintain", "Ad astra per aspera (Latin, \"To the stars through adversity\")", "This state has two mottos - English: United we stand, divided we fall Latin: Deo gratiam habeamus (\"Let us give thanks to God\")", "Union, justice, and confidence", "Dirigo (Latin, \"I direct\")", "Fatti maschi, parole femmine (Italian, \"Manly deeds, womanly words\")", "Ense petit placidam sub libertate quietem (Latin, \"By the sword we seek peace, but peace only under liberty\")", "Si quaeris peninsulam amoenam circumspice / Tuebor (Latin, \"If you seek a pleasant peninsula, look about you\") / (Latin, \"I will be defended\")", "L\'étoile du Nord (Official state motto) / Quae sursum volo videre (Territorial motto never repealed) (French, \"The star of the North\") / (Latin, \"I long to see what is beyond\")", "Virtute et armis (Latin, \"By valor and arms\")", "Salus populi suprema lex esto (Latin, \"The Welfare of the People is the Highest Law\")", "Oro y plata (Spanish, \"Gold and silver\")", "Equality before the law", "All for our country", "Live free or die", "Liberty and prosperity", "Crescit eundo (Latin, \"It grows as it goes\")", "Excelsior! (Latin, \"Ever Upward!\")", "Esse quam videri (Latin, \"To be rather than to seem\")", "Liberty and union, now and forever, one and inseparable / Strength from the soil (quote on the Great Seal / motto on the Coat of Arms)", "With God, all things are possible", "Labor omnia vincit (Latin, \"Hard work conquers all things\")", "The Union, and Alis volat propriis (Latin, \"She flies with her own wings\")", "Virtue, liberty, and independence", "Hope", "Dum spiro spero (Latin, \"While I breathe, I hope\")", "Under God the people rule", "Agriculture and commerce", "Friendship", "Industry", "Freedom and Unity", "Sic semper tyrannis (Latin, \"Thus always to tyrants\")", "Al-ki (Chinook Jargon, \"By and by\")", "Virginia Montani semper liberi (Latin, \"Mountaineers are always free\")", "Forward", "Equal rights"]
var random = Math.floor(Math.random() * states.length);
var state = states[random];
var capital = capitals[random];
var firstLetter = state.charAt(0);
var firstLetterCapital = capital.charAt(0);
var pacific = ["California", "Oregon", "Washington", "Nevada"];
var mountain = ["Montana", "Idaho", "Wyoming", "Utah", "Colorado", "Arizona", "New Mexico"];
var central = ["North Dakota", "South Dakota", "Nebraska", "Kansas", "Oklahoma", "Texas", "Minnesota", "Iowa", "Missouri", "Arkansas", "Louisiana", "Wisconsin", "Illinois", "Tennessee", "Missouri", "Alabama"]
var alaska = ["Alaska"]
var hawaiiAleutian = ["Hawaii"]

// get time zone
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
	case (alaska.indexOf(state) > -1):
		var timeZone = "Alaska";
		break;	
	case (hawaiiAleutian.indexOf(state) > -1):
		var timeZone = "Hawaii-Aleutian";
		break;
	default:
		var timeZone = "Eastern";
}

// flag positions
switch(true) {
	case (state ==="Alabama"):
		$(".flags").css({"background-position":"0 0",});
		break;
	case (state ==="Alaska"):
		$(".flags").css({"background-position":"0 -100px", "width":"143px", "height":"101px",});
		break;
	case (state ==="Arizona"):
		$(".flags").css({"background-position":"0 -201px",});
		break;
	case (state ==="Arkansas"):
		$(".flags").css({"background-position":"0 -301px",});
		break;
	case (state ==="Colorado"):
		$(".flags").css({"background-position":"0 -501px",});
		break;
	case (state ==="Connecticut"):
		$(".flags").css({"background-position":"0 -601px", "width":"130px",});
		break;
	case (state ==="Delaware"):
		$(".flags").css({"background-position":"0 -701px",});
		break;
	case (state ==="Florida"):
		$(".flags").css({"background-position":"0 -801px",});
		break;
	case (state ==="Georgia"):
		$(".flags").css({"background-position":"0 -901px", "width":"160px",});
		break;
	case (state ==="Hawaii"):
		$(".flags").css({"background-position":"0 -1001px", "width":"200px",});
		break;
	case (state ==="Idaho"):
		$(".flags").css({"background-position":"0 -1101px", "width":"127px",});
		break;
	case (state ==="Illinois"):
		$(".flags").css({"background-position":"0 -1201px", "width":"169px",});
		break;
	case (state ==="Indiana"):
		$(".flags").css({"background-position":"0 -1301px",});
		break;
	case (state ==="Iowa"):
		$(".flags").css({"background-position":"0 -2401px", "width":"172px",});
		break;
	case (state ==="Kansas"):
		$(".flags").css({"background-position":"0 -1501px", "width":"167px",});
		break;
	case (state ==="Kentucky"):
		$(".flags").css({"background-position":"0 -1601px", "width":"190px",});
		break;
	case (state ==="Louisiana"):
		$(".flags").css({"background-position":"0 -1701px", "width":"157px",});
		break;
	case (state ==="Maine"):
		$(".flags").css({"background-position":"0 -1801px",});
		break;
	case (state ==="Maryland"):
		$(".flags").css({"background-position":"0 -1901px", "width":"146px",});
		break;
	case (state ==="Massachusetts"):
		$(".flags").css({"background-position":"0 -2001px", "width":"167px",});
		break;
	case (state ==="Michigan"):
		$(".flags").css({"background-position":"0 -2101px",});
		break;
	case (state ==="Minnesota"):
		$(".flags").css({"background-position":"0 -2201px", "width":"158px",});
		break;
	case (state ==="Mississippi"):
		$(".flags").css({"background-position":"0 -2301px",});
		break;
	case (state ==="Missouri"):
		$(".flags").css({"background-position":"0 -2401px", "width":"172px",});
		break;
	case (state ==="Montana"):
		$(".flags").css({"background-position":"0 -2501px",});
		break;
	case (state ==="Nebraska"):
		$(".flags").css({"background-position":"0 -2601px", "width":"167px",});
		break;
	case (state ==="Nevada"):
		$(".flags").css({"background-position":"0 -2701px",});
		break;
	case (state ==="New Hampshire"):
		$(".flags").css({"background-position":"0 -2801px",});
		break;
	case (state ==="New Jersey"):
		$(".flags").css({"background-position":"0 -2901px",});
		break;
	case (state ==="New Mexico"):
		$(".flags").css({"background-position":"0 -3001px",});
		break;
	case (state ==="New York"):
		$(".flags").css({"background-position":"0 -3101px", "width":"200px",});
		break;
	case (state ==="North Carolina"):
		$(".flags").css({"background-position":"0 -3201px",});
		break;
	case (state ==="North Dakota"):
		$(".flags").css({"background-position":"0 -3301px", "width":"128px",});
		break;
	case (state ==="Ohio"):
		$(".flags").css({"background-position":"0 -3401px", "width":"163px",});
		break;
	case (state ==="Oklahoma"):
		$(".flags").css({"background-position":"0 -3501px",});
		break;
	case (state ==="Oregon"):
		$(".flags").css({"background-position":"0 -3601px", "width":"167px",});
		break;
	case (state ==="Pennsylvania"):
		$(".flags").css({"background-position":"0 -3701px",});
		break;
	case (state ==="Rhode Island"):
		$(".flags").css({"background-position":"0 -3801px", "width":"107px",});
		break;
	case (state ==="South Carolina"):
		$(".flags").css({"background-position":"0 -3901px",});
		break;
	case (state ==="South Dakota"):
		$(".flags").css({"background-position":"0 -4001px", "width":"160px", "height":"96",});
		break;
	case (state ==="Tennessee"):
		$(".flags").css({"background-position":"0 -4197px", "width":"167px",});
		break;
	case (state ==="Texas"):
		$(".flags").css({"background-position":"0 -4297px",});
		break;
	case (state ==="Utah"):
		$(".flags").css({"background-position":"0 -4397px", "width":"167px",});
		break;
	case (state ==="Vermont"):
		$(".flags").css({"background-position":"0 -4497px", "width":"167px",});
		break;
	case (state ==="Virginia"):
		$(".flags").css({"background-position":"0 -4597px", "width":"146px",});
		break;
	case (state ==="Washington"):
		$(".flags").css({"background-position":"0 -4697px", "width":"168px",});
		break;
	case (state ==="West Virginia"):
		$(".flags").css({"background-position":"0 -4797px", "width":"190px",});
		break;
	case (state ==="Wisconsin"):
		$(".flags").css({"background-position":"0 -4897px",});
		break;
	case (state ==="Wyoming"):
		$(".flags").css({"background-position":"0 -4997px", "width":"143px",});
		break;
	default:
		break;
}

// hints
var mottoHint = "This state's motto is \"" + mottos[random] + "\"";
var firstLetterCapitalHint = "The first letter of this state's capital is " + firstLetterCapital;
var timeZoneHint = "Most of this state is in the " + timeZone + " Time Zone";
var firstLetterHint = "The first letter of this state is " + firstLetter;
var capitalHint = "The capital of this state is " + capital;
var hints = [mottoHint, firstLetterCapitalHint, timeZoneHint, firstLetterHint, capitalHint];
var userResponse;
var i = 0;
var hintSelector = ["#hintone", "#hinttwo", "#hintthree", "#hintfour", "#hintfive"];

// make case of response irrelevant
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
  	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function disable() {
	$("#response, #submit").prop('disabled', true);
}

// get response from text box
function getGuess() {
  userResponse = document.answerform.response.value;
	if(i < 6) {
		switch(true) {
			case (states.indexOf(toTitleCase(userResponse)) === -1):
				$("#incorrect-panel-title").text("Invalid response!");
				$("#incorrect-panel-body").text("please try again. you have " + (6 - i) + " tries remaining");
				$("#incorrect").css("visibility", "visible").hide().fadeIn(300);
				break;
			case (userResponse.toUpperCase() === state.toUpperCase()):
				$("#incorrect").fadeOut(800);
				$("#correct-panel-title").text("Correct!");
				$("#correct").css("visibility", "visible").hide().fadeIn(300);
				disable();
				break;
			case (i < 5):
				$("#incorrect-panel-title").text("Incorrect!");
				$("#incorrect-panel-body").text("you have " + (6 - (i + 1)) + " tries remaining. Hint: " + hints[i]);
				$("#incorrect").css("visibility", "visible").hide().fadeIn(300);
				$("#correct-panel-body").text("");
				switch(true) {
					case (hintSelector[i] === hintSelector[0]):
						$(hintSelector[i]).text(hints[i].slice(22));
						$("#rowone").css("visibility", "visible").hide().fadeIn(300);
						break;
					case (hintSelector[i] === hintSelector[1]):
						$(hintSelector[i]).text(hints[i].slice(-1));
						$("#rowtwo").css("visibility", "visible").hide().fadeIn(300);
						break;
					case (hintSelector[i] === hintSelector[2]):
						$(hintSelector[i]).text(timeZone);
						$("#rowthree").css("visibility", "visible").hide().fadeIn(300);
						break;
					case (hintSelector[i] === hintSelector[3]):
						$(hintSelector[i]).text(hints[i].slice(-1));
						$("#rowfour").css("visibility", "visible").hide().fadeIn(300);
						break;
					case (hintSelector[i] === hintSelector[4]):
						$(hintSelector[i]).text(capital);
						$("#rowfive").css("visibility", "visible").hide().fadeIn(300);
						break;
					default:
						break;
				}
				i++;
				break;
			case (i === 5):
				disable();
				$("#info-panel-title").text("You lose!");
				$("#info-panel-body").text("The correct answer is " + state);
				$("#answer").css("visibility", "visible").hide().fadeIn(300);
				$("#incorrect, #break, .form-group, #submit").fadeOut(300);
				break;
			default:
				break;
		}
	}
}

$(document).ready(function() {
  $("form").hide().fadeIn(800);
});