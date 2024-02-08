export type Transaction = {
    block_height: string
    confirmations: number
    size: number
    time: string
    type: string
    inputValue: number
    outputValue: number
    fee: number
    inputs: [{ value: number, address: string }]
    outputs: [{ value: number, address: string }]
}

export type BlockInfo = {
    index: number
    fee: number
    time: string
    transactions: number
    size: number
    hash: string
}

export type TransactionID = string