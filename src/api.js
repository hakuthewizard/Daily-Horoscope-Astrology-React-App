
	 export const getReading = (props) => {
		let data = fetch(`https://aztro.sameerkumar.website/?sign=${props.sign}&day=${props.day}`, {
			"method": "POST",
		  }).then(res => res.json())
		
		  return data;

		}