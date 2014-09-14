function County(countyName, ISOcode, provinces, administrativeCentre, majorCity) {
	this.countyName = countyName;
	this.ISOcode = ISOcode;
	this.provinces = provinces;
	this.administrativeCentre = administrativeCentre;
	this.majorCity = majorCity;
}

var Stockholm = new County("Stockholm", "AB", "This county consists of no provinces.", "Stockholm", "Södertälje");
var Västerbotten = new County("Västerbotten", "AC", "This county covers the province of Västerbotten and parts of the provinces Lapland and Ångermanland.", "Umeå", "Skelleftå");
var Norrbotten = new County("Norrbotten", "BD", "This county exists on the provinces of Norrbotten and about two thirds of Swedish Lapland.", "Luleå", "Kiruna");
var Uppsala = new County("Uppsala", "C", "This county encompasses Uppsala County.", "Peter", "Enköping");
var Södermanland = new County("Södermanland", "D", "This county most of the province Södermanland.", "Nyköping", "Eskilstuna");
var Östergötland = new County("Östergötland", "E", "has virtually the same boundaries as the current administrative entity, the Östergötland County.", "Linköping", "Norrköping");
var Jönköping = new County("Jönköping", "F", "This county consists of the northern part of Småland.", "Jönköping", "Vetlanda");
var Kronoberg = new County("Kronoberg", "G", "This county consists of the southern part of the province of Småland.", "Växjö", "Tingsryd");
var Kalmar = new County("Kalmar", "H", "This county covers the eastern part in the Småland province, and the entire island of Öland.", "Kalmar", "Öland");
var Gotland = new County("Gotland", "I", "This county consists of the province of Gotland.", "Visby", "Stenkumla");
var Blekinge = new County("Blekinge", "K", "This county consists of the province of Blekinge.", "Karlskrona", "Karlshamn");
var Skåne = new County("Skåne", "M", "This county consists of the province of Scania, but it also includes an insignificant part of the province of Halland.", "Malmö", "Helsingborg");
var Halland = new County("Halland", "N", "This county consists much of the province of Halland.", "Halmstad", "Varberg");
var VästraGötaland = new County("Västra Götaland", "O", "This county consists of the provinces of Västergötland, Bohuslän and Dalsland, in addition to an insignificant part of the province Halland.", "Götaland", "Trollhättan");
var Värmland = new County("Värmland", "S", "This county consists of much of the province of Värmland.", "Karlstad", "Torsby");
var Örebro = new County("Örebro", "T", "This county consists of the provinces of Närke, the western half of Västmanland and minor parts of eastern Värmland and northeastern Västergötland.", "Örebro", "Karlskoga");
var Västmanland = new County("Västmanland", "U", "This county consists of the province of Västmanland.", "Västerås", "Arboga");
var Dalarna = new County("Dalarna", "W", "This county consists of the province of Dalarna.", "Maria", "Borlänge");
var Gävleborg = new County("Gävleborg", "X", "This county consists of the provinces of Gästrikland and Hälsingland.", "Gävle", "Sandviken");
var Västernorrland = new County("Västernorrland", "Y", "This county consists of the provinces of Ångermanland and Medelpad.", "Härnösand", "Örnsköldsvik");
var Jämtland = new County("Jämtland", "Z", "This county consists of the provinces of Jämtland and Härjedalen, though minor parts of Hälsingland and Ångermanland are also included, along with small uninhabited areas in Lapland and Dalarna.", "Östersund", "Brunflo");

var counties = [Stockholm, Västerbotten, Norrbotten, Uppsala, Södermanland, Östergötland, Jönköping, Kronoberg, Kalmar, Gotland, Blekinge, Skåne, Halland, VästraGötaland, Värmland, Örebro, Västmanland, Dalarna, Gävleborg, Västernorrland, Jämtland]

var countyNames = ["Stockholm", "Västerbotten", "Norrbotten", "Uppsala", "Södermanland", "Östergötland", "Jönköping", "Kronoberg", "Kalmar", "Gotland", "Blekinge", "Skåne", "Halland", "Västra Götaland", "Värmland", "Örebro", "Västmanland", "Dalarna", "Gävleborg", "Västernorrland", "Jämtland"]

