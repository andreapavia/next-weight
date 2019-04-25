import { 
    FaPlusCircle,
    FaChevronLeft
 } from 'react-icons/fa'
import Link from 'next/link'

export const Plus = () => {
    return (
        <div className="icon icon--plus">
            <Link href="/add-weight">
                <FaPlusCircle className="icon__svg"/>
            </Link>
        </div>
    )
}

export const ChevronLeft = () => {
    return (
        <div className="icon">
            <Link href="/">
                <FaChevronLeft className="icon__svg"/>
            </Link>
        </div>
    )
}