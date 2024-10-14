"use client"

import { SrhiData } from '@/app/lib/types/SrhiData';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import Question from '@/app/components/Question';
import { useState } from 'react';
import ToTopBtn from '@/app/components/ToTopBtn';

export default function Page() {
    const { data: session } = useSession();
    const [sentMsg, setSebtMsg] = useState<string>('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm<SrhiData>();

    const onSubmit: SubmitHandler<SrhiData> = async (data) => {

        try {

            const formattedData = {
                srhi: data
            }

            // console.log('data:', formattedData);

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/srhi`, {
                method: 'POST',
                body: JSON.stringify(formattedData),
            })

            if (!res.ok) throw new Error('SRHIの投稿に失敗');

            setSebtMsg('送信しました！記入ありがとうございます！');
            reset();

        } catch (err) {
            console.log('SRHIの投稿に失敗', err);

        } finally {
        }
    }

    
    
    if (!session) return <><h1>ロード中,,,（画面が切り替わらない場合はログインしているか確認してください）</h1></>
    
    register('userId', { value: session.user.id });

    return (
        <>
            <section className='flex flex-col items-center'>

                <h1 className='text-xl mt-2'>報告フォーム</h1>
                <p className='mb-2 text-red-400'>このフォームは１日１回入力してください</p>

                <form onSubmit={handleSubmit(onSubmit)} className='w-[95%]'>

                    <Question label="Q1 発音練習アプリケーションは自動的（無意識的）にやっている" name="q1" register={register} />
                    {errors.q1 && <p className="text-red-500">必須項目です</p>}
                    <Question label="Q2 発音練習アプリケーションは思い出さなくても，やれる" name="q2" register={register} />
                    {errors.q2 && <p className="text-red-500">必須項目です</p>}
                    <Question label="Q3 発音練習アプリケーションは意識して考えることなくやっている" name="q3" register={register} />
                    {errors.q3 && <p className="text-red-500">必須項目です</p>}
                    <Question label="Q4 発音練習アプリケーションはやらないようにするには，我慢する必要がある" name="q4" register={register} />
                    {errors.q4 && <p className="text-red-500">必須項目です</p>}
                    <Question label="Q5 発音練習アプリケーションは気がついたら始めていることがある" name="q5" register={register} />
                    {errors.q5 && <p className="text-red-500">必須項目です</p>}
                    <Question label="Q6 発音練習アプリケーションをやらないことは考えられない" name="q6" register={register} />
                    {errors.q6 && <p className="text-red-500">必須項目です</p>}
                    <Question label="Q7 発音練習アプリケーションはやり方をいちいち考える必要がない" name="q7" register={register} />
                    {errors.q7 && <p className="text-red-500">必須項目です</p>}

                    <div className="flex flex-col items-center justify-center mb-4">
                        <button type="submit" className="bg-green-300 px-6 py-2 rounded-md hover:bg-green-400">送信</button>
                        {sentMsg && <p className="text-green-500">{sentMsg}</p>}
                        <ToTopBtn />
                    </div>
                
                </form>

            </section>
        </>
    )
}