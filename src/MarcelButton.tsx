import React from "react";

export function MarcelButton() {

	const [marcelValue, setMarcelValue] = React.useState("Marcel not set");

	const requestMarcelValue = async () => {
		console.log(`Current Marcel value: "${marcelValue}"`);
		let newValue = "<no response";
		try {
			setMarcelValue("Calling server...");
			const respone = await fetch('https://marcel-knowhow-backend3.mangowater-dae365c4.westus2.azurecontainerapps.io');
			const json = await respone.json();
			const value = json["Hello"];
			newValue = `Server response: "${value}"`;
		}
		catch (error) {
			const errMessage = `Error calling server: ${error}`;
			console.error(errMessage);
			console.trace();
			newValue = errMessage;
		}
		setMarcelValue(newValue);
	}

	return (
		<button 
			onClick={() => requestMarcelValue()}
			className="btn">{marcelValue}
		</button>
	);
}