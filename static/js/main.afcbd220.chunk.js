(this["webpackJsonpinterval-timer"]=this["webpackJsonpinterval-timer"]||[]).push([[0],{13:function(t,s,e){},14:function(t,s,e){},16:function(t,s,e){"use strict";e.r(s);var i=e(3),n=e(4),a=e(2),r=e(6),o=e(5),d=e(1),c=e.n(d),h=e(8),u=e.n(h),l=(e(13),e.p,e(14),e(0));var b=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(s){var e=s.getCLS,i=s.getFID,n=s.getFCP,a=s.getLCP,r=s.getTTFB;e(t),i(t),n(t),a(t),r(t)}))},k=function(t){Object(r.a)(e,t);var s=Object(o.a)(e);function e(t){var n;return Object(i.a)(this,e),(n=s.call(this,t)).state={break:5,storedBreak:5,session:25,storedSession:25,storedMinutes:25,minutes:25,storedSeconds:"00",seconds:"00",playing:!1,status:"Session"},n.handleClick=n.handleClick.bind(Object(a.a)(n)),n.handlePlay=n.handlePlay.bind(Object(a.a)(n)),n.sDown=n.sDown.bind(Object(a.a)(n)),n.initSec=n.initSec.bind(Object(a.a)(n)),n.handleReset=n.handleReset.bind(Object(a.a)(n)),n}return Object(n.a)(e,[{key:"handleClick",value:function(t){var s=parseInt(document.getElementById("break-length").innerHTML),e=parseInt(document.getElementById("session-length").innerHTML),i=t.target.id;s>10&&s<60&&"break-decrement"===i&&!1===this.state.playing?(this.setState({storedBreak:this.state.storedBreak-1,break:this.state.storedBreak-1}),"Break"===this.state.status&&this.setState({storedMinutes:this.state.storedBreak-1,minutes:this.state.storedBreak-1,seconds:"00"})):e>10&&e<60&&"session-decrement"===i&&!1===this.state.playing?(this.setState({storedSession:this.state.storedSession-1,session:this.state.storedSession-1}),"Session"===this.state.status&&this.setState({storedMinutes:this.state.storedSession-1,minutes:this.state.storedSession-1,seconds:"00"})):s<60&&s>10&&"break-increment"===i&&!1===this.state.playing?(this.setState({storedBreak:this.state.storedBreak+1,break:this.state.storedBreak+1}),"Break"===this.state.status&&this.setState({storedMinutes:this.state.storedBreak+1,minutes:this.state.storedBreak+1,seconds:"00"})):e<60&&e>10&&"session-increment"===i&&!1===this.state.playing?(this.setState({storedSession:this.state.storedSession+1,session:this.state.storedSession+1}),"Session"===this.state.status&&this.setState({storedMinutes:this.state.storedSession+1,minutes:this.state.storedSession+1,seconds:"00"})):e<=10&&e>1&&"session-decrement"===i&&!1===this.state.playing?(this.setState({storedSession:this.state.storedSession-1,session:this.state.storedSession-1}),"Session"===this.state.status&&this.setState({storedMinutes:"0"+(this.state.storedSession-1),minutes:"0"+(this.state.storedSession-1),seconds:"00"})):e<=10&&e>=1&&"session-increment"===i&&!1===this.state.playing?(this.setState({storedSession:this.state.storedSession+1,session:this.state.storedSession+1}),"Session"===this.state.status&&this.setState({storedMinutes:"0"+(this.state.storedSession+1),minutes:"0"+(this.state.storedSession+1),seconds:"00"})):s<=10&&s>1&&"break-decrement"===i&&!1===this.state.playing?(this.setState({storedBreak:this.state.storedBreak-1,break:this.state.storedBreak-1}),"Break"===this.state.status&&this.setState({storedMinutes:"0"+(this.state.storedBreak-1),minutes:"0"+(this.state.storedBreak-1),seconds:"00"})):s<=10&&s>=1&&"break-increment"===i&&!1===this.state.playing&&(this.setState({storedBreak:this.state.storedBreak+1,break:this.state.storedBreak+1}),"Break"===this.state.status&&this.setState({storedMinutes:"0"+(this.state.storedBreak+1),minutes:"0"+(this.state.storedBreak+1),seconds:"00"}))}},{key:"sDown",value:function(){var t=document.getElementById("time-left").innerHTML;this.state.seconds>10?this.setState({storedSeconds:this.state.storedSeconds-1,seconds:this.state.seconds-1}):this.state.seconds<=10&&this.setState({storedSeconds:this.state.storedSeconds-1,seconds:"0"+(this.state.storedSeconds-1)}),this.state.minutes>10&&!0===t.endsWith("00")?this.setState({storedMinutes:this.state.storedMinutes-1,minutes:this.state.minutes-1,storedSeconds:59,seconds:59}):this.state.minutes<=10&&!0===t.endsWith("00")&&!1===t.startsWith("00")&&this.setState({storedMinutes:this.state.storedMinutes-1,minutes:"0"+(this.state.storedMinutes-1),storedSeconds:59,seconds:59}),"00:00"===t&&"Session"===this.state.status?(document.getElementById("beep").play(),this.state.break>10?this.setState({session:this.state.storedSession,storedMinutes:this.state.break,minutes:this.state.break,seconds:"00",status:"Break"}):this.state.break<=10&&this.setState({session:this.state.storedSession,storedMinutes:"0"+this.state.break,minutes:"0"+this.state.break,seconds:"00",status:"Break"})):"00:00"===t&&"Break"===this.state.status&&(document.getElementById("beep").play(),this.state.session>10?this.setState({break:this.state.storedBreak,storedMinutes:this.state.session,minutes:this.state.session,seconds:"00",status:"Session"}):this.state.session<=10&&this.setState({break:this.state.storedBreak,storedMinutes:"0"+this.state.session,minutes:"0"+this.state.session,seconds:"00",status:"Session"}))}},{key:"initSec",value:function(){"00"===this.state.seconds&&"00"!==this.state.minutes&&(this.state.storedMinutes>10?this.setState({storedMinutes:this.state.storedMinutes-1,minutes:this.state.minutes-1,storedSeconds:60,seconds:60}):this.state.storedMinutes<=10&&this.setState({storedMinutes:this.state.storedMinutes-1,minutes:"0"+(this.state.storedMinutes-1),storedSeconds:60,seconds:60}))}},{key:"handlePlay",value:function(){setTimeout(this.initSec,1e3),!1===this.state.playing?(this.time=setInterval(this.sDown,1e3),this.setState({playing:!0})):!0===this.state.playing&&(this.setState({playing:!1}),clearInterval(this.time))}},{key:"handleReset",value:function(){document.getElementById("beep").pause(),document.getElementById("beep").currentTime=0,!0===this.state.playing&&(this.setState({playing:!1}),clearInterval(this.time)),this.setState({storedBreak:5,break:5,storedSession:25,session:25,storedMinutes:25,minutes:25,seconds:"00",playing:!1,status:"Session"})}},{key:"render",value:function(){return Object(l.jsxs)("div",{id:"display",children:[Object(l.jsx)("h1",{id:"title",children:"25 + 5 Clock"}),Object(l.jsxs)("div",{id:"lengths",children:[Object(l.jsx)(m,{click:this.handleClick,break:this.state.break}),Object(l.jsx)(S,{click:this.handleClick,session:this.state.session})]}),Object(l.jsx)(p,{minutes:this.state.minutes,seconds:this.state.seconds,status:this.state.status}),Object(l.jsx)("audio",{id:"beep",preload:"auto",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"}),Object(l.jsx)(j,{play:this.handlePlay,reset:this.handleReset})]})}}]),e}(c.a.Component),p=function(t){Object(r.a)(e,t);var s=Object(o.a)(e);function e(t){return Object(i.a)(this,e),s.call(this,t)}return Object(n.a)(e,[{key:"render",value:function(){return Object(l.jsx)("div",{id:"t-l",children:Object(l.jsxs)("div",{id:"timer-label",children:[this.props.status,Object(l.jsxs)("div",{id:"time-left",children:[this.props.minutes,":",this.props.seconds]})]})})}}]),e}(c.a.Component),m=function(t){Object(r.a)(e,t);var s=Object(o.a)(e);function e(t){return Object(i.a)(this,e),s.call(this,t)}return Object(n.a)(e,[{key:"render",value:function(){return Object(l.jsxs)("div",{id:"break-label",children:["Break Length",Object(l.jsxs)("div",{id:"b-in",children:[Object(l.jsx)("img",{onClick:this.props.click,id:"break-decrement",src:"https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png",alt:"up arrow"}),Object(l.jsx)("div",{id:"break-length",children:this.props.break}),Object(l.jsx)("img",{onClick:this.props.click,id:"break-increment",src:"https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png",alt:"up arrow"})]})]})}}]),e}(c.a.Component),S=function(t){Object(r.a)(e,t);var s=Object(o.a)(e);function e(t){return Object(i.a)(this,e),s.call(this,t)}return Object(n.a)(e,[{key:"render",value:function(){return Object(l.jsxs)("div",{id:"session-label",children:["Session Length",Object(l.jsxs)("div",{id:"s-in",children:[Object(l.jsx)("img",{onClick:this.props.click,id:"session-decrement",src:"https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png",alt:"up arrow"}),Object(l.jsx)("div",{id:"session-length",children:this.props.session}),Object(l.jsx)("img",{onClick:this.props.click,id:"session-increment",src:"https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png",alt:"up arrow"})]})]})}}]),e}(c.a.Component),j=function(t){Object(r.a)(e,t);var s=Object(o.a)(e);function e(t){return Object(i.a)(this,e),s.call(this,t)}return Object(n.a)(e,[{key:"render",value:function(){return Object(l.jsxs)("div",{id:"buttons",children:[Object(l.jsx)("img",{onClick:this.props.play,id:"start_stop",src:"https://cdn4.iconfinder.com/data/icons/music-library/39/Asset_17-512.png"}),Object(l.jsx)("img",{id:"reset",onClick:this.props.reset,src:"https://cdn1.iconfinder.com/data/icons/arrows-106/24/12-512.png"})]})}}]),e}(c.a.Component);u.a.render(Object(l.jsx)(k,{}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.afcbd220.chunk.js.map