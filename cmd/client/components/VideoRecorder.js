import { useEffect, useRef, useState } from "react"

let isVideoRecorderInitialized = false

export default function VideoRecorder(props) {

    // ref
    const imgRef = useRef(null)
    const canvasRef = useRef(null)

    // state
    const [blobUrl, setBlobUrl] = useState('')
    const [isRecordButtonEnabled, setIsRecordButtonEnabled] = useState(false)
    const [isStopButtonEnabled, setIsStopButtonEnabled] = useState(false)
    const [isDownloadLinkVisible, setIsDownloadLinkVisible] = useState(false)
    const [recorder, setRecorder] = useState(null)

    // var
    let chunks = []
    let ctx = null
    let intervalId = null
    // let recorder = null

    function UpdateState(rec, stop, link) {
        setIsRecordButtonEnabled(rec)
        setIsStopButtonEnabled(stop)
        setIsDownloadLinkVisible(link)
    }

    function OnDataAvailable(e) {
        const data = e.data
        if (data.size > 0) {
            chunks.push(data)
        } else {
            console.warn('no data')
        }
    }

    function OnStop() {
        const blob = new Blob(chunks)
        const bUrl = URL.createObjectURL(blob)
        setBlobUrl(bUrl)
        chunks = []

        UpdateState(true, false, true)
    }

    function Record() {
        UpdateState(false, false, false)

        const img = imgRef.current
        const canvas = canvasRef.current
        img.crossOrigin = 'Anonymous'

        canvas.width = img.width
        canvas.height = img.height
        intervalId = setInterval(() => {
            ctx.drawImage(img, 0, 0, img.width, img.height)
        }, 1000/30);
        recorder.start()

        UpdateState(false, true, false)
    }

    function Stop() {
        UpdateState(false, false, false)

        clearInterval(intervalId)
        recorder.stop()
    }

    useEffect(() => {
        console.log('hogehoge')
        console.log(recorder)
        if (!isVideoRecorderInitialized === false) {
            const canvas = canvasRef.current
            const stream = canvas.captureStream()
            // recorder = new MediaRecorder(stream, {mimeType: 'video/webm'})
            setRecorder(new MediaRecorder(stream, {mimeType: 'video/webm'}))
            recorder.ondataavailable = OnDataAvailable
            recorder.onstop = OnStop
            ctx = canvas.getContext('2d')
            UpdateState(true, false, false)
            isVideoRecorderInitialized = true    
        }
        console.log(recorder)
    }, [])

    return (
        <>
            <div>
                <img ref={imgRef} src={props.videoSrc} />
            </div>
            <div>
                <canvas ref={canvasRef}></canvas>
            </div>
            <div>
                <button onClick={Record} disabled={!isRecordButtonEnabled}>Record</button>
                <button onClick={Stop} disabled={!isStopButtonEnabled}>Stop</button>
            </div>
            <div>
                <a href={blobUrl} download={props.fileName} className={isDownloadLinkVisible ? '' : 'not-recorded'}>Download</a>
            </div>
        </>
    )
}