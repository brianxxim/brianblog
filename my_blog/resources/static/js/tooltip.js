$(function(){
			$(".news_content p:odd").addClass("p03"); 
			

			$(".news_content p").hover( 
                function () { 
                    $(this).addClass("p02");   
                }, 
                function () { 
                    $(this).removeClass("p02"); 
                }
            )
			
			
			$("a").focus( 
                function () { 
                    $(this).blur();
                }
             )
        })


var sweetTitles = {
	x : 10,	
	y : 20,	
	tipElements : "a",
	init : function() {
		$(this.tipElements).mouseover(function(e){
			this.myTitle = this.title;
			this.myHref = this.href;
			this.myHref = (this.myHref.length > 200 ? this.myHref.toString().substring(0,200)+"..." : this.myHref);
			this.title = "";
			var tooltip = "";
			if(this.myTitle == "")
			{
			    tooltip = "";
			}
			else
			{
			    tooltip = "<div id='tooltip'><p>"+this.myTitle+"</p></div>";
			}
			$('body').append(tooltip);
			$('#tooltip')
				.css({
					"opacity":"1",
					"top":(e.pageY+20)+"px",
				"left":(e.pageX+10)+"px"
				}).show('fast');	
		}).mouseout(function(){
			this.title = this.myTitle;
			$('#tooltip').remove();
		}).mousemove(function(e){
			$('#tooltip')
			.css({
					"top":(e.pageY+20)+"px",
				"left":(e.pageX+10)+"px"
			});
		});
	}
};
$(function(){
	sweetTitles.init();
});