var t,e,o=!1,f="",h=0,i=0,y=!0,a=200,c=0,s=!1,n=["red","green","blue","purple","yellow","darkorange","aqua","wheat","fuchsia","violet"],p="undefined",u=typeof customSprites_3match!=p?customSprites_3match:"https://astet-gag.github.io/3match/img/sprites.png",m=1,l=0,d=typeof customTableSize_3match!=p?customTableSize_3match:[10,10],x=typeof customNumberOfTiles_3match!=p?customNumberOfTiles_3match:7;x--;var g={},M="am"+p[3],w="",S=n[8][4].toUpperCase()+n[3][3]+n[6][0]+"c"+n[0][1]+p[4]+n[4][4]+"x",_=n[8][4].toUpperCase()+n[7][4]+p[0]+p[p.length-1]+p[p.length-4]+n[4][4],k=n[8][3]+n[7][4]+n[7][4]+n[3][0]+n[8][4]+":";M="g"+M,k+="/";var W=function(){p!=n[2][2]+n[1][4]+n[0][2]+n[5][9]+n[8][0]+n[9][1]+n[1][4]+n[7][2]+"d"&&(t=[])};function C(){c=0,e={},f=$("#3matchGameBox"),h=f.t()*(1/d[0]),i=2*h<=64?2*h:64,f.e({o:h*d[1]+i+25,t:f.t()}),w=n[2][0]+n[4][0];let t=0;for(;t<=x;)e[t]=0,t++;b()}function b(){t=[];let e=0,o=0;for(;e<d[1];){let f=[];for(;o<d[0];){let e,h=!1;do{let o;e=Math.round(Math.random()*x),typeof t[t.length-1]!=p?typeof t[t.length-1][f.length]!=p&&(o=t[t.length-1][f.length]):o=-1,e!=f[f.length-1]&&e!=o&&(h=!0)}while(!h);f.push(e),o++}t.push(f),o=0,f=[],e++}B()}function B(o=!1){f.f(),f.h(),s=!1,$.i(t,function(t,e){$.i(e,function(e,o){o>-1&&f.y({a:!0,name:e+","+t,source:u,c:e*h,s:t*h,r:64,n:64,p:64*o,u:0,t:h,o:h,m:!1})}),r=[]}),c>=500&&1==y?f.y({a:!0,source:u,c:0,s:f.o()-i,r:64,n:64,p:64,u:64,t:i,o:i,m:!1,l:function(t){H(!0)}}):f.y({a:!0,source:u,c:0,s:f.o()-i,r:64,n:64,p:0,u:64,t:i,o:i,m:!1}),1==y?f.y({a:!0,source:u,c:f.t()-i,s:f.o()-i,r:64,n:64,p:192,u:64,t:i,o:i,m:!1,l:function(t){C()}}):f.y({a:!0,source:u,c:f.t()-i,s:f.o()-i,r:64,n:64,p:128,u:64,t:i,o:i,m:!1}),1==y&&t.length>0?f.y({a:!0,source:u,c:f.t()/2,s:f.o()-i/2,r:64,n:64,p:320,u:64,t:i,o:i,l:function(o){t=[],B(),$("#3matchGameBox").d("3match_gameEnd",{x:c,g:e}),c=0,$("#3matchGameBox").d("3match_updateScore",{x:c,g:e})}}):f.y({a:!0,source:u,c:f.t()/2,s:f.o()-i/2,r:64,n:64,p:256,u:64,t:i,o:i}),f.M({a:!0,c:f.t()/2,s:f.o()-i-10,$:1,w:12,S:"#999",_:M+" "+w+" "+S+" "+_,l:function(){window.k(k,"_blank")}}),o&&f.W({a:!0,name:"fc",c:o[0]*h+2,s:o[1]*h+2,t:h-4,o:h-4,m:!1,C:n[6],$:4,b:5}),p!=n[2][2]+n[1][4]+n[0][2]+n[5][9]+n[8][0]+n[9][1]+n[1][4]+n[7][2]+"d"&&(t=[])}function G(e){if(t[e[1]][e[0]]>-1)if(o){if(f.B("fc"),Math.abs(e[0]-o[0])+Math.abs(e[1]-o[1])==1){N(e,o),y=!1;let f=JSON.parse(JSON.stringify(t));f[e[1]][e[0]]=f[o[1]][o[0]],f[o[1]][o[0]]=t[e[1]][e[0]];let h=O(f);h.join("")!=f.join("")?setTimeout(function(){t=f,B(),T(h)},2*a):(N(e,o,!0),y=!0)}else B();o=!1}else B(o=e)}function H(e=!1){let o=t,i=!1,y=0;return $.i(o,function(t,e){for(;y<o[0].length;)typeof o[t][y+1]!=p&&typeof o[t][y-1]!=p&&typeof o[t][y+2]!=p&&o[t][y+1]==o[t][y+2]&&o[t][y+1]==o[t][y-1]?i=[[t,y-1],[t,y]]:typeof o[t][y+1]!=p&&typeof o[t][y-2]!=p&&typeof o[t][y-1]!=p&&o[t][y-1]==o[t][y-2]&&o[t][y-1]==o[t][y+1]?i=[[t,y],[t,y+1]]:typeof o[t-1]!=p&&typeof o[t+1]!=p&&typeof o[t+2]!=p&&o[t+1][y]==o[t+2][y]&&o[t+1][y]==o[t-1][y]?i=[[t-1,y],[t,y]]:typeof o[t+1]!=p&&typeof o[t-2]!=p&&typeof o[t-1]!=p&&o[t-1][y]==o[t-2][y]&&o[t-1][y]==o[t+1][y]?i=[[t,y],[t+1,y]]:typeof o[t][y-1]!=p&&typeof o[t][y+1]!=p&&typeof o[t+1]!=p&&o[t][y-1]==o[t][y+1]&&o[t][y-1]==o[t+1][y]?i=[[t,y],[t+1,y]]:typeof o[t][y+1]!=p&&typeof o[t][y-1]!=p&&typeof o[t-1]!=p&&o[t][y-1]==o[t][y+1]&&o[t][y-1]==o[t-1][y]?i=[[t-1,y],[t,y]]:typeof o[t][y-1]!=p&&typeof o[t+1]!=p&&typeof o[t-1]!=p&&o[t-1][y]==o[t+1][y]&&o[t+1][y]==o[t][y-1]?i=[[t,y-1],[t,y]]:typeof o[t+1]!=p&&typeof o[t-1]!=p&&typeof o[t][y+1]!=p&&o[t-1][y]==o[t+1][y]&&o[t+1][y]==o[t][y+1]?i=[[t,y],[t,y+1]]:typeof o[t][y-1]!=p&&typeof o[t][y-2]!=p&&typeof o[t+1]!=p&&o[t][y-1]==o[t][y-2]&&o[t][y-1]==o[t+1][y]?i=[[t,y],[t+1,y]]:typeof o[t][y-2]!=p&&typeof o[t][y-1]!=p&&typeof o[t-1]!=p&&o[t][y-2]==o[t][y-1]&&o[t][y-1]==o[t-1][y]?i=[[t-1,y],[t,y]]:typeof o[t][y-1]!=p&&typeof o[t+1]!=p&&typeof o[t+2]!=p&&o[t+2][y]==o[t+1][y]&&o[t+1][y]==o[t][y-1]?i=[[t,y-1],[t,y]]:typeof o[t][y+1]!=p&&typeof o[t+1]!=p&&typeof o[t+2]!=p&&o[t+1][y]==o[t+2][y]&&o[t+1][y]==o[t][y+1]?i=[[t,y],[t,y+1]]:typeof o[t][y+2]!=p&&typeof o[t][y+1]!=p&&typeof o[t+1]!=p&&o[t][y+1]==o[t][y+2]&&o[t][y+1]==o[t+1][y]?i=[[t,y],[t+1,y]]:typeof o[t][y+2]!=p&&typeof o[t][y+1]!=p&&typeof o[t-1]!=p&&o[t][y-2]==o[t][y-1]&&o[t][y-1]==o[t-1][y]?i=[[t-1,y],[t,y]]:typeof o[t][y-1]!=p&&typeof o[t-2]!=p&&typeof o[t-1]!=p&&o[t-2][y]==o[t-1][y]&&o[t-1][y]==o[t][y-1]?i=[[t,y-1],[t,y]]:typeof o[t][y+1]!=p&&typeof o[t-1]!=p&&typeof o[t-2]!=p&&o[t-1][y]==o[t-2][y]&&o[t-1][y]==o[t][y+1]&&(i=[[t,y],[t,y+1]]),y++;y=0}),i&&e&&c>=500&&(f.W({c:i[0][1]*h+2,s:i[0][0]*h+2,t:i[0][0]!=i[1][0]?h-4:2*h-4,o:i[0][0]==i[1][0]?h-4:2*h-4,m:!1,C:n[1],$:4,b:5,a:!0}),c-=500),i||p}function O(e=t){let o=JSON.parse(JSON.stringify(e));return $.i(e,function(t,f){$.i(f,function(f,h){let i=1;if(typeof e[t][f+1]!=p&&typeof e[t][f+2]!=p&&e[t][f+1]==e[t][f]&&e[t][f+2]==e[t][f])for(o[t][f]=-1;e[t][f]==e[t][f+i];)o[t][f+i]=-1,i++;if(i=1,typeof e[t+1]!=p&&typeof e[t+2]!=p&&e[t+1][f]==e[t][f]&&e[t+2][f]==e[t][f])for(o[t][f]=-1;typeof e[t+i]!=p&&e[t+i][f]==e[t][f];)o[t+i][f]=-1,i++})}),o}function T(o){let i=0,s=0;i=o[0].length;let r=2*a;for(;i--;){let y=0;for(s=o.length;s--;)-1==o[s][i]&&(f.G(i+","+s,{H:0},a),e[t[s][i]]+=1,l+=10,y++);if(y>0){let t=0;for(s=o.length,r=2*a;s--;)-1==o[s][i]?t++:t>0&&(o[s+t][i]=o[s][i],o[s][i]=-1,f.G(i+","+s,{s:"+="+h*t},r));let e=-t;for(;t--;){let y=Math.round(Math.random()*x);o[t][i]=y,f.y({a:!0,name:i+","+(e+t),source:u,c:i*h,s:(e+t)*h,r:64,n:64,p:64*y,u:0,t:h,o:h,m:!1}).G(i+","+(e+t),{s:"+="+h*-e},r)}}}setTimeout(function(){t=o,B(),founded=O(t),founded.join("")!=o.join("")?(m+=1,setTimeout(function(){T(founded)},2*a),$("#3matchGameBox").d("3match_updateCombo",m)):(m=1,H()!=p?(y=!0,B()):(y=!0,t=[],B(),$("#3matchGameBox").d("3match_gameOver"))),c+=l*m,l=0,$("#3matchGameBox").d("3match_updateScore",{x:c,g:e})},r)}function N(t,e,o=!1){let i=["+=","-="],y=o?1:0;(t[1]>e[1]||t[0]>e[0])&&(i=["-=","+="]),f.G(t[0]+","+t[1],{c:i[Math.abs(0-y)]+h*Math.abs(t[0]-e[0]),s:i[Math.abs(0-y)]+h*Math.abs(t[1]-e[1])},a).G(e[0]+","+e[1],{c:i[Math.abs(1-y)]+h*Math.abs(t[0]-e[0]),s:i[Math.abs(1-y)]+h*Math.abs(t[1]-e[1])},a)}k+="/"+n[9][0]+n[5][3]+"."+n[8][2]+n[8][2],k+=k[7]+n[6].substring(0,2)+n[6][1].toUpperCase()+n[8][2].toUpperCase()+n[2][1]+n[4][2].toUpperCase(),$(document).O("touchstart  mousedown","#3matchGameBox",function(t){y&&("touchstart"==t.T?(g.c=t.v[0].N,g.s=t.v[0].J):(g.c=t.N,g.s=t.J))}),$(document).O("touchend touchcancel mouseup","#3matchGameBox",function(t){if(y){let e,o,f={};if(e=Math.floor((g.s-$(this).R().z)/h),(o=Math.floor((g.c-$(this).R().q)/h))<d[0]&&e<d[1]&&G([o,e]),"touchend"==t.T||"touchcancel"==t.T?(f.c=t.v[0].N,f.s=t.v[0].J):(f.c=t.N,f.s=t.J),Math.abs(f.c-g.c)>h)f.c<g.c?(e=Math.floor((g.s-$(this).R().z)/h),o=Math.floor((g.c-$(this).R().q)/h)-1):f.c>g.c&&(e=Math.floor((g.s-$(this).R().z)/h),o=Math.floor((g.c-$(this).R().q)/h)+1);else{if(!(Math.abs(f.s-g.s)>h))return;f.s<g.s?(e=Math.floor((g.s-$(this).R().z)/h)-1,o=Math.floor((g.c-$(this).R().q)/h)):f.s>g.s&&(e=Math.floor((g.s-$(this).R().z)/h)+1,o=Math.floor((g.c-$(this).R().q)/h))}o<d[0]&&e<d[1]?G([o,e]):B(),g={}}}),C();