
playBtn.addEventListener('click', () => {
    if(playBtn.className.includes('pause')){
       music.play();
    } else {
       music.pause();
    }
 
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
 })
 //setup music
 const setMusic = (i) => {
     seekBar.value = 0;
     let song =songs[i];
    currentMusic = i;
    music.src = song.path;
 
    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;
    
    currentTime.innerHTML = '00:00';
    setTimeout(() => {
       seekBar.max = music.duration;
       musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
    
 
 }
   setMusic (0);
   
   const formatTime = (time) => {
   let min = Math.floor(time / 60);
   if (min < 10) {
    min = `0${min}`;
   }
   let sec = Math.floor(time % 60);
   if(sec < 10) {
    sec =  `0${sec}`;
   }
   return ` ${min} : ${sec}`;
   }
 
   setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
   }, 500)
 
   seekBar.addEventListener('change', () => {
          music.currentTime = seekBar.value;
   })
   forwardBtn.addEventListener('click', () => {
          if(currentMusic >= songs.length - 1){
             currentMusic = 0;
          } else {
              currentMusic++;
          }
          setMusic(currentMusic);
          playBtn.click();
 
   })
   backwardBtn.addEventListener('click', () => {
    if(currentMusic <= 0){
       currentMusic = songs.length - 1;
    } else {
        currentMusic--;
    }
    setMusic(currentMusic);
    playBtn.click();
 
 })

 const setMusica = (i) => {
    seekBar.value = 0;
    let song =songs[i];
   currentMusic = i;
   music.src = song.path;

   songName.innerHTML = song.name;
   artistName.innerHTML = song.artist;
   disk.style.backgroundImage = `url('${song.cover}')`;
   
   currentTime.innerHTML = '00:00';
   setTimeout(() => {
      seekBar.max = music.duration;
      musicDuration.innerHTML = formatTime(music.duration);
   }, 300);
   

}
  setMusic (0);
  
  const formatTimes = (time) => {
  let min = Math.floor(time / 60);
  if (min < 10) {
   min = `0${min}`;
  }
  let sec = Math.floor(time % 60);
  if(sec < 10) {
   sec =  `0${sec}`;
  }
  return ` ${min} : ${sec}`;
  }

  setInterval(() => {
   seekBar.value = music.currentTime;
   currentTime.innerHTML = formatTime(music.currentTime);
  }, 500)

  seekBar.addEventListener('change', () => {
         music.currentTime = seekBar.value;
  })
  forwardBtn.addEventListener('click', () => {
         if(currentMusic >= songs.length - 1){
            currentMusic = 0;
         } else {
             currentMusic++;
         }
         setMusic(currentMusic);
         playBtn.click();

  })
  backwardBtn.addEventListener('click', () => {
   if(currentMusic <= 0){
      currentMusic = songs.length - 1;
   } else {
       currentMusic--;
   }
   setMusic(currentMusic);
   playBtn.click();

})
const setMusicss = (i) => {
    seekBar.value = 0;
    let song =songs[i];
   currentMusic = i;
   music.src = song.path;

   songName.innerHTML = song.name;
   artistName.innerHTML = song.artist;
   disk.style.backgroundImage = `url('${song.cover}')`;
   
   currentTime.innerHTML = '00:00';
   setTimeout(() => {
      seekBar.max = music.duration;
      musicDuration.innerHTML = formatTime(music.duration);
   }, 300);
   

}
  setMusic (0);
  
  const formatTimessss = (time) => {
  let min = Math.floor(time / 60);
  if (min < 10) {
   min = `0${min}`;
  }
  let sec = Math.floor(time % 60);
  if(sec < 10) {
   sec =  `0${sec}`;
  }
  return ` ${min} : ${sec}`;
  }

  setInterval(() => {
   seekBar.value = music.currentTime;
   currentTime.innerHTML = formatTime(music.currentTime);
  }, 500)

  seekBar.addEventListener('change', () => {
         music.currentTime = seekBar.value;
  })
  forwardBtn.addEventListener('click', () => {
         if(currentMusic >= songs.length - 1){
            currentMusic = 0;
         } else {
             currentMusic++;
         }
         setMusic(currentMusic);
         playBtn.click();

  })
  backwardBtn.addEventListener('click', () => {
   if(currentMusic <= 0){
      currentMusic = songs.length - 1;
   } else {
       currentMusic--;
   }
   setMusic(currentMusic);
   playBtn.click();

})

const setMusicsss = (i) => {
    seekBar.value = 0;
    let song =songs[i];
   currentMusic = i;
   music.src = song.path;

   songName.innerHTML = song.name;
   artistName.innerHTML = song.artist;
   disk.style.backgroundImage = `url('${song.cover}')`;
   
   currentTime.innerHTML = '00:00';
   setTimeout(() => {
      seekBar.max = music.duration;
      musicDuration.innerHTML = formatTime(music.duration);
   }, 300);
   

}
  setMusic (0);
  
  const formatTimess = (time) => {
  let min = Math.floor(time / 60);
  if (min < 10) {
   min = `0${min}`;
  }
  let sec = Math.floor(time % 60);
  if(sec < 10) {
   sec =  `0${sec}`;
  }
  return ` ${min} : ${sec}`;
  }

  setInterval(() => {
   seekBar.value = music.currentTime;
   currentTime.innerHTML = formatTime(music.currentTime);
  }, 500)

  seekBar.addEventListener('change', () => {
         music.currentTime = seekBar.value;
  })
  forwardBtn.addEventListener('click', () => {
         if(currentMusic >= songs.length - 1){
            currentMusic = 0;
         } else {
             currentMusic++;
         }
         setMusic(currentMusic);
         playBtn.click();

  })
  backwardBtn.addEventListener('click', () => {
   if(currentMusic <= 0){
      currentMusic = songs.length - 1;
   } else {
       currentMusic--;
   }
   setMusic(currentMusic);
   playBtn.click();

})



 
 
 
 
 