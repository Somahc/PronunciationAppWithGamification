import Link from 'next/link'

export default function ToSrhiBtn() {
    return (
        <>        
            <Link href="/srhi" className="flex flex-col items-center justify-center">
                <p className="bg-blue-300 hover:bg-blue-400 p-4 rounded-md my-2">フォーム記入</p>
            </Link>
            <p className=''>フォーム記入は<span className='text-red-400'>一日一回必ず</span>行ってください。</p>
            <p className='mb-4'>ご協力お願いします！</p>
        </>

    )
}