require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strong crawl maze code gentle light army gasp'; 
let testAccounts = [
"0x07f7555b614cdb9fe2199946df64aec911c66b60e91727e26b058dcaaae16512",
"0x55901df2c657b971f6999a03851673d1760914999ff4b237c59aa2d39333916e",
"0x27d3db12561bec4497461e2356e59fffa6c554e19e5e1c936186818d046d93c7",
"0x4ef3ee0565ea9666a5247e5b01a20eb966069a0daee228e1e0abbda620dd91b5",
"0x64a2e5efb67b8747533bd2e1567debce25c4cf0ebde36bac6f70dd66622ed1dc",
"0x372f8f25d72825be759e700fa38e19efb7f1f47eeea7c0a1e14678ec191beb35",
"0xe4f01069abb275ed5ef3eac9d875f2f8d67a247571cddf73f40c0b0f66b62623",
"0xf5de6d28d695fd8caa4a684e68e2836fd473e7e0876572bfe15b6cc1c9eedc0e",
"0x3cbbc42d6b539c1e99d86788f8fb677f22660771398bb356345c82f31ab11248",
"0xdee68e68283613d91d1a5fb58bf4b2ae56d70542e0f51d0f118a46aeb9f9dc69"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


