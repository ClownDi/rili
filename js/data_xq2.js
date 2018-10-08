//设置天
  function setday(){
  	var dd = new Date(); 
  	function GetDateStr(AddDayCount) { 
		dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
		var y = dd.getFullYear(); 
		var m = dd.getMonth()+1;//获取当前月份的日期 
		var d = dd.getDate(); 
		 m = (m > 9) ? ("" + m) : ("0" + m);
    d = (d > 9) ? ("" + d) : ("0" + d);
		return y+"-"+m+"-"+d; 
	} 		
	var datezz = new Array;
	var date = new Array;var dateqq = new Array;
	console.log();
	var weekArray = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
	var today = GetDateStr(0).substring(8,10);
	var wzzkto = weekArray[dd.getDay()];
	$("#todays #today_i").html(today);
	$("#todays #today_xq").html(wzzkto)
	console.log(GetDateStr(0))
	var z=-1;
	for(i=0;i<=16;i++){
		datezz[i] = GetDateStr(z);
	}
	datezz.splice(16,1);

	for(var i = 0;i<datezz.length;i++){
    	if(date.indexOf(datezz[i]) == -1){  //去重
        	date.push(datezz[i]);
    	}
	}
	var x=1;
	var dates = new Array;
	for(i=0;i<=16;i++){
		 dates[i] = GetDateStr(x);
	}
	console.log(GetDateStr(0))
	var datez=[]
	var xx=1;
	for(i=0;i<=15;i++){
		 datez[i] = GetDateStr(xx);
	}
	

console.log(datez);
      for(var i = 0; i < date.length; i++) {
        var arys1= new Array(); 
        var arys2= new Array();
        arys1.push(date[i].substring(0,4));
        arys1.push(date[i].substring(5,7));
        arys1.push(date[i].substring(8,10));

        arys2.push(datez[i].substring(0,4));
        arys2.push(datez[i].substring(5,7));
        arys2.push(datez[i].substring(8,10));
        var ssdate=new Date(arys1[0],parseInt(arys1[1]-1),arys1[2]); 
        var ssdates=new Date(arys2[0],parseInt(arys2[1]-1),arys2[2]);  
        var weekz = weekArray[ssdate.getDay()];
        var weekzs = weekArray[ssdates.getDay()];
        var addhtmls = "<li><div class=\'rqh_box\'><div class=\'rl_box wid-90\'><div class=\'dt_b dt\'></div><div class=\'dt_c dt\'></div><div class=\'rl_til\'><div class=\'rl_day left\'><a class=\'rl_icon\' href=\'rl.html\' id=\'rl_icon\'><img src=\'images/rl_icon.png\'></a><h2><i class=\'today_i\'>"+arys1[2]+"</i><span class=\'today_xq\'>"+weekz+"</span></h2><a class=\'fh fx_icon\'><img src=\'images/fh.png\'></a></div></div><div class=\'sj_qh\'><h3><i class=\'sj_til_icon icon_1\'></i>中国网球公开赛</h3><ul></ul><h3><i class=\'sj_til_icon icon_2\'></i>中国网球公开赛<i class=\'sj_r\'><img src=\'images/bottom.png\'></i></h3><ul style=\'display: none\'><li><div class=\'sj_txt\'><p>2014年8月25日下午，中国十二届全国人大常委会第十次会议听取国务院关于提请审议《关于设立烈士纪念日的决定(草案)》的议案。草案规定，每年9月30日国家举行烈士纪念日。</p><h1>相关案例：</h1><a href=\'#\'><i class=\'al_icon\'><img src=\'images/gg_03.png\'></i>纪念日神广告</a></div></li></ul><h3><i class=\'sj_til_icon icon_3\'></i>中国网球公开赛</h3><ul></ul><h3><i class=\'sj_til_icon icon_4\'></i>中国网球公开赛</h3><ul></ul><h3><i class=\'sj_til_icon icon_5\'></i>中国网球公开赛<i class=\'sj_r\'><img src=\'images/bottom.png\'></i></h3><ul style=\'display: none\'><li><div class=\'sj_txt\'><p>2014年8月25日下午，中国十二届全国人大常委会第十次会议听取国务院关于提请审议《关于设立烈士纪念日的决定(草案)》的议案。草案规定，每年9月30日国家举行烈士纪念日。</p><h1>相关案例：</h1><a href=\'#\'><i class=\'al_icon\'><img src=\'images/gg_03.png\'></i>纪念日神广告</a></div></li></ul></div></div><div class=\'jr_hot wid-90\'><h2>今日热点</h2><ul><li><span>#0929_exo出道2000日纪念#</span><i class=\'right\'><img src=\'images/right.png\'></i></li><li><span>#当你沉睡时#</span><i class=\'right\'><img src=\'images/right.png\'></i></li><li><span>#小手牵小狗#</span><i class=\'right\'><img src=\'images/right.png\'></i></li><li><span>#我心中的警察英雄#</span><i class=\'right\'><img src=\'images/right.png\'></i></li></ul></div></div></li>"; 
        var addhtmlh = "<li><div class=\'rqh_box\'><div class=\'rl_box wid-90\'><div class=\'dt_b dt\'></div><div class=\'dt_c dt\'></div><div class=\'rl_til\'><div class=\'rl_day left\'><a class=\'rl_icon\' href=\'rl.html\' id=\'rl_icon\'><img src=\'images/rl_icon.png\'></a><h2><i class=\'today_i\'>"+arys2[2]+"</i><span class=\'today_xq\'>"+weekzs+"</span></h2><a class=\'fh fx_icon\'><img src=\'images/fh.png\'></a></div></div><div class=\'sj_qh\'><h3><i class=\'sj_til_icon icon_1\'></i>中国网球公开赛</h3><ul></ul><h3><i class=\'sj_til_icon icon_2\'></i>中国网球公开赛<i class=\'sj_r\'><img src=\'images/bottom.png\'></i></h3><ul style=\'display: none\'><li><div class=\'sj_txt\'><p>2014年8月25日下午，中国十二届全国人大常委会第十次会议听取国务院关于提请审议《关于设立烈士纪念日的决定(草案)》的议案。草案规定，每年9月30日国家举行烈士纪念日。</p><h1>相关案例：</h1><a href=\'#\'><i class=\'al_icon\'><img src=\'images/gg_03.png\'></i>纪念日神广告</a></div></li></ul><h3><i class=\'sj_til_icon icon_3\'></i>中国网球公开赛</h3><ul></ul><h3><i class=\'sj_til_icon icon_4\'></i>中国网球公开赛</h3><ul></ul><h3><i class=\'sj_til_icon icon_5\'></i>中国网球公开赛<i class=\'sj_r\'><img src=\'images/bottom.png\'></i></h3><ul style=\'display: none\'><li><div class=\'sj_txt\'><p>2014年8月25日下午，中国十二届全国人大常委会第十次会议听取国务院关于提请审议《关于设立烈士纪念日的决定(草案)》的议案。草案规定，每年9月30日国家举行烈士纪念日。</p><h1>相关案例：</h1><a href=\'#\'><i class=\'al_icon\'><img src=\'images/gg_03.png\'></i>纪念日神广告</a></div></li></ul></div></div><div class=\'jr_hot wid-90\'><h2>今日热点</h2><ul><li><span>#0929_exo出道2000日纪念#</span><i class=\'right\'><img src=\'images/right.png\'></i></li><li><span>#当你沉睡时#</span><i class=\'right\'><img src=\'images/right.png\'></i></li><li><span>#小手牵小狗#</span><i class=\'right\'><img src=\'images/right.png\'></i></li><li><span>#我心中的警察英雄#</span><i class=\'right\'><img src=\'images/right.png\'></i></li></ul></div></div></li>"; 
        
        
        $("#todays").prepend(addhtmls);
        $("#todays").append(addhtmlh);   

    }   

}
setday();

