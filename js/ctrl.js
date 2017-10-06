//top gimmicky master knob ()


var knob = $('.knob');
var angle = 0;
var minangle=0;
var maxangle=270; 

   

 
function move(direction){
    
    if(direction=='up')
    {
        if((angle+2)<=maxangle){
            angle=angle+2;
            setAngle();
        }
    }

    else {
        if((angle-2)>=minangle){
            angle=angle-2;
            setAngle();
        }
    }
}

function movenum(direction,num){
    if(direction=='up')
    {
        if((angle+num)<=maxangle){
            angle=angle+num;
            setAngle();
        }

        else
        {
           angle=maxangle;
        }
    }

    else {
        if((angle+num)>=minangle){
            angle=angle+num;
            setAngle();
        }

        else{
            angle=minangle;
        }
    }
}

function setAngle()
{
    //rotation of knob
    knob.css({
    '-moz-transform':'rotate('+angle+'deg)',
    '-webkit-transform':'rotate('+angle+'deg)',
     '-o-transform':'rotate('+angle+'deg)',
    '-ms-transform':'rotate('+angle+'deg)',
    'transform':'rotate('+angle+'deg)'
  });

  //highlighint ticks
   var activeTicks =  (Math.round(angle/10)+1);
   $('.tick').removeClass('activetick');
   $('.tick').slice(0,activeTicks).addClass('activetick');

   var count = Math.round((angle/270)*100);
   $('#value').text(count+'%');
}
knob.bind('mousewheel', function(e){
  if(e.originalEvent.wheelDelta < 0) {
    move('down');
  } else {
    move('up');
  }
  return false;
});

$('.knob').on('mousedown', function(e) {
    $(this).data('p0', { x: e.pageX, y: e.pageY });
    setTimeout(function(){
        var p0 = $(this).data('p0'),
        p1 = { x: e.pageX, y: e.pageY };
        
        if(p0.y-p1.y<0){
            movenum("down",p0.y-p1.y);
        }
        else
        {
            movenum('up',p0.y-p1.y);
        }
        //p2  = {x: e.pageX, y: e.pageY};
        //console.log(p0.y-p2.y);
    }, 400);

}).on('mouseup', function(e) {
    
    }
);

