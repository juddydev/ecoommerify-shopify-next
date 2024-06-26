import Link from 'next/link'

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'Collections', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          {
            navigation.map((item, i) => (
              <div key={i} className="px-6 py-2">
                <a href={item.href} className="text-gray-500 hover:text-gray-900 transition-color duration-300">
                  {item.name}
                </a>
              </div>
            ))
          }
        </nav>
        <p className="mt-8 text-center text-gray-400">&copy; 2022 Rocky Nguyen. All rights reserved.</p>
      </div>
    </footer>
  )
}
