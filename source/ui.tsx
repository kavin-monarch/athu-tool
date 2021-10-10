import React, { FC, useState } from "react";
import { Text } from "ink";
import { ModifiedHolder, rawKeysList } from "./others/data";
import { withOutSpacesUpper } from "./others/helper";
import Row from "./Row";
import os from "os";

let data: Array<accountData> = [];

const App: FC<{ name?: string }> = ({ name = "Stnger" }) => {
	const userData = new ModifiedHolder();
	const userName = os.userInfo().username;
	// key sync helper
	rawKeysList.forEach((key: Key) => {
		userData.pushModifiedKeys(withOutSpacesUpper(key));
	});
	userData.getModifiedKeys().forEach((account) => {
		data.push(account);
	});
	const [accountData, setaccountData] = useState(data);
	return (
		<>
			<Text>
				Hello, <Text color="green">{userName}</Text>
			</Text>
			{accountData.map((data, index) => {
				return <Row 
				key={index} 
				account={data}
				obj={userData} 
				/>;
			})}
		</>
	);
};

module.exports = App;
export default App;
