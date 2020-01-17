var miner="0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e";
var deployer="0xa11aae29840fbb5c86e6fd4cf809eba183aef433";
var maker1="0xa22ab8a9d641ce77e06d98b7d7065d324d3d6976";
var maker2="0xa33a6c312d9ad0e0f2e95541beed0cc081621fd0";
var taker1="0xa44a08d3f6933c69212114bb66e2df1813651844";
var taker2="0xa55a151eb00fded1634d27d1127b4be4627079ea";
priceFeedInitialValue="145205000000000000000"
deployer=0xa11aae29840fbb5c86e6fd4cf809eba183aef433
defaultGasPrice=5000000000
wethContract={"abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"guy","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],"eth":{"_requestManager":{"polls":{},"provider":{},"timeout":null},"accounts":["0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e","0xa11aae29840fbb5c86e6fd4cf809eba183aef433","0xa22ab8a9d641ce77e06d98b7d7065d324d3d6976","0xa33a6c312d9ad0e0f2e95541beed0cc081621fd0","0xa44a08d3f6933c69212114bb66e2df1813651844","0xa55a151eb00fded1634d27d1127b4be4627079ea","0xa66a85ede0cbe03694aa9d9de0bb19c99ff55bd9","0xa77a2b9d4b1c010a22a7c565dc418cef683dbcec","0xa88a05d2b88283ce84c8325760b72a64591279a2","0xa99a0ae3354c06b1459fd441a32a3f71005d7da0","0xaaaa9de1e6c564446ebca0fd102d8bd92093c756","0xabba43e7594e3b76afb157989e93c6621497fd4b","0xacca534c9f62ab495bd986e002ddf0f054caae4f","0xadda9b762a00ff12711113bfdc36958b73d7f915","0xaeea63b5479b50f79583ec49dacdcf86ddeff392","0xaffa4d3a80add8ce4018540e056dacb649589394","0xb00bfde102270687324f9205b693859df64f8923","0xb11be1d4ef8e94d01cb2695092a79d139a8dad98","0xb22be2d9eef0d7e260cf96a64feea0b95ed3e74f","0xb33b7ecf5e47be3981c74d989d3af8b665b4b649","0xb44b43d59b738b088b690ae276c1e979aba8268d","0xb55b57d113b45481e31aaf03d6f4e5ad4ef325f8","0xb66bcb4e473de80e2c8a47ced10c22c705a5e602","0xb77bbbaa7c1649547ae61de4b80b91568c28351a","0xb88b728490b417e29b0784db30535db343830dba","0xb99b3d1f72edb05a0321db58eddcf83fd73c4ade","0xbaab56da883edbe5314b8005be410022c510ccae","0xbbbb9809de0456ce0e0cd660e6e4ceabef3f521c","0xbccb68dd0ac87ef290aef49870d155f076c87868","0xbddb726ee06906e104db210e6d0506f2b062e477","0xbeeb24ff18203658d0a1d4682ee3f36ad663ec87","0xbffbd8f029ef0bd81cf754b53e8b3a5684f8b3ff"],"blockNumber":14,"coinbase":"0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e","compile":{},"gasPrice":"1","hashrate":0,"mining":true,"pendingTransactions":[],"protocolVersion":"0x40","syncing":false}}
daiContract={"abi":[{"inputs":[{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"newOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnershipImmediately","outputs":[],"stateMutability":"nonpayable","type":"function"}],"eth":{"_requestManager":{"polls":{"0xcf5110f02347361b58e9223ec708237f":{"data":{"method":"eth_getFilterChanges","params":["0xcf5110f02347361b58e9223ec708237f"]},"id":"0xcf5110f02347361b58e9223ec708237f"}},"provider":{},"timeout":{}},"accounts":["0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e","0xa11aae29840fbb5c86e6fd4cf809eba183aef433","0xa22ab8a9d641ce77e06d98b7d7065d324d3d6976","0xa33a6c312d9ad0e0f2e95541beed0cc081621fd0","0xa44a08d3f6933c69212114bb66e2df1813651844","0xa55a151eb00fded1634d27d1127b4be4627079ea","0xa66a85ede0cbe03694aa9d9de0bb19c99ff55bd9","0xa77a2b9d4b1c010a22a7c565dc418cef683dbcec","0xa88a05d2b88283ce84c8325760b72a64591279a2","0xa99a0ae3354c06b1459fd441a32a3f71005d7da0","0xaaaa9de1e6c564446ebca0fd102d8bd92093c756","0xabba43e7594e3b76afb157989e93c6621497fd4b","0xacca534c9f62ab495bd986e002ddf0f054caae4f","0xadda9b762a00ff12711113bfdc36958b73d7f915","0xaeea63b5479b50f79583ec49dacdcf86ddeff392","0xaffa4d3a80add8ce4018540e056dacb649589394","0xb00bfde102270687324f9205b693859df64f8923","0xb11be1d4ef8e94d01cb2695092a79d139a8dad98","0xb22be2d9eef0d7e260cf96a64feea0b95ed3e74f","0xb33b7ecf5e47be3981c74d989d3af8b665b4b649","0xb44b43d59b738b088b690ae276c1e979aba8268d","0xb55b57d113b45481e31aaf03d6f4e5ad4ef325f8","0xb66bcb4e473de80e2c8a47ced10c22c705a5e602","0xb77bbbaa7c1649547ae61de4b80b91568c28351a","0xb88b728490b417e29b0784db30535db343830dba","0xb99b3d1f72edb05a0321db58eddcf83fd73c4ade","0xbaab56da883edbe5314b8005be410022c510ccae","0xbbbb9809de0456ce0e0cd660e6e4ceabef3f521c","0xbccb68dd0ac87ef290aef49870d155f076c87868","0xbddb726ee06906e104db210e6d0506f2b062e477","0xbeeb24ff18203658d0a1d4682ee3f36ad663ec87","0xbffbd8f029ef0bd81cf754b53e8b3a5684f8b3ff"],"blockNumber":14,"coinbase":"0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e","compile":{},"gasPrice":"1","hashrate":0,"mining":true,"pendingTransactions":[{"blockHash":null,"blockNumber":null,"from":"0xa11aae29840fbb5c86e6fd4cf809eba183aef433","gas":4000000,"gasPrice":"5000000000","hash":"0x6beb8799e5087b2fe75567191a123a7997c7930a63165c10901c812f094321ee","input":"0x60c0604052600d60808190526c2bb930b83832b21022ba3432b960991b60a090815261002e916000919061007a565b50604080518082019091526004808252630ae8aa8960e31b602090920191825261005a9160019161007a565b506002805460ff1916601217905534801561007457600080fd5b50610115565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100bb57805160ff19168380011785556100e8565b828001600101855582156100e8579182015b828111156100e85782518255916020019190600101906100cd565b506100f49291506100f8565b5090565b61011291905b808211156100f457600081556001016100fe565b90565b6106fa806101246000396000f3fe6080604052600436106100a05760003560e01c8063313ce56711610064578063313ce5671461021f57806370a082311461024a57806395d89b411461027d578063a9059cbb14610292578063d0e30db0146102cb578063dd62ed3e146102d3576100af565b806306fdde03146100b4578063095ea7b31461013e57806318160ddd1461018b57806323b872dd146101b25780632e1a7d4d146101f5576100af565b366100af576100ad61030e565b005b600080fd5b3480156100c057600080fd5b506100c961035d565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101035781810151838201526020016100eb565b50505050905090810190601f1680156101305780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561014a57600080fd5b506101776004803603604081101561016157600080fd5b506001600160a01b0381351690602001356103eb565b604080519115158252519081900360200190f35b34801561019757600080fd5b506101a0610451565b60408051918252519081900360200190f35b3480156101be57600080fd5b50610177600480360360608110156101d557600080fd5b506001600160a01b03813581169160208101359091169060400135610455565b34801561020157600080fd5b506100ad6004803603602081101561021857600080fd5b5035610589565b34801561022b57600080fd5b5061023461061e565b6040805160ff9092168252519081900360200190f35b34801561025657600080fd5b506101a06004803603602081101561026d57600080fd5b50356001600160a01b0316610627565b34801561028957600080fd5b506100c9610639565b34801561029e57600080fd5b50610177600480360360408110156102b557600080fd5b506001600160a01b038135169060200135610693565b6100ad61030e565b3480156102df57600080fd5b506101a0600480360360408110156102f657600080fd5b506001600160a01b03813581169160200135166106a7565b33600081815260036020908152604091829020805434908101909155825190815291517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9281900390910190a2565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103e35780601f106103b8576101008083540402835291602001916103e3565b820191906000526020600020905b8154815290600101906020018083116103c657829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b4790565b6001600160a01b03831660009081526003602052604081205482111561047a57600080fd5b6001600160a01b03841633148015906104b857506001600160a01b038416600090815260046020908152604080832033845290915290205460001914155b15610518576001600160a01b03841660009081526004602090815260408083203384529091529020548211156104ed57600080fd5b6001600160a01b03841660009081526004602090815260408083203384529091529020805483900390555b6001600160a01b03808516600081815260036020908152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b336000908152600360205260409020548111156105a557600080fd5b33600081815260036020526040808220805485900390555183156108fc0291849190818181858888f193505050501580156105e4573d6000803e3d6000fd5b5060408051828152905133917f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65919081900360200190a250565b60025460ff1681565b60036020526000908152604090205481565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103e35780601f106103b8576101008083540402835291602001916103e3565b60006106a0338484610455565b9392505050565b60046020908152600092835260408084209091529082529020548156fea264697066735822122065a4da27f3434e9f69e4470d8a9ed29d1c35f6ed32f53ad275c843c31473f02a64736f6c63430006000033","nonce":0,"r":"0xd2fb0a5a1f9bd39975c5343cbdef1b71350d202d372244bb4964904b98f6f0e6","s":"0x54cc3fef3c26cba4507d036e40a8db30cc5a66fe1299a4713119b72c71fb1c8e","to":null,"transactionIndex":null,"v":"0xa96","value":"0"}],"protocolVersion":"0x40","syncing":false}}
var wethAddress="0x90d8927407c79c4a28ee879b821c76fc9bcc2688";
var wethAbi=[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"guy","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
var weth=eth.contract(wethAbi).at(wethAddress);
var daiAddress="0x0e946b999033257976aa5cbe0e3530618ca1582d";
var daiAbi=[{"inputs":[{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"newOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnershipImmediately","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var dai=eth.contract(daiAbi).at(daiAddress);
var priceFeedAddress="0xdf9f36fd5654d92e0844c78d2d2dd562404cd1ff";
var priceFeedAbi=[{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bool","name":"_hasValue","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"bool","name":"hasValue","type":"bool"}],"name":"SetValue","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"hasValue","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"newOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"peek","outputs":[{"internalType":"bytes32","name":"_value","type":"bytes32"},{"internalType":"bool","name":"_hasValue","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bool","name":"_hasValue","type":"bool"}],"name":"setValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnershipImmediately","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"value","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
var priceFeed=eth.contract(priceFeedAbi).at(priceFeedAddress);
var vanillaDoptionAddress="0xe6ada9beed6e24be4c0259383db61b52bfca85f3";
var vanillaDoptionAbi=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"baseToken","type":"address"},{"indexed":true,"internalType":"address","name":"quoteToken","type":"address"},{"indexed":true,"internalType":"address","name":"priceFeed","type":"address"},{"indexed":false,"internalType":"uint256","name":"maxTerm","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"takerFee","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"ConfigAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"baseToken","type":"address"},{"indexed":true,"internalType":"address","name":"quoteToken","type":"address"},{"indexed":true,"internalType":"address","name":"priceFeed","type":"address"}],"name":"ConfigRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"baseToken","type":"address"},{"indexed":true,"internalType":"address","name":"quoteToken","type":"address"},{"indexed":true,"internalType":"address","name":"priceFeed","type":"address"},{"indexed":false,"internalType":"uint256","name":"maxTerm","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"takerFee","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"ConfigUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"baseToken","type":"address"},{"indexed":true,"internalType":"address","name":"quoteToken","type":"address"},{"indexed":true,"internalType":"address","name":"priceFeed","type":"address"},{"indexed":false,"internalType":"uint256","name":"callPut","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"europeanAmerican","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"expiry","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"takerFee","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"SeriesAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"baseToken","type":"address"},{"indexed":true,"internalType":"address","name":"quoteToken","type":"address"},{"indexed":true,"internalType":"address","name":"priceFeed","type":"address"},{"indexed":false,"internalType":"uint256","name":"callPut","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"europeanAmerican","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"expiry","type":"uint256"}],"name":"SeriesRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"baseToken","type":"address"},{"indexed":true,"internalType":"address","name":"quoteToken","type":"address"},{"indexed":true,"internalType":"address","name":"priceFeed","type":"address"},{"indexed":false,"internalType":"uint256","name":"callPut","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"europeanAmerican","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"expiry","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"takerFee","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"SeriesUpdated","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"baseToken","type":"address"},{"internalType":"address","name":"quoteToken","type":"address"},{"internalType":"address","name":"priceFeed","type":"address"},{"internalType":"uint256","name":"maxTerm","type":"uint256"},{"internalType":"uint256","name":"takerFee","type":"uint256"},{"internalType":"string","name":"description","type":"string"}],"name":"addConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"configDataLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"baseToken","type":"address"},{"internalType":"address","name":"quoteToken","type":"address"},{"internalType":"address","name":"priceFeed","type":"address"}],"name":"getConfig","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"getConfigByIndex","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"baseToken","type":"address"},{"internalType":"address","name":"quoteToken","type":"address"},{"internalType":"address","name":"priceFeed","type":"address"},{"internalType":"uint256","name":"callPut","type":"uint256"},{"internalType":"uint256","name":"europeanAmerican","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"}],"name":"getSeries","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"getSeriesByIndex","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"getTrade","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"newOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"baseToken","type":"address"},{"internalType":"address","name":"quoteToken","type":"address"},{"internalType":"address","name":"priceFeed","type":"address"}],"name":"removeConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seriesDataLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"baseToken","type":"address"},{"internalType":"address","name":"quoteToken","type":"address"},{"internalType":"address","name":"priceFeed","type":"address"},{"internalType":"uint256","name":"callPut","type":"uint256"},{"internalType":"uint256","name":"europeanAmerican","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint256","name":"buySell","type":"uint256"},{"internalType":"uint256","name":"premium","type":"uint256"},{"internalType":"uint256","name":"baseTokens","type":"uint256"},{"internalType":"uint256","name":"settlement","type":"uint256"}],"name":"trade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tradesLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnershipImmediately","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"baseToken","type":"address"},{"internalType":"address","name":"quoteToken","type":"address"},{"internalType":"address","name":"priceFeed","type":"address"},{"internalType":"uint256","name":"maxTerm","type":"uint256"},{"internalType":"uint256","name":"takerFee","type":"uint256"},{"internalType":"string","name":"description","type":"string"}],"name":"updateConfig","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var vanillaDoption=eth.contract(vanillaDoptionAbi).at(vanillaDoptionAddress);
