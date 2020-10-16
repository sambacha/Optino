<<<<<<< HEAD
var miner = "0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e";
var deployer = "0xa11aae29840fbb5c86e6fd4cf809eba183aef433";
var seller1 = "0xa22ab8a9d641ce77e06d98b7d7065d324d3d6976";
var seller2 = "0xa33a6c312d9ad0e0f2e95541beed0cc081621fd0";
var buyer1 = "0xa44a08d3f6933c69212114bb66e2df1813651844";
var buyer2 = "0xa55a151eb00fded1634d27d1127b4be4627079ea";
var uiFeeAccount = "0xa66a85ede0cbe03694aa9d9de0bb19c99ff55bd9";
deployer = 0xa11aae29840fbb5c86e6fd4cf809eba183aef433;
defaultGasPrice = 8100000000;
var token0Address = "0x90d8927407c79c4a28ee879b821c76fc9bcc2688";
var tokenAbi = [
  {
    inputs: [
      { internalType: "string", name: "symbol", type: "string" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "uint8", name: "decimals", type: "uint8" },
      { internalType: "address", name: "tokenOwner", type: "address" },
      { internalType: "uint256", name: "initialSupply", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      { indexed: true, internalType: "address", name: "_to", type: "address" },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenOwner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "remaining", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "approveAndCall",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "tokenOwner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "balance", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenOwner", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "burn",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenOwner", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "mint",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "newOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenAddress", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "transferAnyERC20Token",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newOwner", type: "address" }],
    name: "transferOwnershipImmediately",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
var token0 = eth.contract(tokenAbi).at(token0Address);
var token1Address = "0x0e946b999033257976aa5cbe0e3530618ca1582d";
var tokenAbi = [
  {
    inputs: [
      { internalType: "string", name: "symbol", type: "string" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "uint8", name: "decimals", type: "uint8" },
      { internalType: "address", name: "tokenOwner", type: "address" },
      { internalType: "uint256", name: "initialSupply", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      { indexed: true, internalType: "address", name: "_to", type: "address" },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenOwner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "remaining", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "approveAndCall",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "tokenOwner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "balance", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenOwner", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "burn",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenOwner", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "mint",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "newOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenAddress", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "transferAnyERC20Token",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newOwner", type: "address" }],
    name: "transferOwnershipImmediately",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
var token1 = eth.contract(tokenAbi).at(token1Address);
var optinoTokenAddress = "0xdf9f36fd5654d92e0844c78d2d2dd562404cd1ff";
var optinoTokenAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract OptinoToken",
        name: "optinoToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract OptinoToken",
        name: "coverToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralRefunded",
        type: "uint256",
      },
    ],
    name: "Close",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "bytes", name: "note", type: "bytes" },
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    name: "LogInfo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      { indexed: true, internalType: "address", name: "_to", type: "address" },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract OptinoToken",
        name: "optinoOrCoverToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralPaid",
        type: "uint256",
      },
    ],
    name: "Payoff",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenOwner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "remaining", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "tokenOwner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "balance", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenOwner", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "burn",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokens", type: "uint256" }],
    name: "close",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenOwner", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "closeFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "collateralToken",
    outputs: [{ internalType: "contract ERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentSpot",
    outputs: [
      { internalType: "uint256", name: "_currentSpot", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokens", type: "uint256" }],
    name: "currentSpotAndPayoff",
    outputs: [
      { internalType: "uint256", name: "_spot", type: "uint256" },
      { internalType: "uint256", name: "currentPayoff", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      { internalType: "contract OptinoFactory", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFeedInfo",
    outputs: [
      { internalType: "address", name: "feed0", type: "address" },
      { internalType: "address", name: "feed1", type: "address" },
      { internalType: "uint8", name: "feedType0", type: "uint8" },
      { internalType: "uint8", name: "feedType1", type: "uint8" },
      { internalType: "uint8", name: "decimals0", type: "uint8" },
      { internalType: "uint8", name: "decimals1", type: "uint8" },
      { internalType: "uint8", name: "inverse0", type: "uint8" },
      { internalType: "uint8", name: "inverse1", type: "uint8" },
      { internalType: "uint8", name: "usedFeedDecimals0", type: "uint8" },
      { internalType: "uint8", name: "usedFeedType0", type: "uint8" },
      { internalType: "uint256", name: "currentSpot", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getInfo",
    outputs: [
      { internalType: "contract ERC20", name: "token0", type: "address" },
      { internalType: "contract ERC20", name: "token1", type: "address" },
      {
        internalType: "contract ERC20",
        name: "_collateralToken",
        type: "address",
      },
      { internalType: "uint8", name: "collateralDecimals", type: "uint8" },
      { internalType: "uint256", name: "callPut", type: "uint256" },
      { internalType: "uint256", name: "expiry", type: "uint256" },
      { internalType: "uint256", name: "strike", type: "uint256" },
      { internalType: "uint256", name: "bound", type: "uint256" },
      { internalType: "bool", name: "_isCover", type: "bool" },
      {
        internalType: "contract OptinoToken",
        name: "_optinoPair",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPricingInfo",
    outputs: [
      { internalType: "uint256", name: "currentSpot", type: "uint256" },
      { internalType: "uint256", name: "currentPayoff", type: "uint256" },
      { internalType: "uint256", name: "spot", type: "uint256" },
      { internalType: "uint256", name: "payoff", type: "uint256" },
      { internalType: "uint256", name: "collateral", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSeriesData",
    outputs: [
      { internalType: "bytes32", name: "_seriesKey", type: "bytes32" },
      { internalType: "uint256", name: "_seriesIndex", type: "uint256" },
      { internalType: "contract ERC20[2]", name: "pair", type: "address[2]" },
      { internalType: "address[2]", name: "feeds", type: "address[2]" },
      { internalType: "uint8[6]", name: "feedParameters", type: "uint8[6]" },
      { internalType: "uint256[5]", name: "data", type: "uint256[5]" },
      {
        internalType: "contract OptinoToken[2]",
        name: "optinos",
        type: "address[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract OptinoFactory",
        name: "_factory",
        type: "address",
      },
      { internalType: "bytes32", name: "_seriesKey", type: "bytes32" },
      {
        internalType: "contract OptinoToken",
        name: "_optinoPair",
        type: "address",
      },
      { internalType: "bool", name: "_isCover", type: "bool" },
      { internalType: "uint256", name: "_decimals", type: "uint256" },
    ],
    name: "initOptinoToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isCover",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenOwner", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "mint",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "newOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "optinoPair",
    outputs: [
      { internalType: "contract OptinoToken", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "tokens", type: "uint256" },
      { internalType: "uint256", name: "_spot", type: "uint256" },
    ],
    name: "payoffForSpot",
    outputs: [{ internalType: "uint256", name: "payoff", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "tokens", type: "uint256" },
      { internalType: "uint256[]", name: "spots", type: "uint256[]" },
    ],
    name: "payoffForSpots",
    outputs: [
      { internalType: "uint256[]", name: "payoffs", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract ERC20", name: "token", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "recoverTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "seriesKey",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "setSpot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "settle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "tokenOwner", type: "address" }],
    name: "settleFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "spot",
    outputs: [{ internalType: "uint256", name: "_spot", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokens", type: "uint256" }],
    name: "spotAndPayoff",
    outputs: [
      { internalType: "uint256", name: "_spot", type: "uint256" },
      { internalType: "uint256", name: "payoff", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
var optinoToken = eth.contract(optinoTokenAbi).at(optinoTokenAddress);
var makerdaoFeed0Address = "0xe6ada9beed6e24be4c0259383db61b52bfca85f3";
var makerdaoFeed0Abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      { indexed: false, internalType: "bool", name: "hasValue", type: "bool" },
    ],
    name: "SetValue",
    type: "event",
  },
  {
    inputs: [],
    name: "hasValue",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "peek",
    outputs: [
      { internalType: "bytes32", name: "_value", type: "bytes32" },
      { internalType: "bool", name: "_hasValue", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_value", type: "uint256" },
      { internalType: "bool", name: "_hasValue", type: "bool" },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];
var makerdaoFeed0 = eth.contract(makerdaoFeed0Abi).at(makerdaoFeed0Address);
var makerdaoFeed1Address = "0xf4441f10804b35b13bad1e664e32237773276253";
var makerdaoFeed1Abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      { indexed: false, internalType: "bool", name: "hasValue", type: "bool" },
    ],
    name: "SetValue",
    type: "event",
  },
  {
    inputs: [],
    name: "hasValue",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "peek",
    outputs: [
      { internalType: "bytes32", name: "_value", type: "bytes32" },
      { internalType: "bool", name: "_hasValue", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_value", type: "uint256" },
      { internalType: "bool", name: "_hasValue", type: "bool" },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];
var makerdaoFeed1 = eth.contract(makerdaoFeed1Abi).at(makerdaoFeed1Address);
feedAdaptorContract = {
  eth: {
    _requestManager: { provider: {}, polls: {}, timeout: null },
    compile: {},
    coinbase: "0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e",
    mining: true,
    hashrate: 0,
    syncing: false,
    gasPrice: "1",
    accounts: [
      "0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e",
      "0xa11aae29840fbb5c86e6fd4cf809eba183aef433",
      "0xa22ab8a9d641ce77e06d98b7d7065d324d3d6976",
      "0xa33a6c312d9ad0e0f2e95541beed0cc081621fd0",
      "0xa44a08d3f6933c69212114bb66e2df1813651844",
      "0xa55a151eb00fded1634d27d1127b4be4627079ea",
      "0xa66a85ede0cbe03694aa9d9de0bb19c99ff55bd9",
      "0xa77a2b9d4b1c010a22a7c565dc418cef683dbcec",
      "0xa88a05d2b88283ce84c8325760b72a64591279a2",
      "0xa99a0ae3354c06b1459fd441a32a3f71005d7da0",
      "0xaaaa9de1e6c564446ebca0fd102d8bd92093c756",
      "0xabba43e7594e3b76afb157989e93c6621497fd4b",
      "0xacca534c9f62ab495bd986e002ddf0f054caae4f",
      "0xadda9b762a00ff12711113bfdc36958b73d7f915",
      "0xaeea63b5479b50f79583ec49dacdcf86ddeff392",
      "0xaffa4d3a80add8ce4018540e056dacb649589394",
      "0xb00bfde102270687324f9205b693859df64f8923",
      "0xb11be1d4ef8e94d01cb2695092a79d139a8dad98",
      "0xb22be2d9eef0d7e260cf96a64feea0b95ed3e74f",
      "0xb33b7ecf5e47be3981c74d989d3af8b665b4b649",
      "0xb44b43d59b738b088b690ae276c1e979aba8268d",
      "0xb55b57d113b45481e31aaf03d6f4e5ad4ef325f8",
      "0xb66bcb4e473de80e2c8a47ced10c22c705a5e602",
      "0xb77bbbaa7c1649547ae61de4b80b91568c28351a",
      "0xb88b728490b417e29b0784db30535db343830dba",
      "0xb99b3d1f72edb05a0321db58eddcf83fd73c4ade",
      "0xbaab56da883edbe5314b8005be410022c510ccae",
      "0xbbbb9809de0456ce0e0cd660e6e4ceabef3f521c",
      "0xbccb68dd0ac87ef290aef49870d155f076c87868",
      "0xbddb726ee06906e104db210e6d0506f2b062e477",
      "0xbeeb24ff18203658d0a1d4682ee3f36ad663ec87",
      "0xbffbd8f029ef0bd81cf754b53e8b3a5684f8b3ff",
    ],
    blockNumber: 21,
    protocolVersion: "0x41",
    pendingTransactions: [],
  },
  abi: [
    {
      inputs: [
        { internalType: "address", name: "_sourceAddress", type: "address" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "sourceAddress",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "spot",
      outputs: [
        { internalType: "uint256", name: "", type: "uint256" },
        { internalType: "bool", name: "", type: "bool" },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
};
makerdaoFeed0Address = 0xe6ada9beed6e24be4c0259383db61b52bfca85f3;
var feedAdaptorAddress = "0x57930444aa5c1e758c1407ded001a8f36aa80b1d";
var feedAdaptorAbi = [
  {
    inputs: [
      { internalType: "address", name: "_sourceAddress", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "sourceAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "spot",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "bool", name: "", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
];
var feedAdaptor = eth.contract(feedAdaptorAbi).at(feedAdaptorAddress);
var optinoFactoryAddress = "0x936e75a404fc4ea6aba4d9c3b20ea67abab3188a";
var optinoFactoryAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_optinoTokenTemplate",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "fee", type: "uint256" },
    ],
    name: "FeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "feed", type: "address" },
    ],
    name: "FeedLocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "feed", type: "address" },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "FeedMessageUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "feed", type: "address" },
      { indexed: false, internalType: "string", name: "name", type: "string" },
      {
        indexed: false,
        internalType: "uint8",
        name: "feedType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    name: "FeedUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "bytes", name: "note", type: "bytes" },
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    name: "LogInfo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "MessageUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "seriesKey",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "seriesIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract OptinoToken[2]",
        name: "optinos",
        type: "address[2]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ownerFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "integratorFee",
        type: "uint256",
      },
    ],
    name: "OptinosMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      { indexed: true, internalType: "address", name: "_to", type: "address" },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "seriesKey",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "seriesIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract OptinoToken[2]",
        name: "optinos",
        type: "address[2]",
      },
    ],
    name: "SeriesAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "seriesKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "spot",
        type: "uint256",
      },
    ],
    name: "SeriesSpotUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
      { indexed: false, internalType: "uint8", name: "locked", type: "uint8" },
    ],
    name: "TokenDecimalsUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract ERC20[2]", name: "pair", type: "address[2]" },
      { internalType: "address[2]", name: "feeds", type: "address[2]" },
      { internalType: "uint8[6]", name: "feedParameters", type: "uint8[6]" },
      { internalType: "uint256[5]", name: "data", type: "uint256[5]" },
      { internalType: "uint256[]", name: "spots", type: "uint256[]" },
    ],
    name: "calcPayoffs",
    outputs: [
      {
        internalType: "contract ERC20",
        name: "_collateralToken",
        type: "address",
      },
      { internalType: "uint256[6]", name: "results", type: "uint256[6]" },
      { internalType: "uint256[]", name: "payoffs", type: "uint256[]" },
      { internalType: "string", name: "error", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[2]", name: "feeds", type: "address[2]" },
      { internalType: "uint8[6]", name: "feedParameters", type: "uint8[6]" },
    ],
    name: "calculateSpot",
    outputs: [
      { internalType: "uint8", name: "feedDecimals0", type: "uint8" },
      { internalType: "uint8", name: "feedType0", type: "uint8" },
      { internalType: "uint256", name: "spot", type: "uint256" },
      { internalType: "bool", name: "ok", type: "bool" },
      { internalType: "string", name: "error", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feedLength",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "seriesKey", type: "bytes32" }],
    name: "getCalcData",
    outputs: [
      { internalType: "uint256[5]", name: "_seriesData", type: "uint256[5]" },
      { internalType: "uint8[4]", name: "decimalsData", type: "uint8[4]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "i", type: "uint256" }],
    name: "getFeedByIndex",
    outputs: [
      { internalType: "address", name: "feed", type: "address" },
      { internalType: "string", name: "feedName", type: "string" },
      { internalType: "string", name: "_message", type: "string" },
      { internalType: "uint8[3]", name: "_feedData", type: "uint8[3]" },
      { internalType: "uint256", name: "spot", type: "uint256" },
      { internalType: "bool", name: "hasData", type: "bool" },
      { internalType: "uint8", name: "feedReportedDecimals", type: "uint8" },
      { internalType: "uint256", name: "feedTimestamp", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_feed", type: "address" }],
    name: "getFeedData",
    outputs: [
      { internalType: "bool", name: "isRegistered", type: "bool" },
      { internalType: "string", name: "feedName", type: "string" },
      { internalType: "uint8", name: "feedType", type: "uint8" },
      { internalType: "uint8", name: "decimals", type: "uint8" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "seriesKey", type: "bytes32" }],
    name: "getFeedDecimals0",
    outputs: [{ internalType: "uint8", name: "feedDecimals0", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "feed", type: "address" },
      {
        internalType: "enum FeedHandler.FeedType",
        name: "feedType",
        type: "uint8",
      },
    ],
    name: "getRateFromFeed",
    outputs: [
      { internalType: "uint256", name: "rate", type: "uint256" },
      { internalType: "bool", name: "hasData", type: "bool" },
      { internalType: "uint8", name: "decimals", type: "uint8" },
      { internalType: "uint256", name: "timestamp", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "i", type: "uint256" }],
    name: "getSeriesByIndex",
    outputs: [
      { internalType: "bytes32", name: "seriesKey", type: "bytes32" },
      { internalType: "contract ERC20[2]", name: "pair", type: "address[2]" },
      { internalType: "address[2]", name: "feeds", type: "address[2]" },
      { internalType: "uint8[6]", name: "feedParameters", type: "uint8[6]" },
      { internalType: "uint8", name: "feedDecimals0", type: "uint8" },
      { internalType: "uint256[5]", name: "data", type: "uint256[5]" },
      {
        internalType: "contract OptinoToken[2]",
        name: "optinos",
        type: "address[2]",
      },
      { internalType: "uint256", name: "timestamp", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "seriesKey", type: "bytes32" }],
    name: "getSeriesByKey",
    outputs: [
      { internalType: "uint256", name: "_seriesIndex", type: "uint256" },
      { internalType: "contract ERC20[2]", name: "pair", type: "address[2]" },
      { internalType: "address[2]", name: "feeds", type: "address[2]" },
      { internalType: "uint8[6]", name: "feedParameters", type: "uint8[6]" },
      { internalType: "uint256[5]", name: "data", type: "uint256[5]" },
      {
        internalType: "contract OptinoToken[2]",
        name: "optinos",
        type: "address[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "seriesKey", type: "bytes32" }],
    name: "getSeriesSpot",
    outputs: [{ internalType: "uint256", name: "spot", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_feed", type: "address" }],
    name: "lockFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "message",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract ERC20[2]", name: "pair", type: "address[2]" },
      { internalType: "address[2]", name: "feeds", type: "address[2]" },
      { internalType: "uint8[6]", name: "feedParameters", type: "uint8[6]" },
      { internalType: "uint256[5]", name: "data", type: "uint256[5]" },
      {
        internalType: "address",
        name: "integratorFeeAccount",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "contract OptinoToken[2]",
        name: "_optinos",
        type: "address[2]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "newOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "optinoTokenTemplate",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract OptinoToken",
        name: "optinoToken",
        type: "address",
      },
      { internalType: "contract ERC20", name: "token", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "recoverTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "seriesLength",
    outputs: [
      { internalType: "uint256", name: "_seriesLength", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "seriesKey", type: "bytes32" }],
    name: "setSeriesSpot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "seriesKey", type: "bytes32" },
      { internalType: "uint256", name: "spot", type: "uint256" },
    ],
    name: "setSeriesSpotIfPriceFeedFails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_fee", type: "uint256" }],
    name: "updateFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_feed", type: "address" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "_message", type: "string" },
      { internalType: "uint8", name: "feedType", type: "uint8" },
      { internalType: "uint8", name: "decimals", type: "uint8" },
    ],
    name: "updateFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_feed", type: "address" },
      { internalType: "string", name: "_message", type: "string" },
    ],
    name: "updateFeedMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_message", type: "string" }],
    name: "updateMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
var optinoFactory = eth.contract(optinoFactoryAbi).at(optinoFactoryAddress);
=======
var miner="0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e";
var deployer="0xa11aae29840fbb5c86e6fd4cf809eba183aef433";
var seller1="0xa22ab8a9d641ce77e06d98b7d7065d324d3d6976";
var seller2="0xa33a6c312d9ad0e0f2e95541beed0cc081621fd0";
var buyer1="0xa44a08d3f6933c69212114bb66e2df1813651844";
var buyer2="0xa55a151eb00fded1634d27d1127b4be4627079ea";
var uiFeeAccount="0xa66a85ede0cbe03694aa9d9de0bb19c99ff55bd9";
deployer=0xa11aae29840fbb5c86e6fd4cf809eba183aef433
defaultGasPrice=8100000000
var token0Address="0x1d3ae9ebfde1adeecb09494330f8012133ea4224";
var tokenAbi=[{"inputs":[{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"newOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnershipImmediately","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var token0=eth.contract(tokenAbi).at(token0Address);
var token1Address="0x21eb5fe735cbc991adb824a4aa6ecc652c1aac44";
var tokenAbi=[{"inputs":[{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"newOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnershipImmediately","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var token1=eth.contract(tokenAbi).at(token1Address);
var optinoTokenAddress="0x8514b252e75b6824261f7b4a55f969b60eddb108";
var optinoTokenAbi=[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract OptinoToken","name":"optinoToken","type":"address"},{"indexed":true,"internalType":"contract OptinoToken","name":"coverToken","type":"address"},{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"collateralRefund","type":"uint256"}],"name":"Close","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract OptinoToken","name":"optinoOrCoverToken","type":"address"},{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"collateralPayoff","type":"uint256"}],"name":"Settle","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"enum OptinoToken.BurnType","name":"burnType","type":"uint8"}],"name":"burn","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"close","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"closeFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collateralToken","outputs":[{"internalType":"contract ERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentSpot","outputs":[{"internalType":"uint256","name":"_currentSpot","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"currentSpotAndPayoff","outputs":[{"internalType":"uint256","name":"_spot","type":"uint256"},{"internalType":"uint256","name":"currentPayoff","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"contract OptinoFactory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFeedInfo","outputs":[{"internalType":"address","name":"feed0","type":"address"},{"internalType":"address","name":"feed1","type":"address"},{"internalType":"uint8","name":"feedType0","type":"uint8"},{"internalType":"uint8","name":"feedType1","type":"uint8"},{"internalType":"uint8","name":"decimals0","type":"uint8"},{"internalType":"uint8","name":"decimals1","type":"uint8"},{"internalType":"uint8","name":"inverse0","type":"uint8"},{"internalType":"uint8","name":"inverse1","type":"uint8"},{"internalType":"uint8","name":"usedFeedDecimals0","type":"uint8"},{"internalType":"uint8","name":"usedFeedType0","type":"uint8"},{"internalType":"uint256","name":"currentSpot","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getInfo","outputs":[{"internalType":"contract ERC20","name":"token0","type":"address"},{"internalType":"contract ERC20","name":"token1","type":"address"},{"internalType":"contract ERC20","name":"_collateralToken","type":"address"},{"internalType":"uint8","name":"collateralDecimals","type":"uint8"},{"internalType":"uint256","name":"callPut","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint256","name":"strike","type":"uint256"},{"internalType":"uint256","name":"bound","type":"uint256"},{"internalType":"bool","name":"_isCover","type":"bool"},{"internalType":"contract OptinoToken","name":"_optinoPair","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPricingInfo","outputs":[{"internalType":"uint256","name":"currentSpot","type":"uint256"},{"internalType":"uint256","name":"currentPayoff","type":"uint256"},{"internalType":"uint256","name":"spot","type":"uint256"},{"internalType":"uint256","name":"payoff","type":"uint256"},{"internalType":"uint256","name":"collateral","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSeriesData","outputs":[{"internalType":"bytes32","name":"_seriesKey","type":"bytes32"},{"internalType":"uint256","name":"_seriesIndex","type":"uint256"},{"internalType":"contract ERC20[2]","name":"pair","type":"address[2]"},{"internalType":"address[2]","name":"feeds","type":"address[2]"},{"internalType":"uint8[6]","name":"feedParameters","type":"uint8[6]"},{"internalType":"uint256[5]","name":"data","type":"uint256[5]"},{"internalType":"contract OptinoToken[2]","name":"optinos","type":"address[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract OptinoFactory","name":"_factory","type":"address"},{"internalType":"bytes32","name":"_seriesKey","type":"bytes32"},{"internalType":"contract OptinoToken","name":"_optinoPair","type":"address"},{"internalType":"bool","name":"_isCover","type":"bool"},{"internalType":"uint256","name":"_decimals","type":"uint256"}],"name":"initOptinoToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isCover","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"newOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"optinoPair","outputs":[{"internalType":"contract OptinoToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"uint256[]","name":"spots","type":"uint256[]"}],"name":"payoffForSpots","outputs":[{"internalType":"uint256[]","name":"payoffs","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract ERC20","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"recoverTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seriesKey","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"setSpot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"settle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"settleFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"settled","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"spot","outputs":[{"internalType":"uint256","name":"_spot","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"spotAndPayoff","outputs":[{"internalType":"uint256","name":"_spot","type":"uint256"},{"internalType":"uint256","name":"payoff","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var optinoToken=eth.contract(optinoTokenAbi).at(optinoTokenAddress);
var makerdaoFeed0Address="0x2c6114b8584f9902760649264973b32d8b3b8d82";
var makerdaoFeed0Abi=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"bool","name":"hasValue","type":"bool"}],"name":"SetValue","type":"event"},{"inputs":[],"name":"hasValue","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"peek","outputs":[{"internalType":"bytes32","name":"_value","type":"bytes32"},{"internalType":"bool","name":"_hasValue","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bool","name":"_hasValue","type":"bool"}],"name":"setValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"value","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
var makerdaoFeed0=eth.contract(makerdaoFeed0Abi).at(makerdaoFeed0Address);
var makerdaoFeed1Address="0xe4d97f7a85d1454c2a4efc020742278f61030b4d";
var makerdaoFeed1Abi=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"bool","name":"hasValue","type":"bool"}],"name":"SetValue","type":"event"},{"inputs":[],"name":"hasValue","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"peek","outputs":[{"internalType":"bytes32","name":"_value","type":"bytes32"},{"internalType":"bool","name":"_hasValue","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bool","name":"_hasValue","type":"bool"}],"name":"setValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"value","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
var makerdaoFeed1=eth.contract(makerdaoFeed1Abi).at(makerdaoFeed1Address);
feedAdaptorContract={"eth":{"_requestManager":{"provider":{},"polls":{},"timeout":null},"compile":{},"coinbase":"0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e","mining":true,"hashrate":0,"syncing":false,"gasPrice":"8100000000","accounts":["0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e","0xa11aae29840fbb5c86e6fd4cf809eba183aef433","0xa22ab8a9d641ce77e06d98b7d7065d324d3d6976","0xa33a6c312d9ad0e0f2e95541beed0cc081621fd0","0xa44a08d3f6933c69212114bb66e2df1813651844","0xa55a151eb00fded1634d27d1127b4be4627079ea","0xa66a85ede0cbe03694aa9d9de0bb19c99ff55bd9","0xa77a2b9d4b1c010a22a7c565dc418cef683dbcec","0xa88a05d2b88283ce84c8325760b72a64591279a2","0xa99a0ae3354c06b1459fd441a32a3f71005d7da0","0xaaaa9de1e6c564446ebca0fd102d8bd92093c756","0xabba43e7594e3b76afb157989e93c6621497fd4b","0xacca534c9f62ab495bd986e002ddf0f054caae4f","0xadda9b762a00ff12711113bfdc36958b73d7f915","0xaeea63b5479b50f79583ec49dacdcf86ddeff392","0xaffa4d3a80add8ce4018540e056dacb649589394","0xb00bfde102270687324f9205b693859df64f8923","0xb11be1d4ef8e94d01cb2695092a79d139a8dad98","0xb22be2d9eef0d7e260cf96a64feea0b95ed3e74f","0xb33b7ecf5e47be3981c74d989d3af8b665b4b649","0xb44b43d59b738b088b690ae276c1e979aba8268d","0xb55b57d113b45481e31aaf03d6f4e5ad4ef325f8","0xb66bcb4e473de80e2c8a47ced10c22c705a5e602","0xb77bbbaa7c1649547ae61de4b80b91568c28351a","0xb88b728490b417e29b0784db30535db343830dba","0xb99b3d1f72edb05a0321db58eddcf83fd73c4ade","0xbaab56da883edbe5314b8005be410022c510ccae","0xbbbb9809de0456ce0e0cd660e6e4ceabef3f521c","0xbccb68dd0ac87ef290aef49870d155f076c87868","0xbddb726ee06906e104db210e6d0506f2b062e477","0xbeeb24ff18203658d0a1d4682ee3f36ad663ec87","0xbffbd8f029ef0bd81cf754b53e8b3a5684f8b3ff"],"blockNumber":3116,"protocolVersion":"0x41","pendingTransactions":[]},"abi":[{"inputs":[{"internalType":"address","name":"_sourceAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"sourceAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"spot","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]}
makerdaoFeed0Address=0x2c6114b8584f9902760649264973b32d8b3b8d82
var feedAdaptorAddress="0xbaded2da306b54bac880043418105f4491c3d617";
var feedAdaptorAbi=[{"inputs":[{"internalType":"address","name":"_sourceAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"sourceAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"spot","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}];
var feedAdaptor=eth.contract(feedAdaptorAbi).at(feedAdaptorAddress);
var optinoFactoryAddress="0x63b72794f3efca62e570e127b774889c470bf238";
var optinoFactoryAbi=[{"inputs":[{"internalType":"address","name":"_optinoTokenTemplate","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"FeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"feed","type":"address"}],"name":"FeedLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"feed","type":"address"},{"indexed":false,"internalType":"string","name":"note","type":"string"}],"name":"FeedNoteUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"feed","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint8","name":"feedType","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"FeedUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_message","type":"string"}],"name":"MessageUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"seriesKey","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"seriesIndex","type":"uint256"},{"indexed":false,"internalType":"contract OptinoToken[2]","name":"optinos","type":"address[2]"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ownerFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"integratorFee","type":"uint256"}],"name":"OptinosMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"seriesKey","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"seriesIndex","type":"uint256"},{"indexed":false,"internalType":"contract OptinoToken[2]","name":"optinos","type":"address[2]"}],"name":"SeriesAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"seriesKey","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"spot","type":"uint256"}],"name":"SeriesSpotUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract ERC20","name":"token","type":"address"},{"indexed":false,"internalType":"uint8","name":"decimals","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"locked","type":"uint8"}],"name":"TokenDecimalsUpdated","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ERC20[2]","name":"pair","type":"address[2]"},{"internalType":"address[2]","name":"feeds","type":"address[2]"},{"internalType":"uint8[6]","name":"feedParameters","type":"uint8[6]"},{"internalType":"uint256[5]","name":"data","type":"uint256[5]"},{"internalType":"uint256[]","name":"spots","type":"uint256[]"}],"name":"calcPayoffs","outputs":[{"internalType":"contract ERC20","name":"_collateralToken","type":"address"},{"internalType":"uint256[6]","name":"results","type":"uint256[6]"},{"internalType":"uint256[]","name":"payoffs","type":"uint256[]"},{"internalType":"string","name":"error","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[2]","name":"feeds","type":"address[2]"},{"internalType":"uint8[6]","name":"feedParameters","type":"uint8[6]"}],"name":"calculateSpot","outputs":[{"internalType":"uint8","name":"feedDecimals0","type":"uint8"},{"internalType":"uint8","name":"feedType0","type":"uint8"},{"internalType":"uint256","name":"spot","type":"uint256"},{"internalType":"bool","name":"ok","type":"bool"},{"internalType":"string","name":"error","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feedLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"seriesKey","type":"bytes32"}],"name":"getCalcData","outputs":[{"internalType":"uint256[5]","name":"_seriesData","type":"uint256[5]"},{"internalType":"uint8[4]","name":"decimalsData","type":"uint8[4]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"getFeedByIndex","outputs":[{"internalType":"address","name":"feed","type":"address"},{"internalType":"string","name":"feedName","type":"string"},{"internalType":"string","name":"_note","type":"string"},{"internalType":"uint8[3]","name":"_feedData","type":"uint8[3]"},{"internalType":"uint256","name":"spot","type":"uint256"},{"internalType":"bool","name":"hasData","type":"bool"},{"internalType":"uint8","name":"feedReportedDecimals","type":"uint8"},{"internalType":"uint256","name":"feedTimestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_feed","type":"address"}],"name":"getFeedData","outputs":[{"internalType":"bool","name":"isRegistered","type":"bool"},{"internalType":"string","name":"feedName","type":"string"},{"internalType":"uint8","name":"feedType","type":"uint8"},{"internalType":"uint8","name":"decimals","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"seriesKey","type":"bytes32"}],"name":"getFeedDecimals0","outputs":[{"internalType":"uint8","name":"feedDecimals0","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"feed","type":"address"},{"internalType":"enum FeedHandler.FeedType","name":"feedType","type":"uint8"}],"name":"getRateFromFeed","outputs":[{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"bool","name":"hasData","type":"bool"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"getSeriesByIndex","outputs":[{"internalType":"bytes32","name":"seriesKey","type":"bytes32"},{"internalType":"contract ERC20[2]","name":"pair","type":"address[2]"},{"internalType":"address[2]","name":"feeds","type":"address[2]"},{"internalType":"uint8[6]","name":"feedParameters","type":"uint8[6]"},{"internalType":"uint8","name":"feedDecimals0","type":"uint8"},{"internalType":"uint256[5]","name":"data","type":"uint256[5]"},{"internalType":"contract OptinoToken[2]","name":"optinos","type":"address[2]"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"seriesKey","type":"bytes32"}],"name":"getSeriesByKey","outputs":[{"internalType":"uint256","name":"_seriesIndex","type":"uint256"},{"internalType":"contract ERC20[2]","name":"pair","type":"address[2]"},{"internalType":"address[2]","name":"feeds","type":"address[2]"},{"internalType":"uint8[6]","name":"feedParameters","type":"uint8[6]"},{"internalType":"uint256[5]","name":"data","type":"uint256[5]"},{"internalType":"contract OptinoToken[2]","name":"optinos","type":"address[2]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"seriesKey","type":"bytes32"}],"name":"getSeriesSpot","outputs":[{"internalType":"uint256","name":"spot","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_feed","type":"address"}],"name":"lockFeed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"message","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract ERC20[2]","name":"pair","type":"address[2]"},{"internalType":"address[2]","name":"feeds","type":"address[2]"},{"internalType":"uint8[6]","name":"feedParameters","type":"uint8[6]"},{"internalType":"uint256[5]","name":"data","type":"uint256[5]"},{"internalType":"address","name":"integratorFeeAccount","type":"address"}],"name":"mint","outputs":[{"internalType":"contract OptinoToken[2]","name":"_optinos","type":"address[2]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"newOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"optinoTokenTemplate","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract OptinoToken","name":"optinoToken","type":"address"},{"internalType":"contract ERC20","name":"token","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"recoverTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seriesLength","outputs":[{"internalType":"uint256","name":"_seriesLength","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"seriesKey","type":"bytes32"}],"name":"setSeriesSpot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"seriesKey","type":"bytes32"},{"internalType":"uint256","name":"spot","type":"uint256"}],"name":"setSeriesSpotIfPriceFeedFails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"updateFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feed","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"_note","type":"string"},{"internalType":"uint8","name":"feedType","type":"uint8"},{"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"updateFeed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feed","type":"address"},{"internalType":"string","name":"_note","type":"string"}],"name":"updateFeedNote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"updateMessage","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var optinoFactory=eth.contract(optinoFactoryAbi).at(optinoFactoryAddress);
>>>>>>> ogDAO-master
