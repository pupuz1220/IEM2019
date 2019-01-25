
$('.lazy').Lazy({
        // your configuration goes here
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
    });



    
var width=document.body.offsetWidth;

if(width > 1023)
{
	$('#IntelImg').attr('data-src','//static.acer.com/up/Resource/Acer/Acer_Gaming/acer-gaming-iem-katowice-2019/20190116/Triton_900_large.jpg');
	}
else if(width > 639)
{
	$('#IntelImg').attr('data-src','//static.acer.com/up/Resource/Acer/Acer_Gaming/acer-gaming-iem-katowice-2019/20190116/Triton_900_medium.jpg');
	}
else
	{
	$('#IntelImg').attr('data-src','//static.acer.com/up/Resource/Acer/Acer_Gaming/acer-gaming-iem-katowice-2019/20190116/Triton_900_small.jpg');
	}
	


