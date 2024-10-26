// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold hover:text-cyan-300">NextGen Creations</h3>
            <p className="text-gray-400 hover:text-white">Copyright © {new Date().getFullYear()} All Rights Reserved</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <Link href="https://www.facebook.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.67,0H1.33A1.33,1.33,0,0,0,0,1.33V22.67A1.33,1.33,0,0,0,1.33,24H12.79V14.67H9.8V11H12.79V8.5c0-3,1.83-4.6,4.5-4.6a18.42,18.42,0,0,1,2.67.23v3H17.5c-1.4,0-1.67.67-1.67,1.64V11H19.5l-.67,3.67H15.83V24h6.84A1.33,1.33,0,0,0,24,22.67V1.33A1.33,1.33,0,0,0,22.67,0Z"/>
                </svg>
            </Link>

            <Link href="https://www.twitter.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.44,4.83a9.21,9.21,0,0,1-2.63.72A4.56,4.56,0,0,0,22.84,3.4a9.09,9.09,0,0,1-2.89,1.1,4.54,4.54,0,0,0-7.73,4.13A12.87,12.87,0,0,1,1.64,3.15a4.51,4.51,0,0,0,1.4,6.06,4.52,4.52,0,0,1-2.06-.57v.06a4.53,4.53,0,0,0,3.64,4.44,4.52,4.52,0,0,1-2.05.08,4.54,4.54,0,0,0,4.24,3.15A9.09,9.09,0,0,1,.68,19.54,12.79,12.79,0,0,0,7.05,21.5c8.46,0,13.09-7,13.09-13.07,0-.2,0-.39,0-.58A9.29,9.29,0,0,0,24,4.56a9.42,9.42,0,0,1-2.56.7Z"/>
                </svg>
            </Link>

            <Link href="https://www.linkedin.com"  target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23,0H1.77A1.76,1.76,0,0,0,0,1.75V22.25A1.76,1.76,0,0,0,1.77,24H22.23A1.76,1.76,0,0,0,24,22.25V1.75A1.76,1.76,0,0,0,22.23,0ZM7.1,20.49H3.64V9H7.1ZM5.37,7.66A2.06,2.06,0,1,1,7.43,5.6,2.07,2.07,0,0,1,5.37,7.66ZM20.49,20.49H17V14.91c0-1.33-.48-2.23-1.68-2.23A1.82,1.82,0,0,0,13.61,14c0,.08,0,.17,0,.25V20.49H10.15V9H13.5v1.57A3.72,3.72,0,0,1,16.58,9c2.44,0,4.27,1.59,4.27,5V20.49Z"/>
                </svg>
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            Designed by <span className="font-bold hover:text-cyan-300 transition-colors">Shehreen</span>
          </p>
          <nav className="mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors mx-4">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors mx-4">Terms of Service </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors mx-4">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
