    
        var myAccounts;
        var myDappsUniEthereumNode= "nik.chainapp.live:7852";

        var web3 = new Web3(new Web3.providers.HttpProvider("http://"+myDappsUniEthereumNode));
        var eventProvider = new Web3.providers.WebsocketProvider("ws://"+myDappsUniEthereumNode);
      
        var web3ws=new Web3(eventProvider); 

        var contractAddress="0x1ac561c3fa1fecf64559538b2bf264ccc9b9c22d";

        var abi=[
        {
            "constant": true,
            "inputs": [],
            "name": "initialsupply",
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
            "constant": true,
            "inputs": [],
            "name": "get",
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
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
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
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
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
            "inputs": [
                {
                    "name": "initialSupply",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "note",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "_to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        }];
        
        var TokenContract = new web3ws.eth.Contract(abi,contractAddress);
        console.log(TokenContract);
        var transferEvent= TokenContract.events.Transfer((err, events)=>{
                console.log(err, events)
            })

        const subscriptionBH = web3ws.eth.subscribe('newBlockHeaders', function(error, result){
                if (!error) {
                    console.log(result.number);
                    return;
                }

                console.error(error);
            })

            .on("data", function(blockHeader){
                console.log(blockHeader);
                web3.eth.getBlockNumber().then((latest) => {
                    console.log("fired!!", latest);
                    console.log('latest is',latest)
                    web3.eth.getBlock(latest).then(console.log)
                    //web3.eth.getBlock(1).then(console.log)
                  
                });
            })
            .on("error", console.error);

        

        const getMyAccounts = async () => {
            try {
                myAccounts = await web3ws.eth.getAccounts();
                //console.log(myAccounts);
                return myAccounts;

            } catch (err) {
                console.log(err);
            }
        }

        myAccounts=getMyAccounts();


        function printAllAccounts(){
            var myAccountList= document.getElementById("myAccountList");
            while( myAccountList.firstChild ){
              myAccountList.removeChild( myAccountList.firstChild );
            };
            for (var k in myAccounts){
                    if (typeof myAccounts[k] !== 'function') {
                         console.log("Key is " + k + ", value is" + myAccounts[k]);
                         var node = document.createElement("LI");
                          var textnode = document.createTextNode(myAccounts[k]);
                          node.appendChild(textnode);
                          document.getElementById("myAccountList").appendChild(node);


                    }
                }
        }

        function getAllBlocks(){
            var myBlockList= document.getElementById("myBlockList");
            while( myBlockList.firstChild ){
              myBlockList.removeChild( myBlockList.firstChild );
            };
            web3.eth.getBlockNumber().then((latest) => {
                    for (let i = 0; i <= latest; i++) {
                        web3.eth.getBlock(latest-i).then(function(result){
                        var node = document.createElement("LI");
                          var textnode = document.createTextNode(JSON.stringify(result,null,2));
                          node.appendChild(textnode);
                          document.getElementById("myBlockList").appendChild(node);
                        })
                      }
                    });
    
        }

        function getcontract(){
            var myContractEventsList= document.getElementById("myContractEventsList");
            contractAddress=document.getElementById('queryContract').value;
            TokenContract = new web3ws.eth.Contract(abi,contractAddress);
            console.log(TokenContract);
            var transferEvent= TokenContract.events.Transfer((err, events)=>{
                console.log(err, events)
                var node = document.createElement("LI");
                var textnode = document.createTextNode(JSON.stringify(events,null,2));
                node.appendChild(textnode);
                myContractEventsList.appendChild(node);
            })

            var currentContract= document.getElementById("currentContract");
            var textnode2 = document.createTextNode("Now monitoring contract @ address: "+ contractAddress);
            currentContract.appendChild(textnode2);
            //TokenContract.methods.get().call((err, result) => { console.log(result) })
    
        }

        function transact(){
            var tx= document.getElementById('txContract').value;
            console.log(tx);
            var addr=tx.split(",")[0];
            var val=tx.split(",")[1];
            console.log(TokenContract);
            
            //TokenContract.methods.get().call((err, result) => { console.log(result) })
            var fromAddr= document.getElementById('fromAddr').value;
            TokenContract.methods.transfer(addr,parseInt(val)).send({from: fromAddr})

        }

        function getTokenBalance(){
            //TokenContract.methods.get().call((err, result) => { console.log(result) })
            var fromAddr2= document.getElementById('fromAddr2').value;
            var accountBalance= document.getElementById("accountBalance");
            while( accountBalance.firstChild ){
              accountBalance.removeChild( accountBalance.firstChild );
            };
            TokenContract.methods.balanceOf(fromAddr2).call((err, result) => { 
                console.log(result);
                var accountBalance= document.getElementById("accountBalance");
                var textnode3 = document.createTextNode("Account: "+ fromAddr2+ " balance is: " + result);
                accountBalance.appendChild(textnode3);

            })

        }




    //python -m http.server 8081//