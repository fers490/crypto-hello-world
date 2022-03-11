import { ethers } from 'ethers';

export const useProvider = (provider) => {
    return new ethers.providers.Web3Provider(provider)
}

export const useContract = (contractAddr, abi, providerOrSigner) => {
    return new ethers.Contract(contractAddr, abi, providerOrSigner);
}

