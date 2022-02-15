import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { HeroContainer, HeroContent, HeroItems,HeroH1, HeroP, HeroButton} from './HeroElements'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <HeroContainer>
                <Navbar  toggle={toggle} />
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <HeroContent>
                    <HeroItems>
                        <HeroH1>GREATEST PIZZA EVER</HeroH1>
                        <HeroP>Ready In 60 Seconds</HeroP>
                        <HeroButton>Place Order</HeroButton>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </>
    )
}
export default Hero