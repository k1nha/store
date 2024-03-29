import { SVGProps } from 'react'

export function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      focusable='false'
      aria-hidden='true'
      viewBox='0 0 21 20'
      width='20'
      height='18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='logos:google-icon' clipPath='url(#clip0_265_2539)'>
        <path
          id='Vector'
          d='M20.2616 10.1871C20.2616 9.36767 20.1951 8.76973 20.0512 8.14966H10.6946V11.848H16.1867C16.076 12.7671 15.4781 14.1512 14.1493 15.0813L14.1307 15.2051L17.0891 17.4969L17.294 17.5174C19.1764 15.7789 20.2616 13.221 20.2616 10.1871Z'
          fill='#4285F4'
        ></path>
        <path
          id='Vector_2'
          d='M10.6947 19.9312C13.3854 19.9312 15.6442 19.0453 17.2941 17.5173L14.1494 15.0812C13.3079 15.6681 12.1784 16.0777 10.6947 16.0777C8.05932 16.0777 5.8226 14.3393 5.02527 11.9365L4.9084 11.9464L1.83222 14.3271L1.79199 14.439C3.43077 17.6944 6.79695 19.9312 10.6947 19.9312Z'
          fill='#34A853'
        ></path>
        <path
          id='Vector_3'
          d='M5.02526 11.9366C4.81488 11.3165 4.69313 10.6521 4.69313 9.96559C4.69313 9.27902 4.81488 8.61467 5.01419 7.9946L5.00862 7.86254L1.89389 5.4436L1.79198 5.49208C1.11656 6.84299 0.729004 8.36002 0.729004 9.96559C0.729004 11.5712 1.11656 13.0881 1.79198 14.439L5.02526 11.9366Z'
          fill='#FBBC05'
        ></path>
        <path
          id='Vector_4'
          d='M10.6947 3.85336C12.566 3.85336 13.8283 4.66168 14.548 5.33718L17.3605 2.59107C15.6332 0.985496 13.3854 0 10.6947 0C6.79695 0 3.43077 2.23672 1.79199 5.49214L5.01421 7.99466C5.8226 5.59183 8.05932 3.85336 10.6947 3.85336Z'
          fill='#EB4335'
        ></path>
      </g>
      <defs>
        <clipPath id='clip0_265_2539'>
          <rect
            width='19.542'
            height='20'
            fill='white'
            transform='translate(0.729004)'
          ></rect>
        </clipPath>
      </defs>
    </svg>
  )
}

export function LoadingSpinner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-loader-2 animate-spin '
    >
      <path d='M21 12a9 9 0 1 1-6.219-8.56' />
    </svg>
  )
}
