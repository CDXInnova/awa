let apiKey = 'US4AM2W7MQGIXCEWSTS1RIZHSGAFRIGHEI';
let inawayICOContract;
let accounts;
let contractABI = [
    [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balances",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
];
const contractAddress = '0x65839BbBe7BD6ccD44eC617881A2A854E74f5452';
const pancakeRouterAddress = '0x10ED43C718714eb63d5aA57B78B54704E256024E'; // Dirección del contrato del router de PancakeSwap
const pancakeRouterABI = [{ "inputs": [{ "internalType": "address", "name": "_factory", "type": "address" }, { "internalType": "address", "name": "_WETH", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "WETH", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "amountADesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountBDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amountTokenDesired", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "addLiquidityETH", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "factory", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "reserveIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveOut", "type": "uint256" }], "name": "getAmountIn", "outputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveIn", "type": "uint256" }, { "internalType": "uint256", "name": "reserveOut", "type": "uint256" }], "name": "getAmountOut", "outputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsIn", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsOut", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveA", "type": "uint256" }, { "internalType": "uint256", "name": "reserveB", "type": "uint256" }], "name": "quote", "outputs": [{ "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidity", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityETH", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "removeLiquidityETHSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityETHWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountTokenMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountETHMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens", "outputs": [{ "internalType": "uint256", "name": "amountETH", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenA", "type": "address" }, { "internalType": "address", "name": "tokenB", "type": "address" }, { "internalType": "uint256", "name": "liquidity", "type": "uint256" }, { "internalType": "uint256", "name": "amountAMin", "type": "uint256" }, { "internalType": "uint256", "name": "amountBMin", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "bool", "name": "approveMax", "type": "bool" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "removeLiquidityWithPermit", "outputs": [{ "internalType": "uint256", "name": "amountA", "type": "uint256" }, { "internalType": "uint256", "name": "amountB", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapETHForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactETHForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactETHForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForETH", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForETHSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactETH", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountOut", "type": "uint256" }, { "internalType": "uint256", "name": "amountInMax", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }], "name": "swapTokensForExactTokens", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];

async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await window.web3.eth.getAccounts();
            const networkId = await window.web3.eth.net.getId();
            if (networkId == 56) {
                displayUserInfo();
                inawayICOContract = new window.web3.eth.Contract(contractABI, contractAddress);
                const contractInterface = document.getElementById('contract-interface');
                if (contractInterface) {
                    contractInterface.classList.remove('hidden');
                }
                const contractContent = document.getElementById('contract-content');
                if (contractContent) {
                    contractContent.classList.remove('hidden');
                }
                updateWalletInfo(accounts[0]);
                if (accounts.length > 0) {
                    showExchangeForm();
                    showCanonForm();
                    displayTotalPurchase(accounts[0]);
                }
            } else {
                alert('Please connect to Binance Smart Chain network.');
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        alert('Web3 not found. Please install MetaMask to continue.');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Llama a la función loadWeb3 después de definirla
    loadWeb3();
});

async function displayUserInfo() {
    try {
        const inawayBalance = await getInawayBalance();
        const inawayBalanceINAWAY = window.web3.utils.fromWei(inawayBalance, 'ether');
        document.getElementById('inaway-balance').innerText = inawayBalanceINAWAY;
    } catch (error) {
        console.error('Error al obtener la información del usuario:', error);
    }
}

async function getInawayBalance() {
    try {
        const inawayTokenAddress = '0x3caeebcb3e53e8e470a4bd3427dbbd3c77de4a78';
        const accounts = await window.web3.eth.getAccounts();
        const account = accounts[0];
        const apiUrl = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${inawayTokenAddress}&address=${account}&tag=latest&apikey=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === '1') {
            const balanceInWei = data.result;
            return balanceInWei;
        } else {
            throw new Error('Error al obtener el saldo de tokens INAWAY');
        }
    } catch (error) {
        console.error('Error al obtener el saldo de tokens INAWAY:', error);
        return 'Error';
    }
}

function updateWalletInfo(account) {
    const shortAddress = account.substring(0, 5) + '...' + account.slice(-4);
    const walletInfo = document.getElementById('wallet-info');
    walletInfo.innerText = 'Wallet Connected: ' + shortAddress;
}

//FUNCION DE MOSTRAR OCULTAR COMPRAR INAWAY
function showExchangeForm() {
    const buyForm = document.getElementById('buyFormWBNB');
    if (buyForm) {
        buyForm.classList.remove('hidden');
    }
}

function hideExchangeForm() {
    const buyForm = document.getElementById('buyFormWBNB');
    if (buyForm) {
        buyForm.classList.add('hidden');
    }
}

//FUNCION DE MOSTRAR OCULTAR CANON
function showCanonForm() {
    const buycanon = document.getElementById('buyCanonBNB');
    if (buycanon) {
        buycanon.classList.remove('hidden');
    }
}

function hideCanonForm() {
    const buycanon = document.getElementById('buyCanonBNB');
    if (buycanon) {
        buycanon.classList.add('hidden');
    }
}


//FUNCION CONECTAR WEB3
async function connectWeb3() {
    try {
        if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const networkId = await window.web3.eth.net.getId();
            console.log('Network ID:', networkId);
            if (networkId == 56) {
                const buyForm = document.getElementById('buyForm');
                buyForm.classList.remove('hidden');
                const accounts = await window.web3.eth.getaccounts();
                updateWalletInfo(accounts[0]);
                const canonForm = document.getElementById('canonForm'); // Cambio de 'buyForm' a 'canonForm'
                canonForm.classList.remove('hidden');
                updateWalletInfo(accounts[0]);
                const walletInfo = document.getElementById('wallet-info');
                walletInfo.innerText = "You are about to perform important transactions. Make sure to use the correct form for your operations. The Blockchain network is secure and public, but also private, so sending BNB to another network may result in the loss of your cryptocurrencies. Take necessary precautions.";
            } else {
                alert('Please connect to Binance Smart Chain network.');
            }
        } else {
            alert('Web3 not found. Please install MetaMask to continue.');
        }
    } catch (error) {
        console.error(error);
        alert('Failed to connect to Binance Smart Chain.');
    }
}

async function init() {
    try {
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Conectado a MetaMask con la cuenta:', accounts[0]);
        inawayICOContract = new window.web3.eth.Contract(contractABI, contractAddress);
    } catch (error) {
        console.error(error);
    }
}

//FUNCION BOTON COMPRAR INAWAY NIVEL 1
document.getElementById('buyButtonWBNB_Level1').addEventListener('click', function () {
    var amountBNB = document.getElementById('amountWBNB').value;
    exchangeTokensLevel1(amountBNB);
});

//FUNCION BOTON COMPRAR INAWAY NIVEL 2
document.getElementById('buyButtonWBNB').addEventListener('click', function () {
    var amountBNB = document.getElementById('amountWBNB').value;
    exchangeTokens(amountBNB);
});


// FUNCION BOTON COMPRAR INAWAY NIVEL 3
document.getElementById('buyButtonWBNB_Level3').addEventListener('click', function () {
    exchangeTokensLevel3();
});

//FUNCION BOTON COMPRAR INAWAY NIVEL 4
document.getElementById('buyButtonWBNB_Level4').addEventListener('click', function () {
    exchangeTokensLevel4();
});

//FUNCION BOTON COMPRAR INAWAY NIVEL 5
document.getElementById('buyButtonWBNB_Level5').addEventListener('click', function () {
    exchangeTokensLevel5();
});

//FUNCION BOTON COMPRAR INAWAY NIVEL 6
document.getElementById('buyButtonWBNB_Level6').addEventListener('click', function () {
    exchangeTokensLevel6();
});

//FUNCION BOTON COMPRAR INAWAY NIVEL 7
document.getElementById('buyButtonWBNB_Level7').addEventListener('click', function () {
    exchangeTokensLevel7();
});

//FUNCION BOTON SEPARAR FRANQUICIA
document.getElementById('buyButtonCanon').addEventListener('click', function () {
    canonFranquicia();
});


//FUNCION COMPRAR INAWAY NIVEL 1
async function exchangeTokensLevel1() {
    try {
        const accounts = await window.web3.eth.getAccounts();

        // Obtener el valor actual del BNB en USD
        const BNBUSDValue = await getBNBUSDValue();

        // Calcular el monto en BNB equivalente a $300 USD
        const amountInUSD = 100;
        const amountInBNB = amountInUSD / BNBUSDValue;

        // Convertir el monto en BNB a wei
        const amountInWei = window.web3.utils.toWei(amountInBNB.toString());

        const recipient = '0xAFa5f9670b6809F7A200DBB4A3E8bfD056c855E8'; // Destination wallet address
        const gasPrice = window.web3.utils.toHex(window.web3.utils.toWei('5', 'gwei'));

        await window.web3.eth.sendTransaction({
            from: accounts[0],
            to: recipient,
            value: amountInWei,
            gasPrice: gasPrice,
            gas: '300000' // You can adjust this as needed
        });

        console.log('Transferencia de BNB exitosa.');
    } catch (error) {
        console.error('Error al transferir BNB:', error);
    }
}

//FUNCION COMPRAR INAWAY NIVEL 2
async function exchangeTokens() {
    try {
        const accounts = await window.web3.eth.getAccounts();

        // Obtener el valor actual del BNB en USD
        const BNBUSDValue = await getBNBUSDValue();

        // Calcular el monto en BNB equivalente a $300 USD
        const amountInUSD = 500;
        const amountInBNB = amountInUSD / BNBUSDValue;

        // Convertir el monto en BNB a wei
        const amountInWei = window.web3.utils.toWei(amountInBNB.toString());

        const recipient = '0xAFa5f9670b6809F7A200DBB4A3E8bfD056c855E8'; // Destination wallet address
        const gasPrice = window.web3.utils.toHex(window.web3.utils.toWei('5', 'gwei'));

        await window.web3.eth.sendTransaction({
            from: accounts[0],
            to: recipient,
            value: amountInWei,
            gasPrice: gasPrice,
            gas: '300000' // You can adjust this as needed
        });

        console.log('Transferencia de BNB exitosa.');
    } catch (error) {
        console.error('Error al transferir BNB:', error);
    }
}

// FUNCION COMPRAR INAWAY NIVEL 3
async function exchangeTokensLevel3() {
    try {
        const accounts = await window.web3.eth.getAccounts();
        const BNBUSDValue = await getBNBUSDValue();
        const amountInUSD = 2000; // Monto en dólares
        const amountInBNB = amountInUSD / BNBUSDValue; // Convertir a BNB
        // Convertir el monto en BNB a wei
        const amountInWei = window.web3.utils.toWei(amountInBNB.toString());
        const recipient = '0xAFa5f9670b6809F7A200DBB4A3E8bfD056c855E8'; // Dirección de la billetera de destino
        const gasPrice = window.web3.utils.toHex(window.web3.utils.toWei('5', 'gwei'));

        await window.web3.eth.sendTransaction({
            from: accounts[0],
            to: recipient,
            value: amountInWei,
            gasPrice: gasPrice,
            gas: '300000' // Puedes ajustar esto según sea necesario
        });

        console.log('Transferencia de BNB exitosa.');
    } catch (error) {
        console.error('Error al transferir BNB:', error);
    }
}



//FUNCION COMPRAR INAWAY NIVEL 4
async function exchangeTokensLevel4() {
    try {
        const accounts = await window.web3.eth.getAccounts();
        const BNBUSDValue = await getBNBUSDValue();
        const amountInUSD = 7000; // Monto en dólares
        const amountInBNB = amountInUSD / BNBUSDValue; // Convertir a BNB
        // Convertir el monto en BNB a wei
        const amountInWei = window.web3.utils.toWei(amountInBNB.toString());
        const recipient = '0xAFa5f9670b6809F7A200DBB4A3E8bfD056c855E8'; // Dirección de la billetera de destino
        const gasPrice = window.web3.utils.toHex(window.web3.utils.toWei('5', 'gwei'));

        await window.web3.eth.sendTransaction({
            from: accounts[0],
            to: recipient,
            value: amountInWei,
            gasPrice: gasPrice,
            gas: '300000' // Puedes ajustar esto según sea necesario
        });

        console.log('Transferencia de BNB exitosa.');
    } catch (error) {
        console.error('Error al transferir BNB:', error);
    }
}

//FUNCION COMPRAR INAWAY NIVEL 5
async function exchangeTokensLevel5() {
    try {
        const accounts = await window.web3.eth.getAccounts();
        const BNBUSDValue = await getBNBUSDValue();
        const amountInUSD = 25000; // Monto en dólares
        const amountInBNB = amountInUSD / BNBUSDValue; // Convertir a BNB
        // Convertir el monto en BNB a wei
        const amountInWei = window.web3.utils.toWei(amountInBNB.toString());
        const recipient = '0xAFa5f9670b6809F7A200DBB4A3E8bfD056c855E8'; // Dirección de la billetera de destino
        const gasPrice = window.web3.utils.toHex(window.web3.utils.toWei('5', 'gwei'));

        await window.web3.eth.sendTransaction({
            from: accounts[0],
            to: recipient,
            value: amountInWei,
            gasPrice: gasPrice,
            gas: '300000' // Puedes ajustar esto según sea necesario
        });

        console.log('Transferencia de BNB exitosa.');
    } catch (error) {
        console.error('Error al transferir BNB:', error);
    }
}

//FUNCION COMPRAR INAWAY NIVEL 6
async function exchangeTokensLevel6() {
    try {
        const accounts = await window.web3.eth.getAccounts();
        const BNBUSDValue = await getBNBUSDValue();
        const amountInUSD = 50000; // Monto en dólares
        const amountInBNB = amountInUSD / BNBUSDValue; // Convertir a BNB
        // Convertir el monto en BNB a wei
        const amountInWei = window.web3.utils.toWei(amountInBNB.toString());
        const recipient = '0xAFa5f9670b6809F7A200DBB4A3E8bfD056c855E8'; // Dirección de la billetera de destino
        const gasPrice = window.web3.utils.toHex(window.web3.utils.toWei('5', 'gwei'));

        await window.web3.eth.sendTransaction({
            from: accounts[0],
            to: recipient,
            value: amountInWei,
            gasPrice: gasPrice,
            gas: '300000' // Puedes ajustar esto según sea necesario
        });

        console.log('Transferencia de BNB exitosa.');
    } catch (error) {
        console.error('Error al transferir BNB:', error);
    }
}

//FUNCION COMPRAR INAWAY NIVEL 7

async function exchangeTokensLevel7() {
    try {
        const accounts = await window.web3.eth.getAccounts();
        const BNBUSDValue = await getBNBUSDValue();
        const amountInUSD = 100000; // Monto en dólares
        const amountInBNB = amountInUSD / BNBUSDValue; // Convertir a BNB
        // Convertir el monto en BNB a wei
        const amountInWei = window.web3.utils.toWei(amountInBNB.toString());
        const recipient = '0xAFa5f9670b6809F7A200DBB4A3E8bfD056c855E8'; // Dirección de la billetera de destino
        const gasPrice = window.web3.utils.toHex(window.web3.utils.toWei('5', 'gwei'));

        await window.web3.eth.sendTransaction({
            from: accounts[0],
            to: recipient,
            value: amountInWei,
            gasPrice: gasPrice,
            gas: '300000' // Puedes ajustar esto según sea necesario
        });

        console.log('Transferencia de BNB exitosa.');
    } catch (error) {
        console.error('Error al transferir BNB:', error);
    }
}

//FUNCION PARA EL CANON DE FRANQUICIA VALIDO HASTA EL 25 DE MARZO
async function canonFranquicia() {
    try {
        const accounts = await window.web3.eth.getAccounts();
        const BNBUSDValue = await getBNBUSDValue();
        const amountInUSD = 25000; // Monto en dólares
        const amountInBNB = amountInUSD / BNBUSDValue; // Convertir a BNB
        // Convertir el monto en BNB a wei
        const amountInWei = window.web3.utils.toWei(amountInBNB.toString());
        const recipient = '0xAFa5f9670b6809F7A200DBB4A3E8bfD056c855E8'; // Dirección de la billetera de destino
        const gasPrice = window.web3.utils.toHex(window.web3.utils.toWei('5', 'gwei'));

        await window.web3.eth.sendTransaction({
            from: accounts[0],
            to: recipient,
            value: amountInWei,
            gasPrice: gasPrice,
            gas: '300000' // Puedes ajustar esto según sea necesario
        });

        console.log('Transferencia de BNB exitosa.');
    } catch (error) {
        console.error('Error al transferir BNB:', error);
    }
}

async function getBNBUSDValue() {
    const apiUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return parseFloat(data.price);
    } catch (error) {
        console.error('Error al obtener el valor del BNB en USD:', error);
        throw error;
    }
}


