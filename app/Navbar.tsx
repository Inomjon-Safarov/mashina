import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function Navbar() { 	
	return (
		<nav className="flex items-center justify-between py-6">
			<div className="flex items-center gap-4">
				<img
					className='h-12 w-auto object-contain'
					src="https://cdn.vectorstock.com/i/500p/51/20/rolls-royce-brand-logo-vector-46135120.jpg"
					alt="Logo"
				/>
				<span className="font-serif text-xl font-bold hidden md:block text-gray-800">Rolls-Royce</span>
			</div>

			<div className="flex-1 max-w-md mx-8">
				<Input className="w-full rounded-full bg-gray-100 border-none" placeholder="Mashinalarni qidirish... 🔎" />
			</div>

			<Button asChild className="rounded-full px-8 bg-gray-900 hover:bg-indigo-700">
				<Link href="/login">Login</Link>
			</Button>
		</nav>
	)
}