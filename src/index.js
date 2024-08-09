import { signAccessJwt } from "@livepeer/core/crypto";
  
const go = async () => {
    const conditions = [
        {
            contractAddress: '',
            standardContractType: '',
            chain,
            method: '',
            parameters: [
                ':userAddress',
            ],
            returnValueTest: {
                comparator: '=',
                value: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
            }
        }
    ]
        const testResult = await Lit.Actions.checkConditions({conditions, authSig, chain})
        let answer = "ACCESS GRANTED"
        if(!testResult) {
            answer = "ACCESS DENIED";
        }
        Lit.Actions.setResponse({ response: answer })
  };
  
  go();