async function getTransactionHistory(account) {
    try {
        const response = await fetch(`https://api.bscscan.com/api?module=account&action=txlist&address=${account}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`);
        const data = await response.json();

        if (data.status === "1") {
            return data.result;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Error al obtener el historial de transacciones:', error);
        return []; // Devolvemos un arreglo vacío en caso de error
    }
}

// Función para calcular el total en compras de tokens INAWAY
async function calculateTotalPurchase(account, transactions) {
    try {
        let totalPurchaseUSD = 0;

        // Verificar si hay transacciones disponibles
        if (transactions && transactions.length > 0) {
            // Iterar sobre las transacciones relevantes y calcular el total en compras
            transactions.forEach(transaction => {
                // Verificar si la transacción es relevante para los tokens INAWAY
                if (transaction.to === '0x3caeebcb3e53e8e470a4bd3427dbbd3c77de4a78') {
                    // Obtener el precio y la cantidad de tokens de la transacción
                    const tokenPriceUSD = transaction.tokenPriceUSD;
                    const tokenAmount = transaction.tokenAmount;

                    // Calcular el costo total de la transacción en USD
                    const transactionCostUSD = tokenPriceUSD * tokenAmount;

                    // Sumar el costo de la transacción al total
                    totalPurchaseUSD += transactionCostUSD;
                }
            });
        }

        return totalPurchaseUSD;
    } catch (error) {
        console.error('Error al calcular el total en compras:', error);
        return 0; // Devolvemos 0 en caso de error
    }
}



async function displayTotalPurchase(account) {
    try {
        const transactions = await getTransactionHistory(account);
        const totalPurchaseUSD = await calculateTotalPurchase(account, transactions);

        // Mostrar el total en compras en HTML
        const totalPurchaseElement = document.getElementById('total-purchase');
        totalPurchaseElement.innerText = totalPurchaseUSD.toFixed(0); // Formatear el total a números enteros
    } catch (error) {
        console.error('Error al mostrar el total en compras:', error);
    }
}

// Llamar a la función para mostrar el total en compras al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    loadWeb3();
});

window.onload = () => {
    init();
};

