var wethOutput={
  "contracts":
  {
    "WETH9.sol:WETH9":
    {
      "abi": "[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"src\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"guy\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"dst\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"src\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"dst\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"src\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"Withdrawal\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"guy\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"deposit\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"dst\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"src\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"dst\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"wad\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}]",
      "bin": "60c0604052600d60808190526c2bb930b83832b21022ba3432b960991b60a090815261002e916000919061007a565b50604080518082019091526004808252630ae8aa8960e31b602090920191825261005a9160019161007a565b506002805460ff1916601217905534801561007457600080fd5b50610115565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100bb57805160ff19168380011785556100e8565b828001600101855582156100e8579182015b828111156100e85782518255916020019190600101906100cd565b506100f49291506100f8565b5090565b61011291905b808211156100f457600081556001016100fe565b90565b6106fa806101246000396000f3fe6080604052600436106100a05760003560e01c8063313ce56711610064578063313ce5671461021f57806370a082311461024a57806395d89b411461027d578063a9059cbb14610292578063d0e30db0146102cb578063dd62ed3e146102d3576100af565b806306fdde03146100b4578063095ea7b31461013e57806318160ddd1461018b57806323b872dd146101b25780632e1a7d4d146101f5576100af565b366100af576100ad61030e565b005b600080fd5b3480156100c057600080fd5b506100c961035d565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101035781810151838201526020016100eb565b50505050905090810190601f1680156101305780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561014a57600080fd5b506101776004803603604081101561016157600080fd5b506001600160a01b0381351690602001356103eb565b604080519115158252519081900360200190f35b34801561019757600080fd5b506101a0610451565b60408051918252519081900360200190f35b3480156101be57600080fd5b50610177600480360360608110156101d557600080fd5b506001600160a01b03813581169160208101359091169060400135610455565b34801561020157600080fd5b506100ad6004803603602081101561021857600080fd5b5035610589565b34801561022b57600080fd5b5061023461061e565b6040805160ff9092168252519081900360200190f35b34801561025657600080fd5b506101a06004803603602081101561026d57600080fd5b50356001600160a01b0316610627565b34801561028957600080fd5b506100c9610639565b34801561029e57600080fd5b50610177600480360360408110156102b557600080fd5b506001600160a01b038135169060200135610693565b6100ad61030e565b3480156102df57600080fd5b506101a0600480360360408110156102f657600080fd5b506001600160a01b03813581169160200135166106a7565b33600081815260036020908152604091829020805434908101909155825190815291517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9281900390910190a2565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103e35780601f106103b8576101008083540402835291602001916103e3565b820191906000526020600020905b8154815290600101906020018083116103c657829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b4790565b6001600160a01b03831660009081526003602052604081205482111561047a57600080fd5b6001600160a01b03841633148015906104b857506001600160a01b038416600090815260046020908152604080832033845290915290205460001914155b15610518576001600160a01b03841660009081526004602090815260408083203384529091529020548211156104ed57600080fd5b6001600160a01b03841660009081526004602090815260408083203384529091529020805483900390555b6001600160a01b03808516600081815260036020908152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b336000908152600360205260409020548111156105a557600080fd5b33600081815260036020526040808220805485900390555183156108fc0291849190818181858888f193505050501580156105e4573d6000803e3d6000fd5b5060408051828152905133917f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65919081900360200190a250565b60025460ff1681565b60036020526000908152604090205481565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103e35780601f106103b8576101008083540402835291602001916103e3565b60006106a0338484610455565b9392505050565b60046020908152600092835260408084209091529082529020548156fea264697066735822122065a4da27f3434e9f69e4470d8a9ed29d1c35f6ed32f53ad275c843c31473f02a64736f6c63430006000033"
    }
  },
  "version": "0.6.0+commit.26b70077.Darwin.appleclang"
};
