import {
  MetaResponse,
  QuoteResponse,
  RangoClient,
  SwapResponse,
} from 'rango-sdk-basic'
import { save } from './utils/save'

import dotenv from 'dotenv'
dotenv.config()

const rangoClient = new RangoClient(process.env.API_KEY as string)

rangoClient.meta().then((meta: MetaResponse) => {
  save(JSON.stringify(meta, null, 2), `${__dirname}/data/meta.json`)
})

rangoClient
  .quote({
    from: { blockchain: 'FANTOM', symbol: 'FTM', address: null },
    to: { blockchain: 'BSC', symbol: 'BNB', address: null },
    amount: '100000000000000000000', // 100 FTM
  })
  .then((quote: QuoteResponse) => {
    save(JSON.stringify(quote, null, 2), `${__dirname}/data/quote.json`)
  })

rangoClient
  .swap({
    from: { blockchain: 'FANTOM', symbol: 'FTM', address: null },
    to: { blockchain: 'BSC', symbol: 'BNB', address: null },
    amount: '100000000000000000000',
    fromAddress: '0xeb2629a2734e272bcc07bda959863f316f4bd4cf',
    toAddress: '0xeb2629a2734e272bcc07bda959863f316f4bd4cf',
    disableEstimate: false,
    slippage: '1.0',
    referrerAddress: null,
    referrerFee: null,
  })
  .then((swap: SwapResponse) => {
    save(JSON.stringify(swap, null, 2), `${__dirname}/data/swap.json`)
  })
