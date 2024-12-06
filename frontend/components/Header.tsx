import Link from 'next/link'
import Notifications from './Notifications'

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Tracking App</Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link href="/">Dashboard</Link></li>
            <li><Link href="/tracking">Tracking</Link></li>
            <li><Link href="/settings">Settings</Link></li>
            <li><Notifications /></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

