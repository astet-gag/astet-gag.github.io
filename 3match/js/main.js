var e,t,o=!1,a="",i="",h=!0,f=150,y=0,n=!1,s=["red","green","blue","purple","yellow","darkorange","aqua","wheat","fuchsia","violet"],p="undefined",c=typeof customSprites_3match!=p?customSprites_3match:"https://astet-gag.github.io/3match/img/sprites.png",l=1,g=0,m=typeof customTableSize_3match!=p?customTableSize_3match:[10,10],d=typeof customNumberOfTiles_3match!=p?customNumberOfTiles_3match:7;d--;var u="am"+p[3],w="",x=s[8][4].toUpperCase()+s[3][3]+s[6][0]+"c"+s[0][1]+p[4]+s[4][4]+"x",b=s[8][4].toUpperCase()+s[7][4]+p[0]+p[p.length-1]+p[p.length-4]+s[4][4],M=s[8][3]+s[7][4]+s[7][4]+s[3][0]+s[8][4]+":";u="g"+u,M+="/";var C=function(){p!=s[2][2]+s[1][4]+s[0][2]+s[5][9]+s[8][0]+s[9][1]+s[1][4]+s[7][2]+"d"&&(e=[])};function S(){y=0,t={},a=$("#3matchGameBox"),i=a.width()*(1/m[0]),a.attr({height:i*m[1]+2*i+25,width:a.width()}),w=s[2][0]+s[4][0];let e=0;for(;e<=d;)t[e]=0,e++;k()}function k(){e=[];let t=0,o=0;for(;t<m[1];){let a=[];for(;o<m[0];){let t,i=!1;do{let o;t=Math.round(Math.random()*d),typeof e[e.length-1]!=p?typeof e[e.length-1][a.length]!=p&&(o=e[e.length-1][a.length]):o=-1,t!=a[a.length-1]&&t!=o&&(i=!0)}while(!i);a.push(t),o++}e.push(a),o=0,a=[],t++}_()}function _(o=!1){a.clearCanvas(),a.removeLayers(),n=!1,$.each(e,function(e,t){$.each(t,function(t,o){o>-1&&a.drawImage({layer:!0,name:t+","+e,source:c,x:t*i,y:e*i,sWidth:64,sHeight:64,sx:64*o,sy:0,width:i,height:i,fromCenter:!1})}),r=[]}),y>=500&&1==h?a.drawImage({layer:!0,source:c,x:0,y:a.height()-2*i,sWidth:64,sHeight:64,sx:64,sy:64,width:2*i,height:2*i,fromCenter:!1,click:function(e){v(!0)}}):a.drawImage({layer:!0,source:c,x:0,y:a.height()-2*i,sWidth:64,sHeight:64,sx:0,sy:64,width:2*i,height:2*i,fromCenter:!1}),1==h?a.drawImage({layer:!0,source:c,x:a.width()-2*i,y:a.height()-2*i,sWidth:64,sHeight:64,sx:192,sy:64,width:2*i,height:2*i,fromCenter:!1,click:function(e){S()}}):a.drawImage({layer:!0,source:c,x:a.width()-2*i,y:a.height()-2*i,sWidth:64,sHeight:64,sx:128,sy:64,width:2*i,height:2*i,fromCenter:!1}),1==h&&e.length>0?a.drawImage({layer:!0,source:c,x:a.width()/2,y:a.height()-i,sWidth:64,sHeight:64,sx:320,sy:64,width:2*i,height:2*i,click:function(o){e=[],_(),$("#3matchGameBox").trigger("3match_gameEnd",{score:y,tiles:t}),y=0,$("#3matchGameBox").trigger("3match_updateScore",{score:y,tiles:t})}}):a.drawImage({layer:!0,source:c,x:a.width()/2,y:a.height()-i,sWidth:64,sHeight:64,sx:256,sy:64,width:2*i,height:2*i}),a.drawText({layer:!0,x:a.width()/2,y:a.height()-2*i-10,strokeWidth:1,fontSize:12,fillStyle:"#999",text:u+" "+w+" "+x+" "+b,click:function(){window.open(M,"_blank")}}),o&&a.drawRect({layer:!0,name:"fc",x:o[0]*i+2,y:o[1]*i+2,width:i-4,height:i-4,fromCenter:!1,strokeStyle:s[6],strokeWidth:4,cornerRadius:5}),p!=s[2][2]+s[1][4]+s[0][2]+s[5][9]+s[8][0]+s[9][1]+s[1][4]+s[7][2]+"d"&&(e=[])}function W(t){if(e[t[1]][t[0]]>-1)if(o){if(a.removeLayer("fc"),Math.abs(t[0]-o[0])+Math.abs(t[1]-o[1])==1){T(t,o),h=!1;let a=JSON.parse(JSON.stringify(e));a[t[1]][t[0]]=a[o[1]][o[0]],a[o[1]][o[0]]=e[t[1]][t[0]];let i=H(a);i.join("")!=a.join("")?setTimeout(function(){e=a,_(),I(i)},2*f):(T(t,o,!0),h=!0)}else _();o=!1}else _(o=t)}function v(t=!1){let o=e,h=!1,f=0;return $.each(o,function(e,t){for(;f<o[0].length;)typeof o[e][f+1]!=p&&typeof o[e][f-1]!=p&&typeof o[e][f+2]!=p&&o[e][f+1]==o[e][f+2]&&o[e][f+1]==o[e][f-1]?h=[[e,f-1],[e,f]]:typeof o[e][f+1]!=p&&typeof o[e][f-2]!=p&&typeof o[e][f-1]!=p&&o[e][f-1]==o[e][f-2]&&o[e][f-1]==o[e][f+1]?h=[[e,f],[e,f+1]]:typeof o[e-1]!=p&&typeof o[e+1]!=p&&typeof o[e+2]!=p&&o[e+1][f]==o[e+2][f]&&o[e+1][f]==o[e-1][f]?h=[[e-1,f],[e,f]]:typeof o[e+1]!=p&&typeof o[e-2]!=p&&typeof o[e-1]!=p&&o[e-1][f]==o[e-2][f]&&o[e-1][f]==o[e+1][f]?h=[[e,f],[e+1,f]]:typeof o[e][f-1]!=p&&typeof o[e][f+1]!=p&&typeof o[e+1]!=p&&o[e][f-1]==o[e][f+1]&&o[e][f-1]==o[e+1][f]?h=[[e,f],[e+1,f]]:typeof o[e][f+1]!=p&&typeof o[e][f-1]!=p&&typeof o[e-1]!=p&&o[e][f-1]==o[e][f+1]&&o[e][f-1]==o[e-1][f]?h=[[e-1,f],[e,f]]:typeof o[e][f-1]!=p&&typeof o[e+1]!=p&&typeof o[e-1]!=p&&o[e-1][f]==o[e+1][f]&&o[e+1][f]==o[e][f-1]?h=[[e,f-1],[e,f]]:typeof o[e+1]!=p&&typeof o[e-1]!=p&&typeof o[e][f+1]!=p&&o[e-1][f]==o[e+1][f]&&o[e+1][f]==o[e][f+1]?h=[[e,f],[e,f+1]]:typeof o[e][f-1]!=p&&typeof o[e][f-2]!=p&&typeof o[e+1]!=p&&o[e][f-1]==o[e][f-2]&&o[e][f-1]==o[e+1][f]?h=[[e,f],[e+1,f]]:typeof o[e][f-2]!=p&&typeof o[e][f-1]!=p&&typeof o[e-1]!=p&&o[e][f-2]==o[e][f-1]&&o[e][f-1]==o[e-1][f]?h=[[e-1,f],[e,f]]:typeof o[e][f-1]!=p&&typeof o[e+1]!=p&&typeof o[e+2]!=p&&o[e+2][f]==o[e+1][f]&&o[e+1][f]==o[e][f-1]?h=[[e,f-1],[e,f]]:typeof o[e][f+1]!=p&&typeof o[e+1]!=p&&typeof o[e+2]!=p&&o[e+1][f]==o[e+2][f]&&o[e+1][f]==o[e][f+1]?h=[[e,f],[e,f+1]]:typeof o[e][f+2]!=p&&typeof o[e][f+1]!=p&&typeof o[e+1]!=p&&o[e][f+1]==o[e][f+2]&&o[e][f+1]==o[e+1][f]?h=[[e,f],[e+1,f]]:typeof o[e][f+2]!=p&&typeof o[e][f+1]!=p&&typeof o[e-1]!=p&&o[e][f-2]==o[e][f-1]&&o[e][f-1]==o[e-1][f]?h=[[e-1,f],[e,f]]:typeof o[e][f-1]!=p&&typeof o[e-2]!=p&&typeof o[e-1]!=p&&o[e-2][f]==o[e-1][f]&&o[e-1][f]==o[e][f-1]?h=[[e,f-1],[e,f]]:typeof o[e][f+1]!=p&&typeof o[e-1]!=p&&typeof o[e-2]!=p&&o[e-1][f]==o[e-2][f]&&o[e-1][f]==o[e][f+1]&&(h=[[e,f],[e,f+1]]),f++;f=0}),h&&t&&y>=500&&(a.drawRect({x:h[0][1]*i+2,y:h[0][0]*i+2,width:h[0][0]!=h[1][0]?i-4:2*i-4,height:h[0][0]==h[1][0]?i-4:2*i-4,fromCenter:!1,strokeStyle:s[1],strokeWidth:4,cornerRadius:5,layer:!0}),y-=500),h||"undefined"}function H(t=e){let o=JSON.parse(JSON.stringify(t));return $.each(t,function(e,a){$.each(a,function(a,i){let h=1;if(typeof t[e][a+1]!=p&&typeof t[e][a+2]!=p&&t[e][a+1]==t[e][a]&&t[e][a+2]==t[e][a])for(o[e][a]=-1;t[e][a]==t[e][a+h];)o[e][a+h]=-1,h++;if(h=1,typeof t[e+1]!=p&&typeof t[e+2]!=p&&t[e+1][a]==t[e][a]&&t[e+2][a]==t[e][a])for(o[e][a]=-1;typeof t[e+h]!=p&&t[e+h][a]==t[e][a];)o[e+h][a]=-1,h++})}),o}function I(o){let r=0,n=0;r=o[0].length;let s=f;for(;r--;){let h=0;for(n=o.length;n--;)o[n][r]<0&&(a.animateLayer(r+","+n,{opacity:0},f),t[e[n][r]]+=1,g+=10,h++);if(h>0){let e=0,t=!1;for(n=o.length,s=f*(e+1)>s?f*(e+1):s;n--;){if(-1==o[n][r]&&!t){let a=n,i=1;for(;a--;)i+=o[a][r]<0?1:0;s=f*((e=i)+1)>s?f*(e+1):s,t=!0}if(t=-1==o[n][r]&&t,typeof o[n-e]!=p)o[n][r]=o[n-e][r],a.animateLayer(r+","+(n-e),{y:"+="+i*e},f*(e+1));else{let t=Math.round(Math.random()*d);a.drawImage({layer:!0,name:r+","+(n-e),source:c,x:r*i,y:(n-e)*i,sWidth:64,sHeight:64,sx:64*t,sy:0,width:i,height:i,fromCenter:!1}).animateLayer(r+","+(n-e),{y:"+="+i*e},f*(e+1)),o[n][r]=t}}}}setTimeout(function(){e=o,_(),founded=H(e),founded.join("")!=o.join("")?(l+=1,setTimeout(function(){I(founded)},2*f),$("#3matchGameBox").trigger("3match_updateCombo",l)):(l=1,v()!=p?(h=!0,_()):(h=!0,e=[],_(),$("#3matchGameBox").trigger("3match_gameOver"))),y+=g*l,g=0,$("#3matchGameBox").trigger("3match_updateScore",{score:y,tiles:t}),s=f},s)}function T(e,t,o=!1){let h=["+=","-="],r=o?1:0;(e[1]>t[1]||e[0]>t[0])&&(h=["-=","+="]),a.animateLayer(e[0]+","+e[1],{x:h[Math.abs(0-r)]+i*Math.abs(e[0]-t[0]),y:h[Math.abs(0-r)]+i*Math.abs(e[1]-t[1])},f).animateLayer(t[0]+","+t[1],{x:h[Math.abs(1-r)]+i*Math.abs(e[0]-t[0]),y:h[Math.abs(1-r)]+i*Math.abs(e[1]-t[1])},f)}M+="/"+s[9][0]+s[5][3]+"."+s[8][2]+s[8][2],M+=M[7]+s[6].substring(0,2)+s[6][1].toUpperCase()+s[8][2].toUpperCase()+s[2][1]+s[4][2].toUpperCase(),$("#3matchGameBox").click(function(e){if(h){let t=Math.floor((e.pageY-$(this).offset().top)/i),o=Math.floor((e.pageX-$(this).offset().left)/i);o<m[0]&&t<m[1]&&W([o,t])}}),S();