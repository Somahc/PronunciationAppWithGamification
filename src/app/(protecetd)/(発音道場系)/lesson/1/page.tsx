"use client"

import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

import style from "./page.module.scss";
import Image from "next/image";
import PronunciationDisplay from "@/app/components/PronunciationDisplay";

export default function Page() {
  const { data: session } = useSession();
  const [page, setPage] = useState(0);
  const [targetWord, setTargetWord] = useState<string>("");
  const [responsePronunciation, setResponsePronunciation] = useState<string[]>([]);
  const sheAudio = new Audio("/assets/lesson_audio/she.mp3");

  const handleSubmit = async (targetWord: string) => {
    const result = await fetch("")
  }

  const playShe = () => {
    sheAudio.play();
  }

  if (session) {
    return (
      <div className={style.inner}>
        <div className={style.center}>
          <div className={style.lesson_title}>lesson 1 /ʃ/と/s/</div>

          <section>
            {page === 0 && 
              <div>
                {/* <h2>Page 0</h2> */}
                <div>SheとSeeの発音の違いを説明できますか？</div>
                <div>今回は/ʃ/と/s/の発音を練習してみましょう！</div>
                <button className={style.next_btn} onClick={() => setPage(prev => prev + 1)}>
                  <Image src="/assets/lesson_img/next_btn.png" width={50} height={50} alt="Next"/>
                </button>
              </div>
            }
            {page === 1 && 
              <div>
                <div className={style.section_ttl}>動画で概要を確認してみましょう！</div>
                <div className={style.youtube_video}>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CYXyJ5QC_rY?si=s7RaN07EuUayc7bY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <button className={style.next_btn} onClick={() => setPage(prev => prev + 1)}>
                  <Image src="/assets/lesson_img/next_btn.png" width={50} height={50} alt="Next"/>
                </button>
                <button className={style.back_btn} onClick={() => setPage(prev => prev - 1)}>
                  <Image src="/assets/lesson_img/back_btn.png" width={50} height={50} alt="Back"/>
                </button>
              </div>
            }
            {page === 2 && 
              <div>
                <div className={style.section_ttl}>
                  /ʃ/の発音
                </div>

                <div>
                  /ʃ/は”sh”の音。小声で「しーっ！静かに！」と注意する時の音に似ています。
                  <br />
                  舌の前半分を口の天井に近づけて強く息を出して発音します。下顎を少し前に出すのがコツ。
                </div>

                <figure className={style.sh_img}>
                  <Image src="/assets/lesson_img/sh.png" width={150} height={193} alt="sh"/>
                </figure>

                <button className={style.next_btn} onClick={() => setPage(prev => prev + 1)}>
                  <Image src="/assets/lesson_img/next_btn.png" width={50} height={50} alt="Next"/>
                </button>
                <button className={style.back_btn} onClick={() => setPage(prev => prev - 1)}>
                  <Image src="/assets/lesson_img/back_btn.png" width={50} height={50} alt="Back"/>
                </button>
              </div>
            }

            {page === 3 &&
              <div>
                <div className={style.section_ttl}>
                  Sheを発音してみよう！
                </div>

                <button className={style.audio_btn} onClick={playShe}>
                  <Image src="/assets/lesson_img/play_audio.png" width={50} height={50} alt="Audio"/>
                </button>

                <PronunciationDisplay pronunciation={['s', 'a', 'i', 'k', 'o']}/>
                <PronunciationDisplay pronunciation={['s', 'a', 'i', 'k', 'o']}/>

                <button className={style.next_btn} onClick={() => setPage(prev => prev + 1)}>
                  <Image src="/assets/lesson_img/next_btn.png" width={50} height={50} alt="Next"/>
                </button>
                <button className={style.back_btn} onClick={() => setPage(prev => prev - 1)}>
                  <Image src="/assets/lesson_img/back_btn.png" width={50} height={50} alt="Back"/>
                </button>
              </div>
            }

            {page === 4 &&
              <div>
                <div className={style.section_ttl}>
                  レッスン/ʃ/と/s/　完了！
                </div>
                <button className={style.back_btn} onClick={() => setPage(prev => prev - 1)}>
                  <Image src="/assets/lesson_img/back_btn.png" width={50} height={50} alt="Back"/>
                </button>
              </div>
            }
          </section>

        </div>
      </div>
    )
  }
}