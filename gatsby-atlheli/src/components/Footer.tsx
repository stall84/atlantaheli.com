import React from 'react'

interface Props {

}

const Footer: React.FC = (props: Props) => {
    return (
        <footer>
            <p>North Atlanta Executive Air Services Is An FAA Certified Air Carrier</p>
            <p>&copy; {new Date().getFullYear()} North Atlanta Executive Air Services - All Rights Reserved</p>
        </footer>
    )
}

export default Footer
