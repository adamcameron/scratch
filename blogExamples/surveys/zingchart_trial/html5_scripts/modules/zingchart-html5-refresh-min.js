/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120731
*/
ZC.QU.push("refresh");ZC.HZ.prototype.TK=function(){for(var a=0,b=0,d=this.B9.length;b<d;b++)if(this.B9[b].AC=="k")a=ZC.BR(a,this.o[this.B9[b].BH][ZC._[5]].length);b=0;for(d=this.B0.AA.length;b<d;b++)if(this.o[ZC._[13]][b]!=null)a=ZC.BR(a,this.o[ZC._[13]][b][ZC._[5]].length);return a};
ZC.HZ.prototype.VH=function(){for(var a=this.TK(),b=0,d=this.B9.length;b<d;b++)if(this.B9[b].AC=="k"){if(this.B9[b].EP){var c=(this.B9[b].E-this.B9[b].A2-this.B9[b].CK)/ZC._i_(this.IK["max-ticks"]);this.B9[b].M1=ZC.BR(0,this.B9[b].E-a*c)}else{c=(this.B9[b].G-this.B9[b].A2-this.B9[b].CK)/ZC._i_(this.IK["max-ticks"]);this.B9[b].M1=ZC.BR(0,this.B9[b].G-a*c)}this.B9[b].A2=this.B9[b].U3+this.B9[b].M1;this.B9[b].W=ZC.BR(0,this.B9[b].A0-this.IK["max-ticks"]+1);this.B9[b].JZ()}};
ZC.HZ.prototype.A14=function(){var a=this;if(a.IK!=null){var b=ZC._i_(a.IK.interval);b=b>=50?b:1E3*b;if(a.IK.type=="full")window.setTimeout(function(){a.A.J0(a);ZC.SJ(function(){a.A.load(a.P,a.YP)})},b);else if(a.IK.type=="feed"&&a.IK.url!=null){if(a.IK.curtain!=null){var d=a.BB("k");if(d.length>0){ZC.L.FA(a.P+"-curtain-t");if(d[0].M1>0){var c=new ZC.D1(a);a.A.AR.load(c.o,"("+a.AC+").refresh.curtain");c.append(a.IK.curtain);c.parse();if(c.AM){c.P=a.P+"-curtain-t";c.GO=ZC.AN(a.A.P+"-text-top");if(d[0].EP){c.iX=
a.O.iX;c.iY=d[0].AF?a.O.iY:a.O.iY+a.O.E-d[0].M1;c.G=a.O.G;c.E=d[0].M1}else{c.iX=d[0].AF?a.O.iX+a.O.G-d[0].M1:a.O.iX;c.iY=a.O.iY;c.G=d[0].M1;c.E=a.O.E}c.X=c.BT=ZC.AN(a.P+"-scales-ml-0-c");c.paint()}}}}var k=ZC._i_(a.IK["reset-timeout"]),l=ZC._i_(a.IK["stop-timeout"]);window.setTimeout(function(){if(a.L6[0]==1){a.A.J0(a);var m=[a.A.I7=="query-string"?"zcrandom="+Math.random():"",zingchart.ZCOUTPUT?"zcoutput="+a.H.A5:""].join("&");ZC.A3.ajax({type:"GET",url:a.IK.url,beforeSend:function(f){!a.A.LF.data&&
a.A.I7=="http-headers"&&f.setRequestHeader(ZC._[47],ZC._[48])},data:m,dataType:"text",error:function(){},success:function(f){f=eval("("+f+")");f=f instanceof Array?f:[f];for(var i=0,n=f.length;i<n;i++){for(var g=f[i],e=0,j=a.B9.length;e<j;e++)if(a.B9[e].AC=="k"){var h=a.B9[e].BH;if(g[h]!=null&&a.o[h]!=null){if(a.o[h][ZC._[5]]==null)a.o[h][ZC._[5]]=[];a.o[h][ZC._[5]].push(g[h]);if(a.o[h][ZC._[5]].length>k||a.L6[1]==1)a.o[h][ZC._[5]]=[]}}e=0;for(j=a.B0.AA.length;e<j;e++)if(a.o[ZC._[13]][e]!=null){if(g["plot-"+
e]!=null)a.o[ZC._[13]][e][ZC._[5]].push(g["plot-"+e]);else g["plot"+e]!=null&&a.o[ZC._[13]][e][ZC._[5]].push(g["plot"+e]);if(a.o[ZC._[13]][e][ZC._[5]].length>k||a.L6[1]==1)a.o[ZC._[13]][e][ZC._[5]]=[]}g=a.TK()}if(a.L6[1]==1)a.L6[1]=0;if(g<=l||l==0)ZC.SJ(function(){if(ZC.AN(a.A.P+"-main")){a.parse();a.clear(true);a.VH();a.paint(true,true)}})}})}},b)}}};
zingchart.A0V=function(a,b,d){if(document.getElementById("zc-fullscreen"))a="zc-fullscreen";d=d||{};if(typeof d=="string")d=JSON.parse(d);a=zingchart.getLoader(a);if(a!=null){var c=a.BS(d[ZC._[3]]);switch(b){case "clearfeed":c.L6[1]=1;break;case "getinterval":return c.IK.interval;case "setinterval":c.o.refresh=c.o.refresh||{};c.o.refresh.interval=d.interval||1;break;case "stopfeed":c.L6[0]=0;break;case "startfeed":c.L6[0]=1;ZC.SJ(function(){c.parse();c.clear(true);c.VH();c.paint(true,true)})}}return null};