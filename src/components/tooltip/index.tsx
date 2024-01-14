'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

export function ToolTip({
  description,
  trigger,
}: {
  description: string
  trigger: string
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className='rounded-md border px-2 text-xs transition-all duration-300 hover:bg-slate-100'>
          {trigger}
        </TooltipTrigger>
        <TooltipContent>
          <p className='text-wrap max-w-xl'>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
