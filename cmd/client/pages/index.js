import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'
import VideoRecorder from '@/components/VideoRecorder'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const imgRef = useRef(null)
  // const canvasRef = useRef(null)
  // const [blobUrl, setBlobUrl] = useState("")
  // let chunks = []
  // let ctx = null
  // let intervalId = null
  // let recorder = null

  // useEffect(() => {
  //   const canvas = canvasRef.current    
  //   const stream = canvas.captureStream()
  //   recorder = new MediaRecorder(stream, {
  //     mimeType: 'video/webm'
  //   })
  //   recorder.ondataavailable = ({data}) => {
  //     if (data.size > 0) {
  //       chunks.push(data)
  //       console.log("pushed data")
  //       console.log(data)
  //     } else {
  //       console.log("no data")
  //     }
  //   }
  //   recorder.onstop = () => {
  //     const blob = new Blob(chunks)
  //     const blobUrl = URL.createObjectURL(blob)
  //     setBlobUrl(blobUrl)
  //     chunks = []
  //   }
  //   ctx = canvas.getContext('2d')
  // }, [])

  // function Record() {
  //   const canvas = canvasRef.current
  //   const img = imgRef.current
  //   img.crossOrigin = "Anonymous"

  //   canvas.width = img.width
  //   canvas.height = img.height
  //   intervalId = setInterval(() => {
  //     ctx.drawImage(img, 0, 0, img.width, img.height)
  //   }, 1000/30)
  //   recorder.start()
  // }

  // function Stop() {
  //   clearInterval(intervalId)
  //   recorder.stop()
  // }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {/* <div className={styles.grid}>
          <img ref={imgRef} src="http://localhost:9080/stream" />
        </div>
        <div className={styles.grid}>
          <canvas ref={canvasRef}></canvas>
        </div>
        <div>
          <button onClick={Record}>Record</button>
          <button onClick={Stop}>Stop</button>
        </div>
        <div>
          <a href={blobUrl} download="sample.webm">Download</a>
        </div> */}
        <VideoRecorder
          videoSrc="http://localhost:9080/stream"
          fileName="sample.webm">
        </VideoRecorder>
      </main>
    </>
  )
}
