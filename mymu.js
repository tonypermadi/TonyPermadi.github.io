let track_genre=document.querySelector(".genre");let playpause_btn=document.querySelector(".playpause-track");let next_btn=document.querySelector(".next-track");let track_index=0;let isPlaying=false;let curr_track=document.createElement('audio');let track_list=[
{genre:"Jazz",path:"https://jking.cdnstream1.com/b22139_128mp3"},
{genre:"1980s",path:"https://makri.cdnstream.com/1898_128"},
{genre:"Country",path:"https://listen.181fm.com/181-kickincountry_128k.mp3"},
{genre:"Pop Hits",path:"https://node-01.zeno.fm/ntub9q5xh2zuv"},
{genre:"Top 40",path:"https://n36a-e2.revma.ihrhls.com/zc185?&rj-tok=AAABgHWwtGgAFT04RTTifnjM8A"},];
function loadTrack(track_index){curr_track.src=track_list[track_index].path;curr_track.load();track_genre.textContent=track_list[track_index].genre;curr_track.addEventListener("ended", nextTrack);}function playpauseTrack(){if(!isPlaying)playTrack();else pauseTrack();}function playTrack(){curr_track.play();isPlaying=true;playpause_btn.innerHTML="<svg width=26 height=26><g stroke-miterlimit=10 stroke-width=5><path stroke=#000 d='M17.7 7.9v11.2'/><path stroke=#fff d='M16.7 6.9v11.2'/></g><g stroke-miterlimit=10 stroke-width=5><path stroke=#000 d='M10.1 7.9v11.2'/><path stroke=#fff d='M9.1 6.9v11.2'/></g><g fill=none stroke-width=3><circle cx=13.5 cy=13.5 r=11.2 stroke=#000 /><circle cx=12.6 cy=12.6 r=11.2 stroke=#fff></g></svg>";}function pauseTrack(){curr_track.pause();isPlaying=false;playpause_btn.innerHTML="<svg width=26 height=26><path d='M10.7 19.2V8l8.3 5.6z'/><path fill=#fff d='M9.7 18.2V7l8.3 5.6z'/><g fill=none stroke-width=3><circle cx=13.5 cy=13.5 r=11.2 stroke=#000 /><circle cx=12.6 cy=12.6 r=11.2 stroke=#fff></g></svg>";}function nextTrack(){if(track_index<track_list.length-1)track_index += 1;else track_index=0;loadTrack(track_index);playTrack();}function prevTrack(){if(track_index>0)track_index -= 1;else track_index=track_list.length;loadTrack(track_index);playTrack();}
function sleep(milliseconds){
const date=Date.now();
let currentDate=null;
do{
currentDate=Date.now();
}while(currentDate-date<milliseconds);
}
sleep(2000);
loadTrack(track_index);
