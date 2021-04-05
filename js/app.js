	let realData = "";
	const quotes = document.getElementById("quotes");
	const autor = document.getElementById("author");
	const myButton = document.getElementById("myButton");
	
	const getNewQuote = () => {
		let num = Math.floor(Math.random() * realData.length);
		console.log(realData[16]);
		quotes.innerHTML = `${realData[num].text}`;
		if(realData[num].author == null){
			author.innerHTML = `&mdash;&mdash;Naveen`;
		}else{
			author.innerHTML = `&mdash;&mdash;${realData[num].author}`;
		}
		
	}

	const getQuotes = async() => {
		const api = "https://type.fit/api/quotes";
		try{
			let data = await fetch(api);
			realData = await data.json();
			//console.log(realData[0]);
			getNewQuote();
		}catch(e){
			console.log(e);
		}
	}
	
	myButton.addEventListener('click', function(){
		getNewQuote();
	})
	
	getQuotes();