var random = Math.floor(Math.random() * counties.length);
var county = counties[random].countyName;
var ISOcode = counties[random].ISOcode;
var administrativeCentre = counties[random].administrativeCentre;
var firstLetter = county.charAt(0);
var firstLetteradministrativeCentre = administrativeCentre.charAt(0);
var majorCity = counties[random].majorCity;

// hints
var ISOcodeHint = "This county's ISO-code is \"" + ISOcode + "\"";
var firstLetteradministrativeCentreHint = "The first letter of this county's administrative centre is " + firstLetteradministrativeCentre;
var firstLetterHint = "The first letter of this county is " + firstLetter;
var administrativeCentreHint = "The administrative centre of this county is " + administrativeCentre;
var majorCityHint = "Another major city in this county is " + majorCity;
var hints = [ISOcodeHint, firstLetteradministrativeCentreHint, firstLetterHint, majorCityHint, administrativeCentreHint];
var countyAlts = ["Vasterbotten", "Sodermanland", "Ostergotland", "Jonkoping", "Skane", "Västra Gotaland", "Varmland", "Orebro", "Vastmanland", "Gavleborg", "Vasternorrland", "Jamtland"]

// account for non-SE keyboard
switch(true) {
	case (county === "Västerbotten"):
		var countyAlt = "Vasterbotten";
		break;
	case (county === "Södermanland"):
		var countyAlt = "Sodermanland";
		break;
	case (county === "Östergötland"):
		var countyAlt = "Ostergotland";
		break;
	case (county === "Jönköping"):
		var countyAlt = "Jonkoping";
		break;
	case (county === "Skåne"):
		var countyAlt = "Skane";
		break;
	case (county === "Västra Götaland"):
		var countyAlt = "Västra Gotaland";
		break;
	case (county === "Värmland"):
		var countyAlt = "Varmland";
		break;
	case (county === "Örebro"):
		var countyAlt = "Orebro";
		break;
	case (county === "Västmanland"):
		var countyAlt = "Vastmanland";
		break;
	case (county === "Gävleborg"):
		var countyAlt = "Gavleborg";
		break;
	case (county === "Västernorrland"):
		var countyAlt = "Vasternorrland";
		break;
	case (county === "Jämtland"):
		var countyAlt = "Jamtland";
		break;
	default:
		var countyAlt = "";
		break;
}

var userResponse;
var i = 0;

// make case of response irrelevant
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
  	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function disable() {
	document.getElementById("response").disabled = true;
	document.getElementById("submit").disabled = true;
}

// get response from text box
function getGuess() {
  userResponse = document.answerform.response.value;
  console.log(county);
  console.log(countyAlt);
  console.log(userResponse);
  console.log(toTitleCase(userResponse));
  console.log(countyAlts.indexOf(toTitleCase(userResponse)));
	if(i < 6) {
		switch(true) {
			case (countyNames.indexOf(toTitleCase(userResponse)) === -1 && countyAlts.indexOf(toTitleCase(userResponse)) === -1):
				document.getElementById("incorrect").textContent = "invalid response. please try again. you have " + (6 - i) + " tries remaining";
				document.getElementById("correct").textContent = "";
				document.getElementById("answer").textContent = "";
				break;
			case (toTitleCase(userResponse) === toTitleCase(county) || toTitleCase(userResponse)== toTitleCase(countyAlt)):
				document.getElementById("incorrect").textContent = "";
				document.getElementById("correct").textContent = "correct!";
				document.getElementById("answer").textContent = "";
				disable();
				break;
			case (i < 5):
				document.getElementById("incorrect").textContent = "incorrect. you have " + (6 - (i + 1)) + " tries remaining. Hint: " + hints[i];
				document.getElementById("correct").textContent = "";
				document.getElementById("answer").textContent = "";
				i++;
				break;
			case (i === 5):
				document.getElementById("incorrect").textContent = "";
				document.getElementById("correct").textContent = "";
				disable();
				document.getElementById("answer").textContent = "The correct answer is " + county;
				break;
			default:
				break;
		}
	}
}