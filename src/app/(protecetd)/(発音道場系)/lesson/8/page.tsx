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

          if(word === "cut") {
            setWordARes(PronunciationFeedback);
          } else if (word === "luck") {
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
    sound.cutCupHutLuckAudio.play();
  }

  const playWordA = () => {
    sound.cutAudio.play();
  }

  const playWordB = () => {
    sound.luckAudio.play();
  }

  if (session) {

    return (
      <div className={style.center}>
        <div className={style.lesson_title}>lesson 6 /ʌ/</div>

        <section>

          {page === 0 && 
            <div>
              {/* <h2>Page 0</h2> */}
              <div>今回は/ʌ/の発音について学びます！</div>
              <button className={style.next_btn} onClick={() => setPage(prev => prev + 1)}>
                <Image src="/assets/lesson_img/next_btn.png" width={50} height={50} alt="Next"/>
              </button>
            </div>
          }

          {page === 1 && 
            <div>
              <p>実は英語の「ア」は１つではなく、いくつか種類があります。今回はそのうち、「暗いア」を扱います！</p>

              <iframe width="100%" src="https://www.youtube.com/embed/2Hlk3CPYiHA?si=mnW0XNNAKpZmSlly" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              
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
                /ʌ/の発音
              </div>

              <div>
                <p>使われている単語：cut, cup, hut, luckなど</p>

                <button className={style.audio_btn} onClick={playExList}>
                  <Image src="/assets/lesson_img/play_audio.png" width={50} height={50} alt="Audio"/>
                </button>
                <OndokusanCooyright />

                <p>日本語の「ア」よりややあごを閉じ、喉の奥の方で音を出して発音する音です。</p>
                <br />
                <p>短めにキレ良く発音するのがコツです。</p>
              </div>

              <figure className={style.sh_img}>
                <Image src="/assets/lesson_img/kuraiA.jpg" width={1200} height={628} alt="a"/>
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
                cutを発音してみよう！
              </div>

              <button className={style.audio_btn} onClick={playWordA}>
                <Image src="/assets/lesson_img/play_audio.png" width={50} height={50} alt="Audio"/>
              </button>
              <OndokusanCooyright />
              

              <div>お手本</div>
              <CorrectPronunciationDisplay pronunciation={Worldbet.cnvWorldbetToIPA(['k', '^', 't'])}/>
              <div>あなたの発音</div>
              <PronunciationDisplay pronunciation={wordARes} />

              <button onClick={() => isRecording ? stopRecording() : startRecording("cut")}>
                {isRecording ? '録音停止' : '録音スタート'}<br />
                {isProcessing && '...処理中'}<br />
                {error && `エラー: ${error}`}
              </button>

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
                luckを発音してみよう！
              </div>

              <button className={style.audio_btn} onClick={playWordB}>
                <Image src="/assets/lesson_img/play_audio.png" width={50} height={50} alt="Audio"/>
              </button>
              <OndokusanCooyright />

              <div>お手本</div>
              <CorrectPronunciationDisplay pronunciation={Worldbet.cnvWorldbetToIPA(['l', '^', 'k'])}/>
              <div>あなたの発音</div>
              <PronunciationDisplay pronunciation={wordBRes} />

              <button onClick={() => isRecording ? stopRecording() : startRecording("luck")}>
                {isRecording ? '録音停止' : '録音スタート'}<br />
                {isProcessing && '...処理中'}<br />
                {error && `エラー: ${error}`}
              </button>

              <Link href="/lesson/8/completed_dbc" className={style.next_btn}>
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