"use client"

import { useSession } from "next-auth/react";
import { useState, useRef } from "react";

import { Worldbet } from "@/app/lib/cnvWorldbetToIPA";

import { PronunciationFeedback } from "@/app/lib/types/PronunciationFeedback";


import style from "./page.module.scss";
import Image from "next/image";
import PronunciationDisplay from "@/app/components/PronunciationDisplay";
import CorrectPronunciationDisplay from "@/app/components/CorrectPronunciationDisplay";

import { blobToBase } from "@/app/lib/blobToBase";
import { getFeedback } from "@/app/lib/getFeedback";
import { getPronunciationFeedback } from "@/app/lib/getPronunciationFeedback";


import Link from "next/link";
import { sound } from "@/app/lib/sound";
import { OndokusanCooyright } from "@/app/components/OndokusanCooyright";

export default function Page() {
  const { data: session } = useSession();
  const [page, setPage] = useState(0);
  const [targetWord, setTargetWord] = useState<string>("shell");
  const [wordARes, setWordARes] = useState<PronunciationFeedback[]>([]);
  const [wordBRes, setWordBRes] = useState<PronunciationFeedback[]>([]);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startRecording = async(word: string): Promise<void> => {
    if (!session) return;

    setError(null);

    try {
      setTargetWord(word);
      setIsRecording(true);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      audioChunks.current = [];

      mediaRecorder.current.ondataavailable = (event: BlobEvent) => {
        audioChunks.current.push(event.data);
      };
      mediaRecorder.current.start();
      mediaRecorder.current.onstop = async() => {
        try {

          setIsProcessing(true);
  
          const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
  
          const base64Audio = await blobToBase(audioBlob);
          const feedback = await getFeedback(base64Audio, targetWord, session.user.id);
  
          console.log("フィードバック", feedback);
  
          const IPAFeedback = Worldbet.cnvWorldbetToIPA(feedback.recogPhonSym);
          
          const PronunciationFeedback = getPronunciationFeedback(IPAFeedback, feedback.recogErrata);

          if(word === "law") {
            setWordARes(PronunciationFeedback);
          } else if (word === "walk") {
            setWordBRes(PronunciationFeedback);
          }
  
        } catch (err) {
          console.error('録音の処理に失敗:', err);
          setError('録音の処理に失敗しました。');
        } finally {
          setIsRecording(false);
          setIsProcessing(false);
        }

      }
    } catch (err) {
      console.error('録音の開始に失敗:', err);
      setError('録音に失敗しました。ブラウザ上でマイクの使用が許可されているか確認してください。');
    }
  }

  const stopRecording = async(): Promise<void> => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
    }
    setIsRecording(false);
  };

  const playExList = () => {
    sound.lawBallWalkBought.play();
  }

  const playWordA = () => {
    sound.law.play();
  }

  const playWordB = () => {
    sound.walk.play();
  }

  if (session) {

    return (
      <div className={style.center}>
        <div className={style.lesson_title}>lesson 9 /ɔ:/</div>

        <section>

          {page === 0 && 
            <div>
              {/* <h2>Page 0</h2> */}
              <div>今回は/ɔ:/の発音について学びます！</div>
              <button className={style.next_btn} onClick={() => setPage(prev => prev + 1)}>
                <Image src="/assets/lesson_img/next_btn.png" width={50} height={50} alt="Next"/>
              </button>
            </div>
          }

          {page === 1 && 
            <div>
              <p>lawとlowはどちらも「ロー」と発音すると思っていませんか？実際には、英語では母音が違っています。</p>
              <p>今回はlawの方で用いられる母音/ɔ:/について学習します！</p>
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
                /ɔ:/の発音
              </div>

              <div>
                <p>使われている単語：law, ball, walk, boughtなど</p>

                <button className={style.audio_btn} onClick={playExList}>
                  <Image src="/assets/lesson_img/play_audio.png" width={50} height={50} alt="Audio"/>
                </button>
                <OndokusanCooyright />

                <p>ゆで卵を入れた時のようなイメージで口の中に大きな空間を作り、低い音で「オー」と強く響かせて発音します。</p>
                <br />
                <p>口の中の空間は広くしつつ、唇は丸くして開口部は大きくするのがポイントです。「オゥ」のようにウの音を入れないようにしましょう！</p>
              </div>

              <figure className="mt-[20px] inline-block w-[80%]">
                <Image src="/assets/lesson_img/o.png" className="" width={498} height={544} alt="o"/>
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
                lawを発音してみよう！
              </div>

              <button className={style.audio_btn} onClick={playWordA}>
                <Image src="/assets/lesson_img/play_audio.png" width={50} height={50} alt="Audio"/>
              </button>
              <OndokusanCooyright />
              
              <p>※ɔと表示されていますが、ɔ:と同じ意味です。</p>

              <div>お手本</div>
              <CorrectPronunciationDisplay pronunciation={Worldbet.cnvWorldbetToIPA(['l', '>'])}/>
              <div>あなたの発音</div>
              <PronunciationDisplay pronunciation={wordARes} />

              <button className="border border-solid rounded-md p-2 bg-green-300 hover:bg-green-400" onClick={() => isRecording ? stopRecording() : startRecording("law")}>
            <p>{isRecording ? '録音停止' : '録音スタート'}</p>
            </button>

            <section>
                <p>{isProcessing && '...処理中'}</p>
                <p>{error && `エラー: ${error}`}</p>
            </section>

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
                walkを発音してみよう！
              </div>

              <button className={style.audio_btn} onClick={playWordB}>
                <Image src="/assets/lesson_img/play_audio.png" width={50} height={50} alt="Audio"/>
              </button>
              <OndokusanCooyright />

              <p>※ɔと表示されていますが、ɔ:と同じ意味です。</p>

              <div>お手本</div>
              <CorrectPronunciationDisplay pronunciation={Worldbet.cnvWorldbetToIPA(['w', '>', 'k'])}/>
              <div>あなたの発音</div>
              <PronunciationDisplay pronunciation={wordBRes} />

            <button className="border border-solid rounded-md p-2 bg-green-300 hover:bg-green-400" onClick={() => isRecording ? stopRecording() : startRecording("walk")}>
            <p>{isRecording ? '録音停止' : '録音スタート'}</p>
            </button>

            <section>
                <p>{isProcessing && '...処理中'}</p>
                <p>{error && `エラー: ${error}`}</p>
            </section>

              <Link href="/lesson/9/completed_ket" className={style.next_btn}>
                <Image src="/assets/lesson_img/next_btn.png" width={50} height={50} alt="Next"/>
              </Link>
              <button className={style.back_btn} onClick={() => setPage(prev => prev - 1)}>
                <Image src="/assets/lesson_img/back_btn.png" width={50} height={50} alt="Back"/>
              </button>
            </div>
          }

        </section>

      </div>
    )
  }
}