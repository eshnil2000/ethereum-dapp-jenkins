
//==Point to our blockchain API==//
var myDappsUniEthereumNode= "ether.chainapp.live:7852";

if (typeof web3 !== 'undefined') {
     web3 = new Web3(web3.currentProvider);
}
else {
    var web3 = new Web3(new Web3.providers.HttpProvider("http://"+myDappsUniEthereumNode));
}

var contractAddress="0x229cca9e03d62bc279d4b8c5d6cbdf8415ca59ff";

//===Contract Interface===//
var abi=[
    {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
        {
            "name": "",
            "type": "string"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "startDate",
    "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": false,
    "inputs": [
        {
            "name": "from",
            "type": "address"
        },
        {
            "name": "to",
            "type": "address"
        },
        {
            "name": "tokens",
            "type": "uint256"
        }
    ],
    "name": "transferFrom",
    "outputs": [
        {
            "name": "success",
            "type": "bool"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
        {
            "name": "",
            "type": "uint8"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "_totalSupply",
    "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "bonusEnds",
    "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [
        {
            "name": "tokenOwner",
            "type": "address"
        }
    ],
    "name": "balanceOf",
    "outputs": [
        {
            "name": "balance",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": false,
    "inputs": [],
    "name": "acceptOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
        {
            "name": "",
            "type": "address"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
        {
            "name": "",
            "type": "string"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": false,
    "inputs": [
        {
            "name": "to",
            "type": "address"
        },
        {
            "name": "tokens",
            "type": "uint256"
        }
    ],
    "name": "transfer",
    "outputs": [
        {
            "name": "success",
            "type": "bool"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "endDate",
    "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "newOwner",
    "outputs": [
        {
            "name": "",
            "type": "address"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "_ownerSupply",
    "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "constant": false,
    "inputs": [
        {
            "name": "_newOwner",
            "type": "address"
        }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "hardCap",
    "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
    },
    {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
    },
    {
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "name": "_from",
            "type": "address"
        },
        {
            "indexed": true,
            "name": "_to",
            "type": "address"
        }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "name": "from",
            "type": "address"
        },
        {
            "indexed": true,
            "name": "to",
            "type": "address"
        },
        {
            "indexed": false,
            "name": "tokens",
            "type": "uint256"
        }
    ],
    "name": "Transfer",
    "type": "event"
    },
    {
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "name": "tokenOwner",
            "type": "address"
        },
        {
            "indexed": true,
            "name": "spender",
            "type": "address"
        },
        {
            "indexed": false,
            "name": "tokens",
            "type": "uint256"
        }
    ],
    "name": "Approval",
    "type": "event"
    }
]
//===Contract Interface===//

var hardCap=0;
var totalSupply=0;
var TokenContract = new web3ws.eth.Contract(abi,contractAddress);
TokenContract.methods._totalSupply().call((err, result) => {
    totalSupply=result;
});
TokenContract.methods.hardCap().call((err, result) => {
    hardCap=result;
});
       
//==Accept Contract Address, Monitor the Contract==//
function getcontract(){
    var myContractEventsList= document.getElementById("myContractEventsList");
    contractAddress=document.getElementById('queryContract').value;
    
    TokenContract = new web3ws.eth.Contract(abi,contractAddress);
    var transferEvent= TokenContract.events.Transfer((err, events)=>{
        //console.log(err, events)
        var node = document.createElement("LI");
        var textnode = document.createTextNode(JSON.stringify(events,null,2));
        node.appendChild(textnode);
        myContractEventsList.appendChild(node);
    })

    var currentContract= document.getElementById("currentContract");
    var textnode2 = document.createTextNode("Now monitoring contract @ address: "+ contractAddress);
    currentContract.innerHTML='';
    currentContract.appendChild(textnode2);
    TokenContract.methods.hardCap().call((err, result) => {
        hardCap=result;
        TokenContract.methods._totalSupply().call((err, result) => {
            totalSupply=result;
            move(hardCap,totalSupply);
        };
    });

}
//==Accept Ether, give back tokens==//
 function purchaseICO(){
    var tx= document.getElementById('purchaseICOfromaddress').value;
    console.log(tx);
    var addr=tx.split(",")[0];
    var val=tx.split(",")[1];
    var fromAddr= document.getElementById('purchaseICOfromaddress').value;
    one_eth = web3.utils.toWei(val, "ether");
    web3.eth.sendTransaction({gasLimit: 3141592 ,from: addr, to: contractAddress, value: one_eth});
    
}

//==Progressbar movement==//
function move(hardCap,totalSupply) {
  console.log("move called with hardcap:",hardCap, " total: ", totalSupply);
  var elem = document.getElementById("colorbar");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 95) {
      clearInterval(id);
    } else {
      width= totalSupply/hardCap*100; 
      if(width>=95){
        width=95;
      }
      //console.log("width is calculated as: ",width);
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1 + '%';
      var elem2 = document.getElementById("ICO_status");
      elem2.innerHTML = "ICO Progress: " + totalSupply/10**18 + " / "+ hardCap/10**18+ " tokens"; 
    }
  }
}
