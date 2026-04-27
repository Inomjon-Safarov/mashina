import Link from 'next/link'

export default function Links() {
  return (
    <div>
      <div className="flex items-center justify-around py-4 bg-red-600">
        <Link href={'#'}>
          <div className="flex items-center justify-center p-4 border-4 rounded-2xl"><h1>Asosiylar</h1></div>
        </Link>
        <Link href={'#'}>
          <div className="flex items-center justify-center p-4 border-4 rounded-2xl"><h1>Asosiylar</h1></div>
        </Link> <Link href={'#'}>
          <div className="flex items-center justify-center p-4 border-4 rounded-2xl"><h1>Asosiylar</h1></div>
        </Link> <Link href={'#'}>
          <div className="flex items-center justify-center p-4 border-4 rounded-2xl"><h1>Asosiylar</h1></div>
        </Link> <Link href={'#'}>
          <div className="flex items-center justify-center p-4 border-4 rounded-2xl"><h1>Asosiylar</h1></div>
        </Link>
      </div>
    </div>
  )


}