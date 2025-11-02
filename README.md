## 💖For Lily love🤭😂💯



A crafted, personalized single-page application (SPA) featuring dynamic content, synced background music, and a smooth, looping crossfade for a seamless romantic experience.

---

## ✨ Features and Animations

This project combines several CSS and JavaScript techniques to create a warm, engaging, and dynamic viewing experience.

| Feature | Description | Animation/Effect |
| :--- | :--- | :--- |
| **Header Title** | A welcoming, personalized message. | **Typewriter + Cursor Blink** (`.top-typing`) - Creates a classic, retro-terminal welcome effect. |
| **Photo Frame** | Highlights the main image. | **Pulsing Dual-Color Border Glow** (`@keyframes glowBorder`) - Seamlessly shifts between pink and gold, drawing the viewer's eye. |
| **Message Box** | Contains the heartfelt letter. | **Typewriter Text Effect** (`#typing`) - Reveals the message one character at a time, synchronized with a typing sound. |
| **Background Music** | A continuous, looping love song. | **Smooth Crossfade Loop** (`loveAudio.addEventListener('ended')`) - The music fades out and back in smoothly when it restarts, preventing abrupt cuts. |
| **Karaoke Lyrics** | Displays the song's lyrics over the photo. | **Time-Synced Line Transition** - Lyrics appear line-by-line, perfectly timed to the music, fading in and out subtly. |
| **Signature** | The heartfelt sign-off. | **Fade-in and Shimmer** (`@keyframes shimmer`) - The name appears at the end and gently twinkles, providing a magical final touch. |
| **Music Button** | Controls playback. | **Pulsing Shadow** (`@keyframes pulse`) - The button subtly pulses while the music is playing. |

---

## 🛠️ Project Structure

The code is organized into three standard files for easy maintenance and deployment.

| File | Role | Key Elements |
| :--- | :--- | :--- |
| `index.html` | **Structure** | Defines the page layout, content containers (`#topTyping`, `#typing`, `#lyrics`), and includes all audio files. |
| `style.css` | **Design** | Contains all visual styling, colors (using CSS variables like `--pink` and `--gold`), and defining the keyframe animations. |
| `script.js` | **Logic** | Manages the dynamic effects: typing loops, music playback, crossfade logic, and the time-synced karaoke lyrics. |

---

## 🚀 How to Run Locally

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/techmax769-source/lily]
    ```
2.  **Add Media Files:**
    Place your required media files inside the project folder:
    * `photo.jpg` (The main photo)
    * `love-song.mp3` (The background music)
    * `typing-sound.mp3` (A short sound for the typing effect)
3.  **Open in Browser:**
    Simply open the **`index.html`** file in your favorite web browser.

---

## 📄 Customization

To make this page your own, edit the following constants in **`script.js`**:

| Constant | Location | Purpose |
| :--- | :--- | :--- |
| `topText` | `script.js` | Change the animated header message. |
| `message` | `script.js` | Change the long, heartfelt letter content. |
| `lyricsContainer.innerHTML` | `script.js` | Update the song lyrics. |
| `lyricTimings` | `script.js` | **Crucial:** You must adjust these seconds to match the timing of your new song (`love-song.mp3`). |
| `maxVolume` | `script.js` | Adjust the music volume. |
| `.signature` | `index.html` | Update the name (`Lilian Gatwiri 💫`) |

---

## 🔗 Technologies Used

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3.org/html/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/)
