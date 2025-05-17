import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Pikanami Recipees</h2>
            <p className="text-gray-300">
              Discover delicious, easy-to-make recipes for every occasion. Join
              our community of food lovers and start cooking today!
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition">
                    Home
                </Link>
              </li>
              <li>
                <Link href="/recipes"  className="text-gray-300 hover:text-blue-400 transition">
                    Recipes
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition">
                    About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition">
                    Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact and Social Media */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-2">
              Email:{" "}
              <a
                href="mailto:support@pikanamirecipees.com"
                className="text-blue-400 hover:underline"
              >
                support@pikanamirecipees.com
              </a>
            </p>
            <div className="flex justify-center md:justify-end space-x-4 mt-4">
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-gray-300 hover:text-blue-400"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-gray-300 hover:text-blue-400"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.227-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.81.227 1.792 2.222.072 5.052.014 6.332 0 6.741 0 12c0 5.259.014 5.668.072 6.948 1.72 2.83 3.738 4.825 6.948 5.052C8.332 23.986 8.741 24 12 24c5.259 0 5.668-.014 6.948-.072 3.21-.227 5.228-2.222 6.948-5.052.058-1.28.072-1.689.072-6.948 0-5.259-.014-5.668-.072-6.948-1.72-2.83-3.738-4.825-6.948-5.052C15.668.014 15.259 0 12 0z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-gray-300 hover:text-blue-400"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Pikanami Recipees. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}