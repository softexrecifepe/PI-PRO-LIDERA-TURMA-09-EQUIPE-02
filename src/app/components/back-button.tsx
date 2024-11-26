import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export function BackButton({href, onclick}: {href: string, onclick?: () => void}){
    return(
        <Link href={href} onClick={onclick}>
            <FontAwesomeIcon icon={faChevronLeft} type='button'  className='size-10'/>
        </Link>
    )
}