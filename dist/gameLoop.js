!function(e,n,t){e.gameLoop=function(o){function r(){if(i=n(r),c=t.now(),u=c-a,a=c,!(u>1e3)){for(s+=u;s>=d;)h.update(f),s-=d;m(),h.render()}}if(o=o||{},!e._isFunc(o.update)||!e._isFunc(o.render))throw Error("You must provide update() and render() functions");var a,i,c,u,p=o.fps||60,s=0,d=1e3/p,f=1/p,m=o.clearCanvas===!1?e._noop:function(){e.context.clearRect(0,0,e.canvas.width,e.canvas.height)},h={update:o.update,render:o.render,isStopped:!0,start:function(){a=t.now(),this.isStopped=!1,n(r)},stop:function(){this.isStopped=!0,cancelAnimationFrame(i)},_frame:r,set _last(e){a=e}};return h}}(kontra,requestAnimationFrame,performance);