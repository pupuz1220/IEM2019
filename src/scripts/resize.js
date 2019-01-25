<script>
function VideoResize(initialBool){
    var Intros = document.getElementById('IntroVideo');
    var ZeroGtabVideo = document.getElementById('Zero-G-Video');
    var EssentialVideo = document.getElementById('Essential-Video');
    var MechanizedVideo = document.getElementById('Mechanized-Video');
    
    var FlashVideo = document.getElementById('Flash_Video');
    var StrobeVideo = document.getElementById('Strobe_Video');
    var FadeVideo = document.getElementById('Fade_Video');
    var SmoothVideo = document.getElementById('Smooth_Video');
    //$('#IntroVideo').css('height', '100%');
    if(document.body.offsetWidth <= 639){
        if(Intros.src.indexOf('INTRO_small') < 0 || initialBool){
            Intros.src = '//static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20190114/INTRO_small.mp4';
        
            ZeroGtabVideo.src = '//static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20190114/Control_01_small.mp4';
            EssentialVideo.src = '//static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20190114/Control_02_small.mp4';
            MechanizedVideo.src = '//static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20190114/Control_03_small.mp4';		

            FlashVideo.src = '//static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20181211/Design_RGB_Flash_small.mp4';
            StrobeVideo.src = '//static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20181211/Design_RGB_Strobe_small.mp4';
            FadeVideo.src = '//static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20181211/Design_RGB_Fade_small.mp4';
            SmoothVideo.src = '//static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20181211/Design_RGB_Smooth_small.mp4';
        }
    }
    else{
        if(Intros.src.indexOf('INTRO_large') < 0){
            Intros.src = '//static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20190114/INTRO_large.mp4';
        
            ZeroGtabVideo.src = '//static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20190114/Control_01_large.mp4';
            EssentialVideo.src = '//static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20190114/1/Control_02_large.mp4';
            MechanizedVideo.src = '//static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20190114/Control_03_large.mp4';
            
            FlashVideo.src = '//static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20181211/Design_RGB_Flash_large.mp4';
            StrobeVideo.src = '//static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20181211/Design_RGB_Strobe_large.mp4';
            FadeVideo.src = '//static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20181211/Design_RGB_Fade_large.mp4';
            SmoothVideo.src = '//static.acer.com/up/Resource/Acer/Predator/Thronos/ThronosImage/20181211/Design_RGB_Smooth_large.mp4';								
        }
    }

    if(!initialBool){
        promisePlayReady(Intros);
        //promisePlayReady(ZeroGtabVideo);
        //promisePlayReady(EssentialVideo);
        //promisePlayReady(MechanizedVideo);
        //SetCurrentTime('IntroVideo', 4);
        //SetCurrentTime('Zero-G-Video', 5);
        //SetCurrentTime('Essential-Video', 5);
        //SetCurrentTime('Mechanized-Video', 5);
    }
}
function resizeScreen(){
var userAgent, ieReg, ie;
userAgent = window.navigator.userAgent;
ieReg = /msie|Trident.*rv[ :]*11\./gi;
ie = ieReg.test(userAgent);

var screenWidth = document.body.offsetWidth;
if (screenWidth >= 640) {
    document.getElementById("ImmersionDiv").style.height = null;
    document.getElementById("ImmersionDiv").style.height = document.getElementById("IMMERSION_Img").offsetHeight+"px";
    
    document.getElementById("OneClickDiv").style.height = null;		
    if( document.getElementById("OneClick_Img").offsetHeight != 0)
    {
        document.getElementById("OneClickDiv").style.height = document.getElementById("OneClick_Img").offsetHeight+"px";
    }
    else
    {
        document.getElementById("OneClickDiv").style.height = (document.getElementById("OneClick_Video").offsetHeight)+"px";
    }

    document.getElementById("TripleDisplayDiv").style.height = null;		
    if( document.getElementById("TripleDisplay_Img").offsetHeight != 0)
    {
        document.getElementById("TripleDisplayDiv").style.height = document.getElementById("TripleDisplay_Img").offsetHeight+"px";
    }
    else
    {
        document.getElementById("TripleDisplayDiv").style.height = (document.getElementById("TripleDisplay_Video").offsetHeight)+"px";
    }
    
    document.getElementById("DeepImpactHapticsDiv").style.height = null;
    if( document.getElementById("DeepImpactHaptics_Img").offsetHeight != 0)
    {
        document.getElementById("DeepImpactHapticsDiv").style.height = document.getElementById("DeepImpactHaptics_Img").offsetHeight+"px";
    }
    else
    {
        document.getElementById("DeepImpactHapticsDiv").style.height = document.getElementById("DeepImpactHaptics_Video").offsetHeight+"px";
    }
    
    
    document.getElementById("ControlDiv").style.height = null;
    document.getElementById("ControlDiv").style.height = document.getElementById("Control_Img").offsetHeight+"px";
    
    document.getElementById("DesignDiv").style.height = null;
    document.getElementById("DesignDiv").style.height = document.getElementById("Design_Img").offsetHeight+"px";
    
    var width = 0;
    if(document.body.offsetWidth >= 1903){
        width = 0;
        if(ie){
            width = width - 42;
        }
    }
    else if(document.body.offsetWidth >= 1024){
        width = -(1920 - document.body.offsetWidth) / 2;
        if(ie){
            width = width - 42;
        }
    }
    else{
        width = -(1024 - document.body.offsetWidth) / 2;
        if(ie){
            width = width - 300;
        }
    }
    
    if(document.body.offsetWidth <= 1903){
        $('.Immersion_fronstedglass.fronstedglass').css({"margin-left": width});
        $('.Control_fronstedglass.fronstedglassRight').css({"margin-right": width});
        $('.Design_fronstedglass.fronstedglass').css({"margin-left": width});
    }
}

var srcNum = 0;
if(screenWidth >= 1024) {
    srcNum = 0;
}
else if(screenWidth >= 640) {
    srcNum = 1;
}
else {
    srcNum = 2;
}

if(ie) {
    var objectFitClass = ".fullScreenImg";
    var classArray = objectFitClass.split(',');
    $.each(classArray, function(index, value) {
        $(value).each(function () {
            var $container = $(this);
            var imgUrl;
            var	img = $container.find("source").get(srcNum).attributes;
            for(var i=0; i<img.length;i++ ){
                if(img[i].name=='srcset'){
                    imgUrl = img[i].nodeValue;
                }
            }
            
            $container.css("backgroundImage", 'url(' + imgUrl + ')').addClass("custom-object-fit");
            
            $container.css('height', '960px');
        });
    });
    $('#ColorButtonDiv').css('text-align', 'center');//.css('width', '500px');
}
}

