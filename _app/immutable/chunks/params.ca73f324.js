import{w as me,b as ge}from"./paths.19e63d04.js";const ue="@riadh-adrani-theme",pe=e=>{localStorage.setItem(ue,JSON.stringify(e))},le=me(!1),oe=e=>le.update(M=>{var p;const w=typeof e=="boolean"?e:!M;return pe(w),(p=document.querySelector(":root"))==null||p.setAttribute("data-theme",w?"dark":"light"),w}),ke=()=>{const e=localStorage.getItem(ue);e?oe(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&oe(!0)},ne=e=>`${ge}/logos/${e}`,s=(e,M)=>M?{dark:ne(M),light:ne(e)}:ne(e),y={AWS:s("aws.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),FastApi:s("fastapi"),Flask:s("flask.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetees.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg"),Cornell:s("cornell.svg"),Stanford:s("stanford.svg"),Appdev:s("cornell-appdev.png"),VenturesAccelerated:s("va.png"),Flare:s("flare.png"),Bf:s("brainfuck.svg"),MLModels:s("mlmodels.png"),ML:s("ml.png"),OCaml:s("ocaml.svg")};let ce;le.subscribe(e=>ce=e);const De=e=>typeof e=="string"?e:ce?e.dark:e.light,fe=[{degree:"BS in Computer Science",description:"",location:"Ithaca - NY",logo:y.Cornell,name:"",organization:"Cornell University",period:{from:new Date(2021,11,1)},shortDescription:"",slug:"dummy-education-item",subjects:["OOP","Python","Java","OCaml","Discrete Math"]},{degree:"Undergraduate Summer Session",description:"",location:"Palo Alto - CA",logo:y.Stanford,name:"",organization:"Stanford University",period:{from:new Date(2020,6,1),to:new Date(2020,8,1)},shortDescription:"",slug:"dummy-education-item-2",subjects:["HTML/CSS","C++","Algorithms and Data structures"]}],x=e=>e,he=[x({slug:"Python",color:"blue",description:"I know Python",logo:y.Python,name:"Python"}),x({slug:"Rust",color:"orange",description:"I know Rust",logo:y.Rust,name:"Rust"}),x({slug:"Java",color:"blue",description:"I know Java",logo:y.Java,name:"Java"}),x({slug:"js",color:"yellow",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:y.JavaScript,name:"Javascript"}),x({slug:"ts",color:"blue",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:y.TypeScript,name:"Typescript"}),x({slug:"reactjs",color:"cyan",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",logo:y.ReactJs,name:"React Js"}),x({slug:"Flask",color:"black",description:"I know Flask",logo:y.Flask,name:"Flask"}),x({slug:"Docker",color:"blue",description:"I know Docker",logo:y.Docker,name:"Docker"}),x({slug:"ML",color:"blue",description:"I know ML",logo:y.ML,name:"Machine Learning"}),x({slug:"OCaml",color:"orange",description:"I know OCaml",logo:y.OCaml,name:"OCaml"})],q=(...e)=>he.filter(M=>e.includes(M.slug));var G=(e=>(e.GitHub="github",e.Linkedin="linkedin",e.Email="email",e))(G||{}),ae=(e=>(e.FullTime="Full-time",e.PartTime="Part-time",e.SelfEmployed="Self-employed",e.Freelance="Freelance",e.Contract="Contract",e.Internship="Internship",e))(ae||{});const ve=[{slug:"Hackathon Runnerup",company:"Cornell Appdev",description:"Runnerup for best backend at the Cornell AppDev annual hackathon out of 30 teams.",contract:ae.SelfEmployed,type:"Software Development",location:"Ithaca NY",period:{from:new Date(2022,11,1),to:new Date(2022,12,1)},skills:q("Python","Flask","Docker"),name:"Backend Developer",color:"#FF7F7F",links:[{to:"https://github.com/lcasasp/Cornell-Hitch",label:"GitHub"}],logo:y.Appdev,shortDescription:"Runnerup for best backend at the Cornell AppDev annual hackathon out of 30 teams."},{slug:"Ventures Accelerated",company:"Ventures Accelerated",description:"Worked with the Cornell Entrepreneurship community to guide and mentor startups in their software development.",contract:ae.Internship,type:"Software Development",location:"Ithaca NY",period:{from:new Date},skills:q("Rust","Python","ts","reactjs","css","html","js"),name:"Ventures Accelerated SWE Fellow",color:"#ffffff",links:[{to:"https://www.venturesaccelerated.org/",label:"Ventures Accelerated"}],logo:y.VenturesAccelerated,shortDescription:""}],be=[{slug:"Flare",color:"#5e95e3",description:`
				Flare is a cutting-edge search engine powered by Lucene, designed to provide users with unbiased and comprehensive 
			insights into the global climate and energy crisis. It aggregates current events and news media from diverse 
			sources, eliminating bias and delivering tailored results to inform and empower users.
			`,shortDescription:`
				Flare is a cutting-edge search engine powered by Lucene, designed to provide users with unbiased and comprehensive 
			insights into the global climate and energy crisis. It aggregates current events and news media from diverse 
			sources, eliminating bias and delivering tailored results to inform and empower users.
			`,links:[{to:"https://github.com/lcasasp/Flare",label:"GitHub"}],logo:y.Flare,name:"Flare",period:{from:new Date(2023,6,1),to:new Date(2023,8,1)},skills:q("reactjs","Python","Flask"),type:"Search Engine"},{slug:"bf-interpreter",color:"#ff3e00",description:"A Bf language interpreter written in Rust, meant to challenge me in learning Rust and handling memory management",shortDescription:"A Bf language interpreter written in Rust, meant to challenge me in learning Rust and handling memory management",links:[{to:"https://github.com/lcasasp/bf-Interpreter",label:"GitHub"}],logo:y.Bf,name:"Brainf*** Interpreter",period:{from:new Date},skills:q("Rust"),type:"Interpreter",screenshots:[{label:"mandelbrot.bf",src:"/lcasasp.github.io/screenshots/mandelbrot.png"},{label:"Public API",src:"/lcasasp.github.io/screenshots/bf-interpreter.png"}]},{slug:"Cornell-Hitch",color:"#ff3e00",description:`Cornell hitch is an app that uses google to authenticate 
			cornell users (through cornell.edu email) and has a posting board 
			for users to post and find rides going to cities. All rides 
			originate in ithaca and the app has a direct messaging system to 
			promote privacy. The idea of this app is to have Cornell students 
			post their rides given destination and date, and that allows others
			to view and message the ride host to form a deal and navigate 
			together. This saves costs for both parties involved. Using 
			Distance Matrix API, the distance was calculated for each ride, 
			and that can be used to calculate costs on front-end for each ride.
			

			Backend requirements: Using Flask, I have made a db file with 
			classes User, Ride, and Message in order to form an API that 
			uses many to many relationships to best gather all the data for 
			front-end. Additionally, googlemaps API's are used to calculate 
			distance among the destinations selected and thus giving front end
			space to handle cost estimates. I have fully deployed the server, 
			but there is one thing to note. Login routes will not work with 
			OAuth because the server does not use a top level domain. However,
			if testing on a local url, the Oauth works perfectly and uses 
			organization only specifications to only allow cornell students 
			to add to database. In order to fix OAuth for the deployment stage,
			a top level domain would be needed for deployment to host the 
			server there instead, but for the scope of this project I felt 
			that was not necessary.`,shortDescription:"A ride sharing app for Cornell Students, best backend runnerup at the Cornell Appdev annual hackathon out of 30 teams",links:[{to:"https://github.com/lcasasp/Cornell-Hitch",label:"GitHub"}],logo:y.Appdev,name:"Cornell Hitch",period:{from:new Date(2022,11,1),to:new Date(2022,12,1)},skills:q("Python","Flask","Docker"),type:"Hackathon",screenshots:[{label:"Deployment",src:"/lcasasp.github.io/screenshots/gcp.png"},{label:"Public API",src:"/lcasasp.github.io/screenshots/cornell-hitch-api.png"}]},{slug:"media-validator",color:"#ff3e00",description:`Learn more at: https://docs.google.com/document/d/1kBd0HbxXhroNaY7ho4WQk9w2MjD0sZcuksCGMA3iJ60/edit?usp=sharing
			
 See the notebook here: https://colab.research.google.com/drive/1qvIJVg0DtFLzR_o6Mo93AGm_GdWsv7Mr?usp=sharing`,shortDescription:"A Climate news media validator that uses machine learning to validate news articles based on their content, cross referencing their data with the IPCC climate report.",links:[{to:"https://www.github.com/lcasasp/media-validator",label:"GitHub"}],logo:y.MLModels,name:"Climate Media Validator",period:{from:new Date(2022,8,1),to:new Date(2022,12,1)},skills:q("Python","ML"),type:"Machine Learning",screenshots:[{label:"Model Results",src:"/lcasasp.github.io/screenshots/model-results.png"}]},{slug:"McDiver",color:"#ff3e00",description:`Data structures and algorithms in Java course project. This project involves a two-stage game. The first stage, the seek stage, McDiver (the character) only knows the neighboring tiles and the manhattan distance to the ring (goal). Thus, by using a DFS algorithm, we can attempt to minimize the path to the ring in the varying mazes, which will increase the bonus multiplier for the next stage.
			The second stage, the scram stage, is one where the cave is collapsing and McDiver needs to reach the exit in x amount of steps. this stage is full of coins with varying values and the goal is to collect as many coins with the highest value total and reach the exit with the given amount of steps.`,shortDescription:`Data structures and algorithms in Java course project. This project tested me in GUI applications, Dijkstras algorithm, DFS and BFS, and gamestates. 
 Developed the 12th best algorithm in the class out of 630 students`,links:[{to:"https://www.github.com/lcasasp/McDiver",label:"GitHub"}],logo:y.Java,name:"McDiver",period:{from:new Date(2023,4,1),to:new Date(2023,5,1)},skills:q("Java"),type:"Game",screenshots:[{label:"Gameplay seek state",src:"/lcasasp.github.io/screenshots/mcdiver1.png"},{label:"Gameplay scram state",src:"/lcasasp.github.io/screenshots/mcdiver2.png"}]}];var de=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ie={},ye={get exports(){return ie},set exports(e){ie=e}};(function(e,M){(function(w,p){e.exports=p()})(de,function(){var w=1e3,p=6e4,k=36e5,D="millisecond",S="second",E="minute",I="hour",F="day",T="week",z="month",J="quarter",H="year",O="date",R="Invalid Date",K=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,j=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,se={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var a=["th","st","nd","rd"],t=r%100;return"["+r+(a[(t-20)%10]||a[t]||a[0])+"]"}},Y=function(r,a,t){var o=String(r);return!o||o.length>=a?r:""+Array(a+1-o.length).join(t)+r},Q={s:Y,z:function(r){var a=-r.utcOffset(),t=Math.abs(a),o=Math.floor(t/60),n=t%60;return(a<=0?"+":"-")+Y(o,2,"0")+":"+Y(n,2,"0")},m:function r(a,t){if(a.date()<t.date())return-r(t,a);var o=12*(t.year()-a.year())+(t.month()-a.month()),n=a.clone().add(o,z),c=t-n<0,h=a.clone().add(o+(c?-1:1),z);return+(-(o+(t-n)/(c?n-h:h-n))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:z,y:H,w:T,d:F,D:O,h:I,m:E,s:S,ms:D,Q:J}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},V="en",m={};m[V]=se;var u="$isDayjsObject",i=function(r){return r instanceof b||!(!r||!r[u])},g=function r(a,t,o){var n;if(!a)return V;if(typeof a=="string"){var c=a.toLowerCase();m[c]&&(n=c),t&&(m[c]=t,n=c);var h=a.split("-");if(!n&&h.length>1)return r(h[0])}else{var f=a.name;m[f]=a,n=f}return!o&&n&&(V=n),n||!o&&V},d=function(r,a){if(i(r))return r.clone();var t=typeof a=="object"?a:{};return t.date=r,t.args=arguments,new b(t)},l=Q;l.l=g,l.i=i,l.w=function(r,a){return d(r,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var b=function(){function r(t){this.$L=g(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[u]=!0}var a=r.prototype;return a.parse=function(t){this.$d=function(o){var n=o.date,c=o.utc;if(n===null)return new Date(NaN);if(l.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var h=n.match(K);if(h){var f=h[2]-1||0,v=(h[7]||"0").substring(0,3);return c?new Date(Date.UTC(h[1],f,h[3]||1,h[4]||0,h[5]||0,h[6]||0,v)):new Date(h[1],f,h[3]||1,h[4]||0,h[5]||0,h[6]||0,v)}}return new Date(n)}(t),this.init()},a.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},a.$utils=function(){return l},a.isValid=function(){return this.$d.toString()!==R},a.isSame=function(t,o){var n=d(t);return this.startOf(o)<=n&&n<=this.endOf(o)},a.isAfter=function(t,o){return d(t)<this.startOf(o)},a.isBefore=function(t,o){return this.endOf(o)<d(t)},a.$g=function(t,o,n){return l.u(t)?this[o]:this.set(n,t)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(t,o){var n=this,c=!!l.u(o)||o,h=l.p(t),f=function(U,A){var N=l.w(n.$u?Date.UTC(n.$y,A,U):new Date(n.$y,A,U),n);return c?N:N.endOf(F)},v=function(U,A){return l.w(n.toDate()[U].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(A)),n)},$=this.$W,L=this.$M,P=this.$D,W="set"+(this.$u?"UTC":"");switch(h){case H:return c?f(1,0):f(31,11);case z:return c?f(1,L):f(0,L+1);case T:var _=this.$locale().weekStart||0,B=($<_?$+7:$)-_;return f(c?P-B:P+(6-B),L);case F:case O:return v(W+"Hours",0);case I:return v(W+"Minutes",1);case E:return v(W+"Seconds",2);case S:return v(W+"Milliseconds",3);default:return this.clone()}},a.endOf=function(t){return this.startOf(t,!1)},a.$set=function(t,o){var n,c=l.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[F]=h+"Date",n[O]=h+"Date",n[z]=h+"Month",n[H]=h+"FullYear",n[I]=h+"Hours",n[E]=h+"Minutes",n[S]=h+"Seconds",n[D]=h+"Milliseconds",n)[c],v=c===F?this.$D+(o-this.$W):o;if(c===z||c===H){var $=this.clone().set(O,1);$.$d[f](v),$.init(),this.$d=$.set(O,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},a.set=function(t,o){return this.clone().$set(t,o)},a.get=function(t){return this[l.p(t)]()},a.add=function(t,o){var n,c=this;t=Number(t);var h=l.p(o),f=function(L){var P=d(c);return l.w(P.date(P.date()+Math.round(L*t)),c)};if(h===z)return this.set(z,this.$M+t);if(h===H)return this.set(H,this.$y+t);if(h===F)return f(1);if(h===T)return f(7);var v=(n={},n[E]=p,n[I]=k,n[S]=w,n)[h]||1,$=this.$d.getTime()+t*v;return l.w($,this)},a.subtract=function(t,o){return this.add(-1*t,o)},a.format=function(t){var o=this,n=this.$locale();if(!this.isValid())return n.invalidDate||R;var c=t||"YYYY-MM-DDTHH:mm:ssZ",h=l.z(this),f=this.$H,v=this.$m,$=this.$M,L=n.weekdays,P=n.months,W=n.meridiem,_=function(A,N,Z,X){return A&&(A[N]||A(o,c))||Z[N].slice(0,X)},B=function(A){return l.s(f%12||12,A,"0")},U=W||function(A,N,Z){var X=A<12?"AM":"PM";return Z?X.toLowerCase():X};return c.replace(j,function(A,N){return N||function(Z){switch(Z){case"YY":return String(o.$y).slice(-2);case"YYYY":return l.s(o.$y,4,"0");case"M":return $+1;case"MM":return l.s($+1,2,"0");case"MMM":return _(n.monthsShort,$,P,3);case"MMMM":return _(P,$);case"D":return o.$D;case"DD":return l.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return _(n.weekdaysMin,o.$W,L,2);case"ddd":return _(n.weekdaysShort,o.$W,L,3);case"dddd":return L[o.$W];case"H":return String(f);case"HH":return l.s(f,2,"0");case"h":return B(1);case"hh":return B(2);case"a":return U(f,v,!0);case"A":return U(f,v,!1);case"m":return String(v);case"mm":return l.s(v,2,"0");case"s":return String(o.$s);case"ss":return l.s(o.$s,2,"0");case"SSS":return l.s(o.$ms,3,"0");case"Z":return h}return null}(A)||h.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(t,o,n){var c,h=this,f=l.p(o),v=d(t),$=(v.utcOffset()-this.utcOffset())*p,L=this-v,P=function(){return l.m(h,v)};switch(f){case H:c=P()/12;break;case z:c=P();break;case J:c=P()/3;break;case T:c=(L-$)/6048e5;break;case F:c=(L-$)/864e5;break;case I:c=L/k;break;case E:c=L/p;break;case S:c=L/w;break;default:c=L}return n?c:l.a(c)},a.daysInMonth=function(){return this.endOf(z).$D},a.$locale=function(){return m[this.$L]},a.locale=function(t,o){if(!t)return this.$L;var n=this.clone(),c=g(t,o,!0);return c&&(n.$L=c),n},a.clone=function(){return l.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},r}(),C=b.prototype;return d.prototype=C,[["$ms",D],["$s",S],["$m",E],["$H",I],["$W",F],["$M",z],["$y",H],["$D",O]].forEach(function(r){C[r[1]]=function(a){return this.$g(a,r[0],r[1])}}),d.extend=function(r,a){return r.$i||(r(a,b,d),r.$i=!0),d},d.locale=g,d.isDayjs=i,d.unix=function(r){return d(1e3*r)},d.en=m[V],d.Ls=m,d.p={},d})})(ye);const ee=ie;var re={},Me={get exports(){return re},set exports(e){re=e}};(function(e,M){(function(w,p){e.exports=p()})(de,function(){var w,p,k=1e3,D=6e4,S=36e5,E=864e5,I=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,F=31536e6,T=2628e6,z=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,J={years:F,months:T,days:E,hours:S,minutes:D,seconds:k,milliseconds:1,weeks:6048e5},H=function(m){return m instanceof Q},O=function(m,u,i){return new Q(m,i,u.$l)},R=function(m){return p.p(m)+"s"},K=function(m){return m<0},j=function(m){return K(m)?Math.ceil(m):Math.floor(m)},se=function(m){return Math.abs(m)},Y=function(m,u){return m?K(m)?{negative:!0,format:""+se(m)+u}:{negative:!1,format:""+m+u}:{negative:!1,format:""}},Q=function(){function m(i,g,d){var l=this;if(this.$d={},this.$l=d,i===void 0&&(this.$ms=0,this.parseFromMilliseconds()),g)return O(i*J[R(g)],this);if(typeof i=="number")return this.$ms=i,this.parseFromMilliseconds(),this;if(typeof i=="object")return Object.keys(i).forEach(function(r){l.$d[R(r)]=i[r]}),this.calMilliseconds(),this;if(typeof i=="string"){var b=i.match(z);if(b){var C=b.slice(2).map(function(r){return r!=null?Number(r):0});return this.$d.years=C[0],this.$d.months=C[1],this.$d.weeks=C[2],this.$d.days=C[3],this.$d.hours=C[4],this.$d.minutes=C[5],this.$d.seconds=C[6],this.calMilliseconds(),this}}return this}var u=m.prototype;return u.calMilliseconds=function(){var i=this;this.$ms=Object.keys(this.$d).reduce(function(g,d){return g+(i.$d[d]||0)*J[d]},0)},u.parseFromMilliseconds=function(){var i=this.$ms;this.$d.years=j(i/F),i%=F,this.$d.months=j(i/T),i%=T,this.$d.days=j(i/E),i%=E,this.$d.hours=j(i/S),i%=S,this.$d.minutes=j(i/D),i%=D,this.$d.seconds=j(i/k),i%=k,this.$d.milliseconds=i},u.toISOString=function(){var i=Y(this.$d.years,"Y"),g=Y(this.$d.months,"M"),d=+this.$d.days||0;this.$d.weeks&&(d+=7*this.$d.weeks);var l=Y(d,"D"),b=Y(this.$d.hours,"H"),C=Y(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3,r=Math.round(1e3*r)/1e3);var a=Y(r,"S"),t=i.negative||g.negative||l.negative||b.negative||C.negative||a.negative,o=b.format||C.format||a.format?"T":"",n=(t?"-":"")+"P"+i.format+g.format+l.format+o+b.format+C.format+a.format;return n==="P"||n==="-P"?"P0D":n},u.toJSON=function(){return this.toISOString()},u.format=function(i){var g=i||"YYYY-MM-DDTHH:mm:ss",d={Y:this.$d.years,YY:p.s(this.$d.years,2,"0"),YYYY:p.s(this.$d.years,4,"0"),M:this.$d.months,MM:p.s(this.$d.months,2,"0"),D:this.$d.days,DD:p.s(this.$d.days,2,"0"),H:this.$d.hours,HH:p.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:p.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:p.s(this.$d.seconds,2,"0"),SSS:p.s(this.$d.milliseconds,3,"0")};return g.replace(I,function(l,b){return b||String(d[l])})},u.as=function(i){return this.$ms/J[R(i)]},u.get=function(i){var g=this.$ms,d=R(i);return d==="milliseconds"?g%=1e3:g=d==="weeks"?j(g/J[d]):this.$d[d],g||0},u.add=function(i,g,d){var l;return l=g?i*J[R(g)]:H(i)?i.$ms:O(i,this).$ms,O(this.$ms+l*(d?-1:1),this)},u.subtract=function(i,g){return this.add(i,g,!0)},u.locale=function(i){var g=this.clone();return g.$l=i,g},u.clone=function(){return O(this.$ms,this)},u.humanize=function(i){return w().add(this.$ms,"ms").locale(this.$l).fromNow(!i)},u.valueOf=function(){return this.asMilliseconds()},u.milliseconds=function(){return this.get("milliseconds")},u.asMilliseconds=function(){return this.as("milliseconds")},u.seconds=function(){return this.get("seconds")},u.asSeconds=function(){return this.as("seconds")},u.minutes=function(){return this.get("minutes")},u.asMinutes=function(){return this.as("minutes")},u.hours=function(){return this.get("hours")},u.asHours=function(){return this.as("hours")},u.days=function(){return this.get("days")},u.asDays=function(){return this.as("days")},u.weeks=function(){return this.get("weeks")},u.asWeeks=function(){return this.as("weeks")},u.months=function(){return this.get("months")},u.asMonths=function(){return this.as("months")},u.years=function(){return this.get("years")},u.asYears=function(){return this.as("years")},m}(),V=function(m,u,i){return m.add(u.years()*i,"y").add(u.months()*i,"M").add(u.days()*i,"d").add(u.hours()*i,"h").add(u.minutes()*i,"m").add(u.seconds()*i,"s").add(u.milliseconds()*i,"ms")};return function(m,u,i){w=i,p=i().$utils(),i.duration=function(l,b){var C=i.locale();return O(l,{$l:C},b)},i.isDuration=H;var g=u.prototype.add,d=u.prototype.subtract;u.prototype.add=function(l,b){return H(l)?V(this,l,1):g.bind(this)(l,b)},u.prototype.subtract=function(l,b){return H(l)?V(this,l,-1):d.bind(this)(l,b)}}})})(Me);const $e=re;ee.extend($e);const Se=(e,M=new Date)=>{let w=0,p=0,k=0;return M.getFullYear()!==e.getFullYear()?(k=M.getMonth(),p=(M.getFullYear()-e.getFullYear()-1)*12,w=12-e.getMonth()):w=M.getMonth()-e.getMonth(),w+p+k+1},Ce=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e],Le=(e,M)=>`${e} | ${M}`;function Ae(e,M=new Date(Date.now()+1e3*60*60*24)){const w=ee(e),p=ee(M),k=ee.duration(p.diff(w));let D=0,S="day";return k.as("days")<=7?(S="day",D=k.as("days")):k.as("months")<=1?(S="week",D=k.as("weeks")):k.as("years")<=1?(S="month",D=k.as("months")):(S="year",D=k.as("years")),D=Math.trunc(D),`${Math.trunc(D)} ${S}${D>1?"s":""}`}var te=(e=>(e.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",e.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",e.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",e.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",e.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",e.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",e.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",e.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",e.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",e.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",e.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",e.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",e.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",e.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",e.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",e.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",e.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",e.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",e.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",e.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",e))(te||{});const ze="Lucas Casas",He={home:"Home",personal:"Projects",career:"Experiences",resume:"Resume",skills:"Skills",Education:"Education"},Fe=e=>{switch(e){case G.GitHub:return te.GitHub;case G.Linkedin:return te.LinkedIn;case G.Email:return te.Email}},Oe={title:"Home",name:"Lucas",lastName:"Casas",description:"Hi! Welcome to my portfolio! I am a backend/fullstack developer as well as a current student at Cornell University - College of Engineering hoping to concentrate in AI/ML. Feel free to browse and check out some of my projects and please reach out to me if you have any questions!",links:[{platform:G.GitHub,link:"https://github.com/lcasasp"},{platform:G.Linkedin,link:"https://www.linkedin.com/in/lcasasp"},{platform:G.Email,link:"lucascasasp@icloud.com"}]},Pe={title:"Projects",items:be},Ee={title:"Experiences",items:ve},Ye={title:"Skills",items:he},xe={title:"Resumé",item:"/lcasasp.github.io/resume.pdf"},je={title:"Search"},Ie={items:fe,title:"Education"};export{Ie as E,Oe as H,te as I,he as M,He as N,Pe as P,xe as R,je as S,ze as T,oe as a,Fe as b,Ae as c,Ce as d,Ee as e,ve as f,De as g,de as h,Se as i,be as j,Ye as k,ke as o,le as t,Le as u};
