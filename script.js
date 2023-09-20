const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// PROMPT TO SELECT MEDIA STREAM, PASS TO VIDEO ELEMENT, THEN PLAY
async function selectMediaStream() {

    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch(error) {
        console.log('whoops!! something went wrong..')
    }
}

button.addEventListener('click', async () => {
    // DISABLE BUTTON
    button.disabled = true;

    // START PICTURE IN PICTURE
    await videoElement.requestPictureInPicture();

    // RESET BUTTON
    button.disabled = false;
})

// ON LOAD
selectMediaStream();