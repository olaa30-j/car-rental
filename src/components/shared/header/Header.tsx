import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Logo from '../Logo'
import Navbar from './Navbar'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className='w-full'>
            <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4'>
                {/* Logo */}
                <div className='shrink-0'>
                    <Logo />
                </div>

                {/* Desktop Navbar - hidden on mobile */}
                <div className='hidden lg:block'>
                    <Navbar />
                </div>

                {/* Contact Info + Mobile Menu Button */}
                <div className='flex items-center gap-3'>
                    {/* Contact Info */}
                    <div className="flex items-start gap-2 sm:gap-3">
                        <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-primary">
                            <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
                        </div>
                        <div className="hidden sm:flex flex-col min-w-0">
                            <p className="text-xs text-gray-500">
                                Need help?
                            </p>
                            <p className="text-sm sm:text-base font-semibold break-words whitespace-nowrap">
                                +996 247-1680
                            </p>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className='lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className='w-6 h-6' />
                        ) : (
                            <Menu className='w-6 h-6' />
                        )}
                    </button>
                </div>
            </section>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className='lg:hidden border-t border-gray-200 bg-white shadow-md'>
                    <div className='container mx-auto' style={{paddingTop: '24px'}}>
                        <Navbar />
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header