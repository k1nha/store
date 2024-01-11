import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn('rounded-full p-2', className)}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    )
  },
)

IconButton.displayName = 'IconButton'

export { IconButton }
