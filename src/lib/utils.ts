<<<<<<< HEAD
import { type ClassValue, clsx } from 'clsx'
=======
﻿import { type ClassValue, clsx } from 'clsx'
>>>>>>> 8c488c2 (fix: add missing src/lib/utils.ts)
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
