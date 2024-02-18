export type FullTransaction = {
    block_height: string
    confirmations: string
    size: number
    time: string
    type: string
    inputValue: number
    outputValue: number
    fee: number
    inputs: [{ value: number, address: string }]
    outputs: [{ value: number, address: string }]
}

export type Transaction = {
    index: number,
    hash: string,
    time: number,
    amount: number
}

export type BlockInfo = {
    index: number
    fee: number
    time: string
    transactions: number
    size: number
    hash: string
}

export type Block = {
    index: number
    fee: number
    hash: string
    time: string
    transactions: [{"index":number,"hash":string,"time":number,"amount":number}]
    size: number
    version: number
    bits: number
    nonce: number
    merkle_root: string
    previous_hash: string
    main_chain: boolean
    reward: number
}

export type TransactionID = string
export type BlockIndex = string