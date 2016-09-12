function setup(){
    
    function Video (clip, time){
        this.clip = document.getElementById(clip);
        this.clip.currentTime = time;
        this.clip.pause();
        // play videos on mouseover
        this.clip.addEventListener('mouseover', function(){
            //new object so have to initialize new variables?
            this.vod = document.getElementById(clip);
            this.vod.play();
        });
    }
    
    //video clip id's
    var clip = ["clip1", "clip2", "clip3", "clip4", "clip5", "clip6", "clip7", "clip8", "clip9", "clip10", "clip11", "clip12", "clip13", "clip14", "clip15", "clip16", "clip17", "clip18", "clip19", "clip20", "clip21", "clip22", "clip23", "clip24"];
   
    //array of objects
    var vid = [];
   
    for(var i = 0; i < 22; i++){
        vid[i]= new Video(clip[i], i);
    }
    
    Video.prototype.trigger = function(clip){
    this.clip.addEventListener('click', function(){
        //hide elements when clicked on (or other elements)
        this.mov = document.getElementById(clip);
        this.mov.setAttribute("class", "disabled");    
    });
    }
    
    vid[0].trigger(clip[0]);
    vid[7].trigger(clip[7]);
    vid[17].trigger(clip[17]);
    vid[5].trigger(clip[23]);
    vid[8].trigger(clip[21]);
    
    var imgDora = document.getElementById("dora")
    imgDora.addEventListener('click', function(){
       
    });
}

window.addEventListener('load', setup);
