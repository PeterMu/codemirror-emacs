#!/usr/bin/env node

import { build } from '@marijn/buildtool'
import { resolve } from 'path'

build(resolve('src/index.ts'), { pureTopCalls: false }).then(result => {
  if (!result) process.exit(1)
})
