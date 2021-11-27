require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space street cost situate coin hundred light army giggle'; 
let testAccounts = [
"0x29d8d7941f837c595dffbb69f30f6db4ab727d07a8d978912dbbc281f66683d7",
"0x33729afb3469b799308c7949e133cae8bc9d72e8d1bf1c254be260ccc7f52f2c",
"0xcff0545b2fd9fd6e409a5f65e6d798fc0e52f284efe5bc787293ed4854bac218",
"0xb261e7af6430227dfa5ab12258bc9b06983b9396ecf762efe3b1cf0cad5691c3",
"0x47c2013dcf025b0808912b7d205bdc9a633f7d851fa438f169bf2a3839fa5320",
"0xb0cc41ea4608f5ac179a17c5ef2980d945680485fed1b1165924a9e6bdb2b5aa",
"0xfab1a0e5a3682dcf05c9ae636e722ae8f93ab0d9db62d54398ec755215798ac5",
"0x8349ed9f8795f01a54bceed796800dadee82bd198aea3bb1718cbb0fe7492bcd",
"0xe83055546d4d49cec7cf2b22821d8c9113d9ec4d834b86d25d9f17570a9e68fc",
"0xed7a64e5cb0f1ab661e2faaab7b404348a4acd46b4b7b02166477d664b57f8ea"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

