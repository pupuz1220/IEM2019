// Media Wall //


<script id="sprinklr-embed-loader-3623-ZW1iZWQ6NWJhY2I4MTgxNjIzYWU3MDhiYjA3N2I3" type="text/javascript" src="https://gallery.sprinklr.com/clients/3623/embeds/ZW1iZWQ6NWJhY2I4MTgxNjIzYWU3MDhiYjA3N2I3/script.js"></script>
<script>
if (window.ActiveXObject || "ActiveXObject" in window){

    $('.ProductVideo').css('display','block');
    $('.ProductTableCell').css('display','block');
}
</script>

// media wall end //


<script type="text/javascript">
(function($){
	$(function(){
		// modal
		$(".j-modaltrigger").click(function(e){
			e.preventDefault();
			$($(this).data("target")).addClass("modalopen").attr("aria-hidden","false");
		});
		$(".j-modalclose").click(function(e){
			e.preventDefault();
			var theModal = $(this).closest(".j-modal");
			theModal.find("iframe").attr("src", theModal.find("iframe, source").attr("src"));
			theModal.removeClass("modalopen").attr("aria-hidden", "true");
		});
		$('#modal-herovideo').click(function(e){
			e.preventDefault();
			var theModal = $(this).closest(".j-modal");
			theModal.find("iframe").attr("src", theModal.find("iframe, source").attr("src"));
			theModal.removeClass("modalopen").attr("aria-hidden", "true");
		});
	})
})(jQuery);
</script> 

// Product List Section  //
<script type="text/javascript">
function resizeVideo(){
	document.getElementById("Productvideo0").style.height = null;
	document.getElementById("ProductDesc0").style.height = null;
	document.getElementById("ProductDesc0").style.height = document.getElementById("Productvideo0").offsetHeight+"px";
	document.getElementById("Productvideo0").style.height = document.getElementById("ProductDesc0").offsetHeight+"px";
	
	document.getElementById("Productvideo1").style.height = null;
	document.getElementById("ProductDesc1").style.height = null;
	document.getElementById("ProductDesc1").style.height = document.getElementById("Productvideo0").offsetHeight+"px";
	document.getElementById("Productvideo1").style.height = document.getElementById("ProductDesc0").offsetHeight+"px";
	
	document.getElementById("Productvideo2").style.height = null;
	document.getElementById("ProductDesc2").style.height = null;
	document.getElementById("ProductDesc2").style.height = document.getElementById("Productvideo0").offsetHeight+"px";
	document.getElementById("Productvideo2").style.height = document.getElementById("ProductDesc0").offsetHeight+"px";
	
	document.getElementById("Productvideo3").style.height = null;
	document.getElementById("ProductDesc3").style.height = null;
	document.getElementById("ProductDesc3").style.height = document.getElementById("Productvideo0").offsetHeight+"px";
	document.getElementById("Productvideo3").style.height = document.getElementById("ProductDesc0").offsetHeight+"px";
	
	document.getElementById("Productvideo4").style.height = null;
	document.getElementById("ProductDesc4").style.height = null;
	document.getElementById("ProductDesc4").style.height = document.getElementById("Productvideo0").offsetHeight+"px";
	document.getElementById("Productvideo4").style.height = document.getElementById("ProductDesc0").offsetHeight+"px";
	
	document.getElementById("Productvideo5").style.height = null;
	document.getElementById("ProductDesc5").style.height = null;
	document.getElementById("ProductDesc5").style.height = document.getElementById("Productvideo0").offsetHeight+"px";
	document.getElementById("Productvideo5").style.height = document.getElementById("ProductDesc0").offsetHeight+"px";
}

resizeVideo();

$(window).resize(function() {

setTimeout(
  function() 
  {
    resizeVideo();
  }, 300);
    });
</script>




<script type="text/javascript" src="//static.acer.com/up/Resource/Libraries/Acer/4410b/scripts/zcommon.min.js"></script>
<script type="text/javascript" src="/src/scripts/zcommon.min.js"></script>
