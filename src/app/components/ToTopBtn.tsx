import Link from 'next/link'

export default function ToTopBtn() {
    return (
        <Link href="/" className="flex justify-center">
            <p className="bg-blue-300 hover:bg-blue-400 p-2 rounded-md my-2">TOPへ戻る</p>
        </Link>
    )
}