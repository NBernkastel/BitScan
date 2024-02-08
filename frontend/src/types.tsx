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

export type TransactionID = string