$(function(){

	setTimeout(function (){
	    	TouchSlide({ 
          		slideCell:"#rl_qh",
         		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
          		mainCell:".bd ul", 
          		effect:"left", 
          		autoPlay:false,//自动播放
          		autoPage:true, //自动分页
          		switchLoad:"_src", //切换加载，真实图片路径为"_src" 
          		defaultIndex:16
        	});
        	$("#loading").hide();
        	 $(".sj_qh h3").click(function(){
      if($(this).next().css("display")=="block"){
        $(this).next().slideUp();
      }else{
        $(".sj_qh ul").slideUp();
        $(this).next().slideDown();
      }})


     $('.fx_icon').on('touchmove',function() {
     	 $(".rlxq").hide();
      	$(".jr_hot").hide();
      	$(".fx_box").fadeIn();
      	$(".fx .rl_day i").html($(this).prev().children("i").html());
      	$(".fx .rl_day span").html($(this).prev().children("span").html());
      	$(".sjs_qh h3").click(function(){
      	$(".sjs_qh h3").removeClass("on")
      	$(this).addClass("on");
    	})

      });
     $('.fx_icon').on('click',function() {
     	 $(".rlxq").hide();
      	$(".jr_hot").hide();
      	$(".fx_box").fadeIn();
      	$(".fx .rl_day i").html($(this).prev().children("i").html());
      	$(".fx .rl_day span").html($(this).prev().children("span").html());
      	$(".sjs_qh h3").click(function(){
      	$(".sjs_qh h3").removeClass("on")
      	$(this).addClass("on");
    	})

      });
    function hidefx(){
      $(".rlxq").show();
      $(".jr_hot").show();
      $(".fx_box").fadeOut();
    }
    $(".qx_fx").click(function(){
      hidefx();
    })
	    },800);

	   

	    
	  
})