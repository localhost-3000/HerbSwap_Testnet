import { Token } from '@pancakeswap/sdk'
import { bscTokens } from 'config/constants/tokens'
import { bscWarningTokens } from 'config/constants/warningTokens'

const { pokemoney, free, safemoon } = bscWarningTokens

interface WarningTokenList {
  [key: string]: Token
}

const SwapWarningTokens = <WarningTokenList>{
  safemoon,
  pokemoney,
  free,
}

export default SwapWarningTokens
