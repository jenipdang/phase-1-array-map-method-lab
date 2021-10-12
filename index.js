const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

// function titleCased() {
//   return tutorials.map(function (tutorial) {
//     let tutorialWords = tutorial.split(' ');
// 	let capWords = tutorialWords.map(function(word){
// 	 return word.charAt(0).toUpperCase() + word.slice(1);
// 	})
//     for (let i = 0; i < tutorial.length; i++) {
//       tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
//     }
//     return capWords.join(' ');
//   });
// }

const titleCased = () => {
	return tutorials.map(tutorial => {
		let tutorialWords = tutorial.split(' ');
		let capWords = tutorialWords.map(word => word.charAt(0).toUpperCase() + word.slice(1));
		return capWords.join(' ');
	})
}