import { Box, Newline, Spacer, Text } from "ink";
import React, { useEffect, useState } from "react";
import { ModifiedHolder } from "./others/data";
import { genetateFinal } from "./others/generator";

type TableData = {
	account: accountData;
    obj:ModifiedHolder;
};

// @ts-ignore
const Row = (props: TableData) => {
    const setData = () =>{
        const token: string= props.obj.getModifiedKey("test@ultron.io").token;
        const finalOtp:number=genetateFinal(token);
        return finalOtp;
    }
	const [account, setaccount] = useState(props.account);
	const [counter, setCounter] = useState(0);
    const [otp, setotp] = useState(setData());

	useEffect(() => {
		const timer = setInterval(() => {
            const unixTime=Math.floor(Date.now() / 1000);
			setCounter(30-(unixTime % 30));
            if(counter===0){
                setotp(setData());
            }
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<Box
			borderStyle="round"
			borderColor="green"
			margin={1}
			width={60}
			padding={1}
		>
			<Text>
				Account: {account.user} <Newline />
				Associate UserName: {account.associateAccount} <Newline />
				Token OTP: {otp} <Newline />
				Life:Span : {counter}
			</Text>
		</Box>
	);
};

export default Row;
