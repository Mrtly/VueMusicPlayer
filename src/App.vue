<template>
  <div id="app">   
  <main>
    <div id="header">
       <!-- <h3>tunesss</h3>
       <p>icon</p> -->
     </div>
    <section id="player">
      <img :src="current.image" /> 

      <div id="playerelems">
        <div id="titleandcontrol">
          <h2 id="title"> {{ current.title }} </h2>
            <p>{{ current.artist }}</p>
          <div id="control">
            <button class="prev" @click="prev"> <font-awesome-icon icon="backward" /> </button>
            <button class="paus" v-if="!isPlaying" @click="play"> <font-awesome-icon icon="play" /> </button>
            <button class="play" v-else @click="pause"> <font-awesome-icon icon="pause" /> </button>
            <button class="next" @click="next"> <font-awesome-icon icon="forward" /> </button>
            
          </div>
        </div>

        <div id="playlist">
          <h5> playlist </h5>
          <li v-for="song in songs" 
          :key="song.src" 
          @click="play(song)" 
          :class="(song.src == current.src) ? 'song playing' : 'song'">
          <button>{{ song.title }} - {{ song.artist }}</button>
          </li>
        </div>
    </div>
    </section>
    
    
  </main>
  </div>
</template>

<script>
 
export default {
  name: 'app', 
  data() { //this is like useState
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {title: 'The richest man in Babylon',
        artist: 'Thievery Corporation',
        src: require('./assets/the_richest_man_in_babylon.mp3'),
        image: "https://picsum.photos/300/?random=1"
        },
        {title: 'Until the morning',
        artist: 'Thievery Corporation',
        src: require('./assets/until_the_morning.mp3'),
        image: "https://picsum.photos/300/?random=2"
        }
      ],
      player: new Audio(),

    }
  },
  methods: {
    play(song){
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.isPlaying = true;
    },
    pause () {
      this.player.pause();
      this.isPlaying = false;
    },
     next () {
      this.index++;
      if (this.index > this.songs.legth -1) {
        this.index = 0
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    }, 
    prev () {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.legth - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
  },
  created () {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
    this.player.play();
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap');

$yolk: #fac748;
$lapis: #1561a8;
$off-white: #f2f4f5;
$raisin: #272727;
$manatee: #8c96a8;

* {
  margin: 0;
  padding: 0;
}
body {
  font-size: 1.2em;
  font-family: 'Quicksand', sans-serif;
}

#app {
  margin: 1em;
  width: 50%;
}

#player {
  display: flex;
  background: $raisin;
  color: $off-white;
  padding: 2em;
  #playerelems {
    margin-left: 1em;
    display: flex;
    flex-direction: vertical;
    justify-content: space-between;
    position: relative;
    #control{
      margin-top: 1em;
      button {
        background: $yolk; 
        color: $raisin;
        border-radius: 5px;
        margin-right: 10px;
        cursor: pointer;
        padding: 8px;
        font-size: 0.8em;
        font-family: 'Quicksand', sans-serif;
        box-shadow: 1px 1px 1px $manatee;
      }
    }
    #playlist{
      position: absolute;
      bottom: 0;
      li {
        list-style: none;
        button {
        background: none;
        border: none;
        color: $yolk;
        text-align: left;
        cursor: pointer;
        font-size: 1em;
        margin-top:10px;
        letter-spacing: 2px;
        font-family: 'Quicksand', sans-serif;

      }
      }
    }
  }
  img {
  box-shadow: 0px 0px 2px $manatee;
}
}

@media (max-width: 768px) {
  #app {
  margin: 0;
  width: 100%;
  height: 100vh
}
  #player {
  display: grid;
  padding: 1em;
  #playerelems {
    margin-left: 0;
    display: block;
    position: relative;
    #playlist{
      position: relative;
      margin-top: 1em;
      li {
        list-style: none
      }
    }
  }
}
}
</style>