var previousHeight = 0;
var nowHeight = 0;

$(window).resize(function() {
setTimeout(
    function(){
        resizeScreen();
    }, 300);
    if (!/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        VideoResize(false);
    }
    SetAllVideoHeight();
});

$(window).load(function(){ 

$('#IntroVideo')[0].play();
SetAllVideoHeight();

setTimeout(
        function(){
            $('.ThronosString').animate({
                            opacity: 1
                        }, 3000);
        }, 3000);
}); 

function SetCurrentTime(name, time){
$('#' + name + '').on('loadedmetadata', function () {
    $('#' + name + '')[0].currentTime = time;
    $('#' + name + '')[0].pause();
});
}

function SetAllVideoHeight(){
SetVideoHeight($('#OneClick_Video'), false);
SetVideoHeight($('#TripleDisplay_Video'), false);
SetVideoHeight($('#DeepImpactHaptics_Video'), false);
SetVideoHeight($('#Zero-G_Trigger'), true);
SetColorsHeight();
SetDevicesHeight();			
}

function SetColorsHeight(){
var margin = 96;
var deviceWidth = document.body.offsetWidth;
var height = window.innerHeight -($('#DEVICES').height() + $('#ColorButtonDiv').height() + margin);

var finalHeight = height;

if(deviceWidth > 639)
{
    if((deviceWidth/2.057)<=height)
        finalHeight = deviceWidth/2.057 -12;
}
else
{
    if(deviceWidth<=height)
        finalHeight = deviceWidth -24;
}

$('#ColorsMediaDiv').css('height', finalHeight);
$('#ColorsSideDiv').css('height', finalHeight);	
$('#ColorsMediaDiv').find('img').css('height', finalHeight);
$('#ColorsMediaDiv').find('video').css('height', finalHeight);
}

function SetDevicesHeight(){
var deductions = window.innerHeight - $('#DevicesChunk').height() - $('#Desktops_Trigger~div').height();
$('#Desktops_Trigger').css('height', deductions >= 350 ? 350 : deductions);		
}

function SetVideoHeight(obj, bool){
var maxHeight = 700;
var margin = 96;
var deductions = bool ? window.innerHeight - margin - DivHeight(obj) - StrHeight(obj) : 0;

if(window.innerHeight >= maxHeight){
    obj.css('height', bool ? (deductions > 700 ? 700 : deductions) : maxHeight - deductions);
    obj.find('video').css('height', bool ? (deductions > 700 ? 700 : deductions) : maxHeight - deductions);
}
else{
    obj.css('height', bool ? deductions + 10 : window.innerHeight);
    obj.find('video').css('height',  bool ? deductions + 10 : window.innerHeight);
}
}

function DivHeight(obj){
return obj.find('~div').height();
}

function StrHeight(obj){
return obj.find('~~div').height();
}

function promisePlayReady(video){
  var playPromise = video.play();

  if (playPromise !== undefined) {
        playPromise.then(function() {
          video.pause();
          video.currentTime = 5;
        })
        .catch(function(error) {

        });
    }		
}

$( document ).ready(function() {
setTimeout(
    function(){
        resizeScreen();
    }, 1000);
        VideoResize(true);
        
$('.ReplayButton').click(function(){
    $(this).parent().find('video')[0].currentTime = 0;
    $(this).parent().find('video')[0].play();
});
$('.SubMenuOpacity').click(function(){
    var title = $(this).attr("title");
    if(title == 'INTRO'){
        $('#IntroVideo')[0].play();
        $('.ThronosString').css('opacity', 0);
        setTimeout(
        function(){
            $('.ThronosString').animate({
                            opacity: 1
                        }, 3000);
        }, 3000);
        $(window).scrollTop('0');
    }
    else if(title == 'IMMERSION'){
        ReplayAnimation('Immersion_fronstedglass', 'Immersion_Title', 'Immersion_Text', 1000);
    }
    else if(title == 'CONTROL'){
        ReplayAnimation('Control_fronstedglass', 'Control_Title', 'Control_Text', 1000);
    }
    else if(title == 'DESIGN'){
        ReplayAnimation('Design_fronstedglass', 'Design_Title', 'Design_Text', 1000);
    }
});
});
</script>