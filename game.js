(()=>{var cf=0,_c=1,uf=2;var Nu=0,Fu=1,df=2,Ki=3,_n=0,ni=1,li=2,xn=0,Ss=1,Mc=2,bc=3,wc=4,ff=5,Nn=100,pf=101,mf=102,gf=103,yf=104,xf=200,vf=201,_f=202,Mf=203,fl=204,pl=205,bf=206,wf=207,Sf=208,Ef=209,Tf=210,Af=211,Rf=212,Cf=213,Pf=214,ml=0,gl=1,yl=2,Rs=3,xl=4,vl=5,_l=6,Ml=7,Bh=0,If=1,kf=2,vn=0,Lf=1,Df=2,zf=3,Uf=4,Nf=5,Ff=6,Of=7;var Ou=300,Cs=301,Ps=302,bl=303,wl=304,aa=306,Sl=1e3,On=1001,El=1002,Le=1003,Bf=1004;var Xr=1005;var gi=1006,Pa=1007;var Bn=1008;var nn=1009,Bu=1010,Hu=1011,xr=1012,Hh=1013,Hn=1014,Vi=1015,qn=1016,Vh=1017,Gh=1018,Is=1020,Vu=35902,Gu=1021,Wu=1022,Ii=1023,Xu=1024,qu=1025,Es=1026,ks=1027,Wh=1028,Xh=1029,Yu=1030,qh=1031;var Yh=1033,Eo=33776,To=33777,Ao=33778,Ro=33779,Tl=35840,Al=35841,Rl=35842,Cl=35843,Pl=36196,Il=37492,kl=37496,Ll=37808,Dl=37809,zl=37810,Ul=37811,Nl=37812,Fl=37813,Ol=37814,Bl=37815,Hl=37816,Vl=37817,Gl=37818,Wl=37819,Xl=37820,ql=37821,Co=36492,Yl=36494,$l=36495,$u=36283,Zl=36284,Jl=36285,Kl=36286;var Po=2300,jl=2301,Ia=2302,Sc=2400,Ec=2401,Tc=2402;var Hf=3200,Vf=3201;var Zu=0,Gf=1,gn="",Ve="srgb",Os="srgb-linear",la="linear",ue="srgb";var ns=7680;var Ac=519,Wf=512,Xf=513,qf=514,Ju=515,Yf=516,$f=517,Zf=518,Jf=519,Ql=35044,Bs=35048;var Rc="300 es",Qi=2e3,Io=2001,Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ka=Math.PI/180,th=180/Math.PI;function tn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ti[s&255]+ti[s>>8&255]+ti[s>>16&255]+ti[s>>24&255]+"-"+ti[t&255]+ti[t>>8&255]+"-"+ti[t>>16&15|64]+ti[t>>24&255]+"-"+ti[e&63|128]+ti[e>>8&255]+"-"+ti[e>>16&255]+ti[e>>24&255]+ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]).toLowerCase()}function ii(s,t,e){return Math.max(t,Math.min(e,s))}function Kf(s,t){return(s%t+t)%t}function La(s,t,e){return(1-e)*s+e*t}function Hi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function de(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ct=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ii(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class s{constructor(t,e,i,n,r,o,a,l,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,h)}set(t,e,i,n,r,o,a,l,h){let c=this.elements;return c[0]=t,c[1]=n,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],f=i[5],m=i[8],y=n[0],g=n[3],p=n[6],M=n[1],v=n[4],_=n[7],A=n[2],C=n[5],P=n[8];return r[0]=o*y+a*M+l*A,r[3]=o*g+a*v+l*C,r[6]=o*p+a*_+l*P,r[1]=h*y+c*M+u*A,r[4]=h*g+c*v+u*C,r[7]=h*p+c*_+u*P,r[2]=d*y+f*M+m*A,r[5]=d*g+f*v+m*C,r[8]=d*p+f*_+m*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-i*r*c+i*a*l+n*r*h-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=c*o-a*h,d=a*l-c*r,f=h*r-o*l,m=e*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=u*y,t[1]=(n*h-c*i)*y,t[2]=(a*i-n*o)*y,t[3]=d*y,t[4]=(c*e-n*l)*y,t[5]=(n*r-a*e)*y,t[6]=f*y,t[7]=(i*l-h*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-n*h,n*l,-n*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Da.makeScale(t,e)),this}rotate(t){return this.premultiply(Da.makeRotation(-t)),this}translate(t,e){return this.premultiply(Da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Da=new Ht;function Ku(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ko(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jf(){let s=ko("canvas");return s.style.display="block",s}var Cc={};function dr(s){s in Cc||(Cc[s]=!0,console.warn(s))}function Qf(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function tp(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ep(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var te={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(s.r=en(s.r),s.g=en(s.g),s.b=en(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gn?la:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function en(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Pc=[.64,.33,.3,.6,.15,.06],Ic=[.2126,.7152,.0722],kc=[.3127,.329],Lc=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Os]:{primaries:Pc,whitePoint:kc,transfer:la,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:Ic,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:Pc,whitePoint:kc,transfer:ue,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:Ic,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});var ss,eh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=ko("canvas")),ss.width=t.width,ss.height=t.height;let i=ss.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ko("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=en(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(en(e[i]/255)*255):e[i]=en(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ip=0,Lo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=tn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(za(n[o].image)):r.push(za(n[o]))}else r=za(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function za(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?eh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var np=0,hi=class s extends Mn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=On,n=On,r=gi,o=Bn,a=Ii,l=nn,h=s.DEFAULT_ANISOTROPY,c=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=tn(),this.name="",this.source=new Lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ou)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sl:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case El:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sl:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case El:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=Ou;hi.DEFAULT_ANISOTROPY=1;var fe=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+y)<.1&&Math.abs(m+g)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(h+1)/2,_=(f+1)/2,A=(p+1)/2,C=(c+d)/4,P=(u+y)/4,k=(m+g)/4;return v>_&&v>A?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=C/i,r=P/i):_>A?_<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(_),i=C/n,r=k/n):A<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(A),i=P/r,n=k/r),this.set(i,n,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-y)*(u-y)+(d-c)*(d-c));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-y)/M,this.z=(d-c)/M,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ih=class extends Mn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new hi(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Lo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ki=class extends ih{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Do=class extends hi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Le,this.minFilter=Le,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var nh=class extends hi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Le,this.minFilter=Le,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ze=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],h=i[n+1],c=i[n+2],u=i[n+3],d=r[o+0],f=r[o+1],m=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=y;return}if(u!==y||l!==d||h!==f||c!==m){let g=1-a,p=l*d+h*f+c*m+u*y,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let A=Math.sqrt(v),C=Math.atan2(A,p*M);g=Math.sin(g*C)/A,a=Math.sin(a*C)/A}let _=a*M;if(l=l*g+d*_,h=h*g+f*_,c=c*g+m*_,u=u*g+y*_,g===1-a){let A=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=A,h*=A,c*=A,u*=A}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],h=i[n+2],c=i[n+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+c*u+l*f-h*d,t[e+1]=l*m+c*d+h*u-a*f,t[e+2]=h*m+c*f+a*d-l*u,t[e+3]=c*m-a*u-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),c=a(n/2),u=a(r/2),d=l(i/2),f=l(n/2),m=l(r/2);switch(o){case"XYZ":this._x=d*c*u+h*f*m,this._y=h*f*u-d*c*m,this._z=h*c*m+d*f*u,this._w=h*c*u-d*f*m;break;case"YXZ":this._x=d*c*u+h*f*m,this._y=h*f*u-d*c*m,this._z=h*c*m-d*f*u,this._w=h*c*u+d*f*m;break;case"ZXY":this._x=d*c*u-h*f*m,this._y=h*f*u+d*c*m,this._z=h*c*m+d*f*u,this._w=h*c*u-d*f*m;break;case"ZYX":this._x=d*c*u-h*f*m,this._y=h*f*u+d*c*m,this._z=h*c*m-d*f*u,this._w=h*c*u+d*f*m;break;case"YZX":this._x=d*c*u+h*f*m,this._y=h*f*u+d*c*m,this._z=h*c*m-d*f*u,this._w=h*c*u-d*f*m;break;case"XZY":this._x=d*c*u-h*f*m,this._y=h*f*u-d*c*m,this._z=h*c*m+d*f*u,this._w=h*c*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-n)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(c-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+h)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-h)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ii(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+o*a+n*h-r*l,this._y=n*c+o*l+r*a-i*h,this._z=r*c+o*h+i*l-n*a,this._w=o*c-i*a-n*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},x=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*n-a*i),c=2*(a*e-r*n),u=2*(r*i-o*e);return this.x=e+l*h+o*u-a*c,this.y=i+l*c+a*h-r*u,this.z=n+l*u+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ua.copy(this).projectOnVector(t),this.sub(Ua)}reflect(t){return this.sub(Ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ii(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ua=new x,zc=new Ze,sn=class{constructor(t=new x(1/0,1/0,1/0),e=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ri):Ri.fromBufferAttribute(r,o),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qr.copy(i.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),Yr.subVectors(this.max,er),rs.subVectors(t.a,er),os.subVectors(t.b,er),as.subVectors(t.c,er),cn.subVectors(os,rs),un.subVectors(as,os),Pn.subVectors(rs,as);let e=[0,-cn.z,cn.y,0,-un.z,un.y,0,-Pn.z,Pn.y,cn.z,0,-cn.x,un.z,0,-un.x,Pn.z,0,-Pn.x,-cn.y,cn.x,0,-un.y,un.x,0,-Pn.y,Pn.x,0];return!Na(e,rs,os,as,Yr)||(e=[1,0,0,0,1,0,0,0,1],!Na(e,rs,os,as,Yr))?!1:($r.crossVectors(cn,un),e=[$r.x,$r.y,$r.z],Na(e,rs,os,as,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},qi=[new x,new x,new x,new x,new x,new x,new x,new x],Ri=new x,qr=new sn,rs=new x,os=new x,as=new x,cn=new x,un=new x,Pn=new x,er=new x,Yr=new x,$r=new x,In=new x;function Na(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){In.fromArray(s,r);let a=n.x*Math.abs(In.x)+n.y*Math.abs(In.y)+n.z*Math.abs(In.z),l=t.dot(In),h=e.dot(In),c=i.dot(In);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}var sp=new sn,ir=new x,Fa=new x,rn=class{constructor(t=new x,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):sp.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);let e=ir.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ir,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(Fa)),this.expandByPoint(ir.copy(t.center).sub(Fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yi=new x,Oa=new x,Zr=new x,dn=new x,Ba=new x,Jr=new x,Ha=new x,vr=class{constructor(t=new x,e=new x(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yi.copy(this.origin).addScaledVector(this.direction,e),Yi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Oa.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),dn.copy(this.origin).sub(Oa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Zr),a=dn.dot(this.direction),l=-dn.dot(Zr),h=dn.lengthSq(),c=Math.abs(1-o*o),u,d,f,m;if(c>0)if(u=o*l-a,d=o*a-l,m=r*c,u>=0)if(d>=-m)if(d<=m){let y=1/c;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+h}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Oa).addScaledVector(Zr,d),f}intersectSphere(t,e){Yi.subVectors(t.center,this.origin);let i=Yi.dot(this.direction),n=Yi.dot(Yi)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,n=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,n=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Yi)!==null}intersectTriangle(t,e,i,n,r){Ba.subVectors(e,t),Jr.subVectors(i,t),Ha.crossVectors(Ba,Jr);let o=this.direction.dot(Ha),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dn.subVectors(this.origin,t);let l=a*this.direction.dot(Jr.crossVectors(dn,Jr));if(l<0)return null;let h=a*this.direction.dot(Ba.cross(dn));if(h<0||l+h>o)return null;let c=-a*dn.dot(Ha);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qt=class s{constructor(t,e,i,n,r,o,a,l,h,c,u,d,f,m,y,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,h,c,u,d,f,m,y,g)}set(t,e,i,n,r,o,a,l,h,c,u,d,f,m,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),o=1/ls.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*c,f=o*u,m=a*c,y=a*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+m*h,e[5]=d-y*h,e[9]=-a*l,e[2]=y-d*h,e[6]=m+f*h,e[10]=o*l}else if(t.order==="YXZ"){let d=l*c,f=l*u,m=h*c,y=h*u;e[0]=d+y*a,e[4]=m*a-f,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=f*a-m,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*c,f=l*u,m=h*c,y=h*u;e[0]=d-y*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*c,e[9]=y-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*c,f=o*u,m=a*c,y=a*u;e[0]=l*c,e[4]=m*h-f,e[8]=d*h+y,e[1]=l*u,e[5]=y*h+d,e[9]=f*h-m,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*h,m=a*l,y=a*h;e[0]=l*c,e[4]=y-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*u+m,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*l,f=o*h,m=a*l,y=a*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+y,e[5]=o*c,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*c,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rp,t,op)}lookAt(t,e,i){let n=this.elements;return pi.subVectors(t,e),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),fn.crossVectors(i,pi),fn.lengthSq()===0&&(Math.abs(i.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),fn.crossVectors(i,pi)),fn.normalize(),Kr.crossVectors(pi,fn),n[0]=fn.x,n[4]=Kr.x,n[8]=pi.x,n[1]=fn.y,n[5]=Kr.y,n[9]=pi.y,n[2]=fn.z,n[6]=Kr.z,n[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],f=i[13],m=i[2],y=i[6],g=i[10],p=i[14],M=i[3],v=i[7],_=i[11],A=i[15],C=n[0],P=n[4],k=n[8],T=n[12],w=n[1],I=n[5],V=n[9],F=n[13],X=n[2],J=n[6],B=n[10],j=n[14],W=n[3],st=n[7],ot=n[11],bt=n[15];return r[0]=o*C+a*w+l*X+h*W,r[4]=o*P+a*I+l*J+h*st,r[8]=o*k+a*V+l*B+h*ot,r[12]=o*T+a*F+l*j+h*bt,r[1]=c*C+u*w+d*X+f*W,r[5]=c*P+u*I+d*J+f*st,r[9]=c*k+u*V+d*B+f*ot,r[13]=c*T+u*F+d*j+f*bt,r[2]=m*C+y*w+g*X+p*W,r[6]=m*P+y*I+g*J+p*st,r[10]=m*k+y*V+g*B+p*ot,r[14]=m*T+y*F+g*j+p*bt,r[3]=M*C+v*w+_*X+A*W,r[7]=M*P+v*I+_*J+A*st,r[11]=M*k+v*V+_*B+A*ot,r[15]=M*T+v*F+_*j+A*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],m=t[3],y=t[7],g=t[11],p=t[15];return m*(+r*l*u-n*h*u-r*a*d+i*h*d+n*a*f-i*l*f)+y*(+e*l*f-e*h*d+r*o*d-n*o*f+n*h*c-r*l*c)+g*(+e*h*u-e*a*f-r*o*u+i*o*f+r*a*c-i*h*c)+p*(-n*a*c-e*l*u+e*a*d+n*o*u-i*o*d+i*l*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],m=t[12],y=t[13],g=t[14],p=t[15],M=u*g*h-y*d*h+y*l*f-a*g*f-u*l*p+a*d*p,v=m*d*h-c*g*h-m*l*f+o*g*f+c*l*p-o*d*p,_=c*y*h-m*u*h+m*a*f-o*y*f-c*a*p+o*u*p,A=m*u*l-c*y*l-m*a*d+o*y*d+c*a*g-o*u*g,C=e*M+i*v+n*_+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/C;return t[0]=M*P,t[1]=(y*d*r-u*g*r-y*n*f+i*g*f+u*n*p-i*d*p)*P,t[2]=(a*g*r-y*l*r+y*n*h-i*g*h-a*n*p+i*l*p)*P,t[3]=(u*l*r-a*d*r-u*n*h+i*d*h+a*n*f-i*l*f)*P,t[4]=v*P,t[5]=(c*g*r-m*d*r+m*n*f-e*g*f-c*n*p+e*d*p)*P,t[6]=(m*l*r-o*g*r-m*n*h+e*g*h+o*n*p-e*l*p)*P,t[7]=(o*d*r-c*l*r+c*n*h-e*d*h-o*n*f+e*l*f)*P,t[8]=_*P,t[9]=(m*u*r-c*y*r-m*i*f+e*y*f+c*i*p-e*u*p)*P,t[10]=(o*y*r-m*a*r+m*i*h-e*y*h-o*i*p+e*a*p)*P,t[11]=(c*a*r-o*u*r-c*i*h+e*u*h+o*i*f-e*a*f)*P,t[12]=A*P,t[13]=(c*y*n-m*u*n+m*i*d-e*y*d-c*i*g+e*u*g)*P,t[14]=(m*a*n-o*y*n-m*i*l+e*y*l+o*i*g-e*a*g)*P,t[15]=(o*u*n-c*a*n+c*i*l-e*u*l-o*i*d+e*a*d)*P,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+i,h*a-n*l,h*l+n*a,0,h*a+n*l,c*a+i,c*l-n*o,0,h*l-n*a,c*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,u=a+a,d=r*h,f=r*c,m=r*u,y=o*c,g=o*u,p=a*u,M=l*h,v=l*c,_=l*u,A=i.x,C=i.y,P=i.z;return n[0]=(1-(y+p))*A,n[1]=(f+_)*A,n[2]=(m-v)*A,n[3]=0,n[4]=(f-_)*C,n[5]=(1-(d+p))*C,n[6]=(g+M)*C,n[7]=0,n[8]=(m+v)*P,n[9]=(g-M)*P,n[10]=(1-(d+y))*P,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=ls.set(n[0],n[1],n[2]).length(),o=ls.set(n[4],n[5],n[6]).length(),a=ls.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],Ci.copy(this);let h=1/r,c=1/o,u=1/a;return Ci.elements[0]*=h,Ci.elements[1]*=h,Ci.elements[2]*=h,Ci.elements[4]*=c,Ci.elements[5]*=c,Ci.elements[6]*=c,Ci.elements[8]*=u,Ci.elements[9]*=u,Ci.elements[10]*=u,e.setFromRotationMatrix(Ci),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=Qi){let l=this.elements,h=2*r/(e-t),c=2*r/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,m;if(a===Qi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Io)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=Qi){let l=this.elements,h=1/(e-t),c=1/(i-n),u=1/(o-r),d=(e+t)*h,f=(i+n)*c,m,y;if(a===Qi)m=(o+r)*u,y=-2*u;else if(a===Io)m=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ls=new x,Ci=new qt,rp=new x(0,0,0),op=new x(1,1,1),fn=new x,Kr=new x,pi=new x,Uc=new qt,Nc=new Ze,oi=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],h=n[5],c=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(ii(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ii(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ii(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ii(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ii(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ii(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var zo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ap=0,Fc=new x,hs=new Ze,$i=new qt,jr=new x,nr=new x,lp=new x,hp=new Ze,Oc=new x(1,0,0),Bc=new x(0,1,0),Hc=new x(0,0,1),Vc={type:"added"},cp={type:"removed"},cs={type:"childadded",child:null},Va={type:"childremoved",child:null},Ue=class s extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new x,e=new oi,i=new Ze,n=new x(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new qt},normalMatrix:{value:new Ht}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Oc,t)}rotateY(t){return this.rotateOnAxis(Bc,t)}rotateZ(t){return this.rotateOnAxis(Hc,t)}translateOnAxis(t,e){return Fc.copy(t).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oc,t)}translateY(t){return this.translateOnAxis(Bc,t)}translateZ(t){return this.translateOnAxis(Hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?jr.copy(t):jr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(nr,jr,this.up):$i.lookAt(jr,nr,this.up),this.quaternion.setFromRotationMatrix($i),n&&($i.extractRotation(n.matrixWorld),hs.setFromRotationMatrix($i),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vc),cs.child=t,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cp),Va.child=t,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vc),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,hp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(a){let l=[];for(let h in a){let c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Ue.DEFAULT_UP=new x(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pi=new x,Zi=new x,Ga=new x,Ji=new x,us=new x,ds=new x,Gc=new x,Wa=new x,Xa=new x,qa=new x,Ya=new fe,$a=new fe,Za=new fe,yn=class s{constructor(t=new x,e=new x,i=new x){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Pi.subVectors(t,e),n.cross(Pi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Pi.subVectors(n,e),Zi.subVectors(i,e),Ga.subVectors(t,e);let o=Pi.dot(Pi),a=Pi.dot(Zi),l=Pi.dot(Ga),h=Zi.dot(Zi),c=Zi.dot(Ga),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(h*l-a*c)*d,m=(o*c-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return Ya.setScalar(0),$a.setScalar(0),Za.setScalar(0),Ya.fromBufferAttribute(t,e),$a.fromBufferAttribute(t,i),Za.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Ya,r.x),o.addScaledVector($a,r.y),o.addScaledVector(Za,r.z),o}static isFrontFacing(t,e,i,n){return Pi.subVectors(i,e),Zi.subVectors(t,e),Pi.cross(Zi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Pi.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;us.subVectors(n,i),ds.subVectors(r,i),Wa.subVectors(t,i);let l=us.dot(Wa),h=ds.dot(Wa);if(l<=0&&h<=0)return e.copy(i);Xa.subVectors(t,n);let c=us.dot(Xa),u=ds.dot(Xa);if(c>=0&&u<=c)return e.copy(n);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(us,o);qa.subVectors(t,r);let f=us.dot(qa),m=ds.dot(qa);if(m>=0&&f<=m)return e.copy(r);let y=f*h-l*m;if(y<=0&&h>=0&&m<=0)return a=h/(h-m),e.copy(i).addScaledVector(ds,a);let g=c*m-f*u;if(g<=0&&u-c>=0&&f-m>=0)return Gc.subVectors(r,n),a=(u-c)/(u-c+(f-m)),e.copy(n).addScaledVector(Gc,a);let p=1/(g+y+d);return o=y*p,a=d*p,e.copy(i).addScaledVector(us,o).addScaledVector(ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function Ja(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var mt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=te.workingColorSpace){if(t=Kf(t,1),e=ii(e,0,1),i=ii(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ja(o,r,t+1/3),this.g=Ja(o,r,t),this.b=Ja(o,r,t-1/3)}return te.toWorkingColorSpace(this,n),this}setStyle(t,e=Ve){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let i=ju[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=en(t.r),this.g=en(t.g),this.b=en(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return te.fromWorkingColorSpace(ei.copy(this),t),Math.round(ii(ei.r*255,0,255))*65536+Math.round(ii(ei.g*255,0,255))*256+Math.round(ii(ei.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(ei.copy(this),e);let i=ei.r,n=ei.g,r=ei.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,h,c=(a+o)/2;if(a===o)l=0,h=0;else{let u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(ei.copy(this),e),t.r=ei.r,t.g=ei.g,t.b=ei.b,t}getStyle(t=Ve){te.fromWorkingColorSpace(ei.copy(this),t);let e=ei.r,i=ei.g,n=ei.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(pn),this.setHSL(pn.h+t,pn.s+e,pn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pn),t.getHSL(Qr);let i=La(pn.h,Qr.h,e),n=La(pn.s,Qr.s,e),r=La(pn.l,Qr.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ei=new mt;mt.NAMES=ju;var up=0,Gi=class extends Mn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=tn(),this.name="",this.blending=Ss,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=pl,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(i.blending=this.blending),this.side!==_n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fl&&(i.blendSrc=this.blendSrc),this.blendDst!==pl&&(i.blendDst=this.blendDst),this.blendEquation!==Nn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},on=class extends Gi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Oe=new x,to=new ct,Ce=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ql,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)to.fromBufferAttribute(this,e),to.applyMatrix3(t),this.setXY(e,to.x,to.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=de(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array),n=de(n,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ql&&(t.usage=this.usage),t}};var Uo=class extends Ce{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var No=class extends Ce{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var se=class extends Ce{constructor(t,e,i){super(new Float32Array(t),e,i)}},dp=0,Mi=new qt,Ka=new Ue,fs=new x,mi=new sn,sr=new sn,qe=new x,ge=class s extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ku(t)?No:Uo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,e,i){return Mi.makeTranslation(t,e,i),this.applyMatrix4(Mi),this}scale(t,e,i){return Mi.makeScale(t,e,i),this.applyMatrix4(Mi),this}lookAt(t){return Ka.lookAt(t),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(i,3))}else{for(let i=0,n=e.count;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];mi.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(t){let i=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(mi.min,sr.min),mi.expandByPoint(qe),qe.addVectors(mi.max,sr.max),mi.expandByPoint(qe)):(mi.expandByPoint(sr.min),mi.expandByPoint(sr.max))}mi.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)qe.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)qe.fromBufferAttribute(a,h),l&&(fs.fromBufferAttribute(t,h),qe.add(fs)),n=Math.max(n,i.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<i.count;k++)a[k]=new x,l[k]=new x;let h=new x,c=new x,u=new x,d=new ct,f=new ct,m=new ct,y=new x,g=new x;function p(k,T,w){h.fromBufferAttribute(i,k),c.fromBufferAttribute(i,T),u.fromBufferAttribute(i,w),d.fromBufferAttribute(r,k),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,w),c.sub(h),u.sub(h),f.sub(d),m.sub(d);let I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(y.copy(c).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(c,-m.x).multiplyScalar(I),a[k].add(y),a[T].add(y),a[w].add(y),l[k].add(g),l[T].add(g),l[w].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let k=0,T=M.length;k<T;++k){let w=M[k],I=w.start,V=w.count;for(let F=I,X=I+V;F<X;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let v=new x,_=new x,A=new x,C=new x;function P(k){A.fromBufferAttribute(n,k),C.copy(A);let T=a[k];v.copy(T),v.sub(A.multiplyScalar(A.dot(T))).normalize(),_.crossVectors(C,T);let I=_.dot(l[k])<0?-1:1;o.setXYZW(k,v.x,v.y,v.z,I)}for(let k=0,T=M.length;k<T;++k){let w=M[k],I=w.start,V=w.count;for(let F=I,X=I+V;F<X;F+=3)P(t.getX(F+0)),P(t.getX(F+1)),P(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new x,r=new x,o=new x,a=new x,l=new x,h=new x,c=new x,u=new x;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),y=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),c.subVectors(o,r),u.subVectors(n,r),c.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),h.fromBufferAttribute(i,g),a.add(c),l.add(c),h.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,r),u.subVectors(n,r),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,l){let h=a.array,c=a.itemSize,u=a.normalized,d=new h.constructor(l.length*c),f=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*c;for(let p=0;p<c;p++)d[m++]=h[f++]}return new Ce(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],h=t(l,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let c=0,u=h.length;c<u;c++){let d=h[c],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(n[l]=c,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let h in n){let c=n[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],u=r[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,c=o.length;h<c;h++){let u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wc=new qt,kn=new vr,eo=new rn,Xc=new x,io=new x,no=new x,so=new x,ja=new x,ro=new x,qc=new x,oo=new x,Dt=class extends Ue{constructor(t=new ge,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){ro.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=a[l],u=r[l];c!==0&&(ja.fromBufferAttribute(u,t),o?ro.addScaledVector(ja,c):ro.addScaledVector(ja.sub(e),c))}e.add(ro)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(r),kn.copy(t.ray).recast(t.near),!(eo.containsPoint(kn.origin)===!1&&(kn.intersectSphere(eo,Xc)===null||kn.origin.distanceToSquared(Xc)>(t.far-t.near)**2))&&(Wc.copy(r).invert(),kn.copy(t.ray).applyMatrix4(Wc),!(i.boundingBox!==null&&kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,kn)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,A=v;_<A;_+=3){let C=a.getX(_),P=a.getX(_+1),k=a.getX(_+2);n=ao(this,p,t,i,h,c,u,C,P,k),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let M=a.getX(g),v=a.getX(g+1),_=a.getX(g+2);n=ao(this,o,t,i,h,c,u,M,v,_),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,A=v;_<A;_+=3){let C=_,P=_+1,k=_+2;n=ao(this,p,t,i,h,c,u,C,P,k),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let M=g,v=g+1,_=g+2;n=ao(this,o,t,i,h,c,u,M,v,_),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function fp(s,t,e,i,n,r,o,a){let l;if(t.side===ni?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===_n,a),l===null)return null;oo.copy(a),oo.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(oo);return h<e.near||h>e.far?null:{distance:h,point:oo.clone(),object:s}}function ao(s,t,e,i,n,r,o,a,l,h){s.getVertexPosition(a,io),s.getVertexPosition(l,no),s.getVertexPosition(h,so);let c=fp(s,t,e,i,io,no,so,qc);if(c){let u=new x;yn.getBarycoord(qc,io,no,so,u),n&&(c.uv=yn.getInterpolatedAttribute(n,a,l,h,u,new ct)),r&&(c.uv1=yn.getInterpolatedAttribute(r,a,l,h,u,new ct)),o&&(c.normal=yn.getInterpolatedAttribute(o,a,l,h,u,new x),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let d={a,b:l,c:h,normal:new x,materialIndex:0};yn.getNormal(io,no,so,d.normal),c.face=d,c.barycoord=u}return c}var Pe=class s extends ge{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],c=[],u=[],d=0,f=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,n,o,2),m("x","z","y",1,-1,t,i,-e,n,o,3),m("x","y","z",1,-1,t,e,i,n,r,4),m("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(u,2));function m(y,g,p,M,v,_,A,C,P,k,T){let w=_/P,I=A/k,V=_/2,F=A/2,X=C/2,J=P+1,B=k+1,j=0,W=0,st=new x;for(let ot=0;ot<B;ot++){let bt=ot*I-F;for(let Ft=0;Ft<J;Ft++){let ne=Ft*w-V;st[y]=ne*M,st[g]=bt*v,st[p]=X,h.push(st.x,st.y,st.z),st[y]=0,st[g]=0,st[p]=C>0?1:-1,c.push(st.x,st.y,st.z),u.push(Ft/P),u.push(1-ot/k),j+=1}}for(let ot=0;ot<k;ot++)for(let bt=0;bt<P;bt++){let Ft=d+bt+J*ot,ne=d+bt+J*(ot+1),$=d+(bt+1)+J*(ot+1),rt=d+(bt+1)+J*ot;l.push(Ft,ne,rt),l.push(ne,$,rt),W+=6}a.addGroup(f,W,T),f+=W,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ls(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ri(s){let t={};for(let e=0;e<s.length;e++){let i=Ls(s[e]);for(let n in i)t[n]=i[n]}return t}function pp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Qu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var mp={clone:Ls,merge:ri},gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ge=class extends Gi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gp,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Fo=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Qi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mn=new x,Yc=new ct,$c=new ct,Ye=class extends Fo{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=th*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return th*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mn.x,mn.y).multiplyScalar(-t/mn.z),mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mn.x,mn.y).multiplyScalar(-t/mn.z)}getViewSize(t,e){return this.getViewBounds(t,Yc,$c),e.subVectors($c,Yc)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ka*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/h,n*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ps=-90,ms=1,sh=class extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ye(ps,ms,t,e);n.layers=this.layers,this.add(n);let r=new Ye(ps,ms,t,e);r.layers=this.layers,this.add(r);let o=new Ye(ps,ms,t,e);o.layers=this.layers,this.add(o);let a=new Ye(ps,ms,t,e);a.layers=this.layers,this.add(a);let l=new Ye(ps,ms,t,e);l.layers=this.layers,this.add(l);let h=new Ye(ps,ms,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Io)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,h),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,n),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Oo=class extends hi{constructor(t,e,i,n,r,o,a,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:Cs,super(t,e,i,n,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},rh=class extends ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Oo(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Pe(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:xn});r.uniforms.tEquirect.value=e;let o=new Dt(n,r),a=e.minFilter;return e.minFilter===Bn&&(e.minFilter=gi),new sh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},Qa=new x,xp=new x,vp=new Ht,ji=class{constructor(t=new x(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Qa.subVectors(i,e).cross(xp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Qa),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||vp.getNormalMatrix(t),n=this.coplanarPoint(Qa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ln=new rn,lo=new x,_r=class{constructor(t=new ji,e=new ji,i=new ji,n=new ji,r=new ji,o=new ji){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Qi){let i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],h=n[4],c=n[5],u=n[6],d=n[7],f=n[8],m=n[9],y=n[10],g=n[11],p=n[12],M=n[13],v=n[14],_=n[15];if(i[0].setComponents(l-r,d-h,g-f,_-p).normalize(),i[1].setComponents(l+r,d+h,g+f,_+p).normalize(),i[2].setComponents(l+o,d+c,g+m,_+M).normalize(),i[3].setComponents(l-o,d-c,g-m,_-M).normalize(),i[4].setComponents(l-a,d-u,g-y,_-v).normalize(),e===Qi)i[5].setComponents(l+a,d+u,g+y,_+v).normalize();else if(e===Io)i[5].setComponents(a,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(t){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476,Ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(lo.x=n.normal.x>0?t.max.x:t.min.x,lo.y=n.normal.y>0?t.max.y:t.min.y,lo.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function td(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function _p(s){let t=new WeakMap;function e(a,l){let h=a.array,c=a.usage,u=h.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=s.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=s.SHORT;else if(h instanceof Uint32Array)f=s.UNSIGNED_INT;else if(h instanceof Int32Array)f=s.INT;else if(h instanceof Int8Array)f=s.BYTE;else if(h instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,h){let c=l.array,u=l.updateRanges;if(s.bindBuffer(h,a),u.length===0)s.bufferSubData(h,0,c);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],y=u[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let y=u[f];s.bufferSubData(h,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:n,remove:r,update:o}}var yi=class s extends ge{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),h=a+1,c=l+1,u=t/a,d=e/l,f=[],m=[],y=[],g=[];for(let p=0;p<c;p++){let M=p*d-o;for(let v=0;v<h;v++){let _=v*u-r;m.push(_,-M,0),y.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let v=M+h*p,_=M+h*(p+1),A=M+1+h*(p+1),C=M+1+h*p;f.push(v,_,C),f.push(_,A,C)}this.setIndex(f),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(y,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ap=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,em=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_m=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Nm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,r0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,o0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,l0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,c0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,p0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,m0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,A0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,R0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,C0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,O0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,H0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,V0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,X0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,j0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Mp,alphahash_pars_fragment:bp,alphamap_fragment:wp,alphamap_pars_fragment:Sp,alphatest_fragment:Ep,alphatest_pars_fragment:Tp,aomap_fragment:Ap,aomap_pars_fragment:Rp,batching_pars_vertex:Cp,batching_vertex:Pp,begin_vertex:Ip,beginnormal_vertex:kp,bsdfs:Lp,iridescence_fragment:Dp,bumpmap_pars_fragment:zp,clipping_planes_fragment:Up,clipping_planes_pars_fragment:Np,clipping_planes_pars_vertex:Fp,clipping_planes_vertex:Op,color_fragment:Bp,color_pars_fragment:Hp,color_pars_vertex:Vp,color_vertex:Gp,common:Wp,cube_uv_reflection_fragment:Xp,defaultnormal_vertex:qp,displacementmap_pars_vertex:Yp,displacementmap_vertex:$p,emissivemap_fragment:Zp,emissivemap_pars_fragment:Jp,colorspace_fragment:Kp,colorspace_pars_fragment:jp,envmap_fragment:Qp,envmap_common_pars_fragment:tm,envmap_pars_fragment:em,envmap_pars_vertex:im,envmap_physical_pars_fragment:fm,envmap_vertex:nm,fog_vertex:sm,fog_pars_vertex:rm,fog_fragment:om,fog_pars_fragment:am,gradientmap_pars_fragment:lm,lightmap_pars_fragment:hm,lights_lambert_fragment:cm,lights_lambert_pars_fragment:um,lights_pars_begin:dm,lights_toon_fragment:pm,lights_toon_pars_fragment:mm,lights_phong_fragment:gm,lights_phong_pars_fragment:ym,lights_physical_fragment:xm,lights_physical_pars_fragment:vm,lights_fragment_begin:_m,lights_fragment_maps:Mm,lights_fragment_end:bm,logdepthbuf_fragment:wm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:Em,logdepthbuf_vertex:Tm,map_fragment:Am,map_pars_fragment:Rm,map_particle_fragment:Cm,map_particle_pars_fragment:Pm,metalnessmap_fragment:Im,metalnessmap_pars_fragment:km,morphinstance_vertex:Lm,morphcolor_vertex:Dm,morphnormal_vertex:zm,morphtarget_pars_vertex:Um,morphtarget_vertex:Nm,normal_fragment_begin:Fm,normal_fragment_maps:Om,normal_pars_fragment:Bm,normal_pars_vertex:Hm,normal_vertex:Vm,normalmap_pars_fragment:Gm,clearcoat_normal_fragment_begin:Wm,clearcoat_normal_fragment_maps:Xm,clearcoat_pars_fragment:qm,iridescence_pars_fragment:Ym,opaque_fragment:$m,packing:Zm,premultiplied_alpha_fragment:Jm,project_vertex:Km,dithering_fragment:jm,dithering_pars_fragment:Qm,roughnessmap_fragment:t0,roughnessmap_pars_fragment:e0,shadowmap_pars_fragment:i0,shadowmap_pars_vertex:n0,shadowmap_vertex:s0,shadowmask_pars_fragment:r0,skinbase_vertex:o0,skinning_pars_vertex:a0,skinning_vertex:l0,skinnormal_vertex:h0,specularmap_fragment:c0,specularmap_pars_fragment:u0,tonemapping_fragment:d0,tonemapping_pars_fragment:f0,transmission_fragment:p0,transmission_pars_fragment:m0,uv_pars_fragment:g0,uv_pars_vertex:y0,uv_vertex:x0,worldpos_vertex:v0,background_vert:_0,background_frag:M0,backgroundCube_vert:b0,backgroundCube_frag:w0,cube_vert:S0,cube_frag:E0,depth_vert:T0,depth_frag:A0,distanceRGBA_vert:R0,distanceRGBA_frag:C0,equirect_vert:P0,equirect_frag:I0,linedashed_vert:k0,linedashed_frag:L0,meshbasic_vert:D0,meshbasic_frag:z0,meshlambert_vert:U0,meshlambert_frag:N0,meshmatcap_vert:F0,meshmatcap_frag:O0,meshnormal_vert:B0,meshnormal_frag:H0,meshphong_vert:V0,meshphong_frag:G0,meshphysical_vert:W0,meshphysical_frag:X0,meshtoon_vert:q0,meshtoon_frag:Y0,points_vert:$0,points_frag:Z0,shadow_vert:J0,shadow_frag:K0,sprite_vert:j0,sprite_frag:Q0},lt={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Bi={basic:{uniforms:ri([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:ri([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new mt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:ri([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:ri([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:ri([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new mt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:ri([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:ri([lt.points,lt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:ri([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:ri([lt.common,lt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:ri([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:ri([lt.sprite,lt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:ri([lt.common,lt.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:ri([lt.lights,lt.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Bi.physical={uniforms:ri([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var ho={r:0,b:0,g:0},Dn=new oi,tg=new qt;function eg(s,t,e,i,n,r,o){let a=new mt(0),l=r===!0?0:1,h,c,u=null,d=0,f=null;function m(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function y(M){let v=!1,_=m(M);_===null?p(a,l):_&&_.isColor&&(p(_,1),v=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,v){let _=m(v);_&&(_.isCubeTexture||_.mapping===aa)?(c===void 0&&(c=new Dt(new Pe(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:Ls(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Dn.copy(v.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tg.makeRotationFromEuler(Dn)),c.material.toneMapped=te.getTransfer(_.colorSpace)!==ue,(u!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new Dt(new yi(2,2),new Ge({name:"BackgroundMaterial",uniforms:Ls(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=te.getTransfer(_.colorSpace)!==ue,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function p(M,v){M.getRGB(ho,Qu(s)),i.buffers.color.setClear(ho.r,ho.g,ho.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:y,addToRenderList:g}}function ig(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,o=!1;function a(w,I,V,F,X){let J=!1,B=u(F,V,I);r!==B&&(r=B,h(r.object)),J=f(w,F,V,X),J&&m(w,F,V,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,_(w,I,V,F),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function h(w){return s.bindVertexArray(w)}function c(w){return s.deleteVertexArray(w)}function u(w,I,V){let F=V.wireframe===!0,X=i[w.id];X===void 0&&(X={},i[w.id]=X);let J=X[I.id];J===void 0&&(J={},X[I.id]=J);let B=J[F];return B===void 0&&(B=d(l()),J[F]=B),B}function d(w){let I=[],V=[],F=[];for(let X=0;X<e;X++)I[X]=0,V[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:F,object:w,attributes:{},index:null}}function f(w,I,V,F){let X=r.attributes,J=I.attributes,B=0,j=V.getAttributes();for(let W in j)if(j[W].location>=0){let ot=X[W],bt=J[W];if(bt===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(bt=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(bt=w.instanceColor)),ot===void 0||ot.attribute!==bt||bt&&ot.data!==bt.data)return!0;B++}return r.attributesNum!==B||r.index!==F}function m(w,I,V,F){let X={},J=I.attributes,B=0,j=V.getAttributes();for(let W in j)if(j[W].location>=0){let ot=J[W];ot===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(ot=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(ot=w.instanceColor));let bt={};bt.attribute=ot,ot&&ot.data&&(bt.data=ot.data),X[W]=bt,B++}r.attributes=X,r.attributesNum=B,r.index=F}function y(){let w=r.newAttributes;for(let I=0,V=w.length;I<V;I++)w[I]=0}function g(w){p(w,0)}function p(w,I){let V=r.newAttributes,F=r.enabledAttributes,X=r.attributeDivisors;V[w]=1,F[w]===0&&(s.enableVertexAttribArray(w),F[w]=1),X[w]!==I&&(s.vertexAttribDivisor(w,I),X[w]=I)}function M(){let w=r.newAttributes,I=r.enabledAttributes;for(let V=0,F=I.length;V<F;V++)I[V]!==w[V]&&(s.disableVertexAttribArray(V),I[V]=0)}function v(w,I,V,F,X,J,B){B===!0?s.vertexAttribIPointer(w,I,V,X,J):s.vertexAttribPointer(w,I,V,F,X,J)}function _(w,I,V,F){y();let X=F.attributes,J=V.getAttributes(),B=I.defaultAttributeValues;for(let j in J){let W=J[j];if(W.location>=0){let st=X[j];if(st===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(st=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(st=w.instanceColor)),st!==void 0){let ot=st.normalized,bt=st.itemSize,Ft=t.get(st);if(Ft===void 0)continue;let ne=Ft.buffer,$=Ft.type,rt=Ft.bytesPerElement,Tt=$===s.INT||$===s.UNSIGNED_INT||st.gpuType===Hh;if(st.isInterleavedBufferAttribute){let ut=st.data,kt=ut.stride,Nt=st.offset;if(ut.isInstancedInterleavedBuffer){for(let Xt=0;Xt<W.locationSize;Xt++)p(W.location+Xt,ut.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Xt=0;Xt<W.locationSize;Xt++)g(W.location+Xt);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let Xt=0;Xt<W.locationSize;Xt++)v(W.location+Xt,bt/W.locationSize,$,ot,kt*rt,(Nt+bt/W.locationSize*Xt)*rt,Tt)}else{if(st.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)p(W.location+ut,st.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ut=0;ut<W.locationSize;ut++)g(W.location+ut);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let ut=0;ut<W.locationSize;ut++)v(W.location+ut,bt/W.locationSize,$,ot,bt*rt,bt/W.locationSize*ut*rt,Tt)}}else if(B!==void 0){let ot=B[j];if(ot!==void 0)switch(ot.length){case 2:s.vertexAttrib2fv(W.location,ot);break;case 3:s.vertexAttrib3fv(W.location,ot);break;case 4:s.vertexAttrib4fv(W.location,ot);break;default:s.vertexAttrib1fv(W.location,ot)}}}}M()}function A(){k();for(let w in i){let I=i[w];for(let V in I){let F=I[V];for(let X in F)c(F[X].object),delete F[X];delete I[V]}delete i[w]}}function C(w){if(i[w.id]===void 0)return;let I=i[w.id];for(let V in I){let F=I[V];for(let X in F)c(F[X].object),delete F[X];delete I[V]}delete i[w.id]}function P(w){for(let I in i){let V=i[I];if(V[w.id]===void 0)continue;let F=V[w.id];for(let X in F)c(F[X].object),delete F[X];delete V[w.id]}}function k(){T(),o=!0,r!==n&&(r=n,h(r.object))}function T(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:k,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function ng(s,t,e){let i;function n(h){i=h}function r(h,c){s.drawArrays(i,h,c),e.update(c,i,1)}function o(h,c,u){u!==0&&(s.drawArraysInstanced(i,h,c,u),e.update(c,i,u))}function a(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,u);let f=0;for(let m=0;m<u;m++)f+=c[m];e.update(f,i,1)}function l(h,c,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h.length;m++)o(h[m],c[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,h,0,c,0,d,0,u);let m=0;for(let y=0;y<u;y++)m+=c[y]*d[y];e.update(m,i,1)}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sg(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(P){return!(P!==Ii&&i.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let k=P===qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==nn&&i.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Vi&&!k)}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:A,maxSamples:C}}function rg(s){let t=this,e=null,i=0,n=!1,r=!1,o=new ji,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!n||m===null||m.length===0||r&&!g)r?c(null):h();else{let M=r?0:i,v=M*4,_=p.clippingState||null;l.value=_,_=c(m,d,v,f);for(let A=0;A!==v;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,d,f,m){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=f+y*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,_=f;v!==y;++v,_+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function og(s){let t=new WeakMap;function e(o,a){return a===bl?o.mapping=Cs:a===wl&&(o.mapping=Ps),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===bl||a===wl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new rh(l.height);return h.fromEquirectangularTexture(s,o),t.set(o,h),o.addEventListener("dispose",n),e(h.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Ds=class extends Fo{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bs=4,Zc=[.125,.215,.35,.446,.526,.582],Fn=20,tl=new Ds,Jc=new mt,el=null,il=0,nl=0,sl=!1,Un=(1+Math.sqrt(5))/2,gs=1/Un,Kc=[new x(-Un,gs,0),new x(Un,gs,0),new x(-gs,0,Un),new x(gs,0,Un),new x(0,Un,-gs),new x(0,Un,gs),new x(-1,1,-1),new x(1,1,-1),new x(-1,1,1),new x(1,1,1)],Bo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){el=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(el,il,nl),this._renderer.xr.enabled=sl,t.scissorTest=!1,co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),el=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:qn,format:Ii,colorSpace:Os,depthBuffer:!1},n=jc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ag(r)),this._blurMaterial=lg(r,t,e)}return n}_compileMaterial(t){let e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,tl)}_sceneToCubeUV(t,e,i,n){let a=new Ye(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(Jc),c.toneMapping=vn,c.autoClear=!1;let f=new on({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1}),m=new Dt(new Pe,f),y=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,y=!0):(f.color.copy(Jc),y=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));let v=this._cubeSize;co(n,M*v,p>2?v:0,v,v),c.setRenderTarget(n),y&&c.render(m,a),c.render(t,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=d,c.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Cs||t.mapping===Ps;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());let r=n?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;co(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,tl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kc[(n-r-1)%Kc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,n,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,u=new Dt(this._lodPlanes[n],h),d=h.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fn-1),y=r/m,g=isFinite(r)?1+Math.floor(c*y):Fn;g>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fn}`);let p=[],M=0;for(let P=0;P<Fn;++P){let k=P/y,T=Math.exp(-k*k/2);p.push(T),P===0?M+=T:P<g&&(M+=2*T)}for(let P=0;P<p.length;P++)p[P]=p[P]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-i;let _=this._sizeLods[n],A=3*_*(n>v-bs?n-v+bs:0),C=4*(this._cubeSize-_);co(e,A,C,3*_,2*_),l.setRenderTarget(e),l.render(u,tl)}};function ag(s){let t=[],e=[],i=[],n=s,r=s-bs+1+Zc.length;for(let o=0;o<r;o++){let a=Math.pow(2,n);e.push(a);let l=1/a;o>s-bs?l=Zc[o-s+bs-1]:o===0&&(l=0),i.push(l);let h=1/(a-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,m=6,y=3,g=2,p=1,M=new Float32Array(y*m*f),v=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let C=0;C<f;C++){let P=C%3*2/3-1,k=C>2?0:-1,T=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];M.set(T,y*m*C),v.set(d,g*m*C);let w=[C,C,C,C,C,C];_.set(w,p*m*C)}let A=new ge;A.setAttribute("position",new Ce(M,y)),A.setAttribute("uv",new Ce(v,g)),A.setAttribute("faceIndex",new Ce(_,p)),t.push(A),n>bs&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function jc(s,t,e){let i=new ki(s,t,e);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function co(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function lg(s,t,e){let i=new Float32Array(Fn),n=new x(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Qc(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function tu(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function $h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hg(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,h=l===bl||l===wl,c=l===Cs||l===Ps;if(h||c){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Bo(s)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return h&&f&&f.height>0||c&&f&&n(f)?(e===null&&(e=new Bo(s)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function n(a){let l=0,h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function cg(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&dr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function ug(s,t,e,i){let n={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let y=d.morphAttributes[m];for(let g=0,p=y.length;g<p;g++)t.remove(y[g])}d.removeEventListener("dispose",o),delete n[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let y=f[m];for(let g=0,p=y.length;g<p;g++)t.update(y[g],s.ARRAY_BUFFER)}}function h(u){let d=[],f=u.index,m=u.attributes.position,y=0;if(f!==null){let M=f.array;y=f.version;for(let v=0,_=M.length;v<_;v+=3){let A=M[v+0],C=M[v+1],P=M[v+2];d.push(A,C,C,P,P,A)}}else if(m!==void 0){let M=m.array;y=m.version;for(let v=0,_=M.length/3-1;v<_;v+=3){let A=v+0,C=v+1,P=v+2;d.push(A,C,C,P,P,A)}}else return;let g=new(Ku(d)?No:Uo)(d,1);g.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function c(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function dg(s,t,e){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(i,f,r,d*o),e.update(f,i,1)}function h(d,f,m){m!==0&&(s.drawElementsInstanced(i,f,r,d*o,m),e.update(f,i,m))}function c(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,i,1)}function u(d,f,m,y){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)h(d[p]/o,f[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,y,0,m);let p=0;for(let M=0;M<m;M++)p+=f[M]*y[M];e.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function fg(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function pg(s,t,e){let i=new WeakMap,n=new fe;function r(o,a,l){let h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0,d=i.get(a);if(d===void 0||d.count!==u){let T=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],v=0;f===!0&&(v=1),m===!0&&(v=2),y===!0&&(v=3);let _=a.attributes.position.count*v,A=1;_>t.maxTextureSize&&(A=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let C=new Float32Array(_*A*4*u),P=new Do(C,_,A,u);P.type=Vi,P.needsUpdate=!0;let k=v*4;for(let w=0;w<u;w++){let I=g[w],V=p[w],F=M[w],X=_*A*4*w;for(let J=0;J<I.count;J++){let B=J*k;f===!0&&(n.fromBufferAttribute(I,J),C[X+B+0]=n.x,C[X+B+1]=n.y,C[X+B+2]=n.z,C[X+B+3]=0),m===!0&&(n.fromBufferAttribute(V,J),C[X+B+4]=n.x,C[X+B+5]=n.y,C[X+B+6]=n.z,C[X+B+7]=0),y===!0&&(n.fromBufferAttribute(F,J),C[X+B+8]=n.x,C[X+B+9]=n.y,C[X+B+10]=n.z,C[X+B+11]=F.itemSize===4?n.w:1)}}d={count:u,texture:P,size:new ct(_,A)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<h.length;y++)f+=h[y];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",h)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function mg(s,t,e,i){let n=new WeakMap;function r(l){let h=i.render.frame,c=l.geometry,u=t.get(l,c);if(n.get(u)!==h&&(t.update(u),n.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==h&&(d.update(),n.set(d,h))}return u}function o(){n=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var Ho=class extends hi{constructor(t,e,i,n,r,o,a,l,h,c=Es){if(c!==Es&&c!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Es&&(i=Hn),i===void 0&&c===ks&&(i=Is),super(null,n,r,o,a,l,c,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Le,this.minFilter=l!==void 0?l:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ed=new hi,eu=new Ho(1,1),id=new Do,nd=new nh,sd=new Oo,iu=[],nu=[],su=new Float32Array(16),ru=new Float32Array(9),ou=new Float32Array(4);function Hs(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=iu[n];if(r===void 0&&(r=new Float32Array(n),iu[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function We(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Xe(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function ha(s,t){let e=nu[t];e===void 0&&(e=new Int32Array(t),nu[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function gg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function yg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2fv(this.addr,t),Xe(e,t)}}function xg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;s.uniform3fv(this.addr,t),Xe(e,t)}}function vg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4fv(this.addr,t),Xe(e,t)}}function _g(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;ou.set(i),s.uniformMatrix2fv(this.addr,!1,ou),Xe(e,i)}}function Mg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;ru.set(i),s.uniformMatrix3fv(this.addr,!1,ru),Xe(e,i)}}function bg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;su.set(i),s.uniformMatrix4fv(this.addr,!1,su),Xe(e,i)}}function wg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Sg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2iv(this.addr,t),Xe(e,t)}}function Eg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;s.uniform3iv(this.addr,t),Xe(e,t)}}function Tg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4iv(this.addr,t),Xe(e,t)}}function Ag(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Rg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2uiv(this.addr,t),Xe(e,t)}}function Cg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;s.uniform3uiv(this.addr,t),Xe(e,t)}}function Pg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4uiv(this.addr,t),Xe(e,t)}}function Ig(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(eu.compareFunction=Ju,r=eu):r=ed,e.setTexture2D(t||r,n)}function kg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||nd,n)}function Lg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||sd,n)}function Dg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||id,n)}function zg(s){switch(s){case 5126:return gg;case 35664:return yg;case 35665:return xg;case 35666:return vg;case 35674:return _g;case 35675:return Mg;case 35676:return bg;case 5124:case 35670:return wg;case 35667:case 35671:return Sg;case 35668:case 35672:return Eg;case 35669:case 35673:return Tg;case 5125:return Ag;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}function Ug(s,t){s.uniform1fv(this.addr,t)}function Ng(s,t){let e=Hs(t,this.size,2);s.uniform2fv(this.addr,e)}function Fg(s,t){let e=Hs(t,this.size,3);s.uniform3fv(this.addr,e)}function Og(s,t){let e=Hs(t,this.size,4);s.uniform4fv(this.addr,e)}function Bg(s,t){let e=Hs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Hg(s,t){let e=Hs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Vg(s,t){let e=Hs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Gg(s,t){s.uniform1iv(this.addr,t)}function Wg(s,t){s.uniform2iv(this.addr,t)}function Xg(s,t){s.uniform3iv(this.addr,t)}function qg(s,t){s.uniform4iv(this.addr,t)}function Yg(s,t){s.uniform1uiv(this.addr,t)}function $g(s,t){s.uniform2uiv(this.addr,t)}function Zg(s,t){s.uniform3uiv(this.addr,t)}function Jg(s,t){s.uniform4uiv(this.addr,t)}function Kg(s,t,e){let i=this.cache,n=t.length,r=ha(e,n);We(i,r)||(s.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||ed,r[o])}function jg(s,t,e){let i=this.cache,n=t.length,r=ha(e,n);We(i,r)||(s.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||nd,r[o])}function Qg(s,t,e){let i=this.cache,n=t.length,r=ha(e,n);We(i,r)||(s.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||sd,r[o])}function ty(s,t,e){let i=this.cache,n=t.length,r=ha(e,n);We(i,r)||(s.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||id,r[o])}function ey(s){switch(s){case 5126:return Ug;case 35664:return Ng;case 35665:return Fg;case 35666:return Og;case 35674:return Bg;case 35675:return Hg;case 35676:return Vg;case 5124:case 35670:return Gg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return $g;case 36295:return Zg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return ty}}var oh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}},ah=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ey(e.type)}},lh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},rl=/(\w+)(\])?(\[|\.)?/g;function au(s,t){s.seq.push(t),s.map[t.id]=t}function iy(s,t,e){let i=s.name,n=i.length;for(rl.lastIndex=0;;){let r=rl.exec(i),o=rl.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===n){au(e,h===void 0?new oh(a,s,t):new ah(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new lh(a),au(e,u)),e=u}}}var As=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);iy(r,o,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function lu(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var ny=37297,sy=0;function ry(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var hu=new Ht;function oy(s){te._getMatrix(hu,te.workingColorSpace,s);let t=`mat3( ${hu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case la:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function cu(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+ry(s.getShaderSource(t),o)}else return n}function ay(s,t){let e=oy(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ly(s,t){let e;switch(t){case Lf:e="Linear";break;case Df:e="Reinhard";break;case zf:e="Cineon";break;case Uf:e="ACESFilmic";break;case Ff:e="AgX";break;case Of:e="Neutral";break;case Nf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var uo=new x;function hy(){te.getLuminanceCoefficients(uo);let s=uo.x.toFixed(4),t=uo.y.toFixed(4),e=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function uy(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dy(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function fr(s){return s!==""}function uu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function du(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(s){return s.replace(fy,my)}var py=new Map;function my(s,t){let e=Gt[t];if(e===void 0){let i=py.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return hh(e)}var gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(s){return s.replace(gy,yy)}function yy(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function pu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xy(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===df?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ki&&(t="SHADOWMAP_TYPE_VSM"),t}function vy(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Cs:case Ps:t="ENVMAP_TYPE_CUBE";break;case aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _y(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ps&&(t="ENVMAP_MODE_REFRACTION"),t}function My(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bh:t="ENVMAP_BLENDING_MULTIPLY";break;case If:t="ENVMAP_BLENDING_MIX";break;case kf:t="ENVMAP_BLENDING_ADD";break}return t}function by(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function wy(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=xy(e),h=vy(e),c=_y(e),u=My(e),d=by(e),f=cy(e),m=uy(r),y=n.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(fr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(fr).join(`
`),p.length>0&&(p+=`
`)):(g=[pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),p=[pu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==vn?ly("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,ay("linearToOutputTexel",e.outputColorSpace),hy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fr).join(`
`)),o=hh(o),o=uu(o,e),o=du(o,e),a=hh(a),a=uu(a,e),a=du(a,e),o=fu(o),a=fu(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=M+g+o,_=M+p+a,A=lu(n,n.VERTEX_SHADER,v),C=lu(n,n.FRAGMENT_SHADER,_);n.attachShader(y,A),n.attachShader(y,C),e.index0AttributeName!==void 0?n.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y);function P(I){if(s.debug.checkShaderErrors){let V=n.getProgramInfoLog(y).trim(),F=n.getShaderInfoLog(A).trim(),X=n.getShaderInfoLog(C).trim(),J=!0,B=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,y,A,C);else{let j=cu(n,A,"vertex"),W=cu(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+j+`
`+W)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(F===""||X==="")&&(B=!1);B&&(I.diagnostics={runnable:J,programLog:V,vertexShader:{log:F,prefix:g},fragmentShader:{log:X,prefix:p}})}n.deleteShader(A),n.deleteShader(C),k=new As(n,y),T=dy(n,y)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=n.getProgramParameter(y,ny)),w},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sy++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=C,this}var Sy=0,ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new uh(t),e.set(t,i)),i}},uh=class{constructor(t){this.id=Sy++,this.code=t,this.usedTimes=0}};function Ey(s,t,e,i,n,r,o){let a=new zo,l=new ch,h=new Set,c=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return h.add(T),T===0?"uv":`uv${T}`}function g(T,w,I,V,F){let X=V.fog,J=F.geometry,B=T.isMeshStandardMaterial?V.environment:null,j=(T.isMeshStandardMaterial?e:t).get(T.envMap||B),W=j&&j.mapping===aa?j.image.height:null,st=m[T.type];T.precision!==null&&(f=n.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let ot=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,bt=ot!==void 0?ot.length:0,Ft=0;J.morphAttributes.position!==void 0&&(Ft=1),J.morphAttributes.normal!==void 0&&(Ft=2),J.morphAttributes.color!==void 0&&(Ft=3);let ne,$,rt,Tt;if(st){let ce=Bi[st];ne=ce.vertexShader,$=ce.fragmentShader}else ne=T.vertexShader,$=T.fragmentShader,l.update(T),rt=l.getVertexShaderID(T),Tt=l.getFragmentShaderID(T);let ut=s.getRenderTarget(),kt=s.state.buffers.depth.getReversed(),Nt=F.isInstancedMesh===!0,Xt=F.isBatchedMesh===!0,Ae=!!T.map,jt=!!T.matcap,ze=!!j,U=!!T.aoMap,vi=!!T.lightMap,$t=!!T.bumpMap,Zt=!!T.normalMap,Pt=!!T.displacementMap,xe=!!T.emissiveMap,Ct=!!T.metalnessMap,R=!!T.roughnessMap,b=T.anisotropy>0,N=T.clearcoat>0,Q=T.dispersion>0,et=T.iridescence>0,K=T.sheen>0,At=T.transmission>0,dt=b&&!!T.anisotropyMap,vt=N&&!!T.clearcoatMap,Qt=N&&!!T.clearcoatNormalMap,it=N&&!!T.clearcoatRoughnessMap,_t=et&&!!T.iridescenceMap,It=et&&!!T.iridescenceThicknessMap,Lt=K&&!!T.sheenColorMap,Mt=K&&!!T.sheenRoughnessMap,Jt=!!T.specularMap,Vt=!!T.specularColorMap,pe=!!T.specularIntensityMap,L=At&&!!T.transmissionMap,ht=At&&!!T.thicknessMap,Y=!!T.gradientMap,tt=!!T.alphaMap,gt=T.alphaTest>0,ft=!!T.alphaHash,Ot=!!T.extensions,ke=vn;T.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ke=s.toneMapping);let Qe={shaderID:st,shaderType:T.type,shaderName:T.name,vertexShader:ne,fragmentShader:$,defines:T.defines,customVertexShaderID:rt,customFragmentShaderID:Tt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Xt,batchingColor:Xt&&F._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ut===null?s.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Os,alphaToCoverage:!!T.alphaToCoverage,map:Ae,matcap:jt,envMap:ze,envMapMode:ze&&j.mapping,envMapCubeUVHeight:W,aoMap:U,lightMap:vi,bumpMap:$t,normalMap:Zt,displacementMap:d&&Pt,emissiveMap:xe,normalMapObjectSpace:Zt&&T.normalMapType===Gf,normalMapTangentSpace:Zt&&T.normalMapType===Zu,metalnessMap:Ct,roughnessMap:R,anisotropy:b,anisotropyMap:dt,clearcoat:N,clearcoatMap:vt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:it,dispersion:Q,iridescence:et,iridescenceMap:_t,iridescenceThicknessMap:It,sheen:K,sheenColorMap:Lt,sheenRoughnessMap:Mt,specularMap:Jt,specularColorMap:Vt,specularIntensityMap:pe,transmission:At,transmissionMap:L,thicknessMap:ht,gradientMap:Y,opaque:T.transparent===!1&&T.blending===Ss&&T.alphaToCoverage===!1,alphaMap:tt,alphaTest:gt,alphaHash:ft,combine:T.combine,mapUv:Ae&&y(T.map.channel),aoMapUv:U&&y(T.aoMap.channel),lightMapUv:vi&&y(T.lightMap.channel),bumpMapUv:$t&&y(T.bumpMap.channel),normalMapUv:Zt&&y(T.normalMap.channel),displacementMapUv:Pt&&y(T.displacementMap.channel),emissiveMapUv:xe&&y(T.emissiveMap.channel),metalnessMapUv:Ct&&y(T.metalnessMap.channel),roughnessMapUv:R&&y(T.roughnessMap.channel),anisotropyMapUv:dt&&y(T.anisotropyMap.channel),clearcoatMapUv:vt&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:It&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&y(T.sheenRoughnessMap.channel),specularMapUv:Jt&&y(T.specularMap.channel),specularColorMapUv:Vt&&y(T.specularColorMap.channel),specularIntensityMapUv:pe&&y(T.specularIntensityMap.channel),transmissionMapUv:L&&y(T.transmissionMap.channel),thicknessMapUv:ht&&y(T.thicknessMap.channel),alphaMapUv:tt&&y(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Zt||b),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!J.attributes.uv&&(Ae||tt),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:kt,skinning:F.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Ft,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ae&&T.map.isVideoTexture===!0&&te.getTransfer(T.map.colorSpace)===ue,decodeVideoTextureEmissive:xe&&T.emissiveMap.isVideoTexture===!0&&te.getTransfer(T.emissiveMap.colorSpace)===ue,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===li,flipSided:T.side===ni,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ot&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&T.extensions.multiDraw===!0||Xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Qe.vertexUv1s=h.has(1),Qe.vertexUv2s=h.has(2),Qe.vertexUv3s=h.has(3),h.clear(),Qe}function p(T){let w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(let I in T.defines)w.push(I),w.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(M(w,T),v(w,T),w.push(s.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function M(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function v(T,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),T.push(a.mask)}function _(T){let w=m[T.type],I;if(w){let V=Bi[w];I=mp.clone(V.uniforms)}else I=T.uniforms;return I}function A(T,w){let I;for(let V=0,F=c.length;V<F;V++){let X=c[V];if(X.cacheKey===w){I=X,++I.usedTimes;break}}return I===void 0&&(I=new wy(s,w,T,r),c.push(I)),I}function C(T){if(--T.usedTimes===0){let w=c.indexOf(T);c[w]=c[c.length-1],c.pop(),T.destroy()}}function P(T){l.remove(T)}function k(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:C,releaseShaderCache:P,programs:c,dispose:k}}function Ty(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Ay(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function mu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function gu(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,d,f,m,y,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:y,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=y,p.group=g),t++,p}function a(u,d,f,m,y,g){let p=o(u,d,f,m,y,g);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function l(u,d,f,m,y,g){let p=o(u,d,f,m,y,g);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||Ay),i.length>1&&i.sort(d||mu),n.length>1&&n.sort(d||mu)}function c(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:c,sort:h}}function Ry(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new gu,s.set(i,[o])):n>=r.length?(o=new gu,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Cy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new x,color:new mt};break;case"SpotLight":e={position:new x,direction:new x,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new x,color:new mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new x,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":e={color:new mt,position:new x,halfWidth:new x,halfHeight:new x};break}return s[t.id]=e,e}}}function Py(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Iy=0;function ky(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ly(s){let t=new Cy,e=Py(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new x);let n=new x,r=new qt,o=new qt;function a(h){let c=0,u=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,m=0,y=0,g=0,p=0,M=0,v=0,_=0,A=0,C=0,P=0;h.sort(ky);for(let T=0,w=h.length;T<w;T++){let I=h[T],V=I.color,F=I.intensity,X=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)c+=V.r*F,u+=V.g*F,d+=V.b*F;else if(I.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(I.sh.coefficients[B],F);P++}else if(I.isDirectionalLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,W=e.get(I);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=J,i.directionalShadowMatrix[f]=I.shadow.matrix,M++}i.directional[f]=B,f++}else if(I.isSpotLight){let B=t.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(V).multiplyScalar(F),B.distance=X,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,i.spot[y]=B;let j=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,j.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[y]=j.matrix,I.castShadow){let W=e.get(I);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,i.spotShadow[y]=W,i.spotShadowMap[y]=J,_++}y++}else if(I.isRectAreaLight){let B=t.get(I);B.color.copy(V).multiplyScalar(F),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=B,g++}else if(I.isPointLight){let B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){let j=I.shadow,W=e.get(I);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,i.pointShadow[m]=W,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=I.shadow.matrix,v++}i.point[m]=B,m++}else if(I.isHemisphereLight){let B=t.get(I);B.skyColor.copy(I.color).multiplyScalar(F),B.groundColor.copy(I.groundColor).multiplyScalar(F),i.hemi[p]=B,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;let k=i.hash;(k.directionalLength!==f||k.pointLength!==m||k.spotLength!==y||k.rectAreaLength!==g||k.hemiLength!==p||k.numDirectionalShadows!==M||k.numPointShadows!==v||k.numSpotShadows!==_||k.numSpotMaps!==A||k.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,k.directionalLength=f,k.pointLength=m,k.spotLength=y,k.rectAreaLength=g,k.hemiLength=p,k.numDirectionalShadows=M,k.numPointShadows=v,k.numSpotShadows=_,k.numSpotMaps=A,k.numLightProbes=P,i.version=Iy++)}function l(h,c){let u=0,d=0,f=0,m=0,y=0,g=c.matrixWorldInverse;for(let p=0,M=h.length;p<M;p++){let v=h[p];if(v.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(g),u++}else if(v.isSpotLight){let _=i.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let _=i.rectArea[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let _=i.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function yu(s){let t=new Ly(s),e=[],i=[];function n(c){h.camera=c,e.length=0,i.length=0}function r(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}let h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Dy(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new yu(s),t.set(n,[a])):r>=o.length?(a=new yu(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var dh=class extends Gi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fh=class extends Gi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ny(s,t,e){let i=new _r,n=new ct,r=new ct,o=new fe,a=new dh({depthPacking:Vf}),l=new fh,h={},c=e.maxTextureSize,u={[_n]:ni,[ni]:_n,[li]:li},d=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:zy,fragmentShader:Uy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ge;m.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Dt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fu;let p=this.type;this.render=function(C,P,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let T=s.getRenderTarget(),w=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),V=s.state;V.setBlending(xn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let F=p!==Ki&&this.type===Ki,X=p===Ki&&this.type!==Ki;for(let J=0,B=C.length;J<B;J++){let j=C[J],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let st=W.getFrameExtents();if(n.multiply(st),r.copy(W.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(r.x=Math.floor(c/st.x),n.x=r.x*st.x,W.mapSize.x=r.x),n.y>c&&(r.y=Math.floor(c/st.y),n.y=r.y*st.y,W.mapSize.y=r.y)),W.map===null||F===!0||X===!0){let bt=this.type!==Ki?{minFilter:Le,magFilter:Le}:{};W.map!==null&&W.map.dispose(),W.map=new ki(n.x,n.y,bt),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let ot=W.getViewportCount();for(let bt=0;bt<ot;bt++){let Ft=W.getViewport(bt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),V.viewport(o),W.updateMatrices(j,bt),i=W.getFrustum(),_(P,k,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Ki&&M(W,k),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(T,w,I)};function M(C,P){let k=t.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ki(n.x,n.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(P,null,k,d,y,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(P,null,k,f,y,null)}function v(C,P,k,T){let w=null,I=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)w=I;else if(w=k.isPointLight===!0?l:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let V=w.uuid,F=P.uuid,X=h[V];X===void 0&&(X={},h[V]=X);let J=X[F];J===void 0&&(J=w.clone(),X[F]=J,P.addEventListener("dispose",A)),w=J}if(w.visible=P.visible,w.wireframe=P.wireframe,T===Ki?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:u[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let V=s.properties.get(w);V.light=k}return w}function _(C,P,k,T,w){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===Ki)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);let F=t.update(C),X=C.material;if(Array.isArray(X)){let J=F.groups;for(let B=0,j=J.length;B<j;B++){let W=J[B],st=X[W.materialIndex];if(st&&st.visible){let ot=v(C,st,T,w);C.onBeforeShadow(s,C,P,k,F,ot,W),s.renderBufferDirect(k,null,F,ot,C,W),C.onAfterShadow(s,C,P,k,F,ot,W)}}}else if(X.visible){let J=v(C,X,T,w);C.onBeforeShadow(s,C,P,k,F,J,null),s.renderBufferDirect(k,null,F,J,C,null),C.onAfterShadow(s,C,P,k,F,J,null)}}let V=C.children;for(let F=0,X=V.length;F<X;F++)_(V[F],P,k,T,w)}function A(C){C.target.removeEventListener("dispose",A);for(let k in h){let T=h[k],w=C.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}var Fy={[ml]:gl,[yl]:_l,[xl]:Ml,[Rs]:vl,[gl]:ml,[_l]:yl,[Ml]:xl,[vl]:Rs};function Oy(s,t){function e(){let L=!1,ht=new fe,Y=null,tt=new fe(0,0,0,0);return{setMask:function(gt){Y!==gt&&!L&&(s.colorMask(gt,gt,gt,gt),Y=gt)},setLocked:function(gt){L=gt},setClear:function(gt,ft,Ot,ke,Qe){Qe===!0&&(gt*=ke,ft*=ke,Ot*=ke),ht.set(gt,ft,Ot,ke),tt.equals(ht)===!1&&(s.clearColor(gt,ft,Ot,ke),tt.copy(ht))},reset:function(){L=!1,Y=null,tt.set(-1,0,0,0)}}}function i(){let L=!1,ht=!1,Y=null,tt=null,gt=null;return{setReversed:function(ft){if(ht!==ft){let Ot=t.get("EXT_clip_control");ht?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let ke=gt;gt=null,this.setClear(ke)}ht=ft},getReversed:function(){return ht},setTest:function(ft){ft?ut(s.DEPTH_TEST):kt(s.DEPTH_TEST)},setMask:function(ft){Y!==ft&&!L&&(s.depthMask(ft),Y=ft)},setFunc:function(ft){if(ht&&(ft=Fy[ft]),tt!==ft){switch(ft){case ml:s.depthFunc(s.NEVER);break;case gl:s.depthFunc(s.ALWAYS);break;case yl:s.depthFunc(s.LESS);break;case Rs:s.depthFunc(s.LEQUAL);break;case xl:s.depthFunc(s.EQUAL);break;case vl:s.depthFunc(s.GEQUAL);break;case _l:s.depthFunc(s.GREATER);break;case Ml:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=ft}},setLocked:function(ft){L=ft},setClear:function(ft){gt!==ft&&(ht&&(ft=1-ft),s.clearDepth(ft),gt=ft)},reset:function(){L=!1,Y=null,tt=null,gt=null,ht=!1}}}function n(){let L=!1,ht=null,Y=null,tt=null,gt=null,ft=null,Ot=null,ke=null,Qe=null;return{setTest:function(ce){L||(ce?ut(s.STENCIL_TEST):kt(s.STENCIL_TEST))},setMask:function(ce){ht!==ce&&!L&&(s.stencilMask(ce),ht=ce)},setFunc:function(ce,Ti,Wi){(Y!==ce||tt!==Ti||gt!==Wi)&&(s.stencilFunc(ce,Ti,Wi),Y=ce,tt=Ti,gt=Wi)},setOp:function(ce,Ti,Wi){(ft!==ce||Ot!==Ti||ke!==Wi)&&(s.stencilOp(ce,Ti,Wi),ft=ce,Ot=Ti,ke=Wi)},setLocked:function(ce){L=ce},setClear:function(ce){Qe!==ce&&(s.clearStencil(ce),Qe=ce)},reset:function(){L=!1,ht=null,Y=null,tt=null,gt=null,ft=null,Ot=null,ke=null,Qe=null}}}let r=new e,o=new i,a=new n,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,f=[],m=null,y=!1,g=null,p=null,M=null,v=null,_=null,A=null,C=null,P=new mt(0,0,0),k=0,T=!1,w=null,I=null,V=null,F=null,X=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,j=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=j>=2);let st=null,ot={},bt=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),ne=new fe().fromArray(bt),$=new fe().fromArray(Ft);function rt(L,ht,Y,tt){let gt=new Uint8Array(4),ft=s.createTexture();s.bindTexture(L,ft),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<Y;Ot++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(ht+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return ft}let Tt={};Tt[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),Tt[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Tt[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(s.DEPTH_TEST),o.setFunc(Rs),$t(!1),Zt(_c),ut(s.CULL_FACE),U(xn);function ut(L){c[L]!==!0&&(s.enable(L),c[L]=!0)}function kt(L){c[L]!==!1&&(s.disable(L),c[L]=!1)}function Nt(L,ht){return u[L]!==ht?(s.bindFramebuffer(L,ht),u[L]=ht,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ht),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function Xt(L,ht){let Y=f,tt=!1;if(L){Y=d.get(ht),Y===void 0&&(Y=[],d.set(ht,Y));let gt=L.textures;if(Y.length!==gt.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Ot=gt.length;ft<Ot;ft++)Y[ft]=s.COLOR_ATTACHMENT0+ft;Y.length=gt.length,tt=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,tt=!0);tt&&s.drawBuffers(Y)}function Ae(L){return m!==L?(s.useProgram(L),m=L,!0):!1}let jt={[Nn]:s.FUNC_ADD,[pf]:s.FUNC_SUBTRACT,[mf]:s.FUNC_REVERSE_SUBTRACT};jt[gf]=s.MIN,jt[yf]=s.MAX;let ze={[xf]:s.ZERO,[vf]:s.ONE,[_f]:s.SRC_COLOR,[fl]:s.SRC_ALPHA,[Tf]:s.SRC_ALPHA_SATURATE,[Sf]:s.DST_COLOR,[bf]:s.DST_ALPHA,[Mf]:s.ONE_MINUS_SRC_COLOR,[pl]:s.ONE_MINUS_SRC_ALPHA,[Ef]:s.ONE_MINUS_DST_COLOR,[wf]:s.ONE_MINUS_DST_ALPHA,[Af]:s.CONSTANT_COLOR,[Rf]:s.ONE_MINUS_CONSTANT_COLOR,[Cf]:s.CONSTANT_ALPHA,[Pf]:s.ONE_MINUS_CONSTANT_ALPHA};function U(L,ht,Y,tt,gt,ft,Ot,ke,Qe,ce){if(L===xn){y===!0&&(kt(s.BLEND),y=!1);return}if(y===!1&&(ut(s.BLEND),y=!0),L!==ff){if(L!==g||ce!==T){if((p!==Nn||_!==Nn)&&(s.blendEquation(s.FUNC_ADD),p=Nn,_=Nn),ce)switch(L){case Ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mc:s.blendFunc(s.ONE,s.ONE);break;case bc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case bc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,v=null,A=null,C=null,P.set(0,0,0),k=0,g=L,T=ce}return}gt=gt||ht,ft=ft||Y,Ot=Ot||tt,(ht!==p||gt!==_)&&(s.blendEquationSeparate(jt[ht],jt[gt]),p=ht,_=gt),(Y!==M||tt!==v||ft!==A||Ot!==C)&&(s.blendFuncSeparate(ze[Y],ze[tt],ze[ft],ze[Ot]),M=Y,v=tt,A=ft,C=Ot),(ke.equals(P)===!1||Qe!==k)&&(s.blendColor(ke.r,ke.g,ke.b,Qe),P.copy(ke),k=Qe),g=L,T=!1}function vi(L,ht){L.side===li?kt(s.CULL_FACE):ut(s.CULL_FACE);let Y=L.side===ni;ht&&(Y=!Y),$t(Y),L.blending===Ss&&L.transparent===!1?U(xn):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let tt=L.stencilWrite;a.setTest(tt),tt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),xe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ut(s.SAMPLE_ALPHA_TO_COVERAGE):kt(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(L){w!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),w=L)}function Zt(L){L!==cf?(ut(s.CULL_FACE),L!==I&&(L===_c?s.cullFace(s.BACK):L===uf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):kt(s.CULL_FACE),I=L}function Pt(L){L!==V&&(B&&s.lineWidth(L),V=L)}function xe(L,ht,Y){L?(ut(s.POLYGON_OFFSET_FILL),(F!==ht||X!==Y)&&(s.polygonOffset(ht,Y),F=ht,X=Y)):kt(s.POLYGON_OFFSET_FILL)}function Ct(L){L?ut(s.SCISSOR_TEST):kt(s.SCISSOR_TEST)}function R(L){L===void 0&&(L=s.TEXTURE0+J-1),st!==L&&(s.activeTexture(L),st=L)}function b(L,ht,Y){Y===void 0&&(st===null?Y=s.TEXTURE0+J-1:Y=st);let tt=ot[Y];tt===void 0&&(tt={type:void 0,texture:void 0},ot[Y]=tt),(tt.type!==L||tt.texture!==ht)&&(st!==Y&&(s.activeTexture(Y),st=Y),s.bindTexture(L,ht||Tt[L]),tt.type=L,tt.texture=ht)}function N(){let L=ot[st];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qt(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(L){ne.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),ne.copy(L))}function Mt(L){$.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),$.copy(L))}function Jt(L,ht){let Y=h.get(ht);Y===void 0&&(Y=new WeakMap,h.set(ht,Y));let tt=Y.get(L);tt===void 0&&(tt=s.getUniformBlockIndex(ht,L.name),Y.set(L,tt))}function Vt(L,ht){let tt=h.get(ht).get(L);l.get(ht)!==tt&&(s.uniformBlockBinding(ht,tt,L.__bindingPointIndex),l.set(ht,tt))}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},st=null,ot={},u={},d=new WeakMap,f=[],m=null,y=!1,g=null,p=null,M=null,v=null,_=null,A=null,C=null,P=new mt(0,0,0),k=0,T=!1,w=null,I=null,V=null,F=null,X=null,ne.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:kt,bindFramebuffer:Nt,drawBuffers:Xt,useProgram:Ae,setBlending:U,setMaterial:vi,setFlipSided:$t,setCullFace:Zt,setLineWidth:Pt,setPolygonOffset:xe,setScissorTest:Ct,activeTexture:R,bindTexture:b,unbindTexture:N,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:_t,texImage3D:It,updateUBOMapping:Jt,uniformBlockBinding:Vt,texStorage2D:Qt,texStorage3D:it,texSubImage2D:K,texSubImage3D:At,compressedTexSubImage2D:dt,compressedTexSubImage3D:vt,scissor:Lt,viewport:Mt,reset:pe}}function xu(s,t,e,i){let n=By(i);switch(e){case Gu:return s*t;case Xu:return s*t;case qu:return s*t*2;case Wh:return s*t/n.components*n.byteLength;case Xh:return s*t/n.components*n.byteLength;case Yu:return s*t*2/n.components*n.byteLength;case qh:return s*t*2/n.components*n.byteLength;case Wu:return s*t*3/n.components*n.byteLength;case Ii:return s*t*4/n.components*n.byteLength;case Yh:return s*t*4/n.components*n.byteLength;case Eo:case To:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Al:case Cl:return Math.max(s,16)*Math.max(t,8)/4;case Tl:case Rl:return Math.max(s,8)*Math.max(t,8)/2;case Pl:case Il:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case kl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case zl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ql:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Co:case Yl:case $l:return Math.ceil(s/4)*Math.ceil(t/4)*16;case $u:case Zl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Jl:case Kl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function By(s){switch(s){case nn:case Bu:return{byteLength:1,components:1};case xr:case Hu:case qn:return{byteLength:2,components:1};case Vh:case Gh:return{byteLength:2,components:4};case Hn:case Hh:case Vi:return{byteLength:4,components:1};case Vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Hy(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ct,c=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return f?new OffscreenCanvas(R,b):ko("canvas")}function y(R,b,N){let Q=1,et=Ct(R);if((et.width>N||et.height>N)&&(Q=N/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let K=Math.floor(Q*et.width),At=Math.floor(Q*et.height);u===void 0&&(u=m(K,At));let dt=b?m(K,At):u;return dt.width=K,dt.height=At,dt.getContext("2d").drawImage(R,0,0,K,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+K+"x"+At+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(R,b,N,Q,et=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=b;if(b===s.RED&&(N===s.FLOAT&&(K=s.R32F),N===s.HALF_FLOAT&&(K=s.R16F),N===s.UNSIGNED_BYTE&&(K=s.R8)),b===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(K=s.R8UI),N===s.UNSIGNED_SHORT&&(K=s.R16UI),N===s.UNSIGNED_INT&&(K=s.R32UI),N===s.BYTE&&(K=s.R8I),N===s.SHORT&&(K=s.R16I),N===s.INT&&(K=s.R32I)),b===s.RG&&(N===s.FLOAT&&(K=s.RG32F),N===s.HALF_FLOAT&&(K=s.RG16F),N===s.UNSIGNED_BYTE&&(K=s.RG8)),b===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(K=s.RG8UI),N===s.UNSIGNED_SHORT&&(K=s.RG16UI),N===s.UNSIGNED_INT&&(K=s.RG32UI),N===s.BYTE&&(K=s.RG8I),N===s.SHORT&&(K=s.RG16I),N===s.INT&&(K=s.RG32I)),b===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(K=s.RGB8UI),N===s.UNSIGNED_SHORT&&(K=s.RGB16UI),N===s.UNSIGNED_INT&&(K=s.RGB32UI),N===s.BYTE&&(K=s.RGB8I),N===s.SHORT&&(K=s.RGB16I),N===s.INT&&(K=s.RGB32I)),b===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),N===s.UNSIGNED_INT&&(K=s.RGBA32UI),N===s.BYTE&&(K=s.RGBA8I),N===s.SHORT&&(K=s.RGBA16I),N===s.INT&&(K=s.RGBA32I)),b===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),b===s.RGBA){let At=et?la:te.getTransfer(Q);N===s.FLOAT&&(K=s.RGBA32F),N===s.HALF_FLOAT&&(K=s.RGBA16F),N===s.UNSIGNED_BYTE&&(K=At===ue?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(R,b){let N;return R?b===null||b===Hn||b===Is?N=s.DEPTH24_STENCIL8:b===Vi?N=s.DEPTH32F_STENCIL8:b===xr&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Hn||b===Is?N=s.DEPTH_COMPONENT24:b===Vi?N=s.DEPTH_COMPONENT32F:b===xr&&(N=s.DEPTH_COMPONENT16),N}function A(R,b){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Le&&R.minFilter!==gi?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){let b=R.target;b.removeEventListener("dispose",C),k(b),b.isVideoTexture&&c.delete(b)}function P(R){let b=R.target;b.removeEventListener("dispose",P),w(b)}function k(R){let b=i.get(R);if(b.__webglInit===void 0)return;let N=R.source,Q=d.get(N);if(Q){let et=Q[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&T(R),Object.keys(Q).length===0&&d.delete(N)}i.remove(R)}function T(R){let b=i.get(R);s.deleteTexture(b.__webglTexture);let N=R.source,Q=d.get(N);delete Q[b.__cacheKey],o.memory.textures--}function w(R){let b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let et=0;et<b.__webglFramebuffer[Q].length;et++)s.deleteFramebuffer(b.__webglFramebuffer[Q][et]);else s.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)s.deleteFramebuffer(b.__webglFramebuffer[Q]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let N=R.textures;for(let Q=0,et=N.length;Q<et;Q++){let K=i.get(N[Q]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(N[Q])}i.remove(R)}let I=0;function V(){I=0}function F(){let R=I;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),I+=1,R}function X(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function J(R,b){let N=i.get(R);if(R.isVideoTexture&&Pt(R),R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){let Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(N,R,b);return}}e.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+b)}function B(R,b){let N=i.get(R);if(R.version>0&&N.__version!==R.version){$(N,R,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+b)}function j(R,b){let N=i.get(R);if(R.version>0&&N.__version!==R.version){$(N,R,b);return}e.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+b)}function W(R,b){let N=i.get(R);if(R.version>0&&N.__version!==R.version){rt(N,R,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+b)}let st={[Sl]:s.REPEAT,[On]:s.CLAMP_TO_EDGE,[El]:s.MIRRORED_REPEAT},ot={[Le]:s.NEAREST,[Bf]:s.NEAREST_MIPMAP_NEAREST,[Xr]:s.NEAREST_MIPMAP_LINEAR,[gi]:s.LINEAR,[Pa]:s.LINEAR_MIPMAP_NEAREST,[Bn]:s.LINEAR_MIPMAP_LINEAR},bt={[Wf]:s.NEVER,[Jf]:s.ALWAYS,[Xf]:s.LESS,[Ju]:s.LEQUAL,[qf]:s.EQUAL,[Zf]:s.GEQUAL,[Yf]:s.GREATER,[$f]:s.NOTEQUAL};function Ft(R,b){if(b.type===Vi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===gi||b.magFilter===Pa||b.magFilter===Xr||b.magFilter===Bn||b.minFilter===gi||b.minFilter===Pa||b.minFilter===Xr||b.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,st[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,st[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,st[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ot[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ot[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,bt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Le||b.minFilter!==Xr&&b.minFilter!==Bn||b.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ne(R,b){let N=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",C));let Q=b.source,et=d.get(Q);et===void 0&&(et={},d.set(Q,et));let K=X(b);if(K!==R.__cacheKey){et[K]===void 0&&(et[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,N=!0),et[K].usedTimes++;let At=et[R.__cacheKey];At!==void 0&&(et[R.__cacheKey].usedTimes--,At.usedTimes===0&&T(b)),R.__cacheKey=K,R.__webglTexture=et[K].texture}return N}function $(R,b,N){let Q=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=s.TEXTURE_3D);let et=ne(R,b),K=b.source;e.bindTexture(Q,R.__webglTexture,s.TEXTURE0+N);let At=i.get(K);if(K.version!==At.__version||et===!0){e.activeTexture(s.TEXTURE0+N);let dt=te.getPrimaries(te.workingColorSpace),vt=b.colorSpace===gn?null:te.getPrimaries(b.colorSpace),Qt=b.colorSpace===gn||dt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let it=y(b.image,!1,n.maxTextureSize);it=xe(b,it);let _t=r.convert(b.format,b.colorSpace),It=r.convert(b.type),Lt=v(b.internalFormat,_t,It,b.colorSpace,b.isVideoTexture);Ft(Q,b);let Mt,Jt=b.mipmaps,Vt=b.isVideoTexture!==!0,pe=At.__version===void 0||et===!0,L=K.dataReady,ht=A(b,it);if(b.isDepthTexture)Lt=_(b.format===ks,b.type),pe&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,Lt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Lt,it.width,it.height,0,_t,It,null));else if(b.isDataTexture)if(Jt.length>0){Vt&&pe&&e.texStorage2D(s.TEXTURE_2D,ht,Lt,Jt[0].width,Jt[0].height);for(let Y=0,tt=Jt.length;Y<tt;Y++)Mt=Jt[Y],Vt?L&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,Mt.width,Mt.height,_t,It,Mt.data):e.texImage2D(s.TEXTURE_2D,Y,Lt,Mt.width,Mt.height,0,_t,It,Mt.data);b.generateMipmaps=!1}else Vt?(pe&&e.texStorage2D(s.TEXTURE_2D,ht,Lt,it.width,it.height),L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it.width,it.height,_t,It,it.data)):e.texImage2D(s.TEXTURE_2D,0,Lt,it.width,it.height,0,_t,It,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Vt&&pe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Lt,Jt[0].width,Jt[0].height,it.depth);for(let Y=0,tt=Jt.length;Y<tt;Y++)if(Mt=Jt[Y],b.format!==Ii)if(_t!==null)if(Vt){if(L)if(b.layerUpdates.size>0){let gt=xu(Mt.width,Mt.height,b.format,b.type);for(let ft of b.layerUpdates){let Ot=Mt.data.subarray(ft*gt/Mt.data.BYTES_PER_ELEMENT,(ft+1)*gt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ft,Mt.width,Mt.height,1,_t,Ot)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Mt.width,Mt.height,it.depth,_t,Mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Lt,Mt.width,Mt.height,it.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Mt.width,Mt.height,it.depth,_t,It,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Lt,Mt.width,Mt.height,it.depth,0,_t,It,Mt.data)}else{Vt&&pe&&e.texStorage2D(s.TEXTURE_2D,ht,Lt,Jt[0].width,Jt[0].height);for(let Y=0,tt=Jt.length;Y<tt;Y++)Mt=Jt[Y],b.format!==Ii?_t!==null?Vt?L&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,Mt.width,Mt.height,_t,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Lt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?L&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,Mt.width,Mt.height,_t,It,Mt.data):e.texImage2D(s.TEXTURE_2D,Y,Lt,Mt.width,Mt.height,0,_t,It,Mt.data)}else if(b.isDataArrayTexture)if(Vt){if(pe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Lt,it.width,it.height,it.depth),L)if(b.layerUpdates.size>0){let Y=xu(it.width,it.height,b.format,b.type);for(let tt of b.layerUpdates){let gt=it.data.subarray(tt*Y/it.data.BYTES_PER_ELEMENT,(tt+1)*Y/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,it.width,it.height,1,_t,It,gt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,_t,It,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,it.width,it.height,it.depth,0,_t,It,it.data);else if(b.isData3DTexture)Vt?(pe&&e.texStorage3D(s.TEXTURE_3D,ht,Lt,it.width,it.height,it.depth),L&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,_t,It,it.data)):e.texImage3D(s.TEXTURE_3D,0,Lt,it.width,it.height,it.depth,0,_t,It,it.data);else if(b.isFramebufferTexture){if(pe)if(Vt)e.texStorage2D(s.TEXTURE_2D,ht,Lt,it.width,it.height);else{let Y=it.width,tt=it.height;for(let gt=0;gt<ht;gt++)e.texImage2D(s.TEXTURE_2D,gt,Lt,Y,tt,0,_t,It,null),Y>>=1,tt>>=1}}else if(Jt.length>0){if(Vt&&pe){let Y=Ct(Jt[0]);e.texStorage2D(s.TEXTURE_2D,ht,Lt,Y.width,Y.height)}for(let Y=0,tt=Jt.length;Y<tt;Y++)Mt=Jt[Y],Vt?L&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,_t,It,Mt):e.texImage2D(s.TEXTURE_2D,Y,Lt,_t,It,Mt);b.generateMipmaps=!1}else if(Vt){if(pe){let Y=Ct(it);e.texStorage2D(s.TEXTURE_2D,ht,Lt,Y.width,Y.height)}L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,It,it)}else e.texImage2D(s.TEXTURE_2D,0,Lt,_t,It,it);g(b)&&p(Q),At.__version=K.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function rt(R,b,N){if(b.image.length!==6)return;let Q=ne(R,b),et=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+N);let K=i.get(et);if(et.version!==K.__version||Q===!0){e.activeTexture(s.TEXTURE0+N);let At=te.getPrimaries(te.workingColorSpace),dt=b.colorSpace===gn?null:te.getPrimaries(b.colorSpace),vt=b.colorSpace===gn||At===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Qt=b.isCompressedTexture||b.image[0].isCompressedTexture,it=b.image[0]&&b.image[0].isDataTexture,_t=[];for(let tt=0;tt<6;tt++)!Qt&&!it?_t[tt]=y(b.image[tt],!0,n.maxCubemapSize):_t[tt]=it?b.image[tt].image:b.image[tt],_t[tt]=xe(b,_t[tt]);let It=_t[0],Lt=r.convert(b.format,b.colorSpace),Mt=r.convert(b.type),Jt=v(b.internalFormat,Lt,Mt,b.colorSpace),Vt=b.isVideoTexture!==!0,pe=K.__version===void 0||Q===!0,L=et.dataReady,ht=A(b,It);Ft(s.TEXTURE_CUBE_MAP,b);let Y;if(Qt){Vt&&pe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Jt,It.width,It.height);for(let tt=0;tt<6;tt++){Y=_t[tt].mipmaps;for(let gt=0;gt<Y.length;gt++){let ft=Y[gt];b.format!==Ii?Lt!==null?Vt?L&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,ft.width,ft.height,Lt,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,Jt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,ft.width,ft.height,Lt,Mt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,Jt,ft.width,ft.height,0,Lt,Mt,ft.data)}}}else{if(Y=b.mipmaps,Vt&&pe){Y.length>0&&ht++;let tt=Ct(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Jt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(it){Vt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,_t[tt].width,_t[tt].height,Lt,Mt,_t[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Jt,_t[tt].width,_t[tt].height,0,Lt,Mt,_t[tt].data);for(let gt=0;gt<Y.length;gt++){let Ot=Y[gt].image[tt].image;Vt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,Ot.width,Ot.height,Lt,Mt,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,Jt,Ot.width,Ot.height,0,Lt,Mt,Ot.data)}}else{Vt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Lt,Mt,_t[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Jt,Lt,Mt,_t[tt]);for(let gt=0;gt<Y.length;gt++){let ft=Y[gt];Vt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,Lt,Mt,ft.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,Jt,Lt,Mt,ft.image[tt])}}}g(b)&&p(s.TEXTURE_CUBE_MAP),K.__version=et.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Tt(R,b,N,Q,et,K){let At=r.convert(N.format,N.colorSpace),dt=r.convert(N.type),vt=v(N.internalFormat,At,dt,N.colorSpace),Qt=i.get(b),it=i.get(N);if(it.__renderTarget=b,!Qt.__hasExternalTextures){let _t=Math.max(1,b.width>>K),It=Math.max(1,b.height>>K);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,K,vt,_t,It,b.depth,0,At,dt,null):e.texImage2D(et,K,vt,_t,It,0,At,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),Zt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,et,it.__webglTexture,0,$t(b)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,et,it.__webglTexture,K),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(R,b,N){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){let Q=b.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,K=_(b.stencilBuffer,et),At=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=$t(b);Zt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,K,b.width,b.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,K,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,K,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,At,s.RENDERBUFFER,R)}else{let Q=b.textures;for(let et=0;et<Q.length;et++){let K=Q[et],At=r.convert(K.format,K.colorSpace),dt=r.convert(K.type),vt=v(K.internalFormat,At,dt,K.colorSpace),Qt=$t(b);N&&Zt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,vt,b.width,b.height):Zt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qt,vt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,vt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(b.depthTexture);Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);let et=Q.__webglTexture,K=$t(b);if(b.depthTexture.format===Es)Zt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(b.depthTexture.format===ks)Zt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Nt(R){let b=i.get(R),N=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let Q=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){let et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=Q}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");kt(b.__webglFramebuffer,R)}else if(N){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=s.createRenderbuffer(),ut(b.__webglDepthbuffer[Q],R,!1);else{let et=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,K)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ut(b.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(R,b,N){let Q=i.get(R);b!==void 0&&Tt(Q.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Nt(R)}function Ae(R){let b=R.texture,N=i.get(R),Q=i.get(b);R.addEventListener("dispose",P);let et=R.textures,K=R.isWebGLCubeRenderTarget===!0,At=et.length>1;if(At||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=b.version,o.memory.textures++),K){N.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer[dt]=[];for(let vt=0;vt<b.mipmaps.length;vt++)N.__webglFramebuffer[dt][vt]=s.createFramebuffer()}else N.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)N.__webglFramebuffer[dt]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(At)for(let dt=0,vt=et.length;dt<vt;dt++){let Qt=i.get(et[dt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&Zt(R)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){let vt=et[dt];N.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[dt]);let Qt=r.convert(vt.format,vt.colorSpace),it=r.convert(vt.type),_t=v(vt.internalFormat,Qt,it,vt.colorSpace,R.isXRRenderTarget===!0),It=$t(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,_t,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,N.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),ut(N.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)Tt(N.__webglFramebuffer[dt][vt],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt);else Tt(N.__webglFramebuffer[dt],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(b)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let dt=0,vt=et.length;dt<vt;dt++){let Qt=et[dt],it=i.get(Qt);e.bindTexture(s.TEXTURE_2D,it.__webglTexture),Ft(s.TEXTURE_2D,Qt),Tt(N.__webglFramebuffer,R,Qt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),g(Qt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,Q.__webglTexture),Ft(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)Tt(N.__webglFramebuffer[vt],R,b,s.COLOR_ATTACHMENT0,dt,vt);else Tt(N.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,dt,0);g(b)&&p(dt),e.unbindTexture()}R.depthBuffer&&Nt(R)}function jt(R){let b=R.textures;for(let N=0,Q=b.length;N<Q;N++){let et=b[N];if(g(et)){let K=M(R),At=i.get(et).__webglTexture;e.bindTexture(K,At),p(K),e.unbindTexture()}}}let ze=[],U=[];function vi(R){if(R.samples>0){if(Zt(R)===!1){let b=R.textures,N=R.width,Q=R.height,et=s.COLOR_BUFFER_BIT,K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=i.get(R),dt=b.length>1;if(dt)for(let vt=0;vt<b.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let vt=0;vt<b.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[vt]);let Qt=i.get(b[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Qt,0)}s.blitFramebuffer(0,0,N,Q,0,0,N,Q,et,s.NEAREST),l===!0&&(ze.length=0,U.length=0,ze.push(s.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ze.push(K),U.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ze))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let vt=0;vt<b.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,At.__webglColorRenderbuffer[vt]);let Qt=i.get(b[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function $t(R){return Math.min(n.maxSamples,R.samples)}function Zt(R){let b=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pt(R){let b=o.render.frame;c.get(R)!==b&&(c.set(R,b),R.update())}function xe(R,b){let N=R.colorSpace,Q=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||N!==Os&&N!==gn&&(te.getTransfer(N)===ue?(Q!==Ii||et!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),b}function Ct(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=V,this.setTexture2D=J,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=Xt,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=vi,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Zt}function Vy(s,t){function e(i,n=gn){let r,o=te.getTransfer(n);if(i===nn)return s.UNSIGNED_BYTE;if(i===Vh)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Gh)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Vu)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Bu)return s.BYTE;if(i===Hu)return s.SHORT;if(i===xr)return s.UNSIGNED_SHORT;if(i===Hh)return s.INT;if(i===Hn)return s.UNSIGNED_INT;if(i===Vi)return s.FLOAT;if(i===qn)return s.HALF_FLOAT;if(i===Gu)return s.ALPHA;if(i===Wu)return s.RGB;if(i===Ii)return s.RGBA;if(i===Xu)return s.LUMINANCE;if(i===qu)return s.LUMINANCE_ALPHA;if(i===Es)return s.DEPTH_COMPONENT;if(i===ks)return s.DEPTH_STENCIL;if(i===Wh)return s.RED;if(i===Xh)return s.RED_INTEGER;if(i===Yu)return s.RG;if(i===qh)return s.RG_INTEGER;if(i===Yh)return s.RGBA_INTEGER;if(i===Eo||i===To||i===Ao||i===Ro)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===To)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tl||i===Al||i===Rl||i===Cl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pl||i===Il||i===kl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pl||i===Il)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===kl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ll||i===Dl||i===zl||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ll)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ul)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ol)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ql)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Co||i===Yl||i===$l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Co)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$u||i===Zl||i===Jl||i===Kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Co)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var ph=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ae=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gy={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,i),p=this._getHandJoint(h,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,m=.005;h.inputState.pinching&&d>f+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gy)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ae;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new hi,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ge({vertexShader:Wy,fragmentShader:Xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new yi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gh=class extends Mn{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,m=null,y=new mh,g=e.getContextAttributes(),p=null,M=null,v=[],_=[],A=new ct,C=null,P=new Ye;P.viewport=new fe;let k=new Ye;k.viewport=new fe;let T=[P,k],w=new ph,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let rt=v[$];return rt===void 0&&(rt=new pr,v[$]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function($){let rt=v[$];return rt===void 0&&(rt=new pr,v[$]=rt),rt.getGripSpace()},this.getHand=function($){let rt=v[$];return rt===void 0&&(rt=new pr,v[$]=rt),rt.getHandSpace()};function F($){let rt=_.indexOf($.inputSource);if(rt===-1)return;let Tt=v[rt];Tt!==void 0&&(Tt.update($.inputSource,$.frame,h||o),Tt.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",J);for(let $=0;$<v.length;$++){let rt=_[$];rt!==null&&(_[$]=null,v[$].disconnect(rt))}I=null,V=null,y.reset(),t.setRenderTarget(p),f=null,d=null,u=null,n=null,M=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",X),n.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(A),n.renderState.layers===void 0){let rt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,rt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ki(f.framebufferWidth,f.framebufferHeight,{format:Ii,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let rt=null,Tt=null,ut=null;g.depth&&(ut=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=g.stencil?ks:Es,Tt=g.stencil?Is:Hn);let kt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(kt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ki(d.textureWidth,d.textureHeight,{format:Ii,type:nn,depthTexture:new Ho(d.textureWidth,d.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await n.requestReferenceSpace(a),ne.setContext(n),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J($){for(let rt=0;rt<$.removed.length;rt++){let Tt=$.removed[rt],ut=_.indexOf(Tt);ut>=0&&(_[ut]=null,v[ut].disconnect(Tt))}for(let rt=0;rt<$.added.length;rt++){let Tt=$.added[rt],ut=_.indexOf(Tt);if(ut===-1){for(let Nt=0;Nt<v.length;Nt++)if(Nt>=_.length){_.push(Tt),ut=Nt;break}else if(_[Nt]===null){_[Nt]=Tt,ut=Nt;break}if(ut===-1)break}let kt=v[ut];kt&&kt.connect(Tt)}}let B=new x,j=new x;function W($,rt,Tt){B.setFromMatrixPosition(rt.matrixWorld),j.setFromMatrixPosition(Tt.matrixWorld);let ut=B.distanceTo(j),kt=rt.projectionMatrix.elements,Nt=Tt.projectionMatrix.elements,Xt=kt[14]/(kt[10]-1),Ae=kt[14]/(kt[10]+1),jt=(kt[9]+1)/kt[5],ze=(kt[9]-1)/kt[5],U=(kt[8]-1)/kt[0],vi=(Nt[8]+1)/Nt[0],$t=Xt*U,Zt=Xt*vi,Pt=ut/(-U+vi),xe=Pt*-U;if(rt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(xe),$.translateZ(Pt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),kt[10]===-1)$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let Ct=Xt+Pt,R=Ae+Pt,b=$t-xe,N=Zt+(ut-xe),Q=jt*Ae/R*Ct,et=ze*Ae/R*Ct;$.projectionMatrix.makePerspective(b,N,Q,et,Ct,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function st($,rt){rt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(rt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let rt=$.near,Tt=$.far;y.texture!==null&&(y.depthNear>0&&(rt=y.depthNear),y.depthFar>0&&(Tt=y.depthFar)),w.near=k.near=P.near=rt,w.far=k.far=P.far=Tt,(I!==w.near||V!==w.far)&&(n.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,V=w.far),P.layers.mask=$.layers.mask|2,k.layers.mask=$.layers.mask|4,w.layers.mask=P.layers.mask|k.layers.mask;let ut=$.parent,kt=w.cameras;st(w,ut);for(let Nt=0;Nt<kt.length;Nt++)st(kt[Nt],ut);kt.length===2?W(w,P,k):w.projectionMatrix.copy(P.projectionMatrix),ot($,w,ut)};function ot($,rt,Tt){Tt===null?$.matrix.copy(rt.matrixWorld):($.matrix.copy(Tt.matrixWorld),$.matrix.invert(),$.matrix.multiply(rt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=th*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(w)};let bt=null;function Ft($,rt){if(c=rt.getViewerPose(h||o),m=rt,c!==null){let Tt=c.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let ut=!1;Tt.length!==w.cameras.length&&(w.cameras.length=0,ut=!0);for(let Nt=0;Nt<Tt.length;Nt++){let Xt=Tt[Nt],Ae=null;if(f!==null)Ae=f.getViewport(Xt);else{let ze=u.getViewSubImage(d,Xt);Ae=ze.viewport,Nt===0&&(t.setRenderTargetTextures(M,ze.colorTexture,d.ignoreDepthValues?void 0:ze.depthStencilTexture),t.setRenderTarget(M))}let jt=T[Nt];jt===void 0&&(jt=new Ye,jt.layers.enable(Nt),jt.viewport=new fe,T[Nt]=jt),jt.matrix.fromArray(Xt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Xt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Nt===0&&(w.matrix.copy(jt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ut===!0&&w.cameras.push(jt)}let kt=n.enabledFeatures;if(kt&&kt.includes("depth-sensing")){let Nt=u.getDepthInformation(Tt[0]);Nt&&Nt.isValid&&Nt.texture&&y.init(t,Nt,n.renderState)}}for(let Tt=0;Tt<v.length;Tt++){let ut=_[Tt],kt=v[Tt];ut!==null&&kt!==void 0&&kt.update(ut,rt,h||o)}bt&&bt($,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),m=null}let ne=new td;ne.setAnimationLoop(Ft),this.setAnimationLoop=function($){bt=$},this.dispose=function(){}}},zn=new oi,qy=new qt;function Yy(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Qu(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,M,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),c(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,v):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ni&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ni&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),v=M.envMap,_=M.envMapRotation;v&&(g.envMap.value=v,zn.copy(_),zn.x*=-1,zn.y*=-1,zn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),g.envMapRotation.value.setFromMatrix4(qy.makeRotationFromEuler(zn)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ni&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function $y(s,t,e,i){let n={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){let _=v.program;i.uniformBlockBinding(M,_)}function h(M,v){let _=n[M.id];_===void 0&&(m(M),_=c(M),n[M.id]=_,M.addEventListener("dispose",g));let A=v.program;i.updateUBOMapping(M,A);let C=t.render.frame;r[M.id]!==C&&(d(M),r[M.id]=C)}function c(M){let v=u();M.__bindingPointIndex=v;let _=s.createBuffer(),A=M.__size,C=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,A,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let v=n[M.id],_=M.uniforms,A=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let C=0,P=_.length;C<P;C++){let k=Array.isArray(_[C])?_[C]:[_[C]];for(let T=0,w=k.length;T<w;T++){let I=k[T];if(f(I,C,T,A)===!0){let V=I.__offset,F=Array.isArray(I.value)?I.value:[I.value],X=0;for(let J=0;J<F.length;J++){let B=F[J],j=y(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,V+X,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,v,_,A){let C=M.value,P=v+"_"+_;if(A[P]===void 0)return typeof C=="number"||typeof C=="boolean"?A[P]=C:A[P]=C.clone(),!0;{let k=A[P];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return A[P]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function m(M){let v=M.uniforms,_=0,A=16;for(let P=0,k=v.length;P<k;P++){let T=Array.isArray(v[P])?v[P]:[v[P]];for(let w=0,I=T.length;w<I;w++){let V=T[w],F=Array.isArray(V.value)?V.value:[V.value];for(let X=0,J=F.length;X<J;X++){let B=F[X],j=y(B),W=_%A,st=W%j.boundary,ot=W+st;_+=st,ot!==0&&A-ot<j.storage&&(_+=A-ot),V.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=j.storage}}}let C=_%A;return C>0&&(_+=A-C),M.__size=_,M.__cache={},this}function y(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){let v=M.target;v.removeEventListener("dispose",g);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(n[v.id]),delete n[v.id],delete r[v.id]}function p(){for(let M in n)s.deleteBuffer(n[M]);o=[],n={},r={}}return{bind:l,update:h,dispose:p}}var Vo=class{constructor(t={}){let{canvas:e=jf(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),y=new Int32Array(4),g=null,p=null,M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=vn,this.toneMappingExposure=1;let _=this,A=!1,C=0,P=0,k=null,T=-1,w=null,I=new fe,V=new fe,F=null,X=new mt(0),J=0,B=e.width,j=e.height,W=1,st=null,ot=null,bt=new fe(0,0,B,j),Ft=new fe(0,0,B,j),ne=!1,$=new _r,rt=!1,Tt=!1,ut=new qt,kt=new qt,Nt=new x,Xt=new fe,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function ze(){return k===null?W:1}let U=i;function vi(S,D){return e.getContext(S,D)}try{let S={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),U===null){let D="webgl2";if(U=vi(D,S),U===null)throw vi(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let $t,Zt,Pt,xe,Ct,R,b,N,Q,et,K,At,dt,vt,Qt,it,_t,It,Lt,Mt,Jt,Vt,pe,L;function ht(){$t=new cg(U),$t.init(),Vt=new Vy(U,$t),Zt=new sg(U,$t,t,Vt),Pt=new Oy(U,$t),Zt.reverseDepthBuffer&&d&&Pt.buffers.depth.setReversed(!0),xe=new fg(U),Ct=new Ty,R=new Hy(U,$t,Pt,Ct,Zt,Vt,xe),b=new og(_),N=new hg(_),Q=new _p(U),pe=new ig(U,Q),et=new ug(U,Q,xe,pe),K=new mg(U,et,Q,xe),Lt=new pg(U,Zt,R),it=new rg(Ct),At=new Ey(_,b,N,$t,Zt,pe,it),dt=new Yy(_,Ct),vt=new Ry,Qt=new Dy($t),It=new eg(_,b,N,Pt,K,f,l),_t=new Ny(_,K,Zt),L=new $y(U,xe,Zt,Pt),Mt=new ng(U,$t,xe),Jt=new dg(U,$t,xe),xe.programs=At.programs,_.capabilities=Zt,_.extensions=$t,_.properties=Ct,_.renderLists=vt,_.shadowMap=_t,_.state=Pt,_.info=xe}ht();let Y=new gh(_,U);this.xr=Y,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=$t.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=$t.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(B,j,!1))},this.getSize=function(S){return S.set(B,j)},this.setSize=function(S,D,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,j=D,e.width=Math.floor(S*W),e.height=Math.floor(D*W),H===!0&&(e.style.width=S+"px",e.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(B*W,j*W).floor()},this.setDrawingBufferSize=function(S,D,H){B=S,j=D,W=H,e.width=Math.floor(S*H),e.height=Math.floor(D*H),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(bt)},this.setViewport=function(S,D,H,G){S.isVector4?bt.set(S.x,S.y,S.z,S.w):bt.set(S,D,H,G),Pt.viewport(I.copy(bt).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(Ft)},this.setScissor=function(S,D,H,G){S.isVector4?Ft.set(S.x,S.y,S.z,S.w):Ft.set(S,D,H,G),Pt.scissor(V.copy(Ft).multiplyScalar(W).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(S){Pt.setScissorTest(ne=S)},this.setOpaqueSort=function(S){st=S},this.setTransparentSort=function(S){ot=S},this.getClearColor=function(S){return S.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(S=!0,D=!0,H=!0){let G=0;if(S){let z=!1;if(k!==null){let nt=k.texture.format;z=nt===Yh||nt===qh||nt===Xh}if(z){let nt=k.texture.type,pt=nt===nn||nt===Hn||nt===xr||nt===Is||nt===Vh||nt===Gh,wt=It.getClearColor(),St=It.getClearAlpha(),Ut=wt.r,Bt=wt.g,Et=wt.b;pt?(m[0]=Ut,m[1]=Bt,m[2]=Et,m[3]=St,U.clearBufferuiv(U.COLOR,0,m)):(y[0]=Ut,y[1]=Bt,y[2]=Et,y[3]=St,U.clearBufferiv(U.COLOR,0,y))}else G|=U.COLOR_BUFFER_BIT}D&&(G|=U.DEPTH_BUFFER_BIT),H&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),vt.dispose(),Qt.dispose(),Ct.dispose(),b.dispose(),N.dispose(),K.dispose(),pe.dispose(),L.dispose(),At.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",dc),Y.removeEventListener("sessionend",fc),Cn.stop()};function tt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let S=xe.autoReset,D=_t.enabled,H=_t.autoUpdate,G=_t.needsUpdate,z=_t.type;ht(),xe.autoReset=S,_t.enabled=D,_t.autoUpdate=H,_t.needsUpdate=G,_t.type=z}function ft(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ot(S){let D=S.target;D.removeEventListener("dispose",Ot),ke(D)}function ke(S){Qe(S),Ct.remove(S)}function Qe(S){let D=Ct.get(S).programs;D!==void 0&&(D.forEach(function(H){At.releaseProgram(H)}),S.isShaderMaterial&&At.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,H,G,z,nt){D===null&&(D=Ae);let pt=z.isMesh&&z.matrixWorld.determinant()<0,wt=af(S,D,H,G,z);Pt.setMaterial(G,pt);let St=H.index,Ut=1;if(G.wireframe===!0){if(St=et.getWireframeAttribute(H),St===void 0)return;Ut=2}let Bt=H.drawRange,Et=H.attributes.position,ee=Bt.start*Ut,me=(Bt.start+Bt.count)*Ut;nt!==null&&(ee=Math.max(ee,nt.start*Ut),me=Math.min(me,(nt.start+nt.count)*Ut)),St!==null?(ee=Math.max(ee,0),me=Math.min(me,St.count)):Et!=null&&(ee=Math.max(ee,0),me=Math.min(me,Et.count));let ve=me-ee;if(ve<0||ve===1/0)return;pe.setup(z,G,wt,H,St);let ai,re=Mt;if(St!==null&&(ai=Q.get(St),re=Jt,re.setIndex(ai)),z.isMesh)G.wireframe===!0?(Pt.setLineWidth(G.wireframeLinewidth*ze()),re.setMode(U.LINES)):re.setMode(U.TRIANGLES);else if(z.isLine){let Rt=G.linewidth;Rt===void 0&&(Rt=1),Pt.setLineWidth(Rt*ze()),z.isLineSegments?re.setMode(U.LINES):z.isLineLoop?re.setMode(U.LINE_LOOP):re.setMode(U.LINE_STRIP)}else z.isPoints?re.setMode(U.POINTS):z.isSprite&&re.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)re.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))re.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Rt=z._multiDrawStarts,Xi=z._multiDrawCounts,oe=z._multiDrawCount,Ai=St?Q.get(St).bytesPerElement:1,is=Ct.get(G).currentProgram.getUniforms();for(let fi=0;fi<oe;fi++)is.setValue(U,"_gl_DrawID",fi),re.render(Rt[fi]/Ai,Xi[fi])}else if(z.isInstancedMesh)re.renderInstances(ee,ve,z.count);else if(H.isInstancedBufferGeometry){let Rt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Xi=Math.min(H.instanceCount,Rt);re.renderInstances(ee,ve,Xi)}else re.render(ee,ve)};function ce(S,D,H){S.transparent===!0&&S.side===li&&S.forceSinglePass===!1?(S.side=ni,S.needsUpdate=!0,Wr(S,D,H),S.side=_n,S.needsUpdate=!0,Wr(S,D,H),S.side=li):Wr(S,D,H)}this.compile=function(S,D,H=null){H===null&&(H=S),p=Qt.get(H),p.init(D),v.push(p),H.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),S!==H&&S.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let G=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let nt=z.material;if(nt)if(Array.isArray(nt))for(let pt=0;pt<nt.length;pt++){let wt=nt[pt];ce(wt,H,z),G.add(wt)}else ce(nt,H,z),G.add(nt)}),v.pop(),p=null,G},this.compileAsync=function(S,D,H=null){let G=this.compile(S,D,H);return new Promise(z=>{function nt(){if(G.forEach(function(pt){Ct.get(pt).currentProgram.isReady()&&G.delete(pt)}),G.size===0){z(S);return}setTimeout(nt,10)}$t.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ti=null;function Wi(S){Ti&&Ti(S)}function dc(){Cn.stop()}function fc(){Cn.start()}let Cn=new td;Cn.setAnimationLoop(Wi),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(S){Ti=S,Y.setAnimationLoop(S),S===null?Cn.stop():Cn.start()},Y.addEventListener("sessionstart",dc),Y.addEventListener("sessionend",fc),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(D),D=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,D,k),p=Qt.get(S,v.length),p.init(D),v.push(p),kt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$.setFromProjectionMatrix(kt),Tt=this.localClippingEnabled,rt=it.init(this.clippingPlanes,Tt),g=vt.get(S,M.length),g.init(),M.push(g),Y.enabled===!0&&Y.isPresenting===!0){let nt=_.xr.getDepthSensingMesh();nt!==null&&Ca(nt,D,-1/0,_.sortObjects)}Ca(S,D,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(st,ot),jt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,jt&&It.addToRenderList(g,S),this.info.render.frame++,rt===!0&&it.beginShadows();let H=p.state.shadowsArray;_t.render(H,S,D),rt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=g.opaque,z=g.transmissive;if(p.setupLights(),D.isArrayCamera){let nt=D.cameras;if(z.length>0)for(let pt=0,wt=nt.length;pt<wt;pt++){let St=nt[pt];mc(G,z,S,St)}jt&&It.render(S);for(let pt=0,wt=nt.length;pt<wt;pt++){let St=nt[pt];pc(g,S,St,St.viewport)}}else z.length>0&&mc(G,z,S,D),jt&&It.render(S),pc(g,S,D);k!==null&&(R.updateMultisampleRenderTarget(k),R.updateRenderTargetMipmap(k)),S.isScene===!0&&S.onAfterRender(_,S,D),pe.resetDefaultState(),T=-1,w=null,v.pop(),v.length>0?(p=v[v.length-1],rt===!0&&it.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Ca(S,D,H,G){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){G&&Xt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(kt);let pt=K.update(S),wt=S.material;wt.visible&&g.push(S,pt,wt,H,Xt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$.intersectsObject(S))){let pt=K.update(S),wt=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Xt.copy(S.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Xt.copy(pt.boundingSphere.center)),Xt.applyMatrix4(S.matrixWorld).applyMatrix4(kt)),Array.isArray(wt)){let St=pt.groups;for(let Ut=0,Bt=St.length;Ut<Bt;Ut++){let Et=St[Ut],ee=wt[Et.materialIndex];ee&&ee.visible&&g.push(S,pt,ee,H,Xt.z,Et)}}else wt.visible&&g.push(S,pt,wt,H,Xt.z,null)}}let nt=S.children;for(let pt=0,wt=nt.length;pt<wt;pt++)Ca(nt[pt],D,H,G)}function pc(S,D,H,G){let z=S.opaque,nt=S.transmissive,pt=S.transparent;p.setupLightsView(H),rt===!0&&it.setGlobalState(_.clippingPlanes,H),G&&Pt.viewport(I.copy(G)),z.length>0&&Gr(z,D,H),nt.length>0&&Gr(nt,D,H),pt.length>0&&Gr(pt,D,H),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function mc(S,D,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new ki(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?qn:nn,minFilter:Bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let nt=p.state.transmissionRenderTarget[G.id],pt=G.viewport||I;nt.setSize(pt.z,pt.w);let wt=_.getRenderTarget();_.setRenderTarget(nt),_.getClearColor(X),J=_.getClearAlpha(),J<1&&_.setClearColor(16777215,.5),_.clear(),jt&&It.render(H);let St=_.toneMapping;_.toneMapping=vn;let Ut=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),rt===!0&&it.setGlobalState(_.clippingPlanes,G),Gr(S,H,G),R.updateMultisampleRenderTarget(nt),R.updateRenderTargetMipmap(nt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Et=0,ee=D.length;Et<ee;Et++){let me=D[Et],ve=me.object,ai=me.geometry,re=me.material,Rt=me.group;if(re.side===li&&ve.layers.test(G.layers)){let Xi=re.side;re.side=ni,re.needsUpdate=!0,gc(ve,H,G,ai,re,Rt),re.side=Xi,re.needsUpdate=!0,Bt=!0}}Bt===!0&&(R.updateMultisampleRenderTarget(nt),R.updateRenderTargetMipmap(nt))}_.setRenderTarget(wt),_.setClearColor(X,J),Ut!==void 0&&(G.viewport=Ut),_.toneMapping=St}function Gr(S,D,H){let G=D.isScene===!0?D.overrideMaterial:null;for(let z=0,nt=S.length;z<nt;z++){let pt=S[z],wt=pt.object,St=pt.geometry,Ut=G===null?pt.material:G,Bt=pt.group;wt.layers.test(H.layers)&&gc(wt,D,H,St,Ut,Bt)}}function gc(S,D,H,G,z,nt){S.onBeforeRender(_,D,H,G,z,nt),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(_,D,H,G,S,nt),z.transparent===!0&&z.side===li&&z.forceSinglePass===!1?(z.side=ni,z.needsUpdate=!0,_.renderBufferDirect(H,D,G,z,S,nt),z.side=_n,z.needsUpdate=!0,_.renderBufferDirect(H,D,G,z,S,nt),z.side=li):_.renderBufferDirect(H,D,G,z,S,nt),S.onAfterRender(_,D,H,G,z,nt)}function Wr(S,D,H){D.isScene!==!0&&(D=Ae);let G=Ct.get(S),z=p.state.lights,nt=p.state.shadowsArray,pt=z.state.version,wt=At.getParameters(S,z.state,nt,D,H),St=At.getProgramCacheKey(wt),Ut=G.programs;G.environment=S.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(S.isMeshStandardMaterial?N:b).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Ut===void 0&&(S.addEventListener("dispose",Ot),Ut=new Map,G.programs=Ut);let Bt=Ut.get(St);if(Bt!==void 0){if(G.currentProgram===Bt&&G.lightsStateVersion===pt)return xc(S,wt),Bt}else wt.uniforms=At.getUniforms(S),S.onBeforeCompile(wt,_),Bt=At.acquireProgram(wt,St),Ut.set(St,Bt),G.uniforms=wt.uniforms;let Et=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=it.uniform),xc(S,wt),G.needsLights=hf(S),G.lightsStateVersion=pt,G.needsLights&&(Et.ambientLightColor.value=z.state.ambient,Et.lightProbe.value=z.state.probe,Et.directionalLights.value=z.state.directional,Et.directionalLightShadows.value=z.state.directionalShadow,Et.spotLights.value=z.state.spot,Et.spotLightShadows.value=z.state.spotShadow,Et.rectAreaLights.value=z.state.rectArea,Et.ltc_1.value=z.state.rectAreaLTC1,Et.ltc_2.value=z.state.rectAreaLTC2,Et.pointLights.value=z.state.point,Et.pointLightShadows.value=z.state.pointShadow,Et.hemisphereLights.value=z.state.hemi,Et.directionalShadowMap.value=z.state.directionalShadowMap,Et.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Et.spotShadowMap.value=z.state.spotShadowMap,Et.spotLightMatrix.value=z.state.spotLightMatrix,Et.spotLightMap.value=z.state.spotLightMap,Et.pointShadowMap.value=z.state.pointShadowMap,Et.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Bt,G.uniformsList=null,Bt}function yc(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=As.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function xc(S,D){let H=Ct.get(S);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function af(S,D,H,G,z){D.isScene!==!0&&(D=Ae),R.resetTextureUnits();let nt=D.fog,pt=G.isMeshStandardMaterial?D.environment:null,wt=k===null?_.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Os,St=(G.isMeshStandardMaterial?N:b).get(G.envMap||pt),Ut=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Bt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Et=!!H.morphAttributes.position,ee=!!H.morphAttributes.normal,me=!!H.morphAttributes.color,ve=vn;G.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ve=_.toneMapping);let ai=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,re=ai!==void 0?ai.length:0,Rt=Ct.get(G),Xi=p.state.lights;if(rt===!0&&(Tt===!0||S!==w)){let _i=S===w&&G.id===T;it.setState(G,S,_i)}let oe=!1;G.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Xi.state.version||Rt.outputColorSpace!==wt||z.isBatchedMesh&&Rt.batching===!1||!z.isBatchedMesh&&Rt.batching===!0||z.isBatchedMesh&&Rt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Rt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Rt.instancing===!1||!z.isInstancedMesh&&Rt.instancing===!0||z.isSkinnedMesh&&Rt.skinning===!1||!z.isSkinnedMesh&&Rt.skinning===!0||z.isInstancedMesh&&Rt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Rt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Rt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Rt.instancingMorph===!1&&z.morphTexture!==null||Rt.envMap!==St||G.fog===!0&&Rt.fog!==nt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==it.numPlanes||Rt.numIntersection!==it.numIntersection)||Rt.vertexAlphas!==Ut||Rt.vertexTangents!==Bt||Rt.morphTargets!==Et||Rt.morphNormals!==ee||Rt.morphColors!==me||Rt.toneMapping!==ve||Rt.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Rt.__version=G.version);let Ai=Rt.currentProgram;oe===!0&&(Ai=Wr(G,D,z));let is=!1,fi=!1,Qs=!1,_e=Ai.getUniforms(),Oi=Rt.uniforms;if(Pt.useProgram(Ai.program)&&(is=!0,fi=!0,Qs=!0),G.id!==T&&(T=G.id,fi=!0),is||w!==S){Pt.buffers.depth.getReversed()?(ut.copy(S.projectionMatrix),tp(ut),ep(ut),_e.setValue(U,"projectionMatrix",ut)):_e.setValue(U,"projectionMatrix",S.projectionMatrix),_e.setValue(U,"viewMatrix",S.matrixWorldInverse);let ln=_e.map.cameraPosition;ln!==void 0&&ln.setValue(U,Nt.setFromMatrixPosition(S.matrixWorld)),Zt.logarithmicDepthBuffer&&_e.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_e.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),w!==S&&(w=S,fi=!0,Qs=!0)}if(z.isSkinnedMesh){_e.setOptional(U,z,"bindMatrix"),_e.setOptional(U,z,"bindMatrixInverse");let _i=z.skeleton;_i&&(_i.boneTexture===null&&_i.computeBoneTexture(),_e.setValue(U,"boneTexture",_i.boneTexture,R))}z.isBatchedMesh&&(_e.setOptional(U,z,"batchingTexture"),_e.setValue(U,"batchingTexture",z._matricesTexture,R),_e.setOptional(U,z,"batchingIdTexture"),_e.setValue(U,"batchingIdTexture",z._indirectTexture,R),_e.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&_e.setValue(U,"batchingColorTexture",z._colorsTexture,R));let tr=H.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0)&&Lt.update(z,H,Ai),(fi||Rt.receiveShadow!==z.receiveShadow)&&(Rt.receiveShadow=z.receiveShadow,_e.setValue(U,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Oi.envMap.value=St,Oi.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(Oi.envMapIntensity.value=D.environmentIntensity),fi&&(_e.setValue(U,"toneMappingExposure",_.toneMappingExposure),Rt.needsLights&&lf(Oi,Qs),nt&&G.fog===!0&&dt.refreshFogUniforms(Oi,nt),dt.refreshMaterialUniforms(Oi,G,W,j,p.state.transmissionRenderTarget[S.id]),As.upload(U,yc(Rt),Oi,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(As.upload(U,yc(Rt),Oi,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_e.setValue(U,"center",z.center),_e.setValue(U,"modelViewMatrix",z.modelViewMatrix),_e.setValue(U,"normalMatrix",z.normalMatrix),_e.setValue(U,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let _i=G.uniformsGroups;for(let ln=0,hn=_i.length;ln<hn;ln++){let vc=_i[ln];L.update(vc,Ai),L.bind(vc,Ai)}}return Ai}function lf(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function hf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(S,D,H){Ct.get(S.texture).__webglTexture=D,Ct.get(S.depthTexture).__webglTexture=H;let G=Ct.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){let H=Ct.get(S);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,H=0){k=S,C=D,P=H;let G=!0,z=null,nt=!1,pt=!1;if(S){let St=Ct.get(S);if(St.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(St.__webglFramebuffer===void 0)R.setupRenderTarget(S);else if(St.__hasExternalTextures)R.rebindTextures(S,Ct.get(S.texture).__webglTexture,Ct.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Et=S.depthTexture;if(St.__boundDepthTexture!==Et){if(Et!==null&&Ct.has(Et)&&(S.width!==Et.image.width||S.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(S)}}let Ut=S.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(pt=!0);let Bt=Ct.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Bt[D])?z=Bt[D][H]:z=Bt[D],nt=!0):S.samples>0&&R.useMultisampledRTT(S)===!1?z=Ct.get(S).__webglMultisampledFramebuffer:Array.isArray(Bt)?z=Bt[H]:z=Bt,I.copy(S.viewport),V.copy(S.scissor),F=S.scissorTest}else I.copy(bt).multiplyScalar(W).floor(),V.copy(Ft).multiplyScalar(W).floor(),F=ne;if(Pt.bindFramebuffer(U.FRAMEBUFFER,z)&&G&&Pt.drawBuffers(S,z),Pt.viewport(I),Pt.scissor(V),Pt.setScissorTest(F),nt){let St=Ct.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,St.__webglTexture,H)}else if(pt){let St=Ct.get(S.texture),Ut=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.__webglTexture,H||0,Ut)}T=-1},this.readRenderTargetPixels=function(S,D,H,G,z,nt,pt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ct.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pt!==void 0&&(wt=wt[pt]),wt){Pt.bindFramebuffer(U.FRAMEBUFFER,wt);try{let St=S.texture,Ut=St.format,Bt=St.type;if(!Zt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-G&&H>=0&&H<=S.height-z&&U.readPixels(D,H,G,z,Vt.convert(Ut),Vt.convert(Bt),nt)}finally{let St=k!==null?Ct.get(k).__webglFramebuffer:null;Pt.bindFramebuffer(U.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(S,D,H,G,z,nt,pt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ct.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pt!==void 0&&(wt=wt[pt]),wt){let St=S.texture,Ut=St.format,Bt=St.type;if(!Zt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-G&&H>=0&&H<=S.height-z){Pt.bindFramebuffer(U.FRAMEBUFFER,wt);let Et=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Et),U.bufferData(U.PIXEL_PACK_BUFFER,nt.byteLength,U.STREAM_READ),U.readPixels(D,H,G,z,Vt.convert(Ut),Vt.convert(Bt),0);let ee=k!==null?Ct.get(k).__webglFramebuffer:null;Pt.bindFramebuffer(U.FRAMEBUFFER,ee);let me=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Qf(U,me,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Et),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,nt),U.deleteBuffer(Et),U.deleteSync(me),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,H=0){S.isTexture!==!0&&(dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);let G=Math.pow(2,-H),z=Math.floor(S.image.width*G),nt=Math.floor(S.image.height*G),pt=D!==null?D.x:0,wt=D!==null?D.y:0;R.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,pt,wt,z,nt),Pt.unbindTexture()},this.copyTextureToTexture=function(S,D,H=null,G=null,z=0){S.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],D=arguments[2],z=arguments[3]||0,H=null);let nt,pt,wt,St,Ut,Bt,Et,ee,me,ve=S.isCompressedTexture?S.mipmaps[z]:S.image;H!==null?(nt=H.max.x-H.min.x,pt=H.max.y-H.min.y,wt=H.isBox3?H.max.z-H.min.z:1,St=H.min.x,Ut=H.min.y,Bt=H.isBox3?H.min.z:0):(nt=ve.width,pt=ve.height,wt=ve.depth||1,St=0,Ut=0,Bt=0),G!==null?(Et=G.x,ee=G.y,me=G.z):(Et=0,ee=0,me=0);let ai=Vt.convert(D.format),re=Vt.convert(D.type),Rt;D.isData3DTexture?(R.setTexture3D(D,0),Rt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(R.setTexture2DArray(D,0),Rt=U.TEXTURE_2D_ARRAY):(R.setTexture2D(D,0),Rt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let Xi=U.getParameter(U.UNPACK_ROW_LENGTH),oe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ai=U.getParameter(U.UNPACK_SKIP_PIXELS),is=U.getParameter(U.UNPACK_SKIP_ROWS),fi=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ve.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ve.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,St),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Bt);let Qs=S.isDataArrayTexture||S.isData3DTexture,_e=D.isDataArrayTexture||D.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Oi=Ct.get(S),tr=Ct.get(D),_i=Ct.get(Oi.__renderTarget),ln=Ct.get(tr.__renderTarget);Pt.bindFramebuffer(U.READ_FRAMEBUFFER,_i.__webglFramebuffer),Pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let hn=0;hn<wt;hn++)Qs&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(S).__webglTexture,z,Bt+hn),S.isDepthTexture?(_e&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(D).__webglTexture,z,me+hn),U.blitFramebuffer(St,Ut,nt,pt,Et,ee,nt,pt,U.DEPTH_BUFFER_BIT,U.NEAREST)):_e?U.copyTexSubImage3D(Rt,z,Et,ee,me+hn,St,Ut,nt,pt):U.copyTexSubImage2D(Rt,z,Et,ee,me+hn,St,Ut,nt,pt);Pt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else _e?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Rt,z,Et,ee,me,nt,pt,wt,ai,re,ve.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Rt,z,Et,ee,me,nt,pt,wt,ai,ve.data):U.texSubImage3D(Rt,z,Et,ee,me,nt,pt,wt,ai,re,ve):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,Et,ee,nt,pt,ai,re,ve.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,Et,ee,ve.width,ve.height,ai,ve.data):U.texSubImage2D(U.TEXTURE_2D,z,Et,ee,nt,pt,ai,re,ve);U.pixelStorei(U.UNPACK_ROW_LENGTH,Xi),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,oe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ai),U.pixelStorei(U.UNPACK_SKIP_ROWS,is),U.pixelStorei(U.UNPACK_SKIP_IMAGES,fi),z===0&&D.generateMipmaps&&U.generateMipmap(Rt),Pt.unbindTexture()},this.copyTextureToTexture3D=function(S,D,H=null,G=null,z=0){return S.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,S=arguments[2],D=arguments[3],z=arguments[4]||0),dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,D,H,G,z)},this.initRenderTarget=function(S){Ct.get(S).__webglFramebuffer===void 0&&R.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?R.setTextureCube(S,0):S.isData3DTexture?R.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?R.setTexture2DArray(S,0):R.setTexture2D(S,0),Pt.unbindTexture()},this.resetState=function(){C=0,P=0,k=null,Pt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Go=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new mt(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zs=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},yh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ql,this.updateRanges=[],this.version=0,this.uuid=tn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},si=new x,Wo=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)si.fromBufferAttribute(this,e),si.applyMatrix4(t),this.setXYZ(e,si.x,si.y,si.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)si.fromBufferAttribute(this,e),si.applyNormalMatrix(t),this.setXYZ(e,si.x,si.y,si.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)si.fromBufferAttribute(this,e),si.transformDirection(t),this.setXYZ(e,si.x,si.y,si.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=de(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Hi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Hi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Hi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Hi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array),n=de(n,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Mr=class extends Gi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ys,rr=new x,xs=new x,vs=new x,_s=new ct,or=new ct,rd=new qt,fo=new x,ar=new x,po=new x,vu=new ct,ol=new ct,_u=new ct,Xo=class extends Ue{constructor(t=new Mr){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new yh(e,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new Wo(i,3,0,!1)),ys.setAttribute("uv",new Wo(i,2,3,!1))}this.geometry=ys,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),rd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-vs.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let o=this.center;mo(fo.set(-.5,-.5,0),vs,o,xs,n,r),mo(ar.set(.5,-.5,0),vs,o,xs,n,r),mo(po.set(.5,.5,0),vs,o,xs,n,r),vu.set(0,0),ol.set(1,0),_u.set(1,1);let a=t.ray.intersectTriangle(fo,ar,po,!1,rr);if(a===null&&(mo(ar.set(-.5,.5,0),vs,o,xs,n,r),ol.set(0,1),a=t.ray.intersectTriangle(fo,po,ar,!1,rr),a===null))return;let l=t.ray.origin.distanceTo(rr);l<t.near||l>t.far||e.push({distance:l,point:rr.clone(),uv:yn.getInterpolation(rr,fo,ar,po,vu,ol,_u,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function mo(s,t,e,i,n,r){_s.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(or.x=r*_s.x-n*_s.y,or.y=n*_s.x+r*_s.y):or.copy(_s),s.copy(t),s.x+=or.x,s.y+=or.y,s.applyMatrix4(rd)}var br=class extends hi{constructor(t=null,e=1,i=1,n,r,o,a,l,h=Le,c=Le,u,d){super(null,o,a,l,h,c,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qo=class extends Ce{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ms=new qt,Mu=new qt,go=[],bu=new sn,Zy=new qt,lr=new Dt,hr=new rn,bn=class extends Dt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Zy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new sn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ms),bu.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(bu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new rn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ms),hr.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(hr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(i),t.ray.intersectsSphere(hr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Ms),Mu.multiplyMatrices(i,Ms),lr.matrixWorld=Mu,lr.raycast(t,go);for(let o=0,a=go.length;o<a;o++){let l=go[o];l.instanceId=r,l.object=this,e.push(l)}go.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new br(new Float32Array(n*this.count),n,this.count,Wh,Vi));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<i.length;h++)o+=i[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var wr=class extends Gi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Yo=new x,$o=new x,wu=new qt,cr=new vr,yo=new rn,al=new x,Su=new x,xh=class extends Ue{constructor(t=new ge,e=new wr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Yo.fromBufferAttribute(e,n-1),$o.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Yo.distanceTo($o);t.setAttribute("lineDistance",new se(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(n),yo.radius+=r,t.ray.intersectsSphere(yo)===!1)return;wu.copy(n).invert(),cr.copy(t.ray).applyMatrix4(wu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=h){let p=c.getX(y),M=c.getX(y+1),v=xo(this,t,cr,l,p,M);v&&e.push(v)}if(this.isLineLoop){let y=c.getX(m-1),g=c.getX(f),p=xo(this,t,cr,l,y,g);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=h){let p=xo(this,t,cr,l,y,y+1);p&&e.push(p)}if(this.isLineLoop){let y=xo(this,t,cr,l,m-1,f);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xo(s,t,e,i,n,r){let o=s.geometry.attributes.position;if(Yo.fromBufferAttribute(o,n),$o.fromBufferAttribute(o,r),e.distanceSqToSegment(Yo,$o,al,Su)>i)return;al.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(al);if(!(l<t.near||l>t.far))return{distance:l,point:Su.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}var Eu=new x,Tu=new x,Us=class extends xh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)Eu.fromBufferAttribute(e,n),Tu.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Eu.distanceTo(Tu);t.setAttribute("lineDistance",new se(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Sr=class extends Gi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Au=new qt,vh=new vr,vo=new rn,_o=new x,Ns=class extends Ue{constructor(t=new ge,e=new Sr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(n),vo.radius+=r,t.ray.intersectsSphere(vo)===!1)return;Au.copy(n).invert(),vh.copy(t.ray).applyMatrix4(Au);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,y=f;m<y;m++){let g=h.getX(m);_o.fromBufferAttribute(u,g),Ru(_o,g,l,n,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,y=f;m<y;m++)_o.fromBufferAttribute(u,m),Ru(_o,m,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ru(s,t,e,i,n,r,o){let a=vh.distanceSqToPoint(s);if(a<e){let l=new x;vh.closestPointToPoint(s,l),l.applyMatrix4(i);let h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Vn=class extends hi{constructor(t,e,i,n,r,o,a,l,h){super(t,e,i,n,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},bi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),h=i[n]-o,h<0)a=n+1;else if(h>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let c=i[n],d=i[n+1]-c,f=(o-c)/d;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new ct:new x);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new x,n=[],r=[],o=[],a=new x,l=new qt;for(let f=0;f<=t;f++){let m=f/t;n[f]=this.getTangentAt(m,new x)}r[0]=new x,o[0]=new x;let h=Number.MAX_VALUE,c=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);c<=h&&(h=c,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),d<=h&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ii(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(ii(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(n[m],f*m)),o[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Er=class extends bi{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*c-f*u+this.aX,h=d*u+f*c+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},_h=class extends Er{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zh(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){n(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,u){let d=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+u)+(l-a)/u;d*=c,f*=c,n(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+i*a}}}var Mo=new x,ll=new Zh,hl=new Zh,cl=new Zh,Mh=class extends bi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new x){let i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=n[(a-1)%r]:(Mo.subVectors(n[0],n[1]).add(n[0]),h=Mo);let u=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?c=n[(a+2)%r]:(Mo.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=Mo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(h.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(c),f);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),ll.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,m,y,g),hl.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,m,y,g),cl.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,m,y,g)}else this.curveType==="catmullrom"&&(ll.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),hl.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),cl.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return i.set(ll.calc(l),hl.calc(l),cl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new x().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Cu(s,t,e,i,n){let r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function Jy(s,t){let e=1-s;return e*e*t}function Ky(s,t){return 2*(1-s)*s*t}function jy(s,t){return s*s*t}function mr(s,t,e,i){return Jy(s,t)+Ky(s,e)+jy(s,i)}function Qy(s,t){let e=1-s;return e*e*e*t}function tx(s,t){let e=1-s;return 3*e*e*s*t}function ex(s,t){return 3*(1-s)*s*s*t}function ix(s,t){return s*s*s*t}function gr(s,t,e,i,n){return Qy(s,t)+tx(s,e)+ex(s,i)+ix(s,n)}var Zo=class extends bi{constructor(t=new ct,e=new ct,i=new ct,n=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new ct){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(t,n.x,r.x,o.x,a.x),gr(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bh=class extends bi{constructor(t=new x,e=new x,i=new x,n=new x){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new x){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(t,n.x,r.x,o.x,a.x),gr(t,n.y,r.y,o.y,a.y),gr(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jo=class extends bi{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wh=class extends bi{constructor(t=new x,e=new x){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new x){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new x){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ko=class extends bi{constructor(t=new ct,e=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ct){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(mr(t,n.x,r.x,o.x),mr(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sh=class extends bi{constructor(t=new x,e=new x,i=new x){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new x){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(mr(t,n.x,r.x,o.x),mr(t,n.y,r.y,o.y),mr(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jo=class extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],h=n[o],c=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(Cu(a,l.x,h.x,c.x,u.x),Cu(a,l.y,h.y,c.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new ct().fromArray(n))}return this}},Pu=Object.freeze({__proto__:null,ArcCurve:_h,CatmullRomCurve3:Mh,CubicBezierCurve:Zo,CubicBezierCurve3:bh,EllipseCurve:Er,LineCurve:Jo,LineCurve3:wh,QuadraticBezierCurve:Ko,QuadraticBezierCurve3:Sh,SplineCurve:jo}),Eh=class extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pu[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let o=n[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let o=r[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let c=l[h];i&&i.equals(c)||(e.push(c),i=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Pu[n.type]().fromJSON(n))}return this}},Qo=class extends Eh{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Jo(this.currentPoint.clone(),new ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new Ko(this.currentPoint.clone(),new ct(t,e),new ct(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,o){let a=new Zo(this.currentPoint.clone(),new ct(t,e),new ct(i,n),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new jo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,r,o),this}absarc(t,e,i,n,r,o){return this.absellipse(t,e,i,i,n,r,o),this}ellipse(t,e,i,n,r,o,a,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,i,n,r,o,a,l),this}absellipse(t,e,i,n,r,o,a,l){let h=new Er(t,e,i,n,r,o,a,l);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Tr=class extends Qo{constructor(t){super(t),this.uuid=tn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Qo().fromJSON(n))}return this}},nx={triangulate:function(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=od(s,0,n,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h,c,u,d,f;if(i&&(r=lx(s,t,r,e)),s.length>80*e){a=h=s[0],l=c=s[1];for(let m=e;m<n;m+=e)u=s[m],d=s[m+1],u<a&&(a=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);f=Math.max(h-a,c-l),f=f!==0?32767/f:0}return Ar(r,o,e,a,l,f,0),o}};function od(s,t,e,i,n){let r,o;if(n===vx(s,t,e,i)>0)for(r=t;r<e;r+=i)o=Iu(r,s[r],s[r+1],o);else for(r=e-i;r>=t;r-=i)o=Iu(r,s[r],s[r+1],o);return o&&ca(o,o.next)&&(Cr(o),o=o.next),o}function Gn(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(ca(e,e.next)||Re(e.prev,e,e.next)===0)){if(Cr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ar(s,t,e,i,n,r,o){if(!s)return;!o&&r&&fx(s,i,n,r);let a=s,l,h;for(;s.prev!==s.next;){if(l=s.prev,h=s.next,r?rx(s,i,n,r):sx(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(h.i/e|0),Cr(s),s=h.next,a=h.next;continue}if(s=h,s===a){o?o===1?(s=ox(Gn(s),t,e),Ar(s,t,e,i,n,r,2)):o===2&&ax(s,t,e,i,n,r):Ar(Gn(s),t,e,i,n,r,1);break}}}function sx(s){let t=s.prev,e=s,i=s.next;if(Re(t,e,i)>=0)return!1;let n=t.x,r=e.x,o=i.x,a=t.y,l=e.y,h=i.y,c=n<r?n<o?n:o:r<o?r:o,u=a<l?a<h?a:h:l<h?l:h,d=n>r?n>o?n:o:r>o?r:o,f=a>l?a>h?a:h:l>h?l:h,m=i.next;for(;m!==t;){if(m.x>=c&&m.x<=d&&m.y>=u&&m.y<=f&&ws(n,a,r,l,o,h,m.x,m.y)&&Re(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function rx(s,t,e,i){let n=s.prev,r=s,o=s.next;if(Re(n,r,o)>=0)return!1;let a=n.x,l=r.x,h=o.x,c=n.y,u=r.y,d=o.y,f=a<l?a<h?a:h:l<h?l:h,m=c<u?c<d?c:d:u<d?u:d,y=a>l?a>h?a:h:l>h?l:h,g=c>u?c>d?c:d:u>d?u:d,p=Th(f,m,t,e,i),M=Th(y,g,t,e,i),v=s.prevZ,_=s.nextZ;for(;v&&v.z>=p&&_&&_.z<=M;){if(v.x>=f&&v.x<=y&&v.y>=m&&v.y<=g&&v!==n&&v!==o&&ws(a,c,l,u,h,d,v.x,v.y)&&Re(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==n&&_!==o&&ws(a,c,l,u,h,d,_.x,_.y)&&Re(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=y&&v.y>=m&&v.y<=g&&v!==n&&v!==o&&ws(a,c,l,u,h,d,v.x,v.y)&&Re(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==n&&_!==o&&ws(a,c,l,u,h,d,_.x,_.y)&&Re(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ox(s,t,e){let i=s;do{let n=i.prev,r=i.next.next;!ca(n,r)&&ad(n,i,i.next,r)&&Rr(n,r)&&Rr(r,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Cr(i),Cr(i.next),i=s=r),i=i.next}while(i!==s);return Gn(i)}function ax(s,t,e,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gx(o,a)){let l=ld(o,a);o=Gn(o,o.next),l=Gn(l,l.next),Ar(o,t,e,i,n,r,0),Ar(l,t,e,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function lx(s,t,e,i){let n=[],r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:s.length,h=od(s,a,l,i,!1),h===h.next&&(h.steiner=!0),n.push(mx(h));for(n.sort(hx),r=0;r<n.length;r++)e=cx(n[r],e);return e}function hx(s,t){return s.x-t.x}function cx(s,t){let e=ux(s,t);if(!e)return t;let i=ld(e,s);return Gn(i,i.next),Gn(e,e.next)}function ux(s,t){let e=t,i=-1/0,n,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,n=e.x<e.next.x?e:e.next,d===r))return n}e=e.next}while(e!==t);if(!n)return null;let a=n,l=n.x,h=n.y,c=1/0,u;e=n;do r>=e.x&&e.x>=l&&r!==e.x&&ws(o<h?r:i,o,l,h,o<h?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Rr(e,s)&&(u<c||u===c&&(e.x>n.x||e.x===n.x&&dx(n,e)))&&(n=e,c=u)),e=e.next;while(e!==a);return n}function dx(s,t){return Re(s.prev,s,t.prev)<0&&Re(t.next,s,s.next)<0}function fx(s,t,e,i){let n=s;do n.z===0&&(n.z=Th(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,px(n)}function px(s){let t,e,i,n,r,o,a,l,h=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<h&&(a++,i=i.nextZ,!!i);t++);for(l=h;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,a--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;e=i}r.nextZ=null,h*=2}while(o>1);return s}function Th(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function mx(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ws(s,t,e,i,n,r,o,a){return(n-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(n-o)*(i-a)}function gx(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!yx(s,t)&&(Rr(s,t)&&Rr(t,s)&&xx(s,t)&&(Re(s.prev,s,t.prev)||Re(s,t.prev,t))||ca(s,t)&&Re(s.prev,s,s.next)>0&&Re(t.prev,t,t.next)>0)}function Re(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ca(s,t){return s.x===t.x&&s.y===t.y}function ad(s,t,e,i){let n=wo(Re(s,t,e)),r=wo(Re(s,t,i)),o=wo(Re(e,i,s)),a=wo(Re(e,i,t));return!!(n!==r&&o!==a||n===0&&bo(s,e,t)||r===0&&bo(s,i,t)||o===0&&bo(e,s,i)||a===0&&bo(e,t,i))}function bo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function wo(s){return s>0?1:s<0?-1:0}function yx(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&ad(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Rr(s,t){return Re(s.prev,s,s.next)<0?Re(s,t,s.next)>=0&&Re(s,s.prev,t)>=0:Re(s,t,s.prev)<0||Re(s,s.next,t)<0}function xx(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function ld(s,t){let e=new Ah(s.i,s.x,s.y),i=new Ah(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Iu(s,t,e,i){let n=new Ah(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Cr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ah(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vx(s,t,e,i){let n=0;for(let r=t,o=e-i;r<e;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}var yr=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];ku(t),Lu(i,t);let o=t.length;e.forEach(ku);for(let l=0;l<e.length;l++)n.push(o),o+=e[l].length,Lu(i,e[l]);let a=nx.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ku(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Lu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var ta=class s extends ge{constructor(t=new Tr([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],n=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)h(t);else for(let c=0;c<t.length;c++)h(t[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new se(n,3)),this.setAttribute("normal",new se(r,3)),this.setAttribute("uv",new se(o,2));function h(c){let u=n.length/3,d=c.extractPoints(e),f=d.shape,m=d.holes;yr.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let M=m[g];yr.isClockWise(M)===!0&&(m[g]=M.reverse())}let y=yr.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let M=m[g];f=f.concat(M)}for(let g=0,p=f.length;g<p;g++){let M=f[g];n.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,p=y.length;g<p;g++){let M=y[g],v=M[0]+u,_=M[1]+u,A=M[2]+u;i.push(v,_,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return _x(e,t)}static fromJSON(t,e){let i=[];for(let n=0,r=t.shapes.length;n<r;n++){let o=e[t.shapes[n]];i.push(o)}return new s(i,t.curveSegments)}};function _x(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){let n=s[e];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return t}var ea=class s extends ge{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,c=[],u=new x,d=new x,f=[],m=[],y=[],g=[];for(let p=0;p<=i;p++){let M=[],v=p/i,_=0;p===0&&o===0?_=.5/e:p===i&&l===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){let C=A/e;u.x=-t*Math.cos(n+C*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(n+C*r)*Math.sin(o+v*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(C+_,1-v),M.push(h++)}c.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){let v=c[p][M+1],_=c[p][M],A=c[p+1][M],C=c[p+1][M+1];(p!==0||o>0)&&f.push(v,_,C),(p!==i-1||l<Math.PI)&&f.push(_,A,C)}this.setIndex(f),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(y,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var we=class extends Gi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zu,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function So(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Mx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Fs=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];t:{e:{let o;i:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break e}o=e.length;break i}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break e}o=i,i=0;break i}break t}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rh=class extends Fs{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ec:r=t,a=2*e-i;break;case Tc:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:o=t,l=2*i-e;break;case Tc:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let h=(i-e)*.5,c=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-e)/(n-e),y=m*m,g=y*m,p=-d*g+2*d*y-d*m,M=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*y+.5*m,_=f*g-f*y;for(let A=0;A!==a;++A)r[A]=p*o[c+A]+M*o[h+A]+v*o[l+A]+_*o[u+A];return r}},Ch=class extends Fs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=(i-e)/(n-e),u=1-c;for(let d=0;d!==a;++d)r[d]=o[h+d]*u+o[l+d]*c;return r}},Ph=class extends Fs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Li=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=So(e,this.TimeBufferType),this.values=So(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:So(t.times,Array),values:So(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ph(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ch(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Rh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Po:e=this.InterpolantFactoryMethodDiscrete;break;case jl:e=this.InterpolantFactoryMethodLinear;break;case Ia:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Po;case this.InterpolantFactoryMethodLinear:return jl;case this.InterpolantFactoryMethodSmooth:return Ia}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&Mx(n))for(let a=0,l=n.length;a!==l;++a){let h=n[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ia,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],c=t[a+1];if(h!==c&&(a!==1||h!==t[0]))if(n)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){let y=e[u+m];if(y!==e[d+m]||y!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Li.prototype.TimeBufferType=Float32Array;Li.prototype.ValueBufferType=Float32Array;Li.prototype.DefaultInterpolation=jl;var Wn=class extends Li{constructor(t,e,i){super(t,e,i)}};Wn.prototype.ValueTypeName="bool";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=Po;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ih=class extends Li{};Ih.prototype.ValueTypeName="color";var kh=class extends Li{};kh.prototype.ValueTypeName="number";var Lh=class extends Fs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),h=t*a;for(let c=h+a;h!==c;h+=4)Ze.slerpFlat(r,0,o,h-a,o,h,l);return r}},ia=class extends Li{InterpolantFactoryMethodLinear(t){return new Lh(this.times,this.values,this.getValueSize(),t)}};ia.prototype.ValueTypeName="quaternion";ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Xn=class extends Li{constructor(t,e,i){super(t,e,i)}};Xn.prototype.ValueTypeName="string";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=Po;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Dh=class extends Li{};Dh.prototype.ValueTypeName="vector";var zh=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){a++,r===!1&&n.onStart!==void 0&&n.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,n.onProgress!==void 0&&n.onProgress(c,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){let f=h[u],m=h[u+1];if(f.global&&(f.lastIndex=0),f.test(c))return m}return null}}},bx=new zh,Uh=class{constructor(t){this.manager=t!==void 0?t:bx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Uh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pr=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},na=class extends Pr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ul=new qt,Du=new x,zu=new x,sa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Du.setFromMatrixPosition(t.matrixWorld),e.position.copy(Du),zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zu),e.updateMatrixWorld(),ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Uu=new qt,ur=new x,dl=new x,Nh=class extends sa{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new x(1,0,0),new x(-1,0,0),new x(0,0,1),new x(0,0,-1),new x(0,1,0),new x(0,-1,0)],this._cubeUps=[new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,0,1),new x(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ur.setFromMatrixPosition(t.matrixWorld),i.position.copy(ur),dl.copy(i.position),dl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(dl),i.updateMatrixWorld(),n.makeTranslation(-ur.x,-ur.y,-ur.z),Uu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu)}},ra=class extends Pr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Nh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Fh=class extends sa{constructor(){super(new Ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oa=class extends Pr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new Fh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Jh="\\[\\]\\.:\\/",wx=new RegExp("["+Jh+"]","g"),Kh="[^"+Jh+"]",Sx="[^"+Jh.replace("\\.","")+"]",Ex=/((?:WC+[\/:])*)/.source.replace("WC",Kh),Tx=/(WCOD+)?/.source.replace("WCOD",Sx),Ax=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kh),Rx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kh),Cx=new RegExp("^"+Ex+Tx+Ax+Rx+"$"),Px=["material","materials","bones","map"],Oh=class{constructor(t,e,i){let n=i||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},be=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wx,"")}static parseTrackName(t){let e=Cx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Px.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[n];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Oh;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Kt=(s,t,e)=>s<t?t:s>e?e:s,le=(s,t,e)=>s+(t-s)*e;function Di(s){let t=s>>>0,e=()=>{t|=0,t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return e.int=(i,n)=>i+Math.floor(e()*(n-i+1)),e.pick=i=>i[Math.floor(e()*i.length)],e}function Se(s,t,e=0){let i=s*374761393+t*668265263+e*2147483647|0;return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function hd(s){let t=(i,n)=>{let r=Math.floor(i),o=Math.floor(n),a=i-r,l=n-o,h=a*a*(3-2*a),c=l*l*(3-2*l),u=Se(r,o,s),d=Se(r+1,o,s),f=Se(r,o+1,s),m=Se(r+1,o+1,s);return u+(d-u)*h+(f-u)*c+(u-d-f+m)*h*c},e=(i,n,r=4)=>{let o=0,a=.5,l=1,h=0;for(let c=0;c<r;c++)o+=t(i*l,n*l)*a,h+=a,a*=.5,l*=2.03;return o/h};return e.fbm=e,e}var q=.25,Ne=16,ci=[],cd=1,E={};function zt(s,t,e={}){let i=new mt(t);E[s]=cd,ci[cd++]={name:s,r:i.r,g:i.g,b:i.b,jit:e.jit??.06,burn:e.burn||0,solid:e.solid??!0,hard:e.hard??1,glow:e.glow||0,stripe:e.stripe||0}}zt("plank","#8a5a34",{burn:1,stripe:1});zt("plankD","#6a4226",{burn:1,stripe:1});zt("deck","#b58c5a",{burn:1,stripe:2,jit:.05});zt("deckD","#9a7446",{burn:1,stripe:2});zt("tar","#2e2018",{burn:.5});zt("trim","#c9a03a",{burn:.2,jit:.04});zt("red","#8e2a22",{burn:1});zt("mast","#5e3c22",{burn:.6,hard:2});zt("rope","#a08860",{burn:1});zt("iron","#2a2a30",{hard:4,jit:.04});zt("brass","#b8902e",{hard:3,jit:.03});zt("glass","#ffd27a",{glow:1,jit:.02});zt("ghostglass","#66ffc0",{glow:1,jit:.02});zt("ladder","#7a5232",{burn:1,solid:!1});zt("sail","#efe2bf",{burn:1,jit:.03});zt("bark","#7c5c3a",{burn:.7});zt("barkD","#5e4430",{burn:.7});zt("leaf","#3e8c34",{burn:1,jit:.1});zt("leafD","#2c6a28",{burn:1,jit:.1});zt("rock","#8a868a",{hard:6,jit:.08});zt("rockD","#6a666c",{hard:6,jit:.08});zt("moss","#5a7a3e",{hard:4});zt("thatch","#c8a24e",{burn:1,jit:.1});zt("wall","#a88a5e",{burn:1});zt("gold","#f0c440",{hard:3,jit:.1,glow:.25});zt("powder","#4a3a2a",{burn:3});zt("bone","#e6dcc4",{hard:1});zt("ghostwood","#3e4c46",{burn:.3});zt("ghostwoodD","#2c3834",{burn:.3});zt("ghosttrim","#3ad890",{glow:.6});zt("char","#241a14",{burn:0});zt("cloth","#ece4d4",{burn:1});zt("blacksail","#2c2a2e",{burn:1,jit:.04});zt("skin","#d8a678",{});zt("dirt","#7a5a36",{hard:1});zt("blue","#2e5c9a",{burn:1});zt("green","#3a7a3e",{burn:1});zt("purple","#6e3a86",{burn:1});zt("coat","#5a1a1a",{burn:1});zt("flower","#e8483a",{burn:1});zt("flowerY","#f0c840",{burn:1});zt("shell","#f2e6da",{});zt("crystal","#7ae8ff",{glow:1,jit:.05});zt("copper","#a8683a",{hard:2,jit:.07});zt("verdigris","#5a9a7a",{hard:2,jit:.08});var Ix=[{d:[1,0,0],c:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],s:.82},{d:[-1,0,0],c:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],s:.72},{d:[0,1,0],c:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],s:1},{d:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],s:.5},{d:[0,0,1],c:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],s:.9},{d:[0,0,-1],c:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],s:.66}],zi=new we({vertexColors:!0}),jh=new on({vertexColors:!0}),ye=class{constructor(t,e,i,n=[0,0,0]){this.sx=t,this.sy=e,this.sz=i,this.d=new Uint8Array(t*e*i),this.origin=n,this.group=new ae,this.chunks=new Map,this.dirty=new Set,this.cx=Math.ceil(t/Ne),this.cy=Math.ceil(e/Ne),this.cz=Math.ceil(i/Ne),this.seed=Math.random()*1e3|0,this.count=0}idx(t,e,i){return(e*this.sz+i)*this.sx+t}in(t,e,i){return t>=0&&e>=0&&i>=0&&t<this.sx&&e<this.sy&&i<this.sz}get(t,e,i){return this.in(t,e,i)?this.d[this.idx(t,e,i)]:0}solid(t,e,i){let n=this.get(t,e,i);return n&&ci[n].solid}set(t,e,i,n){if(t=Math.round(t),e=Math.round(e),i=Math.round(i),!this.in(t,e,i))return;let r=this.idx(t,e,i);this.d[r]!==n&&(this.d[r]&&!n?this.count--:!this.d[r]&&n&&this.count++,this.d[r]=n,this.log&&this.log.set(r,n),this.markDirty(t,e,i))}markDirty(t,e,i){let n=Math.floor(t/Ne),r=Math.floor(e/Ne),o=Math.floor(i/Ne);this.dirty.add(n+","+r+","+o),t%Ne===0&&n>0&&this.dirty.add(n-1+","+r+","+o),t%Ne===Ne-1&&n<this.cx-1&&this.dirty.add(n+1+","+r+","+o),e%Ne===0&&r>0&&this.dirty.add(n+","+(r-1)+","+o),e%Ne===Ne-1&&r<this.cy-1&&this.dirty.add(n+","+(r+1)+","+o),i%Ne===0&&o>0&&this.dirty.add(n+","+r+","+(o-1)),i%Ne===Ne-1&&o<this.cz-1&&this.dirty.add(n+","+r+","+(o+1))}setIdx(t,e){let i=t%this.sx,n=Math.floor(t/this.sx)%this.sz,r=Math.floor(t/(this.sx*this.sz));this.set(i,r,n,e)}box(t,e,i,n,r,o,a){for(let l=e;l<=r;l++)for(let h=i;h<=o;h++)for(let c=t;c<=n;c++)this.set(c,l,h,typeof a=="function"?a(c,l,h):a)}toVox(t){return[(t.x-this.origin[0])/q,(t.y-this.origin[1])/q,(t.z-this.origin[2])/q]}toLocal(t,e,i,n=new x){return n.set(this.origin[0]+(t+.5)*q,this.origin[1]+(e+.5)*q,this.origin[2]+(i+.5)*q)}solidAt(t,e,i){return this.solid(Math.floor((t-this.origin[0])/q),Math.floor((e-this.origin[1])/q),Math.floor((i-this.origin[2])/q))}matAt(t,e,i){return this.get(Math.floor((t-this.origin[0])/q),Math.floor((e-this.origin[1])/q),Math.floor((i-this.origin[2])/q))}buildAll(){for(let t=0;t<this.cx;t++)for(let e=0;e<this.cy;e++)for(let i=0;i<this.cz;i++)this.dirty.add(t+","+e+","+i);this.flush(9999)}flush(t=6){let e=0;for(let i of this.dirty){if(e++>=t)break;this.dirty.delete(i);let[n,r,o]=i.split(",").map(Number);this.buildChunk(n,r,o,i)}}buildChunk(t,e,i,n){let r=this.chunks.get(n);r&&(this.group.remove(r.mesh),r.mesh.geometry&&r.mesh.geometry.dispose(),r.glow&&(this.group.remove(r.glow),r.glow.geometry.dispose()),this.chunks.delete(n));let o=[],a=[],l=[],h=[],c=[],u=[],d=t*Ne,f=e*Ne,m=i*Ne,y=this.origin;for(let p=f;p<Math.min(this.sy,f+Ne);p++)for(let M=m;M<Math.min(this.sz,m+Ne);M++)for(let v=d;v<Math.min(this.sx,d+Ne);v++){let _=this.d[this.idx(v,p,M)];if(!_)continue;let A=ci[_],C=A.glow>=.9,P=1+(Se(v,p*7+M,this.seed)-.5)*2*A.jit;A.stripe===1&&v%6===0&&(P*=.86),A.stripe===2&&M%3===0&&(P*=.88),A.stripe===2&&v%12===M%2*6&&(P*=.9);for(let k of Ix){let T=v+k.d[0],w=p+k.d[1],I=M+k.d[2],V=this.get(T,w,I);if(V&&(ci[V].solid||!A.solid))continue;let F=C?h:o,X=C?c:a,J=C?u:l,B=[];for(let ot of k.c){let bt=ot[0]?1:-1,Ft=ot[1]?1:-1,ne=ot[2]?1:-1,$=0;k.d[0]?$=(this.solid(T,p+(ot[1]?1:-1),M)?1:0)+(this.solid(T,p,M+(ot[2]?1:-1))?1:0)+(this.solid(T,p+Ft,M+ne)?1:0):k.d[1]?$=(this.solid(v+bt,w,M)?1:0)+(this.solid(v,w,M+ne)?1:0)+(this.solid(v+bt,w,M+ne)?1:0):$=(this.solid(v+bt,p,I)?1:0)+(this.solid(v,p+Ft,I)?1:0)+(this.solid(v+bt,p+Ft,I)?1:0),B.push(1-$*.13)}let j=(C?1:k.s)*P,W=k.c.map(ot=>[y[0]+(v+ot[0])*q,y[1]+(p+ot[1])*q,y[2]+(M+ot[2])*q]),st=B[0]+B[2]>B[1]+B[3]?[0,1,2,0,2,3]:[1,2,3,1,3,0];for(let ot of st){F.push(W[ot][0],W[ot][1],W[ot][2]),X.push(k.d[0],k.d[1],k.d[2]);let bt=j*B[ot];J.push(Kt(A.r*bt,0,1),Kt(A.g*bt,0,1),Kt(A.b*bt,0,1))}}}let g={};if(o.length){let p=new ge;p.setAttribute("position",new se(o,3)),p.setAttribute("normal",new se(a,3)),p.setAttribute("color",new se(l,3)),p.computeBoundingSphere(),g.mesh=new Dt(p,zi),g.mesh.castShadow=!0,g.mesh.receiveShadow=!0,this.group.add(g.mesh)}else g.mesh=new Ue;if(h.length){let p=new ge;p.setAttribute("position",new se(h,3)),p.setAttribute("color",new se(u,3)),p.computeBoundingSphere(),g.glow=new Dt(p,jh),this.group.add(g.glow)}this.chunks.set(n,g)}dispose(){for(let t of this.chunks.values())t.mesh.geometry&&t.mesh.geometry.dispose(),t.glow&&t.glow.geometry.dispose();this.chunks.clear()}blast(t,e,i,n,r=1){let o=[],a=Math.ceil(n);for(let l=-a;l<=a;l++)for(let h=-a;h<=a;h++)for(let c=-a;c<=a;c++){let u=Math.hypot(c,l,h);if(u>n+(Se(t+c,e+l,i+h)-.5)*.8)continue;let d=Math.round(t+c),f=Math.round(e+l),m=Math.round(i+h),y=this.get(d,f,m);y&&(ci[y].hard>r*2+(n-u)||(this.set(d,f,m,0),o.push({x:d,y:f,z:m,m:y})))}return o}raycast(t,e,i,n,r,o,a){let l=Math.floor(t),h=Math.floor(e),c=Math.floor(i),u=Math.sign(n),d=Math.sign(r),f=Math.sign(o),m=n?Math.abs(1/n):1/0,y=r?Math.abs(1/r):1/0,g=o?Math.abs(1/o):1/0,p=n?(u>0?l+1-t:t-l)*m:1/0,M=r?(d>0?h+1-e:e-h)*y:1/0,v=o?(f>0?c+1-i:i-c)*g:1/0,_=0,A=null;for(;_<=a;){let C=this.get(l,h,c);if(C&&ci[C].solid)return{x:l,y:h,z:c,t:_,m:C,face:A};p<M&&p<v?(l+=u,_=p,p+=m,A=[-u,0,0]):M<v?(h+=d,_=M,M+=y,A=[0,-d,0]):(c+=f,_=v,v+=g,A=[0,0,-f])}return null}},ua=class{constructor(t,e=700){this.max=e;let i=new Pe(q,q,q);this.mesh=new bn(i,new we,e),this.mesh.instanceMatrix.setUsage(Bs),this.mesh.frustumCulled=!1,this.mesh.count=0,t.add(this.mesh),this.p=[],this.tmp=new Ue,this.col=new mt}spawn(t,e,i){this.p.length>=this.max&&this.p.shift();let n=ci[e]||ci[1];this.p.push({x:t.x,y:t.y,z:t.z,vx:i.x,vy:i.y,vz:i.z,rx:Math.random()*6,ry:Math.random()*6,vr:(Math.random()-.5)*18,life:2.5+Math.random()*2.5,r:n.r,g:n.g,b:n.b,s:.6+Math.random()*.6})}update(t,e){let i=0;for(let n=this.p.length-1;n>=0;n--){let r=this.p[n];r.life-=t,r.vy-=14*t,r.x+=r.vx*t,r.y+=r.vy*t,r.z+=r.vz*t,r.rx+=r.vr*t,r.ry+=r.vr*.7*t;let o=e(r.x,r.z);if(r.y<o&&(r.y=o,r.vy*=-.15,r.vx*=.9,r.vz*=.9,r.vr*=.9,r.floating=!0),r.life<=0){this.p.splice(n,1);continue}}for(let n of this.p){if(i>=this.max)break;this.tmp.position.set(n.x,n.y,n.z),this.tmp.rotation.set(n.rx,n.ry,0);let r=n.s*Math.min(1,n.life);this.tmp.scale.set(r,r,r),this.tmp.updateMatrix(),this.mesh.setMatrixAt(i,this.tmp.matrix),this.col.setRGB(n.r,n.g,n.b),this.mesh.setColorAt(i,this.col),i++}this.mesh.count=i,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}};var Ui=(s,t,e)=>new ye(s,t,e,[-s/2*q,0,-e/2*q]);function ud(s){let t=Di(s),e=Ui(40,44,40),i=20,n=20,r=(t()-.5)*.7,o=(t()-.5)*.7,a=26+Math.floor(t()*8);for(let u=0;u<a;u++){i+=r*(u/a),n+=o*(u/a);let d=u%3===0?E.barkD:E.bark;e.box(Math.round(i),u,Math.round(n),Math.round(i)+1,u,Math.round(n)+1,d)}let l=Math.round(i),h=Math.round(n),c=a;for(let u=0;u<8;u++){let d=u/8*Math.PI*2+t()*.4,f=12+t()*5;for(let m=0;m<f;m++){let y=l+Math.cos(d)*m,g=h+Math.sin(d)*m,p=c+1.5+m*.5-m*m/(f*.9);e.set(y,p,g,m%2?E.leaf:E.leafD),e.set(y-Math.sin(d),p-.5,g+Math.cos(d),E.leafD),m>1&&m<f-2&&e.set(y+Math.sin(d),p,g-Math.cos(d),E.leaf)}}e.box(l-1,c-1,h-1,l+2,c,h+2,E.leafD);for(let[u,d]of[[-1,0],[2,1],[0,2]])e.set(l+u,c-2,h+d,E.barkD);return e}function Qh(s,t){let e=Di(s),i=t?9:5,n=Ui(i*2+3,i+4,i*2+3),r=i+1;for(let o=0;o<=i+2;o++)for(let a=0;a<i*2+3;a++)for(let l=0;l<i*2+3;l++){let h=(l-r)/i,c=(a-r)/(i*.85),u=o/(i*.85);h*h+c*c+u*u>1+(Se(l,o,a+s)-.5)*.35||n.set(l,o,a,o>i*.6&&Se(l,a,s)<.4?E.moss:Se(l,o,a)<.35?E.rockD:E.rock)}return n}function dd(s){let t=Ui(28,30,24);t.box(1,0,1,26,1,22,E.deckD);for(let e=2;e<=13;e++)for(let i=2;i<=21;i++)for(let n=2;n<=25;n++){if(!(n===2||n===25||i===2||i===21))continue;let o=(n===2||n===25)&&(i===2||i===21);if(!(i===21&&n>=12&&n<=15&&e<=10)){if(i===21&&(n===6||n===7||n===20||n===21)&&e>=6&&e<=8){t.set(n,e,i,E.glass);continue}t.set(n,e,i,o?E.mast:e%4===0?E.plankD:E.wall)}}for(let e=14;e<26;e++){let i=e-14;for(let n=i;n<24-i;n++)for(let r=0;r<28;r++)t.set(r,e,n,Se(r,e,n+s)<.3?E.thatch:(r+e)%5===0?E.rope:E.thatch)}return t}function Ir(s){let t=Ui(7,9,7);for(let e=0;e<9;e++)for(let i=0;i<7;i++)for(let n=0;n<7;n++){let r=e===0||e===8?2.4:3.1;Math.hypot(n-3,i-3)>r||t.set(n,e,i,e===1||e===7?E.iron:s?e===4?E.red:E.powder:(n+i)%3?E.plank:E.plankD)}return t}function tc(s=0){let t=Ui(9,7,6),e=[E.plank,E.ghostwood,E.red][s];return t.box(0,0,0,8,6,5,(i,n,r)=>i===0||i===8||i===4?E.gold:n===4?E.iron:n>4?E.plankD:e),t.set(4,3,5,E.brass),t}function fd(){let s=Ui(3,12,3);return s.box(1,0,1,1,8,1,E.mast),s.box(0,9,0,2,10,2,E.glass),s.box(0,11,0,2,11,2,E.iron),s}function pd(){let s=Ui(7,18,7);return s.box(3,0,3,3,12,3,E.ghostwoodD),s.box(1,13,1,5,17,5,E.bone),s.set(1,15,2,E.ghostglass),s.set(1,15,4,E.ghostglass),s.set(1,13,3,E.char),s.box(3,9,0,3,9,6,E.ghostwoodD),s}function md(s){let t=Di(s),e=Ui(26,30,26),i=13,n=13;for(let r=0;r<20;r++)i+=(t()-.5)*.5,e.box(Math.round(i),r,n,Math.round(i)+1,r,n+1,r%4?E.ghostwoodD:E.ghostwood);for(let r=0;r<6;r++){let o=t()*Math.PI*2,a=10+Math.floor(t()*9);for(let l=0;l<7+t()*5;l++)e.set(i+Math.cos(o)*l,a+l*.6,n+Math.sin(o)*l,E.ghostwoodD)}return e}function gd(s){let t=Ui(14,12,s);for(let e=0;e<s;e++)for(let i=1;i<13;i++)t.set(i,10,e,e%3===0?E.plankD:E.deck);for(let e=2;e<s;e+=8)for(let i of[1,12])t.box(i,0,e,i,11,e,E.mast);return t}function yd(){let s=Ui(6,6,6);return s.box(0,0,0,5,5,5,(t,e,i)=>(t===0||t===5)&&(e===0||e===5)||(i===0||i===5)&&(e===0||e===5)?E.plankD:E.deck),s}var kx=()=>[E.red,E.blue,E.green,E.purple];function xd(s,t=0){let e={},i={pirate:{skin:E.skin,shirt:kx()[t%4],pants:E.tar,hat:E.tar,band:E.trim},captain:{skin:E.bone,shirt:E.coat,pants:E.tar,hat:E.tar,band:E.ghosttrim},skeleton:{skin:E.bone,shirt:E.bone,pants:E.bone,hat:null},cursed:{skin:E.bone,shirt:E.ghostwood,pants:E.bone,hat:E.ghostwoodD,band:E.ghosttrim},merchant:{skin:E.skin,shirt:E.trim,pants:E.plankD,hat:E.plank,band:E.cloth}}[s],n=s==="skeleton"||s==="cursed"||s==="captain",r=(l,h,c)=>new ye(l,h,c,[-l/2*q,0,-c/2*q]);for(let l of["L","R"]){let h=new ye(2,6,2,[-q,-6*q,-q]);for(let u=0;u<6;u++){if(n&&u>0&&u<5){h.set(0,u,0,i.pants);continue}h.box(0,u,0,1,u,1,u<1?E.char:i.pants)}e["leg"+l]=h;let c=new ye(2,6,2,[-q,-6*q,-q]);for(let u=0;u<6;u++){if(n&&u>0){c.set(0,u,0,i.shirt);continue}c.box(0,u,0,1,u,1,u<1?i.skin:i.shirt)}e["arm"+l]=c}let o=r(4,6,3);if(n&&s!=="captain"){for(let l=0;l<6;l++)o.set(2,l,1,E.bone);for(let l of[1,3,5])o.box(0,l,0,3,l,2,(h,c,u)=>u===1&&(h===1||h===2)?0:i.shirt)}else o.box(0,0,0,3,5,2,(l,h,c)=>h===0?E.tar:l===3&&h>=2?E.cloth:i.shirt);e.body=o;let a=r(4,6,4);return a.box(0,0,0,3,3,3,i.skin),a.set(3,2,0,n?E.char:E.tar),a.set(3,2,3,n?E.char:E.tar),(s==="cursed"||s==="captain")&&(a.set(3,2,0,E.ghostglass),a.set(3,2,3,E.ghostglass)),n?(a.set(3,0,1,E.char),a.set(3,0,2,E.char)):a.box(3,0,1,3,0,2,s==="merchant"?E.cloth:E.barkD),i.hat&&(a.box(-0,4,-0,3,4,3,i.hat),a.box(1,5,1,2,5,2,i.hat),a.set(3,4,1,i.band),a.set(3,4,2,i.band)),e.head=a,e}function da(){let s=new ye(22,6,7,[-11*q,-2*q,-3.5*q]);for(let t=0;t<22;t++){let e=t/21,i=2.6*Math.sin(Math.min(1,e*1.15)*Math.PI)+.4;for(let n=0;n<6;n++)for(let r=0;r<7;r++)Math.hypot((n-2.2)/.85,r-3)>i||s.set(t,n,r,n<2?E.bone:E.rockD)}for(let t=5;t<10;t++)for(let e=10-(t-5);e<14-(t-5)*.6;e++)s.set(e,Math.min(t,5),3,E.rockD);for(let t=0;t<4;t++)s.set(t,2+t,3,E.rockD),s.set(t,2-Math.min(2,t),3,E.rockD);return s.set(19,3,1,E.char),s.set(19,3,5,E.char),s}function vd(s){let t=new ye(4,4,16,[-2*q,-2*q,-14*q]);if(s==="sword"&&(t.box(1,1,12,2,2,15,E.plankD),t.box(0,1,11,3,2,11,E.brass),t.box(1,1,0,2,2,10,E.iron),t.set(1,2,0,0)),s==="pistol"&&(t.box(1,0,11,2,2,15,E.plank),t.box(1,2,4,2,3,12,E.iron),t.set(1,1,12,E.brass)),s==="shovel"&&(t.box(1,1,5,2,2,15,E.plank),t.box(0,0,0,3,3,4,E.iron)),s==="plank"&&t.box(0,1,0,3,2,15,E.plank),s==="bucket")for(let e=0;e<4;e++)for(let i=10;i<14;i++)for(let n=0;n<4;n++)(e===0||n===0||n===3||i===10||i===13)&&t.set(n,e,i,e===3?E.iron:E.plank);return s==="lantern"&&(t.box(1,0,10,2,2,12,E.glass),t.box(1,3,10,2,3,12,E.iron)),t}function _d(){let s=Ui(30,26,26),t=15,e=13;for(let i=0;i<26;i++)for(let n=0;n<26;n++)for(let r=0;r<30;r++){let o=(r-t)/13,a=(i-13)/13,l=(n-e)/11,h=o*o+a*a*.9+l*l<1;if(i<8&&Math.abs(l)>.75&&(h=!1),!h)continue;let c=n>e+6;c&&i>=12&&i<=17&&(Math.abs(r-9)<=2.5||Math.abs(r-21)<=2.5)||c&&i>=8&&i<=10&&Math.abs(r-15)<=1||c&&i>=3&&i<=5&&r%3===0&&Math.abs(r-15)<8||s.set(r,i,n,Se(r,i,n)<.25?E.rockD:i>20&&Se(r,n,3)<.3?E.moss:E.rock)}return s}function Md(s){let t=Di(s),e=90,i=30,n=22,r=new ye(e,n,i,[-e/2*q,0,-i/2*q]),o=(i-1)/2;for(let a=0;a<e;a++){let l=a/(e-1),h=l<.7?13:13*Math.sqrt(Math.max(0,1-Math.pow((l-.7)/.3,2)));for(let c=0;c<n;c++){let u=h*(.45+.55*Math.min(1,c/12));for(let d=0;d<i;d++){let f=Math.abs(d-o);if(f>u)continue;let m=f>u-1.3||c===0||a===0,y=14+Math.sin(a*.31+s)*3+(Se(a,d,s)-.5)*3;c>y||m&&Se(a>>2,c>>2,s+d%2)<.12||(m?r.set(a,c,d,(c>>1)%2?E.plankD:E.tar):c===6&&Se(a,d,7)>.2&&r.set(a,c,d,E.deckD))}}}for(let a=6;a<30&&a<n;a++)r.set(40,a,Math.round(o),E.mast);for(let a=0;a<60;a++)r.set(Math.floor(t()*e),Math.floor(t()*6),Math.floor(t()*i),E.shell);return r}function bd(s){let t=new ye(5,5,5,[-2.5*q*.4,0,-2.5*q*.4]);if(s==="grass")for(let[e,i,n]of[[1,1,3],[3,1,2],[2,3,4],[0,3,2],[4,3,3]])for(let r=0;r<n;r++)t.set(e,r,i,r===n-1?E.leaf:E.leafD);if(s==="flower"){for(let e=0;e<3;e++)t.set(2,e,2,E.leafD);t.set(2,3,2,E.flowerY);for(let[e,i]of[[1,2],[3,2],[2,1],[2,3]])t.set(e,3,i,E.flower)}if(s==="flowerY"){for(let e=0;e<2;e++)t.set(2,e,2,E.leafD);for(let[e,i]of[[1,2],[3,2],[2,1],[2,3],[2,2]])t.set(e,2,i,E.flowerY)}return s==="shell"&&(t.box(1,0,1,3,0,2,E.shell),t.set(2,1,1,E.shell),t.set(2,0,3,E.trim)),s==="pebble"&&(t.box(1,0,1,2,0,3,E.rockD),t.set(2,1,2,E.rock)),t.buildAll(),t}var Fe=3200,wd=.5,Dx={sunny:{sand:["#ecd59a","#e0c88c"],grass:["#62a844","#55983c"],rock:["#8e8a84","#7e7a76"],side:"#b8925c",side2:"#8a6a42"},jungle:{sand:["#e6cf92","#d8c084"],grass:["#3e8a36","#347a2e"],rock:["#7e7a72","#6e6a64"],side:"#a4824e",side2:"#6e5032"},rocky:{sand:["#d8c49a","#ccb88e"],grass:["#7a9a50","#6a8a44"],rock:["#8a8690","#7a7680"],side:"#8a8078",side2:"#5e5860"},cursed:{sand:["#8e887a","#827c6e"],grass:["#4a5a46","#3e4e3c"],rock:["#5a5660","#4e4a54"],side:"#5e5648",side2:"#3e362e"}},ec=["S\xF3vir\xE1g","Holdkar\xE9j","Varj\xFAf\xE9szek","Fekete Fog","Rozsd\xE1s Horgony","Sir\xE1ly","Csontv\xE1ros","K\xF6dkapu","M\xE9zpart","Viharszem","Kagyl\xF3s","P\xE1lmakorona","\xD6rd\xF6gszirt","Kal\xF3ztanya","Tekn\u0151sh\xE1t","Gy\xF6ngyhalom","Sz\xE9lcsend","\xC1rny\xE9kmorzsa","B\xE1lnacsont","Rumhord\xF3","Lid\xE9rcl\xE1p","Narancsf\xE9ny","Hajnalpart","Smaragdszem","Agyarszirt","S\xF3hajt\xF3","K\u0151korona","V\xF6r\xF6sf\xFCrt"],Sd=["Saltbloom","Moonsliver","Crow's Nest","Black Fang","Rusty Anchor","Gull Rock","Bonetown","Mistgate","Honey Shore","Stormeye","Shell Key","Palm Crown","Devil's Crag","Rogue's Haven","Turtleback","Pearl Mound","Stillwind","Shadecrumb","Whalebone","Rum Barrel","Wisp Marsh","Ember Glow","Dawn Shore","Emerald Eye","Tusk Crag","Sighing Isle","Stone Crown","Red Curl"],Ed=["Fleur-de-Sel","Croissant-de-Lune","Nid-de-Corbeau","Croc Noir","Ancre Rouill\xE9e","Rocher aux Mouettes","Ville-aux-Os","Porte des Brumes","Rive de Miel","\u0152il-de-la-Temp\xEAte","Caye aux Coquillages","Couronne de Palmes","Rocher du Diable","Repaire des Forbans","Dos-de-Tortue","Butte aux Perles","Vent-Calme","Miette-d'Ombre","Os-de-Baleine","Tonneau de Rhum","Marais aux Feux Follets","Lueur de Braise","Rive de l'Aube","\u0152il d'\xC9meraude","Cr\xEAte-D\xE9fense","\xCEle Soupirante","Couronne de Pierre","Boucle Rouge"],fa=class{constructor(t,e=1717){this.scene=t,this.seed=e,this.noise=hd(e),this.islands=[],this.cell=128,this.grid=new Map,this.cursedZones=[{x:Fe*.78,y:Fe*.22,r:620},{x:Fe*.18,y:Fe*.82,r:380}],this.props=[],this.terrainMat=new we({vertexColors:!0}),this.generate()}cursedness(t,e){let i=0;for(let n of this.cursedZones)i=Math.max(i,Kt(1.35-Math.hypot(t-n.x,e-n.y)/n.r*1.35,0,1));return i}generate(){let t=Di(this.seed),e=[];for(let[n,r]of[[.47,.6],[.7,.68],[.28,.34]])e.push({x:n*Fe,y:r*Fe,r:55,kind:"outpost"});let i=0;for(;e.length<28&&i++<5e3;){let n=180+t()*(Fe-360),r=180+t()*(Fe-360),o=t(),a=o<.18?95+t()*30:o<.6?55+t()*30:28+t()*20;if(e.some(c=>Math.hypot(c.x-n,c.y-r)<c.r+a+140)||Math.hypot(n-Fe*.5,r-Fe*.55)<200)continue;let h=this.cursedness(n,r)>.4?"cursed":a>90?t()<.5?"jungle":"rocky":a>55&&t()<.6?"jungle":"sunny";e.push({x:n,y:r,r:a,kind:h})}e.forEach((n,r)=>this.islands.push(this.buildIsland(n,r,t)));for(let n of this.islands)for(let r=Math.floor(n.z0/this.cell);r<=Math.floor((n.z0+n.h)/this.cell);r++)for(let o=Math.floor(n.x0/this.cell);o<=Math.floor((n.x0+n.w)/this.cell);o++){let a=o+","+r;this.grid.has(a)||this.grid.set(a,[]),this.grid.get(a).push(n)}this.depthTex=this.buildDepthTexture(),this.wrecks=[];for(let n=0;n<8;n++)for(let r=0;r<60;r++){let o=200+t()*(Fe-400),a=200+t()*(Fe-400);if(this.field(o,a)<-.6&&!this.islands.some(l=>Math.hypot(l.cx-o,l.cz-a)<l.r+80)&&!this.wrecks.some(l=>Math.hypot(l.x-o,l.z-a)<300)){let l={x:o,z:a,looted:!1};this.wrecks.push(l),this.props.push({kind:"wreck",x:o,z:a,y:-3.6,seed:n*31+7,isl:null,wreck:l});break}}}islandsNear(t,e){return this.grid.get(Math.floor(t/this.cell)+","+Math.floor(e/this.cell))||[]}field(t,e){let i=-9;for(let n of this.islandsNear(t,e)){let r=Math.floor(t-n.x0),o=Math.floor(e-n.z0);r<0||o<0||r>=n.w||o>=n.h||(i=Math.max(i,n.f[o*n.w+r]))}return i}height(t,e){let i=-8;for(let n of this.islandsNear(t,e)){let r=Math.floor(t-n.x0),o=Math.floor(e-n.z0);r<0||o<0||r>=n.w||o>=n.h||(i=Math.max(i,n.hm[o*n.w+r]))}return i}islandAt(t,e,i=0){for(let n of this.islandsNear(t,e))if(Math.hypot(t-n.cx,e-n.cz)<n.r*1.3+i)return n;return null}nearestIsland(t,e){let i=null,n=1e9;for(let r of this.islands){let o=Math.hypot(r.cx-t,r.cz-e)-r.r;o<n&&(n=o,i=r)}return i}buildIsland(t,e,i){let r=Math.ceil(t.r*2+80),o=r,a=Math.round(t.x-r/2),l=Math.round(t.y-o/2),h=new Float32Array(r*o),c=new Float32Array(r*o),u=this.noise,d=e*37.3,f=.7+i()*.5,m=i()*Math.PI,y={rocky:15,jungle:10,outpost:3,cursed:9,sunny:5}[t.kind],g=[];for(let M=0;M<3;M++)g.push({a:i()*Math.PI*2,d:t.r*(.25+i()*.35),r:t.r*(.35+i()*.3)});for(let M=0;M<o;M++)for(let v=0;v<r;v++){let _=v-r/2,A=M-o/2,C=_*Math.cos(m)+A*Math.sin(m),P=(-_*Math.sin(m)+A*Math.cos(m))/f,k=Math.hypot(C,P)/t.r;for(let V of g)k=Math.min(k,Math.hypot(_-Math.cos(V.a)*V.d,A-Math.sin(V.a)*V.d)/V.r*1.05);t.kind==="outpost"&&(k=Math.hypot(_,A)/t.r);let T=u.fbm((v+d*10)/40,(M-d*7)/40,4)-.5,w=1-k+T*(t.kind==="outpost"?.2:.5);h[M*r+v]=w;let I;if(w>0){let V=Kt(w/.55,0,1),F=u.fbm((v+d)/30,(M+d)/30,2);I=.5+(w>.05?.5:0)+Math.pow(V,1.5)*y*(.55+F*.9)}else I=Math.max(-8,w*22);c[M*r+v]=Math.floor(I/wd)*wd}for(let M=0;M<o;M++)for(let v=0;v<r;v++)c[M*r+v]=c[(M&-2)*r+(v&-2)];let p={x0:a,z0:l,w:r,h:o,cx:t.x,cz:t.y,r:t.r,kind:t.kind,f:h,hm:c,id:e,props:[],digs:[],visited:!1,discovered:!1};return p.name=e,this.decorate(p,i),p.mesh=this.terrainMesh(p),this.scene.add(p.mesh),p}hAt(t,e,i){let n=Math.floor(e-t.x0),r=Math.floor(i-t.z0);return n<0||r<0||n>=t.w||r>=t.h?-8:t.hm[r*t.w+n]}decorate(t,e){let i=[];for(let u=0;u<3e3;u++){let d=t.x0+e()*t.w,f=t.z0+e()*t.h,m=this.hAt(t,d,f);m>=1&&i.push({x:d,z:f,y:m})}let n=(u,d,f)=>t.props.every(m=>Math.hypot(m.x-u,m.z-d)>f),r=(u,d,f,m={})=>{let y={kind:u,x:d,z:f,y:m.y??this.hAt(t,d,f),seed:Math.floor(e()*1e4),isl:t,...m};return t.props.push(y),this.props.push(y),y},o=t.r*t.r;if(t.kind==="outpost"){let u=0;for(;this.hAt(t,t.cx,t.cz+u)>0&&u<t.h/2;)u++;t.dock={x:t.cx,z:t.cz+u-3},r("dock",t.cx,t.cz+u+6,{y:-2.5,len:64}),t.moor={x:t.cx+12,z:t.cz+u+18},r("hut",t.cx-16,t.cz-10,{light:!0}),r("hut",t.cx+14,t.cz-18,{light:!0}),r("hut",t.cx+18,t.cz+8,{light:!0}),t.merchant={x:t.cx-6,z:t.cz+6};for(let[d,f]of[[-4,u-4],[4,u-4],[-20,6],[8,-4]])r("lantern",t.cx+d,t.cz+f,{light:!0});r("barrel",t.cx+4,t.cz+10),r("barrel",t.cx+5.5,t.cz+10.5),r("crate",t.cx+6,t.cz+12),r("powder",t.cx-12,t.cz+12)}let a=t.kind==="cursed"?0:Math.round(o/(t.kind==="jungle"?160:380)),l=Math.round(o/(t.kind==="rocky"?260:900)),h=0,c=0;for(let u of i){if(h<a&&u.y<=7&&n(u.x,u.z,6)){r("palm",u.x,u.z),h++;continue}c<l&&n(u.x,u.z,5)&&(r(e()<.35?"rockB":"rockS",u.x,u.z),c++)}if(t.kind==="cursed"){let u=0,d=0;for(let f of i)u<3&&f.y>=1.5&&n(f.x,f.z,16)?(r("totem",f.x,f.z,{light:!0}),u++):d<8&&n(f.x,f.z,7)&&(r("deadtree",f.x,f.z),d++);for(let f of i)if(f.y>=1.5&&n(f.x,f.z,8)){t.vault={x:f.x,z:f.z,y:f.y};break}}if(t.kind!=="outpost"&&t.r>38){for(let u of i)if(u.y>=1.5&&u.y<=6&&n(u.x,u.z,12)){r("skullrock",u.x,u.z),t.landmark={x:u.x,z:u.z};break}}if(t.kind!=="outpost"){let u=t.r>80?3:t.r>45?2:1;for(let d of i){if(t.digs.length>=u)break;d.y>=1&&d.y<=6&&n(d.x,d.z,7)&&t.digs.every(f=>Math.hypot(f.x-d.x,f.z-d.z)>20)&&t.digs.push({x:d.x,z:d.z,dug:!1})}for(let d of i.slice(-20))e()<.25&&n(d.x,d.z,4)&&r(e()<.3?"powder":"barrel",d.x,d.z,{loot:!0});if(e()<.4){for(let d of i.slice(-80,-20))if(n(d.x,d.z,6)){t.looseChest={x:d.x,z:d.z,y:d.y};break}}}}terrainMesh(t){let e=Dx[t.kind==="outpost"?"sunny":t.kind],i=A=>new mt(A),n=[i(e.sand[1]).multiplyScalar(.8),i(e.sand[0]),i(e.sand[1]),i(e.grass[0]),i(e.grass[1]),i(e.rock[0]),i(e.rock[1])],r=[];for(let A of n)r.push(A.clone()),r.push(A.clone().multiplyScalar(.93));let o=i(e.side),a=i(e.side2),l=[],h=[],c=[],{w:u,h:d,hm:f}=t,m=(A,C)=>A<0||C<0||A>=u||C>=d?-8:f[C*u+A],y=(A,C,P)=>{l.push(A[0],A[1],A[2]),h.push(C[0],C[1],C[2]),c.push(P.r,P.g,P.b)},g=(A,C,P,k,T,w)=>{for(let I of[A,C,P,A,P,k])y(I,T,w)},p=new Int32Array(u*d).fill(-1);for(let A=0;A<d;A++)for(let C=0;C<u;C++){let P=m(C,A);if(P<-1)continue;let k;P<.5?k=0:P<=1.5?k=Se(C>>2,A>>2,t.id)<.5?1:2:P>=10||t.kind==="rocky"&&P>=6?k=Se(C>>1,A>>1,t.id)<.5?5:6:k=this.noise.fbm((C+t.id*50)/9,A/9,2)>.52?3:4,P===2&&Se(C>>1,A>>1,3)<.4&&(k=2);let T=(k===1||k===2||k>=5)&&Se(C>>2,A>>2,t.id+7)<.4?1:0;p[A*u+C]=(Math.round(P*2)+40)*16+k*2+T}let M=new Uint8Array(u*d);for(let A=0;A<d;A++)for(let C=0;C<u;C++){let P=p[A*u+C];if(P<0||M[A*u+C])continue;let k=C;for(;k+1<u&&p[A*u+k+1]===P&&!M[A*u+k+1];)k++;let T=A;t:for(;T+1<d;){for(let B=C;B<=k;B++)if(p[(T+1)*u+B]!==P||M[(T+1)*u+B])break t;T++}for(let B=A;B<=T;B++)for(let j=C;j<=k;j++)M[B*u+j]=1;let w=Math.floor(P/16)/2-20,I=r[P%16],V=t.x0+C,F=t.z0+A,X=t.x0+k+1,J=t.z0+T+1;g([V,w,F],[V,w,J],[X,w,J],[X,w,F],[0,1,0],I)}let v=(A,C,P,k)=>{for(let T=0;T<(A?u:d);T++){let w=null,I=()=>{if(!w)return;let{s:V,e:F,y:X,ny:J}=w,B=(X-J>2||X<=1.5?a:o).clone().multiplyScalar(k);if(A){let j=t.x0+T+(A>0?1:0),W=t.z0+V,st=t.z0+F+1;A>0?g([j,J,W],[j,X,W],[j,X,st],[j,J,st],P,B):g([j,J,st],[j,X,st],[j,X,W],[j,J,W],P,B)}else{let j=t.z0+T+(C>0?1:0),W=t.x0+V,st=t.x0+F+1;C>0?g([st,J,j],[st,X,j],[W,X,j],[W,J,j],P,B):g([W,J,j],[W,X,j],[st,X,j],[st,J,j],P,B)}w=null};for(let V=0;V<(A?d:u);V++){let F=A?T:V,X=A?V:T,J=m(F,X),B=Math.max(m(F+A,X+C),-2.5);if(p[X*u+F]<0||B>=J){I();continue}w&&w.y===J&&w.ny===B&&w.e===V-1?w.e=V:(I(),w={s:V,e:V,y:J,ny:B})}I()}};v(1,0,[1,0,0],.8),v(-1,0,[-1,0,0],.68),v(0,1,[0,0,1],.9),v(0,-1,[0,0,-1],.62);let _=new ge;return _.setAttribute("position",new se(l,3)),_.setAttribute("normal",new se(h,3)),_.setAttribute("color",new se(c,3)),_.computeBoundingSphere(),new Dt(_,this.terrainMat)}buildDepthTexture(){let e=new Uint8Array(1048576);for(let n=0;n<512;n++)for(let r=0;r<512;r++){let o=(r+.5)/512*Fe,a=(n+.5)/512*Fe,l=-9;for(let c of this.islandsNear(o,a))for(let[u,d]of[[0,0],[2,2],[-2,-2],[2,-2],[-2,2]]){let f=Math.floor(o+u-c.x0),m=Math.floor(a+d-c.z0);f<0||m<0||f>=c.w||m>=c.h||(l=Math.max(l,c.f[m*c.w+f]))}let h=Kt(1+l/.5,0,1);e[(n*512+r)*4]=h*255,e[(n*512+r)*4+3]=255}let i=new br(e,512,512);return i.magFilter=gi,i.minFilter=gi,i.needsUpdate=!0,i}};function Td(s){switch(s.kind){case"palm":return ud(s.seed);case"rockB":return Qh(s.seed,!0);case"rockS":return Qh(s.seed,!1);case"hut":return dd(s.seed);case"lantern":return fd();case"totem":return pd();case"deadtree":return md(s.seed);case"dock":return gd(s.len);case"barrel":return Ir(!1);case"powder":return Ir(!0);case"crate":return yd();case"skullrock":return _d();case"wreck":return Md(s.seed)}return null}var Lr={amp:1};function ie(s,t,e){return Lr.amp*(.42*Math.sin(.085*s+.05*t+1.05*e)+.28*Math.sin(-.055*s+.1*t+1.45*e)+.12*Math.sin(.19*s+.16*t+2.2*e)+.06*Math.sin(.33*s-.27*t+3.1*e))}var zx=`
uniform float uAmp;
float waveAt(vec2 p, float t){
  return uAmp*(0.42*sin(0.085*p.x+0.05*p.y+1.05*t)+0.28*sin(-0.055*p.x+0.1*p.y+1.45*t)+0.12*sin(0.19*p.x+0.16*p.y+2.2*t)+0.06*sin(0.33*p.x-0.27*p.y+3.1*t));
}`,kr=8;function Cd(s,t){let e=new yi(1400,1400,175,175);e.rotateX(-Math.PI/2);let i=[];for(let o=0;o<kr;o++)i.push(new qt);let n=new Ge({side:li,uniforms:{uTime:{value:0},uAmp:{value:1},uDepth:{value:s},uWorld:{value:t},uSunDir:{value:new x(.3,.8,.2)},uSunCol:{value:new mt(1,.95,.85)},uAmb:{value:new mt(.5,.6,.7)},uDeep:{value:new mt("#1c5f86")},uShallow:{value:new mt("#3fc6c0")},uFog:{value:new mt("#9cc8e0")},uFogNear:{value:120},uFogFar:{value:650},uCam:{value:new x},uShipInv:{value:i},uShipN:{value:0},uCursed:{value:0}},vertexShader:zx+`
      uniform float uTime; varying vec3 vW;
      void main(){ vec4 w = modelMatrix*vec4(position,1.0); w.y = waveAt(w.xz,uTime); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`
      uniform float uTime; uniform sampler2D uDepth; uniform float uWorld; uniform vec3 uSunDir; uniform vec3 uSunCol; uniform vec3 uAmb;
      uniform vec3 uDeep; uniform vec3 uShallow; uniform vec3 uFog; uniform float uFogNear; uniform float uFogFar; uniform vec3 uCam;
      uniform mat4 uShipInv[${kr}]; uniform int uShipN; uniform float uCursed; uniform float uAmp;
      varying vec3 vW;
      float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      float hullHW(float t){ return t < 0.08 ? 3.05 + t/0.08*0.35 : (t < 0.6 ? 3.4 : 3.45*sqrt(max(0.0,1.0-pow((t-0.6)/0.4,2.0)))); }
      void main(){
        for (int i=0;i<${kr};i++){ if (i>=uShipN) break; vec4 l = uShipInv[i]*vec4(vW,1.0); float t=(l.x+14.8)/27.4; if (t>0.0 && t<1.0 && abs(l.z) < hullHW(t)-0.12 && l.y < 3.0) discard; }
        vec3 n = normalize(cross(dFdx(vW), dFdy(vW))); if (n.y < 0.0) n = -n;
        vec2 uv = vW.xz / uWorld;
        float sh = texture2D(uDepth, uv).r;           // 1 near shore, 0 deep
        float band = floor(sh*5.0)/5.0;               // stepped colour bands read as pixel art
        vec3 base = mix(uDeep, uShallow, band*band);
        float dif = clamp(dot(n, normalize(uSunDir)), 0.0, 1.0);
        vec3 col = base*(uAmb + uSunCol*dif*0.75);
        // foam on wave crests and along the shore
        float crest = vW.y/(uAmp*0.88+0.001);
        vec2 cell = floor(vW.xz*1.0);
        float fn = h2(cell + floor(uTime*2.0));
        if (crest > 0.78 && fn > 0.55) col = mix(col, vec3(0.92,0.97,1.0)*clamp(uAmb*1.1+uSunCol*0.5, 0.0, 1.0), 0.75);
        float shore = sin(sh*26.0 - uTime*1.6);
        vec3 foam = vec3(0.95,1.0,1.0)*clamp(uAmb*1.1 + uSunCol*0.5, 0.0, 1.0);
        if (sh > 0.82 && shore > 0.6 && h2(cell) > 0.35) col = mix(col, foam, 0.7);
        if (sh > 0.96) col = mix(col, foam, 0.5);
        // sun glints
        vec3 v = normalize(uCam - vW); vec3 hv = normalize(v + normalize(uSunDir));
        float sp = pow(max(dot(n,hv),0.0), 90.0);
        if (sp > 0.5 && h2(cell*1.7 + floor(uTime*3.0)) > 0.4) col += uSunCol*0.55;
        col = mix(col, col*vec3(0.55,0.85,0.7), uCursed*0.6);
        float d = length(uCam - vW);
        float fogF = smoothstep(uFogNear, uFogFar, d);
        gl_FragColor = linearToOutputTexel(vec4(mix(col, uFog, fogF), 1.0));
      }`});n.extensions={derivatives:!0};let r=new Dt(e,n);return r.frustumCulled=!1,{mesh:r,mat:n,shipInv:i}}function Pd(){let s=new ea(950,32,16),t=new Ge({side:ni,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new mt("#4a90d0")},uHor:{value:new mt("#bfe0f0")},uSun:{value:new x(0,1,0)},uSunCol:{value:new mt("#fff")},uNight:{value:0},uMoon:{value:new x(0,-1,0)},uTime:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 uTop; uniform vec3 uHor; uniform vec3 uSun; uniform vec3 uSunCol; uniform float uNight; uniform vec3 uMoon; uniform float uTime; varying vec3 vD;
      float h3(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164)))*43758.5453); }
      void main(){
        vec3 d = normalize(vD);
        float h = clamp(d.y, -0.1, 1.0);
        float b = floor(pow(max(h,0.0),0.6)*10.0)/10.0;   // banded gradient
        vec3 col = mix(uHor, uTop, b);
        if (d.y < 0.0) col = uHor*0.9;
        float s = dot(d, normalize(uSun));
        if (s > 0.9985) col = mix(col, vec3(1.0,0.97,0.86), 1.0);
        else if (s > 0.995) col = mix(col, uSunCol, 0.6);
        else if (s > 0.97) col = mix(col, uSunCol, 0.15);
        float m = dot(d, normalize(uMoon));
        if (m > 0.9988) col = mix(col, vec3(0.88,0.92,1.0), uNight);
        if (uNight > 0.0 && d.y > 0.02) { vec3 q = floor(d*260.0); float st = h3(q); if (st > 0.996) col += vec3(0.9,0.9,1.0)*uNight*(0.5+0.5*sin(uTime*2.0+st*90.0)); }
        gl_FragColor = linearToOutputTexel(vec4(col,1.0));
      }`}),e=new Dt(s,t);return e.frustumCulled=!1,e.renderOrder=-10,{mesh:e,mat:t}}function Id(s){let t=[];for(let i=0;i<4;i++){let n=document.createElement("canvas");n.width=64,n.height=24;let r=n.getContext("2d"),o=5+i;for(let l=0;l<o;l++){let h=8+Math.random()*44,c=10+Math.random()*6,u=5+Math.random()*7;for(let d=-u;d<=u;d++)for(let f=-u*1.4;f<=u*1.4;f++)(f/1.4)**2+d*d>u*u||c+d>20||(r.fillStyle=d>u*.3?"#d8e2ec":"#ffffff",r.fillRect(Math.round(h+f),Math.round(c+d),1,1))}let a=new Vn(n);a.magFilter=Le,a.minFilter=Le,a.colorSpace=Ve,t.push(a)}let e=[];for(let i=0;i<26;i++){let n=new Mr({map:t[i%4],transparent:!0,fog:!1,depthWrite:!1}),r=new Xo(n),o=90+Math.random()*120;r.scale.set(o,o*24/64,1),r.userData={a:Math.random()*Math.PI*2,r:400+Math.random()*400,h:160+Math.random()*120},r.renderOrder=-5,s.add(r),e.push(r)}return e}var Yn=[{h:0,top:"#060a1c",hor:"#16223e",sun:"#3a4a7a",amb:"#26304e",fog:"#141e36",sea:"#0b2234"},{h:5,top:"#1a2050",hor:"#a05a5a",sun:"#ff9a60",amb:"#4a4060",fog:"#6a4a5a",sea:"#1a3a52"},{h:7,top:"#4a88cc",hor:"#f0c8a0",sun:"#ffd8a0",amb:"#8a8ca0",fog:"#d8c8b8",sea:"#1e5a80"},{h:12,top:"#3f86d8",hor:"#bfe2f4",sun:"#fff4e0",amb:"#a8b8c8",fog:"#a8d0e8",sea:"#1c5f86"},{h:17,top:"#4a7ac0",hor:"#f4c890",sun:"#ffc070",amb:"#9a9098",fog:"#e0b890",sea:"#1e5478"},{h:19,top:"#2a2a60",hor:"#e07850",sun:"#ff7a40",amb:"#5a4860",fog:"#8a5a5a",sea:"#18304c"},{h:21,top:"#0a1028",hor:"#202a4a",sun:"#40507a",amb:"#2a3250",fog:"#1a2440",sea:"#0c2236"},{h:24,top:"#060a1c",hor:"#16223e",sun:"#3a4a7a",amb:"#26304e",fog:"#141e36",sea:"#0b2234"}],Ad=new mt,Rd=new mt;function kd(s,t){let e=Yn[0],i=Yn[1];for(let a=0;a<Yn.length-1;a++)if(s>=Yn[a].h&&s<Yn[a+1].h){e=Yn[a],i=Yn[a+1];break}let n=(s-e.h)/(i.h-e.h),r={};for(let a of["top","hor","sun","amb","fog","sea"]){Ad.set(e[a]),Rd.set(i[a]);let l=Ad.clone().lerp(Rd,n);if(t>0){let h=new mt(a==="sun"?"#6aff9a":a==="sea"?"#14302a":"#22382e");l.lerp(h,t*(a==="sun"?.4:.65))}r[a]=l}let o=(s-5.5)/14.5*Math.PI;return r.sunDir=new x(Math.cos(o),Math.sin(o),.35).normalize(),r.moonDir=new x(-Math.cos(o),-Math.sin(o),-.3).normalize(),r.night=Kt((-r.sunDir.y+.08)*4,0,1),r.light=Kt(r.sunDir.y*3+.15,0,1),r}var Ni=124,Ux=100,xi=36,wn=-2.5,O={hold:4,deck:18,qd:28,fc:21,rail:22},yt={qdEnd:30,fcStart:96,hatch0:50,hatch1:57,main:64,fore:88,helm:14,capstan:92},ic=[46,72,86],at=(xi-1)/2,Ld=s=>(s-2)/110;function Ee(s,t){let e=Ld(s);if(e<0||e>1)return-1;let i;e<.08?i=13+e/.08*3:e<.6?i=16+Math.sin((e-.08)/.52*Math.PI/2)*1.5:i=17.5*Math.sqrt(Math.max(0,1-Math.pow((e-.6)/.4,2)));let n=Math.min(1,t/16);return i*=.42+.58*(n*n*(3-2*n)),t>20&&(i*=.97),i}function Nx(s){let t=Ld(s);return t>.75?(t-.75)/.25*12:t<.05?3:0}function Dd(s){return s<=yt.qdEnd?O.qd:s>=yt.fcStart?O.fc:O.deck}function Fx(s){return Dd(s)+4}var Ox={player:{hullA:E.plank,hullB:E.plankD,stripe:E.trim,wale:E.tar,deck:E.deck,deckB:E.deckD,rail:E.plankD,glass:E.glass,sail:"sail",bottom:E.copper,boot:E.cloth,frame:E.red,carve:E.trim,figure:E.gold},enemy:{hullA:E.plankD,hullB:E.tar,stripe:E.red,wale:E.tar,deck:E.deckD,deckB:E.plankD,rail:E.tar,glass:E.glass,sail:"black",bottom:E.tar,boot:E.red,frame:E.red,carve:E.bone,figure:E.bone},ghost:{hullA:E.ghostwood,hullB:E.ghostwoodD,stripe:E.ghosttrim,wale:E.ghostwoodD,deck:E.ghostwood,deckB:E.ghostwoodD,rail:E.ghostwoodD,glass:E.ghostglass,sail:"ghost",bottom:E.verdigris,boot:E.ghosttrim,frame:E.ghosttrim,carve:E.ghosttrim,figure:E.bone}};function zd(s="player"){let t=Ox[s],e=new ye(Ni,Ux,xi,[-Ni/2*q,wn,-xi/2*q]),i=s==="ghost";for(let o=0;o<Ni;o++){let a=Nx(o),l=Dd(o),h=Fx(o);for(let c=Math.floor(a);c<=h;c++){let u=Ee(o,c);if(!(u<0))for(let d=0;d<xi;d++){let f=Math.abs(d-at);if(f>u)continue;let m=f>u-1.3||o===2||Ee(o+1,c)<f||Ee(o-1,c)<f||c===Math.floor(a);if(!(i&&m&&c>8&&Se(o,c,d)<.04)){if(m){let y,g=c>>1,p=(o+g*5)%14===0;c<=8?y=t.bottom:c<=10?y=t.boot:c>=12&&c<=14?y=c<=13&&o>16&&o<100&&o%9<3?t.wale:t.stripe:c===15||c===11?y=t.wale:c===l+4?y=t.stripe:y=p?t.hullB:g%2?t.hullA:t.hullB,c===h&&(y=t.wale),e.set(o,c,d,y);continue}c===O.hold&&o>8&&o<104&&e.set(o,c,d,t.deckB),(c===l||c===O.deck&&(o<=yt.qdEnd||o>=yt.fcStart))&&e.set(o,c,d,Math.round(d)%3===0?t.deckB:t.deck)}}}}for(let o=0;o<xi;o++){for(let a=O.deck+1;a<O.qd;a++){let l=Ee(yt.qdEnd,a);Math.abs(o-at)>l||Math.abs(o-at)<=2&&a<=O.deck+8||e.set(yt.qdEnd,a,o,t.hullB)}for(let a=O.deck+1;a<O.fc;a++)Math.abs(o-at)<=Ee(yt.fcStart,a)&&e.set(yt.fcStart,a,o,t.hullB)}for(let o of[-1,1]){for(let a=1;a<=5;a++){let l=yt.qdEnd+1+(5-a)*2,h=Math.min(O.qd,O.deck+a*2);for(let c=7;c<=11;c++)for(let u=l;u<=l+1;u++)for(let d=O.deck+1;d<=h;d++)e.set(u,d,Math.round(at+o*c),t.deckB)}for(let a=1;a<=2;a++){let l=yt.fcStart-1-(2-a)*2;for(let h=7;h<=10;h++)for(let c=l-1;c<=l;c++)for(let u=O.deck+1;u<=Math.min(O.fc,O.deck+a*2-1);u++)e.set(c,u,Math.round(at+o*h),t.deckB)}}for(let o=yt.hatch0;o<=yt.hatch1;o++)for(let a=Math.round(at)-3;a<=Math.round(at)+3;a++)e.set(o,O.deck,a,0);for(let o=yt.hatch0-1;o<=yt.hatch1+1;o++)for(let a of[Math.round(at)-4,Math.round(at)+4])e.set(o,O.deck+1,a,t.rail);for(let o of[Math.round(at)-4,Math.round(at)+4])for(let a=yt.hatch0-1;a<=yt.hatch1+1;a+=yt.hatch1-yt.hatch0+2)e.set(a,O.deck+1,o,t.rail);for(let o=O.hold+1;o<=O.deck;o++)for(let a=Math.round(at)-2;a<=Math.round(at)+2;a++)(Math.abs(a-Math.round(at))===2||o%2===0)&&e.set(yt.hatch0,o,a,E.ladder);e.set(yt.hatch0-6,O.deck-1,Math.round(at)+5,E.iron),e.set(yt.hatch0-6,O.deck-2,Math.round(at)+5,t.glass),e.set(76,O.deck-1,Math.round(at)-5,E.iron),e.set(76,O.deck-2,Math.round(at)-5,t.glass);for(let o of ic)for(let a of[-1,1])for(let l=o-1;l<=o+2;l++)for(let h=O.deck+1;h<=O.deck+2;h++){let c=Ee(l,h);for(let u=Math.floor(c-1.3);u<=Math.ceil(c);u++)e.set(l,h,Math.round(at+a*u),0)}let n={[yt.main]:96,[yt.fore]:84};for(let o of[yt.main,yt.fore]){for(let a=O.hold+1;a<=n[o];a++)for(let l=0;l<=1;l++)for(let h=0;h<=1;h++)e.set(o+l,a,Math.round(at)+h-1,E.mast);if(o===yt.main)for(let a=o-3;a<=o+4;a++)for(let l=Math.round(at)-4;l<=Math.round(at)+3;l++){let h=a===o-3||a===o+4||l===Math.round(at)-4||l===Math.round(at)+3;e.set(a,78,l,t.deckB),h&&(e.set(a,79,l,t.rail),e.set(a,80,l,t.rail))}}for(let o=104;o<Ni;o++){let a=O.fc+2+Math.floor((o-104)/2.5);e.set(o,a,Math.round(at),E.mast),e.set(o,a,Math.round(at)-1,E.mast)}for(let o of[at-6,at-2,at+2,at+6])for(let a=O.deck+3;a<=O.deck+6;a++)for(let l=2;l<=3;l++)e.get(l,a,Math.round(o))&&e.set(2,a,Math.round(o),t.glass);for(let o of[3,xi-4])e.set(4,O.qd+5,o,t.rail),e.set(4,O.qd+6,o,t.glass),e.set(4,O.qd+7,o,E.iron);e.set(yt.main+2,O.deck+9,Math.round(at),t.glass),e.box(14,O.deck+1,Math.round(at)-3,21,O.deck+3,Math.round(at)+3,(o,a)=>a===O.deck+3?E.deck:o===14||o===21?E.plankD:0),e.box(16,O.deck+4,Math.round(at)-1,19,O.deck+4,Math.round(at)+1,E.cloth),e.box(10,O.deck+1,Math.round(at)-1,11,O.deck+2,Math.round(at)+1,E.plankD),e.box(9,O.deck+3,Math.round(at)-1,9,O.deck+5,Math.round(at)+1,E.plankD),e.set(18,O.qd-1,Math.round(at),E.iron),e.set(18,O.qd-2,Math.round(at),t.glass),e.box(yt.helm,O.qd+1,Math.round(at)-1,yt.helm+1,O.qd+3,Math.round(at),E.mast),e.box(yt.capstan,O.deck+1,Math.round(at)-2,yt.capstan+3,O.deck+3,Math.round(at)+1,(o,a)=>a===O.deck+2?E.brass:E.plankD);let r=(o,a,l,h)=>e.box(o,a,l,o+3,a+3,l+3,(c,u,d)=>(c===o||c===o+3)&&(u===a||u===a+3)?E.plankD:h);r(yt.main-8,O.deck+1,Math.round(at)+5,E.deck),r(70,O.hold+1,6,E.deck),r(40,O.hold+1,xi-10,E.deck);for(let[o,a]of[[80,8],[84,8],[80,26]])e.box(o,O.hold+1,a,o+2,O.hold+3,a+2,(l,h)=>h===O.hold+2?E.iron:E.powder);for(let o of[-1,1])for(let a=4;a<=O.deck+3;a++){let l=yt.main-15,h=Math.round(at+o*(Ee(l,Math.min(a,22))+.6));e.set(l-1,a,h,E.ladder),e.set(l+2,a,h,E.ladder),a%2===0&&(e.set(l,a,h,E.ladder),e.set(l+1,a,h,E.ladder))}return Bx(e,t,s),e.orig=e.d.slice(),e}function Bx(s,t,e){let i=Math.round(at),n=(h,c,u)=>s.get(h,c,u),r=(h,c,u)=>Math.round(at+u*Ee(h,c));for(let h=2;h<=O.deck+3;h++)for(let c=0;c<=1;c++)for(let u of[i-1,i])s.set(c,h,u,h%5===0?E.iron:t.hullB);for(let h of ic)for(let c of[-1,1])for(let u=h-2;u<=h+3;u++)for(let d=O.deck;d<=O.deck+3;d++){if(u>h-2&&u<h+3&&d>O.deck&&d<O.deck+3)continue;let f=Ee(u,d);for(let m=Math.floor(f-1.3);m<=Math.ceil(f);m++){let y=Math.round(at+c*m),g=n(u,d,y);g&&g!==E.ladder&&s.set(u,d,y,t.frame)}}for(let h=0;h<xi;h++)for(let c=O.deck+1;c<=O.qd+4;c++){if(!n(2,c,h)||n(2,c,h)===t.glass)continue;let u=Math.abs(h-at),d=(c===O.deck+2||c===O.deck+7)&&u<=8.5,f=c>=O.deck+9&&c<=O.deck+10&&u<=6.5,m=c===O.qd+4||c>=O.qd+2&&(h+c)%3===0;d||m?s.set(2,c,h,t.carve):f&&s.set(2,c,h,c===O.deck+9&&h%2===0&&u<5.5?t.wale:t.carve)}for(let h of[-1,1])for(let c=5;c<=12;c++)for(let u=O.deck+2;u<=O.deck+8;u++){let d=r(c,u,h)+h,f=c===5||c===12||u===O.deck+2||u===O.deck+8;s.set(c,u,d,f?t.carve:c%3===0?t.hullB:t.glass),(u===O.deck+2||u===O.deck+8)&&s.set(c,u,d+h,t.carve)}for(let h=12;h<=21;h++){let c=111+Math.floor((h-12)/2);s.set(c,h,i,t.figure),s.set(c,h,i-1,t.figure),s.set(c-1,h,i,t.figure),s.set(c-1,h,i-1,t.figure)}s.box(116,20,i-1,117,22,i,t.figure),s.set(117,21,i-1,e==="ghost"?E.ghostglass:E.char),s.set(117,21,i,e==="ghost"?E.ghostglass:E.char);for(let h of[-1,1])s.set(115,18,i+(h>0?1:-2),t.figure),s.set(116,17,i+(h>0?1:-2),t.figure);for(let h of[-1,1])for(let c=104;c<=113;c++){let u=16+Math.floor((c-104)/3),d=Math.round(at+h*Math.max(1.5,Ee(c,u)+.5));s.set(c,u,d,t.wale)}for(let h of[-1,1]){let u=O.fc+2,d=r(102,u,h);for(let m=0;m<=2;m++)s.set(102,u,d+h*m,t.hullB);let f=d+h*2;for(let m=u-9;m<u;m++)s.set(102,m,f,E.iron);for(let m=-2;m<=2;m++)s.set(102+m,u-1,f,E.plankD);for(let m of[-1,1])s.set(102+m,u-9,f,E.iron),s.set(102+m*2,u-8,f,E.iron),s.set(102+m*2,u-7,f,E.iron);s.set(102,u-10,f,E.iron)}let o=(h,c)=>{for(let u=O.deck+1;u<=O.deck+3;u++)for(let d=0;d<=1;d++)for(let f=0;f<=1;f++)s.set(h+d,u,c+f,u===O.deck+2?E.iron:E.plank);s.set(h,O.deck+4,c,E.plankD)};o(58,Math.round(at+Ee(58,O.deck+2)-3.5)),o(60,Math.round(at+Ee(60,O.deck+2)-3.5)),o(80,Math.round(at-Ee(80,O.deck+2)+2.5)),o(36,Math.round(at-Ee(36,O.deck+2)+2.5));let a=(h,c)=>{for(let u=0;u<12;u++){let d=h+Math.round(Math.cos(u/12*6.283)*1.4),f=c+Math.round(Math.sin(u/12*6.283)*1.4);n(d,O.deck+1,f)||s.set(d,O.deck+1,f,E.rope)}};a(yt.main+4,i-4),a(yt.fore+4,i+4);let l=yt.fcStart+2;for(let h of[i-2,i+1])for(let c=O.fc+1;c<=O.fc+5;c++)s.set(l,c,h,E.plankD);for(let h=i-2;h<=i+1;h++)s.set(l,O.fc+6,h,E.plankD);s.box(l,O.fc+3,i-1,l,O.fc+5,i,E.brass);for(let h=O.qd+5;h<=O.qd+9;h++)s.set(4,h,i,E.iron);s.set(4,O.qd+10,i,t.glass),s.set(4,O.qd+11,i,E.iron);for(let h=76;h<=81;h++)for(let c=i-2;c<=i+1;c++)n(h,O.deck,c)&&s.set(h,O.deck,c,(h+c)%2?E.char:t.deckB)}var Yt=s=>(s-Ni/2+.5)*q,Wt=s=>wn+s*q,Ke=s=>(s-xi/2+.5)*q,Ud=()=>{let s=[{type:"helm",x:Yt(yt.helm+.5),y:Wt(O.qd+3.5),z:Ke(at),stand:[Yt(yt.helm-7),Wt(O.qd+1),Ke(at)]},{type:"sails",mast:0,x:Yt(yt.main-2),y:Wt(O.deck+5),z:Ke(at+3),stand:[Yt(yt.main-5),Wt(O.deck+1),Ke(at+3)]},{type:"sails",mast:1,x:Yt(yt.fore-2),y:Wt(O.deck+5),z:Ke(at-3),stand:[Yt(yt.fore-5),Wt(O.deck+1),Ke(at-3)]},{type:"anchor",x:Yt(yt.capstan+1.5),y:Wt(O.deck+3),z:Ke(at-.5),stand:[Yt(yt.capstan-3),Wt(O.deck+1),Ke(at)]},{type:"ammo",x:Yt(yt.main-6),y:Wt(O.deck+4),z:Ke(at+7)},{type:"planks",x:Yt(72),y:Wt(O.hold+4),z:Ke(8)},{type:"food",x:Yt(42),y:Wt(O.hold+4),z:Ke(xi-8)}];for(let t of ic)for(let e of[-1,1]){let i=Ee(t,O.deck+1);s.push({type:"cannon",side:e,x:Yt(t+.5),y:Wt(O.deck+2.5),z:Ke(at+e*(i-4)),stand:[Yt(t+.5),Wt(O.deck+1),Ke(at+e*(i-9))]})}return s},Nd=()=>({x:Yt(yt.hatch0),z:Ke(Math.round(at)),deckY:Wt(O.deck+1)+.02,holdY:Wt(O.hold+1)+.02,cx:Yt((yt.hatch0+yt.hatch1)/2),up:Yt(yt.hatch0-2.5),down:Yt(yt.hatch0+2)}),Fd=()=>[-1,1].map(s=>({side:s,x:Yt(yt.main-14.5),z:Ke(at+s*(Ee(yt.main-15,10)+1))}));var nc=Math.PI*2,je=s=>{for(;s>Math.PI;)s-=nc;for(;s<-Math.PI;)s+=nc;return s};function Hx(s){let t=document.createElement("canvas");t.width=32,t.height=32;let e=t.getContext("2d"),i=s==="enemy"?"#2c2a2e":s==="ghost"?"#9fc8b4":"#efe2bf",n=s==="enemy"?"#1e1c20":s==="ghost"?"#7aa894":"#d8c8a0";e.fillStyle=i,e.fillRect(0,0,32,32),e.fillStyle=n;for(let o=0;o<32;o+=8)e.fillRect(o,0,1,32);if(e.fillRect(0,0,32,1),e.fillRect(0,31,32,1),s==="player"&&(e.fillStyle="#d8c494",e.fillRect(19,9,5,6),e.fillStyle="#b8a070",e.fillRect(19,9,5,1)),s==="enemy"&&(e.fillStyle="#e8e4dc",["..XXXX..",".XXXXXX.","XX..X..X","XX..X..X",".XXXXXX.","..X.X.X.","X......X",".X....X.","..XXXX..",".X....X."].forEach((a,l)=>[...a].forEach((h,c)=>{h==="X"&&e.fillRect(12+c,10+l,1,1)}))),s==="ghost"){for(let o=0;o<70;o++)e.clearRect(Math.random()*32|0,Math.random()*32|0,1+(Math.random()*3|0),1+(Math.random()*2|0));e.clearRect(26,20,6,12),e.clearRect(0,26,8,6)}let r=new Vn(t);return r.magFilter=r.minFilter=Le,r.colorSpace=Ve,r}var Dr=null;function Od(s){if(Dr||(Dr=[]),Dr[s])return Dr[s];let t=[];for(let i=4;i<=108;i+=2)t.push(new ct(Yt(i),(Ee(i,s)-1.2)*q));for(let i=108;i>=4;i-=2)t.push(new ct(Yt(i),-(Ee(i,s)-1.2)*q));let e=new ta(new Tr(t));return e.rotateX(Math.PI/2),Dr[s]=e,e}var wi=class{constructor(t,e,i,n,r,o={}){this.game=t,this.style=e,this.grid=zd(e),this.grid.buildAll(),this.root=new ae,this.root.rotation.order="YZX",this.root.add(this.grid.group),this.x=i,this.z=n,this.y=0,this.yaw=r,this.pitch=0,this.roll=0,this.speed=0,this.turn=0,this.drift=0,this.rudder=0,this.anchor=!1,this.anchorT=0,this.sail={h:0,angle:0},this.sailShown=0,this.water=0,this.leaks=0,this.leakT=0,this.sinking=0,this.dead=!1,this.fires=new Map,this.fireT=0,this.stations=Ud().map((l,h)=>({...l,ship:this,user:null,index:h})),this.netId=o.netId??t.newId(),this.remote=!!o.remote,this.hullMul=1,this.leakMul=1,this.ladders=Fd(),this.hatch=Nd(),this.ammo=30,this.planks=12,this.food=8,this.cargo=[],this.maxSpeed=e==="ghost"?11:9.5,this.lights=[],this.buildRig(),this.buildCannons(),this.buildWheel(),this.waterMesh=new Dt(Od(O.hold+1),new we({color:"#2a6a8a",transparent:!0,opacity:.85})),this.root.add(this.waterMesh),this.waterMesh.visible=!1,this.shell=[];let a=this.grid;for(let l=0;l<=O.deck-1;l++)for(let h=0;h<xi;h++)for(let c=0;c<Ni;c++){if(!a.orig[a.idx(c,l,h)])continue;let d=Math.abs(h-at),f=Ee(c,l);(d>f-1.3||l<=1||c<=3)&&this.shell.push(a.idx(c,l,h))}this.lightPts=[];for(let[l,h,c]of[[4,O.qd+6,3],[4,O.qd+6,xi-4],[yt.main+2,O.deck+9,at],[18,O.qd-2,at],[yt.hatch0-6,O.deck-2,at+5],[76,O.deck-2,at-5]])this.lightPts.push({p:new x(Yt(l),Wt(h),Ke(c)),col:e==="ghost"?"#40ffa0":"#ffc060",r:9});this.updateTransform(0)}buildRig(){let t=Hx(this.style),e=new we({map:t,side:li,alphaTest:.5,transparent:!1,flatShading:!0,emissive:this.style==="ghost"?"#1a4a3a":"#2a2620"});this.sails=[];let i=new we({color:this.style==="ghost"?"#2c3834":"#4a2e1a"}),n=[[yt.main,60,7.6,6.4],[yt.main,88,6,5.6],[yt.fore,54,7,5.8],[yt.fore,78,5.4,4.6]];for(let[f,m,y,g]of n){let p=new ae;p.position.set(Yt(f)+q,Wt(m),0);let M=new Dt(new Pe(.3,.3,y+.8),i);p.add(M);let v=new yi(y,g,6,6);v.rotateY(Math.PI/2),v.translate(.3,-g/2,0);let _=v.attributes.position.array.slice(),A=new Dt(v,e);p.add(A),this.root.add(p),this.sails.push({pivot:p,mesh:A,base:_,w:y,h:g})}{let f=[Yt(Ni-3),Wt(O.fc+10)],m=[Yt(yt.fore+.5)+(Yt(Ni-1)-Yt(yt.fore+.5))*.25,Wt(84)+(Wt(O.fc+9)-Wt(84))*.25],y=[Yt(103),Wt(O.fc+6)],g=new ge;g.setAttribute("position",new se([f[0],f[1],0,m[0],m[1],0,y[0],y[1],0],3)),g.setAttribute("uv",new se([1,0,.5,1,0,0],2)),g.computeVertexNormals(),this.jib=new Dt(g,e),this.jib.castShadow=!0,this.root.add(this.jib)}let r=[],o=(f,m)=>r.push(f[0],f[1],f[2],m[0],m[1],m[2]),a={main:Yt(yt.main+.5),fore:Yt(yt.fore+.5)};for(let[f,m,y]of[[a.main,yt.main,94],[a.fore,yt.fore,82]])for(let g of[-1,1]){for(let p of[-6,-3,0]){let M=m+p-2,v=Ee(M,O.deck+4)-.6,_=[Yt(M),Wt(O.deck+4),g*v*q];o([f,Wt(y-18),g*.15],_),o([f,Wt(y),g*.12],[Yt(M),Wt(O.deck+4),g*v*q])}for(let p=1;p<9;p++){let M=p/10,v=[f+(Yt(m-8)-f)*M,Wt(O.deck+4)+(Wt(y-18)-Wt(O.deck+4))*(1-M),g*(.15+(Ee(m-8,O.deck+4)-.6)*q*M)],_=[f+(Yt(m-2)-f)*M,v[1],g*(.15+(Ee(m-2,O.deck+4)-.6)*q*M)];o(v,_)}}o([a.fore,Wt(84),0],[Yt(Ni-1),Wt(O.fc+9),0]),o([a.main,Wt(96),0],[a.fore,Wt(84),0]),o([a.main,Wt(96),0],[Yt(4),Wt(O.qd+6),0]);let l=new ge;l.setAttribute("position",new se(r,3)),this.rigLines=new Us(l,new wr({color:this.style==="ghost"?"#3a5a4a":"#2a1e14"})),this.root.add(this.rigLines);let h=document.createElement("canvas");h.width=16,h.height=10;let c=h.getContext("2d");c.fillStyle=this.style==="player"?"#a01e1e":this.style==="ghost"?"#2a8a5a":"#141414",c.fillRect(0,0,16,10),c.fillStyle=this.style==="player"?"#f0c440":"#e8e4dc";for(let[f,m]of[[7,2],[8,2],[6,3],[7,3],[8,3],[9,3],[6,4],[9,4],[7,5],[8,5],[4,7],[11,7],[5,6],[10,6],[4,1],[11,1]])c.fillRect(f,m,1,1);this.style==="ghost"&&(c.clearRect(12,0,4,3),c.clearRect(13,6,3,4),c.clearRect(10,8,2,2));let u=new Vn(h);u.magFilter=u.minFilter=Le,u.colorSpace=Ve;let d=new yi(2.4,1.5,8,2);d.translate(-1.2,0,0),this.flag=new Dt(d,new we({map:u,side:li,alphaTest:.5})),this.flag.position.set(a.main,Wt(97.5),0),this.flagBase=d.attributes.position.array.slice(),this.root.add(this.flag)}buildCannons(){this.cannons=[];let t=new we({color:this.style==="ghost"?"#1e3a30":"#26262c"}),e=new we({color:"#5a3820"});for(let i of this.stations.filter(n=>n.type==="cannon")){let n=new ae;n.position.set(i.x,Wt(O.deck+1),i.z);let r=new Dt(new Pe(.9,.4,1.1),e);r.position.y=.2,n.add(r);let o=new ae;o.position.y=.55,n.add(o);let a=new ae;o.add(a);let l=new Dt(new Pe(.42,.42,1.9),t);l.position.z=.35,a.add(l);let h=new Dt(new Pe(.52,.52,.18),t);h.position.z=1.25,a.add(h),n.rotation.y=i.side>0?0:Math.PI,this.root.add(n),i.cannon={base:n,yawG:o,pitchG:a,yaw:0,pitch:.05,loaded:!0,recoil:0,cool:0},this.cannons.push(i)}}buildWheel(){let t=this.stations.find(r=>r.type==="helm"),e=new ae;e.position.set(t.x-.25,t.y+.25,t.z);let i=new we({color:"#7a4a28"}),n=new we({color:"#c09a3a"});for(let r=0;r<8;r++){let o=r/8*nc,a=new Dt(new Pe(.08,1.3,.08),i);a.rotation.x=o,e.add(a);let l=new Dt(new Pe(.1,.12,.38),i);l.position.set(0,Math.cos(o)*.5,Math.sin(o)*.5),l.rotation.x=o,e.add(l)}e.add(new Dt(new Pe(.18,.18,.18),n)),e.scale.setScalar(.8),this.wheel=e,this.root.add(e)}get fwd(){return new x(Math.cos(this.yaw),0,-Math.sin(this.yaw))}velocity(){let t=this.fwd;return new x(t.x*this.speed,0,t.z*this.speed)}sinkDepth(){return Math.pow(this.water,1.4)*2.6+this.sinking}waterLocalY(){return wn+(O.hold+1)*q+this.water*(O.deck-O.hold-1)*q}update(t,e){let i=this.game;if(this.remote){this.updatePuppet(t,e);return}let n=i.wind;this.sailShown=le(this.sailShown,this.sail.h,Math.min(1,t*1.5));let r=this.yaw+this.sail.angle*.9,o=Math.cos(je(n.dir-r)),a=Math.cos(je(n.dir-this.yaw)),l=Kt(.28+.72*(o*.6+.4)*(a>-.6?1:.5),.05,1);this.eff=this.ai?Math.max(l,.7):l;let h=this.sailShown*this.eff*this.maxSpeed*n.str;this.anchor&&(h=0);let c=h>this.speed?.55:.9;this.speed=le(this.speed,h,Math.min(1,t*c*(this.anchor?3:.35))),this.anchor&&(this.anchorT+=t);let u=this.rudder*(.12+.88*Kt(this.speed/5,0,1))*.22*(this.anchor?.3:1);this.turn=le(this.turn,u,Math.min(1,t*1.2)),this.yaw=je(this.yaw+this.turn*t);let d=this.fwd;this.x+=d.x*this.speed*t,this.z+=d.z*this.speed*t,this.groundCheck(t);let f=-d.z,m=d.x,y=ie(this.x+d.x*11,this.z+d.z*11,e),g=ie(this.x-d.x*12,this.z-d.z*12,e),p=ie(this.x+f*3.5,this.z+m*3.5,e),M=ie(this.x-f*3.5,this.z-m*3.5,e),v=(y+g+p+M)/4;this.y=le(this.y,v*.8-this.sinkDepth(),Math.min(1,t*2.5)),this.pitch=le(this.pitch,Math.atan2(y-g,23)*.9+(this.sinking?-this.sinking*.08:0),Math.min(1,t*2)),this.roll=le(this.roll,Math.atan2(p-M,7)*.6+this.turn*.35+this.water*.06+(this.sinking?this.sinking*.05:0),Math.min(1,t*2)),this.leakT-=t,this.leakT<=0&&(this.leakT=.35,this.countLeaks()),this.sinking?(this.sinking+=t*.35,this.sinking>9&&(this.dead=!0)):(this.water=Kt(this.water+this.leaks*4e-4*this.leakMul*t*(1+this.water*.6),0,1),this.water>=1&&(this.sinking=.001,this.game.onShipSinking(this))),this.fireT-=t,this.fireT<=0&&this.fires.size&&(this.fireT=.25,this.updateFire());for(let _ of this.cannons){let A=_.cannon;A.cool=Math.max(0,A.cool-t),A.recoil=Math.max(0,A.recoil-t*2.5)}this.updateTransform(e),this.grid.flush(4)}updatePuppet(t,e){let i=this.net;if(i){let n=Math.min(1,t*10);this.x=le(this.x,i.x,n),this.z=le(this.z,i.z,n),this.y=le(this.y,i.y,n),this.yaw=je(this.yaw+je(i.yaw-this.yaw)*n),this.pitch=le(this.pitch,i.pitch,n),this.roll=le(this.roll,i.roll,n)}this.sailShown=le(this.sailShown,this.sail.h,Math.min(1,t*1.5));for(let n of this.cannons){let r=n.cannon;r.recoil=Math.max(0,r.recoil-t*2.5),r.cool=Math.max(0,r.cool-t)}this.updateTransform(e),this.grid.flush(8)}netState(){let t=[],e=0;for(let i of this.fires.keys()){if(e++>40)break;t.push(i)}return{id:this.netId,st:this.style,x:+this.x.toFixed(2),z:+this.z.toFixed(2),y:+this.y.toFixed(2),yaw:+this.yaw.toFixed(3),pitch:+this.pitch.toFixed(3),roll:+this.roll.toFixed(3),sp:+this.speed.toFixed(2),r:+this.rudder.toFixed(2),sh:+this.sail.h.toFixed(2),sa:+this.sail.angle.toFixed(2),an:this.anchor?1:0,w:+this.water.toFixed(3),sk:+this.sinking.toFixed(2),lk:+this.leaks.toFixed(1),am:this.ammo,pl:this.planks,fd:this.food,ef:+(this.eff||0).toFixed(2),hm:this.hullMul,c:this.cannons.map(i=>[+i.cannon.yaw.toFixed(2),+i.cannon.pitch.toFixed(2),i.cannon.loaded?1:0,i.cannon.loading?1:0]),f:t,ai:this.ai?1:0}}applyNet(t){this.net=t,this.speed=t.sp,this.rudder=t.r,this.sail.h=t.sh,this.sail.angle=t.sa,this.anchor=!!t.an,this.water=t.w,t.sk&&!this.sinking&&(this.sinking=t.sk),this.sinking=t.sk,this.leaks=t.lk,this.ammo=t.am,this.planks=t.pl,this.food=t.fd,this.eff=t.ef,t.c.forEach((e,i)=>{let n=this.cannons[i]&&this.cannons[i].cannon;n&&(this.cannons[i].user&&this.cannons[i].user.local||(n.yaw=e[0],n.pitch=e[1]),n.loaded=!!e[2],n.loading=!!e[3])}),this.fires=new Map(t.f.map(e=>[e,1]))}updateTransform(t){this.root.position.set(this.x,this.y,this.z),this.root.rotation.set(this.roll,this.yaw,this.pitch),this.root.updateMatrixWorld(!0);for(let e=0;e<this.sails.length;e++){let i=this.sails[e];i.pivot.rotation.y=-this.sail.angle*.9;let n=Kt(this.sailShown*1.15-(e%2?.15:0),.04,1),r=i.mesh.geometry.attributes.position,o=(this.eff||.5)*(this.style==="ghost"?.6:1)*n;for(let a=0;a<r.count;a++){let l=i.base[a*3],h=i.base[a*3+1],c=i.base[a*3+2],u=c/(i.w/2),d=-h/i.h,f=-d*i.h*n,m=(1-u*u)*Math.sin(Math.min(1,d)*Math.PI*.85)*1.3*o+Math.sin(t*3+u*4+d*5)*.04;r.setXYZ(a,l+m,f,c*(.82+.18*n))}r.needsUpdate=!0,i.mesh.geometry.computeVertexNormals()}if(this.jib&&(this.jib.visible=this.sailShown>.08),this.wheel&&(this.wheel.rotation.x=-this.rudder*Math.PI*1.5),this.flag){this.flag.rotation.y=je(this.game.wind.dir-this.yaw+Math.PI);let e=this.flag.geometry.attributes.position;for(let i=0;i<e.count;i++){let n=this.flagBase[i*3];e.setZ(i,Math.sin(t*7+n*3)*.12*(-n/2.4))}e.needsUpdate=!0}for(let e of this.cannons){let i=e.cannon;i.yawG.rotation.y=i.yaw*(e.side>0,1),i.pitchG.rotation.x=-i.pitch,i.pitchG.position.z=-i.recoil*.4}if(this.water>.01&&!this.dead){let e=this.waterLocalY(),i=Kt(Math.round((e-wn)/q),O.hold+1,O.deck);this.waterMesh.geometry=Od(i),this.waterMesh.position.y=e+Math.sin(t*1.3)*.03,this.waterMesh.visible=!0}else this.waterMesh.visible=!1}countLeaks(){let t=this.grid,e=(this.sinkDepth()+.15-wn)/q,i=0,n=[];for(let r of this.shell){if(t.d[r])continue;let o=Math.floor(r/(t.sx*t.sz));o<e?(i++,n.length<200&&n.push(r)):o<O.deck-2&&(i+=.3,n.length<200&&Math.random()<.3&&n.push(r))}this.leaks=i,this.holes=n}toWorld(t,e=new x){return e.copy(t).applyMatrix4(this.root.matrixWorld)}toLocal(t,e=new x){return this._inv=this._inv||new qt,this._inv.copy(this.root.matrixWorld).invert(),e.copy(t).applyMatrix4(this._inv)}insideHull(t,e=0){let i=t.x/q+Ni/2,n=(t.y-wn)/q;if(n<-1||n>34)return!1;let r=Ee(i,Kt(n,0,30));return r>0&&Math.abs(t.z)<r*q+e}damageAt(t,e,i,n){e*=this.hullMul;let[r,o,a]=this.grid.toVox(t),l=this.grid.blast(r,o,a,e,i),h=new x,c=0,u=null;for(let d of l)if(d.m===E.powder&&!u&&(u=d),ci[d.m].burn>.5&&Math.random()<.04*i&&this.ignite(d.x,d.y,d.z,!0),c++<26){this.grid.toLocal(d.x,d.y,d.z,h);let f=this.toWorld(h),m=f.clone().sub(this.toWorld(t)).normalize();n.debris.spawn(f,d.m,{x:m.x*6+(Math.random()-.5)*5,y:3+Math.random()*6,z:m.z*6+(Math.random()-.5)*5})}if(u){this.grid.toLocal(u.x,u.y,u.z,h);let d=h.clone();n.later(()=>n.explosion(this.toWorld(d),2.6,this),.12)}return l.length}ignite(t,e,i,n){let r=this.grid,o=r.get(t,e,i);if(!o||ci[o].burn<=0)return;let a=r.idx(t,e,i);this.fires.has(a)||this.fires.set(a,6+Math.random()*6),n||(this.fireT=0)}updateFire(){let t=this.grid,e=[];for(let[i,n]of this.fires){let r=i%t.sx,o=Math.floor(i/t.sx)%t.sz,a=Math.floor(i/(t.sx*t.sz)),l=t.d[i];if(!l){this.fires.delete(i);continue}let h=wn+a*q;if(this.water>.05&&h<this.waterLocalY()){this.fires.delete(i);continue}let c=n-.25*ci[l].burn;if(c<=0){this.fires.delete(i),t.set(r,a,o,Math.random()<.3?E.char:0),l===E.powder&&e.push(["boom",r,a,o]);continue}if(this.fires.set(i,c),this.fires.size+e.length<260)for(let[u,d,f]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){let m=t.get(r+u,a+d,o+f);m&&ci[m].burn>0&&Math.random()<.018*ci[m].burn*(d>0?2.2:1)&&e.push([r+u,a+d,o+f])}}for(let i of e)if(i[0]==="boom"){let n=this.grid.toLocal(i[1],i[2],i[3]);this.game.explosion(this.toWorld(n),2.4,this)}else this.ignite(i[0],i[1],i[2],!0)}extinguish(t,e){let[i,n,r]=this.grid.toVox(t),o=e/q,a=0;for(let l of[...this.fires.keys()]){let h=this.grid,c=l%h.sx,u=Math.floor(l/h.sx)%h.sz,d=Math.floor(l/(h.sx*h.sz));Math.hypot(c-i,d-n,u-r)<o&&(this.fires.delete(l),a++)}return a}repairAt(t,e){let i=this.grid,[n,r,o]=i.toVox(t),a=Math.ceil(e/q),l=0;for(let h=-a;h<=a;h++)for(let c=-a;c<=a;c++)for(let u=-a;u<=a;u++){let d=Math.round(n+u),f=Math.round(r+h),m=Math.round(o+c);if(!i.in(d,f,m)||Math.hypot(u,h,c)>a)continue;let y=i.idx(d,f,m);!i.d[y]&&i.orig[y]?(i.set(d,f,m,i.orig[y]===E.powder?0:i.orig[y]),l++):i.d[y]===E.char&&(i.set(d,f,m,i.orig[y]||E.plank),l++)}return l}findHole(t,e){let i=this.grid,[n,r,o]=i.toVox(t),a=Math.ceil(e/q),l=null,h=1e9;for(let c=-a;c<=a;c+=1)for(let u=-a;u<=a;u+=1)for(let d=-a;d<=a;d+=1){let f=Math.round(n+d),m=Math.round(r+c),y=Math.round(o+u);if(!i.in(f,m,y))continue;let g=i.idx(f,m,y);if(!i.d[g]&&i.orig[g]&&i.orig[g]!==E.powder||i.d[g]===E.char){let p=d*d+c*c+u*u;p<h&&(h=p,l=i.toLocal(f,m,y))}}return l}groundCheck(t){let e=this.game.world,i=this.fwd,n=-i.z,r=i.x,o=[[12,0],[9,2.4],[9,-2.4],[0,3.4],[0,-3.4],[-12,2.6],[-12,-2.6],[-14,0]];for(let[a,l]of o){let h=this.x+i.x*a+n*l,c=this.z+i.z*a+r*l;if(e.height(h,c)>-1.6-this.sinkDepth()*.3){let d=Math.abs(this.speed),f=this.x-h,m=this.z-c,y=Math.hypot(f,m)||1;if(this.x+=f/y*(.25+d*t*2),this.z+=m/y*(.25+d*t*2),a>0&&this.speed>0?this.speed*=-.25:a<0&&this.speed<0?this.speed*=-.25:this.speed*=.6,d>2.2&&(!this.lastHit||this.game.time-this.lastHit>.8)){this.lastHit=this.game.time;let g=new x(a*.95,.3+Math.random()*.5,l*.9);this.damageAt(g,1.6+d*.25,1.4,this.game),this.game.onShipCrash(this,d)}break}}}dispose(t){t.remove(this.root),this.grid.dispose()}};var Te=null,$n=null,Zn=null,Vs=null,zr=null,pa=.4,Gs=!1,ui={};function Hd(){if(zr)return zr;zr=Te.createBuffer(1,Te.sampleRate*2,Te.sampleRate);let s=zr.getChannelData(0);for(let t=0;t<s.length;t++)s[t]=Math.random()*2-1;return zr}function Vd(s,t,e,i,n){s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(i,t+e),s.gain.exponentialRampToValueAtTime(1e-4,t+e+n)}function he(s,t,e,i,n,r,o=.005,a=Zn){let l=Te.createBufferSource();l.buffer=Hd(),l.loop=!0;let h=Te.createBiquadFilter();h.type=e,h.frequency.value=i,h.Q.value=n;let c=Te.createGain();return Vd(c,s,o,r,t),l.connect(h).connect(c).connect(a),l.start(s,Math.random()),l.stop(s+o+t+.05),{f:h,g:c}}function De(s,t,e,i,n,r,o=.005,a=Zn){let l=Te.createOscillator();l.type=e,l.frequency.setValueAtTime(i,s),n&&l.frequency.exponentialRampToValueAtTime(n,s+t);let h=Te.createGain();Vd(h,s,o,r,t),l.connect(h).connect(a),l.start(s),l.stop(s+o+t+.05)}var xt={init(){if(Te){Te.state==="suspended"&&Te.resume();return}try{Te=new(window.AudioContext||window.webkitAudioContext)}catch{return}$n=Te.createGain(),$n.gain.value=.8,$n.connect(Te.destination),Zn=Te.createGain(),Zn.gain.value=pa,Zn.connect($n),Vs=Te.createGain(),Vs.gain.value=.9*Math.min(1,pa*1.6),Vs.connect($n);let s=(t,e,i,n)=>{let r=Te.createBufferSource();r.buffer=Hd(),r.loop=!0;let o=Te.createBiquadFilter();o.type=t,o.frequency.value=e,o.Q.value=i;let a=Te.createGain();return a.gain.value=n,r.connect(o).connect(a).connect(Vs),r.start(),{f:o,g:a}};ui.sea=s("lowpass",420,.6,.18),ui.wash=s("bandpass",900,.7,.05),ui.wind=s("bandpass",700,2.5,.02),ui.under=s("lowpass",160,.8,0),ui.fire=s("highpass",2500,.5,0),ui.rain=s("highpass",1800,.4,0),$e.init()},get ctx(){return Te},setVolumes(s,t){pa=s*.8,Zn&&(Zn.gain.value=pa),Vs&&(Vs.gain.value=.9*Math.min(1,s*1.3)),$e.vol=.6*t,$e.refresh()},toggleMute(){return Gs=!Gs,$n&&($n.gain.value=Gs?0:.8),$e.setMuted(Gs),Gs},ambience(s){if(!Te)return;let t=Te.currentTime,e=.5+.5*Math.sin(t*.45)*Math.sin(t*.17+1);ui.sea.g.gain.setTargetAtTime(s.under?.02:.1+e*.12,t,.3),ui.sea.f.frequency.setTargetAtTime(s.under?200:300+e*300,t,.3),ui.wash.g.gain.setTargetAtTime(s.under?0:.015+s.speed*.008+e*.02,t,.3),ui.wind.g.gain.setTargetAtTime(s.under?0:.008+s.wind*.03+(s.high?.03:0),t,.5),ui.wind.f.frequency.setTargetAtTime(500+s.wind*500+Math.sin(t*.7)*150,t,.5),ui.under.g.gain.setTargetAtTime(s.under?.25:0,t,.2),ui.fire.g.gain.setTargetAtTime(Math.min(.06,s.fire*.002),t,.3),ui.rain.g.gain.setTargetAtTime(s.under?0:(s.rain||0)*.07,t,.8)},play(s,t=1,e=0){if(!Te||Gs)return;let i=t/(1+e*e*.0012);if(i<.01)return;let n=Te.currentTime,r=Vx[s];r&&r(n,i)}},Vx={cannon(s,t){De(s,.6,"sine",90,30,.9*t,.003),he(s,.9,"lowpass",900,.7,.8*t,.002),he(s+.02,.25,"bandpass",2400,.8,.25*t)},boom(s,t){De(s,1,"sine",70,25,1*t,.003),he(s,1.4,"lowpass",600,.6,1*t,.002),he(s,.5,"bandpass",1500,.6,.4*t)},hit(s,t){he(s,.35,"bandpass",700,1.2,.7*t);for(let e=0;e<4;e++)he(s+.03+e*.04*Math.random(),.08,"bandpass",1800+Math.random()*1500,4,.3*t);De(s,.2,"triangle",160,70,.4*t)},splash(s,t){he(s,.7,"bandpass",1300,.6,.45*t,.01),he(s+.05,.5,"lowpass",500,.6,.3*t,.02)},smallSplash(s,t){he(s,.25,"bandpass",1800,.8,.2*t,.005)},creak(s,t){let e=140+Math.random()*120;De(s,.5+Math.random()*.5,"sawtooth",e,e*(.8+Math.random()*.4),.025*t,.15)},bell(s,t){for(let[e,i]of[[880,.2],[1320,.08],[2200,.05]])De(s,1.8,"sine",e,0,i*t,.002)},step(s,t){he(s,.06,"bandpass",500+Math.random()*200,2,.12*t,.003)},stepSand(s,t){he(s,.09,"highpass",2500,.5,.06*t,.005)},swim(s,t){he(s,.3,"bandpass",900,.8,.08*t,.05)},swing(s,t){he(s,.18,"bandpass",2400,1.5,.18*t,.03)},slash(s,t){he(s,.1,"bandpass",1500,2,.3*t),De(s,.12,"square",300,100,.05*t)},clang(s,t){for(let e of[1200,1830,2700])De(s,.4,"triangle",e,e*.98,.07*t,.001)},bones(s,t){for(let e=0;e<6;e++){let i=s+e*.035+Math.random()*.02;he(i,.03,"bandpass",2500+Math.random()*2e3,6,.18*t,.001)}},pistol(s,t){he(s,.25,"lowpass",2500,.7,.7*t,.001),De(s,.15,"sine",200,60,.4*t)},click(s,t){De(s,.04,"square",1200,800,.06*t,.001)},dig(s,t){he(s,.15,"lowpass",700,1,.35*t,.005),he(s+.03,.1,"highpass",3e3,.5,.06*t)},hammer(s,t){De(s,.08,"triangle",500,300,.2*t,.001),he(s,.06,"bandpass",1800,2,.15*t)},scoop(s,t){he(s,.35,"bandpass",700,1,.2*t,.04)},pour(s,t){he(s,.7,"bandpass",1500,.7,.18*t,.05)},coins(s,t){for(let e=0;e<8;e++)De(s+e*.05+Math.random()*.03,.25,"triangle",2400+Math.random()*1600,0,.05*t,.001)},chest(s,t){De(s,.3,"square",180,90,.06*t),he(s,.2,"lowpass",600,1,.2*t)},hurt(s,t){De(s,.25,"sawtooth",220,110,.12*t,.005),he(s,.15,"lowpass",900,1,.2*t)},chain(s,t){for(let e=0;e<14;e++)for(let i of[1800,2600])De(s+e*.07,.06,"triangle",i+Math.random()*300,0,.03*t,.001);he(s+1,.6,"bandpass",900,.6,.3*t)},ratchet(s,t){De(s,.05,"square",600,400,.05*t,.001),he(s,.04,"bandpass",3e3,3,.06*t)},rope(s,t){he(s,.4,"bandpass",1100,3,.08*t,.02)},heart(s,t){De(s,.12,"sine",70,45,.5*t,.005),De(s+.18,.14,"sine",62,40,.4*t,.005)},eat(s,t){for(let e=0;e<3;e++)he(s+e*.12,.07,"bandpass",1200,2,.1*t)},ghost(s,t){for(let e of[110,116,165])De(s,3,"sine",e,e*.94,.08*t,.8);he(s,3,"bandpass",600,8,.08*t,.8)},horn(s,t){for(let e of[98,147])De(s,2.2,"sawtooth",e,e*.98,.05*t,.3)},thunder(s,t){let e=.3+Math.random()*1.2;De(s+e,2.5,"sine",55,28,.9*t,.05),he(s+e,3.2,"lowpass",260,.7,1*t,.04),he(s+e,.6,"bandpass",1200,.5,.35*t,.005)},ui(s,t){De(s,.06,"triangle",900,1200,.06*t,.002)},sting(s,t){[523,659,784,1046].forEach((e,i)=>De(s+i*.09,.5,"triangle",e,0,.08*t,.005))}},Gx=["title","day","calm","night","cursed","battle","island","outpost","ghost","shanty"],Bd=["treasure","death"],Ws=new Set(["battle","ghost"]),$e={els:{},cur:null,want:null,vol:.55,muted:!1,mood:null,pend:null,pendT:0,since:0,duck:1,init(){for(let s of[...Gx,...Bd])this.probe(s,["mp3","ogg"])},probe(s,t){if(!t.length)return;let e=new window.Audio;e.preload="auto",e.loop=!Bd.includes(s),e.volume=0,e._lvl=0,e.addEventListener("canplaythrough",()=>{this.els[s]||(this.els[s]=e,this.mood&&this.pick())},{once:!0}),e.addEventListener("error",()=>this.probe(s,t.slice(1)),{once:!0}),e.src="music/"+s+"."+t[0]},setMuted(s){this.muted=s;for(let t in this.els)this.apply(this.els[t])},set(s){let t=performance.now()/1e3;if(s==="title"||!this.mood){this.pend=null,this.mood!==s&&this.commit(s,t);return}if(s===this.mood){this.pend=null;return}if(this.pend!==s){this.pend=s,this.pendT=t;return}let e=t-this.pendT,i=t-this.since,n=Ws.has(s)&&!Ws.has(this.mood),r=Ws.has(this.mood)&&!Ws.has(s),o=n?1.2:r?12:Math.max(8,25-i);e>=o&&this.commit(s,t)},commit(s,t){let e=this.mood;this.mood=s,this.since=t,this.pend=null,this.pick(e)},pick(s=this.mood){let t=this.mood;if(!t)return;let e={title:["title"],day:["day"],calm:["calm","day"],night:["night"],cursed:["cursed","night"],battle:["battle"],island:["island","day"],ghost:["ghost","battle","cursed"],outpost:this.preferShanty?["shanty","outpost","day"]:["outpost","shanty","day"]};t==="outpost"&&this.cur!=="outpost"&&this.cur!=="shanty"&&(this.preferShanty=Math.random()<.5);let i=(e[t]||[t]).find(n=>this.els[n])||null;this.switchTo(i,Ws.has(t)&&!Ws.has(s))},switchTo(s,t){if(this.cur===s)return;let e=this.els[this.cur];this.cur=s,e&&this.fade(e,0,t?1.2:4,!0);let i=this.els[s];if(!i)return;let n=performance.now()/1e3;if(!i._stopT||n-i._stopT>90)try{i.currentTime=0}catch{}clearTimeout(i._d);let r=()=>{if(this.cur!==s)return;let o=i.play();o&&o.catch&&o.catch(()=>{}),this.fade(i,1,t?1:4.5,!1)};t||!e?r():i._d=setTimeout(r,1500)},apply(s){s.volume=this.muted?0:Math.max(0,Math.min(1,s._lvl*this.vol*(s===this.els[this.cur]?this.duck:1)))},fade(s,t,e,i){clearInterval(s._f);let n=s._lvl,r=performance.now();s._f=setInterval(()=>{let o=Math.min(1,(performance.now()-r)/(e*1e3)),a=o*o*(3-2*o);s._lvl=n+(t-n)*a,this.apply(s),o>=1&&(clearInterval(s._f),i&&(s.pause(),s._stopT=performance.now()/1e3))},50)},refresh(){for(let s in this.els)this.apply(this.els[s])},sting(s){let t=this.els[s];if(!t||this.muted)return;try{t.currentTime=0}catch{}t._lvl=1,this.apply(t);let e=t.play();e&&e.catch&&e.catch(()=>{}),this.duckTo(.2,.4),clearTimeout(this._st);let i=isFinite(t.duration)&&t.duration>0?t.duration:6;this._st=setTimeout(()=>this.duckTo(1,3),Math.max(1,i-1.5)*1e3)},duckTo(s,t){clearInterval(this._dk);let e=this.duck,i=performance.now();this._dk=setInterval(()=>{let n=Math.min(1,(performance.now()-i)/(t*1e3));this.duck=e+(s-e)*n;let r=this.els[this.cur];r&&this.apply(r),n>=1&&clearInterval(this._dk)},50)},tick(){}};var sc=new x,Jn=class{constructor(t,e=0,i=.42){let n=xd(t,e);for(let a in n)n[a].buildAll();this.root=new ae;let r=new ae;r.scale.setScalar(i),this.root.add(r),this.body=new ae,r.add(this.body);let o=6*q;if(n.body.group.position.set(0,o,0),this.body.add(n.body.group),this.head=n.head.group,this.head.position.set(0,o+6*q,0),this.body.add(this.head),this.legL=new ae,this.legL.position.set(0,o,-q),this.legL.add(n.legL.group),this.body.add(this.legL),this.legR=new ae,this.legR.position.set(0,o,q),this.legR.add(n.legR.group),this.body.add(this.legR),this.armL=new ae,this.armL.position.set(0,o+6*q,-2.5*q),this.armL.add(n.armL.group),this.body.add(this.armL),this.armR=new ae,this.armR.position.set(0,o+6*q,2.5*q),this.armR.add(n.armR.group),this.body.add(this.armR),t!=="merchant"){let a=new Dt(new Pe(.08/i*.42,.08/i*.42,.9/i*.42),new we({color:t==="cursed"||t==="captain"?"#5ac8a0":"#9a9088"}));a.position.set(.1,-.7,.35),this.armR.add(a)}this.root.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),this.phase=Math.random()*6}animate(t,e,i){this.phase+=t*e*3.2;let n=Math.sin(this.phase)*Math.min(1,e/2.5)*.7;this.legL.rotation.z=n,this.legR.rotation.z=-n,this.armL.rotation.z=-n*.8,this.armR.rotation.z=i>0?-2.2*Math.sin(i*Math.PI)-.4:n*.8,this.head.rotation.y=Math.sin(this.phase*.3)*.1}},Xs=class{constructor(t,e,i,n="skeleton",r={}){this.game=t,this.kind=n,this.cursed=n==="cursed"||n==="captain",this.human=n==="pirate",this.id=r.id??t.newId(),this.remote=!!r.remote;let o=n==="captain";this.fig=new Jn(n,n==="pirate"?3:0,o?.66:.42),this.ship=r.ship||null,this.pos=new x(e,r.y??(this.ship?0:t.world.height(e,i)),i),this.home=this.pos.clone(),this.yaw=Math.random()*6,this.vy=0,this.max=o?700*(1+.35*(t.players.length-1)):this.cursed?110:65,this.hp=this.max,this.atk=0,this.cool=0,this.state="idle",this.wander=0,this.hitT=0,this.speed=o?3:this.cursed?3.4:2.8,this.rise=r.rise??1.2,this.reach=o?3.2:2.1,this.special=6,t.scene.add(this.fig.root)}get alive(){return this.hp>0}worldPos(t=new x){return t.copy(this.pos),this.ship&&this.ship.toWorld(t,t),t}groundAt(t,e,i){if(!this.ship)return this.game.world.height(t,i);let n=this.ship.grid;for(let r=e+.6;r>e-3;r-=q)if(n.solidAt(t,r,i))return Math.floor((r+2.5)/q)*q-2.5+q;return-99}update(t){let e=this.game,i=this.pos;if(this.hitT=Math.max(0,this.hitT-t),this.remote){this.updatePuppet(t);return}if(this.ship&&(this.ship.dead||this.ship.sinking>1)){this.hp=0,this.die(!0);return}this.cool-=t,this.special-=t,this.rise>0&&(this.rise-=t,Math.random()<t*20&&e.fx.burst(this.worldPos(sc),1,"dust"));let n=this.worldPos(new x),r=e.closestPlayer(n,this.kind==="captain"?60:40),o=0,a=0,l=0;if(r){let m=r.worldPos(new x),y=this.ship?this.ship.toLocal(m.clone()):m,g=y.x-i.x,p=y.z-i.z,M=Math.hypot(g,p),v=this.ship?r.ship===this.ship:e.world.height(m.x,m.z)>-.5&&!r.swim&&!r.ship;M<30&&(v||!this.ship&&M<6)?(this.state="chase",this.yaw=Math.atan2(g,p),M>this.reach*.7&&(o=g/M,a=p/M,l=this.speed),M<this.reach&&this.cool<=0&&Math.abs(y.y-i.y)<2&&(this.cool=this.kind==="captain"?1.1:1.25,this.atk=.01,this.struck=!1,xt.play("swing",.8,e.distToCam(n))),this.kind==="captain"&&this.captainSpecial(r,m,M)):this.state="idle"}else this.state="idle";if(this.atk>0&&(this.atk+=t*2.6,this.atk>.5&&!this.struck&&(this.struck=!0,r&&r.worldPos(new x).distanceTo(n)<this.reach+.6&&r.hurt(this.kind==="captain"?26:this.cursed?18:12,"skeleton")),this.atk>=1&&(this.atk=0)),this.state==="idle"&&(this.wander-=t,this.wander<0&&(this.wander=2+Math.random()*4,this.wdir=Math.random()<.5?null:Math.random()*Math.PI*2),this.ship&&(this.wdir=null),this.wdir!=null&&(o=Math.sin(this.wdir),a=Math.cos(this.wdir),l=1.1,this.yaw=this.wdir),!this.ship&&i.distanceTo(this.home)>22)){let m=this.home.x-i.x,y=this.home.z-i.z,g=Math.hypot(m,y);o=m/g,a=y/g,l=1.4,this.yaw=Math.atan2(m,y)}this.rise>0&&(l=0);let h=i.x+o*l*t,c=i.z+a*l*t,u=this.groundAt(h,i.y,c),d=this.ship?this.ship.grid.solidAt(h,i.y+.9,c):e.propBlocks(h,i.y,c);!this.ship&&u>-.6&&u-i.y<.8&&!d&&(i.x=h,i.z=c),this.ship&&u>-50&&u-i.y<.6&&!d&&(i.x=h,i.z=c);let f=this.groundAt(i.x,i.y,i.z);if(this.vy-=20*t,i.y+=this.vy*t,i.y<f&&(i.y=f,this.vy=0),this.ship&&(i.y<-3||Math.abs(i.z)>5.5)){this.die(!0),this.hp=0;return}if(!this.ship&&i.y<ie(i.x,i.z,e.time)-1.5){this.die(!0),this.hp=0;return}this.place(t,l),this.cursed&&Math.random()<t*3&&e.fx.burst(this.worldPos(sc).add(new x(0,this.kind==="captain"?2.4:1.6,0)),1,"ghost"),Math.random()<t*.15&&xt.play("bones",.5,e.distToCam(n))}captainSpecial(t,e,i){let n=this.game;if(this.special>0)return;this.special=5+Math.random()*3;let r=this.worldPos(new x).add(new x(0,2.2,0));if(Math.random()<.55&&i>4){let a=e.clone().add(new x(0,1,0)).sub(r),l=a.length();a.normalize(),n.spawnBall(r,a.multiplyScalar(22).add(new x(0,l*.22,0)),null,{ghost:!0,small:!0}),xt.play("ghost",.5,n.distToCam(r))}else if(n.skeletons.length<14){for(let a=0;a<3;a++){let l=Math.random()*6.28;n.addSkeleton(this.pos.x+Math.cos(l)*4,this.pos.z+Math.sin(l)*4,"cursed",{ship:this.ship})}n.sayAll("captainSummons",[],"ghost"),xt.play("ghost",1,n.distToCam(r))}}place(t,e){let i=this.worldPos(sc);this.fig.root.position.set(i.x,i.y-Math.max(0,this.rise)*1.4,i.z),this.fig.root.rotation.set(0,this.yaw-Math.PI/2+(this.ship?this.ship.yaw:0),0),this.fig.animate(t,e,this.atk),this.hitT>0&&(this.fig.root.position.x+=(Math.random()-.5)*.1),this.moving=e}updatePuppet(t){this.net&&(this.pos.lerp(this.net.p,Math.min(1,t*10)),this.yaw=this.net.y,this.atk=this.net.a,this.rise=this.net.r),this.place(t,this.net?this.net.sp:0)}damage(t,e){let i=this.game;if(this.remote){i.act(i.localPlayers[0],{a:"dmg",k:"skel",id:this.id,n:t}),this.hitT=.2,i.fx.burst(this.worldPos(new x).add(new x(0,1,0)),8,"bones");return}this.hp-=t,this.hitT=.2;let n=this.worldPos(new x);if(i.fxEvent(this.human?"blood":"bones",n.x,n.y+1,n.z,8),xt.play(this.human?"hurt":"bones",this.human?.6:1,i.distToCam(n)),this.kind!=="captain"&&(this.atk=0,this.cool=Math.max(this.cool,.45)),e&&!this.ship&&this.kind!=="captain"){let r=new x().subVectors(this.pos,e).setY(0).normalize();this.pos.x+=r.x*.5,this.pos.z+=r.z*.5}this.hp<=0&&this.die()}die(t){let e=this.game,i=this.worldPos(new x);t?e.fxEvent("splash",i.x,i.y,i.z,10):(e.fxEvent(this.human?"blood":"bones",i.x,i.y+.8,i.z,this.kind==="captain"?80:this.human?14:30),e.stats.skeletons++,this.kind==="captain"?e.onCaptainDefeated(this,i):Math.random()<(this.cursed?.8:.5)&&e.spawnCoins(i,this.cursed?60:25)),e.scene.remove(this.fig.root)}remove(){this.game.scene.remove(this.fig.root)}netState(){return[this.id,["skeleton","cursed","captain","pirate"].indexOf(this.kind),this.ship?this.ship.netId:-1,+this.pos.x.toFixed(2),+this.pos.y.toFixed(2),+this.pos.z.toFixed(2),+this.yaw.toFixed(2),+this.atk.toFixed(2),+Math.max(0,this.rise).toFixed(2),+(this.moving||0).toFixed(1),Math.round(this.hp),Math.round(this.max)]}},qs=class{constructor(t,e,i={}){this.game=t,this.target=e,this.id=i.id??t.newId(),this.remote=!!i.remote;let n=da();if(n.buildAll(),this.mesh=n.group,t.scene.add(this.mesh),e){let r=e.worldPos(),o=Math.random()*Math.PI*2;this.pos=new x(r.x+Math.cos(o)*28,-1.2,r.z+Math.sin(o)*28),this.yaw=o+Math.PI}else this.pos=new x,this.yaw=0;this.hp=70,this.cool=2,this.circle=6+Math.random()*4,this.t=0,this.life=40}get alive(){return this.hp>0&&this.life>0}update(t){let e=this.game;if(this.t+=t,this.remote)this.net&&(this.pos.lerp(this.net.p,Math.min(1,t*8)),this.yaw=this.net.y);else{this.cool-=t,this.life-=t;let n=this.target;(!n||n.dead>0||!n.swim)&&(this.life=Math.min(this.life,6));let r=n?n.worldPos():this.pos,o=r.x-this.pos.x,a=r.z-this.pos.z,l=Math.hypot(o,a),h;this.cool>0||this.life<6?h=Math.atan2(a,o)+(this.life<6?Math.PI:Math.PI/2*(l<this.circle?1.3:.8)):(h=Math.atan2(a,o),l<1.6&&(this.cool=3+Math.random()*2,n.hurt(22,"shark"),e.fxEvent("blood",r.x,r.y,r.z,10),xt.play("splash",1,e.distToCam(r)))),this.yaw+=Kt(je(h-this.yaw),-2.2*t,2.2*t);let c=this.cool>0?4.5:7.5;this.pos.x+=Math.cos(this.yaw)*c*t,this.pos.z+=Math.sin(this.yaw)*c*t,e.world.height(this.pos.x,this.pos.z)>-1.5&&(this.yaw+=Math.PI*t),this.pos.y=le(this.pos.y,ie(this.pos.x,this.pos.z,e.time)-.55,t*3)}let i=ie(this.pos.x,this.pos.z,e.time);this.mesh.position.copy(this.pos),this.mesh.rotation.set(0,-this.yaw,Math.sin(this.t*6)*.05),Math.random()<t*4&&e.fx.burst(new x(this.pos.x,i,this.pos.z),1,"wake")}damage(t){let e=this.game;if(this.remote){e.act(e.localPlayers[0],{a:"dmg",k:"shark",id:this.id,n:t}),e.fx.burst(this.pos,8,"blood");return}this.hp-=t,this.cool=4,e.fxEvent("blood",this.pos.x,this.pos.y,this.pos.z,8),this.hp<=0&&this.remove()}remove(){this.game.scene.remove(this.mesh),this.hp=0}netState(){return[this.id,+this.pos.x.toFixed(2),+this.pos.y.toFixed(2),+this.pos.z.toFixed(2),+this.yaw.toFixed(2)]}},Ys=class{constructor(t,e,i={}){this.game=t,this.ship=e,this.id=i.id??t.newId(),this.remote=!!i.remote,this.n=16,this.max=1300*(1+.35*(t.players.length-1)),this.hp=this.max,this.group=new ae,t.scene.add(this.group);let n=(o,a)=>{let l=Math.ceil(o*2/q),h=new ye(l+(a?4:0),l,l,[-(l+(a?4:0))/2*q,-l/2*q,-l/2*q]),c=(l-1)/2;for(let u=0;u<l;u++)for(let d=0;d<l;d++)for(let f=0;f<l+(a?4:0);f++){let m=a?Math.min(f,l-1):f;if(Math.hypot(m-c,u-c,d-c)/(l/2)>1)continue;let g=u<c-1?E.bone:(f+u+d)%3===0?E.ghostwoodD:E.green;!a&&u>l-3&&d===Math.round(c)&&f%2===0&&(g=E.ghosttrim),h.set(f,u,d,g)}if(a){for(let u=l;u<l+4;u++)for(let d=1;d<l-2;d++)for(let f=2;f<l-2;f++)h.set(u,d,f,d<l/2-1?E.bone:E.green);h.set(l+1,l-3,2,E.ghostglass),h.set(l+1,l-3,l-3,E.ghostglass);for(let u of[1,l-2])for(let d=0;d<4;d++)h.set(l-3-d,l-1+Math.floor(d/2),u,E.bone);for(let u=l;u<l+4;u+=2)h.set(u,Math.floor(l/2)-1,2,E.shell),h.set(u,Math.floor(l/2)-1,l-3,E.shell)}return h.buildAll(),h.group};this.segs=[];for(let o=0;o<this.n;o++){let a=o===0?1.5:1.35-o*.055,l=n(Math.max(.5,a),o===0);this.group.add(l),this.segs.push({mesh:l,p:new x})}this.state="circle",this.t=0,this.attacks=0,this.ang=Math.random()*6.28,this.depth=-8;let r=e?new x(e.x,0,e.z):new x;this.head=new x(r.x+Math.cos(this.ang)*40,-8,r.z+Math.sin(this.ang)*40),this.trail=[];for(let o=0;o<200;o++)this.trail.push(this.head.clone());this.dir=0}get alive(){return this.hp>0&&!this.gone}update(t){let e=this.game,i=this.ship;if(this.t+=t,this.remote)this.net&&this.head.lerp(this.net.h,Math.min(1,t*8));else{(!i||i.dead)&&(this.state="leave");let r=i?new x(i.x,0,i.z):this.head.clone(),o;if(this.state==="circle")this.ang+=t*.35,o=new x(r.x+Math.cos(this.ang)*26,Math.sin(this.t*1.3)*2.5-.5,r.z+Math.sin(this.ang)*26),this.t>9&&(this.state="charge",this.t=0,e.sayAll("serpentAttack",[],"bad"));else if(this.state==="charge"){let h=Math.sin(this.ang)>0?1:-1,c=i.fwd,u=new x(i.x-c.z*h*4,0,i.z+c.x*h*4);if(o=this.t<1.8?new x(u.x-c.z*h*14,-6,u.z+c.x*h*14):new x(u.x,3.5-(this.t-1.8)*6,u.z),this.t>1.8&&!this.slammed&&this.head.distanceTo(u)<4){this.slammed=!0;let d=i.toLocal(this.head.clone());d.y=-.6,d.z=Math.sign(d.z)*3.1,i.damageAt(d,2.4,1.4,e);for(let f of e.players)f.ship===i&&f.dead<=0&&f.hurt(15,"serpent");e.shake=Math.max(e.shake,1.5),xt.play("boom",1,e.distToCam(this.head)),e.fxEvent("splash",this.head.x,0,this.head.z,40)}this.t>3.2&&(this.state="circle",this.t=0,this.slammed=!1,this.attacks++,this.attacks>=3+Math.floor(Math.random()*2)&&(this.state="leave"))}else o=this.head.clone().add(new x(Math.cos(this.ang)*30,-12,Math.sin(this.ang)*30)),this.head.y<-10&&(this.gone=!0,e.sayAll("serpentGone",[],""));this.hp<this.max*.3&&this.state!=="leave"&&Math.random()<t*.1&&(this.state="leave");let a=o.sub(this.head),l=this.state==="charge"?24:13;a.length()>.1&&this.head.addScaledVector(a.normalize(),Math.min(a.length(),l*t)*(a.length()>0?1:0))}this.trail[0].distanceTo(this.head)>.4&&(this.trail.unshift(this.head.clone()),this.trail.length=200);for(let r=0;r<this.n;r++){let o=this.trail[Math.min(this.trail.length-1,r*5)],a=this.trail[Math.min(this.trail.length-1,r*5+2)],l=this.segs[r];l.p.copy(o),l.mesh.position.copy(o),l.mesh.rotation.set(0,Math.atan2(-(o.z-a.z),o.x-a.x),Math.atan2(o.y-a.y,Math.hypot(o.x-a.x,o.z-a.z)));let h=ie(o.x,o.z,e.time);Math.abs(o.y-h)<1.4&&Math.random()<t*6&&e.fx.burst(new x(o.x,h,o.z),2,"splash")}}hitTest(t,e){for(let i of this.segs)if(i.p.distanceTo(t)<1.6+e)return!0;return!1}damage(t){let e=this.game;if(this.remote){e.act(e.localPlayers[0],{a:"dmg",k:"serp",id:this.id,n:t});return}this.hp-=t,e.fxEvent("blood",this.head.x,this.head.y,this.head.z,10),this.hp<=0&&(this.hp=0,this.gone=!0,e.onSerpentSlain(this))}remove(){this.game.scene.remove(this.group)}netState(){return[this.id,this.ship?this.ship.netId:-1,+this.head.x.toFixed(2),+this.head.y.toFixed(2),+this.head.z.toFixed(2),Math.round(this.hp),Math.round(this.max)]}},ma=class{constructor(t,e,i){this.game=t,this.ship=e,this.ghost=i,this.t=0,this.side=Math.random()<.5?1:-1,this.cool=3,this.board=15,e.sail.h=1,e.ai=this,this.shots=0;let n=-2.5+19*q+.02,o=[[-11.5,-2.5+29*q+.02,0],[-4,n,1.6],[.5,n,-1.6],[5,n,1.6],[9,n,-1.4]],a=i?5:4+(Math.random()<.5?1:0);this.crew=[];for(let l=0;l<a;l++){let[h,c,u]=o[l],d=i?"cursed":l%2?"pirate":"skeleton",f=t.addSkeleton(h,u,d,{ship:e,y:c,rise:0});f.yaw=Math.PI/2,this.crew.push(f)}}update(t){let e=this.game,i=this.ship;if(this.t+=t,this.cool-=t,this.board-=t,i.sinking){i.sail.h=0,i.rudder=.4;return}let n=e.playerShip&&!e.playerShip.dead?e.playerShip:null;if(!n){i.rudder=.2;return}let r=n.x-i.x,o=n.z-i.z,a=Math.hypot(r,o),l=Math.atan2(-o,r),h;a>110?h=l:(h=l+this.side*Math.PI/2*(a<40?1.2:.85),Math.random()<t*.02&&(this.side*=-1));let c=i.fwd;for(let u of[30,55])if(e.world.height(i.x+c.x*u,i.z+c.z*u)>-3){h=i.yaw+1.3;break}if(i.rudder=Kt(je(h-i.yaw)*1.6,-1,1),i.sail.h=a<60?.6:1,i.sail.angle=Kt(Math.sin(je(e.wind.dir-i.yaw))*.8,-1,1),a<26&&this.board<=0&&e.skeletons.filter(u=>u.ship===n).length<4){this.board=18+Math.random()*10;let u=2+Math.floor(Math.random()*2);for(let d=0;d<u;d++)e.addSkeleton((Math.random()-.5)*16,(Math.random()-.5)*3,this.ghost?"cursed":"skeleton",{ship:n,y:-2.5+19*q+.1,rise:0,leap:!0});e.sayAll("boarders",[],"bad")}if(a<170&&this.cool<=0){let u=je(l-i.yaw),d=u<0?1:-1;Math.abs(Math.abs(u)-Math.PI/2)<.6&&(this.cool=(this.ghost?3.2:4.2)+Math.random()*2,i.cannons.filter(m=>m.side===d).forEach((m,y)=>e.later(()=>{if(i.sinking||i.dead)return;let g=62,p=9.8,M=m.cannon;M.base.updateMatrixWorld(!0);let v=new x().setFromMatrixPosition(M.base.matrixWorld),_=n.x,A=n.z;for(let J=0;J<2;J++){let B=Math.hypot(_-v.x,A-v.z)/g;_=n.x+n.fwd.x*n.speed*B,A=n.z+n.fwd.z*n.speed*B}let C=_-v.x,P=A-v.z,k=Math.hypot(C,P),T=n.y+.6+(Math.random()-.5)*1.2-v.y,w=g**4-p*(p*k*k+2*T*g*g);if(w<0)return;let I=Math.atan((g*g-Math.sqrt(w))/(p*k)),V=new x(C/k*Math.cos(I),Math.sin(I),P/k*Math.cos(I)),F=new Ze;M.base.getWorldQuaternion(F),V.applyQuaternion(F.invert());let X=(this.ghost?.03:.05)*e.diff.aimErr;M.yaw=Kt(Math.atan2(V.x,V.z)+(Math.random()-.5)*X,-.65,.65),M.pitch=Kt(Math.asin(Kt(V.y,-1,1))+(Math.random()-.5)*X*.6,-.14,.4),i.updateTransform(e.time),e.fireCannon(i,m),this.shots++},(y*280+Math.random()*200)/1e3)))}}};var Wx=1.55,ga=.24,Gd=1.7,En=["sword","pistol","shovel","plank","bucket"],an=new x,Sn=new x,rc=new Ze,Wd=new oi(0,0,0,"YXZ"),Xd=new x(0,1,0),Kn=class{constructor(t,e,i={}){if(this.game=t,this.id=e,this.local=!!i.input,this.input=i.input||null,this.slot=i.slot??0,this.ship=null,this.pos=new x,this.vel=new x,this.yaw=0,this.pitch=0,this.onGround=!1,this.swim=!1,this.under=!1,this.station=null,this.climb=null,this.hp=100,this.dead=0,this.hurtT=0,this.item=0,this.carry=null,this.planks=0,this.bucket=!1,this.pistol=5,this.pistolRes=15,this.reloadT=0,this.cool=0,this.swingT=0,this.useHold=0,this.stepD=0,this.color=i.color??e,this.avatar=new Jn("pirate",this.color),this.avatar.root.traverse(n=>{n.layers.set(1+this.slot)}),t.scene.add(this.avatar.root),this.carryMesh=null,this.local){this.camera=new Ye(72,16/9,.08,1200),this.camera.layers.enableAll(),this.camera.layers.disable(1+this.slot);for(let n=0;n<4;n++)n!==this.slot&&this.camera.layers.disable(10+n);t.scene.add(this.camera),this.vm=new ae,this.camera.add(this.vm),this.tools=En.map(n=>{let r=vd(n);return r.buildAll(),r.group.scale.setScalar(.06),r.group.rotation.y=.18,r.group.visible=!1,this.vm.add(r.group),r.group}),this.vm.traverse(n=>n.layers.set(10+this.slot)),this.vm.position.set(.26,-.24,-.42)}this.net={t:0}}worldPos(t=new x){return t.copy(this.pos),this.ship&&this.ship.toWorld(t,t),t}eyeWorld(t=new x){return an.copy(this.pos),an.y+=this.swim?1.45:Wx,t.copy(an),this.ship&&this.ship.toWorld(t,t),t}worldYaw(){return this.yaw+(this.ship?this.ship.yaw:0)}attach(t){let e=this.worldPos();t.toLocal(e,this.pos);let i=this.vel.clone(),n=t.velocity();i.sub(n),i.applyAxisAngle(Xd,-t.yaw),this.vel.copy(i),this.yaw=je(this.yaw-t.yaw),this.ship=t}detach(){let t=this.ship;if(!t)return;let e=this.worldPos();this.pos.copy(e);let i=this.vel.clone().applyAxisAngle(Xd,t.yaw).add(t.velocity());this.vel.copy(i),this.vel.y=Math.min(this.vel.y,2),this.yaw=je(this.yaw+t.yaw),this.ship=null}teleport(t,e,i=0){this.leaveStation(),this.ship=t,this.pos.copy(e),this.vel.set(0,0,0),this.yaw=i,this.climb=null}solidAt(t,e,i){let n=this.game;if(this.ship)return!!this.ship.grid.solidAt(t,e,i);if(e<n.world.height(t,i))return!0;for(let r of n.nearProps){let o=r.grid;if(!o)continue;let a=t-r.x,l=e-r.y,h=i-r.z;if(!(Math.abs(a)>r.rad||Math.abs(h)>r.rad||l<-.5||l>r.top)&&o.solidAt(a,l,h))return!0}for(let r of n.ships)if(!(r.dead||Math.abs(r.x-t)>18||Math.abs(r.z-i)>18)&&(Sn.set(t,e,i),r.toLocal(Sn,Sn),r.grid.solidAt(Sn.x,Sn.y,Sn.z)))return!0;return!1}collides(t){for(let e=.05;e<=Gd;e+=.24)for(let i of[-ga,0,ga])for(let n of[-ga,0,ga])if(!(i&&n&&e>.3&&e<Gd-.2)&&this.solidAt(t.x+i,t.y+e,t.z+n))return!0;return!1}move(t){let e=this.pos,i=this.vel;for(let r of["x","z"]){let o=i[r]*t;if(!o)continue;let a=e[r];if(e[r]+=o,this.collides(e)){let l=!1;if(this.onGround||this.swim)for(let h of[.26,.52]){if(e.y+=h,!this.collides(e)){l=!0;break}e.y-=h}l||(e[r]=a,i[r]=0)}}let n=e.y;if(e.y+=i.y*t,this.onGround=!1,this.collides(e)){if(i.y<=0){e.y=n;for(let r=0;r<6;r++)if(e.y-=.04,this.collides(e)){e.y+=.04;break}this.onGround=!0,i.y<-11&&this.hurt((-i.y-11)*7,"fall")}else e.y=n;i.y=0}}waterLevel(){let t=this.game;if(this.ship){let e=this.ship;if(e.insideHull(this.pos,-.15)&&this.pos.y>-2.3)return e.water>.02?e.waterLocalY():-99;let i=this.worldPos(Sn),n=ie(i.x,i.z,t.time);return this.pos.y+(n-i.y)}return ie(this.pos.x,this.pos.z,t.time)}update(t){let e=this.game,i=this.input;if(this.hurtT=Math.max(0,this.hurtT-t),this.dead>0){this.dead-=t,this.dead<=0&&e.respawn(this);return}if(this.hp<100&&e.time-(this.lastHurt||0)>8&&(this.hp=Math.min(100,this.hp+t*2)),this.hp<30&&(this.beat=(this.beat||0)-t,this.beat<=0&&(this.beat=.6+this.hp/30*.5,xt.play("heart",1))),this.cool=Math.max(0,this.cool-t),this.swingT=Math.max(0,this.swingT-t),this.ui){this.vel.set(0,0,0);return}let n=i.look();if(this.station&&this.station.type==="cannon"){let A=this.station.cannon;A.yaw=Kt(A.yaw-n.dx,-.65,.65),A.pitch=Kt(A.pitch-n.dy,-.14,.4),e.frame%4===0&&e.act(this,{a:"aim",s:this.station.ship.netId,i:this.station.index,yaw:A.yaw,pitch:A.pitch})}else this.yaw=je(this.yaw-n.dx),this.pitch=Kt(this.pitch-n.dy,-1.5,1.5);if(this.ship&&!this.climb){let A=this.ship,C=this.pos;(A.dead||Math.abs(C.x)>16.5||Math.abs(C.z)>5.2||C.y<-3.5||C.y>30)&&(this.leaveStation(),this.detach())}if(!this.ship&&!this.climb){for(let A of e.ships)if(!(A.dead||A.sinking>2)&&!(Math.abs(A.x-this.pos.x)>20||Math.abs(A.z-this.pos.z)>20)&&(A.toLocal(this.pos,an),Math.abs(an.x)<15.5&&Math.abs(an.z)<4.6&&an.y>-.5&&an.y<28&&A.insideHull(an,.2))){if(this.attach(A),this.collides(this.pos)){this.detach();continue}break}}if(!this.climb&&!this.station&&this.collides(this.pos)&&this.unstick(),this.climb)return this.updateClimb(t);if(this.station)return this.updateStation(t);let r=this.waterLevel(),o=r-this.pos.y,a=this.swim;if(this.swim=o>1.05&&!this.onGround||o>1.35,this.swim&&!a&&this.vel.y<-1.5){let A=this.worldPos(new x);A.y=r+(this.ship?this.worldPos(new x).y-this.pos.y:0),e.fx.burst(new x(A.x,ie(A.x,A.z,e.time),A.z),18,"splash",{big:this.vel.y<-6}),xt.play("splash",.8)}if(this.under=o>1.5,this.under&&Math.random()<t*2.5){let A=this.eyeWorld(new x).addScaledVector(this.lookDir(new x),.6);e.fx.burst(A,2+(Math.random()*3|0),"bubble")}this.waterDepth=o;let l=i.move(),h=i.sprint()&&!this.carry,c=this.swim?3.4:h?6.2:3.9;this.carry&&(c*=.62),!this.swim&&o>.4&&(c*=.6);let u=Math.sin(this.yaw),d=Math.cos(this.yaw),f=-u,m=-d,y=d,g=-u,p=(f*l.z+y*l.x)*c,M=(m*l.z+g*l.x)*c,v=this.onGround||this.swim?12:2.5;if(this.vel.x=le(this.vel.x,p,Math.min(1,t*v)),this.vel.z=le(this.vel.z,M,Math.min(1,t*v)),this.swim){let A=r-1.25,C=i.crouch()?-2.6:(A-this.pos.y)*3+(i.jumpHeld()?2.5:0);this.vel.y=le(this.vel.y,C,Math.min(1,t*4)),Math.random()<t*2&&(l.x||l.z)&&xt.play("swim",.7)}else this.vel.y-=22*t,this.onGround&&i.jump()&&(this.vel.y=7.2,this.onGround=!1);if(this.ship&&this.ship.hatch){let A=this.ship.hatch;Math.abs(this.pos.x-A.x)<.6&&Math.abs(this.pos.z-A.z)<.7&&this.pos.y<A.deckY+.2&&this.pos.y>A.holdY-.3&&(l.z>0?this.vel.y=3.5:l.z<0?this.vel.y=-3:this.vel.y=Math.max(this.vel.y,0))}this.move(t);let _=Math.hypot(this.vel.x,this.vel.z);this.onGround&&_>.5&&(this.stepD+=_*t,this.stepD>(h?2.2:1.7)&&(this.stepD=0,xt.play(this.ship?"step":"stepSand",.8))),this.tools.forEach((A,C)=>{A.visible=!this.carry&&C===this.item&&!this.under}),this.useTools(t),this.rescueCheck(t)}rescueCheck(t){let e=this.game,i=e.playerShip,n=this.pos,r=!isFinite(n.x)||!isFinite(n.y)||!isFinite(n.z);if(!i||i.dead||i.sinking){this.lostT=0,r&&e.respawn(this);return}let o=this.worldPos(new x),a=Math.hypot(o.x-i.x,o.z-i.z),l=e.world.islandAt(o.x,o.z,45)||e.ships.some(u=>u!==i&&!u.dead&&Math.hypot(u.x-o.x,u.z-o.z)<35);if(!(r||o.y<-12||!this.ship&&!l&&(this.swim||!this.onGround&&o.y<-4)&&a>12)){this.lostT=0,this.lostWarn=!1;return}this.lostT=(this.lostT||0)+t;let c=r||o.y<-12?0:25;!this.lostWarn&&c&&this.lostT>c-5&&(this.lostWarn=!0,e.say("rescueSoon",[5],"",this)),this.lostT>=c&&(this.lostT=0,this.lostWarn=!1,this.teleport(i,new x(-5,-2.5+19*q+.05,0),Math.PI/2),this.collides(this.pos)&&this.unstick(),e.say("rescued",[],"good",this),xt.play("rope",1))}unstick(){let t=this.pos,e=new x;for(let i=0;i<=3.01;i+=.25)for(let n of[0,.26,.52,.78,1.04,1.5,2,-.26]){let r=i===0?1:Math.max(8,Math.round(i*10));for(let o=0;o<r;o++){let a=o/r*Math.PI*2;if(e.set(t.x+Math.cos(a)*i,t.y+n,t.z+Math.sin(a)*i),!this.collides(e)){t.copy(e),this.vel.set(0,0,0);return}}}this.ship?(this.pos.set(-5,-2.5+19*q+.02,0),this.vel.set(0,0,0)):t.y+=2}startClimb(t,e){this.ship!==t&&this.attach(t);let i=-2.5+19*q+.05;this.climb={from:this.pos.clone(),to:new x(e.x,i,e.side*3.2),t:0},xt.play("rope",1)}climbHatch(t){let e=this.ship.hatch,i=this.pos.clone(),n=t==="up"?[i,new x(e.x+.3,e.holdY,e.z),new x(e.x+.3,e.deckY+.35,e.z),new x(e.up,e.deckY,e.z)]:[i,new x(e.up,e.deckY,e.z),new x(e.x+.3,e.deckY+.35,e.z),new x(e.x+.3,e.holdY,e.z),new x(e.down,e.holdY,e.z)];this.climb={pts:n,t:0,dur:t==="up"?1.8:1.9},this.yaw=t==="up"?Math.PI/2:-Math.PI/2,xt.play("rope",.6)}updateClimb(t){let e=this.climb;if(!this.ship){this.climb=null;return}if(e.pts){e.t+=t/e.dur;let r=Math.min(1,e.t)*(e.pts.length-1),o=Math.min(e.pts.length-2,Math.floor(r));this.pos.lerpVectors(e.pts[o],e.pts[o+1],r-o),Math.random()<t*5&&xt.play("step",.5),e.t>=1&&(this.pos.copy(e.pts[e.pts.length-1]),this.vel.set(0,0,0),this.climb=null,this.onGround=!0);return}e.t+=t/1.3;let i=Math.min(1,e.t),n=Math.sign(e.to.z);this.pos.set(le(e.from.x,e.to.x,i),le(e.from.y,e.to.y+1.2,Math.min(1,i*1.25)),i<.8?n*4.8:le(n*4.8,e.to.z,(i-.8)/.2)),i>=1&&(this.pos.copy(e.to),this.vel.set(0,0,0),this.climb=null)}interact(t){let e=this.game;if(this.carry)return e.dropLoot(this),!0;if(!t)return!1;if(t.kind==="station"){let i=t.st,n=i.ship;if(["helm","sails","cannon"].includes(i.type))return i.user&&i.user!==this||(this.station=i,i.user=this,this.enteredFrame=e.frame,this.vel.set(0,0,0),xt.play("click",1),e.act(this,{a:"station",s:n.netId,i:i.index})),!0;if(i.type==="anchor")return n.anchor||e.act(this,{a:"anchor",s:n.netId,v:!0}),!0;if(i.type==="ammo")return this.pistolRes<15&&(this.pistolRes=15,e.say("pistolAmmo",[],"",this),xt.play("click",1)),!0;if(i.type==="planks"){if(n.planks<=0)return e.say("noPlanks",[],"bad",this),!0;let r=Math.min(5-this.planks,n.planks);return r<=0||(this.planks+=r,this.item=3,e.act(this,{a:"stock",s:n.netId,k:"planks",d:-r}),e.say("tookPlanks",[this.planks],"",this),xt.play("hammer",.6)),!0}if(i.type==="food")return n.food<=0?(e.say("noFood",[],"bad",this),!0):(e.act(this,{a:"stock",s:n.netId,k:"food",d:-1}),this.hp=Math.min(100,this.hp+45),e.say("ateBanana",[],"",this),xt.play("eat",1),!0)}return t.kind==="ladder"?(this.startClimb(t.s,t.L),!0):t.kind==="hatch"?(this.climbHatch(t.dir),!0):e.interactOther(this,t)}leaveStation(){this.station&&(this.station.user=null,this.local&&this.game.act(this,{a:"leave"}),this.station=null)}updateStation(t){let e=this.station,i=e.ship,n=this.input,r=n.move(),o=this.game;if(this.tools.forEach(a=>{a.visible=!1}),i.dead||i.sinking>1){this.leaveStation();return}if(this.pos.set(e.stand[0],e.stand[1],e.stand[2]),this.vel.set(0,0,0),n.use()&&this.enteredFrame!==o.frame){this.leaveStation();return}if(e.type==="helm"){let a=i.rudder;a=Kt(a+(r.x?-r.x:0)*t*.9,-1,1),r.z<0&&!r.x&&(a=le(a,0,Math.min(1,t*2))),a!==i.rudder&&(i.rudder=a,o.act(this,{a:"helm",s:i.netId,r:a})),r.x&&Math.random()<t*6&&xt.play("ratchet",.5)}else if(e.type==="sails"){let a=!1;r.z&&(i.sail.h=Kt(i.sail.h+r.z*t*.45,0,1),a=!0,Math.random()<t*4&&xt.play("rope",.4)),r.x&&(i.sail.angle=Kt(i.sail.angle+r.x*t*.7,-1,1),a=!0),a&&o.act(this,{a:"sail",s:i.netId,h:i.sail.h,ang:i.sail.angle})}else if(e.type==="cannon"){let a=e.cannon;n.reload()&&!a.loaded&&!a.loading&&(i.ammo>0?(a.loading=!0,xt.play("click",1),o.act(this,{a:"load",s:i.netId,i:e.index})):o.say("noAmmo",[],"bad",this)),n.fire()&&a.loaded&&a.cool<=0&&(a.loaded=!1,a.cool=.6,o.act(this,{a:"fire",s:i.netId,i:e.index,yaw:a.yaw,pitch:a.pitch}))}}cannonView(){let t=this.station,e=t.cannon;e.pitchG.updateMatrixWorld(!0);let i=e.pitchG.matrixWorld,n=new x(0,0,1.4).applyMatrix4(i),r=new x(0,0,-.6).applyMatrix4(i),o=n.clone().sub(r).normalize(),a=r.clone().addScaledVector(o,-.9);return a.y+=1,{pos:a,look:n.clone().addScaledVector(o,40).add(new x(0,3,0)),muzzle:n}}useTools(t){let e=this.game,i=this.input,n=i.slot();if(n!==-1&&!this.carry&&(n==="next"?this.item=(this.item+1)%En.length:n==="prev"?this.item=(this.item+En.length-1)%En.length:n<En.length&&(this.item=n),xt.play("click",.5)),this.carry)return;let r=En[this.item];if(r==="pistol"&&i.reload()&&this.pistol<5&&this.pistolRes>0&&this.reloadT<=0&&(this.reloadT=1.6,xt.play("click",1)),this.reloadT>0&&(this.reloadT-=t,this.reloadT<=0)){let o=Math.min(5-this.pistol,this.pistolRes);this.pistol+=o,this.pistolRes-=o,xt.play("hammer",.5)}if(r==="plank"){if(i.fireHeld()&&this.ship&&this.planks>0){let o=this.lookHole();if(o){this.useHold+=t,this.repairing=o,Math.random()<t*7&&(xt.play("hammer",.7),this.swingT=.15),this.useHold>1.1&&(this.useHold=0,this.planks--,e.act(this,{a:"repair",s:this.ship.netId,x:o.x,y:o.y,z:o.z}),xt.play("hammer",1));return}}this.useHold=0,this.repairing=null,i.fire()&&this.planks<=0&&e.say("noPlanks",[],"bad",this);return}if(!(!i.fire()||this.cool>0)){if(r==="sword")this.cool=.5,this.swingT=.3,xt.play("swing",1),e.melee(this,2.4,34);else if(r==="pistol"){if(this.reloadT>0)return;if(this.pistol<=0){xt.play("click",1),this.cool=.3;return}this.pistol--,this.cool=.55,this.swingT=.2,xt.play("pistol",1),e.shoot(this,90,55)}else if(r==="shovel")this.cool=.6,this.swingT=.35,e.dig(this);else if(r==="bucket")if(this.cool=.6,this.swingT=.3,!this.bucket)this.ship&&this.ship.water>.02&&this.waterDepth>-.4&&this.ship.insideHull(this.pos,0)?(this.bucket=!0,e.act(this,{a:"scoop",s:this.ship.netId}),xt.play("scoop",1)):(this.swim||this.lookingAtSea())&&(this.bucket=!0,xt.play("scoop",1));else{this.bucket=!1,xt.play("pour",1);let o=this.eyeWorld(new x).addScaledVector(this.lookDir(),1.8);e.act(this,{a:"pour",x:o.x,y:o.y,z:o.z})}}}lookingAtSea(){return this.lookDir().y<-.25&&!this.ship}lookDir(t=new x){if(this.camera)return this.camera.getWorldDirection(t);let e=this.worldYaw();return t.set(-Math.sin(e)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(e)*Math.cos(this.pitch))}lookHole(){if(!this.ship)return null;let t=this.lookDir(),e=this.eyeWorld();for(let i=.4;i<=2.4;i+=.4){let n=this.ship.toLocal(e.clone().addScaledVector(t,i)),r=this.ship.findHole(n,.5);if(r)return r}return null}hurt(t,e){if(!(this.dead>0||t<=0)){if(!this.local){this.game.hurtRemote(this,t,e);return}this.hp-=t,this.hurtT=.4,this.lastHurt=this.game.time,xt.play("hurt",1),this.hp<=0&&(this.hp=0,this.dead=7,this.leaveStation(),this.carry&&this.game.dropLoot(this),this.game.onPlayerDied(this,e))}}updateCamera(t){let e=this.camera,i=this.dead<=0&&!this.carry&&!this.ui&&this.input.spyHeld();this.zoom=le(this.zoom||0,i?1:0,Math.min(1,t*10));let n=72-this.zoom*52;if(Math.abs(e.fov-n)>.05&&(e.fov=n,e.updateProjectionMatrix()),this.input.sens=this.game.settings.sens*(1-this.zoom*.7),this.vm&&(this.vm.visible=this.zoom<.3),this.station&&this.station.type==="cannon"){let l=this.cannonView();e.position.copy(l.pos),e.lookAt(l.look);return}this.eyeWorld(e.position);let r=Math.hypot(this.vel.x,this.vel.z);if(this.bob=(this.bob||0)+t*r*2.2,this.onGround&&(e.position.y+=Math.sin(this.bob)*.035*Math.min(1,r/4)),Wd.set(this.pitch,this.yaw,0,"YXZ"),rc.setFromEuler(Wd),this.ship){let l=new Ze().setFromEuler(new oi(this.ship.roll*.8,this.ship.yaw,this.ship.pitch*.8,"YZX"));e.quaternion.copy(l).multiply(rc)}else e.quaternion.copy(rc);this.dead>0&&(e.position.y-=Math.min(1.2,(7-this.dead)*.6),e.rotateZ(.4)),this.hurtT>0&&e.rotateZ((Math.random()-.5)*this.hurtT*.08);let o=this.game.shakeAt?this.game.shakeAt(this):0;o>0&&(e.position.x+=(Math.random()-.5)*o*.3,e.position.y+=(Math.random()-.5)*o*.3);let a=this.swingT>0?Math.sin(this.swingT/.3*Math.PI):0;this.vm.position.set(.26+Math.sin(this.bob*.5)*.008,-.24+Math.abs(Math.cos(this.bob*.5))*.01-a*.04,-.42-a*.06),this.vm.rotation.set(-a*1.1,a*.6,0)}updateAvatar(t){let e=this.avatar.root;e.visible=this.dead<=0||this.dead>6.5;let i=this.worldPos(Sn);e.position.copy(i),this.swim&&(e.position.y-=.9);let r=(this._prevW||i.clone()).distanceTo(i)/Math.max(t,.001);this._prevW=i.clone(),e.rotation.set(0,this.worldYaw()+Math.PI/2,0),this.ship&&(e.rotation.z=this.ship.pitch*.8,e.rotation.x=this.ship.roll*.8);let o=this.ship?Math.max(0,r-this.ship.speed):r;this.avatar.animate(t,Math.min(6,o),this.swingT>0?1-this.swingT/.3:0),this.carry&&!this.carryMesh&&(this.carryMesh=this.game.makeCarryMesh(),this.carryMesh.traverse(a=>a.layers.set(1+this.slot)),e.add(this.carryMesh)),!this.carry&&this.carryMesh&&(e.remove(this.carryMesh),this.carryMesh=null)}netState(){return{id:this.id,s:this.ship?this.ship.netId:-1,p:[+this.pos.x.toFixed(2),+this.pos.y.toFixed(2),+this.pos.z.toFixed(2)],y:+this.yaw.toFixed(3),pi:+this.pitch.toFixed(2),sw:this.swim?1:0,it:this.item,c:this.carry?1:0,d:this.dead>0?1:0,hp:Math.round(this.hp),st:this.station?[this.station.ship.netId,this.station.index]:null,sg:this.swingT>0?1:0,col:this.color}}applyNet(t){let e=this.game,i=t.s>=0?e.shipById(t.s):null;this.ship=i||null,this.net.target||this.pos.set(t.p[0],t.p[1],t.p[2]),this.net.target=new x(t.p[0],t.p[1],t.p[2]),this.yaw=t.y,this.pitch=t.pi,this.swim=!!t.sw,this.item=t.it,this.hp=t.hp,this.dead=t.d?Math.max(this.dead,1):0,t.sg&&(this.swingT=.3),this.carry=t.c?this.carry||!0:null;let n=t.st?e.shipById(t.st[0])?.stations[t.st[1]]:null;this.station&&this.station!==n&&(this.station.user=null),this.station=n||null,n&&(n.user=this)}updateRemote(t){this.net.target&&this.pos.lerp(this.net.target,Math.min(1,t*12)),this.swingT=Math.max(0,this.swingT-t)}};var ya=class{constructor(t,e=2500){this.max=e,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.p=[];let i=new ge;i.setAttribute("position",new Ce(this.pos,3).setUsage(Bs)),i.setAttribute("color",new Ce(this.col,3).setUsage(Bs)),i.setAttribute("size",new Ce(this.size,1).setUsage(Bs));let n=new Ge({uniforms:{uScale:{value:300},uFog:{value:new mt},uFogFar:{value:600}},vertexShader:`attribute float size; attribute vec3 color; varying vec3 vC; varying float vD; uniform float uScale;
        void main(){ vC = color; vec4 mv = modelViewMatrix*vec4(position,1.0); vD = -mv.z; gl_PointSize = clamp(floor(size*uScale/max(0.1,-mv.z)), 1.0, uScale * 0.03); gl_Position = projectionMatrix*mv; }`,fragmentShader:`varying vec3 vC; varying float vD; uniform vec3 uFog; uniform float uFogFar;
        void main(){ gl_FragColor = linearToOutputTexel(vec4(mix(vC, uFog, smoothstep(uFogFar*0.2, uFogFar, vD)), 1.0)); }`,depthWrite:!0});this.mat=n,this.points=new Ns(i,n),this.points.frustumCulled=!1,t.add(this.points)}add(t,e,i,n,r,o,a,l,h,c,u,d={}){this.p.length>=this.max&&this.p.shift(),this.p.push({x:t,y:e,z:i,vx:n,vy:r,vz:o,life:a,max:a,size:l,r:h,g:c,b:u,grav:d.grav??0,drag:d.drag??0,grow:d.grow??0,fade:d.fade,r2:d.r2,g2:d.g2,b2:d.b2,float:d.float,local:d.local})}burst(t,e,i,n={}){let r=Math.random;for(let o=0;o<e;o++){if(i==="smoke")for(let a=0;a<2;a++)this.add(t.x+(r()-.5)*1.5,t.y+r()*1,t.z+(r()-.5)*1.5,(r()-.5)*2.5+(n.vx||0),.8+r()*2,(r()-.5)*2.5+(n.vz||0),1.5+r()*2,.18+r()*.22,.78,.77,.75,{drag:1,grow:.12,r2:.42,g2:.42,b2:.44});i==="flash"&&this.add(t.x,t.y,t.z,(r()-.5)*8+(n.vx||0),(r()-.2)*6,(r()-.5)*8+(n.vz||0),.18+r()*.15,.45,1,.9,.5,{drag:4,r2:1,g2:.4,b2:.1}),i==="splash"&&this.add(t.x+(r()-.5)*2,t.y,t.z+(r()-.5)*2,(r()-.5)*4,4+r()*7*(n.big?1.6:1),(r()-.5)*4,.9+r()*.7,.3+r()*.25,.92,.97,1,{grav:14,r2:.6,g2:.8,b2:.9}),i==="spray"&&this.add(t.x+(r()-.5)*.3,t.y,t.z+(r()-.5)*.3,(r()-.5)*1.5+(n.vx||0),1+r()*2.5,(r()-.5)*1.5+(n.vz||0),.5+r()*.4,.12,.8,.92,1,{grav:9,local:n.local}),i==="fire"&&this.add(t.x+(r()-.5)*.3,t.y,t.z+(r()-.5)*.3,(r()-.5)*.6,1.5+r()*2,(r()-.5)*.6,.4+r()*.5,.18+r()*.12,1,.85,.3,{r2:.9,g2:.2,b2:.05,drag:.5}),i==="ember"&&this.add(t.x,t.y,t.z,(r()-.5)*3,2+r()*4,(r()-.5)*3,1+r(),.08,1,.7,.2,{grav:2,r2:.6,g2:.1,b2:0}),i==="dust"&&this.add(t.x+(r()-.5),t.y+r()*.4,t.z+(r()-.5),(r()-.5)*3,1+r()*2.5,(r()-.5)*3,.6+r()*.6,.2+r()*.15,n.r??.75,n.g??.62,n.b??.4,{grav:5,drag:1.5}),i==="ghost"&&this.add(t.x+(r()-.5)*2,t.y+r(),t.z+(r()-.5)*2,(r()-.5)*.6,.6+r(),(r()-.5)*.6,1.5+r(),.18,.3,1,.6,{r2:.05,g2:.3,b2:.2,drag:.4}),i==="trail"&&this.add(t.x,t.y,t.z,(r()-.5)*.4,.3+r()*.4,(r()-.5)*.4,.7+r()*.5,.1+r()*.06,.72,.72,.7,{grow:.12,drag:1,r2:.45,g2:.45,b2:.47}),i==="sparkle"&&this.add(t.x+(r()-.5)*.6,t.y+r()*.3,t.z+(r()-.5)*.6,0,.5+r()*.5,0,.6+r()*.4,.06,1,.95,.6,{r2:1,g2:.75,b2:.2}),i==="bubble"&&this.add(t.x+(r()-.5)*.3,t.y,t.z+(r()-.5)*.3,(r()-.5)*.3,.8+r()*.8,(r()-.5)*.3,1.2+r(),.05+r()*.04,.8,.95,1,{grav:-.5}),i==="gold"&&this.add(t.x,t.y,t.z,(r()-.5)*3,3+r()*3,(r()-.5)*3,.9+r()*.4,.1,1,.85,.3,{grav:10}),i==="bones"&&this.add(t.x+(r()-.5)*.5,t.y+r()*1.6,t.z+(r()-.5)*.5,(r()-.5)*4,2+r()*3,(r()-.5)*4,1.2+r()*.6,.14,.9,.87,.78,{grav:12}),i==="blood"&&this.add(t.x,t.y,t.z,(r()-.5)*2.5,1+r()*2,(r()-.5)*2.5,.5+r()*.3,.1,.6,.08,.08,{grav:12}),i==="wake"&&this.add(t.x+(r()-.5)*.8,t.y,t.z+(r()-.5)*.8,(n.vx||0)+(r()-.5),.2+r()*.4,(n.vz||0)+(r()-.5),1.2+r()*1.4,.22,.95,1,1,{float:!0,drag:.8,r2:.6,g2:.8,b2:.85})}}update(t,e,i){let n=0;for(let o=this.p.length-1;o>=0;o--){let a=this.p[o];if(a.life-=t,a.life<=0){this.p.splice(o,1);continue}a.vy-=a.grav*t;let l=Math.max(0,1-a.drag*t);a.vx*=l,a.vy*=l,a.vz*=l,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.float?a.y=e(a.x,a.z)+.05:a.grav>0&&a.y<e(a.x,a.z)-.3&&(a.life=0),a.size+=a.grow*t}for(let o of this.p){if(n>=this.max)break;let a=1-o.life/o.max;this.pos[n*3]=o.x,this.pos[n*3+1]=o.y,this.pos[n*3+2]=o.z;let l=o.r2!==void 0?o.r+(o.r2-o.r)*a:o.r,h=o.g2!==void 0?o.g+(o.g2-o.g)*a:o.g,c=o.b2!==void 0?o.b+(o.b2-o.b)*a:o.b;this.col[n*3]=l,this.col[n*3+1]=h,this.col[n*3+2]=c,this.size[n]=o.size*Math.min(1,o.life/Math.min(o.max,.3)),n++}let r=this.points.geometry;r.setDrawRange(0,n),r.attributes.position.needsUpdate=!0,r.attributes.color.needsUpdate=!0,r.attributes.size.needsUpdate=!0}},xa=class{constructor(t,e=6){this.lights=[];for(let i=0;i<e;i++){let n=new ra("#ffc060",0,12,1.6);t.add(n),this.lights.push(n)}this.src=[]}begin(){this.src.length=0}add(t,e,i,n){this.src.push({pos:t,color:e,intensity:i,range:n})}end(t,e){let i=t.getWorldPosition(new x);this.src.sort((n,r)=>n.pos.distanceToSquared(i)-r.pos.distanceToSquared(i)),this.lights.forEach((n,r)=>{let o=this.src[r];if(!o){n.intensity=0;return}n.position.copy(o.pos),n.color.set(o.color),n.distance=o.range,n.intensity=o.intensity*(o.always?1:.25+e*1.2)})}};var Be=new Set,He=new Set,Ie={dx:0,dy:0,l:!1,r:!1,lp:!1,rp:!1,wheel:0},jn=!1,Ur=null,Nr=null,Xx=0,qd={a:0,b:1,x:2,y:3,lb:4,rb:5,lt:6,rt:7,back:8,start:9,ls:10,rs:11,up:12,down:13,left:14,right:15},Qn=[];function qx(){let s=navigator.getGamepads?navigator.getGamepads():[];for(let t=0;t<4;t++){let e=s[t];Qn[t]||(Qn[t]={pad:null,held:{},edge:new Set});let i=Qn[t];if(i.edge.clear(),i.pad=e&&e.connected?e:null,!!i.pad)for(let n in qd){let r=i.pad.buttons[qd[n]],o=!!(r&&(r.pressed||r.value>.4));o&&!i.held[n]&&i.edge.add(n),i.held[n]=o}}}var Tn=(s,t)=>{if(!s||!s.pad)return 0;let e=s.pad.axes[t]||0;return Math.abs(e)<.16?0:e},$s=class{constructor(t=-1){this.kind="km",this.padIndex=t,this.sens=1,this.invert=!1}get P(){return this.padIndex>=0?Qn[this.padIndex]:null}move(){let t=0,e=0;(Be.has("KeyA")||Be.has("ArrowLeft"))&&(t-=1),(Be.has("KeyD")||Be.has("ArrowRight"))&&(t+=1),(Be.has("KeyW")||Be.has("ArrowUp"))&&(e+=1),(Be.has("KeyS")||Be.has("ArrowDown"))&&(e-=1),t+=Tn(this.P,0),e-=Tn(this.P,1);let i=Math.hypot(t,e);return i>1&&(t/=i,e/=i),{x:t,z:e}}look(){let t=.0022*this.sens,e=this.invert?-1:1;return{dx:Ie.dx*t+Tn(this.P,2)*.05*this.sens,dy:(Ie.dy*t+Tn(this.P,3)*.04*this.sens)*e}}e(t){let e=this.P;return!!(e&&e.edge.has(t))}h(t){let e=this.P;return!!(e&&e.held[t])}jump(){return He.has("Space")||this.e("a")}jumpHeld(){return Be.has("Space")||this.h("a")}sprint(){return Be.has("ShiftLeft")||Be.has("ShiftRight")||this.h("ls")}crouch(){return Be.has("ControlLeft")||Be.has("KeyC")||this.h("b")}use(){return He.has("KeyE")||He.has("KeyF")||this.e("x")}useHeld(){return Be.has("KeyE")||Be.has("KeyF")||this.h("x")}fire(){return Ie.lp||this.e("rt")}fireHeld(){return Ie.l||this.h("rt")}spyHeld(){return Ie.r||this.h("lt")}reload(){return He.has("KeyR")||this.e("y")}slot(){for(let t=1;t<=6;t++)if(He.has("Digit"+t))return t-1;if(Ie.wheel){let t=Ie.wheel;return Ie.wheel=0,t>0?"next":"prev"}return this.e("rb")?"next":this.e("lb")?"prev":-1}map(){return He.has("KeyM")||this.e("back")}treasureMap(){return Be.has("Tab")||this.h("up")}pause(){return He.has("Escape")||He.has("KeyP")||this.e("start")}menuNav(){return{up:He.has("ArrowUp")||He.has("KeyW")||this.e("up"),down:He.has("ArrowDown")||He.has("KeyS")||this.e("down"),ok:He.has("Enter")||He.has("Space")||this.e("a"),back:He.has("Escape")||this.e("b")}}},va=class extends $s{constructor(t){super(t),this.kind="pad"}move(){let t=Tn(this.P,0),e=-Tn(this.P,1);this.h("left")&&(t-=1),this.h("right")&&(t+=1);let i=Math.hypot(t,e);return i>1&&(t/=i,e/=i),{x:t,z:e}}look(){let t=this.invert?-1:1;return{dx:Tn(this.P,2)*.05*this.sens,dy:Tn(this.P,3)*.04*this.sens*t}}jump(){return this.e("a")}jumpHeld(){return this.h("a")}sprint(){return this.h("ls")}crouch(){return this.h("b")}use(){return this.e("x")}useHeld(){return this.h("x")}fire(){return this.e("rt")}fireHeld(){return this.h("rt")}spyHeld(){return this.h("lt")}reload(){return this.e("y")}slot(){return this.e("rb")?"next":this.e("lb")?"prev":-1}map(){return this.e("back")}treasureMap(){return this.h("up")}pause(){return this.e("start")}menuNav(){return{up:this.e("up"),down:this.e("down"),ok:this.e("a"),back:this.e("b")}}},Me={init(s,t){Ur=s,Nr=t,addEventListener("keydown",e=>{e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")||(["Space","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),e.repeat||He.add(e.code),Be.add(e.code),Xx=performance.now(),Nr&&Nr())}),addEventListener("keyup",e=>Be.delete(e.code)),addEventListener("blur",()=>{Be.clear(),Ie.l=Ie.r=!1}),addEventListener("mousemove",e=>{jn&&(Ie.dx+=e.movementX,Ie.dy+=e.movementY)}),addEventListener("mousedown",e=>{Nr&&Nr(),jn&&(e.button===0&&(Ie.l=!0,Ie.lp=!0),e.button===2&&(Ie.r=!0,Ie.rp=!0))}),addEventListener("mouseup",e=>{e.button===0&&(Ie.l=!1),e.button===2&&(Ie.r=!1)}),addEventListener("wheel",e=>{jn&&(Ie.wheel+=Math.sign(e.deltaY))},{passive:!0}),addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("pointerlockchange",()=>{jn=document.pointerLockElement===Ur})},lock(){if(!jn&&Ur&&Ur.requestPointerLock)try{let s=Ur.requestPointerLock();s&&s.catch&&s.catch(()=>{})}catch{}},unlock(){jn&&document.exitPointerLock()},get locked(){return jn},poll:qx,padCount(){return Qn.filter(s=>s&&s.pad).length},anyPadEdge(s){return Qn.some(t=>t&&t.edge.has(s))},hit(s){return He.has(s)},down(s){return Be.has(s)},pause(){return He.has("Escape")||He.has("KeyP")||this.anyPadEdge("start")},endFrame(){He.clear(),Ie.dx=Ie.dy=0,Ie.lp=Ie.rp=!1;for(let s of Qn)s&&s.edge.clear()}};var Yd={hu:{subtitle:"Kal\xF3zok, kincsek, \xE1tkok",beta:"B\xC9TA",continue:"Folytat\xE1s",newGame:"\xDAj j\xE1t\xE9k",confirmNew:"Biztosan? A r\xE9gi ment\xE9s elv\xE9sz. Kattints \xFAjra!",splitScreen:"K\xE9t j\xE1t\xE9kos, osztott k\xE9perny\u0151",needPad:"Csatlakoztass egy kontrollert, azt\xE1n kattints \xFAjra!",online:"Online k\xF6z\xF6s j\xE1t\xE9k",onlineNote:"Legfeljebb n\xE9gyen j\xE1tszhattok egy haj\xF3n. Aki l\xE9trehozza a szob\xE1t, annak a g\xE9p\xE9n fut a vil\xE1g, \xE9s az \u0151 ment\xE9se folytat\xF3dik.",hostGame:"Szoba l\xE9trehoz\xE1sa",joinGame:"Csatlakoz\xE1s",codePlaceholder:"Szobak\xF3d",connecting:"Kapcsol\xF3d\xE1s\u2026",netError:"H\xE1l\xF3zati hiba:",roomReady:"A szoba k\xE9sz! Szobak\xF3d: {0}",roomCode:"Szobak\xF3d",crew:"Leg\xE9nys\xE9g",menu:"Men\xFC",back:"Vissza",playerJoined:"\xDAj matr\xF3z sz\xE1llt fel! Leg\xE9nys\xE9g: {0} f\u0151",playerLeft:"Egy matr\xF3z elhagyta a haj\xF3t",disconnected:"Megszakadt a kapcsolat a kapit\xE1nnyal",joined:"Felsz\xE1llt\xE1l a haj\xF3ra! \xDCdv a leg\xE9nys\xE9gben!",resume:"Folytat\xE1s",toTitle:"Vissza a c\xEDmk\xE9perny\u0151re",lang:"Nyelv",quality:"Felbont\xE1s",sens:"Eg\xE9r\xE9rz\xE9kenys\xE9g",invert:"Ford\xEDtott eg\xE9r",digHere:"Itt kell \xE1sni! \xB7 Bal gomb",digVeryClose:"Nagyon k\xF6zel vagy a kincshez!",digClose:"A kincs a k\xF6zelben van\u2026",eshipPirate:"Kal\xF3zhaj\xF3",eshipGhost:"Szellemhaj\xF3",eshipWater:"V\xEDz a haj\xF3ban: {0}%",eshipSinking:"S\xFCllyed!",windFrom:"Sz\xE9l {0} fel\u0151l",windWeak:"gyenge",windModerate:"m\xE9rs\xE9kelt",windStrong:"er\u0151s",windGale:"viharos",sailCatch:"Vitorl\xE1k: {0}%",sfxVol:"Hanghat\xE1sok",musicVol:"Zene",helmRudder:"Korm\xE1nylap\xE1t",helmHeading:"Ir\xE1ny",pixelFilter:"Pixelsz\u0171r\u0151",shadows:"\xC1rny\xE9kok",difficulty:"Neh\xE9zs\xE9g",easy:"k\xF6nny\u0171",normal:"norm\xE1l",hard:"neh\xE9z",on:"be",off:"ki",low:"alacsony",med:"k\xF6zepes",high:"magas",paused:"Sz\xFCnet",helpTitle:"Billenty\u0171zet \xE9s eg\xE9r",help:[["W A S D","mozg\xE1s"],["Eg\xE9r","n\xE9zel\u0151d\xE9s"],["Shift","fut\xE1s"],["Sz\xF3k\xF6z","ugr\xE1s, \xFAsz\xE1s felfel\xE9"],["C / Ctrl","lemer\xFCl\xE9s"],["E","haszn\xE1lat, \xE1tv\xE9tel, elenged\xE9s"],["Bal eg\xE9rgomb","kard, l\xF6v\xE9s, \xE1s\xE1s, jav\xEDt\xE1s, v\xF6d\xF6r"],["Jobb eg\xE9rgomb","t\xE1vcs\u0151"],["R","t\xF6lt\xE9s (\xE1gy\xFA, pisztoly)"],["1\u20135, g\xF6rg\u0151","eszk\xF6zv\xE1lt\xE1s"],["Tab (tartva)","kincses t\xE9rk\xE9p"],["M","tengeri t\xE9rk\xE9p"],["Esc","men\xFC"]],controlsBtn:"Ir\xE1ny\xEDt\xE1s",controlsHide:"Ir\xE1ny\xEDt\xE1s elrejt\xE9se",padTitle:"Kontroller",padHelp:[["Bal kar","mozg\xE1s"],["Jobb kar","n\xE9zel\u0151d\xE9s"],["A","ugr\xE1s"],["B","lemer\xFCl\xE9s"],["X","haszn\xE1lat"],["Y","t\xF6lt\xE9s"],["RT","kard, l\xF6v\xE9s, \xE1s\xE1s"],["LT","t\xE1vcs\u0151"],["LB / RB","eszk\xF6zv\xE1lt\xE1s"],["Fel","kincses t\xE9rk\xE9p"],["Back","tengeri t\xE9rk\xE9p"],["Start","men\xFC"]],st_helm:"Korm\xE1ny",st_sails:"Vitorl\xE1k",st_anchor:"Horgony",st_cannon:"\xC1gy\xFA",st_ammo:"L\u0151szeres l\xE1da",st_planks:"Deszk\xE1s l\xE1da",st_food:"Ban\xE1nos l\xE1da",stationLabel:"{0} \xB7 [E] \xC1tveszem",busy:"{0} \xB7 foglalt",crateLabel:"{0} ({1}) \xB7 [E]",ladder:"[E] Felm\xE1sz\xE1s",hatchUp:"[E] Felm\xE1sz\xE1s a fed\xE9lzetre",hatchDown:"[E] Lem\xE1sz\xE1s a rakt\xE9rbe",grabItem:"[E] {0} felv\xE9tele",sell:"[E] Elad\xE1s",talk:"[E] Besz\xE9lget\xE9s",restockHint:"[E] K\xE9szletek felt\xF6lt\xE9se",lightTotem:"[E] A totem meggy\xFAjt\xE1sa",loot_chest:"Kincsesl\xE1da",loot_skull:"Kapit\xE1nykoponya",loot_supplies:"Hord\xF3",loot_bottle:"Palack",loot_coins:"Arany",helmHelp:"A / D: korm\xE1nyz\xE1s \xB7 S: egyenesbe \xB7 E: elenged\xE9s",sailHelp:"W / S: vitorl\xE1k kibont\xE1sa / bevon\xE1sa \xB7 A / D: vitorl\xE1k forgat\xE1sa \xB7 E: elenged\xE9s",cannonHelp:"Eg\xE9r: c\xE9lz\xE1s \xB7 Bal gomb: t\u0171z \xB7 R: t\xF6lt\xE9s \xB7 E: elenged\xE9s",helmHelpPad:"Bal kar: korm\xE1nyz\xE1s \xB7 X: elenged\xE9s",sailHelpPad:"Bal kar: kibont\xE1s, bevon\xE1s, forgat\xE1s \xB7 X: elenged\xE9s",cannonHelpPad:"Jobb kar: c\xE9lz\xE1s \xB7 RT: t\u0171z \xB7 Y: t\xF6lt\xE9s \xB7 X: elenged\xE9s",anchorDrop:"[E] Horgonyt le!",anchorRaise:"[E] (tartva) Horgonyt fel!",loaded:"T\xF6ltve",empty:"\xDCres",reloading:"T\xF6lt\xE9s\u2026",gold:"Arany",goldShort:"arany",freeItem:"ingyen",rescueSoon:"T\xFAl messze sodr\xF3dt\xE1l \u2013 {0} mp m\xFAlva a leg\xE9nys\xE9g visszah\xFAz a haj\xF3ra.",rescued:"A leg\xE9nys\xE9g visszah\xFAzott a fed\xE9lzetre.",balls:"Goly\xF3",planks:"Deszka",food:"Ban\xE1n",water:"V\xEDz a haj\xF3ban",items:["Kard","Pisztoly","\xC1s\xF3","Deszka","V\xF6d\xF6r"],noAmmo:"Nincs t\xF6bb \xE1gy\xFAgoly\xF3!",noPlanks:"Nincs n\xE1lad deszka",noFood:"Elfogyott a ban\xE1n",tookPlanks:"Deszk\xE1k a kezedben: {0}",ateBanana:"Megett\xE9l egy ban\xE1nt",pistolAmmo:"Pisztolygoly\xF3 felt\xF6ltve",leak:"L\xE9k a haj\xF3n! Foltozd be deszk\xE1val!",flooding:"\xD6mlik a v\xEDz a haj\xF3ba! Merd ki v\xF6d\xF6rrel!",sinking:"A haj\xF3 s\xFCllyed!",sunk:"Els\xFCllyedt a haj\xF3\u2026",newShip:"\xDAj haj\xF3 v\xE1r r\xE1tok: {0}",crash:"Z\xE1tonyra futottunk!",fire:"T\u0171z van a fed\xE9lzeten! Oltsd el v\xEDzzel!",enemy:"Ellens\xE9ges haj\xF3 a l\xE1that\xE1ron!",ghost:"Szellemhaj\xF3 bukkant el\u0151 a k\xF6db\u0151l!",enemySunk:"Az ellens\xE9ges haj\xF3 els\xFCllyedt!",boarders:"Csontv\xE1zak ugr\xE1lnak \xE1t a haj\xF3nkra!",youDied:"Meghalt\xE1l",respawn:"Visszat\xE9r\xE9s {0} m\xE1sodperc m\xFAlva\u2026",respawnShip:"A haj\xF3don \xE9bredsz",dig:"\xC1s\xE1s\u2026",found:"Kincs! Vidd el a keresked\u0151nek!",carrying:"Kincs a kezedben \xB7 E: let\xE9tel",sold:"Eladva: +{0} arany",merchant:"Keresked\u0151",merchantHi:"Ahoj, kapit\xE1ny! Mit adhatok?",gotMap:"\xDAj kincses t\xE9rk\xE9p: {0}",noMoreMaps:"Nincs t\xF6bb t\xE9rk\xE9pem, kapit\xE1ny",notEnough:"Nincs el\xE9g aranyad",restock:"Felt\xF6lt\xF6tted a k\xE9szleteket",lootedSupplies:"Zs\xE1km\xE1ny: {0} goly\xF3, {1} deszka, {2} ban\xE1n",bottle:"Palackposta! \xDAj t\xE9rk\xE9p: {0}",repaired:"A haj\xF3t kijav\xEDtott\xE1k",upgraded:"Fejleszt\xE9s: {0} ({1}. szint)",shopMap:"Kincses t\xE9rk\xE9p",shopMapD:"Egy X jel\xF6li, hol a kincs.",shopRiddle:"Rejtv\xE9nyes t\xE9rk\xE9p",shopRiddleD:"Nincs rajta X, csak egy rejtv\xE9ny. M\xE1sf\xE9lszeres kincs.",shopRepair:"Haj\xF3jav\xEDt\xE1s",shopRepairD:"Minden lyukat befoltoznak, a vizet kimerik.",up0:"Meger\u0151s\xEDtett haj\xF3test",up0D:"Kisebb lyukak, lassabban sziv\xE1rog a v\xEDz.",up1:"Jobb vitorl\xE1k",up1D:"Gyorsabb haj\xF3.",up2:"Neh\xE9z \xE1gy\xFAk",up2D:"Nagyobb robban\xE1s, gyorsabb t\xF6lt\xE9s.",up3:"Nagyobb rakt\xE9r",up3D:"T\xF6bb goly\xF3, deszka \xE9s ban\xE1n f\xE9r el.",close:"Bez\xE1r\xE1s",maxed:"k\xE9sz",shopTip:"Eg\xE9r vagy fel/le, azt\xE1n Enter. Bez\xE1r\xE1s: E vagy Esc.",mapTitle:"Tengeri t\xE9rk\xE9p",noMaps:"Nincs kincses t\xE9rk\xE9ped. Vegy\xE9l egyet a keresked\u0151t\u0151l!",riddleText:"{0}: a koponyaszikl\xE1t\xF3l menj {1} l\xE9p\xE9st {2}, \xE9s ott \xE1ss!",dir_N:"\xE9szakra",dir_NE:"\xE9szakkeletre",dir_E:"keletre",dir_SE:"d\xE9lkeletre",dir_S:"d\xE9lre",dir_SW:"d\xE9lnyugatra",dir_W:"nyugatra",dir_NW:"\xE9szaknyugatra",island:"{0}-sziget",outpost:"{0}-kik\xF6t\u0151",cursedWaters:"\xC1tkozott vizek",night:"Lesz\xE1llt az \xE9j. A holtak fel\xE9brednek\u2026",day:"Felkelt a nap",weather_rain:"Esni kezdett",weather_storm:"Vihar k\xF6zeleg! Kapaszkodj!",weather_fog:"S\u0171r\u0171 k\xF6d ereszkedett a tengerre",lightning:"Vill\xE1m csapott az \xE1rbocba!",wind:"Sz\xE9l",speed:"csom\xF3",sailFurled:"Bevonva",sailHalf:"F\xE9lig",sailFull:"Teljesen",bucketFull:"Teli v\xF6d\xF6r \xB7 Bal gomb: ki\xF6nt\xE9s",bucketEmpty:"Bal gomb: mer\xEDt\xE9s",repairHint:"Bal gomb (tartva): jav\xEDt\xE1s",digHint:"Bal gomb: \xE1s\xE1s",totemLit:"Fellobbant a totem ({0}/{1})",shrineAwake:"Mind a h\xE1rom totem \xE9g\u2026 a f\xF6ld megremeg!",captainRises:"Felkelt az \xC1tkozott Kapit\xE1ny!",captainSummons:"A kapit\xE1ny felt\xE1masztja a holtakat!",captainDefeated:"Az \xC1tkozott Kapit\xE1ny elporladt!",captainName:"Az \xC1tkozott Kapit\xE1ny",serpent:"Valami hatalmas mozog a v\xEDz alatt\u2026",serpentName:"A M\xE9lys\xE9g K\xEDgy\xF3ja",serpentAttack:"A k\xEDgy\xF3 t\xE1mad! Kapaszkodj!",serpentGone:"A k\xEDgy\xF3 visszah\xFAz\xF3dott a m\xE9lybe",serpentSlain:"Legy\u0151zt\xE9tek a M\xE9lys\xE9g K\xEDgy\xF3j\xE1t!",welcome:"Kapit\xE1ny! Bontsd ki a vitorl\xE1kat, h\xFAzd fel a horgonyt, \xE9s \xE1llj a korm\xE1nyhoz! A kincses t\xE9rk\xE9pedet a Tab gombbal n\xE9zheted meg."},en:{subtitle:"Pirates. Treasure. Curses.",beta:"BETA",continue:"Continue",newGame:"New game",confirmNew:"Sure? The old save will be lost. Click again!",splitScreen:"Two players, split screen",needPad:"Connect a controller, then click again!",online:"Online co-op",onlineNote:"Up to four of you can crew one ship. The world runs on the computer of whoever creates the room, and continues their save.",hostGame:"Create a room",joinGame:"Join",codePlaceholder:"Room code",connecting:"Connecting\u2026",netError:"Network error:",roomReady:"The room is ready! Room code: {0}",roomCode:"Room code",crew:"Crew",menu:"Menu",back:"Back",playerJoined:"A new sailor came aboard! Crew: {0}",playerLeft:"A sailor left the ship",disconnected:"Lost the connection to the captain",joined:"You are aboard! Welcome to the crew!",resume:"Resume",toTitle:"Back to title",lang:"Language",quality:"Resolution",sens:"Mouse sensitivity",invert:"Invert mouse",digHere:"Dig here! \xB7 Left button",digVeryClose:"You are very close to the treasure!",digClose:"The treasure is nearby\u2026",eshipPirate:"Pirate ship",eshipGhost:"Ghost ship",eshipWater:"Water aboard: {0}%",eshipSinking:"Sinking!",windFrom:"Wind from {0}",windWeak:"light",windModerate:"moderate",windStrong:"strong",windGale:"gale",sailCatch:"Sails: {0}%",sfxVol:"Sound effects",musicVol:"Music",helmRudder:"Rudder",helmHeading:"Heading",pixelFilter:"Pixel filter",shadows:"Shadows",difficulty:"Difficulty",easy:"easy",normal:"normal",hard:"hard",on:"on",off:"off",low:"low",med:"medium",high:"high",paused:"Paused",helpTitle:"Keyboard and mouse",help:[["W A S D","move"],["Mouse","look"],["Shift","sprint"],["Space","jump, swim up"],["C / Ctrl","dive"],["E","use, take over, let go"],["Left mouse","cutlass, shoot, dig, repair, bucket"],["Right mouse","spyglass"],["R","load (cannon, pistol)"],["1\u20135, wheel","switch tool"],["Tab (hold)","treasure map"],["M","sea chart"],["Esc","menu"]],controlsBtn:"Controls",controlsHide:"Hide controls",padTitle:"Controller",padHelp:[["Left stick","move"],["Right stick","look"],["A","jump"],["B","dive"],["X","use"],["Y","load"],["RT","cutlass, shoot, dig"],["LT","spyglass"],["LB / RB","switch tool"],["Up","treasure map"],["Back","sea chart"],["Start","menu"]],st_helm:"Helm",st_sails:"Sails",st_anchor:"Anchor",st_cannon:"Cannon",st_ammo:"Ammunition crate",st_planks:"Plank crate",st_food:"Banana crate",stationLabel:"{0} \xB7 [E] Take over",busy:"{0} \xB7 taken",crateLabel:"{0} ({1}) \xB7 [E]",ladder:"[E] Climb",hatchUp:"[E] Climb up to the deck",hatchDown:"[E] Climb down to the hold",grabItem:"[E] Pick up: {0}",sell:"[E] Sell",talk:"[E] Talk",restockHint:"[E] Restock supplies",lightTotem:"[E] Light the totem",loot_chest:"treasure chest",loot_skull:"captain's skull",loot_supplies:"barrel",loot_bottle:"bottle",loot_coins:"gold",helmHelp:"A / D: steer \xB7 S: straighten \xB7 E: let go",sailHelp:"W / S: unfurl / furl \xB7 A / D: angle the sails \xB7 E: let go",cannonHelp:"Mouse: aim \xB7 Left button: fire \xB7 R: load \xB7 E: let go",helmHelpPad:"Left stick: steer \xB7 X: let go",sailHelpPad:"Left stick: unfurl, furl, angle \xB7 X: let go",cannonHelpPad:"Right stick: aim \xB7 RT: fire \xB7 Y: load \xB7 X: let go",anchorDrop:"[E] Drop anchor!",anchorRaise:"[E] (hold) Raise anchor!",loaded:"Loaded",empty:"Empty",reloading:"Loading\u2026",gold:"Gold",goldShort:"gold",freeItem:"free",rescueSoon:"You drifted too far \u2013 the crew will haul you aboard in {0} s.",rescued:"The crew hauled you back aboard.",balls:"Balls",planks:"Planks",food:"Bananas",water:"Water aboard",items:["Cutlass","Pistol","Shovel","Plank","Bucket"],noAmmo:"Out of cannonballs!",noPlanks:"You are not carrying any planks",noFood:"No bananas left",tookPlanks:"Planks in hand: {0}",ateBanana:"You ate a banana",pistolAmmo:"Pistol ammunition refilled",leak:"We have a leak! Patch it with planks!",flooding:"Water is pouring in! Bail it out with a bucket!",sinking:"The ship is sinking!",sunk:"The ship went down\u2026",newShip:"A new ship awaits you: {0}",crash:"We ran aground!",fire:"Fire on deck! Put it out with water!",enemy:"Enemy ship on the horizon!",ghost:"A ghost ship emerges from the fog!",enemySunk:"The enemy ship has sunk!",boarders:"Skeletons are leaping aboard!",youDied:"You died",respawn:"Returning in {0} seconds\u2026",respawnShip:"You wake up on your ship",dig:"Digging\u2026",found:"Treasure! Take it to the merchant!",carrying:"Treasure in hand \xB7 E: put down",sold:"Sold: +{0} gold",merchant:"Merchant",merchantHi:"Ahoy, captain! What can I do for you?",gotMap:"New treasure map: {0}",noMoreMaps:"I have no more maps, captain",notEnough:"Not enough gold",restock:"Supplies restocked",lootedSupplies:"Loot: {0} balls, {1} planks, {2} bananas",bottle:"Message in a bottle! New map: {0}",repaired:"The ship has been repaired",upgraded:"Upgrade: {0} (level {1})",shopMap:"Treasure map",shopMapD:"An X marks where the treasure lies.",shopRiddle:"Riddle map",shopRiddleD:"No X, only a riddle. One and a half times the treasure.",shopRepair:"Ship repair",shopRepairD:"Every hole patched, every drop bailed out.",up0:"Reinforced hull",up0D:"Smaller holes, slower leaks.",up1:"Better sails",up1D:"A faster ship.",up2:"Heavy cannons",up2D:"Bigger blasts, faster loading.",up3:"Bigger hold",up3D:"Room for more balls, planks and bananas.",close:"Close",maxed:"done",shopTip:"Mouse or up/down, then Enter. Close: E or Esc.",mapTitle:"Sea chart",noMaps:"You have no treasure maps. Buy one from the merchant!",riddleText:"{0}: from the skull rock, walk {1} paces {2} and dig there!",dir_N:"north",dir_NE:"north-east",dir_E:"east",dir_SE:"south-east",dir_S:"south",dir_SW:"south-west",dir_W:"west",dir_NW:"north-west",island:"{0}",outpost:"{0} Outpost",cursedWaters:"Cursed waters",night:"Night has fallen. The dead are stirring\u2026",day:"The sun is rising",weather_rain:"It has started to rain",weather_storm:"A storm is coming! Hold on!",weather_fog:"A thick fog has rolled over the sea",lightning:"Lightning struck the mast!",wind:"Wind",speed:"knots",sailFurled:"Furled",sailHalf:"Half",sailFull:"Full",bucketFull:"Full bucket \xB7 Left button: pour",bucketEmpty:"Left button: scoop",repairHint:"Left button (hold): repair",digHint:"Left button: dig",totemLit:"The totem flares up ({0}/{1})",shrineAwake:"All three totems burn\u2026 the ground trembles!",captainRises:"The Cursed Captain has risen!",captainSummons:"The captain raises the dead!",captainDefeated:"The Cursed Captain has crumbled to dust!",captainName:"The Cursed Captain",serpent:"Something huge is moving beneath the waves\u2026",serpentName:"The Serpent of the Deep",serpentAttack:"The serpent attacks! Hold on!",serpentGone:"The serpent has retreated into the deep",serpentSlain:"You have slain the Serpent of the Deep!",welcome:"Captain! Unfurl the sails, raise the anchor and take the helm! Hold Tab to look at your treasure map."},fr:{subtitle:"Pirates, tr\xE9sors et mal\xE9dictions",beta:"B\xCATA",continue:"Continuer",newGame:"Nouvelle partie",confirmNew:"Vraiment ? L'ancienne sauvegarde sera perdue. Cliquez encore !",splitScreen:"Deux joueurs, \xE9cran partag\xE9",needPad:"Branchez une manette, puis cliquez encore !",online:"Coop\xE9ration en ligne",onlineNote:"Jusqu'\xE0 quatre joueurs sur un m\xEAme navire. Le monde tourne sur l'ordinateur de celui qui cr\xE9e le salon, et sa sauvegarde continue.",hostGame:"Cr\xE9er un salon",joinGame:"Rejoindre",codePlaceholder:"Code du salon",connecting:"Connexion\u2026",netError:"Erreur r\xE9seau :",roomReady:"Le salon est pr\xEAt ! Code : {0}",roomCode:"Code du salon",crew:"\xC9quipage",menu:"Menu",back:"Retour",playerJoined:"Un nouveau matelot est mont\xE9 \xE0 bord ! \xC9quipage : {0}",playerLeft:"Un matelot a quitt\xE9 le navire",disconnected:"Connexion perdue avec le capitaine",joined:"Vous \xEAtes \xE0 bord ! Bienvenue dans l'\xE9quipage !",resume:"Reprendre",toTitle:"Retour \xE0 l'\xE9cran titre",lang:"Langue",quality:"R\xE9solution",sens:"Sensibilit\xE9 de la souris",invert:"Souris invers\xE9e",digHere:"Creusez ici ! \xB7 Clic gauche",digVeryClose:"Vous \xEAtes tout pr\xE8s du tr\xE9sor !",digClose:"Le tr\xE9sor est dans les parages\u2026",eshipPirate:"Navire pirate",eshipGhost:"Vaisseau fant\xF4me",eshipWater:"Eau \xE0 bord : {0} %",eshipSinking:"Il coule !",windFrom:"Vent : {0}",windWeak:"faible",windModerate:"mod\xE9r\xE9",windStrong:"fort",windGale:"temp\xEAte",sailCatch:"Voiles : {0} %",sfxVol:"Effets sonores",musicVol:"Musique",helmRudder:"Gouvernail",helmHeading:"Cap",pixelFilter:"Filtre pixel",shadows:"Ombres",difficulty:"Difficult\xE9",easy:"facile",normal:"normale",hard:"difficile",on:"oui",off:"non",low:"basse",med:"moyenne",high:"haute",paused:"Pause",helpTitle:"Clavier et souris",help:[["W A S D","se d\xE9placer"],["Souris","regarder"],["Maj","courir"],["Espace","sauter, nager vers le haut"],["C / Ctrl","plonger"],["E","utiliser, prendre le poste, l\xE2cher"],["Clic gauche","sabre, tir, creuser, r\xE9parer, seau"],["Clic droit","longue-vue"],["R","charger (canon, pistolet)"],["1\u20135, molette","changer d'outil"],["Tab (maintenir)","carte au tr\xE9sor"],["M","carte marine"],["\xC9chap","menu"]],controlsBtn:"Commandes",controlsHide:"Masquer les commandes",padTitle:"Manette",padHelp:[["Stick gauche","se d\xE9placer"],["Stick droit","regarder"],["A","sauter"],["B","plonger"],["X","utiliser"],["Y","charger"],["RT","sabre, tir, creuser"],["LT","longue-vue"],["LB / RB","changer d'outil"],["Haut","carte au tr\xE9sor"],["Back","carte marine"],["Start","menu"]],st_helm:"Gouvernail",st_sails:"Voiles",st_anchor:"Ancre",st_cannon:"Canon",st_ammo:"Caisse de munitions",st_planks:"Caisse de planches",st_food:"Caisse de bananes",stationLabel:"{0} \xB7 [E] Prendre le poste",busy:"{0} \xB7 occup\xE9",crateLabel:"{0} ({1}) \xB7 [E]",ladder:"[E] Grimper",hatchUp:"[E] Remonter sur le pont",hatchDown:"[E] Descendre dans la cale",grabItem:"[E] Ramasser : {0}",sell:"[E] Vendre",talk:"[E] Parler",restockHint:"[E] Refaire les provisions",lightTotem:"[E] Allumer le totem",loot_chest:"coffre au tr\xE9sor",loot_skull:"cr\xE2ne du capitaine",loot_supplies:"tonneau",loot_bottle:"bouteille",loot_coins:"or",helmHelp:"A / D : barrer \xB7 S : redresser \xB7 E : l\xE2cher",sailHelp:"W / S : d\xE9ferler / ferler \xB7 A / D : orienter les voiles \xB7 E : l\xE2cher",cannonHelp:"Souris : viser \xB7 Clic gauche : feu \xB7 R : charger \xB7 E : l\xE2cher",helmHelpPad:"Stick gauche : barrer \xB7 X : l\xE2cher",sailHelpPad:"Stick gauche : d\xE9ferler, ferler, orienter \xB7 X : l\xE2cher",cannonHelpPad:"Stick droit : viser \xB7 RT : feu \xB7 Y : charger \xB7 X : l\xE2cher",anchorDrop:"[E] Jetez l'ancre !",anchorRaise:"[E] (maintenir) Levez l'ancre !",loaded:"Charg\xE9",empty:"Vide",reloading:"Chargement\u2026",gold:"Or",goldShort:"po",freeItem:"gratuit",rescueSoon:"Vous avez d\xE9riv\xE9 trop loin \u2013 l'\xE9quipage vous remonte \xE0 bord dans {0} s.",rescued:"L'\xE9quipage vous a remont\xE9 \xE0 bord.",balls:"Boulets",planks:"Planches",food:"Bananes",water:"Eau \xE0 bord",items:["Sabre","Pistolet","Pelle","Planche","Seau"],noAmmo:"Plus de boulets !",noPlanks:"Vous n'avez pas de planches",noFood:"Plus de bananes",tookPlanks:"Planches en main : {0}",ateBanana:"Vous avez mang\xE9 une banane",pistolAmmo:"Munitions du pistolet recharg\xE9es",leak:"Voie d'eau ! Colmatez-la avec des planches !",flooding:"L'eau entre \xE0 flots ! \xC9copez avec le seau !",sinking:"Le navire coule !",sunk:"Le navire a sombr\xE9\u2026",newShip:"Un nouveau navire vous attend : {0}",crash:"Nous avons \xE9chou\xE9 !",fire:"Le feu est sur le pont ! \xC9teignez-le avec de l'eau !",enemy:"Navire ennemi \xE0 l'horizon !",ghost:"Un vaisseau fant\xF4me surgit de la brume !",enemySunk:"Le navire ennemi a sombr\xE9 !",boarders:"Des squelettes sautent \xE0 l'abordage !",youDied:"Vous \xEAtes mort",respawn:"Retour dans {0} secondes\u2026",respawnShip:"Vous vous r\xE9veillez sur votre navire",dig:"Vous creusez\u2026",found:"Un tr\xE9sor ! Apportez-le au marchand !",carrying:"Tr\xE9sor en main \xB7 E : poser",sold:"Vendu : +{0} pi\xE8ces d'or",merchant:"Marchand",merchantHi:"Oh\xE9, capitaine ! Que puis-je pour vous ?",gotMap:"Nouvelle carte au tr\xE9sor : {0}",noMoreMaps:"Je n'ai plus de cartes, capitaine",notEnough:"Vous n'avez pas assez d'or",restock:"Provisions refaites",lootedSupplies:"Butin : {0} boulets, {1} planches, {2} bananes",bottle:"Une bouteille \xE0 la mer ! Nouvelle carte : {0}",repaired:"Le navire a \xE9t\xE9 r\xE9par\xE9",upgraded:"Am\xE9lioration : {0} (niveau {1})",shopMap:"Carte au tr\xE9sor",shopMapD:"Un X marque l'emplacement du tr\xE9sor.",shopRiddle:"Carte \xE0 \xE9nigme",shopRiddleD:"Pas de X, seulement une \xE9nigme. Un tr\xE9sor une fois et demie plus riche.",shopRepair:"R\xE9paration du navire",shopRepairD:"Chaque trou colmat\xE9, chaque goutte \xE9cop\xE9e.",up0:"Coque renforc\xE9e",up0D:"Trous plus petits, voies d'eau plus lentes.",up1:"Meilleures voiles",up1D:"Un navire plus rapide.",up2:"Canons lourds",up2D:"Explosions plus fortes, chargement plus rapide.",up3:"Cale agrandie",up3D:"Plus de place pour les boulets, les planches et les bananes.",close:"Fermer",maxed:"termin\xE9",shopTip:"Souris ou haut/bas, puis Entr\xE9e. Fermer : E ou \xC9chap.",mapTitle:"Carte marine",noMaps:"Vous n'avez aucune carte au tr\xE9sor. Achetez-en une au marchand !",riddleText:"{0} : depuis le rocher-cr\xE2ne, faites {1} pas vers {2}, et creusez !",dir_N:"le nord",dir_NE:"le nord-est",dir_E:"l'est",dir_SE:"le sud-est",dir_S:"le sud",dir_SW:"le sud-ouest",dir_W:"l'ouest",dir_NW:"le nord-ouest",island:"{0}",outpost:"Comptoir de {0}",cursedWaters:"Eaux maudites",night:"La nuit est tomb\xE9e. Les morts s'\xE9veillent\u2026",day:"Le soleil se l\xE8ve",weather_rain:"Il commence \xE0 pleuvoir",weather_storm:"Une temp\xEAte approche ! Accrochez-vous !",weather_fog:"Un \xE9pais brouillard est tomb\xE9 sur la mer",lightning:"La foudre a frapp\xE9 le m\xE2t !",wind:"Vent",speed:"n\u0153uds",sailFurled:"Ferl\xE9es",sailHalf:"\xC0 moiti\xE9",sailFull:"Pleines",bucketFull:"Seau plein \xB7 Clic gauche : vider",bucketEmpty:"Clic gauche : \xE9coper",repairHint:"Clic gauche (maintenir) : r\xE9parer",digHint:"Clic gauche : creuser",totemLit:"Le totem s'embrase ({0}/{1})",shrineAwake:"Les trois totems br\xFBlent\u2026 la terre tremble !",captainRises:"Le Capitaine Maudit est de retour !",captainSummons:"Le capitaine rel\xE8ve les morts !",captainDefeated:"Le Capitaine Maudit est tomb\xE9 en poussi\xE8re !",captainName:"Le Capitaine Maudit",serpent:"Quelque chose d'immense bouge sous les vagues\u2026",serpentName:"Le Serpent des Abysses",serpentAttack:"Le serpent attaque ! Accrochez-vous !",serpentGone:"Le serpent est retourn\xE9 dans les abysses",serpentSlain:"Vous avez vaincu le Serpent des Abysses !",welcome:"Capitaine ! D\xE9ferlez les voiles, levez l'ancre et prenez la barre ! Maintenez Tab pour consulter votre carte au tr\xE9sor."}},Zs=["hu","en","fr"],$d={hu:"Magyar",en:"English",fr:"Fran\xE7ais"},ts="hu";try{let s=localStorage.getItem("deadwake.lang");if(Zs.includes(s))ts=s;else{let t=(navigator.language||"").slice(0,2);Zs.includes(t)&&(ts=t)}}catch{}function di(){return ts}function Zd(s){ts=s;try{localStorage.setItem("deadwake.lang",s)}catch{}}function Z(s,...t){let e=Yd[ts][s]??Yd.en[s]??s;return typeof e=="string"&&t.forEach((i,n)=>{e=e.split("{"+n+"}").join(i)}),e}function es(s){if(!s)return"";let t=(ts==="hu"?ec:ts==="fr"?Ed:Sd)[s.id%ec.length];return s.kind==="outpost"?Z("outpost",t):Z("island",t)}var oc=s=>String(s).replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]);function Jd(s,t,e=[]){let i=e.map(n=>n&&typeof n=="object"?n.k?Z(n.k):n.isl!==void 0?es(s.world.islands[n.isl]):"":n);return Z(t,...i)}var Yx=`
  <div class="under"></div><div class="vignette"></div><div class="hurt"></div>
  <div class="spy"></div>
  <canvas class="bars"></canvas>
  <div class="cross"></div>
  <div class="eship"></div>
  <div class="compass"></div>
  <div class="gold"></div>
  <div class="boss"><div class="bname"></div><div class="bbar"><div class="bfill"></div></div></div>
  <div class="place"></div>
  <div class="toasts"></div>
  <div class="prompt"></div>
  <div class="shelp"></div>
  <div class="hp"><div class="hpfill"></div></div>
  <div class="tools"></div>
  <div class="ship"></div>
  <div class="dead"></div>
  <div class="ov chart"><canvas></canvas></div>
  <div class="ov tmap"><canvas></canvas><div class="riddle"></div></div>
  <div class="windui"><canvas width="84" height="84"></canvas><div class="wtxt"></div></div>
  <div class="helmui"><canvas width="160" height="200"></canvas></div>
  <div class="shop"></div>`,_a=class{constructor(t,e){this.game=t,this.p=e,this.root=document.createElement("div"),this.root.className="phud",this.root.innerHTML=Yx,document.getElementById("hud").appendChild(this.root),this.q=i=>this.root.querySelector(i),this.el={};for(let i of["under","vignette","hurt","cross","compass","gold","boss","place","toasts","prompt","shelp","hp","tools","ship","dead"])this.el[i]=this.q("."+i);this.el.help=this.el.shelp,this.el.hpfill=this.q(".hpfill"),this.el.bname=this.q(".bname"),this.el.bfill=this.q(".bfill"),this.chart=this.q(".chart"),this.tmap=this.q(".tmap"),this.shop=this.q(".shop"),this.riddleEl=this.q(".riddle"),this.lastPlace=null,this.shopSel=0,this.spyEl=this.q(".spy"),this.barsCv=this.q(".bars"),this.eshipEl=this.q(".eship"),this.windEl=this.q(".windui"),this.windCv=this.windEl.querySelector("canvas"),this.windTxt=this.q(".wtxt"),this.helmEl=this.q(".helmui"),this.helmCv=this.helmEl.querySelector("canvas")}destroy(){this.root.remove()}place(t){let e=this.root.style;e.left=t[0]*100+"%",e.width=t[2]*100+"%",e.top=(1-t[1]-t[3])*100+"%",e.height=t[3]*100+"%",this.root.classList.toggle("small",t[3]<.9)}toast(t,e=[],i=""){let n=document.createElement("div");for(n.className="toast "+i,n.textContent=Jd(this.game,t,e),this.el.toasts.appendChild(n),setTimeout(()=>n.classList.add("out"),3800),setTimeout(()=>n.remove(),4600);this.el.toasts.children.length>4;)this.el.toasts.firstChild.remove()}big(t){let e=this.el.place;e.textContent=t,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}update(){let t=this.game,e=this.p,i=(-e.worldYaw()*180/Math.PI%360+360)%360,n=[],r=di()==="hu"?["\xC9","\xC9K","K","DK","D","DNy","Ny","\xC9Ny"]:di()==="fr"?["N","NE","E","SE","S","SO","O","NO"]:["N","NE","E","SE","S","SW","W","NW"];for(let p=0;p<8;p++){let M=p*45-i;for(;M>180;)M-=360;for(;M<-180;)M+=360;Math.abs(M)<75&&n.push(`<span class="${p%2?"mn":"mj"}" style="left:${50+M/1.5}%">${r[p]}</span>`)}let a=(90-t.wind.dir*180/Math.PI+360)%360-i;for(;a>180;)a-=360;for(;a<-180;)a+=360;n.push(`<span class="wind" style="left:${50+Math.max(-74,Math.min(74,a))/1.5}%;transform:translateX(-50%) rotate(${a-90}deg)">\u27A4</span>`),n.push('<span class="tick" style="left:50%"></span>'),this.el.compass.innerHTML=n.join(""),this.el.hpfill.style.width=Math.max(0,e.hp)+"%",this.el.hpfill.className="hpfill"+(e.hp<30?" low":""),this.el.gold.innerHTML=`<b>${t.gold}</b> ${Z("gold")}`;let l=Z("items");this.el.tools.innerHTML=En.map((p,M)=>{let v="";return p==="pistol"&&(v=` ${e.pistol}/${e.pistolRes}`),p==="plank"&&(v=` \xD7${e.planks}`),p==="bucket"&&e.bucket&&(v=" \u25CF"),`<div class="slot${M===e.item&&!e.carry?" on":""}"><i>${M+1}</i>${oc(l[M])}${v}</div>`}).join("");let h=t.playerShip;if(h&&!h.dead&&(e.ship===h||t.distToShip(h,e)<80)){let p=Math.round(h.water*100),M=h.sail.h<.15?Z("sailFurled"):h.sail.h<.75?Z("sailHalf"):Z("sailFull");this.el.ship.style.display="block",this.el.ship.innerHTML=`
        <div class="row"><span>${Z("water")}</span><div class="bar"><div class="fill water" style="width:${p}%"></div></div></div>
        ${h.leaks>0?`<div class="warn">\u26A0 ${Z("leak")}</div>`:""}
        ${h.fires.size>0?`<div class="warn fire">\u{1F525} ${Z("fire")}</div>`:""}
        <div class="row small"><span>${Z("balls")}: <b>${h.ammo}</b></span><span>${Z("planks")}: <b>${h.planks}</b></span><span>${Z("food")}: <b>${h.food}</b></span></div>
        <div class="row small"><span>${Z("st_sails")}: <b>${M}</b></span><span>${(h.speed*1.94).toFixed(1)} ${Z("speed")}</span>${h.anchor?"<span>\u2693</span>":""}</div>`}else this.el.ship.style.display="none";let c=t.skeletons.find(p=>p.kind==="captain"&&p.alive&&p.worldPos().distanceTo(e.worldPos())<70)||t.serpents.find(p=>p.alive);c?(this.el.boss.style.display="block",this.el.bname.textContent=Z(c.segs?"serpentName":"captainName"),this.el.bfill.style.width=Math.max(0,c.hp/c.max*100)+"%"):this.el.boss.style.display="none";let u="",d="";if(!(e.dead>0||e.ui)){if(e.station){let p=e.station;d=p.type==="helm"?Z("helmHelp"):p.type==="sails"?Z("sailHelp"):Z("cannonHelp"),p.type==="cannon"&&(u=p.cannon.loaded?Z("loaded"):p.cannon.loading?Z("reloading"):Z("empty")+" \xB7 R"),e.input.kind==="pad"&&(d=p.type==="helm"?Z("helmHelpPad"):p.type==="sails"?Z("sailHelpPad"):Z("cannonHelpPad"))}else if(e.carry)u=Z("carrying");else if(e.interactTarget)u=Jd(t,e.interactTarget.label[0],e.interactTarget.label.slice(1)),e.input.kind==="pad"&&(u=u.replace("[E]","[X]"));else if(e.item===3&&e.ship&&e.planks>0)t.frame%10===0&&(this._hole=e.lookHole()),this._hole&&(u=Z("repairHint"));else if(e.item===4)u=e.bucket?Z("bucketFull"):e.ship&&e.ship.water>.02?Z("bucketEmpty"):"";else if(e.item===2&&!e.ship){let p=1e9;for(let M of t.maps){let v=Math.hypot(M.dig.x-e.pos.x,M.dig.z-e.pos.z);(!M.riddle||v<3)&&(p=Math.min(p,v))}p<3?u=Z("digHere"):p<10?u=Z("digVeryClose"):p<30&&(u=Z("digClose"))}}e.repairing&&(u=Z("repairHint")),this.el.prompt.textContent=u,this.el.prompt.style.opacity=u?1:0,this.el.help.textContent=d,this.el.help.style.opacity=d?1:0,this.el.cross.style.display=e.station&&e.station.type!=="cannon"?"none":"block",this.el.under.style.opacity=e.under?1:0,this.el.hurt.style.opacity=e.hurtT>0?Math.min(1,e.hurtT*2.5):e.hp<30?.35:0,this.el.vignette.style.opacity=(t.cursed||0)*.9,e.dead>0?(this.el.dead.style.display="flex",this.el.dead.innerHTML=`<h1>${Z("youDied")}</h1><p>${Z("respawn",Math.ceil(e.dead))}</p>`):this.el.dead.style.display="none";let f=e.worldPos(),m=t.world.islandAt(f.x,f.z,30),y=m||(t.cursed>.5?"cursed":null);y!==this.lastPlace&&(this.lastPlace=y,y==="cursed"?this.big(Z("cursedWaters")):y&&(this.big(es(y)),y.discovered=!0)),t.frame%3===0&&this.drawWind(i),this.spyEl.style.opacity=Math.max(0,((e.zoom||0)-.2)/.8),this.drawBars(),this.updateEnemyShip();let g=e.station&&e.station.type==="helm"&&e.dead<=0;this.helmEl.style.display=g?"block":"none",g&&this.drawHelm(e.station.ship),e.ui==="shop"&&this.updateShop()}hitMark(){let t=this.el.cross;t.classList.remove("hit"),t.offsetWidth,t.classList.add("hit")}drawBars(){let t=this.game,e=this.p,i=this.barsCv,n=this.root.clientWidth,r=this.root.clientHeight;(i.width!==n||i.height!==r)&&(i.width=n,i.height=r);let o=i.getContext("2d");o.clearRect(0,0,n,r);let a=e.camera,l=new x,h=a.position;for(let c of t.skeletons){if(!c.alive||c.hp>=c.max||c.kind==="captain")continue;c.worldPos(l),l.y+=2.05;let u=l.distanceTo(h);if(u>30||(l.project(a),l.z>1||Math.abs(l.x)>1.1||Math.abs(l.y)>1.1))continue;let d=(l.x*.5+.5)*n,f=(.5-l.y*.5)*r,m=Math.max(24,60-u*1.4);o.fillStyle="rgba(0,0,0,.75)",o.fillRect(d-m/2-1,f-1,m+2,6),o.fillStyle=c.human?"#e05a4a":c.cursed?"#5adf9a":"#e8e0c8",o.fillRect(d-m/2,f,m*Math.max(0,c.hp/c.max),4)}}updateEnemyShip(){let t=this.game,e=this.p.worldPos(),i=null,n=260;for(let o of t.ships){if(o.style==="player"||o.dead)continue;let a=Math.hypot(o.x-e.x,o.z-e.z);a<n&&(n=a,i=o)}if(!i){this.eshipEl.style.display="none";return}this.eshipEl.style.display="block";let r=Math.round(i.water*100);this.eshipEl.innerHTML=`<div>${Z(i.style==="ghost"?"eshipGhost":"eshipPirate")} \xB7 ${Math.round(n)} m</div><div class="bar"><div class="fill" style="width:${r}%"></div></div><div class="small">${i.sinking?Z("eshipSinking"):Z("eshipWater",r)}</div>`}drawWind(t){let e=this.game,i=this.p,n=this.windCv,r=n.getContext("2d"),o=Math.PI/180,a=42,l=42,h=34,c=((90-e.wind.dir/o)%360+360)%360,u=(c+180)%360;r.clearRect(0,0,84,84),r.fillStyle="rgba(20,14,10,.72)",r.beginPath(),r.arc(a,l,h+4,0,7),r.fill(),r.strokeStyle="#6a4a2a",r.lineWidth=2,r.beginPath(),r.arc(a,l,h+3,0,7),r.stroke(),r.fillStyle="#f0c440",r.beginPath(),r.moveTo(a,l-h+1),r.lineTo(a-4,l-h+8),r.lineTo(a+4,l-h+8),r.closePath(),r.fill(),r.save(),r.translate(a,l),r.rotate(-t*o),r.fillStyle="#e04040",r.font='bold 10px "Pixelify Sans", monospace',r.textAlign="center",r.fillText(di()==="hu"?"\xC9":"N",0,-h+18),r.restore(),r.save(),r.translate(a,l),r.rotate((c-t)*o);let d=12+e.wind.str*10;r.strokeStyle="#8fd8ff",r.fillStyle="#8fd8ff",r.lineWidth=4,r.beginPath(),r.moveTo(0,d),r.lineTo(0,-d+6),r.stroke(),r.beginPath(),r.moveTo(0,-d-4),r.lineTo(8,-d+8),r.lineTo(-8,-d+8),r.closePath(),r.fill(),r.lineWidth=2;for(let v of[0,5])r.beginPath(),r.moveTo(0,d-v),r.lineTo(-6,d+6-v),r.moveTo(0,d-v),r.lineTo(6,d+6-v),r.stroke();r.restore();let m=(di()==="hu"?["\xC9","\xC9K","K","DK","D","DNy","Ny","\xC9Ny"]:di()==="fr"?["N","NE","E","SE","S","SO","O","NO"]:["N","NE","E","SE","S","SW","W","NW"])[Math.round(u/45)%8],y=e.wind.str,g=Z(y<.75?"windWeak":y<.95?"windModerate":y<1.2?"windStrong":"windGale"),p=Z("windFrom",m)+`<br>${g}`,M=i.ship&&i.ship===e.playerShip?i.ship:null;if(M){let v=Math.round((M.eff||0)*100);p+=`<br><span style="color:${v>70?"#9aff9a":v>45?"#f0c440":"#ff9a7a"}">${Z("sailCatch",v)}</span>`}this.windTxt.innerHTML=p}drawHelm(t){let e=this.game,i=this.helmCv,n=i.getContext("2d"),r=160,o=66,a=80,l=78;n.clearRect(0,0,r,200);let h=Math.PI/180,c=((90-t.yaw/h)%360+360)%360,u=((90-e.wind.dir/h)%360+360)%360;n.fillStyle="#5a3a1a",n.beginPath(),n.arc(a,l,o+8,0,7),n.fill(),n.fillStyle="#c9a03a",n.beginPath(),n.arc(a,l,o+5,0,7),n.fill(),n.fillStyle="#efe2c0",n.beginPath(),n.arc(a,l,o,0,7),n.fill();let d=di()==="hu"?["\xC9","K","D","Ny"]:di()==="fr"?["N","E","S","O"]:["N","E","S","W"];n.save(),n.translate(a,l),n.rotate(-c*h);for(let p=0;p<360;p+=15){let M=p%90===0,v=p%45===0;n.save(),n.rotate(p*h),n.fillStyle="#3a2410",n.fillRect(-1,-o+2,2,M?12:v?8:5),M&&(n.font='bold 15px "Pixelify Sans", monospace',n.textAlign="center",n.fillStyle=p===0?"#a01818":"#3a2410",n.fillText(d[p/90],0,-o+28)),n.restore()}n.fillStyle="#a01818",n.beginPath(),n.moveTo(0,-o+32),n.lineTo(6,0),n.lineTo(-6,0),n.closePath(),n.fill(),n.fillStyle="#3a2410",n.beginPath(),n.moveTo(0,o-32),n.lineTo(6,0),n.lineTo(-6,0),n.closePath(),n.fill(),n.save(),n.rotate(u*h),n.strokeStyle="#2a7ac8",n.fillStyle="#2a7ac8",n.lineWidth=3,n.beginPath(),n.moveTo(0,o-14),n.lineTo(0,-o+40),n.stroke(),n.beginPath(),n.moveTo(0,-o+34),n.lineTo(6,-o+44),n.lineTo(-6,-o+44),n.closePath(),n.fill(),n.restore(),n.restore(),n.fillStyle="#d02020",n.beginPath(),n.moveTo(a,l-o-2),n.lineTo(a-6,l-o-12),n.lineTo(a+6,l-o-12),n.closePath(),n.fill(),n.fillStyle="#c9a03a",n.beginPath(),n.arc(a,l,5,0,7),n.fill(),n.font='bold 13px "Pixelify Sans", monospace',n.textAlign="center",n.fillStyle="#fff",n.fillText(`${Z("helmHeading")}: ${Math.round(c)}\xB0`,a,l+o+22);let f=120,m=a-f/2,y=l+o+32;n.fillStyle="rgba(20,14,10,.8)",n.fillRect(m-2,y-2,f+4,14),n.fillStyle="#6a4a2a",n.fillRect(a-1,y-2,2,14);let g=a-t.rudder*(f/2);n.fillStyle="#f0c440",n.fillRect(g-4,y,8,10),n.font='11px "Pixelify Sans", monospace',n.fillStyle="#ddd",n.fillText(Z("helmRudder"),a,y+24)}drawChart(){let t=this.game,e=this.chart.querySelector("canvas"),i=e.getContext("2d"),n=e.width=e.height=512;i.imageSmoothingEnabled=!1,i.fillStyle="#d9c39a",i.fillRect(0,0,n,n);let r=(l=>()=>(l=l*16807%2147483647)/2147483647)(7);for(let l=0;l<1800;l++)i.fillStyle=`rgba(120,90,50,${r()*.08})`,i.fillRect(r()*n|0,r()*n|0,2,2);i.strokeStyle="rgba(90,60,30,0.15)";for(let l=0;l<=8;l++)i.beginPath(),i.moveTo(l*n/8,0),i.lineTo(l*n/8,n),i.moveTo(0,l*n/8),i.lineTo(n,l*n/8),i.stroke();let o=n/Fe;for(let l of t.world.cursedZones)i.fillStyle="rgba(40,90,60,0.22)",i.beginPath(),i.arc(l.x*o,l.y*o,l.r*o,0,7),i.fill();for(let l of t.world.wrecks)l.seen&&(i.fillStyle="#5a3a1a",i.font="12px monospace",i.textAlign="center",i.fillText("\u2693",l.x*o,l.z*o+4));for(let l of t.world.islands)l.chart||(l.chart=ac(l,1/6.25)),i.globalAlpha=l.discovered?1:.55,i.drawImage(l.chart,Math.round(l.x0*o),Math.round(l.z0*o)),i.globalAlpha=1,l.discovered&&(i.font='bold 11px "Pixelify Sans", monospace',i.fillStyle="#3a2410",i.textAlign="center",i.fillText(es(l),l.cx*o,(l.cz+l.r)*o+12)),t.maps.some(h=>h.isl===l)&&(i.fillStyle="#a01818",i.font="bold 16px monospace",i.textAlign="center",i.fillText("\u2715",l.cx*o,l.cz*o+5));let a=(l,h)=>{i.save(),i.translate(l.x*o,l.z*o),i.rotate(-l.yaw),i.fillStyle=h,i.beginPath(),i.moveTo(7,0),i.lineTo(-5,4),i.lineTo(-5,-4),i.closePath(),i.fill(),i.restore()};for(let l of t.ships)!l.dead&&l!==t.playerShip&&l.style!=="player"&&t.distToShip(l,this.p)<500&&a(l,l.style==="ghost"?"#1a8a5a":"#202020");t.playerShip&&!t.playerShip.dead&&a(t.playerShip,"#b8301e");for(let l of t.players){let h=l.worldPos();i.fillStyle=l===this.p?"#1a4ab8":"#4a8ad8",i.fillRect(h.x*o-2,h.z*o-2,4,4)}i.fillStyle="#5a3a1a",i.font="bold 14px monospace",i.textAlign="center",i.fillText(di()==="hu"?"\xC9":"N",n-30,26),i.fillRect(n-31,30,2,20)}showChart(t){this.chart.style.display=t?"flex":"none",t&&this.drawChart()}showTreasure(t){let e=this.game;if(this.tmap.style.display=t?"flex":"none",!t)return;let i=this.tmap.querySelector("canvas"),n=i.getContext("2d"),r=360;i.width=r,i.height=r,n.fillStyle="#e2cc9c",n.fillRect(0,0,r,r);for(let h=0;h<900;h++)n.fillStyle=`rgba(120,90,50,${Math.random()*.1})`,n.fillRect(Math.random()*r|0,Math.random()*r|0,2,2);let o=this.p.worldPos(),a=[...e.maps].sort((h,c)=>Math.hypot(h.isl.cx-o.x,h.isl.cz-o.z)-Math.hypot(c.isl.cx-o.x,c.isl.cz-o.z))[0];if(n.textAlign="center",n.fillStyle="#3a2410",this.riddleEl.textContent="",!a){n.font='15px "Pixelify Sans", monospace',$x(n,Z("noMaps"),r/2,r/2-20,r-40,20);return}let l=a.isl;if(a.riddle)l.tmapR||(l.tmapR=ac(l,Math.min(2,220/l.w),!0)),n.globalAlpha=.85,n.drawImage(l.tmapR,(r-l.tmapR.width)/2,(r-l.tmapR.height)/2+20),n.globalAlpha=1,n.font='bold 18px "Pixelify Sans", monospace',n.fillText(es(l),r/2,28),this.riddleEl.textContent=Z("riddleText",es(l),a.riddle.steps,Z("dir_"+a.riddle.dir));else{l.tmap||(l.tmap=ac(l,Math.min(2,260/l.w)));let h=Math.min(2,260/l.w),c=(r-l.tmap.width)/2,u=(r-l.tmap.height)/2+10;n.drawImage(l.tmap,c,u);let d=c+(a.dig.x-l.x0)*h,f=u+(a.dig.z-l.z0)*h;n.strokeStyle="#a01818",n.lineWidth=4,n.beginPath(),n.moveTo(d-9,f-9),n.lineTo(d+9,f+9),n.moveTo(d+9,f-9),n.lineTo(d-9,f+9),n.stroke(),n.font='bold 18px "Pixelify Sans", monospace',n.fillText(es(l),r/2,28)}e.maps.length>1&&(n.font="12px monospace",n.fillText(`+${e.maps.length-1}`,r-24,r-14)),n.fillStyle="#5a3a1a",n.font="bold 13px monospace",n.fillText(di()==="hu"?"\xC9":"N",r-22,24),n.fillRect(r-23,28,2,14)}shopItems(){let t=this.game,e=[{id:"map",name:Z("shopMap"),desc:Z("shopMapD")},{id:"riddle",name:Z("shopRiddle"),desc:Z("shopRiddleD")},{id:"repair",name:Z("shopRepair"),desc:Z("shopRepairD")}];for(let i=0;i<4;i++)e.push({id:"up"+i,name:`${Z("up"+i)} ${"\u2605".repeat(t.upgrades[i])}${"\u2606".repeat(2-t.upgrades[i])}`,desc:Z("up"+i+"D")});return e.push({id:"close",name:Z("close"),desc:""}),e}openShop(){let t=this.p;t.ui="shop",this.shopSel=0,this.shopFrame=this.game.frame,this.shop.style.display="flex",t.input.kind==="km"&&Me.unlock(),this.renderShop(),xt.play("ui",1)}closeShop(){this.p.ui=null,this.shop.style.display="none",this.p.input.kind==="km"&&this.game.state==="play"&&Me.lock()}renderShop(){let t=this.game,e=this.shopItems();this.shop.innerHTML=`<div class="panel"><h2>${Z("merchant")}</h2><p class="hi">${Z("merchantHi")}</p><div class="gold2">${Z("gold")}: <b>${t.gold}</b></div>
      ${e.map((i,n)=>{let r=i.id==="close"?null:t.priceOf(i.id),o=i.id!=="close"&&(r===null||r>t.gold);return`<button data-i="${n}" class="${n===this.shopSel?"sel":""} ${o?"dis":""}"><span class="n">${oc(i.name)}</span><span class="pr">${r===null?i.id==="close"?"":Z("maxed"):r===0?Z("freeItem"):r+" "+Z("goldShort")}</span><span class="d">${oc(i.desc)}</span></button>`}).join("")}
      <div class="tip">${Z("shopTip")}</div></div>`,this.shop.querySelectorAll("button").forEach(i=>{i.onclick=()=>{this.shopSel=+i.dataset.i,this.shopBuy()},i.onmouseenter=()=>{this.shopSel=+i.dataset.i,this.shop.querySelectorAll("button").forEach(n=>n.classList.toggle("sel",n===i))}})}shopBuy(){let t=this.shopItems()[this.shopSel];if(t.id==="close"){this.closeShop();return}this.game.act(this.p,{a:"buy",what:t.id}),setTimeout(()=>{this.p.ui==="shop"&&this.renderShop()},80)}updateShop(){if(this.game.frame-this.shopFrame<2)return;let t=this.p.input.menuNav(),e=this.shopItems();if(t.back||this.p.input.use()){this.closeShop();return}t.up&&(this.shopSel=(this.shopSel+e.length-1)%e.length,this.renderShop(),xt.play("ui",.5)),t.down&&(this.shopSel=(this.shopSel+1)%e.length,this.renderShop(),xt.play("ui",.5)),t.ok&&this.shopBuy(),this.game.frame%30===0&&this.renderShop()}};function ac(s,t,e){let i=Math.max(1,Math.round(s.w*t)),n=Math.max(1,Math.round(s.h*t)),r=document.createElement("canvas");r.width=i,r.height=n;let o=r.getContext("2d"),a=o.createImageData(i,n);for(let l=0;l<n;l++)for(let h=0;h<i;h++){let c=Math.min(s.h-1,Math.floor(l/t))*s.w+Math.min(s.w-1,Math.floor(h/t)),u=s.hm[c],d=s.f[c],f=null;if(u>=.5?f=e?[170,140,100]:u<=1.5?[214,190,130]:u>=9?[120,112,100]:s.kind==="cursed"?[90,100,80]:[110,150,80]:d>-.15&&!e&&(f=[150,180,170]),!f)continue;let m=(l*i+h)*4;a.data[m]=f[0],a.data[m+1]=f[1],a.data[m+2]=f[2],a.data[m+3]=255}if(o.putImageData(a,0,0),s.landmark&&e){let l=(s.landmark.x-s.x0)*t,h=(s.landmark.z-s.z0)*t;o.fillStyle="#3a2410",o.font="bold 16px monospace",o.textAlign="center",o.fillText("\u2620",l,h+6)}return r}function $x(s,t,e,i,n,r){let o=t.split(" "),a="";for(let l of o){let h=a?a+" "+l:l;s.measureText(h).width>n&&a?(s.fillText(a,e,i),i+=r,a=l):a=h}s.fillText(a,e,i)}var Ma="deadwake.save.v1",Fi={exists(){try{return!!localStorage.getItem(Ma)}catch{return!1}},load(){try{let s=localStorage.getItem(Ma);return s?JSON.parse(s):null}catch{return null}},clear(){try{localStorage.removeItem(Ma)}catch{}},store(s){if(!s.mode||s.mode==="client"||!s.world)return;let t=s.world,e=s.playerShip,i={v:1,t:Date.now(),gold:s.gold,up:s.upgrades,hour:+s.hour.toFixed(2),stats:s.stats,maps:s.mapsNet(),dug:t.islands.map(n=>n.digs.map(r=>r.dug?1:0)),disc:t.islands.filter(n=>n.discovered).map(n=>n.id),cap:t.islands.filter(n=>n.captainDone).map(n=>n.id),loose:t.islands.filter(n=>n.looseTaken).map(n=>n.id),wrecks:t.wrecks.map(n=>n.spawned?1:0),ship:e?{ammo:e.ammo,planks:e.planks,food:e.food}:null};try{localStorage.setItem(Ma,JSON.stringify(i))}catch{}},apply(s,t){let e=s.world;s.gold=t.gold||0,s.upgrades=t.up||[0,0,0,0],s.hour=t.hour??9,s.stats=t.stats||s.stats,(t.dug||[]).forEach((i,n)=>{let r=e.islands[n];r&&i.forEach((o,a)=>{r.digs[a]&&(r.digs[a].dug=!!o)})});for(let i of t.disc||[])e.islands[i]&&(e.islands[i].discovered=!0);for(let i of t.cap||[])e.islands[i]&&(e.islands[i].captainDone=!0);for(let i of t.loose||[])e.islands[i]&&(e.islands[i].looseTaken=!0);(t.wrecks||[]).forEach((i,n)=>{e.wrecks[n]&&i&&(e.wrecks[n].spawned=!0)}),s.maps=[];for(let[i,n,r,o]of t.maps||[]){let a=e.islands[i];!a||!a.digs[n]||a.digs[n].dug||s.maps.push({isl:a,dig:a.digs[n],hits:0,riddle:r>=0?{steps:r,dir:o}:null})}s.maps.length||s.giveMap(!0),t.ship&&s.playerShip&&Object.assign(s.playerShip,t.ship)}};var Zx="https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js",Kd="deadwake-r-",Fr=null;function jd(){return window.Peer?Promise.resolve():Fr||(Fr=new Promise((s,t)=>{let e=document.createElement("script");e.src=Zx,e.onload=s,e.onerror=()=>{Fr=null,t(new Error("PeerJS"))},document.head.appendChild(e)}),Fr)}var Jx=()=>{let s="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",t="";for(let e=0;e<5;e++)t+=s[Math.floor(Math.random()*s.length)];return t},Js=s=>Math.round(s*100)/100,ba=class{constructor(t){this.diff=t,this.pend=new Map}set(t,e){this.diff.set(t,e),this.pend.set(t,e)}},cc={host(s,t,e){jd().then(()=>{let i=Jx(),n=new window.Peer(Kd+i);n.on("open",()=>{s.startSession("host");let r=new lc(s,n,i);s.net=r,t&&t(i),s.sayAll("roomReady",[i],"good")}),n.on("error",r=>{r.type==="unavailable-id"?(n.destroy(),this.host(s,t,e)):e&&e(r.type||r.message)})}).catch(i=>e&&e(i.message))},join(s,t,e){jd().then(()=>{let i=new window.Peer;i.on("open",()=>{let n=i.connect(Kd+t,{reliable:!0}),r=!1;n.on("open",()=>{r=!0,new hc(s,i,n,t).send({t:"hello",lang:navigator.language||""})}),n.on("error",o=>e&&e(o.message||"conn")),setTimeout(()=>{r||e&&e("timeout")},12e3)}),i.on("error",n=>e&&e(n.type||n.message))}).catch(i=>e&&e(i.message))}},lc=class{constructor(t,e,i){this.G=t,this.peer=e,this.code=i,this.conns=new Map,this.fxq=[],this.t=0,this.vt=0,this.nextPid=10;for(let n of t.ships)n.grid.log=new Map;e.on("connection",n=>{n.on("open",()=>{if(t.players.length>=4){n.send({t:"full"}),setTimeout(()=>n.close(),500);return}let r=this.nextPid++,o=new Kn(t,r,{color:t.players.length%4});t.players.push(o),t.playerShip&&(o.ship=t.playerShip,o.pos.set(-3,-2.5+19*.25+.02,1.5)),this.conns.set(r,n),n.on("data",a=>this.onData(o,a)),n.on("close",()=>this.drop(r)),n.send({t:"welcome",id:r,full:this.fullState()}),t.sayAll("playerJoined",[t.players.length],"good")})})}close(){try{this.peer.destroy()}catch{}}drop(t){let e=this.G,i=e.playerById(t);if(this.conns.delete(t),!!i){i.station&&(i.station.user=null),i.carry&&i.carry!==!0&&(i.carry.carried=null);for(let n of e.loot)n.carried===i&&(n.carried=null);e.scene.remove(i.avatar.root),e.players.splice(e.players.indexOf(i),1),e.sayAll("playerLeft",[],"")}}send(t){this.broadcast(t)}sendTo(t,e){let i=this.conns.get(t);i&&i.open&&i.send(e)}broadcast(t){for(let e of this.conns.values())e.open&&e.send(t)}queueFx(t){this.fxq.push(t)}onData(t,e){let i=this.G;if(e.t==="p"){t.applyNet(e);return}if(e.t==="act"){i.applyAct(t,e);return}if(e.t==="died"){t.station&&(t.station.user=null);for(let n of i.loot)n.carried===t&&(n.carried=null)}}fullState(){let t=this.G,e=t.world;return{gold:t.gold,hour:t.hour,up:t.upgrades,maps:t.mapsNet(),dug:e.islands.map(i=>i.digs.map(n=>n.dug?1:0)),disc:e.islands.filter(i=>i.discovered).map(i=>i.id),props:e.props.map((i,n)=>i.diff&&i.diff.size||i.looted||i.lit?[n,i.looted?1:0,i.lit?1:0,i.diff?[...i.diff].flat():[]]:null).filter(Boolean),ships:t.ships.map(i=>{let n=[];for(let r=0;r<i.grid.d.length;r++)i.grid.d[r]!==i.grid.orig[r]&&n.push(r,i.grid.d[r]);return[i.netId,n]}),snap:this.snapshot()}}snapshot(){let t=this.G;return{t:"snap",h:Js(t.hour),w:[Js(t.wind.dir),Js(t.wind.str)],we:t.weather.netState(),g:t.gold,ps:t.playerShip?t.playerShip.netId:-1,ships:t.ships.map(e=>e.netState()),pl:t.players.map(e=>e.netState()),sk:t.skeletons.filter(e=>e.alive).map(e=>e.netState()),sh:t.sharks.filter(e=>e.alive).map(e=>e.netState()),se:t.serpents.filter(e=>e.alive).map(e=>e.netState()),lo:t.loot.map(e=>[e.id,e.kind,e.style,e.ship?e.ship.netId:-1,Js(e.pos.x),Js(e.pos.y),Js(e.pos.z),e.carried?e.carried.id??0:0,e.floating?1:0,e.value]),up:t.upgrades}}update(t){let e=this.G;if(!this.conns.size){this.fxq.length=0;for(let i of e.ships)i.grid.log||(i.grid.log=new Map);return}this.t-=t,this.vt-=t;for(let i of e.ships)i.grid.log||(i.grid.log=new Map);for(let i of e.world.props)i.grid&&!(i.grid.log instanceof ba)&&(i.diff=i.diff||new Map,i.grid.log=new ba(i.diff));if(this.vt<=0){this.vt=.1;for(let i of e.ships)i.grid.log&&i.grid.log.size&&(this.broadcast({t:"vox",g:"s"+i.netId,d:[...i.grid.log].flat()}),i.grid.log.clear());e.world.props.forEach((i,n)=>{i.grid&&i.grid.log&&i.grid.log.pend&&i.grid.log.pend.size&&(this.broadcast({t:"vox",g:"p"+n,d:[...i.grid.log.pend].flat()}),i.grid.log.pend.clear())})}if(this.t<=0){this.t=1/12;let i=this.snapshot();this.fxq.length&&(i.fx=this.fxq,this.fxq=[]),this.broadcast(i)}}},hc=class{constructor(t,e,i,n){this.G=t,this.peer=e,this.conn=i,this.code=n,this.t=0,this.ready=!1,i.on("data",r=>this.onData(r)),i.on("close",()=>{t.sayAll("disconnected",[],"bad"),setTimeout(()=>t.backToTitle(),2500)})}close(){try{this.peer.destroy()}catch{}}send(t){this.conn.open&&this.conn.send(t)}sendTo(){}broadcast(){}queueFx(){}onData(t){let e=this.G;switch(t.t){case"full":e.menu.status(e.menu&&"Full");break;case"welcome":{e.startSession("client",{myId:t.id}),e.net=this,this.applyFull(t.full),this.ready=!0;break}case"snap":this.ready&&this.applySnap(t);break;case"vox":this.applyVox(t);break;case"say":for(let i of e.huds)i.toast(t.k,t.a,t.c);break;case"hurt":for(let i of e.localPlayers)i.hurt(t.n,t.src);break;case"ammo":for(let i of e.localPlayers)i.pistolRes=15;break;case"maps":this.applyMaps(t.m);break;case"looted":e.world.props[t.pi]&&(e.world.props[t.pi].looted=!0);break;case"lit":e.world.props[t.pi]&&(e.world.props[t.pi].lit=!0);break}}applyMaps(t){let e=this.G.world;this.G.maps=t.map(([i,n,r,o])=>({isl:e.islands[i],dig:e.islands[i].digs[n],hits:0,riddle:r>=0?{steps:r,dir:o}:null})).filter(i=>i.isl&&i.dig)}applyFull(t){let e=this.G,i=e.world;e.gold=t.gold,e.hour=t.hour,e.upgrades=t.up,this.applyMaps(t.maps),t.dug.forEach((n,r)=>n.forEach((o,a)=>{i.islands[r].digs[a]&&(i.islands[r].digs[a].dug=!!o)}));for(let n of t.disc)i.islands[n].discovered=!0;for(let[n,r,o,a]of t.props){let l=i.props[n];if(l){l.looted=!!r,l.lit=!!o,l.diff=new Map;for(let h=0;h<a.length;h+=2)l.diff.set(a[h],a[h+1]);if(l.grid)for(let[h,c]of l.diff)l.grid.setIdx(h,c)}}this.pendingShipDiffs=new Map(t.ships.map(([n,r])=>[n,r])),this.applySnap(t.snap)}applyVox(t){let e=this.G;if(t.g[0]==="s"){let i=e.shipById(+t.g.slice(1));if(!i)return;for(let n=0;n<t.d.length;n+=2)i.grid.setIdx(t.d[n],t.d[n+1])}else{let i=e.world.props[+t.g.slice(1)];if(!i)return;i.diff=i.diff||new Map;for(let n=0;n<t.d.length;n+=2)i.diff.set(t.d[n],t.d[n+1]),i.grid&&i.grid.setIdx(t.d[n],t.d[n+1]);i.grid&&t.d.length&&e.fx.burst(new x(i.x,i.y+1,i.z),4,"dust")}}applySnap(t){let e=this.G;e.hour=t.h,e.wind.dir=t.w[0],e.wind.str=t.w[1],e.gold=t.g,e.upgrades=t.up,e.weather.kind!==t.we[0]&&e.weather.set(t.we[0]);let i=new Set;for(let o of t.ships){i.add(o.id);let a=e.shipById(o.id);if(!a){a=new wi(e,o.st,o.x,o.z,o.yaw,{netId:o.id,remote:!0}),e.scene.add(a.root),e.ships.push(a);let l=this.pendingShipDiffs&&this.pendingShipDiffs.get(o.id);if(l){for(let h=0;h<l.length;h+=2)a.grid.setIdx(l[h],l[h+1]);this.pendingShipDiffs.delete(o.id)}}a.applyNet(o)}for(let o of[...e.ships])i.has(o.netId)||e.removeShip(o);e.playerShip=e.shipById(t.ps);let n=new Set;for(let o of t.pl){if(n.add(o.id),e.localPlayers.some(l=>l.id===o.id))continue;let a=e.playerById(o.id);a||(a=new Kn(e,o.id,{color:o.col}),e.players.push(a)),a.applyNet(o)}for(let o of[...e.players])!o.local&&!n.has(o.id)&&(e.scene.remove(o.avatar.root),e.players.splice(e.players.indexOf(o),1));this.syncList(e.skeletons,t.sk,o=>new Xs(e,o[3],o[5],["skeleton","cursed","captain","pirate"][o[1]],{id:o[0],remote:!0,ship:o[2]>=0?e.shipById(o[2]):null,y:o[4]}),(o,a)=>{o.ship=a[2]>=0?e.shipById(a[2]):null,o.net={p:new x(a[3],a[4],a[5]),y:a[6],a:a[7],r:a[8],sp:a[9]},o.hp=a[10],o.max=a[11]}),this.syncList(e.sharks,t.sh,o=>new qs(e,null,{id:o[0],remote:!0}),(o,a)=>{o.net={p:new x(a[1],a[2],a[3]),y:a[4]},o.inited||(o.pos.copy(o.net.p),o.inited=!0)}),this.syncList(e.serpents,t.se,o=>new Ys(e,o[1]>=0?e.shipById(o[1]):null,{id:o[0],remote:!0}),(o,a)=>{o.net={h:new x(a[2],a[3],a[4])},o.hp=a[5],o.max=a[6]});let r=new Set;for(let o of t.lo){r.add(o[0]);let a=e.loot.find(c=>c.id===o[0]),l=o[3]>=0?e.shipById(o[3]):null;a||(a=e.spawnLoot(o[1],new x(o[4],o[5],o[6]),l,{id:o[0],style:o[2],value:o[9],remote:!0})),a.ship!==l&&e.setLootFrame(a,l),a.net=new x(o[4],o[5],o[6]),a.floating=!!o[8],a.value=o[9];let h=o[7]?e.playerById(o[7]):null;a.carried=h;for(let c of e.localPlayers)h===c?c.carry=a:c.carry===a&&o[7]&&h!==c&&(c.carry=null)}for(let o of[...e.loot])r.has(o.id)||e.removeLoot(o);for(let o of t.fx||[])this.applyFx(o)}syncList(t,e,i,n){let r=new Set;for(let o of e){r.add(o[0]);let a=t.find(l=>l.id===o[0]);a||(a=i(o),t.push(a)),n(a,o)}for(let o=t.length-1;o>=0;o--)if(!r.has(t[o].id)){let a=t[o];a.die&&a.fig,a.remove(),t.splice(o,1)}}applyFx(t){let e=this.G,i=t[0];if(i==="#ball"){e.spawnBall(new x(t[2],t[3],t[4]),new x(t[5],t[6],t[7]),null,{id:t[1],ghost:!!t[8],small:!!t[9],visual:!0});return}if(i==="#end"){let n=e.balls.find(r=>r.id===t[1]);n&&(n.done=!0,e.scene.remove(n.mesh));return}if(i==="#bolt"){e.weather.lightning();return}if(i[0]==="@"){let n=t[5]?new x(t[1],t[2],t[3]):null;xt.play(i.slice(1),t[4],n?e.distToCam(n):0);return}e.fx.burst(new x(t[1],t[2],t[3]),t[4],i,t[5]||{})}update(t){if(this.t-=t,this.t<=0&&this.ready){this.t=1/15;for(let e of this.G.localPlayers)this.send({t:"p",...e.netState()})}}};var Or=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),wa=class{constructor(t){this.game=t,this.el=document.getElementById("menu"),this.mode=null,this.sel=0}hide(){this.el.style.display="none",this.mode=null}show(t){this.el.style.display="flex",this.el.innerHTML=`<div class="panel">${t}</div>`,this.buttons=[...this.el.querySelectorAll("button")],this.sel=Math.min(this.sel,this.buttons.length-1),this.buttons.forEach((e,i)=>{e.onmouseenter=()=>{this.sel=i,this.focus()},e.onclick=n=>{n.stopPropagation(),xt.init(),xt.play("ui",1),this.handle(e.dataset.a,e)}}),this.focus()}focus(){this.buttons.forEach((t,e)=>t.classList.toggle("sel",e===this.sel))}settingsHtml(){let t=this.game,e=t.settings,i=["low","med","high"],n=["easy","normal","hard"];return`<div class="opts">
      <button data-a="lang">${Z("lang")}: ${$d[di()]}</button>
      <button data-a="quality">${Z("quality")}: ${Z(i[e.quality])}</button>
      <button data-a="sens">${Z("sens")}: ${e.sens.toFixed(1)}</button>
      <button data-a="invert">${Z("invert")}: ${e.invert?Z("on"):Z("off")}</button>
      <button data-a="dither">${Z("pixelFilter")}: ${e.dither?Z("on"):Z("off")}</button>
      <button data-a="shadows">${Z("shadows")}: ${e.shadows?Z("on"):Z("off")}</button>
      <button data-a="sfx">${Z("sfxVol")}: ${Math.round(e.sfx*100)}%</button>
      <button data-a="music">${Z("musicVol")}: ${Math.round(e.music*100)}%</button>
      <button data-a="difficulty">${Z("difficulty")}: ${Z(n[e.difficulty])}</button>
    </div>`}helpHtml(){return this.showHelp?`<button data-a="help">${Z("controlsHide")}</button><div class="help"><h3>${Z("helpTitle")}</h3>${Z("help").map(([t,e])=>`<div><kbd>${Or(t)}</kbd><span>${Or(e)}</span></div>`).join("")}
      <h3>${Z("padTitle")}</h3>${Z("padHelp").map(([t,e])=>`<div><kbd>${Or(t)}</kbd><span>${Or(e)}</span></div>`).join("")}</div>`:`<button data-a="help">${Z("controlsBtn")}</button>`}title(){this.mode="title",this.sel=0;let t=Fi.exists();this.show(`<h1 class="logo">DEADWAKE</h1><div class="sub">${Z("subtitle")}</div><div class="beta">${Z("beta")}</div>
      ${t?`<button data-a="continue" class="main">${Z("continue")}</button>`:""}
      <button data-a="new" class="${t?"":"main"}">${Z("newGame")}</button>
      <button data-a="split">${Z("splitScreen")}</button>
      <button data-a="online">${Z("online")}</button>
      ${this.settingsHtml()}
      ${this.helpHtml()}`)}pause(){this.mode="pause",this.sel=0;let t=this.game,e=t.net&&t.isHost?`<div class="room">${Z("roomCode")}: <b>${Or(t.net.code)}</b> \xB7 ${Z("crew")}: ${t.players.length}</div>`:"";this.show(`<h2>${t.mode==="host"||t.mode==="client"?Z("menu"):Z("paused")}</h2>${e}
      <button data-a="resume" class="main">${Z("resume")}</button>
      ${this.settingsHtml()}
      <button data-a="title">${Z("toTitle")}</button>
      ${this.helpHtml()}`)}online(){this.mode="online",this.sel=0,this.show(`<h2>${Z("online")}</h2><p class="note">${Z("onlineNote")}</p>
      <button data-a="host" class="main">${Z("hostGame")}</button>
      <div class="join"><input id="joincode" maxlength="6" placeholder="${Z("codePlaceholder")}" autocomplete="off"><button data-a="join">${Z("joinGame")}</button></div>
      <div class="status" id="netstatus"></div>
      <button data-a="back">${Z("back")}</button>`)}status(t){let e=document.getElementById("netstatus");e&&(e.textContent=t)}handle(t){let e=this.game,i=e.settings;switch(t){case"continue":e.startSession("solo");break;case"new":if(Fi.exists()&&!this.confirmNew){this.confirmNew=!0;let n=this.buttons.find(r=>r.dataset.a==="new");n&&(n.textContent=Z("confirmNew"));return}this.confirmNew=!1,Fi.clear(),e.startSession("solo",{fresh:!0});break;case"split":if(Me.padCount()===0){let n=this.buttons.find(r=>r.dataset.a==="split");if(n&&!this.padWarned){this.padWarned=!0,n.textContent=Z("needPad");return}}e.startSession("split");break;case"online":this.online();break;case"help":this.showHelp=!this.showHelp,this.refresh();break;case"back":this.title();break;case"host":this.status(Z("connecting")),cc.host(e,n=>{this.status(Z("roomReady",n))},n=>this.status(Z("netError")+" "+n));break;case"join":{let n=(document.getElementById("joincode").value||"").trim().toUpperCase();if(n.length<4){this.status(Z("codePlaceholder"));return}this.status(Z("connecting")),cc.join(e,n,r=>this.status(Z("netError")+" "+r));break}case"resume":e.resume();break;case"title":e.backToTitle();break;case"lang":Zd(Zs[(Zs.indexOf(di())+1)%Zs.length]),document.documentElement.lang=di(),this.refresh();break;case"quality":i.quality=(i.quality+1)%3,e.applySettings(),this.refresh();break;case"sens":i.sens=i.sens>=2.5?.4:+(i.sens+.3).toFixed(1),e.applySettings(),this.refresh();break;case"invert":i.invert=!i.invert,e.applySettings(),this.refresh();break;case"dither":i.dither=!i.dither,e.applySettings(),this.refresh();break;case"shadows":i.shadows=!i.shadows,e.applySettings(),this.refresh();break;case"sfx":i.sfx=i.sfx>=1?0:Math.round((i.sfx+.25)*100)/100,e.applySettings(),this.refresh();break;case"music":i.music=i.music>=1?0:Math.round((i.music+.25)*100)/100,e.applySettings(),this.refresh();break;case"difficulty":i.difficulty=(i.difficulty+1)%3,e.applySettings(),e.applyUpgrades(),this.refresh();break}}refresh(){let t=this.sel;this.mode==="title"?this.title():this.mode==="pause"&&this.pause(),this.sel=t,this.focus()}update(){if(!this.mode||!this.buttons||!this.buttons.length)return;let t=Me.anyPadEdge("up")||Me.hit("ArrowUp"),e=Me.anyPadEdge("down")||Me.hit("ArrowDown");if(t&&(this.sel=(this.sel+this.buttons.length-1)%this.buttons.length,this.focus(),xt.play("ui",.4)),e&&(this.sel=(this.sel+1)%this.buttons.length,this.focus(),xt.play("ui",.4)),Me.anyPadEdge("a")||Me.hit("Enter")&&document.activeElement?.tagName!=="INPUT"){let i=this.buttons[this.sel];i&&i.click()}Me.anyPadEdge("b")&&this.mode==="online"&&this.title()}};var Kx="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",jx=`
uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uDither; uniform float uLevels; uniform float uFlash;
varying vec2 vUv;
float bayer(vec2 p){
  int x = int(mod(p.x, 4.0)), y = int(mod(p.y, 4.0)); int i = x + y * 4;
  float m[16]; m[0]=0.;m[1]=8.;m[2]=2.;m[3]=10.;m[4]=12.;m[5]=4.;m[6]=14.;m[7]=6.;m[8]=3.;m[9]=11.;m[10]=1.;m[11]=9.;m[12]=15.;m[13]=7.;m[14]=13.;m[15]=5.;
  for (int k=0;k<16;k++) if (k==i) return m[k]/16.0 - 0.5;
  return 0.0;
}
void main(){
  vec3 c = linearToOutputTexel(vec4(texture2D(tDiffuse, vUv).rgb, 1.0)).rgb;   // linear -> sRGB
  c += vec3(uFlash);
  if (uDither > 0.0) {
    float d = bayer(floor(vUv * uRes)) * uDither / uLevels;
    c = floor((c + d) * uLevels + 0.5) / uLevels;
  }
  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}`,Sa=class{constructor(t){this.r=new Vo({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.r.setPixelRatio(1),this.r.outputColorSpace=Ve,this.r.shadowMap.enabled=!0,this.r.shadowMap.type=Nu,this.r.autoClear=!1,this.rt=new ki(4,4,{depthBuffer:!0,magFilter:Le,minFilter:Le,type:qn}),this.postMat=new Ge({uniforms:{tDiffuse:{value:this.rt.texture},uRes:{value:new ct},uDither:{value:1},uLevels:{value:28},uFlash:{value:0}},vertexShader:Kx,fragmentShader:jx,depthTest:!1,depthWrite:!1}),this.postScene=new zs,this.postCam=new Ds(-1,1,1,-1,0,1),this.postScene.add(new Dt(new yi(2,2),this.postMat)),this.w=4,this.h=4}setSize(t,e){this.w=t,this.h=e,this.r.setSize(t,e,!1),this.rt.setSize(t,e),this.postMat.uniforms.uRes.value.set(t,e)}setShadows(t,e){this.r.shadowMap.enabled=t,this.shadowSize=e}begin(){this.r.setRenderTarget(this.rt),this.r.setClearColor(0,1),this.r.clear()}view(t,e,i){let n=Math.round(i[0]*this.w),r=Math.round(i[1]*this.h),o=Math.round(i[2]*this.w),a=Math.round(i[3]*this.h);this.rt.viewport.set(n,r,o,a),this.rt.scissor.set(n,r,o,a),this.rt.scissorTest=!0,this.r.setRenderTarget(this.rt),this.r.render(t,e)}end(t,e=0){this.rt.scissorTest=!1,this.postMat.uniforms.uDither.value=t?1:0,this.postMat.uniforms.uFlash.value=e,this.r.setRenderTarget(null),this.r.setViewport(0,0,this.w,this.h),this.r.render(this.postScene,this.postCam)}};var uc={clear:{amp:1,cover:0,wind:1,fog:1,rain:0},rain:{amp:1.3,cover:.55,wind:1.15,fog:.75,rain:.6},storm:{amp:1.95,cover:.92,wind:1.45,fog:.5,rain:1},fog:{amp:.8,cover:.35,wind:.6,fog:.28,rain:0}},Ea=class{constructor(t){this.game=t,this.reset();let e=1600,i=new Float32Array(e*6),n=new Float32Array(e*2);for(let o=0;o<e;o++){let a=(Math.random()-.5)*50,l=Math.random()*30,h=(Math.random()-.5)*50;i.set([a,l,h,a,l,h],o*6),n[o*2]=0,n[o*2+1]=1}let r=new ge;r.setAttribute("position",new Ce(i,3)),r.setAttribute("e",new Ce(n,1)),this.rainMat=new Ge({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uCam:{value:new x},uAmt:{value:0},uWind:{value:new ct},uCol:{value:new mt("#9ab0c8")}},vertexShader:`attribute float e; uniform float uTime; uniform vec3 uCam; uniform vec2 uWind; varying float vA;
        void main(){ vec3 p = position; float y = mod(p.y - uTime * 22.0, 30.0) - 12.0; vec2 off = uWind * (y * 0.06);
          vec3 w = vec3(mod(p.x - uCam.x + 25.0, 50.0) - 25.0 + uCam.x + off.x, uCam.y + y + e * 0.7, mod(p.z - uCam.z + 25.0, 50.0) - 25.0 + uCam.z + off.y);
          vA = 1.0; gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:"uniform float uAmt; uniform vec3 uCol; varying float vA; void main(){ gl_FragColor = linearToOutputTexel(vec4(uCol, 0.55 * uAmt)); }"}),this.rainMesh=new Us(r,this.rainMat),this.rainMesh.frustumCulled=!1,t.scene.add(this.rainMesh)}reset(){this.kind="clear",this.t=400+Math.random()*300,this.cur={...uc.clear},this.flash=0,this.bolt=8,this.rain=0,this.cover=0}windMul(){return this.cur.wind}fogMul(){return this.cur.fog}set(t){this.kind=t}update(t){let e=this.game;if(this.t-=t,this.t<=0){let i=e.cursed||0;if(this.kind!=="clear")this.kind="clear",this.t=360+Math.random()*360;else{let n=Math.random();this.kind=n<.25+i*.3?"storm":n<.6?"rain":"fog",this.t=120+Math.random()*120,e.sayAll("weather_"+this.kind,[],this.kind==="storm"?"bad":"")}}if(this.updateVisual(t),this.kind==="storm"&&this.cur.cover>.7&&(this.bolt-=t,this.bolt<=0)){this.bolt=4+Math.random()*8,this.lightning();let i=e.playerShip;i&&!i.dead&&Math.random()<.22&&e.later(()=>{if(i.dead)return;let[n,r,o]=[65,92,17];for(let a=0;a<6;a++)i.ignite(n+Math.round((Math.random()-.5)*2),r-a*3,o);i.damageAt(i.grid.toLocal(65,90,17),1.6,1,e),e.sayAll("lightning",[],"bad"),e.flash(i.root.position.clone().add(new x(0,20,0)),"#c8e0ff",12,80,.3)},.15),e.isHost&&e.net&&e.net.queueFx(["#bolt"])}}lightning(){this.flash=.55,xt.play("thunder",1)}updateVisual(t){let e=uc[this.kind]||uc.clear;for(let n in this.cur)this.cur[n]=le(this.cur[n],e[n],Math.min(1,t*.08));Lr.amp=this.cur.amp,this.rain=this.cur.rain,this.cover=this.cur.cover,this.flash=Math.max(0,this.flash-t*2.2),this.rainMat.uniforms.uTime.value=this.game.time,this.rainMat.uniforms.uAmt.value=Kt(this.rain,0,1);let i=this.game.wind;this.rainMat.uniforms.uWind.value.set(Math.cos(i.dir)*i.str*6,-Math.sin(i.dir)*i.str*6),this.rainMesh.visible=this.rain>.02}prepare(t){this.rainMat.uniforms.uCam.value.copy(t.position)}tint(t){let e=this.cover;if(e<=.01)return;let i=new mt("#5a6470"),n=new mt("#2a3038");t.top.lerp(n,e*.8),t.hor.lerp(i,e*.75),t.fog.lerp(i,e*.7),t.sea.lerp(new mt("#1a3440"),e*.6),t.amb.multiplyScalar(1-e*.35),t.light*=1-e*.5}netState(){return[this.kind,+this.t.toFixed(0)]}};var Qd=-8,An=s=>(s.buildAll(),s.group.children.find(t=>t.isMesh).geometry);function Qx(){let s=new ye(7,4,3,[-3.5*q,-2*q,-1.5*q]);return s.box(1,1,0,5,2,2,E.cloth),s.box(2,3,1,4,3,1,E.cloth),s.box(2,0,1,3,0,1,E.shell),s.set(0,1,1,E.cloth),s.set(0,2,1,E.cloth),s.set(0,0,1,E.shell),s.set(0,3,1,E.shell),s.set(5,2,0,E.char),s.set(5,2,2,E.char),s.set(6,1,1,E.cloth),An(s)}function tv(){let s=new ye(11,4,9,[-5.5*q,-2*q,-4.5*q]);return s.box(2,1,2,7,1,6,E.leafD),s.box(3,2,3,6,2,5,E.leaf),s.box(4,3,4,5,3,4,E.moss),s.box(2,0,2,7,0,6,E.thatch),s.box(8,1,4,10,2,4,E.moss),s.set(10,2,3,E.char),s.set(10,2,5,E.char),s.box(6,1,0,7,1,1,E.moss),s.box(6,1,7,7,1,8,E.moss),s.box(1,1,1,2,1,1,E.moss),s.box(1,1,7,2,1,7,E.moss),s.set(0,1,4,E.moss),An(s)}function ev(){let s=new ye(5,7,5,[-2.5*q,-4*q,-2.5*q]);s.box(0,5,0,4,5,4,E.cloth),s.box(1,6,1,3,6,3,E.cloth);for(let[t,e]of[[1,1],[3,1],[1,3],[3,3],[2,2]])for(let i=4-(t+e)%2*2;i<5;i++)s.set(t,i,e,E.shell);return s.set(2,1,2,E.shell),s.set(2,0,2,E.shell),An(s)}function iv(){let s=new ye(11,5,3,[-5.5*q,-2.5*q,-1.5*q]);return s.box(2,1,0,8,3,2,E.rockD),s.box(2,1,1,8,1,1,E.cloth),s.box(9,2,1,10,2,1,E.rockD),s.set(9,1,1,E.cloth),s.set(8,3,0,E.char),s.set(8,3,2,E.char),s.box(4,4,1,5,4,1,E.rockD),s.box(0,2,0,1,2,2,E.rockD),s.set(0,2,0,E.rockD),s.set(0,2,2,E.rockD),s.set(6,0,0,E.rockD),s.set(6,0,2,E.rockD),An(s)}function nv(){let s=new ye(3,10,3,[-1.5*q,0,-1.5*q]);for(let t=0;t<10;t++)s.set(1+(t%4===2?1:t%4===0&&t?-1:0),t,1,t%3?E.leaf:E.leafD);return s.set(0,3,1,E.leaf),s.set(2,6,1,E.leafD),s.set(1,5,0,E.leaf),s.set(1,8,2,E.leaf),An(s)}function sv(){let s=new ye(5,5,5,[-2.5*q,0,-2.5*q]);return s.box(2,0,2,2,3,2,E.cloth),s.box(0,2,2,1,2,2,E.cloth),s.set(0,3,2,E.cloth),s.box(3,1,2,4,1,2,E.cloth),s.box(4,2,2,4,3,2,E.cloth),s.box(2,2,0,2,2,1,E.cloth),s.set(2,3,0,E.cloth),s.box(2,1,3,2,1,4,E.cloth),s.box(2,2,4,2,4,4,E.cloth),s.set(2,4,2,E.cloth),An(s)}function rv(){let s=new ye(5,3,4,[-2.5*q,0,-2*q]);return s.box(0,0,0,4,0,3,E.rockD),s.box(1,1,0,4,1,3,E.rock),s.box(1,2,1,3,2,2,E.moss),An(s)}function ov(){let s=new ye(5,1,5,[-2.5*q,0,-2.5*q]);return s.box(1,0,2,3,0,2,E.flower),s.box(2,0,0,2,0,4,E.flower),s.set(0,0,1,E.flower),s.set(4,0,1,E.flower),s.set(2,0,2,E.flowerY),An(s)}var tf=["#f0c040","#4aa8e8","#f07030","#c8d8e0","#60c890","#e05a8a"],ef=["#e8604a","#c050c0","#f0a040","#e8e0c8","#5ac0c0"],av=["#ff7ad8","#9a8aff","#7affe8"],lv=new x(0,1,0),Ks=new qt,Si=new Ze,Br=new oi,Ei=new x,js=new x,Hr=new mt,Ta=class{constructor(t){this.game=t;let e=t.scene,i=(o,a,l)=>{let h=new bn(o,a,l);return h.frustumCulled=!1,h.count=0,e.add(h),h};this.schools=[],this.fish=i(Qx(),zi,112);for(let o=0;o<8;o++)this.schools.push({c:new x,n:8+o%4*2,r:1.5+Math.random()*1.5,a:Math.random()*6,sp:.6+Math.random()*.5,col:tf[o%tf.length],size:.22+o%3*.06,dir:Math.random()*6,live:!1,flee:0});this.turtle=i(tv(),zi,3),this.turtles=[0,1,2].map(()=>({p:new x,yaw:0,live:!1,ph:Math.random()*6}));let n=jh.clone();n.transparent=!0,n.opacity=.75,this.jelly=i(ev(),n,12),this.jellies=Array.from({length:12},(o,a)=>({p:new x,live:!1,ph:Math.random()*6,col:av[a%3]})),this.weed=i(nv(),zi,900),this.coral=i(sv(),zi,400),this.rock=i(rv(),zi,250),this.star=i(ov(),zi,150),this.weeds=[],this.cellKey="",this.dolph=i(iv(),zi,4),this.pod=null,this.podT=25+Math.random()*30;let r=da();r.buildAll(),this.fin=r.group,this.fin.visible=!1,e.add(this.fin),this.finT=40+Math.random()*60,this.finS=null}focus(){let t=this.game,e=t.localPlayers;return!e||!e.length?null:e.find(i=>i.under||i.swim)||e[0]}depthAt(t,e){return Math.max(this.game.world.height(t,e),Qd)}update(t){let e=this.game,i=this.focus();if(!i)return;let n=i.worldPos(new x),r=e.time;this.updateFloor(n,r),this.updateFish(t,n,r,i),this.updateCritters(t,n,r),this.updateDolphins(t,r),this.updateFin(t,r)}updateFloor(t,e){let r=Math.floor(t.x/12),o=Math.floor(t.z/12),a=r+","+o;if(a!==this.cellKey){this.cellKey=a,this.weeds=[];let h=0,c=0,u=0;for(let d=-5;d<=5;d++)for(let f=-5;f<=5;f++){let m=r+d,y=o+f,g=Di(m*73856093^y*19349663);for(let p=0;p<9;p++){let M=(m+g())*12,v=(y+g())*12,_=this.depthAt(M,v),A=g();if(!(_>-1.4||!(_>Qd+.1)&&g()<.55))if(A<.55){let P=1+Math.floor(g()*3);for(let k=0;k<P&&this.weeds.length<900;k++)this.weeds.push([M+(g()-.5)*1.6,_,v+(g()-.5)*1.6,.8+g()*.9,g()*6])}else A<.78&&h<400?(Hr.set(ef[Math.floor(g()*ef.length)]),this.place(this.coral,h++,M,_,v,g()*6,.9+g()*.8),this.coral.setColorAt(h-1,Hr)):A<.92&&c<250?this.place(this.rock,c++,M,_,v,g()*6,.8+g()):u<150&&this.place(this.star,u++,M,_+.02,v,g()*6,.6+g()*.4)}}this.coral.count=h,this.rock.count=c,this.star.count=u,this.weed.count=this.weeds.length;for(let d of[this.coral,this.rock,this.star])d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0);this.weedDirty=!0}!this.game.localPlayers.some(h=>h.under)&&!this.weedDirty||(this.weedDirty=!1,this.weeds.forEach((h,c)=>{Br.set(Math.sin(e*1.3+h[4])*.18,h[4],Math.cos(e*1.1+h[4])*.15),Si.setFromEuler(Br),Ei.set(1,h[3],1),js.set(h[0],h[1],h[2]),this.weed.setMatrixAt(c,Ks.compose(js,Si,Ei))}),this.weed.instanceMatrix.needsUpdate=!0)}place(t,e,i,n,r,o,a){Si.setFromAxisAngle(lv,o),Ei.setScalar(a),js.set(i,n,r),t.setMatrixAt(e,Ks.compose(js,Si,Ei))}waterSpot(t,e,i,n){for(let r=0;r<8;r++){let o=Math.random()*Math.PI*2,a=e+Math.random()*(i-e),l=t.x+Math.cos(o)*a,h=t.z+Math.sin(o)*a,c=this.depthAt(l,h);if(c<-3)return n.set(l,c+1+Math.random()*Math.max(.5,-c-3.2),h),!0}return!1}updateFish(t,e,i,n){let r=0,o=n.eyeWorld(new x);for(let a of this.schools){if((!a.live||a.c.distanceTo(e)>70)&&(a.live=this.waterSpot(e,15,55,a.c),a.dir=Math.random()*6,!a.live))continue;o.distanceTo(a.c)<5&&n.under&&(a.flee=1.5,a.dir=Math.atan2(a.c.z-o.z,a.c.x-o.x)),a.flee=Math.max(0,a.flee-t),a.dir+=Math.sin(i*.3+a.a)*t*.3;let h=a.sp*(a.flee>0?5:1);a.c.x+=Math.cos(a.dir)*h*t,a.c.z+=Math.sin(a.dir)*h*t;let c=this.depthAt(a.c.x,a.c.z),u=ie(a.c.x,a.c.z,i)-1.3;c>-3&&(a.dir+=Math.PI*t*2),a.c.y=Math.min(u,Math.max(c+.8,a.c.y+Math.sin(i*.5+a.a)*t*.3)),a.a+=t*h/a.r,Hr.set(a.col);for(let d=0;d<a.n;d++){let f=a.a+d/a.n*Math.PI*2,m=a.r*(.6+d%3*.25),y=a.c.x+Math.cos(f)*m+Math.cos(a.dir)*(d%2)*.6,g=a.c.z+Math.sin(f)*m,p=a.c.y+Math.sin(f*2+d)*.35,M=-(f+Math.PI/2)+Math.sin(i*9+d)*.15;Si.setFromEuler(Br.set(0,M,0)),Ei.setScalar(a.size),js.set(y,p,g),this.fish.setMatrixAt(r,Ks.compose(js,Si,Ei)),this.fish.setColorAt(r,Hr),r++}}this.fish.count=r,this.fish.instanceMatrix.needsUpdate=!0,this.fish.instanceColor&&(this.fish.instanceColor.needsUpdate=!0)}updateCritters(t,e,i){let n=this.game,r=0;for(let a of this.turtles){if((!a.live||a.p.distanceTo(e)>80)&&(a.live=this.waterSpot(e,20,60,a.p),a.yaw=Math.random()*6,!a.live))continue;a.ph+=t,a.yaw+=Math.sin(a.ph*.2)*t*.2,a.p.x+=Math.cos(a.yaw)*.7*t,a.p.z-=Math.sin(a.yaw)*.7*t;let l=this.depthAt(a.p.x,a.p.z);l>-3&&(a.yaw+=t*2),a.p.y=Math.min(ie(a.p.x,a.p.z,i)-1.2,Math.max(l+1,a.p.y+Math.sin(a.ph*.4)*t*.2)),Si.setFromEuler(Br.set(0,a.yaw,Math.sin(a.ph*1.5)*.08)),Ei.setScalar(.9),this.turtle.setMatrixAt(r++,Ks.compose(a.p,Si,Ei))}this.turtle.count=r,this.turtle.instanceMatrix.needsUpdate=!0,r=0;let o=(n.night||0)>.5?12:6;this.jellies.forEach((a,l)=>{if(l>=o||(!a.live||a.p.distanceTo(e)>60)&&(a.live=this.waterSpot(e,10,45,a.p),!a.live))return;a.ph+=t;let h=ie(a.p.x,a.p.z,i)-1.5;a.p.y=Math.min(h,a.p.y+(Math.sin(a.ph*1.8)>.4?.5:-.12)*t),a.p.x+=Math.sin(a.ph*.3+l)*.1*t;let c=1+Math.max(0,Math.sin(a.ph*1.8))*.15;Si.identity(),Ei.set(.55*c,.55/c,.55*c),this.jelly.setMatrixAt(r,Ks.compose(a.p,Si,Ei)),this.jelly.setColorAt(r,Hr.set(a.col)),r++}),this.jelly.count=r,this.jelly.instanceMatrix.needsUpdate=!0,this.jelly.instanceColor&&(this.jelly.instanceColor.needsUpdate=!0)}updateDolphins(t,e){let i=this.game,n=i.playerShip;if(!this.pod){if(this.dolph.count=0,this.podT-=t,this.podT>0||!n||n.dead||n.speed<3||(i.night||0)>.6||i.weather.kind==="storm"||i.ships.some(c=>c!==n&&!c.dead&&Math.hypot(c.x-n.x,c.z-n.z)<300))return;let l=Math.random()<.5?-1:1,h=2+Math.floor(Math.random()*3);this.pod={side:l,life:16+Math.random()*10,list:Array.from({length:h},(c,u)=>({lx:6+u*3.5-Math.random()*2,lz:l*(15+u%2*3+Math.random()*2),ph:Math.random()*6,rate:2.2+Math.random()*.6,wasUp:!1}))},this.podT=70+Math.random()*90}let r=this.pod;if(r.life-=t,!n||n.dead||r.life<-4){this.pod=null,this.dolph.count=0;return}let o=0,a=new x;for(let l of r.list){l.ph+=t*l.rate,l.lx+=Math.sin(e*.4+l.ph)*t*.8,n.toWorld(a.set(l.lx,0,l.lz),a);let h=ie(a.x,a.z,e),c=Math.sin(l.ph),u=r.life<0?-r.life*1.2:0;a.y=h-1.2+Math.max(0,c)*2.8-u;let d=a.y>h-.2;d!==l.wasUp&&i.distToCam(a)<80&&i.fx.burst(new x(a.x,h,a.z),6,"splash"),l.wasUp=d,Si.setFromEuler(Br.set(0,n.yaw,Math.cos(l.ph)*.7,"YXZ")),Ei.setScalar(1.3),this.dolph.setMatrixAt(o++,Ks.compose(a,Si,Ei))}this.dolph.count=o,this.dolph.instanceMatrix.needsUpdate=!0}updateFin(t,e){let i=this.game,n=i.playerShip;if(!this.finS){if(this.fin.visible=!1,this.finT-=t,this.finT>0||!n||n.dead||n.speed>4||i.world.islandAt(n.x,n.z,30))return;this.finS={a:Math.random()*6,r:14+Math.random()*8,life:25+Math.random()*20},this.finT=80+Math.random()*120}let r=this.finS;if(r.life-=t,r.a+=t*.35,!n||n.dead||r.life<0){this.finS=null,this.fin.visible=!1;return}let o=n.x+Math.cos(r.a)*r.r,a=n.z+Math.sin(r.a)*r.r,l=ie(o,a,e),h=r.life<3?(3-r.life)*.6:0;this.fin.visible=!0,this.fin.position.set(o,l-.55-h,a),this.fin.rotation.set(0,-(r.a+Math.PI/2),0),Math.random()<t*4&&i.fx.burst(new x(o,l,a),1,"wake")}};var Aa=class{constructor(t){this.game=t;let e=t.world,i=["grass","flower","flowerY","shell","pebble"],n={};for(let a of i){let l=bd(a);n[a]=l.group.children.find(h=>h.isMesh).geometry}this.sets=[];for(let a of e.islands){let l=Di(1e3+a.id),h={grass:[],flower:[],flowerY:[],shell:[],pebble:[]},c=Math.round(a.r*a.r/6);for(let p=0;p<c;p++){let M=a.x0+l()*a.w,v=a.z0+l()*a.h,_=Math.floor(M-a.x0),A=Math.floor(v-a.z0),C=a.hm[A*a.w+_];if(C<.5)continue;let P=C<=1.5,k=C>=10||a.kind==="rocky"&&C>=6,T;P?T=l()<.6?"shell":"pebble":k?T=l()<.7?"pebble":"grass":T=a.kind==="cursed"?l()<.85?"pebble":"grass":l()<.75?"grass":l()<.5?"flower":"flowerY",!(P&&l()<.7)&&h[T].push([M,C,v,l()*6.28,.32+l()*.2])}let u=[],d=new qt,f=new Ze,m=new x,y=new x,g=new x(0,1,0);for(let p of i){let M=h[p];if(!M.length)continue;let v=new bn(n[p],zi,M.length);M.forEach((_,A)=>{f.setFromAxisAngle(g,_[3]),m.setScalar(_[4]),y.set(_[0],_[1],_[2]),d.compose(y,f,m),v.setMatrixAt(A,d)}),v.receiveShadow=!0,v.computeBoundingSphere(),t.scene.add(v),u.push(v)}this.sets.push({isl:a,meshes:u})}this.birds=[];let r=new we({color:"#f0f0ec"}),o=new we({color:"#8a9098"});for(let a=0;a<12;a++){let l=new ae,h=new Dt(new Pe(.5,.16,.16),r);l.add(h);let c=new ae,u=new ae,d=new Dt(new Pe(.22,.04,.6),o);d.position.z=-.3,c.add(d);let f=new Dt(new Pe(.22,.04,.6),o);f.position.z=.3,u.add(f),l.add(c),l.add(u),t.scene.add(l),this.birds.push({g:l,wl:c,wr:u,a:Math.random()*6.28,r:12+Math.random()*30,h:14+Math.random()*16,sp:.15+Math.random()*.2,c:new x,ph:Math.random()*6})}}prepare(t){for(let e of this.sets){let i=Math.hypot(e.isl.cx-t.x,e.isl.cz-t.z)-e.isl.r<220;for(let n of e.meshes)n.visible=i}}update(t){let e=this.game,i=e.playerShip||e.titleShip,n=e.night||0;this.birds.forEach((r,o)=>{if(!r.c.lengthSq()||Math.random()<t*.02)if(o%2===0&&i)r.c.set(i.x,0,i.z);else{let u=i?new x(i.x,0,i.z):new x,d=e.world.nearestIsland(u.x,u.z);d&&r.c.set(d.cx,0,d.cz)}o%2===0&&i&&r.c.lerp(new x(i.x,0,i.z),Math.min(1,t*.5)),r.a+=t*r.sp,r.ph+=t*(6+Math.sin(r.a*3)*3);let a=r.c.x+Math.cos(r.a)*r.r,l=r.c.z+Math.sin(r.a)*r.r,h=r.h+Math.sin(r.a*2)*2;r.g.position.set(a,h,l),r.g.rotation.set(Math.sin(r.a)*.2,-r.a-Math.PI/2,0);let c=Math.sin(r.ph)*.5;r.wl.rotation.x=c,r.wr.rotation.x=-c,r.g.visible=n<.6&&e.weather.kind!=="storm"})}};var Ra=new x,nf={melee(s,t,e){let i=s.eyeWorld(new x),n=s.lookDir(new x),r=!1;for(let o of this.skeletons){if(!o.alive)continue;let a=o.worldPos(new x);a.y+=o.kind==="captain"?1.6:1;let l=a.clone().sub(i);l.length()<t+(o.kind==="captain"?1:.4)&&l.normalize().dot(n)>.55&&(o.damage(e,i),r=!0)}for(let o of this.sharks)o.alive&&o.pos.distanceTo(i)<t+1&&(o.damage(e),r=!0);for(let o of this.serpents)o.alive&&o.hitTest(i.clone().addScaledVector(n,1.5),t)&&(o.damage(e),r=!0);r&&(xt.play("slash",1),s.hud&&s.hud.hitMark())},shoot(s,t,e){let i=s.eyeWorld(new x),n=s.lookDir(new x);this.fx.burst(i.clone().addScaledVector(n,.8),3,"flash"),this.flash(i.clone().addScaledVector(n,1),"#ffd080",3,10,.08);let r=null,o=t,a=(h,c,u)=>{let d=h.clone().sub(i),f=d.dot(n);if(f<0||f>o)return;d.lengthSq()-f*f<c*c&&(o=f,r=u)};for(let h of this.skeletons)if(h.alive){let c=h.worldPos(new x);c.y+=h.kind==="captain"?1.6:1,a(c,h.kind==="captain"?.9:.55,h)}for(let h of this.sharks)h.alive&&a(h.pos,1,h);for(let h of this.serpents)if(h.alive)for(let c of h.segs)a(c.p,1.4,h);let l=this.rayVoxels(i,n,o);if(l&&l.t<o){this.fx.burst(l.point,5,"dust",{r:.6,g:.5,b:.4});return}if(r)r.damage(r.segs?20:e,i),xt.play("hit",.4),s.hud&&s.hud.hitMark();else{let h=i.clone().addScaledVector(n,Math.min(o,60));h.y<ie(h.x,h.z,this.time)+.5&&this.fx.burst(h,4,"splash")}},rayVoxels(s,t,e){let i=null,n=(r,o,a)=>{let l=o(s.clone()),c=o(s.clone().addScaledVector(t,e)).clone().sub(l).normalize(),u=r.toVox(l),d=r.raycast(u[0],u[1],u[2],c.x,c.y,c.z,e/q);if(d){let f=d.t*q;(!i||f<i.t)&&(i={t:f,grid:r,hit:d,point:a(r.toLocal(d.x,d.y,d.z))})}};for(let r of this.ships)!r.dead&&r.root.position.distanceTo(s)<e+20&&n(r.grid,o=>r.toLocal(o,o),o=>r.toWorld(o,o));for(let r of this.nearProps)Math.hypot(r.x-s.x,r.z-s.z)<e+10&&n(r.grid,o=>o.set(o.x-r.x,o.y-r.y,o.z-r.z),o=>o.set(o.x+r.x,o.y+r.y,o.z+r.z));return i},dig(s){if(s.ship||s.swim)return;let t=s.worldPos(new x),e=s.lookDir(new x),i=t.clone().addScaledVector(e.setY(0).normalize(),1.2),n=this.world.height(i.x,i.z);n<.4||(xt.play("dig",1),this.fx.burst(new x(i.x,n,i.z),6,"dust"),this.act(s,{a:"dig",x:i.x,z:i.z}))},pourAt(s){this.fxEvent("splash",s.x,s.y,s.z,12);for(let t of this.ships)!t.dead&&Math.hypot(t.x-s.x,t.z-s.z)<30&&t.extinguish(t.toLocal(s.clone()),1.6)},fireCannon(s,t){let e=t.cannon;e.recoil=1,e.pitchG.updateMatrixWorld(!0);let i=e.pitchG.matrixWorld,n=new x(0,0,1.5).applyMatrix4(i),r=new x(0,0,0).applyMatrix4(i),a=n.clone().sub(r).normalize().multiplyScalar(62).add(s.velocity());this.spawnBall(n,a,s,{ghost:s.style==="ghost",radius:s.ballRadius}),this.fxEvent("flash",n.x,n.y,n.z,10),this.fxEvent("smoke",n.x,n.y,n.z,10),this.flash(n,"#ffb060",6,30,.12),this.sfx("cannon",n,1),this.distToCam(n)<25&&(this.shake=Math.max(this.shake,.5))},spawnBall(s,t,e,i={}){let n=new Dt(this.ballGeo,i.ghost?this.ghostBallMat:this.ballMat);i.small&&n.scale.setScalar(1.6),n.position.copy(s),this.scene.add(n);let r={id:i.id??this.newId(),pos:s.clone(),vel:t.clone(),owner:e,age:0,mesh:n,ghost:!!i.ghost,small:!!i.small,radius:i.radius||2.3,visual:!!i.visual};return this.balls.push(r),this.isHost&&this.net&&!i.visual&&this.net.queueFx(["#ball",r.id,+s.x.toFixed(2),+s.y.toFixed(2),+s.z.toFixed(2),+t.x.toFixed(2),+t.y.toFixed(2),+t.z.toFixed(2),r.ghost?1:0,r.small?1:0]),r},updateBalls(s){let e=s/3;for(let i of this.balls){for(let n=0;n<3&&!i.done;n++){let r=i.pos.clone();if(i.vel.y-=9.8*e,i.pos.addScaledVector(i.vel,e),i.age+=e,i.visual){(i.pos.y<ie(i.pos.x,i.pos.z,this.time)-1||i.age>8)&&(i.done=!0);continue}if(this.ballHits(i,r))break}i.age>12&&(i.done=!0),i.mesh.position.copy(i.pos),!i.done&&Math.random()<.7&&this.fx.burst(i.pos,1,"trail"),i.ghost&&Math.random()<.5&&this.fx.burst(i.pos,1,"ghost"),i.done&&this.scene.remove(i.mesh)}this.balls=this.balls.filter(i=>!i.done)},ballHits(s,t){for(let n of this.ships){if(n.dead||n===s.owner&&s.age<.3||Math.abs(n.x-s.pos.x)>22||Math.abs(n.z-s.pos.z)>22)continue;let r=n.toLocal(t.clone()),o=n.toLocal(s.pos.clone());if(Math.abs(o.x)>18||Math.abs(o.z)>6)continue;let a=n.grid,l=a.toVox(r),h=o.clone().sub(r),c=h.length();h.normalize();let u=a.raycast(l[0],l[1],l[2],h.x,h.y,h.z,c/q+1);if(u){let d=a.toLocal(u.x,u.y,u.z),f=n.toWorld(d.clone());return this.impact(s,f),n.damageAt(d,s.small?1.4:s.ghost?2.6:s.radius,1.1,this),s.ghost&&Math.random()<.5&&n.ignite(u.x,u.y,u.z),this.hitCreatures(f,2.4,s.small?25:60),!0}}for(let n of this.world.props){if(!n.grid||Math.abs(n.x-s.pos.x)>n.rad+2||Math.abs(n.z-s.pos.z)>n.rad+2)continue;let r=new x(t.x-n.x,t.y-n.y,t.z-n.z),o=new x().subVectors(s.pos,t),a=o.length();o.normalize();let l=n.grid.toVox(r),h=n.grid.raycast(l[0],l[1],l[2],o.x,o.y,o.z,a/q+1);if(h){let c=n.grid.toLocal(h.x,h.y,h.z).add(new x(n.x,n.y,n.z));return this.impact(s,c),this.blastProp(n,c,s.small?1.4:2.4,1),this.hitCreatures(c,2.2,s.small?25:50),!0}}for(let n of this.skeletons)if(n.alive&&n.worldPos(Ra).distanceTo(s.pos)<(n.kind==="captain"?2:1.4))return n.damage(s.small?0:80),this.impact(s,s.pos.clone()),!0;for(let n of this.serpents)if(n.alive&&n.hitTest(s.pos,.3))return n.damage(120),this.impact(s,s.pos.clone()),!0;for(let n of this.players)if(!(n.dead>0||s.owner&&s.owner===n.ship)&&n.eyeWorld(Ra).distanceTo(s.pos)<1.1)return n.hurt((s.small?25:60)*this.diff.dmg,"cannon"),this.impact(s,s.pos.clone()),!0;let e=this.world.height(s.pos.x,s.pos.z);if(s.pos.y<e)return this.fxEvent("dust",s.pos.x,s.pos.y,s.pos.z,14),this.sfx("hit",s.pos,.6),this.hitCreatures(s.pos,2.5,s.small?25:50),this.endBall(s),!0;let i=ie(s.pos.x,s.pos.z,this.time);return s.pos.y<i?(this.fxEvent("splash",s.pos.x,i,s.pos.z,22,{big:!0}),this.sfx("splash",s.pos),this.endBall(s),!0):!1},endBall(s){s.done=!0,this.isHost&&this.net&&this.net.queueFx(["#end",s.id])},impact(s,t){this.endBall(s),this.fxEvent("dust",t.x,t.y,t.z,14,{r:.55,g:.4,b:.25}),this.fxEvent("smoke",t.x,t.y,t.z,6),this.flash(t,"#ffa040",4,16,.1),this.sfx("hit",t);let e=this.distToCam(t);e<20&&(this.shake=Math.max(this.shake,.6-e*.02))},hitCreatures(s,t,e){for(let i of this.skeletons)i.alive&&i.worldPos(Ra).distanceTo(s)<t&&i.damage(e);for(let i of this.players)i.dead<=0&&i.worldPos(Ra).distanceTo(s)<t&&i.hurt(e*.5*this.diff.dmg,"blast")},blastProp(s,t,e,i){let n=new x(t.x-s.x,t.y-s.y,t.z-s.z),r=s.grid.toVox(n),o=s.grid.blast(r[0],r[1],r[2],e,i),a=0,l=!1;for(let h of o){if(h.m===E.powder&&(l=!0),a++>20)continue;let c=s.grid.toLocal(h.x,h.y,h.z).add(new x(s.x,s.y,s.z));this.debris.spawn(c,h.m,{x:(Math.random()-.5)*8,y:3+Math.random()*5,z:(Math.random()-.5)*8})}s.grid.flush(20),l&&!s.exploded&&(s.exploded=!0,this.later(()=>this.explosion(new x(s.x,s.y+1,s.z),2.6),.1))},explosion(s,t){this.fxEvent("flash",s.x,s.y,s.z,40),this.fxEvent("smoke",s.x,s.y,s.z,30),this.fxEvent("ember",s.x,s.y,s.z,25),this.flash(s,"#ffa040",10,40,.35),this.sfx("boom",s,1);let e=this.distToCam(s);e<40&&(this.shake=Math.max(this.shake,1.2-e*.025));for(let i of this.ships){if(i.dead)continue;let n=i.toLocal(s.clone());if(Math.abs(n.x)>18+t||Math.abs(n.z)>6+t)continue;i.damageAt(n,t/q*.42,2,this);let[r,o,a]=i.grid.toVox(n);for(let l=0;l<14;l++)i.ignite(Math.round(r+(Math.random()-.5)*10),Math.round(o+(Math.random()-.5)*6),Math.round(a+(Math.random()-.5)*10),!0)}for(let i of this.world.props)i.grid&&Math.hypot(i.x-s.x,i.z-s.z)<t+i.rad&&this.blastProp(i,s,t/q*.42,2);this.hitCreatures(s,t*2.2,90)},shipCollisions(){let s=this.ships.filter(t=>!t.dead&&t!==this.titleShip);for(let t=0;t<s.length;t++)for(let e=t+1;e<s.length;e++){let i=s[t],n=s[e];if(Math.hypot(n.x-i.x,n.z-i.z)>32)continue;let r=i.fwd,o=n.fwd,a=1e9,l=null,h=null;for(let c=-1;c<=1;c+=.25)for(let u=-1;u<=1;u+=.25){let d=i.x+r.x*c*12,f=i.z+r.z*c*12,m=n.x+o.x*u*12,y=n.z+o.z*u*12,g=Math.hypot(m-d,y-f);g<a&&(a=g,l=[d,f,c],h=[m,y,u])}if(a<6.6){let c=(h[0]-l[0])/(a||1),u=(h[1]-l[1])/(a||1),d=(6.6-a)*.5;i.x-=c*d,i.z-=u*d,n.x+=c*d,n.z+=u*d,i.velocity().sub(n.velocity()).length()>2.5&&(!i.lastRam||this.time-i.lastRam>1)&&(i.lastRam=n.lastRam=this.time,i.damageAt(new x(l[2]*12,.5,0),1.8,1.2,this),n.damageAt(new x(h[2]*12,.5,0),1.8,1.2,this),this.sfx("hit",i.root.position),this.shake=Math.max(this.shake,.8)),i.speed*=.9,n.speed*=.9}}},removeShip(s){s.dispose(this.scene);let t=this.ships.indexOf(s);t>=0&&this.ships.splice(t,1);let e=this.ais.find(i=>i.ship===s);e&&this.ais.splice(this.ais.indexOf(e),1),s===this.titleShip&&(this.titleShip=null),this.skeletons=this.skeletons.filter(i=>i.ship===s?(i.remove(),!1):!0)},onShipSinking(s){if(s===this.playerShip)this.sayAll("sinking",[],"bad"),this.sfx("horn",s.root.position),$e.sting("death");else if(s.style!=="player"){this.sayAll("enemySunk",[],"good"),this.sfx("sting",null);let t=new x(s.x,0,s.z);this.spawnLoot("chest",t.clone().add(new x(3,0,2)),null,{value:s.style==="ghost"?1500:650,style:s.style==="ghost"?1:2});for(let e=0;e<3;e++)this.spawnLoot("supplies",t.clone().add(new x((Math.random()-.5)*16,0,(Math.random()-.5)*16)));this.gold+=s.style==="ghost"?300:150,this.stats.ships++}},onShipCrash(s,t){s===this.playerShip&&(this.sayAll("crash",[],"bad"),this.shake=Math.max(this.shake,Math.min(1.5,t*.2)),this.sfx("hit",s.root.position))},onPlayerShipLost(){this.sayAll("sunk",[],"bad");for(let s of this.localPlayers)s.ship===this.playerShip&&(s.leaveStation(),s.detach());this.playerShip=null,this.later(()=>{let s=this.players[0].worldPos(new x),e=this.world.islands.filter(n=>n.kind==="outpost").sort((n,r)=>Math.hypot(n.cx-s.x,n.cz-s.z)-Math.hypot(r.cx-s.x,r.cz-s.z))[0],i=new wi(this,"player",e.moor.x,e.moor.z,-Math.PI/2+1e-4);i.anchor=!0,this.scene.add(i.root),this.ships.push(i),this.playerShip=i,this.applyUpgrades(),this.sayAll("newShip",[{isl:e.id}]);for(let n of this.localPlayers)n.dead<=0&&n.swim&&(n.teleport(i,new x(-5,-2.5+19*q+.02,0),Math.PI/2),this.say("respawnShip",[],"",n));this.net&&this.net.broadcast({t:"newship",id:i.netId})},4)},onPlayerDied(s){this.say("youDied",[],"bad",s),$e.sting("death"),this.isClient&&this.net&&this.net.send({t:"died"})},respawn(s){s.hp=100,s.dead=0,s.vel.set(0,0,0);let t=this.playerShip;if(t&&!t.dead&&!t.sinking)s.teleport(t,new x(-5,-2.5+19*q+.02,0),Math.PI/2),this.say("respawnShip",[],"",s);else{let e=this.home;s.ship=null,s.pos.set(e.merchant.x+2,this.world.height(e.merchant.x+2,e.merchant.z)+.1,e.merchant.z+2)}},hurtRemote(s,t,e){this.net&&this.net.sendTo(s.id,{t:"hurt",n:Math.round(t),src:e})},onCaptainDefeated(s,t){this.sayAll("captainDefeated",[],"good"),this.spawnLoot("skull",t.clone().add(new x(0,1,0)),null,{value:1500,pop:!0});let e=this.world.islandAt(t.x,t.z,40);e&&e.vault&&this.spawnLoot("chest",new x(e.vault.x,e.vault.y+.6,e.vault.z),null,{value:2500,style:1,pop:!0}),e&&(e.captainDone=!0),this.sfx("sting",null),$e.sting("treasure")},onSerpentSlain(s){this.sayAll("serpentSlain",[],"good"),this.gold+=1200,this.spawnLoot("chest",s.head.clone().setY(0),null,{value:1800,style:1}),this.sfx("sting",null)}};var hv=["N","NE","E","SE","S","SW","W","NW"],sf={spawner(s){let t=this.players.some(i=>i.ship===this.playerShip&&this.playerShip);this.enemyTimer-=s;let e=this.ais.filter(i=>!i.ship.sinking).length;if(this.enemyTimer<=0&&e===0&&t){let i=this.isNight&&(this.cursed>.2||Math.random()<.45);this.spawnEnemyShip(i),this.enemyTimer=(160+Math.random()*140)/(1+.25*(this.players.length-1))}if(this.enemyTimer<=0&&(this.enemyTimer=20),this.serpentTimer-=s*(1+(this.cursed||0)+(this.weather.kind==="storm"?1:0)),this.serpentTimer<=0&&t&&!this.serpents.length){let i=this.playerShip;this.world.height(i.x,i.z)<-7&&!this.world.islandAt(i.x,i.z,120)?(this.serpents.push(new Ys(this,i)),this.sayAll("serpent",[],"bad"),this.sfx("horn",null),this.serpentTimer=900+Math.random()*600):this.serpentTimer=30}for(let i of this.players){let n=i.worldPos(new x),r=this.world.islandAt(n.x,n.z,40);r&&r.kind!=="outpost"&&this.populateIsland(r,n);for(let o of this.world.wrecks)if(!o.spawned&&Math.hypot(o.x-n.x,o.z-n.z)<150){o.spawned=!0,this.spawnLoot("chest",new x(o.x+2,-1,o.z),null,{value:700+Math.floor(Math.random()*300),style:2,sunk:!0});for(let a=0;a<3;a++)this.spawnLoot("supplies",new x(o.x+(Math.random()-.5)*30,0,o.z+(Math.random()-.5)*30));Math.random()<.5&&this.spawnLoot("bottle",new x(o.x+12,0,o.z-8))}i.swim&&!i.ship&&this.world.height(n.x,n.z)<-5?i.swimT=(i.swimT||0)+s:i.swimT=0,i.swimT>5&&this.sharks.filter(o=>o.target===i).length===0&&(this.sharks.push(new qs(this,i)),i.swimT=-10)}if(this.lootTimer-=s,this.lootTimer<=0&&this.playerShip){this.lootTimer=45+Math.random()*45;let i=this.playerShip,n=i.fwd,r=(Math.random()-.5)*1.2,o=i.x+(n.x*Math.cos(r)-n.z*Math.sin(r))*120,a=i.z+(n.z*Math.cos(r)+n.x*Math.sin(r))*120;this.world.height(o,a)<-3&&this.spawnLoot(Math.random()<.3?"bottle":"supplies",new x(o,0,a))}},populateIsland(s,t){let e=this.islandSpawn.get(s.id)||-1e9;if(this.time-e<180)return;this.islandSpawn.set(s.id,this.time);let i=s.r>80?4:s.r>45?3:1;this.isNight&&(i=Math.ceil(i*1.6)),s.kind==="cursed"&&(i+=2),i=Math.round(i*(1+.3*(this.players.length-1)));for(let n=0,r=0;n<i&&r<60;r++){let o=Math.random()*6.28,a=Math.random()*s.r*.8,l=s.cx+Math.cos(o)*a,h=s.cz+Math.sin(o)*a;this.world.height(l,h)<1||Math.hypot(l-t.x,h-t.z)<18||(this.addSkeleton(l,h,s.kind==="cursed"||this.isNight&&Math.random()<.4?"cursed":"skeleton"),n++)}this.isNight&&s.r>70&&!s.captainDone&&Math.random()<.25&&this.spawnCaptain(s),s.looseChest&&!s.looseTaken&&(s.looseTaken=!0,this.spawnLoot("chest",new x(s.looseChest.x,s.looseChest.y+.5,s.looseChest.z),null,{value:250+Math.floor(Math.random()*150)}))},addSkeleton(s,t,e,i={}){let n=new Xs(this,s,t,e,i);if(i.leap){let r=n.worldPos(new x);this.fxEvent("dust",r.x,r.y,r.z,6),this.sfx("bones",r)}return this.skeletons.push(n),n},spawnCaptain(s){for(let t=0;t<40;t++){let e=Math.random()*6.28,i=Math.random()*s.r*.4,n=s.cx+Math.cos(e)*i,r=s.cz+Math.sin(e)*i;if(!(this.world.height(n,r)<1.5)){this.addSkeleton(n,r,"captain",{rise:2.5}),this.sayAll("captainRises",[],"ghost"),this.sfx("ghost",null);return}}},spawnEnemyShip(s){let t=this.playerShip;for(let e=0;e<20;e++){let i=Math.random()*Math.PI*2,n=380+Math.random()*120,r=t.x+Math.cos(i)*n,o=t.z+Math.sin(i)*n;if(r<100||o<100||r>Fe-100||o>Fe-100||this.world.height(r,o)>-6||this.world.islandAt(r,o,60))continue;let a=new wi(this,s?"ghost":"enemy",r,o,Math.atan2(-(t.z-o),t.x-r));return a.ammo=999,a.ballRadius=2.3,this.scene.add(a.root),this.ships.push(a),this.ais.push(new ma(this,a,s)),this.sayAll(s?"ghost":"enemy",[],s?"ghost":"bad"),this.sfx(s?"ghost":"bell",null),a}return null},giveMap(s,t){let e=new Set(this.maps.map(a=>a.dig)),i=this.playerShip?new x(this.playerShip.x,0,this.playerShip.z):new x(this.home.cx,0,this.home.cz),n=[];for(let a of this.world.islands)for(let l of a.digs)!l.dug&&!e.has(l)&&(!t||a.landmark)&&n.push({isl:a,dig:l,dist:Math.hypot(a.cx-i.x,a.cz-i.z)});if(!n.length)return null;n.sort((a,l)=>a.dist-l.dist);let r=s?n.find(a=>a.isl.kind!=="cursed"):n[Math.floor(Math.random()*Math.min(n.length,8))];if(!r)return null;let o={isl:r.isl,dig:r.dig,hits:0};if(t){let a=r.isl.landmark,l=r.dig.x-a.x,h=r.dig.z-a.z,c=(Math.atan2(l,-h)*180/Math.PI+360)%360;o.riddle={steps:Math.round(Math.hypot(l,h)),dir:hv[Math.round(c/45)%8]}}return this.maps.push(o),this.syncMaps(),o},syncMaps(){this.isHost&&this.net&&this.net.broadcast({t:"maps",m:this.mapsNet()})},mapsNet(){return this.maps.map(s=>[s.isl.id,s.isl.digs.indexOf(s.dig),s.riddle?s.riddle.steps:-1,s.riddle?s.riddle.dir:""])},digAt(s,t,e){let i=this.world.height(t,e);this.fxEvent("dust",t,i,e,6);for(let n of this.maps)if(Math.hypot(n.dig.x-t,n.dig.z-e)<(n.riddle?3.2:2.8)){if(n.hits++,n.hits>=4){n.dig.dug=!0,this.maps.splice(this.maps.indexOf(n),1),this.syncMaps();let r=n.isl.kind==="cursed";if(this.spawnLoot("chest",new x(n.dig.x,i+.6,n.dig.z),null,{value:(r?1300:450+Math.floor(Math.random()*200))*(n.riddle?1.5:1)|0,style:r?1:0,pop:!0}),this.say("found",[],"good",s),this.sfx("sting",null),s.local&&$e.sting("treasure"),r||Math.random()<.6)for(let o=0;o<(r?4:2);o++){let a=Math.random()*6.28;this.addSkeleton(n.dig.x+Math.cos(a)*6,n.dig.z+Math.sin(a)*6,r||this.isNight?"cursed":"skeleton")}}else this.say("dig",[],"",s);return}},lightTotem(s,t){let e=this.world.props[t];if(!e||e.lit)return;e.lit=!0;let i=e.isl,n=i.props.filter(o=>o.kind==="totem"&&o.lit).length,r=i.props.filter(o=>o.kind==="totem").length;if(this.fxEvent("ghost",e.x,e.y+4,e.z,30),this.sfx("ghost",new x(e.x,e.y,e.z),.7),n<r){this.sayAll("totemLit",[n,r],"ghost");return}this.sayAll("shrineAwake",[],"ghost"),this.shake=Math.max(this.shake,1.2),i.captainDone||this.later(()=>this.spawnCaptain(i),2.5),this.net&&this.net.broadcast({t:"lit",pi:t})},restock(s){let t=this.playerShip;t&&Math.hypot(t.x-s.worldPos().x,t.z-s.worldPos().z)<150&&(t.ammo=Math.max(t.ammo,t.cap.ammo),t.planks=Math.max(t.planks,t.cap.planks),t.food=Math.max(t.food,t.cap.food)),this.say("restock",[],"good",s),this.sfx("chest",null),s.local?s.pistolRes=15:this.net&&this.net.sendTo(s.id,{t:"ammo"})},lootBarrel(s,t){let e=this.world.props[t];if(!e||e.looted)return;e.looted=!0;let i=this.playerShip,n=4+Math.floor(Math.random()*6),r=2+Math.floor(Math.random()*3);i&&(i.ammo+=n,i.planks+=r),this.say("lootedSupplies",[n,r,0],"good",s),this.sfx("chest",null),this.net&&this.net.broadcast({t:"looted",pi:t})},buy(s,t){let e=this.priceOf(t);if(e!==null){if(this.gold<e){this.say("notEnough",[],"bad",s);return}if(t==="map"||t==="riddle"){let i=this.giveMap(!1,t==="riddle");if(!i){this.say("noMoreMaps",[],"bad",s);return}this.gold-=e,this.say("gotMap",[{isl:i.isl.id}],"good",s)}else if(t==="repair"){let i=this.playerShip;if(!i)return;this.gold-=e;for(let n=0;n<i.grid.d.length;n++)i.grid.d[n]!==i.grid.orig[n]&&i.grid.setIdx(n,i.grid.orig[n]);i.water=0,i.fires.clear(),i.countLeaks(),this.say("repaired",[],"good",s)}else if(t.startsWith("up")){let i=+t[2];this.gold-=e,this.upgrades[i]++,this.applyUpgrades(),this.say("upgraded",[{k:"up"+i},this.upgrades[i]],"good",s)}this.sfx("coins",null,.7),this.isClient||this.saveSoon()}},priceOf(s){if(s==="map")return this.maps.length||this.gold>=100?100:0;if(s==="riddle")return 160;if(s==="repair")return 60;if(s.startsWith("up")){let t=+s[2],e=this.upgrades[t];return e>=2?null:rf[t][e]}return null},saveSoon(){this.later(()=>Fi.store(this),.5)}};function cv(){let s=new ye(7,7,7,[-3.5*q,0,-3.5*q]);for(let t=0;t<7;t++)for(let e=0;e<7;e++)for(let i=0;i<7;i++)Math.hypot(i-3,(t-3.6)*1.1,e-3)>3.3||t<2&&Math.abs(e-3)>2||s.set(i,t,e,E.bone);s.set(6,4,2,E.ghostglass),s.set(6,4,4,E.ghostglass),s.set(6,2,3,E.char);for(let t=1;t<6;t++)s.set(6,1,t,t%2?E.shell:E.char);return s.box(1,6,1,5,6,5,E.gold),s}var uv={chest:.45,supplies:.55,bottle:.16,coins:.12,skull:.5},of={chestGrid(s){let t=tc(s);return t.buildAll(),t},makeCarryMesh(){let s=this.chestGrid(0);return s.group.scale.setScalar(.4),s.group.position.set(0,2.05,0),s.group},spawnLoot(s,t,e=null,i={}){let n;s==="chest"||s==="coins"?n=tc(i.style||0):s==="skull"?n=cv():n=Ir(!1),n.buildAll(),n.group.scale.setScalar(uv[s]),n.group.traverse(o=>{o.isMesh&&(o.castShadow=!0)});let r={id:i.id??this.newId(),kind:s,style:i.style||0,grid:n,mesh:n.group,ship:e,pos:t.clone(),vel:new x(0,i.pop?5:0,0),value:i.value||0,yaw:Math.random()*6,spin:s==="coins"||s==="skull",sunk:!!i.sunk,remote:!!i.remote};return r.world=o=>(o.copy(r.pos),r.ship&&r.ship.toWorld(o,o),o),e?e.root.add(n.group):this.scene.add(n.group),this.loot.push(r),r},spawnCoins(s,t){this.spawnLoot("coins",s.clone().setY(s.y+.5),null,{value:t,pop:!0}).vel.set((Math.random()-.5)*2,4,(Math.random()-.5)*2)},removeLoot(s){if(s.gone)return;s.gone=!0,s.ship?s.ship.root.remove(s.mesh):this.scene.remove(s.mesh),s.grid.dispose();let t=this.loot.indexOf(s);t>=0&&this.loot.splice(t,1);for(let e of this.players)e.carry===s&&(e.carry=null)},setLootFrame(s,t){if(s.ship===t)return;let e=s.world(new x);s.ship?s.ship.root.remove(s.mesh):this.scene.remove(s.mesh),s.ship=t,t?(t.toLocal(e,s.pos),t.root.add(s.mesh)):(s.pos.copy(e),this.scene.add(s.mesh))},interactOther(s,t){if(t.kind==="loot"){let e=t.L;return e.kind==="chest"||e.kind==="skull"?(e.carried||(s.carry=e,e.carried=s,e.mesh.visible=!1,xt.play("chest",1),s.leaveStation(),this.act(s,{a:"pickup",id:e.id})),!0):(this.act(s,{a:"collect",id:e.id}),!0)}if(t.kind==="merchant"){if(s.carry){let e=s.carry;return s.carry=null,this.act(s,{a:"sell",id:e.id}),!0}return s.hud.openShop(),!0}return t.kind==="supply"?(this.act(s,{a:"supply"}),s.pistolRes=15,!0):t.kind==="lootbarrel"?(this.act(s,{a:"lootbarrel",pi:this.world.props.indexOf(t.pr)}),!0):t.kind==="totem"?(this.act(s,{a:"totem",pi:this.world.props.indexOf(t.pr)}),!0):!1},pickupLoot(s,t){let e=this.loot.find(i=>i.id===t);!e||e.carried&&e.carried!==s||(e.carried=s,e.mesh.visible=!1,s.local&&(s.carry=e))},dropLoot(s){let t=s.carry;if(!t)return;s.carry=null;let e=s.lookDir(new x).setY(0).normalize(),i=s.worldPos(new x).addScaledVector(e,1).add(new x(0,.8,0)),n=s.ship?s.ship.toLocal(i.clone()):i;xt.play("chest",.8),this.isClient&&(t.carried=null,t.mesh.visible=!0),this.act(s,{a:"drop",id:t.id,sh:s.ship?s.ship.netId:-1,x:n.x,y:n.y,z:n.z})},dropLootAt(s,t,e,i){let n=this.loot.find(o=>o.id===t);if(!n)return;n.carried=null,n.mesh.visible=!0,s.carry===n&&(s.carry=null);let r=e>=0?this.shipById(e):null;n.ship?n.ship.root.remove(n.mesh):this.scene.remove(n.mesh),n.ship=r,n.pos.copy(i),n.vel.set(0,0,0),n.floating=!1,r?r.root.add(n.mesh):this.scene.add(n.mesh)},sellLoot(s,t){let e=this.loot.find(n=>n.id===t);if(!e)return;let i=e.value;this.gold+=i,this.stats.chests++,this.removeLoot(e),this.say("sold",[i],"good",s),this.sfx("coins",null),this.saveSoon()},collectFloating(s,t){if(!s.gone){if(s.kind==="supplies"){let e=this.playerShip,i=5+Math.floor(Math.random()*8),n=2+Math.floor(Math.random()*4),r=Math.floor(Math.random()*3);e&&(e.ammo+=i,e.planks+=n,e.food+=r),this.removeLoot(s),this.sayAll("lootedSupplies",[i,n,r],"good"),this.sfx("chest",null)}else if(s.kind==="bottle"){this.removeLoot(s);let e=this.giveMap(!1,Math.random()<.6);e&&this.sayAll("bottle",[{isl:e.isl.id}],"good")}}},updateLoot(s){let t=!this.isClient;for(let e of[...this.loot]){if(e.carried){e.mesh.visible=!1,e.carried.dead>0&&t&&e.carried.local;continue}if(e.mesh.visible=!0,!t)e.net&&e.pos.lerp(e.net,Math.min(1,s*10));else if(e.ship){if(e.ship.dead){this.setLootFrame(e,null);continue}e.vel.y-=15*s,e.pos.y+=e.vel.y*s,e.ship.grid.solidAt(e.pos.x,e.pos.y,e.pos.z)&&(e.pos.y=Math.ceil((e.pos.y+2.5)/q)*q-2.5,e.vel.y=0),(e.pos.y<-3||Math.abs(e.pos.z)>6)&&this.setLootFrame(e,null)}else{let n=this.world.height(e.pos.x,e.pos.z),r=ie(e.pos.x,e.pos.z,this.time);if(e.sunk?e.pos.y=Math.max(n,-6)+.3:(e.vel.y-=15*s,e.pos.addScaledVector(e.vel,s),e.vel.x*=.96,e.vel.z*=.96,e.pos.y<n&&(e.pos.y=n,e.vel.set(0,0,0)),e.pos.y<r-.25&&n<r-.3&&(e.pos.y=r-.25,e.vel.y=0,e.floating=!0)),!e.floating&&!e.sunk)for(let o of this.ships){if(o.dead||Math.abs(o.x-e.pos.x)>18||Math.abs(o.z-e.pos.z)>18)continue;let a=o.toLocal(e.pos.clone());if(o.insideHull(a,0)&&a.y>-1){this.setLootFrame(e,o);break}}}if(e.mesh.position.copy(e.pos),(e.kind==="chest"||e.kind==="skull")&&!e.sunk&&Math.random()<s*3){let n=e.world(new x);this.distToCam(n)<60&&this.fx.burst(n.add(new x(0,.5,0)),1,"sparkle")}if(e.mesh.rotation.y=e.yaw+(e.spin?this.time*2:0),e.floating&&(e.mesh.rotation.z=Math.sin(this.time*2+e.yaw)*.15),!t)continue;let i=e.world(new x);for(let n of this.players){if(n.dead>0)continue;let r=n.worldPos(new x).distanceTo(i);if(e.kind==="coins"&&r<1.8){this.gold+=e.value,this.removeLoot(e),this.sfx("coins",i),this.fxEvent("gold",i.x,i.y,i.z,8);break}if((e.kind==="supplies"||e.kind==="bottle")&&e.floating&&r<1.8&&n.swim){this.collectFloating(e,n);break}}if(!e.gone){if((e.kind==="supplies"||e.kind==="bottle")&&e.floating){let n=this.playerShip;if(n&&!n.dead){let r=n.toLocal(i.clone());if(Math.abs(r.x)<15&&Math.abs(r.z)<6.5){this.collectFloating(e,null);continue}}}e.kind!=="chest"&&e.kind!=="skull"&&this.nearestPlayerDist(i.x,i.z)>600&&this.removeLoot(e)}}}};var dv=[180,240,360],rf=[[600,1400],[600,1400],[700,1600],[400,1e3]],Rn=new x,Vr=class{constructor(){this.canvas=document.getElementById("game"),this.R=new Sa(this.canvas),this.scene=new zs,this.scene.fog=new Go("#a8d0e8",120,650),this.settings={quality:1,sens:1,invert:!1,dither:!0,shadows:!0,difficulty:1,sfx:.5,music:.75};try{Object.assign(this.settings,JSON.parse(localStorage.getItem("deadwake.settings")||"{}"))}catch{}this.time=0,this.frame=0,this.hour=9,this.shake=0,this.ids=1,this.gold=0,this.maps=[],this.upgrades=[0,0,0,0],this.stats={chests:0,ships:0,skeletons:0},this.wind={dir:Math.PI*.25,str:.9,target:Math.PI*.25},this.hemi=new na("#cfe8ff","#4a6a7a",1.3),this.scene.add(this.hemi),this.sun=new oa("#fff2d8",2),this.scene.add(this.sun),this.scene.add(this.sun.target),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024);let t=this.sun.shadow.camera;t.left=-36,t.right=36,t.top=36,t.bottom=-36,t.near=1,t.far=260,this.sun.shadow.bias=-.0015,this.sun.shadow.normalBias=.05,this.lightPool=new xa(this.scene,6),this.world=new fa(this.scene,1717);for(let e of this.world.islands)e.mesh.receiveShadow=!0,e.mesh.castShadow=!0;this.ocean=Cd(this.world.depthTex,Fe),this.scene.add(this.ocean.mesh),this.seabed=new Dt(new yi(900,900).rotateX(-Math.PI/2),new we({color:"#8a7a52"})),this.seabed.position.y=-8.02,this.seabed.receiveShadow=!1,this.scene.add(this.seabed),this.sky=Pd(),this.scene.add(this.sky.mesh),this.clouds=Id(this.scene),this.fx=new ya(this.scene),this.debris=new ua(this.scene),this.weather=new Ea(this),this.decor=new Aa(this),this.sealife=new Ta(this),this.ships=[],this.ais=[],this.skeletons=[],this.sharks=[],this.serpents=[],this.loot=[],this.balls=[],this.players=[],this.localPlayers=[],this.huds=[],this.nearProps=[],this.islandSpawn=new Map,this.enemyTimer=140,this.lootTimer=50,this.serpentTimer=600,this.ballGeo=new Pe(.32,.32,.32),this.ballMat=new we({color:"#1e1e24"}),this.ghostBallMat=new on({color:"#60ffb0"}),this.merchants=this.world.islands.filter(e=>e.kind==="outpost").map(e=>{let i=new Jn("merchant"),n=this.world.height(e.merchant.x,e.merchant.z);return i.root.position.set(e.merchant.x,n,e.merchant.z),this.scene.add(i.root),{isl:e,fig:i,pos:new x(e.merchant.x,n,e.merchant.z)}}),this.titleCam=new Ye(60,16/9,.1,1200),this.scene.add(this.titleCam),this.state="title",this.mode=null,Me.init(this.canvas,()=>xt.init()),this.canvas.addEventListener("click",()=>{this.state==="play"&&!this.anyUI()&&Me.lock()}),document.addEventListener("pointerlockchange",()=>{!Me.locked&&this.state==="play"&&!this.testMode&&!this.anyUI()&&this.localPlayers[0]&&this.localPlayers[0].input.kind==="km"&&this.pause()}),addEventListener("resize",()=>this.resize()),this.menu=new wa(this),this.applySettings(),this.titleShip=new wi(this,"player",this.world.islands.find(e=>e.kind==="outpost").moor.x,this.world.islands.find(e=>e.kind==="outpost").moor.z,-Math.PI/2+1e-4),this.titleShip.anchor=!0,this.scene.add(this.titleShip.root),this.ships.push(this.titleShip),this.menu.title(),document.getElementById("hud").style.display="none",$e.set("title"),this.last=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}newId(){return this.ids++}get isClient(){return this.mode==="client"}get isHost(){return this.mode==="host"}get diff(){return[{aimErr:1.8,dmg:.7,leak:.75},{aimErr:1,dmg:1,leak:1},{aimErr:.6,dmg:1.3,leak:1.25}][this.settings.difficulty]||{aimErr:1,dmg:1,leak:1}}anyUI(){return this.localPlayers.some(t=>t.ui)}applySettings(){for(let t of this.localPlayers)t.input.sens=this.settings.sens,t.input.invert=this.settings.invert;try{localStorage.setItem("deadwake.settings",JSON.stringify(this.settings))}catch{}xt.setVolumes(this.settings.sfx,this.settings.music),this.R.setShadows(this.settings.shadows),this.sun.castShadow=this.settings.shadows,this.resize()}resize(){let t=dv[this.settings.quality],e=Math.round(t*innerWidth/innerHeight);this.R.setSize(e,t),this.layoutViews()}layoutViews(){let t=this.localPlayers.length;this.localPlayers.forEach((e,i)=>{e.rect=t===1?[0,0,1,1]:i===0?[0,.5,1,.5]:[0,0,1,.5],e.camera.aspect=e.rect[2]*this.R.w/(e.rect[3]*this.R.h),e.camera.updateProjectionMatrix(),e.hud&&e.hud.place(e.rect)}),this.titleCam.aspect=this.R.w/this.R.h,this.titleCam.updateProjectionMatrix()}startSession(t,e={}){this.mode=t,this.resetWorld();let i=[];t==="split"?(i.push(new $s(Me.padCount()>1?1:-1)),i.push(new va(0))):i.push(new $s(0));let n=e.myId??1;if(i.forEach((r,o)=>{let a=new Kn(this,n+o,{input:r,slot:o,color:(n+o-1)%4});this.players.push(a),this.localPlayers.push(a),a.hud=new _a(this,a),this.huds.push(a.hud)}),this.applySettings(),t!=="client"){let r=e.fresh?null:Fi.load(),o=this.world.islands.find(l=>l.kind==="outpost");this.home=o;let a=new wi(this,"player",o.moor.x,o.moor.z,-Math.PI/2+1e-4);a.anchor=!0,this.scene.add(a.root),this.ships.push(a),this.playerShip=a,r?Fi.apply(this,r):(this.gold=0,this.maps=[],this.upgrades=[0,0,0,0],this.giveMap(!0)),this.applyUpgrades(),this.localPlayers.forEach((l,h)=>l.teleport(a,new x(-5+h*1.5,-2.5+19*q+.02,h?1:0),Math.PI/2))}else this.home=this.world.islands.find(o=>o.kind==="outpost"),this.localPlayers[0].pos.set(this.home.merchant.x+2,this.world.height(this.home.merchant.x+2,this.home.merchant.z)+.2,this.home.merchant.z+2);this.layoutViews(),this.state="play",this.menu.hide(),document.getElementById("hud").style.display="block",xt.init(),Me.lock(),this.later(()=>this.sayAll(t==="client"?"joined":"welcome",[]),.6)}resetWorld(){this.net&&this.net.close(),this.net=null;for(let t of[...this.ships])this.removeShip(t);for(let t of this.skeletons)t.remove();this.skeletons=[];for(let t of this.sharks)t.remove();this.sharks=[];for(let t of this.serpents)t.remove();this.serpents=[];for(let t of[...this.loot])this.removeLoot(t);for(let t of this.balls)this.scene.remove(t.mesh);this.balls=[];for(let t of this.players)this.scene.remove(t.avatar.root),t.camera&&this.scene.remove(t.camera),t.hud&&t.hud.destroy();this.players=[],this.localPlayers=[],this.huds=[],this.ais=[],this.playerShip=null,this.timers=[];for(let t of this.world.islands){for(let e of t.digs)e.dug=!1;t.discovered=!1,t.looseTaken=!1,t.shrine=0,t.captainDone=!1}for(let t of this.world.props)t.diff=null,t.looted=!1,t.lit=!1,t.gone=!1,t.exploded=!1,t.grid&&(this.scene.remove(t.grid.group),t.grid.dispose(),t.grid=null);this.islandSpawn.clear(),this.enemyTimer=140,this.lootTimer=50,this.serpentTimer=600+Math.random()*300,this.hour=9,this.time=0,this.weather.reset(),this.stats={chests:0,ships:0,skeletons:0}}backToTitle(){this.mode&&this.mode!=="client"&&Fi.store(this),this.resetWorld(),this.mode=null,this.state="title",this.titleShip=new wi(this,"player",this.world.islands.find(t=>t.kind==="outpost").moor.x,this.world.islands.find(t=>t.kind==="outpost").moor.z,-Math.PI/2+1e-4),this.titleShip.anchor=!0,this.scene.add(this.titleShip.root),this.ships.push(this.titleShip),document.getElementById("hud").style.display="none",Me.unlock(),this.menu.title(),$e.set("title")}pause(){if(this.state!=="play")return;let t=this.mode==="host"||this.mode==="client";if(this.state=t?"play":"pause",this.paused=!0,t)for(let e of this.localPlayers)e.ui||(e.ui="menu");Me.unlock(),this.menu.pause()}resume(){this.paused=!1,this.state==="pause"&&(this.state="play");for(let t of this.localPlayers)t.ui==="menu"&&(t.ui=null);this.menu.hide(),Me.lock()}applyUpgrades(){let t=this.playerShip;if(!t)return;let[e,i,n,r]=this.upgrades;t.hullMul=[1,.85,.72][e],t.leakMul=[1,.85,.7][e]*this.diff.leak,t.maxSpeed=[9.5,10.5,11.6][i],t.ballRadius=[2.3,2.7,3.1][n],t.reload=[1.4,1.1,.85][n],t.cap={ammo:[30,45,60][r],planks:[12,18,24][r],food:[8,12,16][r]}}say(t,e=[],i="",n=null){if(n){n.local?n.hud&&n.hud.toast(t,e,i):this.net&&this.net.sendTo(n.id,{t:"say",k:t,a:e,c:i});return}this.sayAll(t,e,i)}sayAll(t,e=[],i=""){for(let n of this.huds)n.toast(t,e,i);this.isHost&&this.net&&this.net.broadcast({t:"say",k:t,a:e,c:i})}fxEvent(t,e,i,n,r,o){this.fx.burst(new x(e,i,n),r,t,o),this.isHost&&this.net&&this.net.queueFx([t,+e.toFixed(2),+i.toFixed(2),+n.toFixed(2),r,o||0])}sfx(t,e,i=1){xt.play(t,i,e?this.distToCam(e):0),this.isHost&&this.net&&this.net.queueFx(["@"+t,e?+e.x.toFixed(1):0,e?+e.y.toFixed(1):0,e?+e.z.toFixed(1):0,i,e?1:0])}later(t,e){(this.timers=this.timers||[]).push({fn:t,t:this.time+e})}runTimers(){if(!this.timers||!this.timers.length)return;let t=this.timers.filter(e=>e.t<=this.time);this.timers=this.timers.filter(e=>e.t>this.time);for(let e of t)e.fn()}shipById(t){return this.ships.find(e=>e.netId===t)||null}playerById(t){return this.players.find(e=>e.id===t)||null}act(t,e){if(this.isClient){this.net.send({t:"act",...e}),this.applyActLocal(t,e);return}this.applyAct(t,e)}applyActLocal(t,e){let i=e.s!==void 0?this.shipById(e.s):null;e.a==="repair"&&i&&i.repairAt(new x(e.x,e.y,e.z),.85),e.a==="pour"&&this.fx.burst(new x(e.x,e.y,e.z),12,"splash")}applyAct(t,e){let i=e.s!==void 0?this.shipById(e.s):null;switch(e.a){case"station":{let n=i&&i.stations[e.i];n&&(!n.user||n.user===t)&&(t.station&&t.station!==n&&(t.station.user=null),n.user=t,t.station=n);break}case"leave":t.station&&(t.station.user=null,t.station=null);break;case"helm":i&&(i.rudder=Math.max(-1,Math.min(1,e.r)));break;case"sail":i&&(i.sail.h=Math.max(0,Math.min(1,e.h)),i.sail.angle=Math.max(-1,Math.min(1,e.ang)));break;case"anchor":i&&(e.v&&!i.anchor?(i.anchor=!0,i.anchorT=0,this.sfx("chain",i.root.position)):!e.v&&i.anchor&&(i.anchor=!1,this.sfx("chain",i.root.position,.6)));break;case"aim":{let n=i&&i.stations[e.i];n&&n.cannon&&(n.cannon.yaw=e.yaw,n.cannon.pitch=e.pitch);break}case"load":{let n=i&&i.stations[e.i];if(!n||!n.cannon)break;let r=n.cannon;if(r.loaded||r.loadT)break;if(i.ammo<=0){this.say("noAmmo",[],"bad",t),r.loading=!1;break}i.ammo--,r.loading=!0,r.loadT=!0,this.later(()=>{r.loaded=!0,r.loading=!1,r.loadT=!1,this.sfx("hammer",i.root.position,.6)},i.reload||1.4);break}case"fire":{let n=i&&i.stations[e.i];if(!n||!n.cannon)break;let r=n.cannon;r.yaw=e.yaw,r.pitch=e.pitch,r.loaded=!1,r.cool=.6,i.updateTransform(this.time),this.fireCannon(i,n);break}case"stock":i&&(i[e.k]=Math.max(0,i[e.k]+e.d));break;case"dmg":{let r=(e.k==="skel"?this.skeletons:e.k==="shark"?this.sharks:this.serpents).find(o=>o.id===e.id);r&&r.alive&&r.damage(Math.min(e.n,200));break}case"dig":this.digAt(t,e.x,e.z);break;case"repair":i&&(i.repairAt(new x(e.x,e.y,e.z),.85),i.countLeaks(),this.sfx("hammer",i.toWorld(new x(e.x,e.y,e.z))));break;case"scoop":i&&(i.water=Math.max(0,i.water-.022));break;case"pour":this.pourAt(new x(e.x,e.y,e.z));break;case"pickup":this.pickupLoot(t,e.id);break;case"drop":this.dropLootAt(t,e.id,e.sh,new x(e.x,e.y,e.z));break;case"sell":this.sellLoot(t,e.id);break;case"buy":this.buy(t,e.what);break;case"supply":this.restock(t);break;case"lootbarrel":this.lootBarrel(t,e.pi);break;case"totem":this.lightTotem(t,e.pi);break;case"collect":{let n=this.loot.find(r=>r.id===e.id);n&&this.collectFloating(n,t);break}}}loop(t){requestAnimationFrame(this.loop);let e=Math.min(.05,(t-this.last)/1e3);this.last=t;try{this.step(e)}catch(i){console.error(i),this._errShown||(this._errShown=!0)}}step(t){Me.poll(),this.frame++;let e=this.state==="play";if(e&&!this.paused){for(let i of this.localPlayers)if(!i.ui&&i.input.pause()){this.pause();break}}else this.paused&&Me.pause()&&this.resume();if(e&&!(this.paused&&!this.mode.match(/host|client/))?(this.time+=t,this.isClient||(this.hour=(this.hour+t/60)%24),this.updateWorld(t)):this.time+=t*.3,this.net&&this.net.update(t),this.render(t),e)for(let i of this.huds)i.update(t);this.menu.update(),Me.endFrame()}simulate(t,e=.05){for(let i=0;i<t/e;i++)this.time+=e,this.frame++,this.updateWorld(e),Me.endFrame()}updateWorld(t){this.shake=Math.max(0,this.shake-t*2),this.runTimers();let e=!this.isClient;e?(Math.random()<t*.01&&(this.wind.target=this.wind.dir+(Math.random()-.5)*1.6),this.wind.dir+=je(this.wind.target-this.wind.dir)*t*.05,this.wind.str=(.8+.2*Math.sin(this.time*.03))*this.weather.windMul(),this.weather.update(t)):this.weather.updateVisual(t);let i=this.localPlayers[0],n=i.worldPos(new x);this.cursed=le(this.cursed||0,this.world.cursedness(n.x,n.z),t*.5);let r=this.hour<5.5||this.hour>20;r!==this.wasNight&&(this.wasNight!==void 0&&e&&this.sayAll(r?"night":"day",[],r?"ghost":"good"),this.wasNight=r),this.isNight=r;for(let c of this.localPlayers){c.interactTarget=this.findInteract(c),c.input.use()&&!c.station&&c.dead<=0&&!c.ui&&c.interact(c.interactTarget),this.anchorHold(c,t),c.update(t),c.input.map()&&!c.ui&&(c.chartOpen=!c.chartOpen,c.hud.showChart(c.chartOpen)),c.chartOpen&&this.frame%30===0&&c.hud.drawChart();let u=c.input.treasureMap()&&!c.ui;u!==c.tmapOpen&&(c.tmapOpen=u,c.hud.showTreasure(u))}for(let c of this.players)c.local||c.updateRemote(t);let o=this.time;for(let c of this.ships)c.update(t,o);if(e){for(let c of this.ais)c.update(t);this.shipCollisions(t);for(let c=this.ships.length-1;c>=0;c--){let u=this.ships[c];if(u.dead){u===this.playerShip&&this.onPlayerShipLost(),this.removeShip(u);continue}u!==this.playerShip&&u.style!=="player"&&this.nearestPlayerDist(u.x,u.z)>1100&&this.removeShip(u)}}this.updateBalls(t);for(let c of this.skeletons)c.alive&&c.update(t);e&&(this.skeletons=this.skeletons.filter(c=>c.alive?c.ship&&!c.ship.dead&&c.ship.style!=="player"?!0:this.nearestPlayerDist(c.worldPos(Rn).x,Rn.z)>170?(c.remove(),!1):!0:!1));for(let c of this.sharks)c.alive&&c.update(t);e&&(this.sharks=this.sharks.filter(c=>c.alive?!0:(c.remove(),!1)));for(let c of this.serpents)c.update(t);e&&(this.serpents=this.serpents.filter(c=>c.alive?!0:(c.remove(),!1))),this.updateLoot(t),e&&this.spawner(t),this.streamProps();for(let c of this.nearProps)c.kind==="totem"&&c.lit&&Math.random()<t*8&&this.fx.burst(new x(c.x,c.y+4.3,c.z),1,"ghost");for(let c of this.world.wrecks)!c.seen&&Math.hypot(c.x-n.x,c.z-n.z)<200&&(c.seen=!0);for(let c of this.merchants)c.fig.animate(t,0,0),n.distanceTo(c.pos)<12&&(c.fig.root.rotation.y=Math.atan2(n.x-c.pos.x,n.z-c.pos.z)-Math.PI/2);let a=this.playerShip;if(a&&!a.dead){let c=this.localPlayers.some(u=>u.ship===a);if(Math.random()<t*.6&&xt.play("creak",c?1:.3),a.speed>1.5&&this.frame%2===0){let u=a.fwd,d=-u.z,f=u.x;for(let m of[-1,1])this.fx.burst(Rn.set(a.x+u.x*10+d*m*3.4,ie(a.x,a.z,o),a.z+u.z*10+f*m*3.4),1,"wake",{vx:d*m*1.5,vz:f*m*1.5});if(this.fx.burst(Rn.set(a.x-u.x*14,ie(a.x,a.z,o),a.z-u.z*14),1,"wake"),a.speed>4.5)for(let m of[-1,1])this.fx.burst(Rn.set(a.x+u.x*12.5+d*m*1.6,ie(a.x+u.x*12,a.z+u.z*12,o)+.4,a.z+u.z*12.5+f*m*1.6),2,"spray",{vx:d*m*2.5+u.x*a.speed*.6,vz:f*m*2.5+u.z*a.speed*.6})}if(a.holes&&a.holes.length&&this.frame%3===0){let u=a.holes[Math.floor(Math.random()*a.holes.length)],d=a.grid,f=u%d.sx,m=Math.floor(u/d.sx)%d.sz,y=Math.floor(u/(d.sx*d.sz)),g=d.toLocal(f,y,m);g.z*=.9;let p=a.toWorld(g);this.fx.burst(p,2,"spray",{vx:0,vz:-Math.sign(g.z)*2*Math.cos(a.yaw)})}e&&(a.leaks>0&&!this.leakWarned&&(this.leakWarned=!0,this.sayAll("leak",[],"bad")),a.leaks===0&&(this.leakWarned=!1),a.water>.35&&!this.floodWarned&&(this.floodWarned=!0,this.sayAll("flooding",[],"bad")),a.water<.2&&(this.floodWarned=!1),a.fires.size>0&&!this.fireWarned&&(this.fireWarned=!0,this.sayAll("fire",[],"bad")),a.fires.size===0&&(this.fireWarned=!1))}let l=0;for(let c of this.ships){let u=0;for(let d of c.fires.keys()){if(u++>40)break;if(Math.random()>.35)continue;let f=c.grid,m=d%f.sx,y=Math.floor(d/f.sx)%f.sz,g=Math.floor(d/(f.sx*f.sz)),p=f.toLocal(m,g,y),M=c.toWorld(p.clone());this.fx.burst(M,1,"fire"),Math.random()<.15&&this.fx.burst(M,1,"smoke"),this.distToCam(M)<40&&l++;for(let v of this.localPlayers)v.ship===c&&v.pos.distanceTo(p)<.9&&Math.random()<t*4&&v.hurt(4,"fire")}}this.chooseMusic();let h=i;xt.ambience({speed:a&&h.ship===a?a.speed/9:0,wind:this.wind.str*(h.ship?1:.5),under:h.under,high:h.pos.y>8&&h.ship,fire:l,rain:this.weather.rain}),!this.isClient&&this.frame%600===0&&Fi.store(this)}anchorHold(t,e){let i=t.interactTarget;if(i&&i.kind==="station"&&i.st.type==="anchor"&&i.st.ship.anchor&&t.input.useHeld()){t.raiseT=(t.raiseT||0)+e,Math.random()<e*8&&xt.play("ratchet",.8),t.raiseT>2.4&&(this.act(t,{a:"anchor",s:i.st.ship.netId,v:!1}),i.st.ship.anchor=!1,t.raiseT=0);return}t.raiseT=0}chooseMusic(){let t=this.localPlayers[0],e=t.worldPos(new x),i=this.isNight?"night":"day",n=this.playerShip,r=this.world.islandAt(e.x,e.z,10);r&&!t.ship?i=r.kind==="outpost"?"outpost":r.kind==="cursed"?"cursed":this.isNight?"night":"island":r&&r.kind==="outpost"?i="outpost":this.cursed>.5?i="cursed":!this.isNight&&n&&n.anchor&&t.ship===n&&(i="calm"),this.skeletons.some(a=>a.state==="chase"||a.kind==="captain")&&(i="battle");let o=$e.mood==="battle"||$e.mood==="ghost";for(let a of this.ships)a.style!=="player"&&!a.sinking&&Math.hypot(a.x-e.x,a.z-e.z)<(o?330:260)&&(i=a.style==="ghost"?"ghost":"battle");this.serpents.length&&(i="battle"),$e.set(i)}render(t){let e=kd(this.hour,this.cursed||0);this.weather.tint(e),this.palette=e,this.night=e.night;let i=this.sky.mat.uniforms;i.uTop.value.copy(e.top),i.uHor.value.copy(e.hor),i.uSun.value.copy(e.sunDir),i.uSunCol.value.copy(e.sun),i.uNight.value=e.night*(1-this.weather.cover*.8),i.uMoon.value.copy(e.moonDir),i.uTime.value=this.time;let n=e.sunDir.y>-.05;this.sun.color.copy(n?e.sun:new mt("#7088c0")),this.sun.intensity=(n?.4+e.light*1.8:.35)*(1-this.weather.cover*.6),this.hemi.color.copy(e.amb),this.hemi.groundColor.copy(e.amb).multiplyScalar(.45),this.hemi.intensity=.8+e.light*.8;let r=this.ocean.mat.uniforms;r.uTime.value=this.time,r.uAmp.value=Lr.amp,r.uSunDir.value.copy(n?e.sunDir:e.moonDir),r.uSunCol.value.copy(n?e.sun:new mt("#5a6a9a")).multiplyScalar(1-this.weather.cover*.7),r.uAmb.value.copy(e.amb).multiplyScalar(.9),r.uDeep.value.copy(e.sea),r.uShallow.value.copy(e.sea).lerp(new mt("#40c8c0"),Math.max(0,.75-e.night*.45-(this.cursed||0)*.3-this.weather.cover*.3)),r.uCursed.value=this.cursed||0;let o=0;for(let l of this.ships)o>=kr||l.dead||(this.ocean.shipInv[o].copy(l.root.matrixWorld).invert(),o++);r.uShipN.value=o;let a=(l,h)=>ie(l,h,this.time);if(this.fx.update(t,a),this.debris.update(t,a),this.decor.update(t),this.state==="play"&&this.sealife.update(t),this.flashes=(this.flashes||[]).filter(l=>(l.t-=t)>0),this.state==="play")for(let l of this.localPlayers){if(l.under||Math.random()>t*14*this.wind.str)continue;let h=l.camera.position,c=Math.cos(this.wind.dir),u=-Math.sin(this.wind.dir),d=6+this.wind.str*8,f=Math.random()*6.28,m=3+Math.random()*14;this.fx.add(h.x+Math.cos(f)*m-c*8,h.y+1+Math.random()*7,h.z+Math.sin(f)*m-u*8,c*d,(Math.random()-.5)*.4,u*d,1.6+Math.random(),.05,.95,.97,1,{r2:.8,g2:.85,b2:.9})}if(this.R.begin(),this.state==="title"||!this.localPlayers.length){let l=this.time*.05,h=this.titleShip||this.playerShip;this.titleShip&&this.titleShip.update(t,this.time),this.titleCam.position.set(h.x+Math.cos(l)*38,9+Math.sin(this.time*.3),h.z+Math.sin(l)*38),this.titleCam.lookAt(h.x,6,h.z),this.streamProps(this.titleCam.position),this.prepareView(this.titleCam,null,[0,0,1,1]),this.R.view(this.scene,this.titleCam,[0,0,1,1])}else{for(let l of this.players)!l.local||this.localPlayers.length>1?l.updateAvatar(t):l.avatar.root.visible=!1;for(let l of this.localPlayers){if(l.updateCamera(t),this.camOverride){let h=this.camOverride();l.camera.position.set(h.pos.x,h.pos.y,h.pos.z),l.camera.lookAt(h.look.x,h.look.y,h.look.z)}this.updateAimArc(l),this.prepareView(l.camera,l,l.rect),this.R.view(this.scene,l.camera,l.rect)}}this.R.end(this.settings.dither,this.weather.flash)}prepareView(t,e,i){let n=this.palette,r=e&&e.under;this.sky.mesh.position.copy(t.position);let o=le(650,260,(this.cursed||0)*.8)*this.weather.fogMul()*(r?.05:1);this.scene.fog.color.copy(r?new mt("#0a3a54"):n.fog),this.scene.fog.near=r?1:o*.2,this.scene.fog.far=o;let a=this.ocean.mat.uniforms;a.uCam.value.copy(t.position),a.uFog.value.copy(this.scene.fog.color),a.uFogNear.value=this.scene.fog.near,a.uFogFar.value=this.scene.fog.far,this.ocean.mesh.position.set(Math.round(t.position.x/8)*8,0,Math.round(t.position.z/8)*8),this.seabed.position.x=Math.round(t.position.x/8)*8,this.seabed.position.z=Math.round(t.position.z/8)*8,this.fx.mat.uniforms.uFog.value.copy(this.scene.fog.color),this.fx.mat.uniforms.uFogFar.value=this.scene.fog.far,this.fx.mat.uniforms.uScale.value=i[3]*this.R.h*.9;let l=n.sunDir.y>-.05?n.sunDir:n.moonDir,h=72/1024,c=t.position;this.sun.target.position.set(Math.round(c.x/h)*h,0,Math.round(c.z/h)*h),this.sun.position.copy(this.sun.target.position).addScaledVector(l,120),this.sun.target.updateMatrixWorld();for(let u of this.clouds){let d=u.userData;d.a+=6e-5,u.position.set(c.x+Math.cos(d.a)*d.r,d.h,c.z+Math.sin(d.a)*d.r),u.material.color.copy(n.hor).lerp(new mt("#ffffff"),.6-n.night*.5-this.weather.cover*.4),u.material.opacity=1-n.night*.6}this.lightPool.begin();for(let u of this.ships)if(!u.dead)for(let d of u.lightPts)this.lightPool.add(u.toWorld(d.p,new x),d.col,1.6,d.r);for(let u of this.nearLights||[])this.lightPool.add(u.pos,u.col,1.8,14);for(let u of this.flashes)this.lightPool.src.push(u);this.lightPool.end(t,n.night);for(let u of this.world.islands)u.mesh.visible=Math.hypot(u.cx-c.x,u.cz-c.z)-u.r<this.scene.fog.far+50;this.decor.prepare(c),this.weather.prepare(t)}updateAimArc(t){if(!t.aimArc){let u=new ge;u.setAttribute("position",new Ce(new Float32Array(540),3)),t.aimArc=new Ns(u,new Sr({color:"#ffe08a",size:3,sizeAttenuation:!1,fog:!1,depthTest:!1,transparent:!0,opacity:.85})),t.aimArc.frustumCulled=!1,t.aimArc.renderOrder=10,t.aimArc.layers.set(10+t.slot),this.scene.add(t.aimArc)}let e=t.station;if(!e||e.type!=="cannon"||t.dead>0){t.aimArc.visible=!1;return}let i=e.ship,n=e.cannon;n.pitchG.updateMatrixWorld(!0);let r=n.pitchG.matrixWorld,o=new x(0,0,1.5).applyMatrix4(r),a=new x(0,0,0).applyMatrix4(r),l=o.clone().sub(a).normalize().multiplyScalar(62).add(i.velocity()),h=t.aimArc.geometry.attributes.position.array,c=0;for(let u=0;u<400&&c<180&&(l.y-=9.8*.02,o.addScaledVector(l,.02),u%2===0&&(h[c*3]=o.x,h[c*3+1]=o.y,h[c*3+2]=o.z,c++),!(o.y<Math.max(ie(o.x,o.z,this.time),this.world.height(o.x,o.z))));u++);t.aimArc.geometry.setDrawRange(0,c),t.aimArc.geometry.attributes.position.needsUpdate=!0,t.aimArc.visible=!0}flash(t,e,i,n,r=.15){(this.flashes=this.flashes||[]).push({pos:t.clone(),color:e,intensity:i,range:n,t:r,always:!0})}shakeAt(){return this.shake}streamProps(t){if(this.frame%15!==0)return;let e=t?[t]:this.localPlayers.map(n=>n.camera.position),i=this.localPlayers.map(n=>n.worldPos(new x));this.nearLights=[];for(let n of this.world.props){let r=1e9;for(let o of e)r=Math.min(r,Math.hypot(n.x-o.x,n.z-o.z));if(r<260&&!n.grid&&!n.gone){let o=Td(n);if(!o)continue;if(o.buildAll(),n.diff){for(let[a,l]of n.diff)o.setIdx(a,l);o.flush(9999)}o.group.position.set(n.x,n.y,n.z),n.grid=o,n.rad=Math.max(o.sx,o.sz)*q/2+.3,n.top=o.sy*q,o.log=n.diff=n.diff||new Map,this.scene.add(o.group)}else r>320&&n.grid&&(this.scene.remove(n.grid.group),n.grid.dispose(),n.grid=null);if((n.light||n.lit)&&r<120&&!n.gone){let o=n.kind==="hut"?2:n.kind==="totem"?4:2.6;this.nearLights.push({pos:new x(n.x,n.y+o,n.z+(n.kind==="hut"?3.5:0)),col:n.kind==="totem"?n.lit?"#80ffb0":"#40ff90":"#ffc060"})}}this.nearProps=this.world.props.filter(n=>n.grid&&i.some(r=>Math.hypot(n.x-r.x,n.z-r.z)<40));for(let n of this.world.props)n.grid&&n.grid.flush(4)}propBlocks(t,e,i){for(let n of this.nearProps)if(!(Math.abs(n.x-t)>n.rad||Math.abs(n.z-i)>n.rad)&&n.grid.solidAt(t-n.x,e+.5-n.y,i-n.z))return!0;return!1}closestPlayer(t,e){let i=null,n=e;for(let r of this.players){if(r.dead>0)continue;let o=r.worldPos(Rn).distanceTo(t);o<n&&(n=o,i=r)}return i}nearestPlayerDist(t,e){let i=1e9;for(let n of this.players){let r=n.worldPos(Rn);i=Math.min(i,Math.hypot(r.x-t,r.z-e))}return i}distToCam(t){let e=1e9;for(let i of this.localPlayers)e=Math.min(e,i.camera.position.distanceTo(t));return this.localPlayers.length?e:this.titleCam.position.distanceTo(t)}distToShip(t,e=this.localPlayers[0]){let i=e.worldPos(Rn);return Math.hypot(i.x-t.x,i.z-t.z)}findInteract(t){if(t.dead>0||t.station||t.climb)return null;let e=t.eyeWorld(new x),i=t.lookDir(new x),n=null,r=1e9,o=new x,a=(l,h,c)=>{let u=e.distanceTo(l);if(u>h)return;o.subVectors(l,e).normalize();let d=o.dot(i);if(d<.72&&u>1.2)return;let f=u*(2-d);f<r&&(r=f,n=c)};for(let l of this.ships)if(!(l.dead||l.style!=="player"||this.distToShip(l,t)>30))for(let h of l.stations){let c=l.toWorld(new x(h.x,h.y,h.z)),u;h.type==="anchor"?u=l.anchor?["anchorRaise"]:["anchorDrop"]:h.type==="ammo"?u=["crateLabel",{k:"st_ammo"},l.ammo]:h.type==="planks"?u=["crateLabel",{k:"st_planks"},l.planks]:h.type==="food"?u=["crateLabel",{k:"st_food"},l.food]:u=["stationLabel",{k:"st_"+h.type}],h.user&&h.user!==t&&(u=["busy",{k:"st_"+h.type}]),a(c,h.type==="cannon"?2.2:2.6,{kind:"station",st:h,label:u})}if(t.ship&&t.ship.hatch&&!t.swim&&!t.ship.sinking){let l=t.ship.hatch,h=t.pos;if(h.y<l.deckY-1&&Math.hypot(h.x-l.x,h.z-l.z)<2.4)return{kind:"hatch",dir:"up",label:["hatchUp"]};h.y>l.deckY-.3&&h.y<l.deckY+.8&&Math.hypot(h.x-l.cx,h.z-l.z)<2.6&&(!n||t.pitch<-.35)&&(n={kind:"hatch",dir:"down",label:["hatchDown"]},r=0)}if(t.swim)for(let l of this.ships){if(l.dead||l.sinking||this.distToShip(l,t)>25)continue;let h=t.ship===l?t.pos.clone():l.toLocal(t.worldPos(new x));for(let c of l.ladders)if(Math.abs(h.x-c.x)<2.5&&Math.abs(h.z-c.z)<2.5)return{kind:"ladder",s:l,L:c,label:["ladder"]}}for(let l of this.loot)l.gone||l.kind==="coins"||l.carried||a(l.world(new x),2.8,{kind:"loot",L:l,label:["grabItem",{k:"loot_"+l.kind}]});for(let l of this.merchants){let h=l.pos.clone();h.y+=1.2,a(h,3.4,{kind:"merchant",m:l,label:t.carry?["sell"]:["talk"]})}for(let l of this.nearProps)(l.kind==="barrel"||l.kind==="crate")&&l.isl.kind==="outpost"?a(new x(l.x,l.y+1,l.z),2.5,{kind:"supply",pr:l,label:["restockHint"]}):l.loot&&!l.looted&&l.kind==="barrel"&&!l.gone?a(new x(l.x,l.y+1,l.z),2.5,{kind:"lootbarrel",pr:l,label:["grabItem",{k:"loot_supplies"}]}):l.kind==="totem"&&!l.lit&&!l.gone&&a(new x(l.x,l.y+3.5,l.z),3.2,{kind:"totem",pr:l,label:["lightTotem"]});return n}};Object.assign(Vr.prototype,nf,sf,of);window.addEventListener("load",()=>{window.game=new Vr});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
