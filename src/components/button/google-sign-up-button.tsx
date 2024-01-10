import { GoogleIcon } from '@/shared/icon'
import { Button } from '../ui/button'

export function GoogleSignUpButton() {
  return (
    <Button className='flex items-center gap-4 w-72 py-5 bg-white text-black hover:bg-gray-100 border'>
      <GoogleIcon />
      Registrar-se com Google
    </Button>
  )
}
