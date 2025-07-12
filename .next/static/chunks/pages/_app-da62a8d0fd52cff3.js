(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{98099:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(97117);function n(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>8,t[r+1]=e>>>0,t}function o(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t}function a(e,t){return void 0===t&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function s(e,t){return void 0===t&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function l(e,t){return void 0===t&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}function c(e,t){return void 0===t&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}function u(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>24,t[r+1]=e>>>16,t[r+2]=e>>>8,t[r+3]=e>>>0,t}function d(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24,t}function h(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),u(e/4294967296>>>0,t,r),u(e>>>0,t,r+4),t}function f(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),d(e>>>0,t,r),d(e/4294967296>>>0,t,r+4),t}t.readInt16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16},t.readUint16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])>>>0},t.readInt16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])<<16>>16},t.readUint16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])>>>0},t.writeUint16BE=n,t.writeInt16BE=n,t.writeUint16LE=o,t.writeInt16LE=o,t.readInt32BE=a,t.readUint32BE=s,t.readInt32LE=l,t.readUint32LE=c,t.writeUint32BE=u,t.writeInt32BE=u,t.writeUint32LE=d,t.writeInt32LE=d,t.readInt64BE=function(e,t){void 0===t&&(t=0);var r=a(e,t),i=a(e,t+4);return 4294967296*r+i-(i>>31)*4294967296},t.readUint64BE=function(e,t){return void 0===t&&(t=0),4294967296*s(e,t)+s(e,t+4)},t.readInt64LE=function(e,t){void 0===t&&(t=0);var r=l(e,t);return 4294967296*l(e,t+4)+r-(r>>31)*4294967296},t.readUint64LE=function(e,t){void 0===t&&(t=0);var r=c(e,t);return 4294967296*c(e,t+4)+r},t.writeUint64BE=h,t.writeInt64BE=h,t.writeUint64LE=f,t.writeInt64LE=f,t.readUintBE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw Error("readUintBE: array is too short for the given bitLength");for(var i=0,n=1,o=e/8+r-1;o>=r;o--)i+=t[o]*n,n*=256;return i},t.readUintLE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw Error("readUintLE: array is too short for the given bitLength");for(var i=0,n=1,o=r;o<r+e/8;o++)i+=t[o]*n,n*=256;return i},t.writeUintBE=function(e,t,r,n){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===n&&(n=0),e%8!=0)throw Error("writeUintBE supports only bitLengths divisible by 8");if(!i.isSafeInteger(t))throw Error("writeUintBE value must be an integer");for(var o=1,a=e/8+n-1;a>=n;a--)r[a]=t/o&255,o*=256;return r},t.writeUintLE=function(e,t,r,n){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===n&&(n=0),e%8!=0)throw Error("writeUintLE supports only bitLengths divisible by 8");if(!i.isSafeInteger(t))throw Error("writeUintLE value must be an integer");for(var o=1,a=n;a<n+e/8;a++)r[a]=t/o&255,o*=256;return r},t.readFloat32BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t)},t.readFloat32LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t,!0)},t.readFloat64BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t)},t.readFloat64LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t,!0)},t.writeFloat32BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e),t},t.writeFloat32LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e,!0),t},t.writeFloat64BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e),t},t.writeFloat64LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e,!0),t}},15501:function(e,t,r){"use strict";var i=r(25439),n=r(63027),o=r(17309),a=r(98099),s=r(4153);t.Cv=32,t.WH=12,t.pg=16;var l=new Uint8Array(16),c=function(){function e(e){if(this.nonceLength=t.WH,this.tagLength=t.pg,e.length!==t.Cv)throw Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(e)}return e.prototype.seal=function(e,t,r,n){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");var a,s=new Uint8Array(16);s.set(e,s.length-e.length);var l=new Uint8Array(32);i.stream(this._key,s,l,4);var c=t.length+this.tagLength;if(n){if(n.length!==c)throw Error("ChaCha20Poly1305: incorrect destination length");a=n}else a=new Uint8Array(c);return i.streamXOR(this._key,s,t,a,4),this._authenticate(a.subarray(a.length-this.tagLength,a.length),l,a.subarray(0,a.length-this.tagLength),r),o.wipe(s),a},e.prototype.open=function(e,t,r,n){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");if(t.length<this.tagLength)return null;var a,l=new Uint8Array(16);l.set(e,l.length-e.length);var c=new Uint8Array(32);i.stream(this._key,l,c,4);var u=new Uint8Array(this.tagLength);if(this._authenticate(u,c,t.subarray(0,t.length-this.tagLength),r),!s.equal(u,t.subarray(t.length-this.tagLength,t.length)))return null;var d=t.length-this.tagLength;if(n){if(n.length!==d)throw Error("ChaCha20Poly1305: incorrect destination length");a=n}else a=new Uint8Array(d);return i.streamXOR(this._key,l,t.subarray(0,t.length-this.tagLength),a,4),o.wipe(l),a},e.prototype.clean=function(){return o.wipe(this._key),this},e.prototype._authenticate=function(e,t,r,i){var s=new n.Poly1305(t);i&&(s.update(i),i.length%16>0&&s.update(l.subarray(i.length%16))),s.update(r),r.length%16>0&&s.update(l.subarray(r.length%16));var c=new Uint8Array(8);i&&a.writeUint64LE(i.length,c),s.update(c),a.writeUint64LE(r.length,c),s.update(c);for(var u=s.digest(),d=0;d<u.length;d++)e[d]=u[d];s.clean(),o.wipe(u),o.wipe(c)},e}();t.OK=c},25439:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(98099),n=r(17309);function o(e,t,r,o,a){if(void 0===a&&(a=0),32!==e.length)throw Error("ChaCha: key size must be 32 bytes");if(o.length<r.length)throw Error("ChaCha: destination is shorter than source");if(0===a){if(8!==t.length&&12!==t.length)throw Error("ChaCha nonce must be 8 or 12 bytes");l=(s=new Uint8Array(16)).length-t.length,s.set(t,l)}else{if(16!==t.length)throw Error("ChaCha nonce with counter must be 16 bytes");s=t,l=a}for(var s,l,c=new Uint8Array(64),u=0;u<r.length;u+=64){!function(e,t,r){for(var n=r[3]<<24|r[2]<<16|r[1]<<8|r[0],o=r[7]<<24|r[6]<<16|r[5]<<8|r[4],a=r[11]<<24|r[10]<<16|r[9]<<8|r[8],s=r[15]<<24|r[14]<<16|r[13]<<8|r[12],l=r[19]<<24|r[18]<<16|r[17]<<8|r[16],c=r[23]<<24|r[22]<<16|r[21]<<8|r[20],u=r[27]<<24|r[26]<<16|r[25]<<8|r[24],d=r[31]<<24|r[30]<<16|r[29]<<8|r[28],h=t[3]<<24|t[2]<<16|t[1]<<8|t[0],f=t[7]<<24|t[6]<<16|t[5]<<8|t[4],p=t[11]<<24|t[10]<<16|t[9]<<8|t[8],g=t[15]<<24|t[14]<<16|t[13]<<8|t[12],m=1634760805,w=857760878,b=2036477234,y=1797285236,v=n,x=o,C=a,E=s,_=l,S=c,k=u,A=d,O=h,$=f,I=p,D=g,P=0;P<20;P+=2)O^=m=m+v|0,v^=_=_+(O=O>>>16|O<<16)|0,v=v>>>20|v<<12,$^=w=w+x|0,x^=S=S+($=$>>>16|$<<16)|0,x=x>>>20|x<<12,I^=b=b+C|0,C^=k=k+(I=I>>>16|I<<16)|0,C=C>>>20|C<<12,D^=y=y+E|0,E^=A=A+(D=D>>>16|D<<16)|0,E=E>>>20|E<<12,I^=b=b+C|0,C^=k=k+(I=I>>>24|I<<8)|0,C=C>>>25|C<<7,D^=y=y+E|0,E^=A=A+(D=D>>>24|D<<8)|0,E=E>>>25|E<<7,$^=w=w+x|0,x^=S=S+($=$>>>24|$<<8)|0,x=x>>>25|x<<7,O^=m=m+v|0,v^=_=_+(O=O>>>24|O<<8)|0,v=v>>>25|v<<7,D^=m=m+x|0,x^=k=k+(D=D>>>16|D<<16)|0,x=x>>>20|x<<12,O^=w=w+C|0,C^=A=A+(O=O>>>16|O<<16)|0,C=C>>>20|C<<12,$^=b=b+E|0,E^=_=_+($=$>>>16|$<<16)|0,E=E>>>20|E<<12,I^=y=y+v|0,v^=S=S+(I=I>>>16|I<<16)|0,v=v>>>20|v<<12,$^=b=b+E|0,E^=_=_+($=$>>>24|$<<8)|0,E=E>>>25|E<<7,I^=y=y+v|0,v^=S=S+(I=I>>>24|I<<8)|0,v=v>>>25|v<<7,O^=w=w+C|0,C^=A=A+(O=O>>>24|O<<8)|0,C=C>>>25|C<<7,D^=m=m+x|0,x^=k=k+(D=D>>>24|D<<8)|0,x=x>>>25|x<<7;i.writeUint32LE(m+1634760805|0,e,0),i.writeUint32LE(w+857760878|0,e,4),i.writeUint32LE(b+2036477234|0,e,8),i.writeUint32LE(y+1797285236|0,e,12),i.writeUint32LE(v+n|0,e,16),i.writeUint32LE(x+o|0,e,20),i.writeUint32LE(C+a|0,e,24),i.writeUint32LE(E+s|0,e,28),i.writeUint32LE(_+l|0,e,32),i.writeUint32LE(S+c|0,e,36),i.writeUint32LE(k+u|0,e,40),i.writeUint32LE(A+d|0,e,44),i.writeUint32LE(O+h|0,e,48),i.writeUint32LE($+f|0,e,52),i.writeUint32LE(I+p|0,e,56),i.writeUint32LE(D+g|0,e,60)}(c,s,e);for(var d=u;d<u+64&&d<r.length;d++)o[d]=r[d]^c[d-u];!function(e,t,r){for(var i=1;r--;)i=i+(255&e[t])|0,e[t]=255&i,i>>>=8,t++;if(i>0)throw Error("ChaCha: counter overflow")}(s,0,l)}return n.wipe(c),0===a&&n.wipe(s),o}t.streamXOR=o,t.stream=function(e,t,r,i){return void 0===i&&(i=0),n.wipe(r),o(e,t,r,r,i)}},4153:function(e,t){"use strict";function r(e,t){if(e.length!==t.length)return 0;for(var r=0,i=0;i<e.length;i++)r|=e[i]^t[i];return 1&r-1>>>8}Object.defineProperty(t,"__esModule",{value:!0}),t.select=function(e,t,r){return~(e-1)&t|e-1&r},t.lessOrEqual=function(e,t){return(0|e)-(0|t)-1>>>31&1},t.compare=r,t.equal=function(e,t){return 0!==e.length&&0!==t.length&&0!==r(e,t)}},79984:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSerializableHash=function(e){return void 0!==e.saveState&&void 0!==e.restoreState&&void 0!==e.cleanSavedState}},512:function(e,t,r){"use strict";var i=r(25629),n=r(17309),o=function(){function e(e,t,r,n){void 0===r&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=n;var o=i.hmac(this._hash,r,t);this._hmac=new i.HMAC(e,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(0===e)throw Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(e){for(var t=new Uint8Array(e),r=0;r<t.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),t[r]=this._buffer[this._bufpos++];return t},e.prototype.clean=function(){this._hmac.clean(),n.wipe(this._buffer),n.wipe(this._counter),this._bufpos=0},e}();t.t=o},25629:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(79984),n=r(4153),o=r(17309),a=function(){function e(e,t){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);t.length>this.blockSize?this._inner.update(t).finish(r).clean():r.set(t);for(var n=0;n<r.length;n++)r[n]^=54;this._inner.update(r);for(var n=0;n<r.length;n++)r[n]^=106;this._outer.update(r),i.isSerializableHash(this._inner)&&i.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),o.wipe(r)}return e.prototype.reset=function(){if(!i.isSerializableHash(this._inner)||!i.isSerializableHash(this._outer))throw Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){i.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),i.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(e){return this._inner.update(e),this},e.prototype.finish=function(e){return this._finished?this._outer.finish(e):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0),this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(!i.isSerializableHash(this._inner))throw Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(e){if(!i.isSerializableHash(this._inner)||!i.isSerializableHash(this._outer))throw Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(e){if(!i.isSerializableHash(this._inner))throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},e}();t.HMAC=a,t.hmac=function(e,t,r){var i=new a(e,t);i.update(r);var n=i.digest();return i.clean(),n},t.equal=n.equal},97117:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mul=Math.imul||function(e,t){var r=65535&e,i=65535&t;return r*i+((e>>>16&65535)*i+r*(t>>>16&65535)<<16>>>0)|0},t.add=function(e,t){return e+t|0},t.sub=function(e,t){return e-t|0},t.rotl=function(e,t){return e<<t|e>>>32-t},t.rotr=function(e,t){return e<<32-t|e>>>t},t.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(e){return t.isInteger(e)&&e>=-t.MAX_SAFE_INTEGER&&e<=t.MAX_SAFE_INTEGER}},63027:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(4153),n=r(17309);t.DIGEST_LENGTH=16;var o=function(){function e(e){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var r=e[0]|e[1]<<8;this._r[0]=8191&r;var i=e[2]|e[3]<<8;this._r[1]=(r>>>13|i<<3)&8191;var n=e[4]|e[5]<<8;this._r[2]=(i>>>10|n<<6)&7939;var o=e[6]|e[7]<<8;this._r[3]=(n>>>7|o<<9)&8191;var a=e[8]|e[9]<<8;this._r[4]=(o>>>4|a<<12)&255,this._r[5]=a>>>1&8190;var s=e[10]|e[11]<<8;this._r[6]=(a>>>14|s<<2)&8191;var l=e[12]|e[13]<<8;this._r[7]=(s>>>11|l<<5)&8065;var c=e[14]|e[15]<<8;this._r[8]=(l>>>8|c<<8)&8191,this._r[9]=c>>>5&127,this._pad[0]=e[16]|e[17]<<8,this._pad[1]=e[18]|e[19]<<8,this._pad[2]=e[20]|e[21]<<8,this._pad[3]=e[22]|e[23]<<8,this._pad[4]=e[24]|e[25]<<8,this._pad[5]=e[26]|e[27]<<8,this._pad[6]=e[28]|e[29]<<8,this._pad[7]=e[30]|e[31]<<8}return e.prototype._blocks=function(e,t,r){for(var i=this._fin?0:2048,n=this._h[0],o=this._h[1],a=this._h[2],s=this._h[3],l=this._h[4],c=this._h[5],u=this._h[6],d=this._h[7],h=this._h[8],f=this._h[9],p=this._r[0],g=this._r[1],m=this._r[2],w=this._r[3],b=this._r[4],y=this._r[5],v=this._r[6],x=this._r[7],C=this._r[8],E=this._r[9];r>=16;){var _,S=e[t+0]|e[t+1]<<8;n+=8191&S;var k=e[t+2]|e[t+3]<<8;o+=(S>>>13|k<<3)&8191;var A=e[t+4]|e[t+5]<<8;a+=(k>>>10|A<<6)&8191;var O=e[t+6]|e[t+7]<<8;s+=(A>>>7|O<<9)&8191;var $=e[t+8]|e[t+9]<<8;l+=(O>>>4|$<<12)&8191,c+=$>>>1&8191;var I=e[t+10]|e[t+11]<<8;u+=($>>>14|I<<2)&8191;var D=e[t+12]|e[t+13]<<8;d+=(I>>>11|D<<5)&8191;var P=e[t+14]|e[t+15]<<8;h+=(D>>>8|P<<8)&8191,f+=P>>>5|i;var T=0;T=(_=0+n*p+5*E*o+5*C*a+5*x*s+5*v*l)>>>13,_&=8191,_+=5*y*c+5*b*u+5*w*d+5*m*h+5*g*f,T+=_>>>13,_&=8191;var R=T;R+=n*g+o*p+5*E*a+5*C*s+5*x*l,T=R>>>13,R&=8191,R+=5*v*c+5*y*u+5*b*d+5*w*h+5*m*f,T+=R>>>13,R&=8191;var N=T;N+=n*m+o*g+a*p+5*E*s+5*C*l,T=N>>>13,N&=8191,N+=5*x*c+5*v*u+5*y*d+5*b*h+5*w*f,T+=N>>>13,N&=8191;var M=T;M+=n*w+o*m+a*g+s*p+5*E*l,T=M>>>13,M&=8191,M+=5*C*c+5*x*u+5*v*d+5*y*h+5*b*f,T+=M>>>13,M&=8191;var j=T;j+=n*b+o*w+a*m+s*g+l*p,T=j>>>13,j&=8191,j+=5*E*c+5*C*u+5*x*d+5*v*h+5*y*f,T+=j>>>13,j&=8191;var U=T;U+=n*y+o*b+a*w+s*m+l*g,T=U>>>13,U&=8191,U+=c*p+5*E*u+5*C*d+5*x*h+5*v*f,T+=U>>>13,U&=8191;var B=T;B+=n*v+o*y+a*b+s*w+l*m,T=B>>>13,B&=8191,B+=c*g+u*p+5*E*d+5*C*h+5*x*f,T+=B>>>13,B&=8191;var L=T;L+=n*x+o*v+a*y+s*b+l*w,T=L>>>13,L&=8191,L+=c*m+u*g+d*p+5*E*h+5*C*f,T+=L>>>13,L&=8191;var F=T;F+=n*C+o*x+a*v+s*y+l*b,T=F>>>13,F&=8191,F+=c*w+u*m+d*g+h*p+5*E*f,T+=F>>>13,F&=8191;var z=T;z+=n*E+o*C+a*x+s*v+l*y,T=z>>>13,z&=8191,z+=c*b+u*w+d*m+h*g+f*p,T+=z>>>13,z&=8191,_=8191&(T=(T=(T<<2)+T|0)+_|0),T>>>=13,R+=T,n=_,o=R,a=N,s=M,l=j,c=U,u=B,d=L,h=F,f=z,t+=16,r-=16}this._h[0]=n,this._h[1]=o,this._h[2]=a,this._h[3]=s,this._h[4]=l,this._h[5]=c,this._h[6]=u,this._h[7]=d,this._h[8]=h,this._h[9]=f},e.prototype.finish=function(e,t){void 0===t&&(t=0);var r,i,n,o,a=new Uint16Array(10);if(this._leftover){for(o=this._leftover,this._buffer[o++]=1;o<16;o++)this._buffer[o]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(r=this._h[1]>>>13,this._h[1]&=8191,o=2;o<10;o++)this._h[o]+=r,r=this._h[o]>>>13,this._h[o]&=8191;for(this._h[0]+=5*r,r=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=r,r=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=r,a[0]=this._h[0]+5,r=a[0]>>>13,a[0]&=8191,o=1;o<10;o++)a[o]=this._h[o]+r,r=a[o]>>>13,a[o]&=8191;for(a[9]-=8192,i=(1^r)-1,o=0;o<10;o++)a[o]&=i;for(o=0,i=~i;o<10;o++)this._h[o]=this._h[o]&i|a[o];for(o=1,this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,n=this._h[0]+this._pad[0],this._h[0]=65535&n;o<8;o++)n=(this._h[o]+this._pad[o]|0)+(n>>>16)|0,this._h[o]=65535&n;return e[t+0]=this._h[0]>>>0,e[t+1]=this._h[0]>>>8,e[t+2]=this._h[1]>>>0,e[t+3]=this._h[1]>>>8,e[t+4]=this._h[2]>>>0,e[t+5]=this._h[2]>>>8,e[t+6]=this._h[3]>>>0,e[t+7]=this._h[3]>>>8,e[t+8]=this._h[4]>>>0,e[t+9]=this._h[4]>>>8,e[t+10]=this._h[5]>>>0,e[t+11]=this._h[5]>>>8,e[t+12]=this._h[6]>>>0,e[t+13]=this._h[6]>>>8,e[t+14]=this._h[7]>>>0,e[t+15]=this._h[7]>>>8,this._finished=!0,this},e.prototype.update=function(e){var t,r=0,i=e.length;if(this._leftover){(t=16-this._leftover)>i&&(t=i);for(var n=0;n<t;n++)this._buffer[this._leftover+n]=e[r+n];if(i-=t,r+=t,this._leftover+=t,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(i>=16&&(t=i-i%16,this._blocks(e,r,t),r+=t,i-=t),i){for(var n=0;n<i;n++)this._buffer[this._leftover+n]=e[r+n];this._leftover+=i}return this},e.prototype.digest=function(){if(this._finished)throw Error("Poly1305 was finished");var e=new Uint8Array(16);return this.finish(e),e},e.prototype.clean=function(){return n.wipe(this._buffer),n.wipe(this._r),n.wipe(this._h),n.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},e}();t.Poly1305=o,t.oneTimeAuth=function(e,t){var r=new o(e);r.update(t);var i=r.digest();return r.clean(),i},t.equal=function(e,r){return e.length===t.DIGEST_LENGTH&&r.length===t.DIGEST_LENGTH&&i.equal(e,r)}},31416:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;let i=r(46008),n=r(98099),o=r(17309);function a(e,r=t.defaultRandomSource){return r.randomBytes(e)}t.defaultRandomSource=new i.SystemRandomSource,t.randomBytes=a,t.randomUint32=function(e=t.defaultRandomSource){let r=a(4,e),i=(0,n.readUint32LE)(r);return(0,o.wipe)(r),i};let s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function l(e,r=s,i=t.defaultRandomSource){if(r.length<2)throw Error("randomString charset is too short");if(r.length>256)throw Error("randomString charset is too long");let n="",l=r.length,c=256-256%l;for(;e>0;){let t=a(Math.ceil(256*e/c),i);for(let i=0;i<t.length&&e>0;i++){let o=t[i];o<c&&(n+=r.charAt(o%l),e--)}(0,o.wipe)(t)}return n}t.randomString=l,t.randomStringForEntropy=function(e,r=s,i=t.defaultRandomSource){return l(Math.ceil(e/(Math.log(r.length)/Math.LN2)),r,i)}},75455:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BrowserRandomSource=void 0;class r{constructor(){this.isAvailable=!1,this.isInstantiated=!1;let e="undefined"!=typeof self?self.crypto||self.msCrypto:null;e&&void 0!==e.getRandomValues&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Browser random byte generator is not available.");let t=new Uint8Array(e);for(let e=0;e<t.length;e+=65536)this._crypto.getRandomValues(t.subarray(e,e+Math.min(t.length-e,65536)));return t}}t.BrowserRandomSource=r},58871:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NodeRandomSource=void 0;let i=r(17309);class n{constructor(){this.isAvailable=!1,this.isInstantiated=!1;{let e=r(35883);e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Node.js random byte generator is not available.");let t=this._crypto.randomBytes(e);if(t.length!==e)throw Error("NodeRandomSource: got fewer bytes than requested");let r=new Uint8Array(e);for(let e=0;e<r.length;e++)r[e]=t[e];return(0,i.wipe)(t),r}}t.NodeRandomSource=n},46008:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SystemRandomSource=void 0;let i=r(75455),n=r(58871);class o{constructor(){if(this.isAvailable=!1,this.name="",this._source=new i.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new n.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw Error("System random byte generator is not available.");return this._source.randomBytes(e)}}t.SystemRandomSource=o},73294:function(e,t,r){"use strict";var i=r(98099),n=r(17309);t.k=32,t.cn=64;var o=function(){function e(){this.digestLength=t.k,this.blockSize=t.cn,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return e.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},e.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},e.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._temp),this.reset()},e.prototype.update=function(e,t){if(void 0===t&&(t=e.length),this._finished)throw Error("SHA256: can't update because hash was finished.");var r=0;if(this._bytesHashed+=t,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&t>0;)this._buffer[this._bufferLength++]=e[r++],t--;this._bufferLength===this.blockSize&&(s(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(t>=this.blockSize&&(r=s(this._temp,this._state,e,r,t),t%=this.blockSize);t>0;)this._buffer[this._bufferLength++]=e[r++],t--;return this},e.prototype.finish=function(e){if(!this._finished){var t=this._bytesHashed,r=this._bufferLength,n=t%64<56?64:128;this._buffer[r]=128;for(var o=r+1;o<n-8;o++)this._buffer[o]=0;i.writeUint32BE(t/536870912|0,this._buffer,n-8),i.writeUint32BE(t<<3,this._buffer,n-4),s(this._temp,this._state,this._buffer,0,n),this._finished=!0}for(var o=0;o<this.digestLength/4;o++)i.writeUint32BE(this._state[o],e,4*o);return this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(this._finished)throw Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},e.prototype.restoreState=function(e){return this._state.set(e.state),this._bufferLength=e.bufferLength,e.buffer&&this._buffer.set(e.buffer),this._bytesHashed=e.bytesHashed,this._finished=!1,this},e.prototype.cleanSavedState=function(e){n.wipe(e.state),e.buffer&&n.wipe(e.buffer),e.bufferLength=0,e.bytesHashed=0},e}();t.mE=o;var a=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function s(e,t,r,n,o){for(;o>=64;){for(var s=t[0],l=t[1],c=t[2],u=t[3],d=t[4],h=t[5],f=t[6],p=t[7],g=0;g<16;g++){var m=n+4*g;e[g]=i.readUint32BE(r,m)}for(var g=16;g<64;g++){var w=e[g-2],b=(w>>>17|w<<15)^(w>>>19|w<<13)^w>>>10,y=((w=e[g-15])>>>7|w<<25)^(w>>>18|w<<14)^w>>>3;e[g]=(b+e[g-7]|0)+(y+e[g-16]|0)}for(var g=0;g<64;g++){var b=(((d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+(d&h^~d&f)|0)+(p+(a[g]+e[g]|0)|0)|0,y=((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+(s&l^s&c^l&c)|0;p=f,f=h,h=d,d=u+b|0,u=c,c=l,l=s,s=b+y|0}t[0]+=s,t[1]+=l,t[2]+=c,t[3]+=u,t[4]+=d,t[5]+=h,t[6]+=f,t[7]+=p,n+=64,o-=64}return n}t.vp=function(e){var t=new o;t.update(e);var r=t.digest();return t.clean(),r}},17309:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wipe=function(e){for(var t=0;t<e.length;t++)e[t]=0;return e}},57664:function(e,t,r){"use strict";t.gi=t.Au=t.KS=t.kz=void 0;let i=r(31416),n=r(17309);function o(e){let t=new Float64Array(16);if(e)for(let r=0;r<e.length;r++)t[r]=e[r];return t}t.kz=32,t.KS=32;let a=new Uint8Array(32);a[0]=9;let s=o([56129,1]);function l(e){let t=1;for(let r=0;r<16;r++){let i=e[r]+t+65535;t=Math.floor(i/65536),e[r]=i-65536*t}e[0]+=t-1+37*(t-1)}function c(e,t,r){let i=~(r-1);for(let r=0;r<16;r++){let n=i&(e[r]^t[r]);e[r]^=n,t[r]^=n}}function u(e,t,r){for(let i=0;i<16;i++)e[i]=t[i]+r[i]}function d(e,t,r){for(let i=0;i<16;i++)e[i]=t[i]-r[i]}function h(e,t,r){let i,n,o=0,a=0,s=0,l=0,c=0,u=0,d=0,h=0,f=0,p=0,g=0,m=0,w=0,b=0,y=0,v=0,x=0,C=0,E=0,_=0,S=0,k=0,A=0,O=0,$=0,I=0,D=0,P=0,T=0,R=0,N=0,M=r[0],j=r[1],U=r[2],B=r[3],L=r[4],F=r[5],z=r[6],W=r[7],H=r[8],Z=r[9],q=r[10],G=r[11],V=r[12],K=r[13],Y=r[14],Q=r[15];o+=(i=t[0])*M,a+=i*j,s+=i*U,l+=i*B,c+=i*L,u+=i*F,d+=i*z,h+=i*W,f+=i*H,p+=i*Z,g+=i*q,m+=i*G,w+=i*V,b+=i*K,y+=i*Y,v+=i*Q,a+=(i=t[1])*M,s+=i*j,l+=i*U,c+=i*B,u+=i*L,d+=i*F,h+=i*z,f+=i*W,p+=i*H,g+=i*Z,m+=i*q,w+=i*G,b+=i*V,y+=i*K,v+=i*Y,x+=i*Q,s+=(i=t[2])*M,l+=i*j,c+=i*U,u+=i*B,d+=i*L,h+=i*F,f+=i*z,p+=i*W,g+=i*H,m+=i*Z,w+=i*q,b+=i*G,y+=i*V,v+=i*K,x+=i*Y,C+=i*Q,l+=(i=t[3])*M,c+=i*j,u+=i*U,d+=i*B,h+=i*L,f+=i*F,p+=i*z,g+=i*W,m+=i*H,w+=i*Z,b+=i*q,y+=i*G,v+=i*V,x+=i*K,C+=i*Y,E+=i*Q,c+=(i=t[4])*M,u+=i*j,d+=i*U,h+=i*B,f+=i*L,p+=i*F,g+=i*z,m+=i*W,w+=i*H,b+=i*Z,y+=i*q,v+=i*G,x+=i*V,C+=i*K,E+=i*Y,_+=i*Q,u+=(i=t[5])*M,d+=i*j,h+=i*U,f+=i*B,p+=i*L,g+=i*F,m+=i*z,w+=i*W,b+=i*H,y+=i*Z,v+=i*q,x+=i*G,C+=i*V,E+=i*K,_+=i*Y,S+=i*Q,d+=(i=t[6])*M,h+=i*j,f+=i*U,p+=i*B,g+=i*L,m+=i*F,w+=i*z,b+=i*W,y+=i*H,v+=i*Z,x+=i*q,C+=i*G,E+=i*V,_+=i*K,S+=i*Y,k+=i*Q,h+=(i=t[7])*M,f+=i*j,p+=i*U,g+=i*B,m+=i*L,w+=i*F,b+=i*z,y+=i*W,v+=i*H,x+=i*Z,C+=i*q,E+=i*G,_+=i*V,S+=i*K,k+=i*Y,A+=i*Q,f+=(i=t[8])*M,p+=i*j,g+=i*U,m+=i*B,w+=i*L,b+=i*F,y+=i*z,v+=i*W,x+=i*H,C+=i*Z,E+=i*q,_+=i*G,S+=i*V,k+=i*K,A+=i*Y,O+=i*Q,p+=(i=t[9])*M,g+=i*j,m+=i*U,w+=i*B,b+=i*L,y+=i*F,v+=i*z,x+=i*W,C+=i*H,E+=i*Z,_+=i*q,S+=i*G,k+=i*V,A+=i*K,O+=i*Y,$+=i*Q,g+=(i=t[10])*M,m+=i*j,w+=i*U,b+=i*B,y+=i*L,v+=i*F,x+=i*z,C+=i*W,E+=i*H,_+=i*Z,S+=i*q,k+=i*G,A+=i*V,O+=i*K,$+=i*Y,I+=i*Q,m+=(i=t[11])*M,w+=i*j,b+=i*U,y+=i*B,v+=i*L,x+=i*F,C+=i*z,E+=i*W,_+=i*H,S+=i*Z,k+=i*q,A+=i*G,O+=i*V,$+=i*K,I+=i*Y,D+=i*Q,w+=(i=t[12])*M,b+=i*j,y+=i*U,v+=i*B,x+=i*L,C+=i*F,E+=i*z,_+=i*W,S+=i*H,k+=i*Z,A+=i*q,O+=i*G,$+=i*V,I+=i*K,D+=i*Y,P+=i*Q,b+=(i=t[13])*M,y+=i*j,v+=i*U,x+=i*B,C+=i*L,E+=i*F,_+=i*z,S+=i*W,k+=i*H,A+=i*Z,O+=i*q,$+=i*G,I+=i*V,D+=i*K,P+=i*Y,T+=i*Q,y+=(i=t[14])*M,v+=i*j,x+=i*U,C+=i*B,E+=i*L,_+=i*F,S+=i*z,k+=i*W,A+=i*H,O+=i*Z,$+=i*q,I+=i*G,D+=i*V,P+=i*K,T+=i*Y,R+=i*Q,v+=(i=t[15])*M,x+=i*j,C+=i*U,E+=i*B,_+=i*L,S+=i*F,k+=i*z,A+=i*W,O+=i*H,$+=i*Z,I+=i*q,D+=i*G,P+=i*V,T+=i*K,R+=i*Y,N+=i*Q,o+=38*x,a+=38*C,s+=38*E,l+=38*_,c+=38*S,u+=38*k,d+=38*A,h+=38*O,f+=38*$,p+=38*I,g+=38*D,m+=38*P,w+=38*T,b+=38*R,y+=38*N,n=Math.floor((i=o+(n=1)+65535)/65536),o=i-65536*n,n=Math.floor((i=a+n+65535)/65536),a=i-65536*n,n=Math.floor((i=s+n+65535)/65536),s=i-65536*n,n=Math.floor((i=l+n+65535)/65536),l=i-65536*n,n=Math.floor((i=c+n+65535)/65536),c=i-65536*n,n=Math.floor((i=u+n+65535)/65536),u=i-65536*n,n=Math.floor((i=d+n+65535)/65536),d=i-65536*n,n=Math.floor((i=h+n+65535)/65536),h=i-65536*n,n=Math.floor((i=f+n+65535)/65536),f=i-65536*n,n=Math.floor((i=p+n+65535)/65536),p=i-65536*n,n=Math.floor((i=g+n+65535)/65536),g=i-65536*n,n=Math.floor((i=m+n+65535)/65536),m=i-65536*n,n=Math.floor((i=w+n+65535)/65536),w=i-65536*n,n=Math.floor((i=b+n+65535)/65536),b=i-65536*n,n=Math.floor((i=y+n+65535)/65536),y=i-65536*n,n=Math.floor((i=v+n+65535)/65536),v=i-65536*n,o+=n-1+37*(n-1),n=Math.floor((i=o+(n=1)+65535)/65536),o=i-65536*n,n=Math.floor((i=a+n+65535)/65536),a=i-65536*n,n=Math.floor((i=s+n+65535)/65536),s=i-65536*n,n=Math.floor((i=l+n+65535)/65536),l=i-65536*n,n=Math.floor((i=c+n+65535)/65536),c=i-65536*n,n=Math.floor((i=u+n+65535)/65536),u=i-65536*n,n=Math.floor((i=d+n+65535)/65536),d=i-65536*n,n=Math.floor((i=h+n+65535)/65536),h=i-65536*n,n=Math.floor((i=f+n+65535)/65536),f=i-65536*n,n=Math.floor((i=p+n+65535)/65536),p=i-65536*n,n=Math.floor((i=g+n+65535)/65536),g=i-65536*n,n=Math.floor((i=m+n+65535)/65536),m=i-65536*n,n=Math.floor((i=w+n+65535)/65536),w=i-65536*n,n=Math.floor((i=b+n+65535)/65536),b=i-65536*n,n=Math.floor((i=y+n+65535)/65536),y=i-65536*n,n=Math.floor((i=v+n+65535)/65536),v=i-65536*n,o+=n-1+37*(n-1),e[0]=o,e[1]=a,e[2]=s,e[3]=l,e[4]=c,e[5]=u,e[6]=d,e[7]=h,e[8]=f,e[9]=p,e[10]=g,e[11]=m,e[12]=w,e[13]=b,e[14]=y,e[15]=v}function f(e,t){let r=new Uint8Array(32),i=new Float64Array(80),n=o(),a=o(),f=o(),p=o(),g=o(),m=o();for(let t=0;t<31;t++)r[t]=e[t];r[31]=127&e[31]|64,r[0]&=248,function(e,t){for(let r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}(i,t);for(let e=0;e<16;e++)a[e]=i[e];n[0]=p[0]=1;for(let e=254;e>=0;--e){let t=r[e>>>3]>>>(7&e)&1;c(n,a,t),c(f,p,t),u(g,n,f),d(n,n,f),u(f,a,p),d(a,a,p),h(p,g,g),h(m,n,n),h(n,f,n),h(f,a,g),u(g,n,f),d(n,n,f),h(a,n,n),d(f,p,m),h(n,f,s),u(n,n,p),h(f,f,n),h(n,p,m),h(p,a,i),h(a,g,g),c(n,a,t),c(f,p,t)}for(let e=0;e<16;e++)i[e+16]=n[e],i[e+32]=f[e],i[e+48]=a[e],i[e+64]=p[e];let w=i.subarray(32),b=i.subarray(16);!function(e,t){let r=o();for(let e=0;e<16;e++)r[e]=t[e];for(let e=253;e>=0;e--)h(r,r,r),2!==e&&4!==e&&h(r,r,t);for(let t=0;t<16;t++)e[t]=r[t]}(w,w),h(b,b,w);let y=new Uint8Array(32);return!function(e,t){let r=o(),i=o();for(let e=0;e<16;e++)i[e]=t[e];l(i),l(i),l(i);for(let e=0;e<2;e++){r[0]=i[0]-65517;for(let e=1;e<15;e++)r[e]=i[e]-65535-(r[e-1]>>16&1),r[e-1]&=65535;r[15]=i[15]-32767-(r[14]>>16&1);let e=r[15]>>16&1;r[14]&=65535,c(i,r,1-e)}for(let t=0;t<16;t++)e[2*t]=255&i[t],e[2*t+1]=i[t]>>8}(y,b),y}t.Au=function(e){let r=(0,i.randomBytes)(32,e),o=function(e){if(e.length!==t.KS)throw Error(`x25519: seed must be ${t.KS} bytes`);let r=new Uint8Array(e);return{publicKey:f(r,a),secretKey:r}}(r);return(0,n.wipe)(r),o},t.gi=function(e,r,i=!1){if(e.length!==t.kz)throw Error("X25519: incorrect secret key length");if(r.length!==t.kz)throw Error("X25519: incorrect public key length");let n=f(e,r);if(i){let e=0;for(let t=0;t<n.length;t++)e|=n[t];if(0===e)throw Error("X25519: invalid shared key")}return n}},36900:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(30004);i.__exportStar(r(46869),t),i.__exportStar(r(88033),t)},46869:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_THOUSAND=t.ONE_HUNDRED=void 0,t.ONE_HUNDRED=100,t.ONE_THOUSAND=1e3},88033:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=5*t.ONE_MINUTE,t.TEN_MINUTES=10*t.ONE_MINUTE,t.THIRTY_MINUTES=30*t.ONE_MINUTE,t.SIXTY_MINUTES=60*t.ONE_MINUTE,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=3*t.ONE_HOUR,t.SIX_HOURS=6*t.ONE_HOUR,t.TWELVE_HOURS=12*t.ONE_HOUR,t.TWENTY_FOUR_HOURS=24*t.ONE_HOUR,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=3*t.ONE_DAY,t.FIVE_DAYS=5*t.ONE_DAY,t.SEVEN_DAYS=7*t.ONE_DAY,t.THIRTY_DAYS=30*t.ONE_DAY,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=2*t.ONE_WEEK,t.THREE_WEEKS=3*t.ONE_WEEK,t.FOUR_WEEKS=4*t.ONE_WEEK,t.ONE_YEAR=365*t.ONE_DAY},66736:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(30004);i.__exportStar(r(44273),t),i.__exportStar(r(47001),t),i.__exportStar(r(52939),t),i.__exportStar(r(36900),t)},52939:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(30004).__exportStar(r(88766),t)},88766:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IWatch=void 0;class r{}t.IWatch=r},83207:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fromMiliseconds=t.toMiliseconds=void 0;let i=r(36900);t.toMiliseconds=function(e){return e*i.ONE_THOUSAND},t.fromMiliseconds=function(e){return Math.floor(e/i.ONE_THOUSAND)}},83873:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise(t=>{setTimeout(()=>{t(!0)},e)})}},44273:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(30004);i.__exportStar(r(83873),t),i.__exportStar(r(83207),t)},47001:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Watch=void 0;class r{constructor(){this.timestamps=new Map}start(e){if(this.timestamps.has(e))throw Error(`Watch already started for label: ${e}`);this.timestamps.set(e,{started:Date.now()})}stop(e){let t=this.get(e);if(void 0!==t.elapsed)throw Error(`Watch already stopped for label: ${e}`);let r=Date.now()-t.started;this.timestamps.set(e,{started:t.started,elapsed:r})}get(e){let t=this.timestamps.get(e);if(void 0===t)throw Error(`No timestamp found for label: ${e}`);return t}elapsed(e){let t=this.get(e);return t.elapsed||Date.now()-t.started}}t.Watch=r,t.default=r},30004:function(e,t,r){"use strict";r.r(t),r.d(t,{__assign:function(){return o},__asyncDelegator:function(){return v},__asyncGenerator:function(){return y},__asyncValues:function(){return x},__await:function(){return b},__awaiter:function(){return u},__classPrivateFieldGet:function(){return S},__classPrivateFieldSet:function(){return k},__createBinding:function(){return h},__decorate:function(){return s},__exportStar:function(){return f},__extends:function(){return n},__generator:function(){return d},__importDefault:function(){return _},__importStar:function(){return E},__makeTemplateObject:function(){return C},__metadata:function(){return c},__param:function(){return l},__read:function(){return g},__rest:function(){return a},__spread:function(){return m},__spreadArrays:function(){return w},__values:function(){return p}});var i=function(e,t){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function n(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r}function s(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}function l(e,t){return function(r,i){t(r,i,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,r,i){return new(r||(r=Promise))(function(n,o){function a(e){try{l(i.next(e))}catch(e){o(e)}}function s(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,s)}l((i=i.apply(e,t||[])).next())})}function d(e,t){var r,i,n,o,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){a.label=o[1];break}if(6===o[0]&&a.label<n[1]){a.label=n[1],n=o;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(o);break}n[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function h(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}function f(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],i=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var i,n,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(e){n={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return a}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function w(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var i=Array(e),n=0,t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,n++)i[n]=o[a];return i}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function y(e,t,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var i,n=r.apply(e,t||[]),o=[];return i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i;function a(e){n[e]&&(i[e]=function(t){return new Promise(function(r,i){o.push([e,t,r,i])>1||s(e,t)})})}function s(e,t){try{var r;(r=n[e](t)).value instanceof b?Promise.resolve(r.value.v).then(l,c):u(o[0][2],r)}catch(e){u(o[0][3],e)}}function l(e){s("next",e)}function c(e){s("throw",e)}function u(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}}function v(e){var t,r;return t={},i("next"),i("throw",function(e){throw e}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(i,n){t[i]=e[i]?function(t){return(r=!r)?{value:b(e[i](t)),done:"return"===i}:n?n(t):t}:n}}function x(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=p(e),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(r){t[r]=e[r]&&function(t){return new Promise(function(i,n){!function(e,t,r,i){Promise.resolve(i).then(function(t){e({value:t,done:r})},t)}(i,n,(t=e[r](t)).done,t.value)})}}}function C(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _(e){return e&&e.__esModule?e:{default:e}}function S(e,t){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return t.get(e)}function k(e,t,r){if(!t.has(e))throw TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},88338:function(e,t,r){"use strict";r.d(t,{AW:function(){return $},O6:function(){return tw},rV:function(){return P},gn:function(){return ep},H1:function(){return el},hF:function(){return ec},WG:function(){return U},pe:function(){return L},m$:function(){return N},vB:function(){return F},HI:function(){return B},E0:function(){return em},Gq:function(){return eh},$0:function(){return en},Z4:function(){return ed},Bv:function(){return e$},Au:function(){return T},jd:function(){return R},gu:function(){return k},D:function(){return ei},X_:function(){return er},bW:function(){return ey},Z7:function(){return eq},cO:function(){return ex},_H:function(){return ev},fc:function(){return eL},D6:function(){return eG},Hh:function(){return eb},Ym:function(){return M},rj:function(){return j},jU:function(){return ee},gp:function(){return eF},rF:function(){return tu},Bw:function(){return eg},UG:function(){return X},Gg:function(){return tf},xW:function(){return e2},b$:function(){return J},Ih:function(){return eJ},h1:function(){return e3},Q8:function(){return H},o8:function(){return eY},qt:function(){return eV},Dd:function(){return e5},$t:function(){return ti},nf:function(){return ta},Q0:function(){return tt},in:function(){return e9},p8:function(){return ts},sI:function(){return tc},al:function(){return tl},L5:function(){return eK},EJ:function(){return tr},Z2:function(){return e7},PM:function(){return te},hH:function(){return tn},ON:function(){return th},n:function(){return e8},JT:function(){return to},M_:function(){return eQ},jv:function(){return e1},KC:function(){return ea},eG:function(){return ew},fK:function(){return eW},IP:function(){return es},DQ:function(){return S},iP:function(){return ef},M:function(){return ez},he:function(){return eO},uw:function(){return tg},Ll:function(){return z},EN:function(){return W}});var i=r(15501),n=r(512),o=r(31416),a=r(73294),s=r(57664),l=r(75384),c=r(83454),u=function(e,t,r){if(r||2==arguments.length)for(var i,n=0,o=t.length;n<o;n++)!i&&n in t||(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))},d=function(e,t,r){this.name=e,this.version=t,this.os=r,this.type="browser"},h=function(e){this.version=e,this.type="node",this.name="node",this.os=c.platform},f=function(e,t,r,i){this.name=e,this.version=t,this.os=r,this.bot=i,this.type="bot-device"},p=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},g=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},m=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,w=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],b=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]],y=r(66736),v=r(62873),x=r(65755),C=r(66151);let E={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe",batchFetchMessages:"waku_batchFetchMessages"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe",batchFetchMessages:"irn_batchFetchMessages"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe",batchFetchMessages:"iridium_batchFetchMessages"}};var _=r(83454);function S(e){let[t,r]=e.split(":");return{namespace:t,reference:r}}function k(e,t=[]){let r=[];return Object.keys(e).forEach(i=>{if(t.length&&!t.includes(i))return;let n=e[i];r.push(...n.accounts)}),r}function A(e,t){return e.includes(":")?[e]:t.chains||[]}let O="base10",$="base16",I="base64pad",D="utf8",P=1;function T(){let e=s.Au();return{privateKey:(0,l.BB)(e.secretKey,$),publicKey:(0,l.BB)(e.publicKey,$)}}function R(){let e=(0,o.randomBytes)(32);return(0,l.BB)(e,$)}function N(e,t){let r=s.gi((0,l.mL)(e,$),(0,l.mL)(t,$),!0),i=new n.t(a.mE,r).expand(32);return(0,l.BB)(i,$)}function M(e){let t=(0,a.vp)((0,l.mL)(e,$));return(0,l.BB)(t,$)}function j(e){let t=(0,a.vp)((0,l.mL)(e,D));return(0,l.BB)(t,$)}function U(e){return Number((0,l.BB)(e,O))}function B(e){var t;let r=(t="u">typeof e.type?e.type:0,(0,l.mL)(`${t}`,O));if(U(r)===P&&typeof e.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");let n="u">typeof e.senderPublicKey?(0,l.mL)(e.senderPublicKey,$):void 0,a="u">typeof e.iv?(0,l.mL)(e.iv,$):(0,o.randomBytes)(12);return function(e){if(U(e.type)===P){if(typeof e.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");return(0,l.BB)((0,l.zo)([e.type,e.senderPublicKey,e.iv,e.sealed]),I)}return(0,l.BB)((0,l.zo)([e.type,e.iv,e.sealed]),I)}({type:r,sealed:new i.OK((0,l.mL)(e.symKey,$)).seal(a,(0,l.mL)(e.message,D)),iv:a,senderPublicKey:n})}function L(e){let t=new i.OK((0,l.mL)(e.symKey,$)),{sealed:r,iv:n}=F(e.encoded),o=t.open(n,r);if(null===o)throw Error("Failed to decrypt");return(0,l.BB)(o,D)}function F(e){let t=(0,l.mL)(e,I),r=t.slice(0,1);if(U(r)===P){let e=t.slice(1,33),i=t.slice(33,45);return{type:r,sealed:t.slice(45),iv:i,senderPublicKey:e}}let i=t.slice(1,13);return{type:r,sealed:t.slice(13),iv:i}}function z(e,t){let r=F(e);return W({type:U(r.type),senderPublicKey:"u">typeof r.senderPublicKey?(0,l.BB)(r.senderPublicKey,$):void 0,receiverPublicKey:t?.receiverPublicKey})}function W(e){let t=e?.type||0;if(t===P){if(typeof e?.senderPublicKey>"u")throw Error("missing sender public key");if(typeof e?.receiverPublicKey>"u")throw Error("missing receiver public key")}return{type:t,senderPublicKey:e?.senderPublicKey,receiverPublicKey:e?.receiverPublicKey}}function H(e){return e.type===P&&"string"==typeof e.senderPublicKey&&"string"==typeof e.receiverPublicKey}var Z=Object.defineProperty,q=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,K=(e,t,r)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Y=(e,t)=>{for(var r in t||(t={}))G.call(t,r)&&K(e,r,t[r]);if(q)for(var r of q(t))V.call(t,r)&&K(e,r,t[r]);return e};let Q={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"};function X(){return"u">typeof _&&"u">typeof _.versions&&"u">typeof _.versions.node}function J(){return!(0,v.getDocument)()&&!!(0,v.getNavigator)()&&"ReactNative"===navigator.product}function ee(){return!X()&&!!(0,v.getNavigator)()&&!!(0,v.getDocument)()}function et(){return J()?Q.reactNative:X()?Q.node:ee()?Q.browser:Q.unknown}function er(){var e;try{return J()&&"u">typeof r.g&&"u">typeof(null==r.g?void 0:r.g.Application)?null==(e=r.g.Application)?void 0:e.applicationId:void 0}catch{return}}function ei(){return(0,x.D)()||{name:"",description:"",url:"",icons:[""]}}function en({protocol:e,version:t,relayUrl:i,sdkVersion:n,auth:o,projectId:a,useOnCloseEvent:s,bundleId:l}){var y,x;let E;let _=i.split("?"),S=function(e,t,i){let n=function(){if(et()===Q.reactNative&&"u">typeof r.g&&"u">typeof(null==r.g?void 0:r.g.Platform)){let{OS:e,Version:t}=r.g.Platform;return[e,t].join("-")}let e="undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new g:"undefined"!=typeof navigator?function(e){var t=""!==e&&w.reduce(function(t,r){var i=r[0],n=r[1];if(t)return t;var o=n.exec(e);return!!o&&[i,o]},!1);if(!t)return null;var r=t[0],i=t[1];if("searchbot"===r)return new p;var n=i[1]&&i[1].split(".").join("_").split("_").slice(0,3);n?n.length<3&&(n=u(u([],n,!0),function(e){for(var t=[],r=0;r<e;r++)t.push("0");return t}(3-n.length),!0)):n=[];var o=n.join("."),a=function(e){for(var t=0,r=b.length;t<r;t++){var i=b[t],n=i[0];if(i[1].exec(e))return n}return null}(e),s=m.exec(e);return s&&s[1]?new f(r,o,a,s[1]):new d(r,o,a)}(navigator.userAgent):void 0!==c&&c.version?new h(c.version.slice(1)):null;if(null===e)return"unknown";let t=e.os?e.os.replace(" ","").toLowerCase():"unknown";return"browser"===e.type?[t,e.name,e.version].join("-"):[t,e.version].join("-")}(),o=function(){var e;let t=et();return t===Q.browser?[t,(null==(e=(0,v.getLocation)())?void 0:e.host)||"unknown"].join(":"):t}();return[[e,t].join("-"),["js",i].join("-"),n,o].join("/")}(e,t,n),k=(y=_[1]||"",x={auth:o,ua:S,projectId:a,useOnCloseEvent:s||void 0,origin:l||void 0},E=Y(Y({},E=C.parse(y)),x),y=C.stringify(E));return _[0]+"?"+k}function eo(e,t){return e.filter(e=>t.includes(e)).length===e.length}function ea(e){return Object.fromEntries(e.entries())}function es(e){return new Map(Object.entries(e))}function el(e=y.FIVE_MINUTES,t){let r,i,n;let o=(0,y.toMiliseconds)(e||y.FIVE_MINUTES);return{resolve:e=>{n&&r&&(clearTimeout(n),r(e))},reject:e=>{n&&i&&(clearTimeout(n),i(e))},done:()=>new Promise((e,a)=>{n=setTimeout(()=>{a(Error(t))},o),r=e,i=a})}}function ec(e,t,r){return new Promise(async(i,n)=>{let o=setTimeout(()=>n(Error(r)),t);try{let t=await e;i(t)}catch(e){n(e)}clearTimeout(o)})}function eu(e,t){if("string"==typeof t&&t.startsWith(`${e}:`))return t;if("topic"===e.toLowerCase()){if("string"!=typeof t)throw Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}if("id"===e.toLowerCase()){if("number"!=typeof t)throw Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw Error(`Unknown expirer target type: ${e}`)}function ed(e){return eu("topic",e)}function eh(e){return eu("id",e)}function ef(e){let[t,r]=e.split(":"),i={id:void 0,topic:void 0};if("topic"===t&&"string"==typeof r)i.topic=r;else if("id"===t&&Number.isInteger(Number(r)))i.id=Number(r);else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);return i}function ep(e,t){return(0,y.fromMiliseconds)((t||Date.now())+(0,y.toMiliseconds)(e))}function eg(e){return Date.now()>=(0,y.toMiliseconds)(e)}function em(e,t){return`${e}${t?`:${t}`:""}`}function ew(e=[],t=[]){return[...new Set([...e,...t])]}async function eb({id:e,topic:t,wcDeepLink:i}){try{if(!i)return;let n="string"==typeof i?JSON.parse(i):i,o=n?.href;if("string"!=typeof o)return;o.endsWith("/")&&(o=o.slice(0,-1));let a=`${o}/wc?requestId=${e}&sessionTopic=${t}`,s=et();s===Q.browser?a.startsWith("https://")?window.open(a,"_blank","noreferrer noopener"):window.open(a,"_self","noreferrer noopener"):s===Q.reactNative&&"u">typeof(null==r.g?void 0:r.g.Linking)&&await r.g.Linking.openURL(a)}catch(e){console.error(e)}}async function ey(e,t){try{return await e.getItem(t)||(ee()?localStorage.getItem(t):void 0)}catch(e){console.error(e)}}function ev(e){return e?.relay||{protocol:"irn"}}function ex(e){let t=E[e];if(typeof t>"u")throw Error(`Relay Protocol not supported: ${e}`);return t}var eC=Object.defineProperty,eE=Object.getOwnPropertySymbols,e_=Object.prototype.hasOwnProperty,eS=Object.prototype.propertyIsEnumerable,ek=(e,t,r)=>t in e?eC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,eA=(e,t)=>{for(var r in t||(t={}))e_.call(t,r)&&ek(e,r,t[r]);if(eE)for(var r of eE(t))eS.call(t,r)&&ek(e,r,t[r]);return e};function eO(e){var t;let r=(e=(e=e.includes("wc://")?e.replace("wc://",""):e).includes("wc:")?e.replace("wc:",""):e).indexOf(":"),i=-1!==e.indexOf("?")?e.indexOf("?"):void 0,n=e.substring(0,r),o=e.substring(r+1,i).split("@"),a="u">typeof i?e.substring(i):"",s=C.parse(a);return{protocol:n,topic:(t=o[0]).startsWith("//")?t.substring(2):t,version:parseInt(o[1],10),symKey:s.symKey,relay:function(e,t="-"){let r={},i="relay"+t;return Object.keys(e).forEach(t=>{if(t.startsWith(i)){let n=t.replace(i,""),o=e[t];r[n]=o}}),r}(s)}}function e$(e){return`${e.protocol}:${e.topic}@${e.version}?`+C.stringify(eA({symKey:e.symKey},function(e,t="-"){let r={};return Object.keys(e).forEach(i=>{e[i]&&(r["relay"+t+i]=e[i])}),r}(e.relay)))}var eI=Object.defineProperty,eD=Object.defineProperties,eP=Object.getOwnPropertyDescriptors,eT=Object.getOwnPropertySymbols,eR=Object.prototype.hasOwnProperty,eN=Object.prototype.propertyIsEnumerable,eM=(e,t,r)=>t in e?eI(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ej=(e,t)=>{for(var r in t||(t={}))eR.call(t,r)&&eM(e,r,t[r]);if(eT)for(var r of eT(t))eN.call(t,r)&&eM(e,r,t[r]);return e},eU=(e,t)=>eD(e,eP(t));function eB(e){let t=[];return e.forEach(e=>{let[r,i]=e.split(":");t.push(`${r}:${i}`)}),t}function eL(e,t){let r=e9(e,t);if(r)throw Error(r.message);let i={};for(let[t,r]of Object.entries(e))i[t]={methods:r.methods,events:r.events,chains:r.accounts.map(e=>`${e.split(":")[0]}:${e.split(":")[1]}`)};return i}function eF(e){return e.includes(":")}function ez(e){return eF(e)?e.split(":")[0]:e}function eW(e){var t,r,i;let n={};if(!eK(e))return n;for(let[o,a]of Object.entries(e)){let e=eF(o)?[o]:a.chains,s=a.methods||[],l=a.events||[],c=ez(o);n[c]=eU(ej({},n[c]),{chains:ew(e,null==(t=n[c])?void 0:t.chains),methods:ew(s,null==(r=n[c])?void 0:r.methods),events:ew(l,null==(i=n[c])?void 0:i.events)})}return n}let eH={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},eZ={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function eq(e,t){let{message:r,code:i}=eZ[e];return{message:t?`${r} ${t}`:r,code:i}}function eG(e,t){let{message:r,code:i}=eH[e];return{message:t?`${r} ${t}`:r,code:i}}function eV(e,t){return!!Array.isArray(e)&&(!("u">typeof t)||!e.length||e.every(t))}function eK(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function eY(e){return typeof e>"u"}function eQ(e,t){return!!(t&&eY(e))||"string"==typeof e&&!!e.trim().length}function eX(e,t){return!!(t&&eY(e))||"number"==typeof e&&!isNaN(e)}function eJ(e,t){let{requiredNamespaces:r}=t,i=Object.keys(e.namespaces),n=Object.keys(r),o=!0;return!!eo(n,i)&&(i.forEach(t=>{let{accounts:i,methods:n,events:a}=e.namespaces[t],s=eB(i),l=r[t];eo(A(t,l),s)&&eo(l.methods,n)&&eo(l.events,a)||(o=!1)}),o)}function e0(e){return!!(eQ(e,!1)&&e.includes(":"))&&2===e.split(":").length}function e1(e){if(eQ(e,!1))try{return"u">typeof new URL(e)}catch{}return!1}function e2(e){var t;return null==(t=e?.proposer)?void 0:t.publicKey}function e3(e){return e?.topic}function e5(e,t){let r=null;return eQ(e?.publicKey,!1)||(r=eq("MISSING_OR_INVALID",`${t} controller public key should be a string`)),r}function e6(e){let t=!0;return eV(e)?e.length&&(t=e.every(e=>eQ(e,!1))):t=!1,t}function e4(e,t){let r=null;return Object.values(e).forEach(e=>{var i;let n;if(r)return;let o=(i=`${t}, namespace`,n=null,e6(e?.methods)?e6(e?.events)||(n=eG("UNSUPPORTED_EVENTS",`${i}, events should be an array of strings or empty array for no events`)):n=eG("UNSUPPORTED_METHODS",`${i}, methods should be an array of strings or empty array for no methods`),n);o&&(r=o)}),r}function e8(e,t,r){let i=null;if(e&&eK(e)){let n;let o=e4(e,t);o&&(i=o);let a=(n=null,Object.entries(e).forEach(([e,i])=>{var o,a;let s;if(n)return;let l=(o=A(e,i),a=`${t} ${r}`,s=null,eV(o)&&o.length?o.forEach(e=>{s||e0(e)||(s=eG("UNSUPPORTED_CHAINS",`${a}, chain ${e} should be a string and conform to "namespace:chainId" format`))}):e0(e)||(s=eG("UNSUPPORTED_CHAINS",`${a}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),s);l&&(n=l)}),n);a&&(i=a)}else i=eq("MISSING_OR_INVALID",`${t}, ${r} should be an object with data`);return i}function e9(e,t){let r=null;if(e&&eK(e)){let i;let n=e4(e,t);n&&(r=n);let o=(i=null,Object.values(e).forEach(e=>{var r,n;let o;if(i)return;let a=(r=e?.accounts,n=`${t} namespace`,o=null,eV(r)?r.forEach(e=>{o||function(e){if(eQ(e,!1)&&e.includes(":")){let t=e.split(":");if(3===t.length){let e=t[0]+":"+t[1];return!!t[2]&&e0(e)}}return!1}(e)||(o=eG("UNSUPPORTED_ACCOUNTS",`${n}, account ${e} should be a string and conform to "namespace:chainId:address" format`))}):o=eG("UNSUPPORTED_ACCOUNTS",`${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),o);a&&(i=a)}),i);o&&(r=o)}else r=eq("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return r}function e7(e){return eQ(e.protocol,!0)}function te(e,t){let r=!1;return t&&!e?r=!0:e&&eV(e)&&e.length&&e.forEach(e=>{r=e7(e)}),r}function tt(e){return"number"==typeof e}function tr(e){return"u">typeof e}function ti(e){return!(!e||"object"!=typeof e||!e.code||!eX(e.code,!1)||!e.message||!eQ(e.message,!1))}function tn(e){return!(eY(e)||!eQ(e.method,!1))}function to(e){return!(eY(e)||eY(e.result)&&eY(e.error)||!eX(e.id,!1)||!eQ(e.jsonrpc,!1))}function ta(e){return!(eY(e)||!eQ(e.name,!1))}function ts(e,t){return!(!e0(t)||!(function(e){let t=[];return Object.values(e).forEach(e=>{t.push(...eB(e.accounts))}),t})(e).includes(t))}function tl(e,t,r){return!!eQ(r,!1)&&(function(e,t){let r=[];return Object.values(e).forEach(e=>{eB(e.accounts).includes(t)&&r.push(...e.methods)}),r})(e,t).includes(r)}function tc(e,t,r){return!!eQ(r,!1)&&(function(e,t){let r=[];return Object.values(e).forEach(e=>{eB(e.accounts).includes(t)&&r.push(...e.events)}),r})(e,t).includes(r)}function tu(e,t,r){let i=null,n=function(e){let t={};return Object.keys(e).forEach(r=>{var i;r.includes(":")?t[r]=e[r]:null==(i=e[r].chains)||i.forEach(i=>{t[i]={methods:e[r].methods,events:e[r].events}})}),t}(e),o=function(e){let t={};return Object.keys(e).forEach(r=>{if(r.includes(":"))t[r]=e[r];else{let i=eB(e[r].accounts);i?.forEach(i=>{t[i]={accounts:e[r].accounts.filter(e=>e.includes(`${i}:`)),methods:e[r].methods,events:e[r].events}})}}),t}(t),a=Object.keys(n),s=Object.keys(o),l=td(Object.keys(e)),c=td(Object.keys(t)),u=l.filter(e=>!c.includes(e));return u.length&&(i=eq("NON_CONFORMING_NAMESPACES",`${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(t).toString()}`)),eo(a,s)||(i=eq("NON_CONFORMING_NAMESPACES",`${r} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${s.toString()}`)),Object.keys(t).forEach(e=>{if(!e.includes(":")||i)return;let n=eB(t[e].accounts);n.includes(e)||(i=eq("NON_CONFORMING_NAMESPACES",`${r} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${n.toString()}`))}),a.forEach(e=>{i||(eo(n[e].methods,o[e].methods)?eo(n[e].events,o[e].events)||(i=eq("NON_CONFORMING_NAMESPACES",`${r} namespaces events don't satisfy namespace events for ${e}`)):i=eq("NON_CONFORMING_NAMESPACES",`${r} namespaces methods don't satisfy namespace methods for ${e}`))}),i}function td(e){return[...new Set(e.map(e=>e.includes(":")?e.split(":")[0]:e))]}function th(e,t){return eX(e,!1)&&e<=t.max&&e>=t.min}function tf(){let e=et();return new Promise(t=>{switch(e){case Q.browser:t(ee()&&navigator?.onLine);break;case Q.reactNative:t(tp());break;case Q.node:default:t(!0)}})}async function tp(){if(J()&&"u">typeof r.g&&null!=r.g&&r.g.NetInfo){let e=await (null==r.g?void 0:r.g.NetInfo.fetch());return e?.isConnected}return!0}function tg(e){switch(et()){case Q.browser:!J()&&ee()&&(window.addEventListener("online",()=>e(!0)),window.addEventListener("offline",()=>e(!1)));break;case Q.reactNative:J()&&"u">typeof r.g&&null!=r.g&&r.g.NetInfo&&r.g?.NetInfo.addEventListener(t=>e(t?.isConnected));case Q.node:}}let tm={};class tw{static get(e){return tm[e]}static set(e,t){tm[e]=t}static delete(e){delete tm[e]}}},66151:function(e,t,r){"use strict";let i=r(70610),n=r(44020),o=r(80500),a=r(92806),s=e=>null==e,l=Symbol("encodeFragmentIdentifier");function c(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function u(e,t){return t.encode?t.strict?i(e):encodeURIComponent(e):e}function d(e,t){return t.decode?n(e):e}function h(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function f(e){let t=(e=h(e)).indexOf("?");return -1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function g(e,t){c((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);let r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,i)=>{if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t){i[e]=r;return}void 0===i[e]&&(i[e]={}),i[e][t[1]]=r};case"bracket":return(e,r,i)=>{if(t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),!t){i[e]=r;return}if(void 0===i[e]){i[e]=[r];return}i[e]=[].concat(i[e],r)};case"colon-list-separator":return(e,r,i)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){i[e]=r;return}if(void 0===i[e]){i[e]=[r];return}i[e]=[].concat(i[e],r)};case"comma":case"separator":return(t,r,i)=>{let n="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!n&&d(r,e).includes(e.arrayFormatSeparator);r=o?d(r,e):r;let a=n||o?r.split(e.arrayFormatSeparator).map(t=>d(t,e)):null===r?r:d(r,e);i[t]=a};case"bracket-separator":return(t,r,i)=>{let n=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!n){i[t]=r?d(r,e):r;return}let o=null===r?[]:r.split(e.arrayFormatSeparator).map(t=>d(t,e));if(void 0===i[t]){i[t]=o;return}i[t]=[].concat(i[t],o)};default:return(e,t,r)=>{if(void 0===r[e]){r[e]=t;return}r[e]=[].concat(r[e],t)}}}(t),i=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return i;for(let n of e.split("&")){if(""===n)continue;let[e,a]=o(t.decode?n.replace(/\+/g," "):n,"=");a=void 0===a?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:d(a,t),r(d(e,t),a,i)}for(let e of Object.keys(i)){let r=i[e];if("object"==typeof r&&null!==r)for(let e of Object.keys(r))r[e]=p(r[e],t);else i[e]=p(r,t)}return!1===t.sort?i:(!0===t.sort?Object.keys(i).sort():Object.keys(i).sort(t.sort)).reduce((e,t)=>{let r=i[t];return r&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=f,t.parse=g,t.stringify=(e,t)=>{if(!e)return"";c((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);let r=r=>t.skipNull&&s(e[r])||t.skipEmptyString&&""===e[r],i=function(e){switch(e.arrayFormat){case"index":return t=>(r,i)=>{let n=r.length;return void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,[u(t,e),"[",n,"]"].join("")]:[...r,[u(t,e),"[",u(n,e),"]=",u(i,e)].join("")]};case"bracket":return t=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,[u(t,e),"[]"].join("")]:[...r,[u(t,e),"[]=",u(i,e)].join("")];case"colon-list-separator":return t=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,[u(t,e),":list="].join("")]:[...r,[u(t,e),":list=",u(i,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(i,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?i:(n=null===n?"":n,0===i.length)?[[u(r,e),t,u(n,e)].join("")]:[[i,u(n,e)].join(e.arrayFormatSeparator)]}default:return t=>(r,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?r:null===i?[...r,u(t,e)]:[...r,[u(t,e),"=",u(i,e)].join("")]}}(t),n={};for(let t of Object.keys(e))r(t)||(n[t]=e[t]);let o=Object.keys(n);return!1!==t.sort&&o.sort(t.sort),o.map(r=>{let n=e[r];return void 0===n?"":null===n?u(r,t):Array.isArray(n)?0===n.length&&"bracket-separator"===t.arrayFormat?u(r,t)+"[]":n.reduce(i(r),[]).join("&"):u(r,t)+"="+u(n,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);let[r,i]=o(e,"#");return Object.assign({url:r.split("?")[0]||"",query:g(f(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:d(i,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[l]:!0},r);let i=h(e.url).split("?")[0]||"",n=t.extract(e.url),o=Object.assign(t.parse(n,{sort:!1}),e.query),a=t.stringify(o,r);a&&(a=`?${a}`);let s=function(e){let t="",r=e.indexOf("#");return -1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(s=`#${r[l]?u(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${i}${a}${s}`},t.pick=(e,r,i)=>{i=Object.assign({parseFragmentIdentifier:!0,[l]:!1},i);let{url:n,query:o,fragmentIdentifier:s}=t.parseUrl(e,i);return t.stringifyUrl({url:n,query:a(o,r),fragmentIdentifier:s},i)},t.exclude=(e,r,i)=>{let n=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,n,i)}},62873:function(e,t){"use strict";function r(e){let t;return"undefined"!=typeof window&&void 0!==window[e]&&(t=window[e]),t}function i(e){let t=r(e);if(!t)throw Error(`${e} is not defined in Window`);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getLocalStorage=t.getLocalStorageOrThrow=t.getCrypto=t.getCryptoOrThrow=t.getLocation=t.getLocationOrThrow=t.getNavigator=t.getNavigatorOrThrow=t.getDocument=t.getDocumentOrThrow=t.getFromWindowOrThrow=t.getFromWindow=void 0,t.getFromWindow=r,t.getFromWindowOrThrow=i,t.getDocumentOrThrow=function(){return i("document")},t.getDocument=function(){return r("document")},t.getNavigatorOrThrow=function(){return i("navigator")},t.getNavigator=function(){return r("navigator")},t.getLocationOrThrow=function(){return i("location")},t.getLocation=function(){return r("location")},t.getCryptoOrThrow=function(){return i("crypto")},t.getCrypto=function(){return r("crypto")},t.getLocalStorageOrThrow=function(){return i("localStorage")},t.getLocalStorage=function(){return r("localStorage")}},65755:function(e,t,r){"use strict";t.D=void 0;let i=r(62873);t.D=function(){let e,t,r;try{e=i.getDocumentOrThrow(),t=i.getLocationOrThrow()}catch(e){return null}function n(...t){let r=e.getElementsByTagName("meta");for(let e=0;e<r.length;e++){let i=r[e],n=["itemprop","property","name"].map(e=>i.getAttribute(e)).filter(e=>!!e&&t.includes(e));if(n.length&&n){let e=i.getAttribute("content");if(e)return e}}return""}let o=((r=n("name","og:site_name","og:title","twitter:title"))||(r=e.title),r),a=n("description","og:description","twitter:description","keywords");return{description:a,url:t.origin,icons:function(){let r=e.getElementsByTagName("link"),i=[];for(let e=0;e<r.length;e++){let n=r[e],o=n.getAttribute("rel");if(o&&o.toLowerCase().indexOf("icon")>-1){let e=n.getAttribute("href");if(e){if(-1===e.toLowerCase().indexOf("https:")&&-1===e.toLowerCase().indexOf("http:")&&0!==e.indexOf("//")){let r=t.protocol+"//"+t.host;if(0===e.indexOf("/"))r+=e;else{let i=t.pathname.split("/");i.pop(),r+=i.join("/")+"/"+e}i.push(r)}else if(0===e.indexOf("//")){let r=t.protocol+e;i.push(r)}else i.push(e)}}}return i}(),name:o}}},54249:function(e,t,r){let i=r(15293),n=r(6999),o=r(51250),a=r(18390);function s(e,t,r,o,a){let s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!i())throw Error("Callback required as last argument");if(c){if(l<2)throw Error("Too few arguments provided");2===l?(a=r,r=t,t=o=void 0):3===l&&(t.getContext&&void 0===a?(a=o,o=void 0):(a=o,o=r,r=t,t=void 0))}else{if(l<1)throw Error("Too few arguments provided");return 1===l?(r=t,t=o=void 0):2!==l||t.getContext||(o=r,r=t,t=void 0),new Promise(function(i,a){try{let a=n.create(r,o);i(e(a,t,o))}catch(e){a(e)}})}try{let i=n.create(r,o);a(null,e(i,t,o))}catch(e){a(e)}}t.create=n.create,t.toCanvas=s.bind(null,o.render),t.toDataURL=s.bind(null,o.renderToDataURL),t.toString=s.bind(null,function(e,t,r){return a.render(e,r)})},15293:function(e){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},81201:function(e,t,r){let i=r(67052).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,r=i(e),n=145===r?26:2*Math.ceil((r-13)/(2*t-2)),o=[r-7];for(let e=1;e<t-1;e++)o[e]=o[e-1]-n;return o.push(6),o.reverse()},t.getPositions=function(e){let r=[],i=t.getRowColCoords(e),n=i.length;for(let e=0;e<n;e++)for(let t=0;t<n;t++)(0!==e||0!==t)&&(0!==e||t!==n-1)&&(e!==n-1||0!==t)&&r.push([i[e],i[t]]);return r}},24691:function(e,t,r){let i=r(81730),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=i.ALPHANUMERIC,this.data=e}o.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*n.indexOf(this.data[t]);r+=n.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(n.indexOf(this.data[t]),6)},e.exports=o},87611:function(e){function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},26424:function(e){function t(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,i){let n=e*this.size+t;this.data[n]=r,i&&(this.reservedBit[n]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},22470:function(e,t,r){let i=r(62378),n=r(81730);function o(e){this.mode=n.BYTE,"string"==typeof e&&(e=i(e)),this.data=new Uint8Array(e)}o.getBitsLength=function(e){return 8*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=o},20719:function(e,t,r){let i=r(18906),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case i.L:return n[(e-1)*4+0];case i.M:return n[(e-1)*4+1];case i.Q:return n[(e-1)*4+2];case i.H:return n[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case i.L:return o[(e-1)*4+0];case i.M:return o[(e-1)*4+1];case i.Q:return o[(e-1)*4+2];case i.H:return o[(e-1)*4+3];default:return}}},18906:function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return r}}},42381:function(e,t,r){let i=r(67052).getSymbolSize;t.getPositions=function(e){let t=i(e);return[[0,0],[t-7,0],[0,t-7]]}},78208:function(e,t,r){let i=r(67052),n=i.getBCHDigit(1335);t.getEncodedBits=function(e,t){let r=e.bit<<3|t,o=r<<10;for(;i.getBCHDigit(o)-n>=0;)o^=1335<<i.getBCHDigit(o)-n;return(r<<10|o)^21522}},49198:function(e,t){let r=new Uint8Array(512),i=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)r[t]=e,i[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)r[e]=r[e-255]}(),t.log=function(e){if(e<1)throw Error("log("+e+")");return i[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[i[e]+i[t]]}},80771:function(e,t,r){let i=r(81730),n=r(67052);function o(e){this.mode=i.KANJI,this.data=e}o.getBitsLength=function(e){return 13*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=n.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),e.put(r,13)}},e.exports=o},59746:function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let r={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,i=0,n=0,o=0,a=null,s=null;for(let l=0;l<t;l++){n=o=0,a=s=null;for(let c=0;c<t;c++){let t=e.get(l,c);t===a?n++:(n>=5&&(i+=r.N1+(n-5)),a=t,n=1),(t=e.get(c,l))===s?o++:(o>=5&&(i+=r.N1+(o-5)),s=t,o=1)}n>=5&&(i+=r.N1+(n-5)),o>=5&&(i+=r.N1+(o-5))}return i},t.getPenaltyN2=function(e){let t=e.size,i=0;for(let r=0;r<t-1;r++)for(let n=0;n<t-1;n++){let t=e.get(r,n)+e.get(r,n+1)+e.get(r+1,n)+e.get(r+1,n+1);(4===t||0===t)&&i++}return i*r.N2},t.getPenaltyN3=function(e){let t=e.size,i=0,n=0,o=0;for(let r=0;r<t;r++){n=o=0;for(let a=0;a<t;a++)n=n<<1&2047|e.get(r,a),a>=10&&(1488===n||93===n)&&i++,o=o<<1&2047|e.get(a,r),a>=10&&(1488===o||93===o)&&i++}return i*r.N3},t.getPenaltyN4=function(e){let t=0,i=e.data.length;for(let r=0;r<i;r++)t+=e.data[r];return Math.abs(Math.ceil(100*t/i/5)-10)*r.N4},t.applyMask=function(e,r){let i=r.size;for(let n=0;n<i;n++)for(let o=0;o<i;o++)r.isReserved(o,n)||r.xor(o,n,function(e,r,i){switch(e){case t.Patterns.PATTERN000:return(r+i)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return i%3==0;case t.Patterns.PATTERN011:return(r+i)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(i/3))%2==0;case t.Patterns.PATTERN101:return r*i%2+r*i%3==0;case t.Patterns.PATTERN110:return(r*i%2+r*i%3)%2==0;case t.Patterns.PATTERN111:return(r*i%3+(r+i)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,o,n))},t.getBestMask=function(e,r){let i=Object.keys(t.Patterns).length,n=0,o=1/0;for(let a=0;a<i;a++){r(a),t.applyMask(a,e);let i=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),i<o&&(o=i,n=a)}return n}},81730:function(e,t,r){let i=r(88122),n=r(91445);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!i.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return r}}},61308:function(e,t,r){let i=r(81730);function n(e){this.mode=i.NUMERIC,this.data=e.toString()}n.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t,r;for(t=0;t+3<=this.data.length;t+=3)r=parseInt(this.data.substr(t,3),10),e.put(r,10);let i=this.data.length-t;i>0&&(r=parseInt(this.data.substr(t),10),e.put(r,3*i+1))},e.exports=n},39261:function(e,t,r){let i=r(49198);t.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let n=0;n<e.length;n++)for(let o=0;o<t.length;o++)r[n+o]^=i.mul(e[n],t[o]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let e=r[0];for(let n=0;n<t.length;n++)r[n]^=i.mul(t[n],e);let n=0;for(;n<r.length&&0===r[n];)n++;r=r.slice(n)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let n=0;n<e;n++)r=t.mul(r,new Uint8Array([1,i.exp(n)]));return r}},6999:function(e,t,r){let i=r(67052),n=r(18906),o=r(87611),a=r(26424),s=r(81201),l=r(42381),c=r(59746),u=r(20719),d=r(58986),h=r(32850),f=r(78208),p=r(81730),g=r(39409);function m(e,t,r){let i,n;let o=e.size,a=f.getEncodedBits(t,r);for(i=0;i<15;i++)n=(a>>i&1)==1,i<6?e.set(i,8,n,!0):i<8?e.set(i+1,8,n,!0):e.set(o-15+i,8,n,!0),i<8?e.set(8,o-i-1,n,!0):i<9?e.set(8,15-i-1+1,n,!0):e.set(8,15-i-1,n,!0);e.set(o-8,8,1,!0)}t.create=function(e,t){let r,f;if(void 0===e||""===e)throw Error("No input text");let w=n.M;return void 0!==t&&(w=n.from(t.errorCorrectionLevel,n.M),r=h.from(t.version),f=c.from(t.maskPattern),t.toSJISFunc&&i.setToSJISFunction(t.toSJISFunc)),function(e,t,r,n){let f;if(Array.isArray(e))f=g.fromArray(e);else if("string"==typeof e){let i=t;if(!i){let t=g.rawSplit(e);i=h.getBestVersionForData(t,r)}f=g.fromString(e,i||40)}else throw Error("Invalid data");let w=h.getBestVersionForData(f,r);if(!w)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<w)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+w+".\n")}else t=w;let b=function(e,t,r){let n=new o;r.forEach(function(t){n.put(t.mode.bit,4),n.put(t.getLength(),p.getCharCountIndicator(t.mode,e)),t.write(n)});let a=(i.getSymbolTotalCodewords(e)-u.getTotalCodewordsCount(e,t))*8;for(n.getLengthInBits()+4<=a&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);let s=(a-n.getLengthInBits())/8;for(let e=0;e<s;e++)n.put(e%2?17:236,8);return function(e,t,r){let n,o;let a=i.getSymbolTotalCodewords(t),s=a-u.getTotalCodewordsCount(t,r),l=u.getBlocksCount(t,r),c=a%l,h=l-c,f=Math.floor(a/l),p=Math.floor(s/l),g=p+1,m=f-p,w=new d(m),b=0,y=Array(l),v=Array(l),x=0,C=new Uint8Array(e.buffer);for(let e=0;e<l;e++){let t=e<h?p:g;y[e]=C.slice(b,b+t),v[e]=w.encode(y[e]),b+=t,x=Math.max(x,t)}let E=new Uint8Array(a),_=0;for(n=0;n<x;n++)for(o=0;o<l;o++)n<y[o].length&&(E[_++]=y[o][n]);for(n=0;n<m;n++)for(o=0;o<l;o++)E[_++]=v[o][n];return E}(n,e,t)}(t,r,f),y=new a(i.getSymbolSize(t));return function(e,t){let r=e.size,i=l.getPositions(t);for(let t=0;t<i.length;t++){let n=i[t][0],o=i[t][1];for(let t=-1;t<=7;t++)if(!(n+t<=-1)&&!(r<=n+t))for(let i=-1;i<=7;i++)o+i<=-1||r<=o+i||(t>=0&&t<=6&&(0===i||6===i)||i>=0&&i<=6&&(0===t||6===t)||t>=2&&t<=4&&i>=2&&i<=4?e.set(n+t,o+i,!0,!0):e.set(n+t,o+i,!1,!0))}}(y,t),function(e){let t=e.size;for(let r=8;r<t-8;r++){let t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(y),function(e,t){let r=s.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],n=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(i+t,n+r,!0,!0):e.set(i+t,n+r,!1,!0)}}(y,t),m(y,r,0),t>=7&&function(e,t){let r,i,n;let o=e.size,a=h.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),i=t%3+o-8-3,n=(a>>t&1)==1,e.set(r,i,n,!0),e.set(i,r,n,!0)}(y,t),function(e,t){let r=e.size,i=-1,n=r-1,o=7,a=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!e.isReserved(n,s-r)){let i=!1;a<t.length&&(i=(t[a]>>>o&1)==1),e.set(n,s-r,i),-1==--o&&(a++,o=7)}if((n+=i)<0||r<=n){n-=i,i=-i;break}}}(y,b),isNaN(n)&&(n=c.getBestMask(y,m.bind(null,y,r))),c.applyMask(n,y),m(y,r,n),{modules:y,version:t,errorCorrectionLevel:r,maskPattern:n,segments:f}}(e,r,w,f)}},58986:function(e,t,r){let i=r(39261);function n(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}n.prototype.initialize=function(e){this.degree=e,this.genPoly=i.generateECPolynomial(this.degree)},n.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=i.mod(t,this.genPoly),n=this.degree-r.length;if(n>0){let e=new Uint8Array(this.degree);return e.set(r,n),e}return r},e.exports=n},91445:function(e,t){let r="[0-9]+",i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",n="(?:(?![A-Z0-9 $%*+\\-./:]|"+(i=i.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";t.KANJI=RegExp(i,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(n,"g"),t.NUMERIC=RegExp(r,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let o=RegExp("^"+i+"$"),a=RegExp("^"+r+"$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return o.test(e)},t.testNumeric=function(e){return a.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},39409:function(e,t,r){let i=r(81730),n=r(61308),o=r(24691),a=r(22470),s=r(80771),l=r(91445),c=r(67052),u=r(65987);function d(e){return unescape(encodeURIComponent(e)).length}function h(e,t,r){let i;let n=[];for(;null!==(i=e.exec(r));)n.push({data:i[0],index:i.index,mode:t,length:i[0].length});return n}function f(e){let t,r;let n=h(l.NUMERIC,i.NUMERIC,e),o=h(l.ALPHANUMERIC,i.ALPHANUMERIC,e);return c.isKanjiModeEnabled()?(t=h(l.BYTE,i.BYTE,e),r=h(l.KANJI,i.KANJI,e)):(t=h(l.BYTE_KANJI,i.BYTE,e),r=[]),n.concat(o,t,r).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function p(e,t){switch(t){case i.NUMERIC:return n.getBitsLength(e);case i.ALPHANUMERIC:return o.getBitsLength(e);case i.KANJI:return s.getBitsLength(e);case i.BYTE:return a.getBitsLength(e)}}function g(e,t){let r;let l=i.getBestModeForData(e);if((r=i.from(t,l))!==i.BYTE&&r.bit<l.bit)throw Error('"'+e+'" cannot be encoded with mode '+i.toString(r)+".\n Suggested mode is: "+i.toString(l));switch(r!==i.KANJI||c.isKanjiModeEnabled()||(r=i.BYTE),r){case i.NUMERIC:return new n(e);case i.ALPHANUMERIC:return new o(e);case i.KANJI:return new s(e);case i.BYTE:return new a(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},t.fromString=function(e,r){let n=function(e,t){let r={},n={start:{}},o=["start"];for(let a=0;a<e.length;a++){let s=e[a],l=[];for(let e=0;e<s.length;e++){let c=s[e],u=""+a+e;l.push(u),r[u]={node:c,lastCount:0},n[u]={};for(let e=0;e<o.length;e++){let a=o[e];r[a]&&r[a].node.mode===c.mode?(n[a][u]=p(r[a].lastCount+c.length,c.mode)-p(r[a].lastCount,c.mode),r[a].lastCount+=c.length):(r[a]&&(r[a].lastCount=c.length),n[a][u]=p(c.length,c.mode)+4+i.getCharCountIndicator(c.mode,t))}}o=l}for(let e=0;e<o.length;e++)n[o[e]].end=0;return{map:n,table:r}}(function(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r];switch(n.mode){case i.NUMERIC:t.push([n,{data:n.data,mode:i.ALPHANUMERIC,length:n.length},{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.ALPHANUMERIC:t.push([n,{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.KANJI:t.push([n,{data:n.data,mode:i.BYTE,length:d(n.data)}]);break;case i.BYTE:t.push([{data:n.data,mode:i.BYTE,length:d(n.data)}])}}return t}(f(e,c.isKanjiModeEnabled())),r),o=u.find_path(n.map,"start","end"),a=[];for(let e=1;e<o.length-1;e++)a.push(n.table[o[e]].node);return t.fromArray(a.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(f(e,c.isKanjiModeEnabled()))}},67052:function(e,t){let r;let i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return i[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},88122:function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},32850:function(e,t,r){let i=r(67052),n=r(20719),o=r(18906),a=r(81730),s=r(88122),l=i.getBCHDigit(7973);function c(e,t){return a.getCharCountIndicator(e,t)+4}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);let o=(i.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,t))*8;if(r===a.MIXED)return o;let l=o-c(r,e);switch(r){case a.NUMERIC:return Math.floor(l/10*3);case a.ALPHANUMERIC:return Math.floor(l/11*2);case a.KANJI:return Math.floor(l/13);case a.BYTE:default:return Math.floor(l/8)}},t.getBestVersionForData=function(e,r){let i;let n=o.from(r,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let i=1;i<=40;i++)if(function(e,t){let r=0;return e.forEach(function(e){let i=c(e.mode,t);r+=i+e.getBitsLength()}),r}(e,i)<=t.getCapacity(i,r,a.MIXED))return i}(e,n);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,r,i){for(let n=1;n<=40;n++)if(r<=t.getCapacity(n,i,e))return n}(i.mode,i.getLength(),n)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;i.getBCHDigit(t)-l>=0;)t^=7973<<i.getBCHDigit(t)-l;return e<<12|t}},51250:function(e,t,r){let i=r(84786);t.render=function(e,t,r){var n;let o=r,a=t;void 0!==o||t&&t.getContext||(o=t,t=void 0),t||(a=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),o=i.getOptions(o);let s=i.getImageWidth(e.modules.size,o),l=a.getContext("2d"),c=l.createImageData(s,s);return i.qrToImageData(c.data,e,o),n=a,l.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px",l.putImageData(c,0,0),a},t.renderToDataURL=function(e,r,i){let n=i;void 0!==n||r&&r.getContext||(n=r,r=void 0),n||(n={});let o=t.render(e,r,n),a=n.type||"image/png",s=n.rendererOpts||{};return o.toDataURL(a,s.quality)}},18390:function(e,t,r){let i=r(84786);function n(e,t){let r=e.a/255,i=t+'="'+e.hex+'"';return r<1?i+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':i}function o(e,t,r){let i=e+t;return void 0!==r&&(i+=" "+r),i}t.render=function(e,t,r){let a=i.getOptions(t),s=e.modules.size,l=e.modules.data,c=s+2*a.margin,u=a.color.light.a?"<path "+n(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",d="<path "+n(a.color.dark,"stroke")+' d="'+function(e,t,r){let i="",n=0,a=!1,s=0;for(let l=0;l<e.length;l++){let c=Math.floor(l%t),u=Math.floor(l/t);c||a||(a=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(i+=a?o("M",c+r,.5+u+r):o("m",n,0),n=0,a=!1),c+1<t&&e[l+1]||(i+=o("h",s),s=0)):n++}return i}(l,s,a.margin)+'"/>',h='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+('viewBox="0 0 '+c)+" "+c+'" shape-rendering="crispEdges">'+u+d+"</svg>\n";return"function"==typeof r&&r(null,h),h}},84786:function(e,t){function r(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,i=e.width&&e.width>=21?e.width:void 0,n=e.scale||4;return{width:i,scale:i?4:n,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){let i=t.getScale(e,r);return Math.floor((e+2*r.margin)*i)},t.qrToImageData=function(e,r,i){let n=r.modules.size,o=r.modules.data,a=t.getScale(n,i),s=Math.floor((n+2*i.margin)*a),l=i.margin*a,c=[i.color.light,i.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let u=(t*s+r)*4,d=i.color.light;t>=l&&r>=l&&t<s-l&&r<s-l&&(d=c[o[Math.floor((t-l)/a)*n+Math.floor((r-l)/a)]?1:0]),e[u++]=d.r,e[u++]=d.g,e[u++]=d.b,e[u]=d.a}}},79742:function(e,t){"use strict";t.byteLength=function(e){var t=l(e),r=t[0],i=t[1];return(r+i)*3/4-i},t.toByteArray=function(e){var t,r,o=l(e),a=o[0],s=o[1],c=new n((a+s)*3/4-s),u=0,d=s>0?a-4:a;for(r=0;r<d;r+=4)t=i[e.charCodeAt(r)]<<18|i[e.charCodeAt(r+1)]<<12|i[e.charCodeAt(r+2)]<<6|i[e.charCodeAt(r+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=255&t;return 2===s&&(t=i[e.charCodeAt(r)]<<2|i[e.charCodeAt(r+1)]>>4,c[u++]=255&t),1===s&&(t=i[e.charCodeAt(r)]<<10|i[e.charCodeAt(r+1)]<<4|i[e.charCodeAt(r+2)]>>2,c[u++]=t>>8&255,c[u++]=255&t),c},t.fromByteArray=function(e){for(var t,i=e.length,n=i%3,o=[],a=0,s=i-n;a<s;a+=16383)o.push(function(e,t,i){for(var n,o=[],a=t;a<i;a+=3)o.push(r[(n=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]))>>18&63]+r[n>>12&63]+r[n>>6&63]+r[63&n]);return o.join("")}(e,a,a+16383>s?s:a+16383));return 1===n?o.push(r[(t=e[i-1])>>2]+r[t<<4&63]+"=="):2===n&&o.push(r[(t=(e[i-2]<<8)+e[i-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),o.join("")};for(var r=[],i=[],n="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=o.length;a<s;++a)r[a]=o[a],i[o.charCodeAt(a)]=a;function l(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var i=r===t?0:4-r%4;return[r,i]}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},48764:function(e,t,r){"use strict";let i=r(79742),n=r(80645),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function a(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,s.prototype),t}function s(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return u(e)}return l(e,t,r)}function l(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!s.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|p(e,t),i=a(r),n=i.write(e,t);return n!==r&&(i=i.slice(0,n)),i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(j(e,Uint8Array)){let t=new Uint8Array(e);return h(t.buffer,t.byteOffset,t.byteLength)}return d(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(j(e,ArrayBuffer)||e&&j(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(j(e,SharedArrayBuffer)||e&&j(e.buffer,SharedArrayBuffer)))return h(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return s.from(i,t,r);let n=function(e){var t;if(s.isBuffer(e)){let t=0|f(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?a(0):d(e):"Buffer"===e.type&&Array.isArray(e.data)?d(e.data):void 0}(e);if(n)return n;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return s.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function c(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return c(e),a(e<0?0:0|f(e))}function d(e){let t=e.length<0?0:0|f(e.length),r=a(t);for(let i=0;i<t;i+=1)r[i]=255&e[i];return r}function h(e,t,r){let i;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(i=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),s.prototype),i}function f(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function p(e,t){if(s.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||j(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;let n=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return R(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return N(e).length;default:if(n)return i?-1:R(e).length;t=(""+t).toLowerCase(),n=!0}}function g(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let i=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>i)&&(r=i);let n="";for(let i=t;i<r;++i)n+=U[e[i]];return n}(this,t,r);case"utf8":case"utf-8":return y(this,t,r);case"ascii":return function(e,t,r){let i="";r=Math.min(e.length,r);for(let n=t;n<r;++n)i+=String.fromCharCode(127&e[n]);return i}(this,t,r);case"latin1":case"binary":return function(e,t,r){let i="";r=Math.min(e.length,r);for(let n=t;n<r;++n)i+=String.fromCharCode(e[n]);return i}(this,t,r);case"base64":var o,a;return o=t,a=r,0===o&&a===this.length?i.fromByteArray(this):i.fromByteArray(this.slice(o,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let i=e.slice(t,r),n="";for(let e=0;e<i.length-1;e+=2)n+=String.fromCharCode(i[e]+256*i[e+1]);return n}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function m(e,t,r){let i=e[t];e[t]=e[r],e[r]=i}function w(e,t,r,i,n){var o;if(0===e.length)return -1;if("string"==typeof r?(i=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r)!=o&&(r=n?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(n)return -1;r=e.length-1}else if(r<0){if(!n)return -1;r=0}if("string"==typeof t&&(t=s.from(t,i)),s.isBuffer(t))return 0===t.length?-1:b(e,t,r,i,n);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?n?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):b(e,[t],r,i,n);throw TypeError("val must be string, number or Buffer")}function b(e,t,r,i,n){let o,a=1,s=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return -1;a=2,s/=2,l/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(n){let i=-1;for(o=r;o<s;o++)if(c(e,o)===c(t,-1===i?0:o-i)){if(-1===i&&(i=o),o-i+1===l)return i*a}else -1!==i&&(o-=o-i),i=-1}else for(r+l>s&&(r=s-l),o=r;o>=0;o--){let r=!0;for(let i=0;i<l;i++)if(c(e,o+i)!==c(t,i)){r=!1;break}if(r)return o}return -1}function y(e,t,r){r=Math.min(e.length,r);let i=[],n=t;for(;n<r;){let t=e[n],o=null,a=t>239?4:t>223?3:t>191?2:1;if(n+a<=r){let r,i,s,l;switch(a){case 1:t<128&&(o=t);break;case 2:(192&(r=e[n+1]))==128&&(l=(31&t)<<6|63&r)>127&&(o=l);break;case 3:r=e[n+1],i=e[n+2],(192&r)==128&&(192&i)==128&&(l=(15&t)<<12|(63&r)<<6|63&i)>2047&&(l<55296||l>57343)&&(o=l);break;case 4:r=e[n+1],i=e[n+2],s=e[n+3],(192&r)==128&&(192&i)==128&&(192&s)==128&&(l=(15&t)<<18|(63&r)<<12|(63&i)<<6|63&s)>65535&&l<1114112&&(o=l)}}null===o?(o=65533,a=1):o>65535&&(o-=65536,i.push(o>>>10&1023|55296),o=56320|1023&o),i.push(o),n+=a}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",i=0;for(;i<t;)r+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return r}(i)}function v(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function x(e,t,r,i,n,o){if(!s.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>n||t<o)throw RangeError('"value" argument is out of bounds');if(r+i>e.length)throw RangeError("Index out of range")}function C(e,t,r,i,n){I(t,i,n,e,r,7);let o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,r}function E(e,t,r,i,n){I(t,i,n,e,r,7);let o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=a,a>>=8,e[r+2]=a,a>>=8,e[r+1]=a,a>>=8,e[r]=a,r+8}function _(e,t,r,i,n,o){if(r+i>e.length||r<0)throw RangeError("Index out of range")}function S(e,t,r,i,o){return t=+t,r>>>=0,o||_(e,t,r,4,34028234663852886e22,-34028234663852886e22),n.write(e,t,r,i,23,4),r+4}function k(e,t,r,i,o){return t=+t,r>>>=0,o||_(e,t,r,8,17976931348623157e292,-17976931348623157e292),n.write(e,t,r,i,52,8),r+8}t.Buffer=s,t.SlowBuffer=function(e){return+e!=e&&(e=0),s.alloc(+e)},t.INSPECT_MAX_BYTES=50,t.kMaxLength=2147483647,s.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),s.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(e,t,r){return l(e,t,r)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(e,t,r){return(c(e),e<=0)?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)},s.allocUnsafe=function(e){return u(e)},s.allocUnsafeSlow=function(e){return u(e)},s.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==s.prototype},s.compare=function(e,t){if(j(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),j(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,i=t.length;for(let n=0,o=Math.min(r,i);n<o;++n)if(e[n]!==t[n]){r=e[n],i=t[n];break}return r<i?-1:i<r?1:0},s.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return s.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let i=s.allocUnsafe(t),n=0;for(r=0;r<e.length;++r){let t=e[r];if(j(t,Uint8Array))n+t.length>i.length?(s.isBuffer(t)||(t=s.from(t)),t.copy(i,n)):Uint8Array.prototype.set.call(i,t,n);else if(s.isBuffer(t))t.copy(i,n);else throw TypeError('"list" argument must be an Array of Buffers');n+=t.length}return i},s.byteLength=p,s.prototype._isBuffer=!0,s.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)m(this,t,t+1);return this},s.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)m(this,t,t+3),m(this,t+1,t+2);return this},s.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)m(this,t,t+7),m(this,t+1,t+6),m(this,t+2,t+5),m(this,t+3,t+4);return this},s.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?y(this,0,e):g.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===s.compare(this,e)},s.prototype.inspect=function(){let e="",r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},o&&(s.prototype[o]=s.prototype.inspect),s.prototype.compare=function(e,t,r,i,n){if(j(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===i&&(i=0),void 0===n&&(n=this.length),t<0||r>e.length||i<0||n>this.length)throw RangeError("out of range index");if(i>=n&&t>=r)return 0;if(i>=n)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,i>>>=0,n>>>=0,this===e)return 0;let o=n-i,a=r-t,l=Math.min(o,a),c=this.slice(i,n),u=e.slice(t,r);for(let e=0;e<l;++e)if(c[e]!==u[e]){o=c[e],a=u[e];break}return o<a?-1:a<o?1:0},s.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},s.prototype.indexOf=function(e,t,r){return w(this,e,t,r,!0)},s.prototype.lastIndexOf=function(e,t,r){return w(this,e,t,r,!1)},s.prototype.write=function(e,t,r,i){var n,o,a,s,l,c,u,d;if(void 0===t)i="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)i=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===i&&(i="utf8")):(i=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let h=this.length-t;if((void 0===r||r>h)&&(r=h),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let f=!1;for(;;)switch(i){case"hex":return function(e,t,r,i){let n;r=Number(r)||0;let o=e.length-r;i?(i=Number(i))>o&&(i=o):i=o;let a=t.length;for(i>a/2&&(i=a/2),n=0;n<i;++n){let i=parseInt(t.substr(2*n,2),16);if(i!=i)break;e[r+n]=i}return n}(this,e,t,r);case"utf8":case"utf-8":return n=t,o=r,M(R(e,this.length-n),this,n,o);case"ascii":case"latin1":case"binary":return a=t,s=r,M(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,a,s);case"base64":return l=t,c=r,M(N(e),this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,d=r,M(function(e,t){let r,i;let n=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)i=(r=e.charCodeAt(o))>>8,n.push(r%256),n.push(i);return n}(e,this.length-u),this,u,d);default:if(f)throw TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),f=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},s.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let i=this.subarray(e,t);return Object.setPrototypeOf(i,s.prototype),i},s.prototype.readUintLE=s.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);let i=this[e],n=1,o=0;for(;++o<t&&(n*=256);)i+=this[e+o]*n;return i},s.prototype.readUintBE=s.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);let i=this[e+--t],n=1;for(;t>0&&(n*=256);)i+=this[e+--t]*n;return i},s.prototype.readUint8=s.prototype.readUInt8=function(e,t){return e>>>=0,t||v(e,1,this.length),this[e]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(e,t){return e>>>=0,t||v(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(e,t){return e>>>=0,t||v(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(e,t){return e>>>=0,t||v(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(e,t){return e>>>=0,t||v(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readBigUInt64LE=B(function(e){D(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&P(e,this.length-8);let i=t+256*this[++e]+65536*this[++e]+16777216*this[++e],n=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(i)+(BigInt(n)<<BigInt(32))}),s.prototype.readBigUInt64BE=B(function(e){D(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&P(e,this.length-8);let i=16777216*t+65536*this[++e]+256*this[++e]+this[++e],n=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(i)<<BigInt(32))+BigInt(n)}),s.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);let i=this[e],n=1,o=0;for(;++o<t&&(n*=256);)i+=this[e+o]*n;return i>=(n*=128)&&(i-=Math.pow(2,8*t)),i},s.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);let i=t,n=1,o=this[e+--i];for(;i>0&&(n*=256);)o+=this[e+--i]*n;return o>=(n*=128)&&(o-=Math.pow(2,8*t)),o},s.prototype.readInt8=function(e,t){return(e>>>=0,t||v(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},s.prototype.readInt16LE=function(e,t){e>>>=0,t||v(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(e,t){e>>>=0,t||v(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(e,t){return e>>>=0,t||v(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e>>>=0,t||v(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readBigInt64LE=B(function(e){D(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&P(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),s.prototype.readBigInt64BE=B(function(e){D(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&P(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),s.prototype.readFloatLE=function(e,t){return e>>>=0,t||v(e,4,this.length),n.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e>>>=0,t||v(e,4,this.length),n.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e>>>=0,t||v(e,8,this.length),n.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e>>>=0,t||v(e,8,this.length),n.read(this,e,!1,52,8)},s.prototype.writeUintLE=s.prototype.writeUIntLE=function(e,t,r,i){if(e=+e,t>>>=0,r>>>=0,!i){let i=Math.pow(2,8*r)-1;x(this,e,t,r,i,0)}let n=1,o=0;for(this[t]=255&e;++o<r&&(n*=256);)this[t+o]=e/n&255;return t+r},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(e,t,r,i){if(e=+e,t>>>=0,r>>>=0,!i){let i=Math.pow(2,8*r)-1;x(this,e,t,r,i,0)}let n=r-1,o=1;for(this[t+n]=255&e;--n>=0&&(o*=256);)this[t+n]=e/o&255;return t+r},s.prototype.writeUint8=s.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,1,255,0),this[t]=255&e,t+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigUInt64LE=B(function(e,t=0){return C(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=B(function(e,t=0){return E(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(e,t,r,i){if(e=+e,t>>>=0,!i){let i=Math.pow(2,8*r-1);x(this,e,t,r,i-1,-i)}let n=0,o=1,a=0;for(this[t]=255&e;++n<r&&(o*=256);)e<0&&0===a&&0!==this[t+n-1]&&(a=1),this[t+n]=(e/o>>0)-a&255;return t+r},s.prototype.writeIntBE=function(e,t,r,i){if(e=+e,t>>>=0,!i){let i=Math.pow(2,8*r-1);x(this,e,t,r,i-1,-i)}let n=r-1,o=1,a=0;for(this[t+n]=255&e;--n>=0&&(o*=256);)e<0&&0===a&&0!==this[t+n+1]&&(a=1),this[t+n]=(e/o>>0)-a&255;return t+r},s.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},s.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigInt64LE=B(function(e,t=0){return C(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=B(function(e,t=0){return E(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeFloatLE=function(e,t,r){return S(this,e,t,!0,r)},s.prototype.writeFloatBE=function(e,t,r){return S(this,e,t,!1,r)},s.prototype.writeDoubleLE=function(e,t,r){return k(this,e,t,!0,r)},s.prototype.writeDoubleBE=function(e,t,r){return k(this,e,t,!1,r)},s.prototype.copy=function(e,t,r,i){if(!s.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<r&&(i=r),i===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(i<0)throw RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-r&&(i=e.length-t+r);let n=i-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,i):Uint8Array.prototype.set.call(e,this.subarray(r,i),t),n},s.prototype.fill=function(e,t,r,i){let n;if("string"==typeof e){if("string"==typeof t?(i=t,t=0,r=this.length):"string"==typeof r&&(i=r,r=this.length),void 0!==i&&"string"!=typeof i)throw TypeError("encoding must be a string");if("string"==typeof i&&!s.isEncoding(i))throw TypeError("Unknown encoding: "+i);if(1===e.length){let t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(n=t;n<r;++n)this[n]=e;else{let o=s.isBuffer(e)?e:s.from(e,i),a=o.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<r-t;++n)this[n+t]=o[n%a]}return this};let A={};function O(e,t,r){A[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function $(e){let t="",r=e.length,i="-"===e[0]?1:0;for(;r>=i+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function I(e,t,r,i,n,o){if(e>r||e<t){let i;let n="bigint"==typeof t?"n":"";throw i=o>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${(o+1)*8}${n}`:`>= -(2${n} ** ${(o+1)*8-1}${n}) and < 2 ** ${(o+1)*8-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new A.ERR_OUT_OF_RANGE("value",i,e)}D(n,"offset"),(void 0===i[n]||void 0===i[n+o])&&P(n,i.length-(o+1))}function D(e,t){if("number"!=typeof e)throw new A.ERR_INVALID_ARG_TYPE(t,"number",e)}function P(e,t,r){if(Math.floor(e)!==e)throw D(e,r),new A.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new A.ERR_BUFFER_OUT_OF_BOUNDS;throw new A.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}O("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),O("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),O("ERR_OUT_OF_RANGE",function(e,t,r){let i=`The value of "${e}" is out of range.`,n=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?n=$(String(r)):"bigint"==typeof r&&(n=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(n=$(n)),n+="n"),i+=` It must be ${t}. Received ${n}`},RangeError);let T=/[^+/0-9A-Za-z-_]/g;function R(e,t){let r;t=t||1/0;let i=e.length,n=null,o=[];for(let a=0;a<i;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!n){if(r>56319||a+1===i){(t-=3)>-1&&o.push(239,191,189);continue}n=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),n=r;continue}r=(n-55296<<10|r-56320)+65536}else n&&(t-=3)>-1&&o.push(239,191,189);if(n=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function N(e){return i.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(T,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function M(e,t,r,i){let n;for(n=0;n<i&&!(n+r>=t.length)&&!(n>=e.length);++n)t[n+r]=e[n];return n}function j(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let U=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let i=16*r;for(let n=0;n<16;++n)t[i+n]=e[r]+e[n]}return t}();function B(e){return"undefined"==typeof BigInt?L:e}function L(){throw Error("BigInt not supported")}},27484:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",r="minute",i="hour",n="week",o="month",a="quarter",s="year",l="date",c="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(e,t,r){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(r)+e},f="en",p={};p[f]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}};var g="$isDayjsObject",m=function(e){return e instanceof v||!(!e||!e[g])},w=function e(t,r,i){var n;if(!t)return f;if("string"==typeof t){var o=t.toLowerCase();p[o]&&(n=o),r&&(p[o]=r,n=o);var a=t.split("-");if(!n&&a.length>1)return e(a[0])}else{var s=t.name;p[s]=t,n=s}return!i&&n&&(f=n),n||!i&&f},b=function(e,t){if(m(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new v(r)},y={s:h,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(r/60),2,"0")+":"+h(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var i=12*(r.year()-t.year())+(r.month()-t.month()),n=t.clone().add(i,o),a=r-n<0,s=t.clone().add(i+(a?-1:1),o);return+(-(i+(r-n)/(a?n-s:s-n))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(c){return({M:o,y:s,w:n,d:"day",D:l,h:i,m:r,s:t,ms:e,Q:a})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};y.l=w,y.i=m,y.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var v=function(){function h(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var f=h.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(u);if(i){var n=i[2]-1||0,o=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)):new Date(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return this.$d.toString()!==c},f.isSame=function(e,t){var r=b(e);return this.startOf(t)<=r&&r<=this.endOf(t)},f.isAfter=function(e,t){return b(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<b(e)},f.$g=function(e,t,r){return y.u(e)?this[t]:this.set(r,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,a){var c=this,u=!!y.u(a)||a,d=y.p(e),h=function(e,t){var r=y.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return u?r:r.endOf("day")},f=function(e,t){return y.w(c.toDate()[e].apply(c.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},p=this.$W,g=this.$M,m=this.$D,w="set"+(this.$u?"UTC":"");switch(d){case s:return u?h(1,0):h(31,11);case o:return u?h(1,g):h(0,g+1);case n:var b=this.$locale().weekStart||0,v=(p<b?p+7:p)-b;return h(u?m-v:m+(6-v),g);case"day":case l:return f(w+"Hours",0);case i:return f(w+"Minutes",1);case r:return f(w+"Seconds",2);case t:return f(w+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(n,a){var c,u=y.p(n),d="set"+(this.$u?"UTC":""),h=((c={}).day=d+"Date",c[l]=d+"Date",c[o]=d+"Month",c[s]=d+"FullYear",c[i]=d+"Hours",c[r]=d+"Minutes",c[t]=d+"Seconds",c[e]=d+"Milliseconds",c)[u],f="day"===u?this.$D+(a-this.$W):a;if(u===o||u===s){var p=this.clone().set(l,1);p.$d[h](f),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[y.p(e)]()},f.add=function(e,a){var l,c=this;e=Number(e);var u=y.p(a),d=function(t){var r=b(c);return y.w(r.date(r.date()+Math.round(t*e)),c)};if(u===o)return this.set(o,this.$M+e);if(u===s)return this.set(s,this.$y+e);if("day"===u)return d(1);if(u===n)return d(7);var h=((l={})[r]=6e4,l[i]=36e5,l[t]=1e3,l)[u]||1,f=this.$d.getTime()+e*h;return y.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||c;var i=e||"YYYY-MM-DDTHH:mm:ssZ",n=y.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,u=r.months,h=r.meridiem,f=function(e,r,n,o){return e&&(e[r]||e(t,i))||n[r].slice(0,o)},p=function(e){return y.s(o%12||12,e,"0")},g=h||function(e,t,r){var i=e<12?"AM":"PM";return r?i.toLowerCase():i};return i.replace(d,function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return y.s(t.$y,4,"0");case"M":return s+1;case"MM":return y.s(s+1,2,"0");case"MMM":return f(r.monthsShort,s,u,3);case"MMMM":return f(u,s);case"D":return t.$D;case"DD":return y.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(r.weekdaysMin,t.$W,l,2);case"ddd":return f(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return y.s(o,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return g(o,a,!0);case"A":return g(o,a,!1);case"m":return String(a);case"mm":return y.s(a,2,"0");case"s":return String(t.$s);case"ss":return y.s(t.$s,2,"0");case"SSS":return y.s(t.$ms,3,"0");case"Z":return n}return null}(e)||n.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,l,c){var u,d=this,h=y.p(l),f=b(e),p=(f.utcOffset()-this.utcOffset())*6e4,g=this-f,m=function(){return y.m(d,f)};switch(h){case s:u=m()/12;break;case o:u=m();break;case a:u=m()/3;break;case n:u=(g-p)/6048e5;break;case"day":u=(g-p)/864e5;break;case i:u=g/36e5;break;case r:u=g/6e4;break;case t:u=g/1e3;break;default:u=g}return c?u:y.a(u)},f.daysInMonth=function(){return this.endOf(o).$D},f.$locale=function(){return p[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),i=w(e,t,!0);return i&&(r.$L=i),r},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),x=v.prototype;return b.prototype=x,[["$ms",e],["$s",t],["$m",r],["$H",i],["$W","day"],["$M",o],["$y",s],["$D",l]].forEach(function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),b.extend=function(e,t){return e.$i||(e(t,v,b),e.$i=!0),b},b.locale=w,b.isDayjs=m,b.unix=function(e){return b(1e3*e)},b.en=p[f],b.Ls=p,b.p={},b},e.exports=t()},84110:function(e){var t;t=function(){return function(e,t,r){e=e||{};var i=t.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(e,t,r,n){return i.fromToBase(e,t,r,n)}r.en.relativeTime=n,i.fromToBase=function(t,i,o,a,s){for(var l,c,u,d=o.$locale().relativeTime||n,h=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=h.length,p=0;p<f;p+=1){var g=h[p];g.d&&(l=a?r(t).diff(o,g.d,!0):o.diff(t,g.d,!0));var m=(e.rounding||Math.round)(Math.abs(l));if(u=l>0,m<=g.r||!g.r){m<=1&&p>0&&(g=h[p-1]);var w=d[g.l];s&&(m=s(""+m)),c="string"==typeof w?w.replace("%d",m):w(m,i,g.l,u);break}}if(i)return c;var b=u?d.future:d.past;return"function"==typeof b?b(c):b.replace("%s",c)},i.to=function(e,t){return o(e,t,this,!0)},i.from=function(e,t){return o(e,t,this)};var a=function(e){return e.$u?r.utc():r()};i.toNow=function(e){return this.to(a(this),e)},i.fromNow=function(e){return this.from(a(this),e)}}},e.exports=t()},70660:function(e){var t;t=function(){return function(e,t,r){r.updateLocale=function(e,t){var i=r.Ls[e];if(i)return(t?Object.keys(t):[]).forEach(function(e){i[e]=t[e]}),i}}},e.exports=t()},44020:function(e){"use strict";var t="%[a-f0-9]{2}",r=RegExp("("+t+")|([^%]+?)","gi"),i=RegExp("("+t+")+","gi");e.exports=function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=i.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var o=function(e){try{return decodeURIComponent(e)}catch(n){for(var t=e.match(r)||[],i=1;i<t.length;i++)t=(e=(function e(t,r){try{return[decodeURIComponent(t.join(""))]}catch(e){}if(1===t.length)return t;r=r||1;var i=t.slice(0,r),n=t.slice(r);return Array.prototype.concat.call([],e(i),e(n))})(t,i).join("")).match(r)||[];return e}}(n[0]);o!==n[0]&&(t[n[0]]=o)}n=i.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),s=0;s<a.length;s++){var l=a[s];e=e.replace(RegExp(l,"g"),t[l])}return e}(e)}}},65987:function(e){"use strict";var t={single_source_shortest_paths:function(e,r,i){var n,o,a,s,l,c,u,d={},h={};h[r]=0;var f=t.PriorityQueue.make();for(f.push(r,0);!f.empty();)for(a in o=(n=f.pop()).value,s=n.cost,l=e[o]||{})l.hasOwnProperty(a)&&(c=s+l[a],u=h[a],(void 0===h[a]||u>c)&&(h[a]=c,f.push(a,c),d[a]=o));if(void 0!==i&&void 0===h[i])throw Error(["Could not find a path from ",r," to ",i,"."].join(""));return d},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],i=t;i;)r.push(i),e[i],i=e[i];return r.reverse(),r},find_path:function(e,r,i){var n=t.single_source_shortest_paths(e,r,i);return t.extract_shortest_path_from_predecessor_list(n,i)},PriorityQueue:{make:function(e){var r,i=t.PriorityQueue,n={};for(r in e=e||{},i)i.hasOwnProperty(r)&&(n[r]=i[r]);return n.queue=[],n.sorter=e.sorter||i.default_sorter,n},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},62378:function(e){"use strict";e.exports=function(e){for(var t=[],r=e.length,i=0;i<r;i++){var n=e.charCodeAt(i);if(n>=55296&&n<=56319&&r>i+1){var o=e.charCodeAt(i+1);o>=56320&&o<=57343&&(n=(n-55296)*1024+o-56320+65536,i+=1)}if(n<128){t.push(n);continue}if(n<2048){t.push(n>>6|192),t.push(63&n|128);continue}if(n<55296||n>=57344&&n<65536){t.push(n>>12|224),t.push(n>>6&63|128),t.push(63&n|128);continue}if(n>=65536&&n<=1114111){t.push(n>>18|240),t.push(n>>12&63|128),t.push(n>>6&63|128),t.push(63&n|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},26729:function(e){"use strict";var t=Object.prototype.hasOwnProperty,r="~";function i(){}function n(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function o(e,t,i,o,a){if("function"!=typeof i)throw TypeError("The listener must be a function");var s=new n(i,o||e,a),l=r?r+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],s]:e._events[l].push(s):(e._events[l]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new i:delete e._events[t]}function s(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(r=!1)),s.prototype.eventNames=function(){var e,i,n=[];if(0===this._eventsCount)return n;for(i in e=this._events)t.call(e,i)&&n.push(r?i.slice(1):i);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},s.prototype.listeners=function(e){var t=r?r+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var n=0,o=i.length,a=Array(o);n<o;n++)a[n]=i[n].fn;return a},s.prototype.listenerCount=function(e){var t=r?r+e:e,i=this._events[t];return i?i.fn?1:i.length:0},s.prototype.emit=function(e,t,i,n,o,a){var s=r?r+e:e;if(!this._events[s])return!1;var l,c,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,i),!0;case 4:return u.fn.call(u.context,t,i,n),!0;case 5:return u.fn.call(u.context,t,i,n,o),!0;case 6:return u.fn.call(u.context,t,i,n,o,a),!0}for(c=1,l=Array(d-1);c<d;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var h,f=u.length;for(c=0;c<f;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),d){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,i);break;case 4:u[c].fn.call(u[c].context,t,i,n);break;default:if(!l)for(h=1,l=Array(d-1);h<d;h++)l[h-1]=arguments[h];u[c].fn.apply(u[c].context,l)}}return!0},s.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,i,n){var o=r?r+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||n&&!s.once||i&&s.context!==i||a(this,o);else{for(var l=0,c=[],u=s.length;l<u;l++)(s[l].fn!==t||n&&!s[l].once||i&&s[l].context!==i)&&c.push(s[l]);c.length?this._events[o]=1===c.length?c[0]:c:a(this,o)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&a(this,t)):(this._events=new i,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,e.exports=s},92806:function(e){"use strict";e.exports=function(e,t){for(var r={},i=Object.keys(e),n=Array.isArray(t),o=0;o<i.length;o++){var a=i[o],s=e[a];(n?-1!==t.indexOf(a):t(a,s,e))&&(r[a]=s)}return r}},80645:function(e,t){t.read=function(e,t,r,i,n){var o,a,s=8*n-i-1,l=(1<<s)-1,c=l>>1,u=-7,d=r?n-1:0,h=r?-1:1,f=e[t+d];for(d+=h,o=f&(1<<-u)-1,f>>=-u,u+=s;u>0;o=256*o+e[t+d],d+=h,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=i;u>0;a=256*a+e[t+d],d+=h,u-=8);if(0===o)o=1-c;else{if(o===l)return a?NaN:1/0*(f?-1:1);a+=Math.pow(2,i),o-=c}return(f?-1:1)*a*Math.pow(2,o-i)},t.write=function(e,t,r,i,n,o){var a,s,l,c=8*o-n-1,u=(1<<c)-1,d=u>>1,h=23===n?5960464477539062e-23:0,f=i?0:o-1,p=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(s=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+d>=1?t+=h/l:t+=h*Math.pow(2,1-d),t*l>=2&&(a++,l/=2),a+d>=u?(s=0,a=u):a+d>=1?(s=(t*l-1)*Math.pow(2,n),a+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,n),a=0));n>=8;e[r+f]=255&s,f+=p,s/=256,n-=8);for(a=a<<n|s,c+=n;c>0;e[r+f]=255&a,f+=p,a/=256,c-=8);e[r+f-p]|=128*g}},83454:function(e,t,r){"use strict";var i,n;e.exports=(null==(i=r.g.process)?void 0:i.env)&&"object"==typeof(null==(n=r.g.process)?void 0:n.env)?r.g.process:r(77663)},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5027)}])},5027:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return et}});var i,n,o,a,s,l,c,u,d,h,f,p,g,m,w,b,y,v,x,C,E,_,S,k=r(85893);r(67294);var A=r(9008),O=r.n(A),$=r(38793),I=r(63190),D=r(66403),P=r(57858),T=r(53516),R=r(75276),N=r(45775),M=r(39028),j=r(79578),U=r(3980),B=r(92106),L=class extends R.wR{constructor({chains:e,options:t}){super({chains:e,options:{reloadOnDisconnect:!1,...t}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,(0,R.Ko)(this,i,void 0),(0,R.Ko)(this,n,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,N.K)(e[0])})},this.onChainChanged=e=>{let t=(0,T.J)(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:e}={}){try{let t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});let r=await t.enable(),i=(0,N.K)(r[0]),n=await this.getChainId(),o=this.isChainUnsupported(n);return e&&n!==e&&(n=(await this.switchChain(e)).id,o=this.isChainUnsupported(n)),{account:i,chain:{id:n,unsupported:o}}}catch(e){if(/(user closed modal|accounts received is empty)/i.test(e.message))throw new M.ab(e);throw e}}async disconnect(){if(!(0,R.ac)(this,n))return;let e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){let e=await this.getProvider(),t=await e.request({method:"eth_accounts"});return(0,N.K)(t[0])}async getChainId(){let e=await this.getProvider();return(0,T.J)(e.chainId)}async getProvider(){if(!(0,R.ac)(this,n)){let e=(await Promise.all([r.e(811),r.e(753)]).then(r.t.bind(r,45811,19))).default;"function"!=typeof e&&"function"==typeof e.default&&(e=e.default),(0,R.qx)(this,i,new e(this.options));let t=R.ac(this,i).walletExtension?.getChainId(),o=this.chains.find(e=>this.options.chainId?e.id===this.options.chainId:e.id===t)||this.chains[0],a=this.options.chainId||o?.id,s=this.options.jsonRpcUrl||o?.rpcUrls.default.http[0];(0,R.qx)(this,n,(0,R.ac)(this,i).makeWeb3Provider(s,a))}return(0,R.ac)(this,n)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider(),this.getAccount()]),i=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,j.K)({account:r,chain:i,transport:(0,U.P)(t)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(e){let t=await this.getProvider(),r=(0,B.eC)(e);try{return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),this.chains.find(t=>t.id===e)??{id:e,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(n){let i=this.chains.find(t=>t.id===e);if(!i)throw new P.B({chainId:e,connectorId:this.id});if(4902===n.code)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:[i.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(i)}]}),i}catch(e){throw new M.ab(e)}throw new M.x3(n)}}async watchAsset({address:e,decimals:t=18,image:r,symbol:i}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:r,symbol:i}}})}};i=new WeakMap,n=new WeakMap;var F=r(92219),z=class extends F._{constructor({chains:e,options:t}={}){let r={name:"MetaMask",shimDisconnect:!0,getProvider(){function e(e){if(e?.isMetaMask&&(!e.isBraveWallet||e._events||e._state)&&!e.isApexWallet&&!e.isAvalanche&&!e.isBitKeep&&!e.isBlockWallet&&!e.isCoin98&&!e.isFordefi&&!e.isMathWallet&&!e.isOkxWallet&&!e.isOKExWallet&&!e.isOneInchIOSWallet&&!e.isOneInchAndroidWallet&&!e.isOpera&&!e.isPortal&&!e.isRabby&&!e.isDefiant&&!e.isTokenPocket&&!e.isTokenary&&!e.isZeal&&!e.isZerion)return e}if("undefined"==typeof window)return;let t=window.ethereum;return t?.providers?t.providers.find(e):e(t)},...t};super({chains:e,options:r}),this.id="metaMask",this.shimDisconnectKey=`${this.id}.shimDisconnect`,(0,R.Ko)(this,o,void 0),(0,R.qx)(this,o,r.UNSTABLE_shimOnConnectSelectAccount)}async connect({chainId:e}={}){try{let t=await this.getProvider();if(!t)throw new P.N;t.on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});let r=null;if((0,R.ac)(this,o)&&this.options?.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey)&&(r=await this.getAccount().catch(()=>null)))try{await t.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]}),r=await this.getAccount()}catch(e){if(this.isUserRejectedRequestError(e))throw new M.ab(e);if(e.code===new M.pT(e).code)throw e}if(!r){let e=await t.request({method:"eth_requestAccounts"});r=(0,N.K)(e[0])}let i=await this.getChainId(),n=this.isChainUnsupported(i);return e&&i!==e&&(i=(await this.switchChain(e)).id,n=this.isChainUnsupported(i)),this.options?.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:r,chain:{id:i,unsupported:n},provider:t}}catch(e){if(this.isUserRejectedRequestError(e))throw new M.ab(e);if(-32002===e.code)throw new M.pT(e);throw e}}};o=new WeakMap;var W=r(88338),H="eip155",Z="requestedChains",q="wallet_addEthereumChain",G=class extends R.wR{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),(0,R.Ko)(this,l),(0,R.Ko)(this,u),(0,R.Ko)(this,h),(0,R.Ko)(this,p),(0,R.Ko)(this,m),(0,R.Ko)(this,b),(0,R.Ko)(this,v),(0,R.Ko)(this,C),(0,R.Ko)(this,_),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,(0,R.Ko)(this,a,void 0),(0,R.Ko)(this,s,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,N.K)(e[0])})},this.onChainChanged=e=>{let t=Number(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{(0,R.U9)(this,b,y).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},(0,R.U9)(this,l,c).call(this)}async connect({chainId:e,pairingTopic:t}={}){try{let r=e;if(!r){let e=this.storage?.getItem("store"),t=e?.state?.data?.chain?.id;r=t&&!this.isChainUnsupported(t)?t:this.chains[0]?.id}if(!r)throw Error("No chains found on connector.");let i=await this.getProvider();(0,R.U9)(this,p,g).call(this);let n=(0,R.U9)(this,h,f).call(this);if(i.session&&n&&await i.disconnect(),!i.session||n){let e=this.chains.filter(e=>e.id!==r).map(e=>e.id);this.emit("message",{type:"connecting"}),await i.connect({pairingTopic:t,optionalChains:[r,...e]}),(0,R.U9)(this,b,y).call(this,this.chains.map(({id:e})=>e))}let o=await i.enable(),a=(0,N.K)(o[0]),s=await this.getChainId(),l=this.isChainUnsupported(s);return{account:a,chain:{id:s,unsupported:l}}}catch(e){if(/user rejected/i.test(e?.message))throw new M.ab(e);throw e}}async disconnect(){let e=await this.getProvider();try{await e.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{(0,R.U9)(this,m,w).call(this),(0,R.U9)(this,b,y).call(this,[])}}async getAccount(){let{accounts:e}=await this.getProvider();return(0,N.K)(e[0])}async getChainId(){let{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return(0,R.ac)(this,a)||await (0,R.U9)(this,l,c).call(this),e&&await this.switchChain(e),(0,R.ac)(this,a)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),i=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,j.K)({account:r,chain:i,transport:(0,U.P)(t)})}async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),r=(0,R.U9)(this,h,f).call(this);if(!e)return!1;if(r&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){let t=this.chains.find(t=>t.id===e);if(!t)throw new M.x3(Error("chain not found on connector."));try{let r=await this.getProvider(),i=(0,R.U9)(this,C,E).call(this),n=(0,R.U9)(this,_,S).call(this);if(!i.includes(e)&&n.includes(q)){await r.request({method:q,params:[{chainId:(0,B.eC)(t.id),blockExplorerUrls:[t.blockExplorers?.default?.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});let i=(0,R.U9)(this,v,x).call(this);i.push(e),(0,R.U9)(this,b,y).call(this,i)}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,B.eC)(e)}]}),t}catch(t){let e="string"==typeof t?t:t?.message;if(/user rejected request/i.test(e))throw new M.ab(t);throw new M.x3(t)}}};a=new WeakMap,s=new WeakMap,l=new WeakSet,c=async function(){return(0,R.ac)(this,s)||"undefined"==typeof window||(0,R.qx)(this,s,(0,R.U9)(this,u,d).call(this)),(0,R.ac)(this,s)},u=new WeakSet,d=async function(){let{EthereumProvider:e}=await r.e(152).then(r.bind(r,43152)),t=this.chains.map(({id:e})=>e);if(t.length){let{projectId:r,showQrModal:i=!0,qrModalOptions:n,metadata:o,relayUrl:s}=this.options;(0,R.qx)(this,a,await e.init({showQrModal:i,qrModalOptions:n,projectId:r,optionalChains:t,rpcMap:Object.fromEntries(this.chains.map(e=>[e.id,e.rpcUrls.default.http[0]])),metadata:o,relayUrl:s}))}},h=new WeakSet,f=function(){if((0,R.U9)(this,_,S).call(this).includes(q)||!this.options.isNewChainsStale)return!1;let e=(0,R.U9)(this,v,x).call(this),t=this.chains.map(({id:e})=>e),r=(0,R.U9)(this,C,E).call(this);return(!r.length||!!r.some(e=>t.includes(e)))&&!t.every(t=>e.includes(t))},p=new WeakSet,g=function(){(0,R.ac)(this,a)&&((0,R.U9)(this,m,w).call(this),(0,R.ac)(this,a).on("accountsChanged",this.onAccountsChanged),(0,R.ac)(this,a).on("chainChanged",this.onChainChanged),(0,R.ac)(this,a).on("disconnect",this.onDisconnect),(0,R.ac)(this,a).on("session_delete",this.onDisconnect),(0,R.ac)(this,a).on("display_uri",this.onDisplayUri),(0,R.ac)(this,a).on("connect",this.onConnect))},m=new WeakSet,w=function(){(0,R.ac)(this,a)&&((0,R.ac)(this,a).removeListener("accountsChanged",this.onAccountsChanged),(0,R.ac)(this,a).removeListener("chainChanged",this.onChainChanged),(0,R.ac)(this,a).removeListener("disconnect",this.onDisconnect),(0,R.ac)(this,a).removeListener("session_delete",this.onDisconnect),(0,R.ac)(this,a).removeListener("display_uri",this.onDisplayUri),(0,R.ac)(this,a).removeListener("connect",this.onConnect))},b=new WeakSet,y=function(e){this.storage?.setItem(Z,e)},v=new WeakSet,x=function(){return this.storage?.getItem(Z)??[]},C=new WeakSet,E=function(){if(!(0,R.ac)(this,a))return[];let e=R.ac(this,a).session?.namespaces;if(!e)return[];let t=(0,W.fK)(e);return t[H]?.chains?.map(e=>parseInt(e.split(":")[1]||""))??[]},_=new WeakSet,S=function(){if(!(0,R.ac)(this,a))return[];let e=R.ac(this,a).session?.namespaces;if(!e)return[];let t=(0,W.fK)(e);return t[H]?.methods??[]};var V=r(83454);let{chains:K,publicClient:Y,webSocketPublicClient:Q}=(0,I.QB)([D.R,{id:88,name:"Viction",network:"viction",nativeCurrency:{name:"Viction",symbol:"VIC",decimals:18},rpcUrls:{default:{http:["https://rpc.viction.xyz"]},public:{http:["https://rpc.viction.xyz"]}},blockExplorers:{default:{name:"VicScan",url:"https://vicscan.xyz"}},contracts:{multicall3:{address:"0xca11bde05977b397230ee197dce79d049dfbef42",blockCreated:11907934}}},{id:89,name:"Viction Testnet",network:"viction-testnet",nativeCurrency:{name:"Viction",symbol:"VIC",decimals:18},rpcUrls:{default:{http:["https://rpc-testnet.viction.xyz"]},public:{http:["https://rpc-testnet.viction.xyz"]}},blockExplorers:{default:{name:"VicScan Testnet",url:"https://testnet.vicscan.xyz"}},contracts:{multicall3:{address:"0xca11bde05977b397230ee197dce79d049dfbef42",blockCreated:11907934}}}],[function(e){return e.rpcUrls.public.http[0]?{chain:e,rpcUrls:e.rpcUrls.public}:null}]),X=(0,$._g)({autoConnect:!0,connectors:[new z({chains:K}),new L({chains:K,options:{appName:"Viction DApp Workshop"}}),new G({chains:K,options:{projectId:V.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID||"YOUR_WALLETCONNECT_PROJECT_ID"}}),new F._({chains:K,options:{name:"Injected",shimDisconnect:!0}})],publicClient:Y,webSocketPublicClient:Q});var J=r(59150);r(23434);let ee=r(83454).env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID||"YOUR_WALLETCONNECT_PROJECT_ID";function et(e){let{Component:t,pageProps:r}=e;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(O(),{children:[(0,k.jsx)("title",{children:"Viction DApp Workshop"}),(0,k.jsx)("meta",{name:"description",content:"A workshop for Solidity development on Viction"}),(0,k.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,k.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,k.jsx)($.eM,{config:X,children:(0,k.jsx)(t,{...r})})]})}window._web3modalInitialized||((0,J.OY)({wagmiConfig:X,projectId:ee,chains:K,enableAnalytics:!0,themeMode:"light"}),window._web3modalInitialized=!0)},23434:function(){},77663:function(e){!function(){var t={229:function(e){var t,r,i,n=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l=[],c=!1,u=-1;function d(){c&&i&&(c=!1,i.length?l=i.concat(l):u=-1,l.length&&h())}function h(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(i=l,l=[];++u<t;)i&&i[u].run();u=-1,t=l.length}i=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||c||s(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}},a=!0;try{t[e](o,o.exports,i),a=!1}finally{a&&delete r[e]}return o.exports}i.ab="//";var n=i(229);e.exports=n}()},9008:function(e,t,r){e.exports=r(23867)},80500:function(e){"use strict";e.exports=(e,t)=>{if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];let r=e.indexOf(t);return -1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},70610:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},53250:function(e,t,r){"use strict";var i=r(67294),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=i.useState,a=i.useEffect,s=i.useLayoutEffect,l=i.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!n(e,r)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),i=o({inst:{value:r,getSnapshot:t}}),n=i[0].inst,u=i[1];return s(function(){n.value=r,n.getSnapshot=t,c(n)&&u({inst:n})},[e,r,t]),a(function(){return c(n)&&u({inst:n}),e(function(){c(n)&&u({inst:n})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:u},50139:function(e,t,r){"use strict";var i=r(67294),n=r(61688),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useSyncExternalStore,s=i.useRef,l=i.useEffect,c=i.useMemo,u=i.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,i,n){var d=s(null);if(null===d.current){var h={hasValue:!1,value:null};d.current=h}else h=d.current;var f=a(e,(d=c(function(){function e(e){if(!l){if(l=!0,a=e,e=i(e),void 0!==n&&h.hasValue){var t=h.value;if(n(t,e))return s=t}return s=e}if(t=s,o(a,e))return t;var r=i(e);return void 0!==n&&n(t,r)?t:(a=e,s=r)}var a,s,l=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,i,n]))[0],d[1]);return l(function(){h.hasValue=!0,h.value=f},[f]),u(f),f}},61688:function(e,t,r){"use strict";e.exports=r(53250)},52798:function(e,t,r){"use strict";e.exports=r(50139)},35883:function(){},53516:function(e,t,r){"use strict";function i(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}r.d(t,{J:function(){return i}})},92219:function(e,t,r){"use strict";r.d(t,{_:function(){return h}});var i,n=r(57858),o=r(53516),a=r(75276),s=r(45775),l=r(39028),c=r(79578),u=r(3980),d=r(92106),h=class extends a.wR{constructor({chains:e,options:t}={}){let r={shimDisconnect:!0,getProvider(){if("undefined"==typeof window)return;let e=window.ethereum;return e?.providers&&e.providers.length>0?e.providers[0]:e},...t};super({chains:e,options:r}),this.id="injected",(0,a.Ko)(this,i,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,s.K)(e[0])})},this.onChainChanged=e=>{let t=(0,o.J)(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=async e=>{!(1013===e.code&&await this.getProvider()&&await this.getAccount())&&(this.emit("disconnect"),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))};let n=r.getProvider();if("string"==typeof r.name)this.name=r.name;else if(n){let e=function(e){if(!e)return"Injected";let t=e=>e.isApexWallet?"Apex Wallet":e.isAvalanche?"Core Wallet":e.isBackpack?"Backpack":e.isBifrost?"Bifrost Wallet":e.isBitKeep?"BitKeep":e.isBitski?"Bitski":e.isBlockWallet?"BlockWallet":e.isBraveWallet?"Brave Wallet":e.isCoin98?"Coin98 Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isDawn?"Dawn Wallet":e.isDefiant?"Defiant":e.isDesig?"Desig Wallet":e.isEnkrypt?"Enkrypt":e.isExodus?"Exodus":e.isFordefi?"Fordefi":e.isFrame?"Frame":e.isFrontier?"Frontier Wallet":e.isGamestop?"GameStop Wallet":e.isHaqqWallet?"HAQQ Wallet":e.isHyperPay?"HyperPay Wallet":e.isImToken?"ImToken":e.isHaloWallet?"Halo Wallet":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isNovaWallet?"Nova Wallet":e.isOkxWallet||e.isOKExWallet?"OKX Wallet":e.isOktoWallet?"Okto Wallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOneKey?"OneKey Wallet":e.isOpera?"Opera":e.isPhantom?"Phantom":e.isPortal?"Ripio Portal":e.isRabby?"Rabby Wallet":e.isRainbow?"Rainbow":e.isSafePal?"SafePal Wallet":e.isStatus?"Status":e.isSubWallet?"SubWallet":e.isTalisman?"Talisman":e.isTally?"Taho":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isTTWallet?"TTWallet":e.isXDEFI?"XDEFI Wallet":e.isZeal?"Zeal":e.isZerion?"Zerion":e.isMetaMask?"MetaMask":void 0;if(e.providers?.length){let r=new Set,i=1;for(let n of e.providers){let e=t(n);e||(e=`Unknown Wallet #${i}`,i+=1),r.add(e)}let n=[...r];return n.length?n:n[0]??"Injected"}return t(e)??"Injected"}(n);r.name?this.name=r.name(e):"string"==typeof e?this.name=e:this.name=e[0]}else this.name="Injected";this.ready=!!n}async connect({chainId:e}={}){try{let t=await this.getProvider();if(!t)throw new n.N;t.on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});let r=await t.request({method:"eth_requestAccounts"}),i=(0,s.K)(r[0]),o=await this.getChainId(),a=this.isChainUnsupported(o);return e&&o!==e&&(o=(await this.switchChain(e)).id,a=this.isChainUnsupported(o)),this.options.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:i,chain:{id:o,unsupported:a}}}catch(e){if(this.isUserRejectedRequestError(e))throw new l.ab(e);if(-32002===e.code)throw new l.pT(e);throw e}}async disconnect(){let e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))}async getAccount(){let e=await this.getProvider();if(!e)throw new n.N;let t=await e.request({method:"eth_accounts"});return(0,s.K)(t[0])}async getChainId(){let e=await this.getProvider();if(!e)throw new n.N;return e.request({method:"eth_chainId"}).then(o.J)}async getProvider(){let e=this.options.getProvider();return e&&(0,a.qx)(this,i,e),(0,a.ac)(this,i)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider(),this.getAccount()]),i=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,c.K)({account:r,chain:i,transport:(0,u.P)(t)})}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey))return!1;if(!await this.getProvider())throw new n.N;return!!await this.getAccount()}catch{return!1}}async switchChain(e){let t=await this.getProvider();if(!t)throw new n.N;let r=(0,d.eC)(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),new Promise(t=>this.on("change",({chain:r})=>{r?.id===e&&t()}))]),this.chains.find(t=>t.id===e)??{id:e,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(o){let i=this.chains.find(t=>t.id===e);if(!i)throw new n.B({chainId:e,connectorId:this.id});if(4902===o.code||o?.data?.originalError?.code===4902)try{if(await t.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:[i.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(i)}]}),await this.getChainId()!==e)throw new l.ab(Error("User rejected switch after adding network."));return i}catch(e){throw new l.ab(e)}if(this.isUserRejectedRequestError(o))throw new l.ab(o);throw new l.x3(o)}}async watchAsset({address:e,decimals:t=18,image:r,symbol:i}){let o=await this.getProvider();if(!o)throw new n.N;return o.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:r,symbol:i}}})}isUserRejectedRequestError(e){return 4001===e.code}};i=new WeakMap},57858:function(e,t,r){"use strict";r.d(t,{B:function(){return i},N:function(){return n}});var i=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured for connector "${t}".`),this.name="ChainNotConfiguredForConnectorError"}},n=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}}},75276:function(e,t,r){"use strict";r.d(t,{wR:function(){return d},Ko:function(){return l},ac:function(){return s},U9:function(){return u},qx:function(){return c}});var i=r(26729),n=r(66403);let o=(0,r(86164).a)({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0});var a=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},s=(e,t,r)=>(a(e,t,"read from private field"),r?r.call(e):t.get(e)),l=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},c=(e,t,r,i)=>(a(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r),u=(e,t,r)=>(a(e,t,"access private method"),r),d=class extends i{constructor({chains:e=[n.R,o],options:t}){super(),this.chains=e,this.options=t}getBlockExplorerUrls(e){let{default:t,...r}=e.blockExplorers??{};if(t)return[t.url,...Object.values(r).map(e=>e.url)]}isChainUnsupported(e){return!this.chains.some(t=>t.id===e)}setStorage(e){this.storage=e}}},63190:function(e,t,r){"use strict";r.d(t,{QB:function(){return tB},$j:function(){return t2},_g:function(){return t0},o6:function(){return tQ},vZ:function(){return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){let i,n;if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)&&Array.isArray(r)){if((i=t.length)!=r.length)return!1;for(n=i;0!=n--;)if(!e(t[n],r[n]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();let o=Object.keys(t);if((i=o.length)!==Object.keys(r).length)return!1;for(n=i;0!=n--;)if(!Object.prototype.hasOwnProperty.call(r,o[n]))return!1;for(n=i;0!=n--;){let i=o[n];if(i&&!e(t[i],r[i]))return!1}return!0}return t!=t&&r!=r}},zP:function(){return t3},EG:function(){return rn},RQ:function(){return rf},w6:function(){return rd},Lk:function(){return rh},D0:function(){return ro},Hy:function(){return ra},uV:function(){return t4},jr:function(){return t9},wp:function(){return tY},l:function(){return rs},If:function(){return rl},uH:function(){return rc},QC:function(){return ru},pC:function(){return t7},fq:function(){return re}});var i,n,o,a,s,l=r(92219),c=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},u=(e,t,r)=>(c(e,t,"read from private field"),r?r.call(e):t.get(e)),d=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},h=(e,t,r,i)=>(c(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r),f=(e,t,r)=>(c(e,t,"access private method"),r),p=r(16189),g=r(16693),m=r(7210),w=r(77799),b=r(47864),y=r(61836),v=r(92106),x=r(21746),C=r(62027),E=r(97405);function _(e,t){if(!(e instanceof C.G))return!1;let r=e.walk(e=>e instanceof E.Lu);return r instanceof E.Lu&&(!!(r.data?.errorName==="ResolverNotFound"||r.data?.errorName==="ResolverWildcardNotSupported"||r.reason?.includes("Wildcard on non-extended resolvers is not supported"))||"reverse"===t&&r.reason===x.$[50])}var S=r(57040),k=r(11187),A=r(56254),O=r(15102);function $(e){if(66!==e.length||0!==e.indexOf("[")||65!==e.indexOf("]"))return null;let t=`0x${e.slice(1,65)}`;return(0,O.v)(t)?t:null}function I(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,v.ci)(t);let r=e.split(".");for(let e=r.length-1;e>=0;e-=1){let i=$(r[e]),n=i?(0,k.O0)(i):(0,A.w)((0,k.qX)(r[e]),"bytes");t=(0,A.w)((0,S.zo)([t,n]),"bytes")}return(0,v.ci)(t)}function D(e){let t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);let r=new Uint8Array((0,k.qX)(t).byteLength+2),i=0,n=t.split(".");for(let e=0;e<n.length;e++){let t=(0,k.qX)(n[e]);if(t.byteLength>255){var o;t=(0,k.qX)((o=function(e){let t=new Uint8Array(32).fill(0);return e?$(e)||(0,A.w)((0,k.qX)(e)):(0,v.ci)(t)}(n[e]),`[${o.slice(2)}]`))}r[i]=t.length,r.set(t,i+1),i+=t.length+1}return r.byteLength!==i+1?r.slice(0,i+1):r}var P=r(93714),T=r(57412),R=r(39028);function N(e,{abi:t,address:r,args:i,docsPath:n,functionName:o,sender:a}){let{code:s,data:l,message:c,shortMessage:u}=e instanceof E.VQ?e:e instanceof C.G?e.walk(e=>"data"in e)||e.walk():{},d=e instanceof T.wb?new E.Dk({functionName:o}):[3,R.XS.code].includes(s)&&(l||c||u)?new E.Lu({abi:t,data:"object"==typeof l?l.data:l,functionName:o,message:u??c}):e;return new E.uq(d,{abi:t,args:i,contractAddress:r,docsPath:n,functionName:o,sender:a})}var M=r(61376);async function j(e,{abi:t,address:r,args:i,functionName:n,...o}){let a=(0,w.R)({abi:t,args:i,functionName:n});try{let{data:s}=await (0,P.s)(e,M.R,"call")({data:a,to:r,...o});return(0,m.k)({abi:t,args:i,functionName:n,data:s||"0x"})}catch(e){throw N(e,{abi:t,address:r,args:i,docsPath:"/docs/contract/readContract",functionName:n})}}async function U(e,{blockNumber:t,blockTag:r,coinType:i,name:n,universalResolverAddress:o}){let a=o;if(!a){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");a=(0,b.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let o=(0,w.R)({abi:g.X$,functionName:"addr",...null!=i?{args:[I(n),BigInt(i)]}:{args:[I(n)]}}),s=await (0,P.s)(e,j,"readContract")({address:a,abi:g.k3,functionName:"resolve",args:[(0,v.NC)(D(n)),o],blockNumber:t,blockTag:r});if("0x"===s[0])return null;let l=(0,m.k)({abi:g.X$,args:null!=i?[I(n),BigInt(i)]:void 0,functionName:"addr",data:s[0]});if("0x"===l||"0x00"===(0,y.f)(l))return null;return l}catch(e){if(_(e,"resolve"))return null;throw e}}class B extends C.G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class L extends C.G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class F extends C.G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class z extends C.G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}let W=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,H=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,Z=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,q=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function G(e){try{let t=await fetch(e,{method:"HEAD"});if(200===t.status){let e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){if("object"==typeof t&&void 0!==t.response||!globalThis.hasOwnProperty("Image"))return!1;return new Promise(t=>{let r=new Image;r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},r.src=e})}}function V(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function K({uri:e,gatewayUrls:t}){let r=Z.test(e);if(r)return{uri:e,isOnChain:!0,isEncoded:r};let i=V(t?.ipfs,"https://ipfs.io"),n=V(t?.arweave,"https://arweave.net"),o=e.match(W),{protocol:a,subpath:s,target:l,subtarget:c=""}=o?.groups||{},u="ipns:/"===a||"ipns/"===s,d="ipfs:/"===a||"ipfs/"===s||H.test(e);if(e.startsWith("http")&&!u&&!d){let r=e;return t?.arweave&&(r=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:r,isOnChain:!1,isEncoded:!1}}if((u||d)&&l)return{uri:`${i}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if("ar:/"===a&&l)return{uri:`${n}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let h=e.replace(q,"");if(h.startsWith("<svg")&&(h=`data:image/svg+xml;base64,${btoa(h)}`),h.startsWith("data:")||h.startsWith("{"))return{uri:h,isOnChain:!0,isEncoded:!1};throw new F({uri:e})}function Y(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new B({data:e});return e.image||e.image_url||e.image_data}async function Q({gatewayUrls:e,uri:t}){try{let r=await fetch(t).then(e=>e.json());return await X({gatewayUrls:e,uri:Y(r)})}catch{throw new F({uri:t})}}async function X({gatewayUrls:e,uri:t}){let{uri:r,isOnChain:i}=K({uri:t,gatewayUrls:e});if(i||await G(r))return r;throw new F({uri:t})}async function J(e,{nft:t}){if("erc721"===t.namespace)return j(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return j(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new z({namespace:t.namespace})}async function ee(e,{gatewayUrls:t,record:r}){return/eip155:/i.test(r)?et(e,{gatewayUrls:t,record:r}):X({uri:r,gatewayUrls:t})}async function et(e,{gatewayUrls:t,record:r}){let i=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[r,i,n]=t.split("/"),[o,a]=r.split(":"),[s,l]=i.split(":");if(!o||"eip155"!==o.toLowerCase())throw new L({reason:"Only EIP-155 supported"});if(!a)throw new L({reason:"Chain ID not found"});if(!l)throw new L({reason:"Contract address not found"});if(!n)throw new L({reason:"Token ID not found"});if(!s)throw new L({reason:"ERC namespace not found"});return{chainID:parseInt(a),namespace:s.toLowerCase(),contractAddress:l,tokenID:n}}(r),{uri:n,isOnChain:o,isEncoded:a}=K({uri:await J(e,{nft:i}),gatewayUrls:t});if(o&&(n.includes("data:application/json;base64,")||n.startsWith("{")))return X({uri:Y(JSON.parse(a?atob(n.replace("data:application/json;base64,","")):n)),gatewayUrls:t});let s=i.tokenID;return"erc1155"===i.namespace&&(s=s.replace("0x","").padStart(64,"0")),Q({gatewayUrls:t,uri:n.replace(/(?:0x)?{id}/,s)})}async function er(e,{blockNumber:t,blockTag:r,name:i,key:n,universalResolverAddress:o}){let a=o;if(!a){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");a=(0,b.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let o=await (0,P.s)(e,j,"readContract")({address:a,abi:g.k3,functionName:"resolve",args:[(0,v.NC)(D(i)),(0,w.R)({abi:g.nZ,functionName:"text",args:[I(i),n]})],blockNumber:t,blockTag:r});if("0x"===o[0])return null;let s=(0,m.k)({abi:g.nZ,functionName:"text",data:o[0]});return""===s?null:s}catch(e){if(_(e,"resolve"))return null;throw e}}async function ei(e,{blockNumber:t,blockTag:r,gatewayUrls:i,name:n,universalResolverAddress:o}){let a=await (0,P.s)(e,er,"getEnsText")({blockNumber:t,blockTag:r,key:"avatar",name:n,universalResolverAddress:o});if(!a)return null;try{return await ee(e,{record:a,gatewayUrls:i})}catch{return null}}async function en(e,{address:t,blockNumber:r,blockTag:i,universalResolverAddress:n}){let o=n;if(!o){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");o=(0,b.L)({blockNumber:r,chain:e.chain,contract:"ensUniversalResolver"})}let a=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let[n,s]=await (0,P.s)(e,j,"readContract")({address:o,abi:g.du,functionName:"reverse",args:[(0,v.NC)(D(a))],blockNumber:r,blockTag:i});if(t.toLowerCase()!==s.toLowerCase())return null;return n}catch(e){if(_(e,"reverse"))return null;throw e}}async function eo(e,{blockNumber:t,blockTag:r,name:i,universalResolverAddress:n}){let o=n;if(!o){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");o=(0,b.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}let[a]=await (0,P.s)(e,j,"readContract")({address:o,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,v.NC)(D(i))],blockNumber:t,blockTag:r});return a}function ea(e,{method:t}){let r={};return"fallback"===e.transport.type&&e.transport.onResponse?.(({method:e,response:i,status:n,transport:o})=>{"success"===n&&t===e&&(r[i]=o.request)}),t=>r[t]||e.request}async function es(e){let t=ea(e,{method:"eth_newBlockFilter"}),r=await e.request({method:"eth_newBlockFilter"});return{id:r,request:t(r),type:"block"}}class el extends C.G{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}var ec=r(74059),eu=r(45444),ed=r(80522),eh=r(40840);function ef({abi:e,eventName:t,args:r}){let i=e[0];if(t&&!(i=(0,eh.mE)({abi:e,args:r,name:t})))throw new T.mv(t,{docsPath:"/docs/contract/encodeEventTopics"});if("event"!==i.type)throw new T.mv(void 0,{docsPath:"/docs/contract/encodeEventTopics"});let n=(0,ed.t)(i),o=(0,ec.e)(n),a=[];if(r&&"inputs"in i){let e=i.inputs?.filter(e=>"indexed"in e&&e.indexed),t=Array.isArray(r)?r:Object.values(r).length>0?e?.map(e=>r[e.name])??[]:[];t.length>0&&(a=e?.map((e,r)=>Array.isArray(t[r])?t[r].map((i,n)=>ep({param:e,value:t[r][n]})):t[r]?ep({param:e,value:t[r]}):null)??[])}return[o,...a]}function ep({param:e,value:t}){if("string"===e.type||"bytes"===e.type)return(0,A.w)((0,k.O0)(t));if("tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))throw new el(e.type);return(0,eu.E)([e],[t])}async function eg(e,{address:t,abi:r,args:i,eventName:n,fromBlock:o,strict:a,toBlock:s}){let l=ea(e,{method:"eth_newFilter"}),c=n?ef({abi:r,args:i,eventName:n}):void 0,u=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof o?(0,v.eC)(o):o,toBlock:"bigint"==typeof s?(0,v.eC)(s):s,topics:c}]});return{abi:r,args:i,eventName:n,id:u,request:l(u),strict:a,type:"event"}}async function em(e,{address:t,args:r,event:i,events:n,fromBlock:o,strict:a,toBlock:s}={}){let l=n??(i?[i]:void 0),c=ea(e,{method:"eth_newFilter"}),u=[];l&&(u=[l.flatMap(e=>ef({abi:[e],eventName:e.name,args:r}))],i&&(u=u[0]));let d=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof o?(0,v.eC)(o):o,toBlock:"bigint"==typeof s?(0,v.eC)(s):s,...u.length?{topics:u}:{}}]});return{abi:l,args:r,eventName:i?i.name:void 0,fromBlock:o,id:d,request:c(d),strict:a,toBlock:s,type:"event"}}async function ew(e){let t=ea(e,{method:"eth_newPendingTransactionFilter"}),r=await e.request({method:"eth_newPendingTransactionFilter"});return{id:r,request:t(r),type:"transaction"}}var eb=r(14503),ey=r(81841);async function ev(e,{abi:t,address:r,args:i,functionName:n,...o}){let a=(0,w.R)({abi:t,args:i,functionName:n});try{return await (0,P.s)(e,ey.Q,"estimateGas")({data:a,to:r,...o})}catch(a){let e=o.account?(0,eb.T)(o.account):void 0;throw N(a,{abi:t,address:r,args:i,docsPath:"/docs/contract/estimateContractGas",functionName:n,sender:e?.address})}}var ex=r(43861),eC=r(79379);async function eE(e,{address:t,blockNumber:r,blockTag:i="latest"}){let n=r?(0,v.eC)(r):void 0;return BigInt(await e.request({method:"eth_getBalance",params:[t,n||i]}))}var e_=r(75016);let eS=new Map,ek=new Map;async function eA(e,{cacheKey:t,cacheTime:r=1/0}){let i=function(e){let t=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:r=>t.set(e,r)}),r=t(e,eS),i=t(e,ek);return{clear:()=>{r.clear(),i.clear()},promise:r,response:i}}(t),n=i.response.get();if(n&&r>0&&new Date().getTime()-n.created.getTime()<r)return n.data;let o=i.promise.get();o||(o=e(),i.promise.set(o));try{let e=await o;return i.response.set({created:new Date,data:e}),e}finally{i.promise.clear()}}let eO=e=>`blockNumber.${e}`;async function e$(e,{cacheTime:t=e.cacheTime,maxAge:r}={}){return BigInt(await eA(()=>e.request({method:"eth_blockNumber"}),{cacheKey:eO(e.uid),cacheTime:r??t}))}var eI=r(95946);async function eD(e,{blockHash:t,blockNumber:r,blockTag:i="latest"}={}){let n;let o=void 0!==r?(0,v.eC)(r):void 0;return n=t?await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):await e.request({method:"eth_getBlockTransactionCountByNumber",params:[o||i]}),(0,eI.ly)(n)}async function eP(e,{address:t,blockNumber:r,blockTag:i="latest"}){let n=void 0!==r?(0,v.eC)(r):void 0,o=await e.request({method:"eth_getCode",params:[t,n||i]});if("0x"!==o)return o}var eT=r(79524),eR=r(34450);let eN="/docs/contract/decodeEventLog";function eM({abi:e,data:t,strict:r,topics:i}){let n=r??!0,[o,...a]=i;if(!o)throw new T.FM({docsPath:eN});let s=e.find(e=>"event"===e.type&&o===(0,ec.e)((0,ed.t)(e)));if(!(s&&"name"in s)||"event"!==s.type)throw new T.lC(o,{docsPath:eN});let{name:l,inputs:c}=s,u=c?.some(e=>!("name"in e&&e.name)),d=u?[]:{},h=c.filter(e=>"indexed"in e&&e.indexed);for(let e=0;e<h.length;e++){let t=h[e],r=a[e];if(!r)throw new T.Gy({abiItem:s,param:t});d[t.name||e]=function({param:e,value:t}){return"string"===e.type||"bytes"===e.type||"tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/)?t:((0,eR.r)([e],t)||[])[0]}({param:t,value:r})}let f=c.filter(e=>!("indexed"in e&&e.indexed));if(f.length>0){if(t&&"0x"!==t)try{let e=(0,eR.r)(f,t);if(e){if(u)d=[...d,...e];else for(let t=0;t<f.length;t++)d[f[t].name]=e[t]}}catch(e){if(n){if(e instanceof T.xB)throw new T.SM({abiItem:s,data:e.data,params:e.params,size:e.size});throw e}}else if(n)throw new T.SM({abiItem:s,data:"0x",params:f,size:0})}return{eventName:l,args:Object.values(d).length>0?d:void 0}}function ej(e,{args:t,eventName:r}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...r?{args:t,eventName:r}:{}}}async function eU(e,{address:t,blockHash:r,fromBlock:i,toBlock:n,event:o,events:a,args:s,strict:l}={}){let c=l??!1,u=a??(o?[o]:void 0),d=[];return u&&(d=[u.flatMap(e=>ef({abi:[e],eventName:e.name,args:s}))],o&&(d=d[0])),(r?await e.request({method:"eth_getLogs",params:[{address:t,topics:d,blockHash:r}]}):await e.request({method:"eth_getLogs",params:[{address:t,topics:d,fromBlock:"bigint"==typeof i?(0,v.eC)(i):i,toBlock:"bigint"==typeof n?(0,v.eC)(n):n}]})).map(e=>{try{let{eventName:t,args:r}=u?eM({abi:u,data:e.data,topics:e.topics,strict:c}):{eventName:void 0,args:void 0};return ej(e,{args:r,eventName:t})}catch(i){let t,r;if(i instanceof T.SM||i instanceof T.Gy){if(c)return;t=i.abiItem.name,r=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return ej(e,{args:r?[]:{},eventName:t})}}).filter(Boolean)}async function eB(e,{abi:t,address:r,args:i,blockHash:n,eventName:o,fromBlock:a,toBlock:s,strict:l}){let c=o?(0,eh.mE)({abi:t,name:o}):void 0,u=c?void 0:t.filter(e=>"event"===e.type);return(0,P.s)(e,eU,"getLogs")({address:r,args:i,blockHash:n,event:c,events:u,fromBlock:a,toBlock:s,strict:l})}async function eL(e,{blockCount:t,blockNumber:r,blockTag:i="latest",rewardPercentiles:n}){var o;let a=r?(0,v.eC)(r):void 0;return{baseFeePerGas:(o=await e.request({method:"eth_feeHistory",params:[(0,v.eC)(t),a||i,n]})).baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:o.gasUsedRatio,oldestBlock:BigInt(o.oldestBlock),reward:o.reward?.map(e=>e.map(e=>BigInt(e)))}}async function eF(e,{filter:t}){let r="strict"in t&&t.strict;return(await t.request({method:"eth_getFilterChanges",params:[t.id]})).map(e=>{if("string"==typeof e)return e;try{let{eventName:i,args:n}="abi"in t&&t.abi?eM({abi:t.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return ej(e,{args:n,eventName:i})}catch(n){let r,i;if(n instanceof T.SM||n instanceof T.Gy){if("strict"in t&&t.strict)return;r=n.abiItem.name,i=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return ej(e,{args:i?[]:{},eventName:r})}}).filter(Boolean)}async function ez(e,{filter:t}){let r=t.strict??!1;return(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map(e=>{try{let{eventName:i,args:n}="abi"in t&&t.abi?eM({abi:t.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return ej(e,{args:n,eventName:i})}catch(n){let r,i;if(n instanceof T.SM||n instanceof T.Gy){if("strict"in t&&t.strict)return;r=n.abiItem.name,i=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return ej(e,{args:i?[]:{},eventName:r})}}).filter(Boolean)}var eW=r(24453);async function eH(e,{address:t,blockNumber:r,blockTag:i,storageKeys:n}){var o;let a=void 0!==r?(0,v.eC)(r):void 0;return{...o=await e.request({method:"eth_getProof",params:[t,n,a||(i??"latest")]}),balance:o.balance?BigInt(o.balance):void 0,nonce:o.nonce?(0,eI.ly)(o.nonce):void 0,storageProof:o.storageProof?o.storageProof.map(e=>({...e,value:BigInt(e.value)})):void 0}}async function eZ(e,{address:t,blockNumber:r,blockTag:i="latest",slot:n}){let o=void 0!==r?(0,v.eC)(r):void 0;return await e.request({method:"eth_getStorageAt",params:[t,n,o||i]})}var eq=r(33639),eG=r(6073);async function eV(e,{blockHash:t,blockNumber:r,blockTag:i,hash:n,index:o}){let a=i||"latest",s=void 0!==r?(0,v.eC)(r):void 0,l=null;if(n?l=await e.request({method:"eth_getTransactionByHash",params:[n]}):t?l=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,(0,v.eC)(o)]}):(s||a)&&(l=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[s||a,(0,v.eC)(o)]})),!l)throw new eq.Bh({blockHash:t,blockNumber:r,blockTag:a,hash:n,index:o});return(e.chain?.formatters?.transaction?.format||eG.Tr)(l)}async function eK(e,{hash:t,transactionReceipt:r}){let[i,n]=await Promise.all([(0,P.s)(e,e$,"getBlockNumber")({}),t?(0,P.s)(e,eV,"getBlockNumber")({hash:t}):void 0]),o=r?.blockNumber||n?.blockNumber;return o?i-o+1n:0n}var eY=r(86162);let eQ={"0x0":"reverted","0x1":"success"};async function eX(e,{hash:t}){let r=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!r)throw new eq.Yb({hash:t});return(e.chain?.formatters?.transactionReceipt?.format||function(e){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(e=>ej(e)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,eI.ly)(e.transactionIndex):null,status:e.status?eQ[e.status]:null,type:e.type?eG.c8[e.type]||e.type:null}})(r)}async function eJ(e,t){let{allowFailure:r=!0,batchSize:i,blockNumber:n,blockTag:o,contracts:a,multicallAddress:s}=t,l=i??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024),c=s;if(!c){if(!e.chain)throw Error("client chain not configured. multicallAddress is required.");c=(0,b.L)({blockNumber:n,chain:e.chain,contract:"multicall3"})}let u=[[]],d=0,h=0;for(let e=0;e<a.length;e++){let{abi:t,address:i,args:n,functionName:o}=a[e];try{let e=(0,w.R)({abi:t,args:n,functionName:o});h+=(e.length-2)/2,l>0&&h>l&&u[d].length>0&&(d++,h=(e.length-2)/2,u[d]=[]),u[d]=[...u[d],{allowFailure:!0,callData:e,target:i}]}catch(a){let e=N(a,{abi:t,address:i,args:n,docsPath:"/docs/contract/multicall",functionName:o});if(!r)throw e;u[d]=[...u[d],{allowFailure:!0,callData:"0x",target:i}]}}let f=await Promise.allSettled(u.map(t=>(0,P.s)(e,j,"readContract")({abi:g.F8,address:c,args:[t],blockNumber:n,blockTag:o,functionName:"aggregate3"}))),p=[];for(let e=0;e<f.length;e++){let t=f[e];if("rejected"===t.status){if(!r)throw t.reason;for(let r=0;r<u[e].length;r++)p.push({status:"failure",error:t.reason,result:void 0});continue}let i=t.value;for(let t=0;t<i.length;t++){let{returnData:n,success:o}=i[t],{callData:s}=u[e][t],{abi:l,address:c,functionName:d,args:h}=a[p.length];try{if("0x"===s)throw new T.wb;if(!o)throw new E.VQ({data:n});let e=(0,m.k)({abi:l,args:h,data:n,functionName:d});p.push(r?{result:e,status:"success"}:e)}catch(t){let e=N(t,{abi:l,address:c,args:h,docsPath:"/docs/contract/multicall",functionName:d});if(!r)throw e;p.push({error:e,result:void 0,status:"failure"})}}}if(p.length!==a.length)throw new C.G("multicall results mismatch");return p}async function e0(e,{abi:t,address:r,args:i,dataSuffix:n,functionName:o,...a}){let s=a.account?(0,eb.T)(a.account):void 0,l=(0,w.R)({abi:t,args:i,functionName:o});try{let{data:s}=await (0,P.s)(e,M.R,"call")({batch:!1,data:`${l}${n?n.replace("0x",""):""}`,to:r,...a});return{result:(0,m.k)({abi:t,args:i,functionName:o,data:s||"0x"}),request:{abi:t,address:r,args:i,dataSuffix:n,functionName:o,...a}}}catch(e){throw N(e,{abi:t,address:r,args:i,docsPath:"/docs/contract/simulateContract",functionName:o,sender:s?.address})}}async function e1(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}BigInt(0),BigInt(1),BigInt(2);var e2=r(30286);async function e3(e,{address:t,hash:r,signature:i,...n}){let o=(0,O.v)(i)?i:(0,v.NC)(i);try{let{data:i}=await (0,P.s)(e,M.R,"call")({data:(0,e2.w)({abi:g.$o,args:[t,r,o],bytecode:"0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"}),...n});return function(e,t){let r=(0,O.v)(e)?(0,k.O0)(e):e;return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(r,(0,O.v)("0x1")?(0,k.O0)("0x1"):"0x1")}(i??"0x0","0x1")}catch(e){if(e instanceof E.cg)return!1;throw e}}async function e5(e,{address:t,message:r,signature:i,...n}){return e3(e,{address:t,hash:function(e,t){let r="string"==typeof e?(0,k.qX)(e):e.raw instanceof Uint8Array?e.raw:(0,k.O0)(e.raw),i=(0,k.qX)(`\x19Ethereum Signed Message:
${r.length}`);return(0,A.w)((0,S.zo)([i,r]),void 0)}(r),signature:i,...n})}var e6=r(71352);function e4({data:e,primaryType:t,types:r}){let i=function e({data:t,primaryType:r,types:i}){let n=[{type:"bytes32"}],o=[function({primaryType:e,types:t}){let r=(0,v.NC)(function({primaryType:e,types:t}){let r="",i=function e({primaryType:t,types:r},i=new Set){let n=t.match(/^\w*/u),o=n?.[0];if(i.has(o)||void 0===r[o])return i;for(let t of(i.add(o),r[o]))e({primaryType:t.type,types:r},i);return i}({primaryType:e,types:t});for(let n of(i.delete(e),[e,...Array.from(i).sort()]))r+=`${n}(${t[n].map(({name:e,type:t})=>`${t} ${e}`).join(",")})`;return r}({primaryType:e,types:t}));return(0,A.w)(r)}({primaryType:r,types:i})];for(let a of i[r]){let[r,s]=function t({types:r,name:i,type:n,value:o}){if(void 0!==r[n])return[{type:"bytes32"},(0,A.w)(e({data:o,primaryType:n,types:r}))];if("bytes"===n){let e=o.length%2?"0":"";return o=`0x${e+o.slice(2)}`,[{type:"bytes32"},(0,A.w)(o)]}if("string"===n)return[{type:"bytes32"},(0,A.w)((0,v.NC)(o))];if(n.lastIndexOf("]")===n.length-1){let e=n.slice(0,n.lastIndexOf("[")),a=o.map(n=>t({name:i,type:e,types:r,value:n}));return[{type:"bytes32"},(0,A.w)((0,eu.E)(a.map(([e])=>e),a.map(([,e])=>e)))]}return[{type:n},o]}({types:i,name:a.name,type:a.type,value:t[a.name]});n.push(r),o.push(s)}return(0,eu.E)(n,o)}({data:e,primaryType:t,types:r});return(0,A.w)(i)}async function e8(e,{address:t,signature:r,message:i,primaryType:n,types:o,domain:a,...s}){return e3(e,{address:t,hash:function({domain:e,message:t,primaryType:r,types:i}){let n=void 0===e?{}:e,o={EIP712Domain:(0,e6.cj)({domain:n}),...i};(0,e6.iC)({domain:n,message:t,primaryType:r,types:o});let a=["0x1901"];return n&&a.push(function({domain:e,types:t}){return e4({data:e,primaryType:"EIP712Domain",types:t})}({domain:n,types:o})),"EIP712Domain"!==r&&a.push(e4({data:t,primaryType:r,types:o})),(0,A.w)((0,S.zo)(a))}({message:i,primaryType:n,types:o,domain:a}),signature:r,...s})}var e9=r(79814);let e7=new Map,te=new Map,tt=0;function tr(e,t,r){let i=++tt,n=()=>e7.get(e)||[],o=()=>{let t=n();e7.set(e,t.filter(e=>e.id!==i))},a=()=>{let t=te.get(e);1===n().length&&t&&t(),o()},s=n();if(e7.set(e,[...s,{id:i,fns:t}]),s&&s.length>0)return a;let l={};for(let e in t)l[e]=(...t)=>{let r=n();if(0!==r.length)for(let i of r)i.fns[e]?.(...t)};let c=r(l);return"function"==typeof c&&te.set(e,c),a}var ti=r(7760),tn=r(96070),to=r(62914);function ta(e,{emitOnBegin:t,initialWaitTime:r,interval:i}){let n=!0,o=()=>n=!1;return(async()=>{let a;t&&(a=await e({unpoll:o}));let s=await r?.(a)??i;await (0,to.D)(s);let l=async()=>{n&&(await e({unpoll:o}),await (0,to.D)(i),l())};l()})(),o}function ts(e,{emitOnBegin:t=!1,emitMissed:r=!1,onBlockNumber:i,onError:n,poll:o,pollingInterval:a=e.pollingInterval}){let s,l,c;return(void 0!==o?o:"webSocket"!==e.transport.type)?tr((0,tn.P)(["watchBlockNumber",e.uid,t,r,a]),{onBlockNumber:i,onError:n},i=>ta(async()=>{try{let t=await (0,P.s)(e,e$,"getBlockNumber")({cacheTime:0});if(s){if(t===s)return;if(t-s>1&&r)for(let e=s+1n;e<t;e++)i.onBlockNumber(e,s),s=e}(!s||t>s)&&(i.onBlockNumber(t,s),s=t)}catch(e){i.onError?.(e)}},{emitOnBegin:t,interval:a})):(l=!0,c=()=>l=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newHeads"],onData(e){if(!l)return;let t=(0,eI.y_)(e.result?.number);i(t,s),s=t},onError(e){n?.(e)}});c=t,l||c()}catch(e){n?.(e)}})(),c)}async function tl(e,{confirmations:t=1,hash:r,onReplaced:i,pollingInterval:n=e.pollingInterval,timeout:o}){let a,s,l;let c=(0,tn.P)(["waitForTransactionReceipt",e.uid,r]),u=!1;return new Promise((d,h)=>{o&&setTimeout(()=>h(new eq.mc({hash:r})),o);let f=tr(c,{onReplaced:i,resolve:d,reject:h},i=>{let o=(0,P.s)(e,ts,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:n,async onBlockNumber(n){if(u)return;let c=n,d=e=>{o(),e(),f()};try{if(l){if(t>1&&(!l.blockNumber||c-l.blockNumber+1n<t))return;d(()=>i.resolve(l));return}if(a||(u=!0,await (0,ti.J)(async()=>{(a=await (0,P.s)(e,eV,"getTransaction")({hash:r})).blockNumber&&(c=a.blockNumber)},{delay:({count:e})=>200*~~(1<<e),retryCount:6}),u=!1),l=await (0,P.s)(e,eX,"getTransactionReceipt")({hash:r}),t>1&&(!l.blockNumber||c-l.blockNumber+1n<t))return;d(()=>i.resolve(l))}catch(r){if(a&&(r instanceof eq.Bh||r instanceof eq.Yb))try{s=a,u=!0;let r=await (0,ti.J)(()=>(0,P.s)(e,e_.Q,"getBlock")({blockNumber:c,includeTransactions:!0}),{delay:({count:e})=>200*~~(1<<e),retryCount:6,shouldRetry:({error:e})=>e instanceof e9.f});u=!1;let n=r.transactions.find(({from:e,nonce:t})=>e===s.from&&t===s.nonce);if(!n||(l=await (0,P.s)(e,eX,"getTransactionReceipt")({hash:n.hash}),t>1&&(!l.blockNumber||c-l.blockNumber+1n<t)))return;let o="replaced";n.to===s.to&&n.value===s.value?o="repriced":n.from===n.to&&0n===n.value&&(o="cancelled"),d(()=>{i.onReplaced?.({reason:o,replacedTransaction:s,transaction:n,transactionReceipt:l}),i.resolve(l)})}catch(e){d(()=>i.reject(e))}else d(()=>i.reject(r))}}})})})}var tc=r(43310),tu=r(57331),td=r(99238);function th(e){return{call:t=>(0,M.R)(e,t),createBlockFilter:()=>es(e),createContractEventFilter:t=>eg(e,t),createEventFilter:t=>em(e,t),createPendingTransactionFilter:()=>ew(e),estimateContractGas:t=>ev(e,t),estimateGas:t=>(0,ey.Q)(e,t),getBalance:t=>eE(e,t),getBlock:t=>(0,e_.Q)(e,t),getBlockNumber:t=>e$(e,t),getBlockTransactionCount:t=>eD(e,t),getBytecode:t=>eP(e,t),getChainId:()=>(0,eT.L)(e),getContractEvents:t=>eB(e,t),getEnsAddress:t=>U(e,t),getEnsAvatar:t=>ei(e,t),getEnsName:t=>en(e,t),getEnsResolver:t=>eo(e,t),getEnsText:t=>er(e,t),getFeeHistory:t=>eL(e,t),estimateFeesPerGas:t=>(0,ex.X)(e,t),getFilterChanges:t=>eF(e,t),getFilterLogs:t=>ez(e,t),getGasPrice:()=>(0,eW.o)(e),getLogs:t=>eU(e,t),getProof:t=>eH(e,t),estimateMaxPriorityFeePerGas:t=>(0,eC._)(e,t),getStorageAt:t=>eZ(e,t),getTransaction:t=>eV(e,t),getTransactionConfirmations:t=>eK(e,t),getTransactionCount:t=>(0,eY.K)(e,t),getTransactionReceipt:t=>eX(e,t),multicall:t=>eJ(e,t),prepareTransactionRequest:t=>(0,tu.Z)(e,t),readContract:t=>j(e,t),sendRawTransaction:t=>(0,td.p)(e,t),simulateContract:t=>e0(e,t),verifyMessage:t=>e5(e,t),verifyTypedData:t=>e8(e,t),uninstallFilter:t=>e1(e,t),waitForTransactionReceipt:t=>tl(e,t),watchBlocks:t=>(function(e,{blockTag:t="latest",emitMissed:r=!1,emitOnBegin:i=!1,onBlock:n,onError:o,includeTransactions:a,poll:s,pollingInterval:l=e.pollingInterval}){let c,u,d;let h=void 0!==s?s:"webSocket"!==e.transport.type,f=a??!1;return h?tr((0,tn.P)(["watchBlocks",e.uid,r,i,f,l]),{onBlock:n,onError:o},n=>ta(async()=>{try{let i=await (0,P.s)(e,e_.Q,"getBlock")({blockTag:t,includeTransactions:f});if(i.number&&c?.number){if(i.number===c.number)return;if(i.number-c.number>1&&r)for(let t=c?.number+1n;t<i.number;t++){let r=await (0,P.s)(e,e_.Q,"getBlock")({blockNumber:t,includeTransactions:f});n.onBlock(r,c),c=r}}(!c?.number||"pending"===t&&!i?.number||i.number&&i.number>c.number)&&(n.onBlock(i,c),c=i)}catch(e){n.onError?.(e)}},{emitOnBegin:i,interval:l})):(u=!0,d=()=>u=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newHeads"],onData(t){if(!u)return;let r=(e.chain?.formatters?.block?.format||tc.Z)(t.result);n(r,c),c=r},onError(e){o?.(e)}});d=t,u||d()}catch(e){o?.(e)}})(),d)})(e,t),watchBlockNumber:t=>ts(e,t),watchContractEvent:t=>(function(e,{abi:t,address:r,args:i,batch:n=!0,eventName:o,onError:a,onLogs:s,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){let d,h;return(void 0!==l?l:"webSocket"!==e.transport.type)?(()=>{let l=(0,tn.P)(["watchContractEvent",r,i,n,e.uid,o,c]),d=u??!1;return tr(l,{onLogs:s,onError:a},a=>{let s,l;let u=!1,h=ta(async()=>{if(!u){try{l=await (0,P.s)(e,eg,"createContractEventFilter")({abi:t,address:r,args:i,eventName:o,strict:d})}catch{}u=!0;return}try{let c;if(l)c=await (0,P.s)(e,eF,"getFilterChanges")({filter:l});else{let n=await (0,P.s)(e,e$,"getBlockNumber")({});c=s&&s!==n?await (0,P.s)(e,eB,"getContractEvents")({abi:t,address:r,args:i,eventName:o,fromBlock:s+1n,toBlock:n,strict:d}):[],s=n}if(0===c.length)return;if(n)a.onLogs(c);else for(let e of c)a.onLogs([e])}catch(e){l&&e instanceof R.yR&&(u=!1),a.onError?.(e)}},{emitOnBegin:!0,interval:c});return async()=>{l&&await (0,P.s)(e,e1,"uninstallFilter")({filter:l}),h()}})})():(d=!0,h=()=>d=!1,(async()=>{try{let n=o?ef({abi:t,eventName:o,args:i}):[],{unsubscribe:l}=await e.transport.subscribe({params:["logs",{address:r,topics:n}],onData(e){if(!d)return;let r=e.result;try{let{eventName:e,args:i}=eM({abi:t,data:r.data,topics:r.topics,strict:u}),n=ej(r,{args:i,eventName:e});s([n])}catch(n){let e,t;if(n instanceof T.SM||n instanceof T.Gy){if(u)return;e=n.abiItem.name,t=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let i=ej(r,{args:t?[]:{},eventName:e});s([i])}},onError(e){a?.(e)}});h=l,d||h()}catch(e){a?.(e)}})(),h)})(e,t),watchEvent:t=>(function(e,{address:t,args:r,batch:i=!0,event:n,events:o,onError:a,onLogs:s,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){let d,h;let f=void 0!==l?l:"webSocket"!==e.transport.type,p=u??!1;return f?tr((0,tn.P)(["watchEvent",t,r,i,e.uid,n,c]),{onLogs:s,onError:a},a=>{let s,l;let u=!1,d=ta(async()=>{if(!u){try{l=await (0,P.s)(e,em,"createEventFilter")({address:t,args:r,event:n,events:o,strict:p})}catch{}u=!0;return}try{let c;if(l)c=await (0,P.s)(e,eF,"getFilterChanges")({filter:l});else{let i=await (0,P.s)(e,e$,"getBlockNumber")({});c=s&&s!==i?await (0,P.s)(e,eU,"getLogs")({address:t,args:r,event:n,events:o,fromBlock:s+1n,toBlock:i}):[],s=i}if(0===c.length)return;if(i)a.onLogs(c);else for(let e of c)a.onLogs([e])}catch(e){l&&e instanceof R.yR&&(u=!1),a.onError?.(e)}},{emitOnBegin:!0,interval:c});return async()=>{l&&await (0,P.s)(e,e1,"uninstallFilter")({filter:l}),d()}}):(d=!0,h=()=>d=!1,(async()=>{try{let i=o??(n?[n]:void 0),l=[];i&&(l=[i.flatMap(e=>ef({abi:[e],eventName:e.name,args:r}))],n&&(l=l[0]));let{unsubscribe:c}=await e.transport.subscribe({params:["logs",{address:t,topics:l}],onData(e){if(!d)return;let t=e.result;try{let{eventName:e,args:r}=eM({abi:i,data:t.data,topics:t.topics,strict:p}),n=ej(t,{args:r,eventName:e});s([n])}catch(n){let e,r;if(n instanceof T.SM||n instanceof T.Gy){if(u)return;e=n.abiItem.name,r=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let i=ej(t,{args:r?[]:{},eventName:e});s([i])}},onError(e){a?.(e)}});h=c,d||h()}catch(e){a?.(e)}})(),h)})(e,t),watchPendingTransactions:t=>(function(e,{batch:t=!0,onError:r,onTransactions:i,poll:n,pollingInterval:o=e.pollingInterval}){let a,s;return(void 0!==n?n:"webSocket"!==e.transport.type)?tr((0,tn.P)(["watchPendingTransactions",e.uid,t,o]),{onTransactions:i,onError:r},r=>{let i;let n=ta(async()=>{try{if(!i)try{i=await (0,P.s)(e,ew,"createPendingTransactionFilter")({});return}catch(e){throw n(),e}let o=await (0,P.s)(e,eF,"getFilterChanges")({filter:i});if(0===o.length)return;if(t)r.onTransactions(o);else for(let e of o)r.onTransactions([e])}catch(e){r.onError?.(e)}},{emitOnBegin:!0,interval:o});return async()=>{i&&await (0,P.s)(e,e1,"uninstallFilter")({filter:i}),n()}}):(a=!0,s=()=>a=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newPendingTransactions"],onData(e){if(!a)return;let t=e.result;i([t])},onError(e){r?.(e)}});s=t,a||s()}catch(e){r?.(e)}})(),s)})(e,t)}}function tf(e){let{key:t="public",name:r="Public Client"}=e;return(0,p.e)({...e,key:t,name:r,type:"publicClient"}).extend(th)}var tp=r(37029),tg=r(31031);function tm(e,t={}){let{key:r="fallback",name:i="Fallback",rank:n=!1,retryCount:o,retryDelay:a}=t;return({chain:t,pollingInterval:s=4e3,timeout:l})=>{let c=e,u=()=>{},d=(0,tg.q)({key:r,name:i,async request({method:e,params:r}){let i=async(n=0)=>{let o=c[n]({chain:t,retryCount:0,timeout:l});try{let t=await o.request({method:e,params:r});return u({method:e,params:r,response:t,transport:o,status:"success"}),t}catch(t){if(u({error:t,method:e,params:r,transport:o,status:"error"}),(0,tp.y)(t)||n===c.length-1)throw t;return i(n+1)}};return i()},retryCount:o,retryDelay:a,type:"fallback"},{onResponse:e=>u=e,transports:c.map(e=>e({chain:t,retryCount:0}))});if(n){let e="object"==typeof n?n:{};!function({chain:e,interval:t=4e3,onTransports:r,sampleCount:i=10,timeout:n=1e3,transports:o,weights:a={}}){let{stability:s=.7,latency:l=.3}=a,c=[],u=async()=>{let a=await Promise.all(o.map(async t=>{let r,i;let o=t({chain:e,retryCount:0,timeout:n}),a=Date.now();try{await o.request({method:"net_listening"}),i=1}catch{i=0}finally{r=Date.now()}return{latency:r-a,success:i}}));c.push(a),c.length>i&&c.shift();let d=Math.max(...c.map(e=>Math.max(...e.map(({latency:e})=>e))));r(o.map((e,t)=>{let r=c.map(e=>e[t].latency),i=r.reduce((e,t)=>e+t,0)/r.length,n=c.map(e=>e[t].success),o=n.reduce((e,t)=>e+t,0)/n.length;return 0===o?[0,t]:[l*(1-i/d)+s*o,t]}).sort((e,t)=>t[0]-e[0]).map(([,e])=>o[e])),await (0,to.D)(t),u()};u()}({chain:t,interval:e.interval??s,onTransports:e=>c=e,sampleCount:e.sampleCount,timeout:e.timeout,transports:c,weights:e.weights})}return d}}var tw=r(78863);class tb extends C.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var ty=r(32357);let tv=function(){if("undefined"!=typeof WebSocket)return WebSocket;if(void 0!==global.WebSocket)return global.WebSocket;if(void 0!==window.WebSocket)return window.WebSocket;if(void 0!==self.WebSocket)return self.WebSocket;throw Error("`WebSocket` is not supported in this environment")}();function tx(e,{errorInstance:t=Error("timed out"),timeout:r,signal:i}){return new Promise((n,o)=>{(async()=>{let a;try{let s=new AbortController;r>0&&(a=setTimeout(()=>{i?s.abort():o(t)},r)),n(await e({signal:s?.signal}))}catch(e){"AbortError"===e.name&&o(t),o(e)}finally{clearTimeout(a)}})()})}let tC=0;async function tE(e,{body:t,fetchOptions:r={},timeout:i=1e4}){let{headers:n,method:o,signal:a}=r;try{let s;let l=await tx(async({signal:s})=>await fetch(e,{...r,body:Array.isArray(t)?(0,tn.P)(t.map(e=>({jsonrpc:"2.0",id:e.id??tC++,...e}))):(0,tn.P)({jsonrpc:"2.0",id:t.id??tC++,...t}),headers:{...n,"Content-Type":"application/json"},method:o||"POST",signal:a||(i>0?s:void 0)}),{errorInstance:new tw.W5({body:t,url:e}),timeout:i,signal:!0});if(s=l.headers.get("Content-Type")?.startsWith("application/json")?await l.json():await l.text(),!l.ok)throw new tw.Gg({body:t,details:(0,tn.P)(s.error)||l.statusText,headers:l.headers,status:l.status,url:e});return s}catch(r){if(r instanceof tw.Gg||r instanceof tw.W5)throw r;throw new tw.Gg({body:t,details:r.message,url:e})}}let t_=new Map;async function tS(e){let t=t_.get(e);if(t)return t;let{schedule:r}=(0,ty.S)({id:e,fn:async()=>{let r=new tv(e),i=new Map,n=new Map,o=({data:e})=>{let t=JSON.parse(e),r="eth_subscription"===t.method,o=r?t.params.subscription:t.id,a=r?n:i,s=a.get(o);s&&s({data:e}),r||a.delete(o)},a=()=>{t_.delete(e),r.removeEventListener("close",a),r.removeEventListener("message",o)};return r.addEventListener("close",a),r.addEventListener("message",o),r.readyState===tv.CONNECTING&&await new Promise((e,t)=>{r&&(r.onopen=e,r.onerror=t)}),t=Object.assign(r,{requests:i,subscriptions:n}),t_.set(e,t),[t]}}),[i,[n]]=await r();return n}let tk={http:tE,webSocket:function(e,{body:t,onResponse:r}){if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new tw.c9({body:t,url:e.url,details:"Socket is closed."});let i=tC++,n=({data:o})=>{let a=JSON.parse(o);("number"!=typeof a.id||i===a.id)&&(r?.(a),"eth_subscribe"===t.method&&"string"==typeof a.result&&e.subscriptions.set(a.result,n),"eth_unsubscribe"===t.method&&e.subscriptions.delete(t.params?.[0]))};return e.requests.set(i,n),e.send(JSON.stringify({jsonrpc:"2.0",...t,id:i})),e},webSocketAsync:async function(e,{body:t,timeout:r=1e4}){return tx(()=>new Promise(r=>tk.webSocket(e,{body:t,onResponse:r})),{errorInstance:new tw.W5({body:t,url:e.url}),timeout:r})}};var tA=r(57858),tO=r(84192);let t$=e=>(t,r,i)=>{let n=i.subscribe;return i.subscribe=(e,t,r)=>{let o=e;if(t){let n=(null==r?void 0:r.equalityFn)||Object.is,a=e(i.getState());o=r=>{let i=e(r);if(!n(a,i)){let e=a;t(a=i,e)}},(null==r?void 0:r.fireImmediately)&&t(a,a)}return n(o)},e(t,r,i)},tI=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>tI(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>tI(t)(e)}}},tD=(e,t)=>(r,i,n)=>{let o,a,s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,c=new Set,u=new Set;try{o=s.getStorage()}catch(e){}if(!o)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),r(...e)},i,n);let d=tI(s.serialize),h=()=>{let e;let t=d({state:s.partialize({...i()}),version:s.version}).then(e=>o.setItem(s.name,e)).catch(t=>{e=t});if(e)throw e;return t},f=n.setState;n.setState=(e,t)=>{f(e,t),h()};let p=e((...e)=>{r(...e),h()},i,n),g=()=>{var e;if(!o)return;l=!1,c.forEach(e=>e(i()));let t=(null==(e=s.onRehydrateStorage)?void 0:e.call(s,i()))||void 0;return tI(o.getItem.bind(o))(s.name).then(e=>{if(e)return s.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===s.version)return e.state;if(s.migrate)return s.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(a=s.merge(e,null!=(t=i())?t:p),!0),h()}).then(()=>{null==t||t(a,void 0),l=!0,u.forEach(e=>e(a))}).catch(e=>{null==t||t(void 0,e)})};return n.persist={setOptions:e=>{s={...s,...e},e.getStorage&&(o=e.getStorage())},clearStorage:()=>{null==o||o.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>g(),hasHydrated:()=>l,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},g(),a||p},tP=(e,t)=>(r,i,n)=>{let o,a={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var t;let i=e=>null===e?null:JSON.parse(e,void 0),n=null!=(t=r.getItem(e))?t:null;return n instanceof Promise?n.then(i):i(n)},setItem:(e,t)=>r.setItem(e,JSON.stringify(t,void 0)),removeItem:e=>r.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1,l=new Set,c=new Set,u=a.storage;if(!u)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),r(...e)},i,n);let d=()=>{let e=a.partialize({...i()});return u.setItem(a.name,{state:e,version:a.version})},h=n.setState;n.setState=(e,t)=>{h(e,t),d()};let f=e((...e)=>{r(...e),d()},i,n);n.getInitialState=()=>f;let p=()=>{var e,t;if(!u)return;s=!1,l.forEach(e=>{var t;return e(null!=(t=i())?t:f)});let n=(null==(t=a.onRehydrateStorage)?void 0:t.call(a,null!=(e=i())?e:f))||void 0;return tI(u.getItem.bind(u))(a.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===a.version)return[!1,e.state];if(a.migrate)return[!0,a.migrate(e.state,e.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(e=>{var t;let[n,s]=e;if(r(o=a.merge(s,null!=(t=i())?t:f),!0),n)return d()}).then(()=>{null==n||n(o,void 0),o=i(),s=!0,c.forEach(e=>e(o))}).catch(e=>{null==n||n(void 0,e)})};return n.persist={setOptions:e=>{a={...a,...e},e.storage&&(u=e.storage)},clearStorage:()=>{null==u||u.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>p(),hasHydrated:()=>s,onHydrate:e=>(l.add(e),()=>{l.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},a.skipHydration||p(),o||f},tT=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),tD(e,t)):tP(e,t),tR=e=>{let t;let r=new Set,i=(e,i)=>{let n="function"==typeof e?e(t):e;if(!Object.is(n,t)){let e=t;t=(null!=i?i:"object"!=typeof n||null===n)?n:Object.assign({},t,n),r.forEach(r=>r(t,e))}},n=()=>t,o={setState:i,getState:n,getInitialState:()=>a,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},a=t=e(i,n,o);return o},tN=e=>e?tR(e):tR;var tM=r(15229);function tj(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[r,i]of e)if(!Object.is(i,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;return!0}let r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(let i of r)if(!Object.prototype.hasOwnProperty.call(t,i)||!Object.is(e[i],t[i]))return!1;return!0}var tU=r(45775);function tB(e,t,{batch:r={multicall:{wait:32}},pollingInterval:i=4e3,rank:n,retryCount:o,retryDelay:a,stallTimeout:s}={}){if(!e.length)throw Error("must have at least one chain");let l=[],c={},u={};for(let r of e){let e=!1;for(let i of t){let t=i(r);t&&(e=!0,l.some(({id:e})=>e===r.id)||(l=[...l,t.chain]),c[r.id]=[...c[r.id]||[],...t.rpcUrls.http],t.rpcUrls.webSocket&&(u[r.id]=[...u[r.id]||[],...t.rpcUrls.webSocket]))}if(!e)throw Error(`Could not find valid provider configuration for chain "${r.name}".

You may need to add \`jsonRpcProvider\` to \`configureChains\` with the chain's RPC URLs.
Read more: https://wagmi.sh/core/providers/jsonRpc`)}return{chains:l,publicClient:({chainId:t})=>{let u=l.find(e=>e.id===t)??e[0],d=c[u.id];if(!d||!d[0])throw Error(`No providers configured for chain "${u.id}"`);return Object.assign(tf({batch:r,chain:u,transport:tm(d.map(e=>(function(e,t={}){let{batch:r,fetchOptions:i,key:n="http",name:o="HTTP JSON-RPC",retryDelay:a}=t;return({chain:s,retryCount:l,timeout:c})=>{let{batchSize:u=1e3,wait:d=0}="object"==typeof r?r:{},h=t.retryCount??l,f=c??t.timeout??1e4,p=e||s?.rpcUrls.default.http[0];if(!p)throw new tb;return(0,tg.q)({key:n,name:o,async request({method:t,params:n}){let o={method:t,params:n},{schedule:a}=(0,ty.S)({id:`${e}`,wait:d,shouldSplitBatch:e=>e.length>u,fn:e=>tk.http(p,{body:e,fetchOptions:i,timeout:f}),sort:(e,t)=>e.id-t.id}),s=async e=>r?a(e):[await tk.http(p,{body:e,fetchOptions:i,timeout:f})],[{error:l,result:c}]=await s(o);if(l)throw new tw.bs({body:o,error:l,url:p});return c},retryCount:h,retryDelay:a,timeout:f,type:"http"},{fetchOptions:i,url:e})}})(e,{timeout:s})),{rank:n,retryCount:o,retryDelay:a}),pollingInterval:i}),{chains:l})},webSocketPublicClient:({chainId:t})=>{let c=l.find(e=>e.id===t)??e[0],d=u[c.id];if(d&&d[0])return Object.assign(tf({batch:r,chain:c,transport:tm(d.map(e=>(function(e,t={}){let{key:r="webSocket",name:i="WebSocket JSON-RPC",retryDelay:n}=t;return({chain:o,retryCount:a,timeout:s})=>{let l=t.retryCount??a,c=s??t.timeout??1e4,u=e||o?.rpcUrls.default.webSocket?.[0];if(!u)throw new tb;return(0,tg.q)({key:r,name:i,async request({method:e,params:t}){let r={method:e,params:t},i=await tS(u),{error:n,result:o}=await tk.webSocketAsync(i,{body:r,timeout:c});if(n)throw new tw.bs({body:r,error:n,url:u});return o},retryCount:l,retryDelay:n,timeout:c,type:"webSocket"},{getSocket:()=>tS(u),async subscribe({params:e,onData:t,onError:r}){let i=await tS(u),{result:n}=await new Promise((n,o)=>tk.webSocket(i,{body:{method:"eth_subscribe",params:e},onResponse(e){if(e.error){o(e.error),r?.(e.error);return}if("number"==typeof e.id){n(e);return}"eth_subscription"===e.method&&t(e.params)}}));return{subscriptionId:n,unsubscribe:async()=>new Promise(e=>tk.webSocket(i,{body:{method:"eth_unsubscribe",params:[n]},onResponse:e}))}}})}})(e,{timeout:s})),{rank:n,retryCount:o,retryDelay:a}),pollingInterval:i}),{chains:l})}}}var tL=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`),this.name="ChainNotConfigured"}},tF=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},tz=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},tW=class extends Error{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},tH=(e,{find:t,replace:r})=>e&&t(e)?r(e):"object"!=typeof e?e:Array.isArray(e)?e.map(e=>tH(e,{find:t,replace:r})):e instanceof Object?Object.entries(e).reduce((e,[i,n])=>({...e,[i]:tH(n,{find:t,replace:r})}),{}):e;function tZ(e){return tH(JSON.parse(e),{find:e=>"string"==typeof e&&e.startsWith("#bigint."),replace:e=>BigInt(e.replace("#bigint.",""))})}function tq(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(tO.Bd[e])}function tG(e,t){return e.slice(0,t).join(".")||"."}function tV(e,t){let{length:r}=e;for(let i=0;i<r;++i)if(e[i]===t)return i+1;return 0}function tK(e,t,r,i){return JSON.stringify(e,function(e,t){let r="function"==typeof e,i="function"==typeof t,n=[],o=[];return function(a,s){if("object"==typeof s){if(n.length){let e=tV(n,this);0===e?n[n.length]=this:(n.splice(e),o.splice(e)),o[o.length]=a;let r=tV(n,s);if(0!==r)return i?t.call(this,a,s,tG(o,r)):`[ref=${tG(o,r)}]`}else n[0]=s,o[0]=a}return r?e.call(this,a,s):s}}((e,r)=>{let i="bigint"==typeof r?`#bigint.${r.toString()}`:r;return t?.(e,i)||i},i),r??void 0)}var tY={getItem:e=>"",setItem:(e,t)=>null,removeItem:e=>null};function tQ({deserialize:e=tZ,key:t="wagmi",serialize:r=tK,storage:i}){return{...i,getItem:(r,n=null)=>{let o=i.getItem(`${t}.${r}`);try{return o?e(o):n}catch(e){return console.warn(e),n}},setItem:(e,n)=>{if(null===n)i.removeItem(`${t}.${e}`);else try{i.setItem(`${t}.${e}`,r(n))}catch(e){console.error(e)}},removeItem:e=>i.removeItem(`${t}.${e}`)}}var tX="store",tJ=class{constructor({autoConnect:e=!1,connectors:t=[new l._],publicClient:r,storage:s=tQ({storage:"undefined"!=typeof window?window.localStorage:tY}),logger:c={warn:console.warn},webSocketPublicClient:u}){let p;d(this,o),this.publicClients=new Map,this.webSocketPublicClients=new Map,d(this,i,void 0),d(this,n,void 0),this.args={autoConnect:e,connectors:t,logger:c,publicClient:r,storage:s,webSocketPublicClient:u};let g="disconnected";if(e)try{let e=s.getItem(tX),t=e?.state?.data;g=t?.account?"reconnecting":"connecting",p=t?.chain?.id}catch(e){}let m="function"==typeof t?t():t;m.forEach(e=>e.setStorage(s)),this.store=tN(t$(tT(()=>({connectors:m,publicClient:this.getPublicClient({chainId:p}),status:g,webSocketPublicClient:this.getWebSocketPublicClient({chainId:p})}),{name:tX,storage:s,partialize:t=>({...e&&{data:{account:t?.data?.account,chain:t?.data?.chain}},chains:t?.chains}),version:2}))),this.storage=s,h(this,n,s?.getItem("wallet")),f(this,o,a).call(this),e&&"undefined"!=typeof window&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){return this.data?.chain?.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(e){let t="function"==typeof e?e(this.store.getState()):e;this.store.setState(t,!0)}clearState(){this.setState(e=>({...e,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){this.connector&&await this.connector.disconnect?.(),h(this,i,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(u(this,i))return;h(this,i,!0),this.setState(e=>({...e,status:e.data?.account?"reconnecting":"connecting"}));let e=u(this,n)?[...this.connectors].sort(e=>e.id===u(this,n)?-1:1):this.connectors,t=!1;for(let r of e){if(!r.ready||!r.isAuthorized||!await r.isAuthorized())continue;let e=await r.connect();this.setState(t=>({...t,connector:r,chains:r?.chains,data:e,status:"connected"})),t=!0;break}return t||this.setState(e=>({...e,data:void 0,status:"disconnected"})),h(this,i,!1),this.data}setConnectors(e){this.args={...this.args,connectors:e};let t="function"==typeof e?e():e;t.forEach(e=>e.setStorage(this.args.storage)),this.setState(e=>({...e,connectors:t}))}getPublicClient({chainId:e}={}){let t=this.publicClients.get(-1);if(t&&t?.chain.id===e||(t=this.publicClients.get(e??-1)))return t;let{publicClient:r}=this.args;return t="function"==typeof r?r({chainId:e}):r,this.publicClients.set(e??-1,t),t}setPublicClient(e){let t=this.data?.chain?.id;this.args={...this.args,publicClient:e},this.publicClients.clear(),this.setState(e=>({...e,publicClient:this.getPublicClient({chainId:t})}))}getWebSocketPublicClient({chainId:e}={}){let t=this.webSocketPublicClients.get(-1);if(t&&t?.chain.id===e||(t=this.webSocketPublicClients.get(e??-1)))return t;let{webSocketPublicClient:r}=this.args;return(t="function"==typeof r?r({chainId:e}):r)&&this.webSocketPublicClients.set(e??-1,t),t}setWebSocketPublicClient(e){let t=this.data?.chain?.id;this.args={...this.args,webSocketPublicClient:e},this.webSocketPublicClients.clear(),this.setState(e=>({...e,webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})}))}setLastUsedConnector(e=null){this.storage?.setItem("wallet",e)}};function t0(e){let t=new tJ(e);return s=t,t}function t1(){if(!s)throw Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return s}async function t2({chainId:e,connector:t}){let r=t1(),i=r.connector;if(i&&t.id===i.id)throw new tF;try{r.setState(e=>({...e,status:"connecting"}));let i=await t.connect({chainId:e});return r.setLastUsedConnector(t.id),r.setState(e=>({...e,connector:t,chains:t?.chains,data:i,status:"connected"})),r.storage.setItem("connected",!0),{...i,connector:t}}catch(e){throw r.setState(e=>({...e,status:e.connector?"connected":"disconnected"})),e}}async function t3(){let e=t1();e.connector&&await e.connector.disconnect(),e.clearState(),e.storage.removeItem("connected")}i=new WeakMap,n=new WeakMap,o=new WeakSet,a=function(){let e=e=>{this.setState(t=>({...t,data:{...t.data,...e}}))},t=()=>{this.clearState()},r=e=>{this.setState(t=>({...t,error:e}))};this.store.subscribe(({connector:e})=>e,(i,n)=>{n?.off?.("change",e),n?.off?.("disconnect",t),n?.off?.("error",r),i&&(i.on?.("change",e),i.on?.("disconnect",t),i.on?.("error",r))});let{publicClient:i,webSocketPublicClient:n}=this.args;("function"==typeof i||"function"==typeof n)&&this.store.subscribe(({data:e})=>e?.chain?.id,e=>{this.setState(t=>({...t,publicClient:this.getPublicClient({chainId:e}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))})};var t5=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],t6=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function t4({chainId:e}={}){let t=t1();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function t8({chainId:e}={}){let t=t1();return await t.connector?.getWalletClient?.({chainId:e})||null}function t9({chainId:e}={}){let t=t1();return e&&t.getWebSocketPublicClient({chainId:e})||t.webSocketPublicClient}function t7(e,t){let r=t1(),i=async()=>t(t4(e));return r.subscribe(({publicClient:e})=>e,i)}function re(e,t){let r=t1(),i=async()=>t(t9(e));return r.subscribe(({webSocketPublicClient:e})=>e,i)}async function rt({chainId:e,contracts:t,blockNumber:r,blockTag:i,...n}){let o=t4({chainId:e});if(!o.chains)throw new tz;if(e&&o.chain.id!==e)throw new tL({chainId:e});return o.multicall({allowFailure:n.allowFailure??!0,blockNumber:r,blockTag:i,contracts:t})}async function rr({address:e,account:t,chainId:r,abi:i,args:n,functionName:o,blockNumber:a,blockTag:s}){return t4({chainId:r}).readContract({abi:i,address:e,account:t,functionName:o,args:n,blockNumber:a,blockTag:s})}async function ri({contracts:e,blockNumber:t,blockTag:r,...i}){let{allowFailure:n=!0}=i;try{let i=t4(),o=e.reduce((e,t,r)=>{let n=t.chainId??i.chain.id;return{...e,[n]:[...e[n]||[],{contract:t,index:r}]}},{}),a=(await Promise.all(Object.entries(o).map(([e,i])=>rt({allowFailure:n,chainId:parseInt(e),contracts:i.map(({contract:e})=>e),blockNumber:t,blockTag:r})))).flat(),s=Object.values(o).flatMap(e=>e.map(({index:e})=>e));return a.reduce((e,t,r)=>(e&&(e[s[r]]=t),e),[])}catch(o){if(o instanceof E.uq)throw o;let i=()=>e.map(e=>rr({...e,blockNumber:t,blockTag:r}));if(n)return(await Promise.allSettled(i())).map(e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"});return await Promise.all(i())}}async function rn({address:e,chainId:t,formatUnits:r,token:i}){let n=t1(),o=t4({chainId:t});if(i){let n=async({abi:n})=>{let o={abi:n,address:i,chainId:t},[a,s,l]=await ri({allowFailure:!1,contracts:[{...o,functionName:"balanceOf",args:[e]},{...o,functionName:"decimals"},{...o,functionName:"symbol"}]});return{decimals:s,formatted:(0,tM.b)(a??"0",tq(r??s)),symbol:l,value:a}};try{return await n({abi:t5})}catch(e){if(e instanceof E.uq){let{symbol:e,...t}=await n({abi:t6});return{symbol:(0,eI.rR)((0,y.f)(e,{dir:"right"})),...t}}throw e}}let a=[...n.publicClient.chains||[],...n.chains??[]],s=await o.getBalance({address:e}),l=a.find(e=>e.id===o.chain.id);return{decimals:l?.nativeCurrency.decimals??18,formatted:(0,tM.b)(s??"0",tq(r??18)),symbol:l?.nativeCurrency.symbol??"ETH",value:s}}function ro(){let{data:e,connector:t,status:r}=t1();switch(r){case"connected":return{address:e?.account,connector:t,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:r};case"reconnecting":return{address:e?.account,connector:t,isConnected:!!e?.account,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:r};case"connecting":return{address:e?.account,connector:t,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:r};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:r}}}function ra(){let e=t1(),t=e.data?.chain?.id,r=e.chains??[],i=[...e.publicClient?.chains||[],...r].find(e=>e.id===t)??{id:t,name:`Chain ${t}`,network:`${t}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:t?{...i,...e.data?.chain,id:t}:void 0,chains:r}}async function rs(e){let t=await t8();if(!t)throw new tA.N;return await t.signMessage({message:e.message})}async function rl({chainId:e}){let{connector:t}=t1();if(!t)throw new tA.N;if(!t.switchChain)throw new tW({connector:t});return t.switchChain(e)}function rc(e,{selector:t=e=>e}={}){return t1().subscribe(({data:e,connector:r,status:i})=>t({address:e?.account,connector:r,status:i}),()=>e(ro()),{equalityFn:tj})}function ru(e,{selector:t=e=>e}={}){return t1().subscribe(({data:e,chains:r})=>t({chainId:e?.chain?.id,chains:r}),()=>e(ra()),{equalityFn:tj})}async function rd({name:e,chainId:t}){let{normalize:i}=await r.e(765).then(r.bind(r,26765)),n=t4({chainId:t});return await n.getEnsAvatar({name:i(e)})}async function rh({address:e,chainId:t}){return t4({chainId:t}).getEnsName({address:(0,tU.K)(e)})}async function rf({chainId:e}={}){let t=t4({chainId:e});return await t.getBlockNumber()}},88598:function(e,t,r){"use strict";r.d(t,{E:function(){return a}});var i=r(27484),n=r(70660),o=r(84110);i.extend(o),i.extend(n),i.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});let a={getYear:(e=new Date().toISOString())=>i(e).year(),getRelativeDateFromNow:e=>i(e).fromNow(!0)}},76472:function(e,t,r){"use strict";r.d(t,{AccountController:function(){return c},ApiController:function(){return O},fz:function(){return K},Lr:function(){return U},ConnectionController:function(){return H},ConnectorController:function(){return x},bq:function(){return a},j1:function(){return s},Xs:function(){return P},IN:function(){return M},NetworkController:function(){return S},OptionsController:function(){return y},Ie:function(){return E},RouterController:function(){return R},_4:function(){return Y},yD:function(){return q},SnackController:function(){return L},MO:function(){return g},ThemeController:function(){return V},sl:function(){return z}});var i=r(17832);function n(e,t,r,n){let o=e[t];return(0,i.Ld)(e,()=>{let i=e[t];Object.is(o,i)||r(o=i)},n)}Symbol();let o="https://secure.web3modal.com",a={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:o,SECURE_SITE_DASHBOARD:`${o}/dashboard`,SECURE_SITE_FAVICON:`${o}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"}},s={isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){let e=window.navigator.userAgent.toLowerCase();return s.isMobile()&&e.includes("android")},isIos(){let e=window.navigator.userAgent.toLowerCase();return s.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=a.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=a.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+a.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let r;return(...i)=>{r&&clearTimeout(r),r=setTimeout(function(){e(...i)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(s.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}},formatUniversalUrl(e,t){if(!s.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}},openHref(e,t){window.open(e,t,"noreferrer noopener")},preloadImage:async e=>Promise.race([new Promise((t,r)=>{let i=new Image;i.onload=t,i.onerror=r,i.crossOrigin="anonymous",i.src=e}),s.wait(2e3)]),formatBalance(e,t){let r;if("0"===e)r="0.000";else if("string"==typeof e){let t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return r?`${r} ${t}`:`0.000 ${t}`},isRestrictedRegion(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return a.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>s.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>s.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>s.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),parseError:e=>"string"==typeof e?e:"string"==typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},l=(0,i.sj)({isConnected:!1}),c={state:l,subscribe:e=>(0,i.Ld)(l,()=>e(l)),subscribeKey:(e,t)=>n(l,e,t),setIsConnected(e){l.isConnected=e},setCaipAddress(e){l.caipAddress=e,l.address=e?s.getPlainAddress(e):void 0},setBalance(e,t){l.balance=e,l.balanceSymbol=t},setProfileName(e){l.profileName=e},setProfileImage(e){l.profileImage=e},setAddressExplorerUrl(e){l.addressExplorerUrl=e},resetAccount(){l.isConnected=!1,l.caipAddress=void 0,l.address=void 0,l.balance=void 0,l.balanceSymbol=void 0,l.profileName=void 0,l.profileImage=void 0,l.addressExplorerUrl=void 0}};class u{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...t}){let r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).json()}async getBlob({headers:e,...t}){let r=this.createUrl(t);return(await fetch(r,{method:"GET",headers:e})).blob()}async post({body:e,headers:t,...r}){let i=this.createUrl(r);return(await fetch(i,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:t,...r}){let i=this.createUrl(r);return(await fetch(i,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:t,...r}){let i=this.createUrl(r);return(await fetch(i,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:t}){let r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&r.searchParams.append(e,t)}),r}}let d="WALLETCONNECT_DEEPLINK_CHOICE",h="@w3m/recent",f="@w3m/connected_wallet_image_url",p="@w3m/connected_connector",g={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(d,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(d);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(d)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{let t=g.getRecentWallets();t.find(t=>t.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(h,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let e=localStorage.getItem(h);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(f,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(f)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(e){try{localStorage.setItem(p,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(p)}catch{console.info("Unable to get Connected Connector")}}},m=(0,i.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),w={state:m,subscribeNetworkImages:e=>(0,i.Ld)(m.networkImages,()=>e(m.networkImages)),subscribeKey:(e,t)=>n(m,e,t),setWalletImage(e,t){m.walletImages[e]=t},setNetworkImage(e,t){m.networkImages[e]=t},setConnectorImage(e,t){m.connectorImages[e]=t},setTokenImage(e,t){m.tokenImages[e]=t}},b=(0,i.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),y={state:b,subscribeKey:(e,t)=>n(b,e,t),setProjectId(e){b.projectId=e},setIncludeWalletIds(e){b.includeWalletIds=e},setExcludeWalletIds(e){b.excludeWalletIds=e},setFeaturedWalletIds(e){b.featuredWalletIds=e},setTokens(e){b.tokens=e},setTermsConditionsUrl(e){b.termsConditionsUrl=e},setPrivacyPolicyUrl(e){b.privacyPolicyUrl=e},setCustomWallets(e){b.customWallets=e},setEnableAnalytics(e){b.enableAnalytics=e},setSdkVersion(e){b.sdkVersion=e},setMetadata(e){b.metadata=e}},v=(0,i.sj)({connectors:[]}),x={state:v,subscribeKey:(e,t)=>n(v,e,t),setConnectors(e){v.connectors=e.map(e=>(0,i.iH)(e))},addConnector(e){if(v.connectors.push((0,i.iH)(e)),"w3mEmail"===e.id){let t=(0,i.CO)(y.state);e?.provider?.syncDappData?.({metadata:t.metadata,sdkVersion:t.sdkVersion,projectId:t.projectId})}},getEmailConnector:()=>v.connectors.find(e=>"EMAIL"===e.type),getAnnouncedConnectorRdns:()=>v.connectors.filter(e=>"ANNOUNCED"===e.type).map(e=>e.info?.rdns),getConnectors:()=>v.connectors},C=(0,i.sj)({open:!1,selectedNetworkId:void 0}),E={state:C,subscribe:e=>(0,i.Ld)(C,()=>e(C)),set(e){Object.assign(C,{...C,...e})}},_=(0,i.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),S={state:_,subscribeKey:(e,t)=>n(_,e,t),_getClient(){if(!_._client)throw Error("NetworkController client not set");return _._client},setClient(e){_._client=(0,i.iH)(e)},setCaipNetwork(e){_.caipNetwork=e,E.set({selectedNetworkId:e?.id})},setDefaultCaipNetwork(e){_.caipNetwork=e,E.set({selectedNetworkId:e?.id}),_.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){_.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){let e=await this._getClient().getApprovedCaipNetworksData();_.supportsAllNetworks=e.supportsAllNetworks,_.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),_.caipNetwork=e},resetNetwork(){_.isDefaultCaipNetwork||(_.caipNetwork=void 0),_.approvedCaipNetworkIds=void 0,_.supportsAllNetworks=!0}},k=new u({baseUrl:s.getApiUrl()}),A=(0,i.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),O={state:A,subscribeKey:(e,t)=>n(A,e,t),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=y.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _fetchWalletImage(e){let t=`${k.baseUrl}/getWalletImage/${e}`,r=await k.getBlob({path:t,headers:O._getApiHeaders()});w.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){let t=`${k.baseUrl}/public/getAssetImage/${e}`,r=await k.getBlob({path:t,headers:O._getApiHeaders()});w.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){let t=`${k.baseUrl}/public/getAssetImage/${e}`,r=await k.getBlob({path:t,headers:O._getApiHeaders()});w.setConnectorImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){let{requestedCaipNetworks:e}=S.state,t=e?.map(({imageId:e})=>e).filter(Boolean);t&&await Promise.allSettled(t.map(e=>O._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=x.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>O._fetchConnectorImage(e)))},async fetchFeaturedWallets(){let{featuredWalletIds:e}=y.state;if(e?.length){let{data:t}=await k.get({path:"/getWallets",headers:O._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id));let r=t.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(r.map(e=>O._fetchWalletImage(e))),A.featured=t}},async fetchRecommendedWallets(){let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=y.state,i=[...t??[],...r??[]].filter(Boolean),{data:n,count:o}=await k.get({path:"/getWallets",headers:O._getApiHeaders(),params:{page:"1",entries:"4",include:e?.join(","),exclude:i?.join(",")}}),a=g.getRecentWallets(),s=n.map(e=>e.image_id).filter(Boolean),l=a.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s,...l].map(e=>O._fetchWalletImage(e))),A.recommended=n,A.count=o??0},async fetchWallets({page:e}){let{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:i}=y.state,n=[...A.recommended.map(({id:e})=>e),...r??[],...i??[]].filter(Boolean),{data:o,count:a}=await k.get({path:"/getWallets",headers:O._getApiHeaders(),params:{page:String(e),entries:"40",include:t?.join(","),exclude:n.join(",")}}),l=o.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...l.map(e=>O._fetchWalletImage(e)),s.wait(300)]),A.wallets=[...A.wallets,...o],A.count=a>A.count?a:A.count,A.page=e},async searchWallet({search:e}){let{includeWalletIds:t,excludeWalletIds:r}=y.state;A.search=[];let{data:i}=await k.get({path:"/getWallets",headers:O._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t?.join(","),exclude:r?.join(",")}}),n=i.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...n.map(e=>O._fetchWalletImage(e)),s.wait(300)]),A.search=i},prefetch(){A.prefetchPromise=Promise.race([Promise.allSettled([O.fetchFeaturedWallets(),O.fetchRecommendedWallets(),O.fetchNetworkImages(),O.fetchConnectorImages()]),s.wait(3e3)])}},$=new u({baseUrl:s.getAnalyticsUrl()}),I=["MODAL_CREATED"],D=(0,i.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),P={state:D,subscribe:e=>(0,i.Ld)(D,()=>e(D)),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=y.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _sendAnalyticsEvent(e){try{if(I.includes(e.data.event)||"undefined"==typeof window)return;await $.post({path:"/e",headers:P._getApiHeaders(),body:{eventId:s.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){D.timestamp=Date.now(),D.data=e,y.state.enableAnalytics&&P._sendAnalyticsEvent(D)}},T=(0,i.sj)({view:"Connect",history:["Connect"]}),R={state:T,subscribeKey:(e,t)=>n(T,e,t),push(e,t){e!==T.view&&(T.view=e,T.history.push(e),T.data=t)},reset(e){T.view=e,T.history=[e]},replace(e,t){T.history.length>1&&T.history.at(-1)!==e&&(T.view=e,T.history[T.history.length-1]=e,T.data=t)},goBack(){if(T.history.length>1){T.history.pop();let[e]=T.history.slice(-1);e&&(T.view=e)}},goBackToIndex(e){if(T.history.length>1){T.history=T.history.slice(0,e+1);let[t]=T.history.slice(-1);t&&(T.view=t)}}},N=(0,i.sj)({loading:!1,open:!1}),M={state:N,subscribe:e=>(0,i.Ld)(N,()=>e(N)),subscribeKey:(e,t)=>n(N,e,t),async open(e){await O.state.prefetchPromise,e?.view?R.reset(e.view):c.state.isConnected?R.reset("Account"):R.reset("Connect"),N.open=!0,E.set({open:!0}),P.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){N.open=!1,E.set({open:!1}),P.sendEvent({type:"track",event:"MODAL_CLOSE"})},setLoading(e){N.loading=e}},j=new u({baseUrl:s.getBlockchainApiUrl()}),U={fetchIdentity:({caipChainId:e,address:t})=>j.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:y.state.projectId}}),fetchTransactions:({account:e,projectId:t,cursor:r})=>j.get({path:`/v1/account/${e}/history?projectId=${t}`,params:r?{cursor:r}:{}})},B=(0,i.sj)({message:"",variant:"success",open:!1}),L={state:B,subscribeKey:(e,t)=>n(B,e,t),showSuccess(e){B.message=e,B.variant="success",B.open=!0},showError(e){let t=s.parseError(e);B.message=t,B.variant="error",B.open=!0},hide(){B.open=!1}},F=(0,i.sj)({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),z={state:F,subscribe:e=>(0,i.Ld)(F,()=>e(F)),async fetchTransactions(e){let{projectId:t}=y.state;if(!t||!e)throw Error("Transactions can't be fetched without a projectId and an accountAddress");F.loading=!0;try{let r=await U.fetchTransactions({account:e,projectId:t,cursor:F.next}),i=this.filterSpamTransactions(r.data),n=[...F.transactions,...i];F.loading=!1,F.transactions=n,F.transactionsByYear=this.groupTransactionsByYear(F.transactionsByYear,i),F.empty=0===n.length,F.next=r.next?r.next:void 0}catch(r){P.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:t,cursor:F.next}}),L.showError("Failed to fetch transactions"),F.loading=!1,F.empty=!0}},groupTransactionsByYear:(e={},t=[])=>(t.forEach(t=>{let r=new Date(t.metadata.minedAt).getFullYear();e[r]||(e[r]=[]),e[r]?.push(t)}),e),filterSpamTransactions:e=>e.filter(e=>!e.transfers.every(e=>e.nft_info?.flags.is_spam===!0)),resetTransactions(){F.transactions=[],F.transactionsByYear={},F.loading=!1,F.empty=!1,F.next=void 0}},W=(0,i.sj)({wcError:!1,buffering:!1}),H={state:W,subscribeKey:(e,t)=>n(W,e,t),_getClient(){if(!W._client)throw Error("ConnectionController client not set");return W._client},setClient(e){W._client=(0,i.iH)(e)},connectWalletConnect(){W.wcPromise=this._getClient().connectWalletConnect(e=>{W.wcUri=e,W.wcPairingExpiry=s.getPairingExpiry()})},async connectExternal(e){await this._getClient().connectExternal?.(e),g.setConnectedConnector(e.type)},async signMessage(e){return this._getClient().signMessage(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){W.wcUri=void 0,W.wcPairingExpiry=void 0,W.wcPromise=void 0,W.wcLinking=void 0,W.recentWallet=void 0,z.resetTransactions(),g.deleteWalletConnectDeepLink()},setWcLinking(e){W.wcLinking=e},setWcError(e){W.wcError=e,W.buffering=!1},setRecentWallet(e){W.recentWallet=e},setBuffering(e){W.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},Z=(0,i.sj)({status:"uninitialized",isSiweEnabled:!1}),q={state:Z,subscribeKey:(e,t)=>n(Z,e,t),subscribe:e=>(0,i.Ld)(Z,()=>e(Z)),_getClient(){if(!Z._client)throw Error("SIWEController client not set");return Z._client},async getNonce(){let e=this._getClient(),t=await e.getNonce();return this.setNonce(t),t},async getSession(){let e=this._getClient(),t=await e.getSession();return t&&(this.setSession(t),this.setStatus("success")),t},createMessage(e){let t=this._getClient().createMessage(e);return this.setMessage(t),t},async verifyMessage(e){let t=this._getClient();return await t.verifyMessage(e)},async signIn(){let e=this._getClient();return await e.signIn()},async signOut(){let e=this._getClient();await e.signOut(),this.setStatus("ready"),e.onSignOut?.()},onSignIn(e){let t=this._getClient();t.onSignIn?.(e)},onSignOut(){let e=this._getClient();e.onSignOut?.()},setSIWEClient(e){Z._client=(0,i.iH)(e),Z.status="ready",Z.isSiweEnabled=e.options.enabled},setNonce(e){Z.nonce=e},setStatus(e){Z.status=e},setMessage(e){Z.message=e},setSession(e){Z.session=e}},G=(0,i.sj)({themeMode:"dark",themeVariables:{}}),V={state:G,subscribe:e=>(0,i.Ld)(G,()=>e(G)),setThemeMode(e){G.themeMode=e},setThemeVariables(e){G.themeVariables={...G.themeVariables,...e}},getSnapshot:()=>(0,i.CO)(G)},K={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?w.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?w.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?w.state.connectorImages[e.imageId]:void 0},Y={goBackOrCloseModal(){R.state.history.length>1?R.goBack():M.close()},navigateAfterNetworkSwitch(){let{history:e}=R.state,t=e.findIndex(e=>"Networks"===e);t>=1?R.goBackToIndex(t-1):M.close()}}},90078:function(e,t,r){"use strict";r.r(t),r.d(t,{W3mModal:function(){return u}});var i=r(76472),n=r(95128),o=r(92233),a=r(18569),s=(0,o.iv)`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,l=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let c="scroll-lock",u=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=i.IN.state.open,this.caipAddress=i.AccountController.state.address,this.isSiweEnabled=i.yD.state.isSiweEnabled,this.initializeTheming(),i.ApiController.prefetch(),this.unsubscribe.push(i.IN.subscribeKey("open",e=>e?this.onOpen():this.onClose()),i.yD.subscribeKey("isSiweEnabled",e=>{this.isSiweEnabled=e}),i.AccountController.subscribe(e=>this.onNewAccountState(e))),i.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?(0,o.dy)`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){this.isSiweEnabled&&"success"!==i.yD.state.status&&await i.ConnectionController.disconnect(),i.IN.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=i.ThemeController.state,r=n.UiHelperUtil.getColorTheme(t);(0,n.initializeTheming)(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,i.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=c,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${c}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){let{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAccountState(e){let{isConnected:t,caipAddress:r}=e;if(this.isSiweEnabled){t&&!this.caipAddress&&(this.caipAddress=r),t&&r&&this.caipAddress!==r&&(await i.yD.signOut(),this.onSiweNavigation(),this.caipAddress=r);try{let e=await i.yD.getSession();e&&!t?await i.yD.signOut():t&&!e&&this.onSiweNavigation()}catch(e){t&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?i.RouterController.push("ConnectingSiwe"):i.IN.open({view:"ConnectingSiwe"})}};u.styles=s,l([(0,a.SB)()],u.prototype,"open",void 0),l([(0,a.SB)()],u.prototype,"caipAddress",void 0),l([(0,a.SB)()],u.prototype,"isSiweEnabled",void 0),u=l([(0,n.customElement)("w3m-modal")],u)},3274:function(e,t,r){"use strict";r.d(t,{fl:function(){return k},iv:function(){return c},Ts:function(){return E},Qu:function(){return _}});let i=globalThis,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(t,e))}return e}toString(){return this.cssText}}let l=e=>new s("string"==typeof e?e:e+"",void 0,o),c=(e,...t)=>new s(1===e.length?e[0]:t.reduce((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]),e,o),u=(e,t)=>{if(n)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),n=i.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=r.cssText,e.appendChild(t)}},d=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return l(t)})(e):e,{is:h,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:g,getOwnPropertySymbols:m,getPrototypeOf:w}=Object,b=globalThis,y=b.trustedTypes,v=y?y.emptyScript:"",x=b.reactiveElementPolyfillSupport,C=(e,t)=>e,E={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},_=(e,t)=>!h(e,t),S={attribute:!0,type:String,converter:E,reflect:!1,useDefault:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class k extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&f(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:n}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){let o=i?.call(this);n?.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let e=w(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let e=this.properties;for(let t of[...g(e),...m(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(d(r));else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:E).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:E;this._$Em=i;let o=n.fromAttribute(t,e.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){let i=this.constructor,n=this[e];if(!(((r??=i.getPropertyOptions(e)).hasChanged??_)(n,t)||r.useDefault&&r.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:n},o){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==n||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e){let{wrapped:e}=r,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,r,i)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[C("elementProperties")]=new Map,k[C("finalized")]=new Map,x?.({ReactiveElement:k}),(b.reactiveElementVersions??=[]).push("2.1.1")},88382:function(e,t,r){"use strict";r.d(t,{Jb:function(){return S},Ld:function(){return k},_$LH:function(){return L},dy:function(){return _},sY:function(){return z}});let i=globalThis,n=i.trustedTypes,o=n?n.createPolicy("lit-html",{createHTML:e=>e}):void 0,a="$lit$",s=`lit$${Math.random().toFixed(9).slice(2)}$`,l="?"+s,c=`<${l}>`,u=document,d=()=>u.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,f=Array.isArray,p=e=>f(e)||"function"==typeof e?.[Symbol.iterator],g="[ 	\n\f\r]",m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,w=/-->/g,b=/>/g,y=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),v=/'/g,x=/"/g,C=/^(?:script|style|textarea|title)$/i,E=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),_=E(1),S=(E(2),E(3),Symbol.for("lit-noChange")),k=Symbol.for("lit-nothing"),A=new WeakMap,O=u.createTreeWalker(u,129);function $(e,t){if(!f(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(t):t}let I=(e,t)=>{let r=e.length-1,i=[],n,o=2===t?"<svg>":3===t?"<math>":"",l=m;for(let t=0;t<r;t++){let r=e[t],u,d,h=-1,f=0;for(;f<r.length&&(l.lastIndex=f,null!==(d=l.exec(r)));)f=l.lastIndex,l===m?"!--"===d[1]?l=w:void 0!==d[1]?l=b:void 0!==d[2]?(C.test(d[2])&&(n=RegExp("</"+d[2],"g")),l=y):void 0!==d[3]&&(l=y):l===y?">"===d[0]?(l=n??m,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,u=d[1],l=void 0===d[3]?y:'"'===d[3]?x:v):l===x||l===v?l=y:l===w||l===b?l=m:(l=y,n=void 0);let p=l===y&&e[t+1].startsWith("/>")?" ":"";o+=l===m?r+c:h>=0?(i.push(u),r.slice(0,h)+a+r.slice(h)+s+p):r+s+(-2===h?t:p)}return[$(e,o+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class D{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,c=0,u=e.length-1,h=this.parts,[f,p]=I(e,t);if(this.el=D.createElement(f,r),O.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=O.nextNode())&&h.length<u;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(a)){let t=p[c++],r=i.getAttribute(e).split(s),n=/([.?@])?(.*)/.exec(t);h.push({type:1,index:o,name:n[2],strings:r,ctor:"."===n[1]?M:"?"===n[1]?j:"@"===n[1]?U:N}),i.removeAttribute(e)}else e.startsWith(s)&&(h.push({type:6,index:o}),i.removeAttribute(e));if(C.test(i.tagName)){let e=i.textContent.split(s),t=e.length-1;if(t>0){i.textContent=n?n.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],d()),O.nextNode(),h.push({type:2,index:++o});i.append(e[t],d())}}}else if(8===i.nodeType){if(i.data===l)h.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(s,e+1));)h.push({type:7,index:o}),e+=s.length-1}}o++}}static createElement(e,t){let r=u.createElement("template");return r.innerHTML=e,r}}function P(e,t,r=e,i){if(t===S)return t;let n=void 0!==i?r._$Co?.[i]:r._$Cl,o=h(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e))._$AT(e,r,i),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(t=P(e,n._$AS(e,t.values),n,i)),t}class T{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??u).importNode(t,!0);O.currentNode=i;let n=O.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new R(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new B(n,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(n=O.nextNode(),o++)}return O.currentNode=u,i}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){h(e=P(this,e,t))?e===k||null==e||""===e?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==S&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):p(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&h(this._$AH)?this._$AA.nextSibling.data=e:this.T(u.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=D.createElement($(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new T(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new D(e)),t}k(e){f(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let n of e)i===t.length?t.push(r=new R(this.O(d()),this.O(d()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=k}_$AI(e,t=this,r,i){let n=this.strings,o=!1;if(void 0===n)(o=!h(e=P(this,e,t,0))||e!==this._$AH&&e!==S)&&(this._$AH=e);else{let i,a;let s=e;for(e=n[0],i=0;i<n.length-1;i++)(a=P(this,s[r+i],t,i))===S&&(a=this._$AH[i]),o||=!h(a)||a!==this._$AH[i],a===k?e=k:e!==k&&(e+=(a??"")+n[i+1]),this._$AH[i]=a}o&&!i&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class M extends N{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}}class j extends N{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}}class U extends N{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=P(this,e,t,0)??k)===S)return;let r=this._$AH,i=e===k&&r!==k||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==k&&(r===k||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class B{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}}let L={M:a,P:s,A:l,C:1,L:I,R:T,D:p,V:P,I:R,H:N,N:j,U:U,B:M,F:B},F=i.litHtmlPolyfillSupport;F?.(D,R),(i.litHtmlVersions??=[]).push("3.3.1");let z=(e,t,r)=>{let i=r?.renderBefore??t,n=i._$litPart$;if(void 0===n){let e=r?.renderBefore??null;i._$litPart$=n=new R(t.insertBefore(d(),e),e,void 0,r??{})}return n._$AI(e),n}},18569:function(e,t,r){"use strict";r.d(t,{Cb:function(){return a},SB:function(){return s}});var i=r(3274);let n={attribute:!0,type:String,converter:i.Ts,reflect:!1,hasChanged:i.Qu},o=(e=n,t,r)=>{let{kind:i,metadata:o}=r,a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),"accessor"===i){let{name:i}=r;return{set(r){let n=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){let{name:i}=r;return function(r){let n=this[i];t.call(this,r),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function a(e){return(t,r)=>"object"==typeof r?o(e,t,r):((e,t,r)=>{let i=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}function s(e){return a({...e,state:!0,attribute:!1})}},92233:function(e,t,r){"use strict";r.d(t,{oi:function(){return a},iv:function(){return i.iv},dy:function(){return n.dy}});var i=r(3274),n=r(88382);let o=globalThis;class a extends i.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,n.sY)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return n.Jb}}a._$litElement$=!0,a.finalized=!0,o.litElementHydrateSupport?.({LitElement:a});let s=o.litElementPolyfillSupport;s?.({LitElement:a}),(o.litElementVersions??=[]).push("4.2.1")},95128:function(e,t,r){"use strict";let i,n,o;r.r(t),r.d(t,{TransactionUtil:function(){return ns},UiHelperUtil:function(){return t0},WuiAccountButton:function(){return rr},WuiAllWalletsImage:function(){return rl},WuiAvatar:function(){return t4},WuiButton:function(){return rd},WuiCard:function(){return eI},WuiCardSelect:function(){return rC},WuiCardSelectLoader:function(){return rg},WuiChip:function(){return rS},WuiConnectButton:function(){return rO},WuiCtaButton:function(){return rD},WuiEmailInput:function(){return rY},WuiFlex:function(){return t3},WuiGrid:function(){return ne},WuiIcon:function(){return tO},WuiIconBox:function(){return t7},WuiIconLink:function(){return rJ},WuiImage:function(){return tD},WuiInputElement:function(){return r2},WuiInputNumeric:function(){return r6},WuiInputText:function(){return rG},WuiLink:function(){return r9},WuiListAccordion:function(){return i1},WuiListContent:function(){return i5},WuiListItem:function(){return it},WuiListWallet:function(){return iw},WuiListWalletTransaction:function(){return i8},WuiLoadingHexagon:function(){return tT},WuiLoadingSpinner:function(){return tM},WuiLoadingThumbnail:function(){return tB},WuiLogo:function(){return iv},WuiLogoSelect:function(){return iE},WuiNetworkButton:function(){return ik},WuiNetworkImage:function(){return ry},WuiNoticeCard:function(){return iX},WuiOtp:function(){return i$},WuiQrCode:function(){return iN},WuiSearchBar:function(){return ij},WuiSeparator:function(){return ni},WuiShimmer:function(){return tz},WuiSnackbar:function(){return iL},WuiTabs:function(){return iW},WuiTag:function(){return ip},WuiText:function(){return tV},WuiTooltip:function(){return iq},WuiTransactionListItem:function(){return il},WuiTransactionListItemLoader:function(){return iu},WuiTransactionVisual:function(){return io},WuiVisual:function(){return tX},WuiVisualThumbnail:function(){return iK},WuiWalletImage:function(){return ro},customElement:function(){return ek},initializeTheming:function(){return ey},setColorTheme:function(){return ev},setThemeVariables:function(){return ex}});let a=globalThis,s=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),c=new WeakMap;class u{constructor(e,t,r){if(this._$cssResult$=!0,r!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(s&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=c.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&c.set(t,e))}return e}toString(){return this.cssText}}let d=e=>new u("string"==typeof e?e:e+"",void 0,l),h=(e,...t)=>new u(1===e.length?e[0]:t.reduce((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]),e,l),f=(e,t)=>{if(s)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),i=a.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},p=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return d(t)})(e):e,{is:g,defineProperty:m,getOwnPropertyDescriptor:w,getOwnPropertyNames:b,getOwnPropertySymbols:y,getPrototypeOf:v}=Object,x=globalThis,C=x.trustedTypes,E=C?C.emptyScript:"",_=x.reactiveElementPolyfillSupport,S=(e,t)=>e,k={toAttribute(e,t){switch(t){case Boolean:e=e?E:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},A=(e,t)=>!g(e,t),O={attribute:!0,type:String,converter:k,reflect:!1,useDefault:!1,hasChanged:A};Symbol.metadata??=Symbol("metadata"),x.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=O){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&m(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:n}=w(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){let o=i?.call(this);n?.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??O}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;let e=v(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){let e=this.properties;for(let t of[...b(e),...y(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(p(r));else void 0!==e&&t.push(p(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return f(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:k).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=r.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:k;this._$Em=i;let o=n.fromAttribute(t,e.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){let i=this.constructor,n=this[e];if(!(((r??=i.getPropertyOptions(e)).hasChanged??A)(n,t)||r.useDefault&&r.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:n},o){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==n||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e){let{wrapped:e}=r,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,r,i)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[S("elementProperties")]=new Map,$[S("finalized")]=new Map,_?.({ReactiveElement:$}),(x.reactiveElementVersions??=[]).push("2.1.1");let I=globalThis,D=I.trustedTypes,P=D?D.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,N="?"+R,M=`<${N}>`,j=document,U=()=>j.createComment(""),B=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,F=e=>L(e)||"function"==typeof e?.[Symbol.iterator],z="[ 	\n\f\r]",W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,Z=/>/g,q=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,V=/"/g,K=/^(?:script|style|textarea|title)$/i,Y=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Q=Y(1),X=Y(2),J=(Y(3),Symbol.for("lit-noChange")),ee=Symbol.for("lit-nothing"),et=new WeakMap,er=j.createTreeWalker(j,129);function ei(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(t):t}let en=(e,t)=>{let r=e.length-1,i=[],n,o=2===t?"<svg>":3===t?"<math>":"",a=W;for(let t=0;t<r;t++){let r=e[t],s,l,c=-1,u=0;for(;u<r.length&&(a.lastIndex=u,null!==(l=a.exec(r)));)u=a.lastIndex,a===W?"!--"===l[1]?a=H:void 0!==l[1]?a=Z:void 0!==l[2]?(K.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=q):void 0!==l[3]&&(a=q):a===q?">"===l[0]?(a=n??W,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?q:'"'===l[3]?V:G):a===V||a===G?a=q:a===H||a===Z?a=W:(a=q,n=void 0);let d=a===q&&e[t+1].startsWith("/>")?" ":"";o+=a===W?r+M:c>=0?(i.push(s),r.slice(0,c)+T+r.slice(c)+R+d):r+R+(-2===c?t:d)}return[ei(e,o+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class eo{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,o=0,a=e.length-1,s=this.parts,[l,c]=en(e,t);if(this.el=eo.createElement(l,r),er.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=er.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(T)){let t=c[o++],r=i.getAttribute(e).split(R),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:n,name:a[2],strings:r,ctor:"."===a[1]?eu:"?"===a[1]?ed:"@"===a[1]?eh:ec}),i.removeAttribute(e)}else e.startsWith(R)&&(s.push({type:6,index:n}),i.removeAttribute(e));if(K.test(i.tagName)){let e=i.textContent.split(R),t=e.length-1;if(t>0){i.textContent=D?D.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],U()),er.nextNode(),s.push({type:2,index:++n});i.append(e[t],U())}}}else if(8===i.nodeType){if(i.data===N)s.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(R,e+1));)s.push({type:7,index:n}),e+=R.length-1}}n++}}static createElement(e,t){let r=j.createElement("template");return r.innerHTML=e,r}}function ea(e,t,r=e,i){if(t===J)return t;let n=void 0!==i?r._$Co?.[i]:r._$Cl,o=B(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e))._$AT(e,r,i),void 0!==i?(r._$Co??=[])[i]=n:r._$Cl=n),void 0!==n&&(t=ea(e,n._$AS(e,t.values),n,i)),t}class es{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??j).importNode(t,!0);er.currentNode=i;let n=er.nextNode(),o=0,a=0,s=r[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new el(n,n.nextSibling,this,e):1===s.type?t=new s.ctor(n,s.name,s.strings,this,e):6===s.type&&(t=new ef(n,this,e)),this._$AV.push(t),s=r[++a]}o!==s?.index&&(n=er.nextNode(),o++)}return er.currentNode=j,i}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class el{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){B(e=ea(this,e,t))?e===ee||null==e||""===e?(this._$AH!==ee&&this._$AR(),this._$AH=ee):e!==this._$AH&&e!==J&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):F(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ee&&B(this._$AH)?this._$AA.nextSibling.data=e:this.T(j.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=eo.createElement(ei(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new es(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=et.get(e.strings);return void 0===t&&et.set(e.strings,t=new eo(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let n of e)i===t.length?t.push(r=new el(this.O(U()),this.O(U()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ec{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,n){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=ee}_$AI(e,t=this,r,i){let n=this.strings,o=!1;if(void 0===n)(o=!B(e=ea(this,e,t,0))||e!==this._$AH&&e!==J)&&(this._$AH=e);else{let i,a;let s=e;for(e=n[0],i=0;i<n.length-1;i++)(a=ea(this,s[r+i],t,i))===J&&(a=this._$AH[i]),o||=!B(a)||a!==this._$AH[i],a===ee?e=ee:e!==ee&&(e+=(a??"")+n[i+1]),this._$AH[i]=a}o&&!i&&this.j(e)}j(e){e===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class eu extends ec{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ee?void 0:e}}class ed extends ec{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ee)}}class eh extends ec{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){if((e=ea(this,e,t,0)??ee)===J)return;let r=this._$AH,i=e===ee&&r!==ee||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==ee&&(r===ee||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ef{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ea(this,e)}}let ep=I.litHtmlPolyfillSupport;ep?.(eo,el),(I.litHtmlVersions??=[]).push("3.3.1");let eg=(e,t,r)=>{let i=r?.renderBefore??t,n=i._$litPart$;if(void 0===n){let e=r?.renderBefore??null;i._$litPart$=n=new el(t.insertBefore(U(),e),e,void 0,r??{})}return n._$AI(e),n},em=globalThis;class ew extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=eg(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}}ew._$litElement$=!0,ew.finalized=!0,em.litElementHydrateSupport?.({LitElement:ew});let eb=em.litElementPolyfillSupport;function ey(e,t){i=document.createElement("style"),n=document.createElement("style"),o=document.createElement("style"),i.textContent=eC(e).core.cssText,n.textContent=eC(e).dark.cssText,o.textContent=eC(e).light.cssText,document.head.appendChild(i),document.head.appendChild(n),document.head.appendChild(o),ev(t)}function ev(e){n&&o&&("light"===e?(n.removeAttribute("media"),o.media="enabled"):(o.removeAttribute("media"),n.media="enabled"))}function ex(e){i&&n&&o&&(i.textContent=eC(e).core.cssText,n.textContent=eC(e).dark.cssText,o.textContent=eC(e).light.cssText)}function eC(e){return{core:h`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${d(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${d(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${d(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${d(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${d(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:h`
      :root {
        --w3m-color-mix: ${d(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${d(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: var(--wui-success-glass-015);
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:h`
      :root {
        --w3m-color-mix: ${d(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${d(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}eb?.({LitElement:ew}),(em.litElementVersions??=[]).push("4.2.1");let eE=h`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,e_=h`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,eS=h`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function ek(e){return function(t){return"function"==typeof t?(customElements.get(e)||customElements.define(e,t),t):function(e,t){let{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}var eA,eO,e$=h`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let eI=class extends ew{render(){return Q`<slot></slot>`}};eI.styles=[eE,e$],eI=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([ek("wui-card")],eI);let eD={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:A},eP=(e=eD,t,r)=>{let{kind:i,metadata:n}=r,o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),"accessor"===i){let{name:i}=r;return{set(r){let n=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,n,e)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){let{name:i}=r;return function(r){let n=this[i];t.call(this,r),this.requestUpdate(i,n,e)}}throw Error("Unsupported decorator location: "+i)};function eT(e){return(t,r)=>"object"==typeof r?eP(e,t,r):((e,t,r)=>{let i=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}function eR(e){return eT({...e,state:!0,attribute:!1})}var eN=h`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;let eM=X`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,ej=X`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,eU=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eB=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eL=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,eF=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ez=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,eW=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,eH=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,eZ=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eq=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,eG=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,eV=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eK=X`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,eY=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eQ=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,eX=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,eJ=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,e0=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,e1=X` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,e2=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,e3=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,e5=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,e6=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,e4=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,e8=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,e9=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,e7=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,te=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,tt=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,tr=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,ti=X`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,tn=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,to=X`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,ta=X`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,ts=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,tl=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,tc=X` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,tu=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,td=X`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,th=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,tf=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,tp=X`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,tg=X`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,tm=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,tw=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,tb=X`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,ty=X`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,tv=X`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,tx=X`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,tC=X`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,tE=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,t_=X`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,tS=X`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var tk=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tA={allWallets:eM,alpha:X`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.687 0.557043C11.1462 0.671832 11.4254 1.13706 11.3106 1.59615C11.2044 2.02082 11.0975 2.51184 10.9822 3.04102C10.7176 4.25623 10.4091 5.6727 9.96482 6.94907C10.1435 7.58939 10.3065 8.16905 10.4935 8.68429C10.6447 9.10072 10.7858 9.39487 10.9179 9.58289C11.0055 9.70747 11.0597 9.74443 11.0748 9.75277C11.096 9.75724 11.1075 9.75764 11.1531 9.71916C11.2342 9.65067 11.3386 9.50891 11.4426 9.28357C11.5416 9.06892 11.614 8.8366 11.662 8.6497C11.6854 8.55831 11.7019 8.48242 11.7122 8.43111C11.7174 8.40555 11.7209 8.38638 11.723 8.37476L11.725 8.36363C11.8 7.89659 12.2395 7.57864 12.7068 7.65342C13.1742 7.72822 13.4925 8.16766 13.4177 8.63494C13.4153 8.64924 13.42 8.62063 13.4177 8.63494L13.4175 8.63596L13.4173 8.63721L13.4168 8.64037L13.4153 8.64924L13.4105 8.67692C13.4064 8.69961 13.4006 8.73069 13.3929 8.76891C13.3776 8.84516 13.3545 8.95091 13.3224 9.07586C13.2593 9.32166 13.1564 9.66085 12.9992 10.0015C12.8469 10.3315 12.6139 10.7288 12.2595 11.0282C11.8757 11.3523 11.35 11.5553 10.7293 11.4312C10.1645 11.3183 9.77597 10.939 9.51527 10.5681C9.2535 10.1957 9.05129 9.7349 8.88212 9.26898C8.87877 9.25975 8.87542 9.25049 8.87208 9.2412C8.03954 10.4941 6.83375 11.4479 5.03926 11.4479C3.48049 11.4479 2.31021 10.7159 1.56788 9.63945C0.846767 8.5938 0.544023 7.25403 0.573206 5.9702C0.60242 4.68505 0.966023 3.36073 1.69055 2.33272C2.42915 1.28475 3.5614 0.531453 5.03927 0.531453C6.44937 0.531453 7.4408 1.29593 8.1276 2.27567C8.48261 2.7821 8.77248 3.36668 9.0177 3.97383C9.1059 3.59106 9.18901 3.20908 9.27086 2.83294C9.39492 2.26277 9.51606 1.70605 9.64752 1.18046C9.76235 0.721369 10.2277 0.442254 10.687 0.557043ZM8.16354 6.87693C8.08689 6.60534 8.01003 6.33741 7.93241 6.08076C7.59522 4.96581 7.22132 3.969 6.72371 3.25914C6.24674 2.57873 5.72135 2.24516 5.03927 2.24516C4.21565 2.24516 3.56947 2.6422 3.09195 3.31975C2.60035 4.01725 2.31013 4.99361 2.28705 6.00913C2.26393 7.02599 2.51041 7.9869 2.97927 8.66676C3.42691 9.31586 4.08734 9.73417 5.03926 9.73417C6.48097 9.73417 7.4216 8.72164 8.14437 6.9249C8.15079 6.90893 8.15718 6.89294 8.16354 6.87693Z" fill="#47A1FF"/>
</svg>`,appStore:ej,chromeStore:eK,apple:eU,arrowBottom:eB,arrowLeft:eL,arrowRight:eF,arrowTop:ez,browser:eW,checkmark:eH,chevronBottom:eZ,chevronLeft:eq,chevronRight:eG,chevronTop:eV,clock:eY,close:eQ,compass:eJ,coinPlaceholder:eX,copy:e0,cursor:e1,desktop:e2,disconnect:e3,discord:e5,etherscan:e6,extension:e4,externalLink:e8,facebook:e9,filters:e7,github:te,google:tt,helpCircle:tr,infoCircle:ti,mail:tn,mobile:to,networkPlaceholder:ta,nftPlaceholder:ts,off:tl,playStore:tc,qrCode:tu,refresh:td,search:th,swapHorizontal:tf,swapHorizontalBold:tp,swapVertical:tg,telegram:tm,twitch:tw,twitter:tb,twitterIcon:ty,verify:tv,verifyFilled:tx,wallet:tE,walletConnect:t_,walletPlaceholder:tC,warningCircle:tS},tO=class extends ew{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,Q`${tA[this.name]}`}};tO.styles=[eE,eS,eN],tk([eT()],tO.prototype,"size",void 0),tk([eT()],tO.prototype,"name",void 0),tk([eT()],tO.prototype,"color",void 0),tO=tk([ek("wui-icon")],tO);var t$=h`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,tI=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tD=class extends ew{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return Q`<img src=${this.src} alt=${this.alt} />`}};tD.styles=[eE,eS,t$],tI([eT()],tD.prototype,"src",void 0),tI([eT()],tD.prototype,"alt",void 0),tD=tI([ek("wui-image")],tD);var tP=h`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let tT=class extends ew{render(){return Q`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};tT.styles=[eE,tP],tT=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([ek("wui-loading-hexagon")],tT);var tR=h`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,tN=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tM=class extends ew{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,Q`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};tM.styles=[eE,tR],tN([eT()],tM.prototype,"color",void 0),tN([eT()],tM.prototype,"size",void 0),tM=tN([ek("wui-loading-spinner")],tM);var tj=h`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,tU=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tB=class extends ew{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return Q`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};tB.styles=[eE,tj],tU([eT({type:Number})],tB.prototype,"radius",void 0),tB=tU([ek("wui-loading-thumbnail")],tB);var tL=h`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,tF=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tz=class extends ew{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,Q`<slot></slot>`}};tz.styles=[tL],tF([eT()],tz.prototype,"width",void 0),tF([eT()],tz.prototype,"height",void 0),tF([eT()],tz.prototype,"borderRadius",void 0),tz=tF([ek("wui-shimmer")],tz);let tW=e=>(...t)=>({_$litDirective$:e,values:t});class tH{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}let tZ=tW(class extends tH{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let r in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){let i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return J}});var tq=h`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`,tG=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tV=class extends ew{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,Q`<slot class=${tZ(e)}></slot>`}};tV.styles=[eE,tq],tG([eT()],tV.prototype,"variant",void 0),tG([eT()],tV.prototype,"color",void 0),tG([eT()],tV.prototype,"align",void 0),tV=tG([ek("wui-text")],tV);var tK=h`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`,tY=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let tQ={browser:X`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,dao:X`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,defi:X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,defiAlt:X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,eth:X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,layers:X`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,lock:X`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,login:X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,network:X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,nft:X`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,noun:X`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,profile:X`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,system:X`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `},tX=class extends ew{constructor(){super(...arguments),this.name="browser"}render(){return Q`${tQ[this.name]}`}};tX.styles=[eE,tK],tY([eT()],tX.prototype,"name",void 0),tX=tY([ek("wui-visual")],tX);let tJ=e=>e??ee,t0={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName:e=>new URL(e).hostname,getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:i})=>e.length<=t+r?e:"end"===i?`${e.substring(0,t)}...`:"start"===i?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(t),i=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),n=100-3*Number(i?.replace("px","")),o=`${n}% ${n}% at 65% 40%`,a=[];for(let e=0;e<5;e+=1){let t=this.tintColor(r,.15*e);a.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${a[0]};
    --local-color-2: ${a[1]};
    --local-color-3: ${a[2]};
    --local-color-4: ${a[3]};
    --local-color-5: ${a[4]};
    --local-radial-circle: ${o}
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[r,i,n]=e;return[Math.round(r+(255-r)*t),Math.round(i+(255-i)*t),Math.round(n+(255-n)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")};var t1=h`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,t2=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t3=class extends ew{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&t0.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&t0.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&t0.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&t0.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&t0.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&t0.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&t0.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&t0.getSpacingStyles(this.margin,3)};
    `,Q`<slot></slot>`}};t3.styles=[eE,t1],t2([eT()],t3.prototype,"flexDirection",void 0),t2([eT()],t3.prototype,"flexWrap",void 0),t2([eT()],t3.prototype,"flexBasis",void 0),t2([eT()],t3.prototype,"flexGrow",void 0),t2([eT()],t3.prototype,"flexShrink",void 0),t2([eT()],t3.prototype,"alignItems",void 0),t2([eT()],t3.prototype,"justifyContent",void 0),t2([eT()],t3.prototype,"columnGap",void 0),t2([eT()],t3.prototype,"rowGap",void 0),t2([eT()],t3.prototype,"gap",void 0),t2([eT()],t3.prototype,"padding",void 0),t2([eT()],t3.prototype,"margin",void 0),t3=t2([ek("wui-flex")],t3);var t5=h`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,t6=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t4=class extends ew{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return Q`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",Q`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=t0.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};t4.styles=[eE,t5],t6([eT()],t4.prototype,"imageSrc",void 0),t6([eT()],t4.prototype,"alt",void 0),t6([eT()],t4.prototype,"address",void 0),t4=t6([ek("wui-avatar")],t4);var t8=h`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,t9=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let t7=class extends ew{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e=this.iconSize||this.size,t="lg"===this.size,r="xl"===this.size,i="gray"===this.background,n="opaque"===this.background,o="accent-100"===this.backgroundColor&&n||"success-100"===this.backgroundColor&&n||"error-100"===this.backgroundColor&&n||"inverse-100"===this.backgroundColor&&n,a=`var(--wui-color-${this.backgroundColor})`;return o?a=`var(--wui-icon-box-bg-${this.backgroundColor})`:i&&(a=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${a};
       --local-bg-mix: ${o||i?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":r?"s":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,Q` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};t7.styles=[eE,e_,t8],t9([eT()],t7.prototype,"size",void 0),t9([eT()],t7.prototype,"backgroundColor",void 0),t9([eT()],t7.prototype,"iconColor",void 0),t9([eT()],t7.prototype,"iconSize",void 0),t9([eT()],t7.prototype,"background",void 0),t9([eT({type:Boolean})],t7.prototype,"border",void 0),t9([eT()],t7.prototype,"borderColor",void 0),t9([eT()],t7.prototype,"icon",void 0),t7=t9([ek("wui-icon-box")],t7);var re=h`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,rt=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rr=class extends ew{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.charsStart=4,this.charsEnd=6}render(){return Q`
      <button
        ?disabled=${this.disabled}
        class=${tJ(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${t0.getTruncateString({string:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){let e=this.networkSrc?Q`<wui-image src=${this.networkSrc}></wui-image>`:Q`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return Q`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};rr.styles=[eE,e_,re],rt([eT()],rr.prototype,"networkSrc",void 0),rt([eT()],rr.prototype,"avatarSrc",void 0),rt([eT()],rr.prototype,"balance",void 0),rt([eT({type:Boolean})],rr.prototype,"disabled",void 0),rt([eT({type:Boolean})],rr.prototype,"isProfileName",void 0),rt([eT()],rr.prototype,"address",void 0),rt([eT()],rr.prototype,"charsStart",void 0),rt([eT()],rr.prototype,"charsEnd",void 0),rr=rt([ek("wui-account-button")],rr);var ri=h`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`,rn=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ro=class extends ew{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),Q`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?Q`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?Q`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:Q`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};ro.styles=[eE,ri],rn([eT()],ro.prototype,"size",void 0),rn([eT()],ro.prototype,"name",void 0),rn([eT()],ro.prototype,"imageSrc",void 0),rn([eT()],ro.prototype,"walletIcon",void 0),rn([eT({type:Boolean})],ro.prototype,"installed",void 0),rn([eT()],ro.prototype,"badgeSize",void 0),ro=rn([ek("wui-wallet-image")],ro);var ra=h`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,rs=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rl=class extends ew{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return Q`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>Q`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${tJ(t)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(4-this.walletImages.length)].map(()=>Q` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};rl.styles=[eE,ra],rs([eT({type:Array})],rl.prototype,"walletImages",void 0),rl=rs([ek("wui-all-wallets-image")],rl);var rc=h`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,ru=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rd=class extends ew{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;let e="md"===this.size?"paragraph-600":"small-600";return Q`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?Q`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:Q``}};rd.styles=[eE,e_,rc],ru([eT()],rd.prototype,"size",void 0),ru([eT({type:Boolean})],rd.prototype,"disabled",void 0),ru([eT({type:Boolean})],rd.prototype,"fullWidth",void 0),ru([eT({type:Boolean})],rd.prototype,"loading",void 0),ru([eT()],rd.prototype,"variant",void 0),ru([eT({type:Boolean})],rd.prototype,"hasIconLeft",void 0),ru([eT({type:Boolean})],rd.prototype,"hasIconRight",void 0),rd=ru([ek("wui-button")],rd);let rh=X`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var rf=h`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`,rp=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rg=class extends ew{constructor(){super(...arguments),this.type="wallet"}render(){return Q`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?Q` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${rh}`:Q`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};rg.styles=[eE,e_,rf],rp([eT()],rg.prototype,"type",void 0),rg=rp([ek("wui-card-select-loader")],rg);let rm=X`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var rw=h`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,rb=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ry=class extends ew{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){let e="lg"===this.size;return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,Q`${this.templateVisual()} ${e?rm:rh}`}templateVisual(){return this.imageSrc?Q`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:Q`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};ry.styles=[eE,rw],rb([eT()],ry.prototype,"size",void 0),rb([eT()],ry.prototype,"name",void 0),rb([eT()],ry.prototype,"imageSrc",void 0),rb([eT({type:Boolean})],ry.prototype,"selected",void 0),ry=rb([ek("wui-network-image")],ry);var rv=h`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`,rx=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rC=class extends ew{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return Q`
      <button data-selected=${tJ(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?Q`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${tJ(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:Q`
      <wui-wallet-image
        size="md"
        imageSrc=${tJ(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};rC.styles=[eE,e_,rv],rx([eT()],rC.prototype,"name",void 0),rx([eT()],rC.prototype,"type",void 0),rx([eT()],rC.prototype,"imageSrc",void 0),rx([eT({type:Boolean})],rC.prototype,"disabled",void 0),rx([eT({type:Boolean})],rC.prototype,"selected",void 0),rx([eT({type:Boolean})],rC.prototype,"installed",void 0),rC=rx([ek("wui-card-select")],rC);var rE=h`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }
`,r_=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rS=class extends ew{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){let e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant;return Q`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e?"small-600":"paragraph-600"} color="inherit">
          ${this.title?this.title:t0.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?Q`<wui-image src=${this.imageSrc}></wui-image>`:null}};rS.styles=[eE,e_,rE],r_([eT()],rS.prototype,"variant",void 0),r_([eT()],rS.prototype,"imageSrc",void 0),r_([eT({type:Boolean})],rS.prototype,"disabled",void 0),r_([eT()],rS.prototype,"icon",void 0),r_([eT()],rS.prototype,"href",void 0),r_([eT()],rS.prototype,"text",void 0),rS=r_([ek("wui-chip")],rS);var rk=h`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,rA=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rO=class extends ew{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return Q`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?Q`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};rO.styles=[eE,e_,rk],rA([eT()],rO.prototype,"size",void 0),rA([eT({type:Boolean})],rO.prototype,"loading",void 0),rO=rA([ek("wui-connect-button")],rO);var r$=h`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,rI=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rD=class extends ew{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return Q`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};rD.styles=[eE,e_,r$],rI([eT({type:Boolean})],rD.prototype,"disabled",void 0),rI([eT()],rD.prototype,"label",void 0),rI([eT()],rD.prototype,"buttonLabel",void 0),rD=rI([ek("wui-cta-button")],rD);let{I:rP}={M:T,P:R,A:N,C:1,L:en,R:es,D:F,V:ea,I:el,H:ec,N:ed,U:eh,B:eu,F:ef},rT=e=>void 0===e.strings,rR=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),rR(e,t);return!0},rN=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},rM=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),rB(t)}};function rj(e){void 0!==this._$AN?(rN(this),this._$AM=e,rM(this)):this._$AM=e}function rU(e,t=!1,r=0){let i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size){if(t){if(Array.isArray(i))for(let e=r;e<i.length;e++)rR(i[e],!1),rN(i[e]);else null!=i&&(rR(i,!1),rN(i))}else rR(this,e)}}let rB=e=>{2==e.type&&(e._$AP??=rU,e._$AQ??=rj)};class rL extends tH{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),rM(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(rR(this,e),rN(this))}setValue(e){if(rT(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}let rF=()=>new rz;class rz{}let rW=new WeakMap,rH=tW(class extends rL{render(e){return ee}update(e,[t]){let r=t!==this.G;return r&&void 0!==this.G&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),ee}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,r=rW.get(t);void 0===r&&(r=new WeakMap,rW.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ht,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?rW.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var rZ=h`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,rq=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rG=class extends ew{constructor(){super(...arguments),this.inputElementRef=rF(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){let e=`wui-size-${this.size}`;return Q` ${this.templateIcon()}
      <input
        ${rH(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${tJ(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${tJ(this.value)}
      />
      <slot></slot>`}templateIcon(){return this.icon?Q`<wui-icon
        data-input=${this.size}
        size="sm"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};rG.styles=[eE,e_,rZ],rq([eT()],rG.prototype,"size",void 0),rq([eT()],rG.prototype,"icon",void 0),rq([eT({type:Boolean})],rG.prototype,"disabled",void 0),rq([eT()],rG.prototype,"placeholder",void 0),rq([eT()],rG.prototype,"type",void 0),rq([eT()],rG.prototype,"keyHint",void 0),rq([eT()],rG.prototype,"value",void 0),rG=rq([ek("wui-input-text")],rG);var rV=h`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,rK=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rY=class extends ew{constructor(){super(...arguments),this.disabled=!1}render(){return Q`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?Q`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};rY.styles=[eE,rV],rK([eT()],rY.prototype,"errorMessage",void 0),rK([eT({type:Boolean})],rY.prototype,"disabled",void 0),rK([eT()],rY.prototype,"value",void 0),rY=rK([ek("wui-email-input")],rY);var rQ=h`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,rX=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rJ=class extends ew{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return Q`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};rJ.styles=[eE,e_,eS,rQ],rX([eT()],rJ.prototype,"size",void 0),rX([eT({type:Boolean})],rJ.prototype,"disabled",void 0),rX([eT()],rJ.prototype,"icon",void 0),rX([eT()],rJ.prototype,"iconColor",void 0),rJ=rX([ek("wui-icon-link")],rJ);var r0=h`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`,r1=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r2=class extends ew{constructor(){super(...arguments),this.icon="copy"}render(){return Q`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};r2.styles=[eE,e_,r0],r1([eT()],r2.prototype,"icon",void 0),r2=r1([ek("wui-input-element")],r2);var r3=h`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }
  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`,r5=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r6=class extends ew{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return Q`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};r6.styles=[eE,e_,r3],r5([eT({type:Boolean})],r6.prototype,"disabled",void 0),r5([eT({type:String})],r6.prototype,"value",void 0),r6=r5([ek("wui-input-numeric")],r6);var r4=h`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`,r8=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r9=class extends ew{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return Q`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};r9.styles=[eE,e_,r4],r8([eT({type:Boolean})],r9.prototype,"disabled",void 0),r8([eT()],r9.prototype,"color",void 0),r9=r8([ek("wui-link")],r9);var r7=h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,ie=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let it=class extends ew{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return Q`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${tJ(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return Q`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return Q`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",r=this.iconSize?this.iconSize:t;return Q`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?Q`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:Q``}chevronTemplate(){return this.chevron?Q`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};it.styles=[eE,e_,r7],ie([eT()],it.prototype,"icon",void 0),ie([eT()],it.prototype,"iconSize",void 0),ie([eT()],it.prototype,"variant",void 0),ie([eT()],it.prototype,"iconVariant",void 0),ie([eT({type:Boolean})],it.prototype,"disabled",void 0),ie([eT()],it.prototype,"imageSrc",void 0),ie([eT()],it.prototype,"alt",void 0),ie([eT({type:Boolean})],it.prototype,"chevron",void 0),ie([eT({type:Boolean})],it.prototype,"loading",void 0),it=ie([ek("wui-list-item")],it),(eA=eO||(eO={})).approve="approved",eA.bought="bought",eA.borrow="borrowed",eA.burn="burnt",eA.cancel="canceled",eA.claim="claimed",eA.deploy="deployed",eA.deposit="deposited",eA.execute="executed",eA.mint="minted",eA.receive="received",eA.repay="repaid",eA.send="sent",eA.sell="sold",eA.stake="staked",eA.trade="swapped",eA.unstake="unstaked",eA.withdraw="withdrawn";var ir=h`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`,ii=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let io=class extends ew{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[e,t]=this.images,r=e?.type==="NFT",i=t?.url?"NFT"===t.type:r;return this.style.cssText=`
    --local-left-border-radius: ${r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    --local-right-border-radius: ${i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    `,Q`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[e,t]=this.images,r=e?.type;return 2===this.images.length&&(e?.url||t?.url)?Q`<div class="swap-images-container">
        ${e?.url?Q`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?Q`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?Q`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===r?Q`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:Q`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return(e=this.getIcon(),this.status&&(t=this.getStatusColor()),e)?Q`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};io.styles=[ir],ii([eT()],io.prototype,"type",void 0),ii([eT()],io.prototype,"status",void 0),ii([eT()],io.prototype,"direction",void 0),ii([eT({type:Boolean})],io.prototype,"onlyDirectionIcon",void 0),ii([eT({type:Array})],io.prototype,"images",void 0),ii([eT({type:Object})],io.prototype,"secondImage",void 0),io=ii([ek("wui-transaction-visual")],io);var ia=h`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`,is=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let il=class extends ew{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return Q`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${tJ(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${tJ(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${eO[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let e=this.descriptions?.[0];return e?Q`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){let e=this.descriptions?.[1];return e?Q`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};il.styles=[eE,ia],is([eT()],il.prototype,"type",void 0),is([eT({type:Array})],il.prototype,"descriptions",void 0),is([eT()],il.prototype,"date",void 0),is([eT({type:Boolean})],il.prototype,"onlyDirectionIcon",void 0),is([eT()],il.prototype,"status",void 0),is([eT()],il.prototype,"direction",void 0),is([eT({type:Array})],il.prototype,"images",void 0),il=is([ek("wui-transaction-list-item")],il);var ic=h`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let iu=class extends ew{render(){return Q`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};iu.styles=[eE,ic],iu=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([ek("wui-transaction-list-item-loader")],iu);var id=h`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`,ih=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ip=class extends ew{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,Q`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};ip.styles=[eE,id],ih([eT()],ip.prototype,"variant",void 0),ip=ih([ek("wui-tag")],ip);var ig=h`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,im=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iw=class extends ew{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return Q`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?Q` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?Q` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?Q`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:Q`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?Q`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?Q`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};iw.styles=[eE,e_,ig],im([eT({type:Array})],iw.prototype,"walletImages",void 0),im([eT()],iw.prototype,"imageSrc",void 0),im([eT()],iw.prototype,"name",void 0),im([eT()],iw.prototype,"tagLabel",void 0),im([eT()],iw.prototype,"tagVariant",void 0),im([eT()],iw.prototype,"icon",void 0),im([eT()],iw.prototype,"walletIcon",void 0),im([eT({type:Boolean})],iw.prototype,"installed",void 0),im([eT({type:Boolean})],iw.prototype,"disabled",void 0),im([eT({type:Boolean})],iw.prototype,"showAllWallets",void 0),iw=im([ek("wui-list-wallet")],iw);var ib=h`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,iy=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iv=class extends ew{constructor(){super(...arguments),this.logo="google"}render(){return Q`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};iv.styles=[eE,ib],iy([eT()],iv.prototype,"logo",void 0),iv=iy([ek("wui-logo")],iv);var ix=h`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,iC=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iE=class extends ew{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return Q`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};iE.styles=[eE,e_,ix],iC([eT()],iE.prototype,"logo",void 0),iC([eT({type:Boolean})],iE.prototype,"disabled",void 0),iE=iC([ek("wui-logo-select")],iE);var i_=h`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`,iS=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ik=class extends ew{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return Q`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?Q`<wui-image src=${this.imageSrc}></wui-image>`:Q`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ik.styles=[eE,e_,i_],iS([eT()],ik.prototype,"imageSrc",void 0),iS([eT({type:Boolean})],ik.prototype,"disabled",void 0),ik=iS([ek("wui-network-button")],ik);var iA=h`
  :host {
    position: relative;
    display: block;
  }
`,iO=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i$=class extends ew{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(e=>""!==e),this.handleKeyDown=(e,t)=>{let r=e.target,i=this.getInputElement(r);if(!i)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let n=i.selectionStart;switch(e.key){case"ArrowLeft":n&&i.setSelectionRange(n+1,n+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===i.value?this.focusInputField("prev",t):this.updateInput(i,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1;if(!this.shouldInputBeEnabled(e))return;let r=this.numerics[e<this.length?e:t],i=r?this.getInputElement(r):void 0;i&&(i.disabled=!1,i.focus())}if("prev"===e){let e=t-1,r=this.numerics[e>-1?e:t],i=r?this.getInputElement(r):void 0;i&&i.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return Q`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>Q`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,r){let i=this.numerics[t],n=e||(i?this.getInputElement(i):void 0);n&&(n.value=r,this.values=this.values.map((e,i)=>i===t?r:e))}handleInput(e,t){let r=e.target,i=this.getInputElement(r);if(i){let r=i.value;"insertFromPaste"===e.inputType?this.handlePaste(i,r,t):t0.isNumber(r)&&e.data?(this.updateInput(i,t,e.data),this.focusInputField("next",t)):this.updateInput(i,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,r){let i=t[0];if(i&&t0.isNumber(i)){this.updateInput(e,r,i);let n=t.substring(1);if(r+1<this.length&&n.length){let e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,n,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};i$.styles=[eE,iA],iO([eT({type:Number})],i$.prototype,"length",void 0),iO([eT({type:String})],i$.prototype,"otp",void 0),iO([eR()],i$.prototype,"values",void 0),i$=iO([ek("wui-otp")],i$);var iI=r(54249);function iD(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}let iP={generate(e,t,r){let i="#141414",n=[],o=function(e,t){let r=Array.prototype.slice.call(iI.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),i=Math.sqrt(r.length);return r.reduce((e,t,r)=>(r%i==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),a=t/o.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach(({x:e,y:t})=>{let r=(o.length-7)*a*e,l=(o.length-7)*a*t;for(let e=0;e<s.length;e+=1){let t=a*(7-2*e);n.push(X`
            <rect
              fill=${2===e?i:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${i}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?l+a*e+2.5:l+a*e}
              y= ${0===e?r+a*e+2.5:r+a*e}
            />
          `)}});let l=Math.floor((r+25)/a),c=o.length/2-l/2,u=o.length/2+l/2-1,d=[];o.forEach((e,t)=>{e.forEach((e,r)=>{!o[t][r]||t<7&&r<7||t>o.length-8&&r<7||t<7&&r>o.length-8||t>c&&t<u&&r>c&&r<u||d.push([t*a+a/2,r*a+a/2])})});let h={};return d.forEach(([e,t])=>{h[e]?h[e]?.push(t):h[e]=[t]}),Object.entries(h).map(([e,t])=>{let r=t.filter(e=>t.every(t=>!iD(e,t,a)));return[Number(e),r]}).forEach(([e,t])=>{t.forEach(t=>{n.push(X`<circle cx=${e} cy=${t} fill=${i} r=${a/2.5} />`)})}),Object.entries(h).filter(([e,t])=>t.length>1).map(([e,t])=>{let r=t.filter(e=>t.some(t=>iD(e,t,a)));return[Number(e),r]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let r=[];for(let e of t){let t=r.find(t=>t.some(t=>iD(e,t,a)));t?t.push(e):r.push([e])}return[e,r.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,r])=>{n.push(X`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${i}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)})}),n}};var iT=h`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,iR=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iN=class extends ew{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,Q`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return X`
      <svg height=${e} width=${e}>
        ${iP.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?Q`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:Q`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};iN.styles=[eE,iT],iR([eT()],iN.prototype,"uri",void 0),iR([eT({type:Number})],iN.prototype,"size",void 0),iR([eT()],iN.prototype,"theme",void 0),iR([eT()],iN.prototype,"imageSrc",void 0),iR([eT()],iN.prototype,"alt",void 0),iN=iR([ek("wui-qr-code")],iN);var iM=h`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let ij=class extends ew{constructor(){super(...arguments),this.inputComponentRef=rF()}render(){return Q`
      <wui-input-text
        ${rH(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};ij.styles=[eE,iM],ij=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([ek("wui-search-bar")],ij);var iU=h`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`,iB=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iL=class extends ew{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return Q`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};iL.styles=[eE,iU],iB([eT()],iL.prototype,"backgroundColor",void 0),iB([eT()],iL.prototype,"iconColor",void 0),iB([eT()],iL.prototype,"icon",void 0),iB([eT()],iL.prototype,"message",void 0),iL=iB([ek("wui-snackbar")],iL);var iF=h`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,iz=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iW=class extends ew{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let r=t===this.activeTab;return Q`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let r=this.buttons[this.activeTab],i=this.buttons[e],n=r?.querySelector("wui-text"),o=i?.querySelector("wui-text"),a=i?.getBoundingClientRect(),s=o?.getBoundingClientRect();r&&n&&!t&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&s&&o&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,i.animate([{width:`${a.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};iW.styles=[eE,e_,iF],iz([eT({type:Array})],iW.prototype,"tabs",void 0),iz([eT()],iW.prototype,"onTabChange",void 0),iz([eT({type:Array})],iW.prototype,"buttons",void 0),iz([eT({type:Boolean})],iW.prototype,"disabled",void 0),iz([eR()],iW.prototype,"activeTab",void 0),iz([eR()],iW.prototype,"localTabWidth",void 0),iz([eR()],iW.prototype,"isDense",void 0),iW=iz([ek("wui-tabs")],iW);var iH=h`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,iZ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iq=class extends ew{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return Q`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};iq.styles=[eE,e_,iH],iZ([eT()],iq.prototype,"placement",void 0),iZ([eT()],iq.prototype,"message",void 0),iq=iZ([ek("wui-tooltip")],iq);var iG=h`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,iV=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iK=class extends ew{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,Q`${this.templateVisual()}`}templateVisual(){return this.imageSrc?Q`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:Q`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};iK.styles=[eE,iG],iV([eT()],iK.prototype,"imageSrc",void 0),iV([eT()],iK.prototype,"alt",void 0),iV([eT({type:Boolean})],iK.prototype,"borderRadiusFull",void 0),iK=iV([ek("wui-visual-thumbnail")],iK);var iY=h`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`,iQ=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iX=class extends ew{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return Q`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};iX.styles=[eE,e_,iY],iQ([eT()],iX.prototype,"label",void 0),iQ([eT()],iX.prototype,"description",void 0),iQ([eT()],iX.prototype,"icon",void 0),iX=iQ([ek("wui-notice-card")],iX);var iJ=h`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`,i0=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i1=class extends ew{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}firstUpdated(){setTimeout(()=>{let e=this.shadowRoot?.querySelector(".heightContent");if(e){this.scrollElement=e;let t=e?.scrollHeight;t&&t>100&&(this.enableAccordion=!0,this.scrollHeightElement=t,this.requestUpdate())}},0)}render(){return Q`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||!!this.toggled}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){let e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?Q` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};i1.styles=[eE,e_,iJ],i0([eT()],i1.prototype,"textTitle",void 0),i0([eT()],i1.prototype,"overflowedContent",void 0),i1=i0([ek("wui-list-accordion")],i1);var i2=h`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,i3=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i5=class extends ew{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return Q`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?Q`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?Q` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:Q`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};i5.styles=[eE,e_,i2],i3([eT()],i5.prototype,"imageSrc",void 0),i3([eT()],i5.prototype,"textTitle",void 0),i3([eT()],i5.prototype,"textValue",void 0),i5=i3([ek("wui-list-content")],i5);var i6=h`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`,i4=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i8=class extends ew{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress=""}render(){return Q`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.receiverAddress}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?Q`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:Q`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};i8.styles=[eE,e_,i6],i4([eT()],i8.prototype,"amount",void 0),i4([eT()],i8.prototype,"networkCurreny",void 0),i4([eT()],i8.prototype,"networkImageUrl",void 0),i4([eT()],i8.prototype,"receiverAddress",void 0),i8=i4([ek("wui-list-wallet-transaction")],i8);var i9=h`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,i7=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ne=class extends ew{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&t0.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&t0.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&t0.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&t0.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&t0.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&t0.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&t0.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&t0.getSpacingStyles(this.margin,3)};
    `,Q`<slot></slot>`}};ne.styles=[eE,i9],i7([eT()],ne.prototype,"gridTemplateRows",void 0),i7([eT()],ne.prototype,"gridTemplateColumns",void 0),i7([eT()],ne.prototype,"justifyItems",void 0),i7([eT()],ne.prototype,"alignItems",void 0),i7([eT()],ne.prototype,"justifyContent",void 0),i7([eT()],ne.prototype,"alignContent",void 0),i7([eT()],ne.prototype,"columnGap",void 0),i7([eT()],ne.prototype,"rowGap",void 0),i7([eT()],ne.prototype,"gap",void 0),i7([eT()],ne.prototype,"padding",void 0),i7([eT()],ne.prototype,"margin",void 0),ne=i7([ek("wui-grid")],ne);var nt=h`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`,nr=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ni=class extends ew{constructor(){super(...arguments),this.text=""}render(){return Q`${this.template()}`}template(){return this.text?Q`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};ni.styles=[eE,nt],nr([eT()],ni.prototype,"text",void 0),ni=nr([ek("wui-separator")],ni);var nn=r(88598);let no=["receive","deposit","borrow","claim"],na=["withdraw","repay","burn"],ns={getTransactionGroupTitle:e=>e===nn.E.getYear()?"This Year":e,getTransactionImages(e){let[t,r]=e,i=!!t&&e?.every(e=>!!e.nft_info),n=e?.length>1;return e?.length!==2||i?n?e.map(e=>this.getTransactionImage(e)):[this.getTransactionImage(t)]:[this.getTransactionImage(t),this.getTransactionImage(r)]},getTransactionImage:e=>({type:ns.getTransactionTransferTokenType(e),url:ns.getTransactionImageURL(e)}),getTransactionImageURL(e){let t=null,r=!!e?.nft_info,i=!!e?.fungible_info;return e&&r?t=e?.nft_info?.content?.preview?.url:e&&i&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":null,getTransactionDescriptions(e){let t=e.metadata?.operationType,r=e.transfers,i=e.transfers?.length>0,n=e.transfers?.length>1,o=i&&r?.every(e=>!!e.fungible_info),[a,s]=r,l=this.getTransferDescription(a);if(this.getTransferDescription(s),!i)return("send"===t||"receive"===t)&&o?[l=t0.getTruncateString({string:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),t0.getTruncateString({string:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[e.metadata.status];if(n)return r.map(e=>this.getTransferDescription(e));let c="";return no.includes(t)?c="+":na.includes(t)&&(c="-"),[l=c.concat(l)]},getTransferDescription(e){let t="";return e&&(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){return e?[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue:e=>e?parseFloat(e).toFixed(3):null}},59150:function(e,t,r){"use strict";let i,n,o,a;function s(){if(!n)throw Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');return{open:async function(e){await n?.open(e)},close:async function(){await n?.close()}}}r.d(t,{OY:function(){return iM},k_:function(){return s}}),r(67294);var l,c,u,d,h,f,p,g=r(63190),m=r(66403),w=r(76472),b=r(95128),y=r(92233),v=r(18569),x=r(88382);let C=e=>e??x.Ld;var E=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let _=class extends y.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=w.AccountController.state.address,this.balanceVal=w.AccountController.state.balance,this.balanceSymbol=w.AccountController.state.balanceSymbol,this.profileName=w.AccountController.state.profileName,this.profileImage=w.AccountController.state.profileImage,this.network=w.NetworkController.state.caipNetwork,this.unsubscribe.push(w.AccountController.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),w.NetworkController.subscribeKey("caipNetwork",e=>this.network=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=w.fz.getNetworkImage(this.network),t="show"===this.balance;return(0,y.dy)`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${C(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${C(e)}
        avatarSrc=${C(this.profileImage)}
        balance=${t?w.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){w.IN.open()}};E([(0,v.Cb)({type:Boolean})],_.prototype,"disabled",void 0),E([(0,v.Cb)()],_.prototype,"balance",void 0),E([(0,v.Cb)()],_.prototype,"charsStart",void 0),E([(0,v.Cb)()],_.prototype,"charsEnd",void 0),E([(0,v.SB)()],_.prototype,"address",void 0),E([(0,v.SB)()],_.prototype,"balanceVal",void 0),E([(0,v.SB)()],_.prototype,"balanceSymbol",void 0),E([(0,v.SB)()],_.prototype,"profileName",void 0),E([(0,v.SB)()],_.prototype,"profileImage",void 0),E([(0,v.SB)()],_.prototype,"network",void 0),_=E([(0,b.customElement)("w3m-account-button")],_);var S=(0,y.iv)`
  :host {
    display: block;
    width: max-content;
  }
`,k=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let A=class extends y.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=w.AccountController.state.isConnected,this.unsubscribe.push(w.AccountController.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?(0,y.dy)`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${C(this.balance)}
            .charsStart=${C(this.charsStart)}
            .charsEnd=${C(this.charsEnd)}
          >
          </w3m-account-button>
        `:(0,y.dy)`
          <w3m-connect-button
            size=${C(this.size)}
            label=${C(this.label)}
            loadingLabel=${C(this.loadingLabel)}
          ></w3m-connect-button>
        `}};A.styles=S,k([(0,v.Cb)({type:Boolean})],A.prototype,"disabled",void 0),k([(0,v.Cb)()],A.prototype,"balance",void 0),k([(0,v.Cb)()],A.prototype,"size",void 0),k([(0,v.Cb)()],A.prototype,"label",void 0),k([(0,v.Cb)()],A.prototype,"loadingLabel",void 0),k([(0,v.Cb)()],A.prototype,"charsStart",void 0),k([(0,v.Cb)()],A.prototype,"charsEnd",void 0),k([(0,v.SB)()],A.prototype,"isAccount",void 0),A=k([(0,b.customElement)("w3m-button")],A);var O=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let $=class extends y.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=w.IN.state.open,this.loading=w.IN.state.loading,this.unsubscribe.push(w.IN.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.loading||this.open;return(0,y.dy)`
      <wui-connect-button
        size=${C(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?w.IN.close():this.loading||w.IN.open()}};O([(0,v.Cb)()],$.prototype,"size",void 0),O([(0,v.Cb)()],$.prototype,"label",void 0),O([(0,v.Cb)()],$.prototype,"loadingLabel",void 0),O([(0,v.SB)()],$.prototype,"open",void 0),O([(0,v.SB)()],$.prototype,"loading",void 0),$=O([(0,b.customElement)("w3m-connect-button")],$),r(90078);var I=(0,y.iv)`
  :host {
    display: block;
    width: max-content;
  }
`,D=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let P=class extends y.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=w.NetworkController.state.caipNetwork,this.connected=w.AccountController.state.isConnected,this.loading=w.IN.state.loading,this.unsubscribe.push(w.NetworkController.subscribeKey("caipNetwork",e=>this.network=e),w.AccountController.subscribeKey("isConnected",e=>this.connected=e),w.IN.subscribeKey("loading",e=>this.loading=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,y.dy)`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        imageSrc=${C(w.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||w.IN.open({view:"Networks"})}};P.styles=I,D([(0,v.Cb)({type:Boolean})],P.prototype,"disabled",void 0),D([(0,v.SB)()],P.prototype,"network",void 0),D([(0,v.SB)()],P.prototype,"connected",void 0),D([(0,v.SB)()],P.prototype,"loading",void 0),P=D([(0,b.customElement)("w3m-network-button")],P);var T=(0,y.iv)`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,R=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let N=class extends y.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=w.RouterController.state.view,this.unsubscribe.push(w.RouterController.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{let t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return(0,y.dy)`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return(0,y.dy)`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return(0,y.dy)`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return(0,y.dy)`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return(0,y.dy)`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return(0,y.dy)`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return(0,y.dy)`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return(0,y.dy)`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return(0,y.dy)`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return(0,y.dy)`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return(0,y.dy)`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return(0,y.dy)`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return(0,y.dy)`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return(0,y.dy)`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return(0,y.dy)`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return(0,y.dy)`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return(0,y.dy)`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return(0,y.dy)`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return(0,y.dy)`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailWalletWaiting":return(0,y.dy)`<w3m-update-email-wallet-waiting-view></w3m-update-email-wallet-waiting-view>`}}async onViewChange(e){let{history:t}=w.RouterController.state,r=-10,i=10;t.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};N.styles=T,R([(0,v.SB)()],N.prototype,"view",void 0),N=R([(0,b.customElement)("w3m-router")],N);var M=(0,y.iv)`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`,j=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let U=class extends y.oi{constructor(){super(),this.usubscribe=[],this.address=w.AccountController.state.address,this.profileImage=w.AccountController.state.profileImage,this.profileName=w.AccountController.state.profileName,this.balance=w.AccountController.state.balance,this.balanceSymbol=w.AccountController.state.balanceSymbol,this.network=w.NetworkController.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(w.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):w.IN.close()}),w.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=w.fz.getNetworkImage(this.network);return(0,y.dy)`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${C(null===this.profileImage?void 0:this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?b.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):b.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${w.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${C(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}emailCardTemplate(){let e=w.MO.getConnectedConnector(),t=w.ConnectorController.getEmailConnector(),{origin:r}=location;return!t||"EMAIL"!==e||r.includes(w.bq.SECURE_SITE)?null:(0,y.dy)`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a non-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}emailBtnTemplate(){let e=w.MO.getConnectedConnector(),t=w.ConnectorController.getEmailConnector();if(!t||"EMAIL"!==e)return null;let r=t.provider.getEmail()??"";return(0,y.dy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(r)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${r}</wui-text>
      </wui-list-item>
    `}explorerBtnTemplate(){let{addressExplorerUrl:e}=w.AccountController.state;return e?(0,y.dy)`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){let{requestedCaipNetworks:e}=w.NetworkController.state,t=!!e&&e.length>1,r=e?.find(({id:e})=>e===this.network?.id);return t||!r}onCopyAddress(){try{this.address&&(w.j1.copyToClopboard(this.address),w.SnackController.showSuccess("Address copied"))}catch{w.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&w.RouterController.push("Networks")}onTransactions(){w.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),w.RouterController.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await w.ConnectionController.disconnect(),w.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),w.IN.close()}catch{w.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),w.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){let{addressExplorerUrl:e}=w.AccountController.state;e&&w.j1.openHref(e,"_blank")}onGoToUpgradeView(){w.Xs.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),w.RouterController.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){w.RouterController.push("UpdateEmailWallet",{email:e})}};U.styles=M,j([(0,v.SB)()],U.prototype,"address",void 0),j([(0,v.SB)()],U.prototype,"profileImage",void 0),j([(0,v.SB)()],U.prototype,"profileName",void 0),j([(0,v.SB)()],U.prototype,"balance",void 0),j([(0,v.SB)()],U.prototype,"balanceSymbol",void 0),j([(0,v.SB)()],U.prototype,"network",void 0),j([(0,v.SB)()],U.prototype,"disconecting",void 0),U=j([(0,b.customElement)("w3m-account-view")],U);var B=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let L=class extends y.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=w.j1.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return(0,y.dy)`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?(0,y.dy)`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:(0,y.dy)`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return w.j1.isMobile()?(0,y.dy)`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){w.RouterController.push("ConnectingWalletConnect")}};B([(0,v.SB)()],L.prototype,"search",void 0),L=B([(0,b.customElement)("w3m-all-wallets-view")],L);var F=(0,y.iv)`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,z=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let W=class extends y.oi{constructor(){super(),this.unsubscribe=[],this.connectors=w.ConnectorController.state.connectors,this.unsubscribe.push(w.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,y.dy)`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(w.j1.isMobile())return null;let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);return e?(0,y.dy)`
      <wui-list-wallet
        imageSrc=${C(w.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:e}=w.OptionsController.state;return e?.length?this.filterOutDuplicateWallets(e).map(e=>(0,y.dy)`
        <wui-list-wallet
          imageSrc=${C(w.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(e=>"WALLET_CONNECT"===e.type))return null;let{featured:e}=w.ApiController.state;return e.length?this.filterOutDuplicateWallets(e).map(e=>(0,y.dy)`
        <wui-list-wallet
          imageSrc=${C(w.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return w.MO.getRecentWallets().map(e=>(0,y.dy)`
        <wui-list-wallet
          imageSrc=${C(w.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>"ANNOUNCED"!==e.type?null:(0,y.dy)`
        <wui-list-wallet
          imageSrc=${C(w.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){let e=this.connectors.find(e=>"ANNOUNCED"===e.type);return this.connectors.map(t=>"INJECTED"===t.type&&w.ConnectionController.checkInstalled()?(0,y.dy)`
        <wui-list-wallet
          imageSrc=${C(w.fz.getConnectorImage(t))}
          .installed=${!!e}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `:null)}connectorsTemplate(){let e=w.ConnectorController.getAnnouncedConnectorRdns();return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(w.bq.CONNECTOR_RDNS_MAP[t.id])?null:(0,y.dy)`
        <wui-list-wallet
          imageSrc=${C(w.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){if(!this.connectors.find(e=>"WALLET_CONNECT"===e.type))return null;let e=w.ApiController.state.count+w.ApiController.state.featured.length,t=e<10?e:10*Math.floor(e/10),r=t<e?`${t}+`:`${t}`;return(0,y.dy)`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${r}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(e=>"WALLET_CONNECT"===e.type))return null;let{recommended:e}=w.ApiController.state,{customWallets:t,featuredWalletIds:r}=w.OptionsController.state,{connectors:i}=w.ConnectorController.state,n=w.MO.getRecentWallets(),o=i.filter(e=>"ANNOUNCED"===e.type);if(r||t||!e.length)return null;let a=o.length+n.length;return this.filterOutDuplicateWallets(e).slice(0,Math.max(0,2-a)).map(e=>(0,y.dy)`
        <wui-list-wallet
          imageSrc=${C(w.fz.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}onConnector(e){"WALLET_CONNECT"===e.type?w.j1.isMobile()?w.RouterController.push("AllWallets"):w.RouterController.push("ConnectingWalletConnect"):w.RouterController.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){let{connectors:t}=w.ConnectorController.state,r=w.MO.getRecentWallets().map(e=>e.id),i=t.map(e=>e.info?.rdns).filter(Boolean);return e.filter(e=>!r.includes(e.id)&&!i.includes(e.rdns??void 0))}onAllWallets(){w.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),w.RouterController.push("AllWallets")}onConnectWallet(e){w.RouterController.push("ConnectingWalletConnect",{wallet:e})}};W.styles=F,z([(0,v.SB)()],W.prototype,"connectors",void 0),W=z([(0,b.customElement)("w3m-connect-view")],W);var H=(0,y.iv)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,Z=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};class q extends y.oi{constructor(){super(),this.wallet=w.RouterController.state.data?.wallet,this.connector=w.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=w.fz.getWalletImage(this.wallet)??w.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=w.ConnectionController.state.wcUri,this.error=w.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(w.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),w.ConnectionController.subscribeKey("wcError",e=>this.error=e),w.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),(0,y.dy)`
      <wui-flex
        data-error=${C(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${C(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?(0,y.dy)`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(w.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let e=w.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return(0,y.dy)`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(w.j1.copyToClopboard(this.uri),w.SnackController.showSuccess("Link copied"))}catch{w.SnackController.showError("Failed to copy")}}}q.styles=H,Z([(0,v.SB)()],q.prototype,"uri",void 0),Z([(0,v.SB)()],q.prototype,"error",void 0),Z([(0,v.SB)()],q.prototype,"ready",void 0),Z([(0,v.SB)()],q.prototype,"showRetry",void 0),Z([(0,v.SB)()],q.prototype,"buffering",void 0),Z([(0,v.Cb)({type:Boolean})],q.prototype,"isMobile",void 0),Z([(0,v.Cb)()],q.prototype,"onRetry",void 0);let G={INJECTED:"browser",ANNOUNCED:"browser"},V=class extends q{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");w.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:G[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&w.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await w.ConnectionController.connectExternal(this.connector),w.yD.state.isSiweEnabled?w.RouterController.push("ConnectingSiwe"):w.IN.close(),w.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){w.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};V=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,b.customElement)("w3m-connecting-external-view")],V);var K=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let Y=class extends y.oi{constructor(){super(...arguments),this.dappName=w.OptionsController.state.metadata?.name,this.isSigning=!1}render(){return(0,y.dy)`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,w.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{w.yD.setStatus("loading");let e=await w.yD.signIn();return w.yD.setStatus("success"),w.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch(e){return w.SnackController.showError("Signature declined"),w.yD.setStatus("error"),w.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){let{isConnected:e}=w.AccountController.state;e?(await w.ConnectionController.disconnect(),w.IN.close()):w.RouterController.push("Connect"),w.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};K([(0,v.SB)()],Y.prototype,"isSigning",void 0),Y=K([(0,b.customElement)("w3m-connecting-siwe-view")],Y);var Q=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let X=class extends y.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=w.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),w.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),(0,y.dy)`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):(0,y.dy)`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{let{wcPairingExpiry:t}=w.ConnectionController.state;if(e||w.j1.isPairingExpired(t)){if(w.ConnectionController.connectWalletConnect(),this.wallet){let e=w.fz.getWalletImage(this.wallet);e&&w.MO.setConnectedWalletImageUrl(e)}else{let e=w.ConnectorController.state.connectors.find(e=>"WALLET_CONNECT"===e.type),t=w.fz.getConnectorImage(e);t&&w.MO.setConnectedWalletImageUrl(t)}await w.ConnectionController.state.wcPromise,this.finalizeConnection(),w.yD.state.isSiweEnabled?w.RouterController.push("ConnectingSiwe"):w.IN.close()}}catch(e){w.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),w.ConnectionController.setWcError(!0),w.j1.isAllowedRetry(this.lastRetry)&&(w.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:e,recentWallet:t}=w.ConnectionController.state;e&&w.MO.setWalletConnectDeepLink(e),t&&w.MO.setWeb3ModalRecent(t),w.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:r,injected:i,rdns:n}=this.wallet,o=i?.map(({injected_id:e})=>e).filter(Boolean),a=n?[n]:o??[],s=a.length,l=w.ConnectionController.checkInstalled(a),c=s&&l,u=t&&!w.j1.isMobile();c&&this.platforms.push("browser"),e&&this.platforms.push(w.j1.isMobile()?"mobile":"qrcode"),r&&this.platforms.push("web"),u&&this.platforms.push("desktop"),!c&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return(0,y.dy)`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return(0,y.dy)`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return(0,y.dy)`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return(0,y.dy)`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return(0,y.dy)`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return(0,y.dy)`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?(0,y.dy)`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Q([(0,v.SB)()],X.prototype,"platform",void 0),Q([(0,v.SB)()],X.prototype,"platforms",void 0),X=Q([(0,b.customElement)("w3m-connecting-wc-view")],X);let J=class extends y.oi{constructor(){super(...arguments),this.wallet=w.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return(0,y.dy)`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?(0,y.dy)`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?(0,y.dy)`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?(0,y.dy)`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?(0,y.dy)`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&w.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&w.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&w.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&w.j1.openHref(this.wallet.homepage,"_blank")}};J=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,b.customElement)("w3m-downloads-view")],J);let ee=class extends y.oi{render(){return(0,y.dy)`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{w.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=w.ApiController.state,{customWallets:r}=w.OptionsController.state;return[...t,...r??[],...e].slice(0,4).map(e=>(0,y.dy)`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${C(w.fz.getWalletImage(e))}
          @click=${()=>{w.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};ee=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,b.customElement)("w3m-get-wallet-view")],ee);var et=(0,y.iv)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,er=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ei=class extends y.oi{constructor(){super(),this.network=w.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return(0,y.dy)`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${C(w.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:(0,y.dy)`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await w.NetworkController.switchActiveNetwork(this.network),w.yD.state.isSiweEnabled||w._4.navigateAfterNetworkSwitch())}catch{this.error=!0}}};ei.styles=et,er([(0,v.SB)()],ei.prototype,"showRetry",void 0),er([(0,v.SB)()],ei.prototype,"error",void 0),ei=er([(0,b.customElement)("w3m-network-switch-view")],ei);var en=(0,y.iv)`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,eo=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ea=class extends y.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=w.NetworkController.state.caipNetwork,this.unsubscribe.push(w.NetworkController.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,y.dy)`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){w.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),w.RouterController.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=w.NetworkController.state,i={};return t&&e&&(e.forEach((e,t)=>{i[e]=t}),t.sort((e,t)=>{let r=i[e.id],n=i[t.id];return void 0!==r&&void 0!==n?r-n:void 0!==r?-1:void 0!==n?1:0})),t?.map(t=>y.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===t.id}
          imageSrc=${C(w.fz.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${!r&&!e?.includes(t.id)}
          data-testid=${`w3m-network-switch-${t.name??t.id}`}
        ></wui-card-select>
      `)}async onSwitchNetwork(e){let{isConnected:t}=w.AccountController.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:n}=w.NetworkController.state,{data:o}=w.RouterController.state;t&&n?.id!==e.id?r?.includes(e.id)?(await w.NetworkController.switchActiveNetwork(e),w._4.navigateAfterNetworkSwitch()):i&&w.RouterController.push("SwitchNetwork",{...o,network:e}):t||(w.NetworkController.setCaipNetwork(e),w.RouterController.push("Connect"))}};ea.styles=en,eo([(0,v.SB)()],ea.prototype,"caipNetwork",void 0),ea=eo([(0,b.customElement)("w3m-networks-view")],ea);var es=r(88598),el=(0,y.iv)`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`,ec=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let eu="last-transaction",ed=class extends y.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=w.AccountController.state.address,this.transactions=w.sl.state.transactions,this.transactionsByYear=w.sl.state.transactionsByYear,this.loading=w.sl.state.loading,this.empty=w.sl.state.empty,this.next=w.sl.state.next,this.unsubscribe.push(w.AccountController.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,w.sl.resetTransactions(),w.sl.fetchTransactions(e.address))}),w.sl.subscribe(e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){0===this.transactions.length&&w.sl.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,y.dy)`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){let e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((t,r)=>{let i=r===e.length-1,n=parseInt(t,10),o=b.TransactionUtil.getTransactionGroupTitle(n),a=this.transactionsByYear[n];return a?(0,y.dy)`
        <wui-flex flexDirection="column" gap="s">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${o}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,i)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(e,t){let{date:r,descriptions:i,direction:n,isAllNFT:o,images:a,status:s,transfers:l,type:c}=this.getTransactionListItemProps(e),u=l?.length>1;return l?.length!==2||o?u?l.map((e,i)=>{let n=b.TransactionUtil.getTransferDescription(e),o=t&&i===l.length-1;return(0,y.dy)` <wui-transaction-list-item
          date=${r}
          direction=${e.direction}
          id=${o&&this.next?eu:""}
          status=${s}
          type=${c}
          .onlyDirectionIcon=${!0}
          .images=${[a?.[i]]}
          .descriptions=${[n]}
        ></wui-transaction-list-item>`}):(0,y.dy)`
      <wui-transaction-list-item
        date=${r}
        .direction=${n}
        id=${t&&this.next?eu:""}
        status=${s}
        type=${c}
        .images=${a}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `:(0,y.dy)`
        <wui-transaction-list-item
          date=${r}
          .direction=${n}
          id=${t&&this.next?eu:""}
          status=${s}
          type=${c}
          .images=${a}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `}templateTransactions(e,t){return e.map((r,i)=>{let n=t&&i===e.length-1;return(0,y.dy)`${this.templateRenderTransaction(r,n)}`})}templateEmpty(){return(0,y.dy)`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(7).fill((0,y.dy)` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}createPaginationObserver(){let{projectId:e}=w.OptionsController.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(w.sl.fetchTransactions(this.address),w.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let e=this.shadowRoot?.querySelector(`#${eu}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){let t=es.E.getRelativeDateFromNow(e?.metadata?.minedAt),r=b.TransactionUtil.getTransactionDescriptions(e),i=e?.transfers,n=e?.transfers?.[0],o=!!n&&e?.transfers?.every(e=>!!e.nft_info),a=b.TransactionUtil.getTransactionImages(i);return{date:t,direction:n?.direction,descriptions:r,isAllNFT:o,images:a,status:e.metadata?.status,transfers:i,type:e.metadata?.operationType}}};ed.styles=el,ec([(0,v.SB)()],ed.prototype,"address",void 0),ec([(0,v.SB)()],ed.prototype,"transactions",void 0),ec([(0,v.SB)()],ed.prototype,"transactionsByYear",void 0),ec([(0,v.SB)()],ed.prototype,"loading",void 0),ec([(0,v.SB)()],ed.prototype,"empty",void 0),ec([(0,v.SB)()],ed.prototype,"next",void 0),ed=ec([(0,b.customElement)("w3m-transactions-view")],ed);let eh=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],ef=class extends y.oi{render(){return(0,y.dy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eh}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{w.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};ef=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,b.customElement)("w3m-what-is-a-network-view")],ef);let ep=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],eg=class extends y.oi{render(){return(0,y.dy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ep}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){w.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),w.RouterController.push("GetWallet")}};eg=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,b.customElement)("w3m-what-is-a-wallet-view")],eg);var em=(0,y.iv)`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;let ew={SECURE_SITE_SDK:"https://secure.web3modal.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:"@w3m-frame/AWAIT_UPDATE_EMAIL_SUCCESS",FRAME_AWAIT_UPDATE_EMAIL_ERROR:"@w3m-frame/AWAIT_UPDATE_EMAIL_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR"};(l=d||(d={})).assertEqual=e=>e,l.assertIs=function(e){},l.assertNever=function(e){throw Error()},l.arrayToEnum=e=>{let t={};for(let r of e)t[r]=r;return t},l.getValidEnumValues=e=>{let t=l.objectKeys(e).filter(t=>"number"!=typeof e[e[t]]),r={};for(let i of t)r[i]=e[i];return l.objectValues(r)},l.objectValues=e=>l.objectKeys(e).map(function(t){return e[t]}),l.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{let t=[];for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t},l.find=(e,t)=>{for(let r of e)if(t(r))return r},l.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,l.joinValues=function(e,t=" | "){return e.map(e=>"string"==typeof e?`'${e}'`:e).join(t)},l.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t,(h||(h={})).mergeShapes=(e,t)=>({...e,...t});let eb=d.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),ey=e=>{switch(typeof e){case"undefined":return eb.undefined;case"string":return eb.string;case"number":return isNaN(e)?eb.nan:eb.number;case"boolean":return eb.boolean;case"function":return eb.function;case"bigint":return eb.bigint;case"symbol":return eb.symbol;case"object":if(Array.isArray(e))return eb.array;if(null===e)return eb.null;if(e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch)return eb.promise;if("undefined"!=typeof Map&&e instanceof Map)return eb.map;if("undefined"!=typeof Set&&e instanceof Set)return eb.set;if("undefined"!=typeof Date&&e instanceof Date)return eb.date;return eb.object;default:return eb.unknown}},ev=d.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class ex extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){let t=e||function(e){return e.message},r={_errors:[]},i=e=>{for(let n of e.issues)if("invalid_union"===n.code)n.unionErrors.map(i);else if("invalid_return_type"===n.code)i(n.returnTypeError);else if("invalid_arguments"===n.code)i(n.argumentsError);else if(0===n.path.length)r._errors.push(t(n));else{let e=r,i=0;for(;i<n.path.length;){let r=n.path[i];i===n.path.length-1?(e[r]=e[r]||{_errors:[]},e[r]._errors.push(t(n))):e[r]=e[r]||{_errors:[]},e=e[r],i++}}};return i(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,d.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=e=>e.message){let t={},r=[];for(let i of this.issues)i.path.length>0?(t[i.path[0]]=t[i.path[0]]||[],t[i.path[0]].push(e(i))):r.push(e(i));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}ex.create=e=>new ex(e);let eC=(e,t)=>{let r;switch(e.code){case ev.invalid_type:r=e.received===eb.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case ev.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(e.expected,d.jsonStringifyReplacer)}`;break;case ev.unrecognized_keys:r=`Unrecognized key(s) in object: ${d.joinValues(e.keys,", ")}`;break;case ev.invalid_union:r="Invalid input";break;case ev.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${d.joinValues(e.options)}`;break;case ev.invalid_enum_value:r=`Invalid enum value. Expected ${d.joinValues(e.options)}, received '${e.received}'`;break;case ev.invalid_arguments:r="Invalid function arguments";break;case ev.invalid_return_type:r="Invalid function return type";break;case ev.invalid_date:r="Invalid date";break;case ev.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(r=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(r=`${r} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?r=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?r=`Invalid input: must end with "${e.validation.endsWith}"`:d.assertNever(e.validation):r="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case ev.too_small:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case ev.too_big:r="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case ev.custom:r="Invalid input";break;case ev.invalid_intersection_types:r="Intersection results could not be merged";break;case ev.not_multiple_of:r=`Number must be a multiple of ${e.multipleOf}`;break;case ev.not_finite:r="Number must be finite";break;default:r=t.defaultError,d.assertNever(e)}return{message:r}},eE=eC;function e_(){return eE}let eS=e=>{let{data:t,path:r,errorMaps:i,issueData:n}=e,o=[...r,...n.path||[]],a={...n,path:o},s="";for(let e of i.filter(e=>!!e).slice().reverse())s=e(a,{data:t,defaultError:s}).message;return{...n,path:o,message:n.message||s}};function ek(e,t){let r=eS({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,e_(),eC].filter(e=>!!e)});e.common.issues.push(r)}class eA{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){let r=[];for(let i of t){if("aborted"===i.status)return eO;"dirty"===i.status&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){let r=[];for(let e of t)r.push({key:await e.key,value:await e.value});return eA.mergeObjectSync(e,r)}static mergeObjectSync(e,t){let r={};for(let i of t){let{key:t,value:n}=i;if("aborted"===t.status||"aborted"===n.status)return eO;"dirty"===t.status&&e.dirty(),"dirty"===n.status&&e.dirty(),"__proto__"!==t.value&&(void 0!==n.value||i.alwaysSet)&&(r[t.value]=n.value)}return{status:e.value,value:r}}}let eO=Object.freeze({status:"aborted"}),e$=e=>({status:"dirty",value:e}),eI=e=>({status:"valid",value:e}),eD=e=>"aborted"===e.status,eP=e=>"dirty"===e.status,eT=e=>"valid"===e.status,eR=e=>"undefined"!=typeof Promise&&e instanceof Promise;(c=f||(f={})).errToObj=e=>"string"==typeof e?{message:e}:e||{},c.toString=e=>"string"==typeof e?e:null==e?void 0:e.message;class eN{constructor(e,t,r,i){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}let eM=(e,t)=>{if(eT(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let t=new ex(e.common.issues);return this._error=t,this._error}}};function ej(e){if(!e)return{};let{errorMap:t,invalid_type_error:r,required_error:i,description:n}=e;if(t&&(r||i))throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');return t?{errorMap:t,description:n}:{errorMap:(e,t)=>"invalid_type"!==e.code?{message:t.defaultError}:void 0===t.data?{message:null!=i?i:t.defaultError}:{message:null!=r?r:t.defaultError},description:n}}class eU{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return ey(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:ey(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new eA,ctx:{common:e.parent.common,data:e.data,parsedType:ey(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(eR(t))throw Error("Synchronous parse encountered promise.");return t}_parseAsync(e){return Promise.resolve(this._parse(e))}parse(e,t){let r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;let i={common:{issues:[],async:null!==(r=null==t?void 0:t.async)&&void 0!==r&&r,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ey(e)},n=this._parseSync({data:e,path:i.path,parent:i});return eM(i,n)}async parseAsync(e,t){let r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){let r={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ey(e)},i=this._parse({data:e,path:r.path,parent:r});return eM(r,await (eR(i)?i:Promise.resolve(i)))}refine(e,t){let r=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t;return this._refinement((t,i)=>{let n=e(t),o=()=>i.addIssue({code:ev.custom,...r(t)});return"undefined"!=typeof Promise&&n instanceof Promise?n.then(e=>!!e||(o(),!1)):!!n||(o(),!1)})}refinement(e,t){return this._refinement((r,i)=>!!e(r)||(i.addIssue("function"==typeof t?t(r,i):t),!1))}_refinement(e){return new th({schema:this,typeName:p.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return tf.create(this,this._def)}nullable(){return tp.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return e6.create(this,this._def)}promise(){return td.create(this,this._def)}or(e){return e8.create([this,e],this._def)}and(e){return te.create(this,e,this._def)}transform(e){return new th({...ej(this._def),schema:this,typeName:p.ZodEffects,effect:{type:"transform",transform:e}})}default(e){return new tg({...ej(this._def),innerType:this,defaultValue:"function"==typeof e?e:()=>e,typeName:p.ZodDefault})}brand(){return new ty({typeName:p.ZodBranded,type:this,...ej(this._def)})}catch(e){return new tm({...ej(this._def),innerType:this,catchValue:"function"==typeof e?e:()=>e,typeName:p.ZodCatch})}describe(e){return new this.constructor({...this._def,description:e})}pipe(e){return tv.create(this,e)}readonly(){return tx.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}let eB=/^c[^\s-]{8,}$/i,eL=/^[a-z][a-z0-9]*$/,eF=/^[0-9A-HJKMNP-TV-Z]{26}$/,ez=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,eW=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,eH=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,eZ=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,eq=e=>e.precision?e.offset?RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):0===e.precision?e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");class eG extends eU{_parse(e){let t;if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==eb.string){let t=this._getOrReturnCtx(e);return ek(t,{code:ev.invalid_type,expected:eb.string,received:t.parsedType}),eO}let r=new eA;for(let a of this._def.checks)if("min"===a.kind)e.data.length<a.value&&(ek(t=this._getOrReturnCtx(e,t),{code:ev.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if("max"===a.kind)e.data.length>a.value&&(ek(t=this._getOrReturnCtx(e,t),{code:ev.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if("length"===a.kind){let i=e.data.length>a.value,n=e.data.length<a.value;(i||n)&&(t=this._getOrReturnCtx(e,t),i?ek(t,{code:ev.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):n&&ek(t,{code:ev.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),r.dirty())}else if("email"===a.kind)eW.test(e.data)||(ek(t=this._getOrReturnCtx(e,t),{validation:"email",code:ev.invalid_string,message:a.message}),r.dirty());else if("emoji"===a.kind)i||(i=RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),i.test(e.data)||(ek(t=this._getOrReturnCtx(e,t),{validation:"emoji",code:ev.invalid_string,message:a.message}),r.dirty());else if("uuid"===a.kind)ez.test(e.data)||(ek(t=this._getOrReturnCtx(e,t),{validation:"uuid",code:ev.invalid_string,message:a.message}),r.dirty());else if("cuid"===a.kind)eB.test(e.data)||(ek(t=this._getOrReturnCtx(e,t),{validation:"cuid",code:ev.invalid_string,message:a.message}),r.dirty());else if("cuid2"===a.kind)eL.test(e.data)||(ek(t=this._getOrReturnCtx(e,t),{validation:"cuid2",code:ev.invalid_string,message:a.message}),r.dirty());else if("ulid"===a.kind)eF.test(e.data)||(ek(t=this._getOrReturnCtx(e,t),{validation:"ulid",code:ev.invalid_string,message:a.message}),r.dirty());else if("url"===a.kind)try{new URL(e.data)}catch(i){ek(t=this._getOrReturnCtx(e,t),{validation:"url",code:ev.invalid_string,message:a.message}),r.dirty()}else if("regex"===a.kind)a.regex.lastIndex=0,a.regex.test(e.data)||(ek(t=this._getOrReturnCtx(e,t),{validation:"regex",code:ev.invalid_string,message:a.message}),r.dirty());else if("trim"===a.kind)e.data=e.data.trim();else if("includes"===a.kind)e.data.includes(a.value,a.position)||(ek(t=this._getOrReturnCtx(e,t),{code:ev.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),r.dirty());else if("toLowerCase"===a.kind)e.data=e.data.toLowerCase();else if("toUpperCase"===a.kind)e.data=e.data.toUpperCase();else if("startsWith"===a.kind)e.data.startsWith(a.value)||(ek(t=this._getOrReturnCtx(e,t),{code:ev.invalid_string,validation:{startsWith:a.value},message:a.message}),r.dirty());else if("endsWith"===a.kind)e.data.endsWith(a.value)||(ek(t=this._getOrReturnCtx(e,t),{code:ev.invalid_string,validation:{endsWith:a.value},message:a.message}),r.dirty());else if("datetime"===a.kind)eq(a).test(e.data)||(ek(t=this._getOrReturnCtx(e,t),{code:ev.invalid_string,validation:"datetime",message:a.message}),r.dirty());else if("ip"===a.kind){var n,o;n=e.data,("v4"===(o=a.version)||!o)&&eH.test(n)||("v6"===o||!o)&&eZ.test(n)||(ek(t=this._getOrReturnCtx(e,t),{validation:"ip",code:ev.invalid_string,message:a.message}),r.dirty())}else d.assertNever(a);return{status:r.value,value:e.data}}_regex(e,t,r){return this.refinement(t=>e.test(t),{validation:t,code:ev.invalid_string,...f.errToObj(r)})}_addCheck(e){return new eG({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...f.errToObj(e)})}url(e){return this._addCheck({kind:"url",...f.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...f.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...f.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...f.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...f.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...f.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...f.errToObj(e)})}datetime(e){var t;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,...f.errToObj(null==e?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...f.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...f.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...f.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...f.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...f.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...f.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...f.errToObj(t)})}nonempty(e){return this.min(1,f.errToObj(e))}trim(){return new eG({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new eG({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new eG({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>"datetime"===e.kind)}get isEmail(){return!!this._def.checks.find(e=>"email"===e.kind)}get isURL(){return!!this._def.checks.find(e=>"url"===e.kind)}get isEmoji(){return!!this._def.checks.find(e=>"emoji"===e.kind)}get isUUID(){return!!this._def.checks.find(e=>"uuid"===e.kind)}get isCUID(){return!!this._def.checks.find(e=>"cuid"===e.kind)}get isCUID2(){return!!this._def.checks.find(e=>"cuid2"===e.kind)}get isULID(){return!!this._def.checks.find(e=>"ulid"===e.kind)}get isIP(){return!!this._def.checks.find(e=>"ip"===e.kind)}get minLength(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}eG.create=e=>{var t;return new eG({checks:[],typeName:p.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...ej(e)})};class eV extends eU{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){let t;if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==eb.number){let t=this._getOrReturnCtx(e);return ek(t,{code:ev.invalid_type,expected:eb.number,received:t.parsedType}),eO}let r=new eA;for(let i of this._def.checks)"int"===i.kind?d.isInteger(e.data)||(ek(t=this._getOrReturnCtx(e,t),{code:ev.invalid_type,expected:"integer",received:"float",message:i.message}),r.dirty()):"min"===i.kind?(i.inclusive?e.data<i.value:e.data<=i.value)&&(ek(t=this._getOrReturnCtx(e,t),{code:ev.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):"max"===i.kind?(i.inclusive?e.data>i.value:e.data>=i.value)&&(ek(t=this._getOrReturnCtx(e,t),{code:ev.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),r.dirty()):"multipleOf"===i.kind?0!==function(e,t){let r=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,n=r>i?r:i;return parseInt(e.toFixed(n).replace(".",""))%parseInt(t.toFixed(n).replace(".",""))/Math.pow(10,n)}(e.data,i.value)&&(ek(t=this._getOrReturnCtx(e,t),{code:ev.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):"finite"===i.kind?Number.isFinite(e.data)||(ek(t=this._getOrReturnCtx(e,t),{code:ev.not_finite,message:i.message}),r.dirty()):d.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,f.toString(t))}gt(e,t){return this.setLimit("min",e,!1,f.toString(t))}lte(e,t){return this.setLimit("max",e,!0,f.toString(t))}lt(e,t){return this.setLimit("max",e,!1,f.toString(t))}setLimit(e,t,r,i){return new eV({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:f.toString(i)}]})}_addCheck(e){return new eV({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:f.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:f.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:f.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:f.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:f.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:f.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:f.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:f.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:f.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>"int"===e.kind||"multipleOf"===e.kind&&d.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let r of this._def.checks){if("finite"===r.kind||"int"===r.kind||"multipleOf"===r.kind)return!0;"min"===r.kind?(null===t||r.value>t)&&(t=r.value):"max"===r.kind&&(null===e||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}eV.create=e=>new eV({checks:[],typeName:p.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...ej(e)});class eK extends eU{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){let t;if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==eb.bigint){let t=this._getOrReturnCtx(e);return ek(t,{code:ev.invalid_type,expected:eb.bigint,received:t.parsedType}),eO}let r=new eA;for(let i of this._def.checks)"min"===i.kind?(i.inclusive?e.data<i.value:e.data<=i.value)&&(ek(t=this._getOrReturnCtx(e,t),{code:ev.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):"max"===i.kind?(i.inclusive?e.data>i.value:e.data>=i.value)&&(ek(t=this._getOrReturnCtx(e,t),{code:ev.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),r.dirty()):"multipleOf"===i.kind?e.data%i.value!==BigInt(0)&&(ek(t=this._getOrReturnCtx(e,t),{code:ev.not_multiple_of,multipleOf:i.value,message:i.message}),r.dirty()):d.assertNever(i);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,f.toString(t))}gt(e,t){return this.setLimit("min",e,!1,f.toString(t))}lte(e,t){return this.setLimit("max",e,!0,f.toString(t))}lt(e,t){return this.setLimit("max",e,!1,f.toString(t))}setLimit(e,t,r,i){return new eK({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:f.toString(i)}]})}_addCheck(e){return new eK({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:f.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:f.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:f.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:f.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:f.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}eK.create=e=>{var t;return new eK({checks:[],typeName:p.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...ej(e)})};class eY extends eU{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==eb.boolean){let t=this._getOrReturnCtx(e);return ek(t,{code:ev.invalid_type,expected:eb.boolean,received:t.parsedType}),eO}return eI(e.data)}}eY.create=e=>new eY({typeName:p.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...ej(e)});class eQ extends eU{_parse(e){let t;if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==eb.date){let t=this._getOrReturnCtx(e);return ek(t,{code:ev.invalid_type,expected:eb.date,received:t.parsedType}),eO}if(isNaN(e.data.getTime()))return ek(this._getOrReturnCtx(e),{code:ev.invalid_date}),eO;let r=new eA;for(let i of this._def.checks)"min"===i.kind?e.data.getTime()<i.value&&(ek(t=this._getOrReturnCtx(e,t),{code:ev.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):"max"===i.kind?e.data.getTime()>i.value&&(ek(t=this._getOrReturnCtx(e,t),{code:ev.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):d.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new eQ({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:f.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:f.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(let t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}eQ.create=e=>new eQ({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:p.ZodDate,...ej(e)});class eX extends eU{_parse(e){if(this._getType(e)!==eb.symbol){let t=this._getOrReturnCtx(e);return ek(t,{code:ev.invalid_type,expected:eb.symbol,received:t.parsedType}),eO}return eI(e.data)}}eX.create=e=>new eX({typeName:p.ZodSymbol,...ej(e)});class eJ extends eU{_parse(e){if(this._getType(e)!==eb.undefined){let t=this._getOrReturnCtx(e);return ek(t,{code:ev.invalid_type,expected:eb.undefined,received:t.parsedType}),eO}return eI(e.data)}}eJ.create=e=>new eJ({typeName:p.ZodUndefined,...ej(e)});class e0 extends eU{_parse(e){if(this._getType(e)!==eb.null){let t=this._getOrReturnCtx(e);return ek(t,{code:ev.invalid_type,expected:eb.null,received:t.parsedType}),eO}return eI(e.data)}}e0.create=e=>new e0({typeName:p.ZodNull,...ej(e)});class e1 extends eU{constructor(){super(...arguments),this._any=!0}_parse(e){return eI(e.data)}}e1.create=e=>new e1({typeName:p.ZodAny,...ej(e)});class e2 extends eU{constructor(){super(...arguments),this._unknown=!0}_parse(e){return eI(e.data)}}e2.create=e=>new e2({typeName:p.ZodUnknown,...ej(e)});class e3 extends eU{_parse(e){let t=this._getOrReturnCtx(e);return ek(t,{code:ev.invalid_type,expected:eb.never,received:t.parsedType}),eO}}e3.create=e=>new e3({typeName:p.ZodNever,...ej(e)});class e5 extends eU{_parse(e){if(this._getType(e)!==eb.undefined){let t=this._getOrReturnCtx(e);return ek(t,{code:ev.invalid_type,expected:eb.void,received:t.parsedType}),eO}return eI(e.data)}}e5.create=e=>new e5({typeName:p.ZodVoid,...ej(e)});class e6 extends eU{_parse(e){let{ctx:t,status:r}=this._processInputParams(e),i=this._def;if(t.parsedType!==eb.array)return ek(t,{code:ev.invalid_type,expected:eb.array,received:t.parsedType}),eO;if(null!==i.exactLength){let e=t.data.length>i.exactLength.value,n=t.data.length<i.exactLength.value;(e||n)&&(ek(t,{code:e?ev.too_big:ev.too_small,minimum:n?i.exactLength.value:void 0,maximum:e?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(null!==i.minLength&&t.data.length<i.minLength.value&&(ek(t,{code:ev.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),null!==i.maxLength&&t.data.length>i.maxLength.value&&(ek(t,{code:ev.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((e,r)=>i.type._parseAsync(new eN(t,e,t.path,r)))).then(e=>eA.mergeArray(r,e));let n=[...t.data].map((e,r)=>i.type._parseSync(new eN(t,e,t.path,r)));return eA.mergeArray(r,n)}get element(){return this._def.type}min(e,t){return new e6({...this._def,minLength:{value:e,message:f.toString(t)}})}max(e,t){return new e6({...this._def,maxLength:{value:e,message:f.toString(t)}})}length(e,t){return new e6({...this._def,exactLength:{value:e,message:f.toString(t)}})}nonempty(e){return this.min(1,e)}}e6.create=(e,t)=>new e6({type:e,minLength:null,maxLength:null,exactLength:null,typeName:p.ZodArray,...ej(t)});class e4 extends eU{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;let e=this._def.shape(),t=d.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==eb.object){let t=this._getOrReturnCtx(e);return ek(t,{code:ev.invalid_type,expected:eb.object,received:t.parsedType}),eO}let{status:t,ctx:r}=this._processInputParams(e),{shape:i,keys:n}=this._getCached(),o=[];if(!(this._def.catchall instanceof e3&&"strip"===this._def.unknownKeys))for(let e in r.data)n.includes(e)||o.push(e);let a=[];for(let e of n){let t=i[e],n=r.data[e];a.push({key:{status:"valid",value:e},value:t._parse(new eN(r,n,r.path,e)),alwaysSet:e in r.data})}if(this._def.catchall instanceof e3){let e=this._def.unknownKeys;if("passthrough"===e)for(let e of o)a.push({key:{status:"valid",value:e},value:{status:"valid",value:r.data[e]}});else if("strict"===e)o.length>0&&(ek(r,{code:ev.unrecognized_keys,keys:o}),t.dirty());else if("strip"===e);else throw Error("Internal ZodObject error: invalid unknownKeys value.")}else{let e=this._def.catchall;for(let t of o){let i=r.data[t];a.push({key:{status:"valid",value:t},value:e._parse(new eN(r,i,r.path,t)),alwaysSet:t in r.data})}}return r.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of a){let r=await t.key;e.push({key:r,value:await t.value,alwaysSet:t.alwaysSet})}return e}).then(e=>eA.mergeObjectSync(t,e)):eA.mergeObjectSync(t,a)}get shape(){return this._def.shape()}strict(e){return f.errToObj,new e4({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,r)=>{var i,n,o,a;let s=null!==(o=null===(n=(i=this._def).errorMap)||void 0===n?void 0:n.call(i,t,r).message)&&void 0!==o?o:r.defaultError;return"unrecognized_keys"===t.code?{message:null!==(a=f.errToObj(e).message)&&void 0!==a?a:s}:{message:s}}}:{}})}strip(){return new e4({...this._def,unknownKeys:"strip"})}passthrough(){return new e4({...this._def,unknownKeys:"passthrough"})}extend(e){return new e4({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new e4({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:p.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new e4({...this._def,catchall:e})}pick(e){let t={};return d.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new e4({...this._def,shape:()=>t})}omit(e){let t={};return d.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new e4({...this._def,shape:()=>t})}deepPartial(){return function e(t){if(t instanceof e4){let r={};for(let i in t.shape){let n=t.shape[i];r[i]=tf.create(e(n))}return new e4({...t._def,shape:()=>r})}return t instanceof e6?new e6({...t._def,type:e(t.element)}):t instanceof tf?tf.create(e(t.unwrap())):t instanceof tp?tp.create(e(t.unwrap())):t instanceof tt?tt.create(t.items.map(t=>e(t))):t}(this)}partial(e){let t={};return d.objectKeys(this.shape).forEach(r=>{let i=this.shape[r];e&&!e[r]?t[r]=i:t[r]=i.optional()}),new e4({...this._def,shape:()=>t})}required(e){let t={};return d.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let e=this.shape[r];for(;e instanceof tf;)e=e._def.innerType;t[r]=e}}),new e4({...this._def,shape:()=>t})}keyof(){return tl(d.objectKeys(this.shape))}}e4.create=(e,t)=>new e4({shape:()=>e,unknownKeys:"strip",catchall:e3.create(),typeName:p.ZodObject,...ej(t)}),e4.strictCreate=(e,t)=>new e4({shape:()=>e,unknownKeys:"strict",catchall:e3.create(),typeName:p.ZodObject,...ej(t)}),e4.lazycreate=(e,t)=>new e4({shape:e,unknownKeys:"strip",catchall:e3.create(),typeName:p.ZodObject,...ej(t)});class e8 extends eU{_parse(e){let{ctx:t}=this._processInputParams(e),r=this._def.options;if(t.common.async)return Promise.all(r.map(async e=>{let r={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:r}),ctx:r}})).then(function(e){for(let t of e)if("valid"===t.result.status)return t.result;for(let r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;let r=e.map(e=>new ex(e.ctx.common.issues));return ek(t,{code:ev.invalid_union,unionErrors:r}),eO});{let e;let i=[];for(let n of r){let r={...t,common:{...t.common,issues:[]},parent:null},o=n._parseSync({data:t.data,path:t.path,parent:r});if("valid"===o.status)return o;"dirty"!==o.status||e||(e={result:o,ctx:r}),r.common.issues.length&&i.push(r.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let n=i.map(e=>new ex(e));return ek(t,{code:ev.invalid_union,unionErrors:n}),eO}}get options(){return this._def.options}}e8.create=(e,t)=>new e8({options:e,typeName:p.ZodUnion,...ej(t)});let e9=e=>{if(e instanceof ta)return e9(e.schema);if(e instanceof th)return e9(e.innerType());if(e instanceof ts)return[e.value];if(e instanceof tc)return e.options;if(e instanceof tu)return Object.keys(e.enum);if(e instanceof tg)return e9(e._def.innerType);if(e instanceof eJ)return[void 0];else if(e instanceof e0)return[null];else return null};class e7 extends eU{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==eb.object)return ek(t,{code:ev.invalid_type,expected:eb.object,received:t.parsedType}),eO;let r=this.discriminator,i=t.data[r],n=this.optionsMap.get(i);return n?t.common.async?n._parseAsync({data:t.data,path:t.path,parent:t}):n._parseSync({data:t.data,path:t.path,parent:t}):(ek(t,{code:ev.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),eO)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){let i=new Map;for(let r of t){let t=e9(r.shape[e]);if(!t)throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let n of t){if(i.has(n))throw Error(`Discriminator property ${String(e)} has duplicate value ${String(n)}`);i.set(n,r)}}return new e7({typeName:p.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:i,...ej(r)})}}class te extends eU{_parse(e){let{status:t,ctx:r}=this._processInputParams(e),i=(e,i)=>{if(eD(e)||eD(i))return eO;let n=function e(t,r){let i=ey(t),n=ey(r);if(t===r)return{valid:!0,data:t};if(i===eb.object&&n===eb.object){let i=d.objectKeys(r),n=d.objectKeys(t).filter(e=>-1!==i.indexOf(e)),o={...t,...r};for(let i of n){let n=e(t[i],r[i]);if(!n.valid)return{valid:!1};o[i]=n.data}return{valid:!0,data:o}}if(i===eb.array&&n===eb.array){if(t.length!==r.length)return{valid:!1};let i=[];for(let n=0;n<t.length;n++){let o=e(t[n],r[n]);if(!o.valid)return{valid:!1};i.push(o.data)}return{valid:!0,data:i}}return i===eb.date&&n===eb.date&&+t==+r?{valid:!0,data:t}:{valid:!1}}(e.value,i.value);return n.valid?((eP(e)||eP(i))&&t.dirty(),{status:t.value,value:n.data}):(ek(r,{code:ev.invalid_intersection_types}),eO)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([e,t])=>i(e,t)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}te.create=(e,t,r)=>new te({left:e,right:t,typeName:p.ZodIntersection,...ej(r)});class tt extends eU{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eb.array)return ek(r,{code:ev.invalid_type,expected:eb.array,received:r.parsedType}),eO;if(r.data.length<this._def.items.length)return ek(r,{code:ev.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),eO;!this._def.rest&&r.data.length>this._def.items.length&&(ek(r,{code:ev.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());let i=[...r.data].map((e,t)=>{let i=this._def.items[t]||this._def.rest;return i?i._parse(new eN(r,e,r.path,t)):null}).filter(e=>!!e);return r.common.async?Promise.all(i).then(e=>eA.mergeArray(t,e)):eA.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new tt({...this._def,rest:e})}}tt.create=(e,t)=>{if(!Array.isArray(e))throw Error("You must pass an array of schemas to z.tuple([ ... ])");return new tt({items:e,typeName:p.ZodTuple,rest:null,...ej(t)})};class tr extends eU{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eb.object)return ek(r,{code:ev.invalid_type,expected:eb.object,received:r.parsedType}),eO;let i=[],n=this._def.keyType,o=this._def.valueType;for(let e in r.data)i.push({key:n._parse(new eN(r,e,r.path,e)),value:o._parse(new eN(r,r.data[e],r.path,e))});return r.common.async?eA.mergeObjectAsync(t,i):eA.mergeObjectSync(t,i)}get element(){return this._def.valueType}static create(e,t,r){return new tr(t instanceof eU?{keyType:e,valueType:t,typeName:p.ZodRecord,...ej(r)}:{keyType:eG.create(),valueType:e,typeName:p.ZodRecord,...ej(t)})}}class ti extends eU{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eb.map)return ek(r,{code:ev.invalid_type,expected:eb.map,received:r.parsedType}),eO;let i=this._def.keyType,n=this._def.valueType,o=[...r.data.entries()].map(([e,t],o)=>({key:i._parse(new eN(r,e,r.path,[o,"key"])),value:n._parse(new eN(r,t,r.path,[o,"value"]))}));if(r.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let r of o){let i=await r.key,n=await r.value;if("aborted"===i.status||"aborted"===n.status)return eO;("dirty"===i.status||"dirty"===n.status)&&t.dirty(),e.set(i.value,n.value)}return{status:t.value,value:e}})}{let e=new Map;for(let r of o){let i=r.key,n=r.value;if("aborted"===i.status||"aborted"===n.status)return eO;("dirty"===i.status||"dirty"===n.status)&&t.dirty(),e.set(i.value,n.value)}return{status:t.value,value:e}}}}ti.create=(e,t,r)=>new ti({valueType:t,keyType:e,typeName:p.ZodMap,...ej(r)});class tn extends eU{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==eb.set)return ek(r,{code:ev.invalid_type,expected:eb.set,received:r.parsedType}),eO;let i=this._def;null!==i.minSize&&r.data.size<i.minSize.value&&(ek(r,{code:ev.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),t.dirty()),null!==i.maxSize&&r.data.size>i.maxSize.value&&(ek(r,{code:ev.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),t.dirty());let n=this._def.valueType;function o(e){let r=new Set;for(let i of e){if("aborted"===i.status)return eO;"dirty"===i.status&&t.dirty(),r.add(i.value)}return{status:t.value,value:r}}let a=[...r.data.values()].map((e,t)=>n._parse(new eN(r,e,r.path,t)));return r.common.async?Promise.all(a).then(e=>o(e)):o(a)}min(e,t){return new tn({...this._def,minSize:{value:e,message:f.toString(t)}})}max(e,t){return new tn({...this._def,maxSize:{value:e,message:f.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}tn.create=(e,t)=>new tn({valueType:e,minSize:null,maxSize:null,typeName:p.ZodSet,...ej(t)});class to extends eU{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==eb.function)return ek(t,{code:ev.invalid_type,expected:eb.function,received:t.parsedType}),eO;function r(e,r){return eS({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,e_(),eC].filter(e=>!!e),issueData:{code:ev.invalid_arguments,argumentsError:r}})}function i(e,r){return eS({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,e_(),eC].filter(e=>!!e),issueData:{code:ev.invalid_return_type,returnTypeError:r}})}let n={errorMap:t.common.contextualErrorMap},o=t.data;if(this._def.returns instanceof td){let e=this;return eI(async function(...t){let a=new ex([]),s=await e._def.args.parseAsync(t,n).catch(e=>{throw a.addIssue(r(t,e)),a}),l=await Reflect.apply(o,this,s);return await e._def.returns._def.type.parseAsync(l,n).catch(e=>{throw a.addIssue(i(l,e)),a})})}{let e=this;return eI(function(...t){let a=e._def.args.safeParse(t,n);if(!a.success)throw new ex([r(t,a.error)]);let s=Reflect.apply(o,this,a.data),l=e._def.returns.safeParse(s,n);if(!l.success)throw new ex([i(s,l.error)]);return l.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new to({...this._def,args:tt.create(e).rest(e2.create())})}returns(e){return new to({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new to({args:e||tt.create([]).rest(e2.create()),returns:t||e2.create(),typeName:p.ZodFunction,...ej(r)})}}class ta extends eU{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}ta.create=(e,t)=>new ta({getter:e,typeName:p.ZodLazy,...ej(t)});class ts extends eU{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return ek(t,{received:t.data,code:ev.invalid_literal,expected:this._def.value}),eO}return{status:"valid",value:e.data}}get value(){return this._def.value}}function tl(e,t){return new tc({values:e,typeName:p.ZodEnum,...ej(t)})}ts.create=(e,t)=>new ts({value:e,typeName:p.ZodLiteral,...ej(t)});class tc extends eU{_parse(e){if("string"!=typeof e.data){let t=this._getOrReturnCtx(e),r=this._def.values;return ek(t,{expected:d.joinValues(r),received:t.parsedType,code:ev.invalid_type}),eO}if(-1===this._def.values.indexOf(e.data)){let t=this._getOrReturnCtx(e),r=this._def.values;return ek(t,{received:t.data,code:ev.invalid_enum_value,options:r}),eO}return eI(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(e){return tc.create(e)}exclude(e){return tc.create(this.options.filter(t=>!e.includes(t)))}}tc.create=tl;class tu extends eU{_parse(e){let t=d.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==eb.string&&r.parsedType!==eb.number){let e=d.objectValues(t);return ek(r,{expected:d.joinValues(e),received:r.parsedType,code:ev.invalid_type}),eO}if(-1===t.indexOf(e.data)){let e=d.objectValues(t);return ek(r,{received:r.data,code:ev.invalid_enum_value,options:e}),eO}return eI(e.data)}get enum(){return this._def.values}}tu.create=(e,t)=>new tu({values:e,typeName:p.ZodNativeEnum,...ej(t)});class td extends eU{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==eb.promise&&!1===t.common.async?(ek(t,{code:ev.invalid_type,expected:eb.promise,received:t.parsedType}),eO):eI((t.parsedType===eb.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}}td.create=(e,t)=>new td({type:e,typeName:p.ZodPromise,...ej(t)});class th extends eU{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===p.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:r}=this._processInputParams(e),i=this._def.effect||null,n={addIssue:e=>{ek(r,e),e.fatal?t.abort():t.dirty()},get path(){return r.path}};if(n.addIssue=n.addIssue.bind(n),"preprocess"===i.type){let e=i.transform(r.data,n);return r.common.issues.length?{status:"dirty",value:r.data}:r.common.async?Promise.resolve(e).then(e=>this._def.schema._parseAsync({data:e,path:r.path,parent:r})):this._def.schema._parseSync({data:e,path:r.path,parent:r})}if("refinement"===i.type){let e=e=>{let t=i.refinement(e,n);if(r.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(r=>"aborted"===r.status?eO:("dirty"===r.status&&t.dirty(),e(r.value).then(()=>({status:t.value,value:r.value}))));{let i=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===i.status?eO:("dirty"===i.status&&t.dirty(),e(i.value),{status:t.value,value:i.value})}}if("transform"===i.type){if(!1!==r.common.async)return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(e=>eT(e)?Promise.resolve(i.transform(e.value,n)).then(e=>({status:t.value,value:e})):e);{let e=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!eT(e))return e;let o=i.transform(e.value,n);if(o instanceof Promise)throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}}d.assertNever(i)}}th.create=(e,t,r)=>new th({schema:e,typeName:p.ZodEffects,effect:t,...ej(r)}),th.createWithPreprocess=(e,t,r)=>new th({schema:t,effect:{type:"preprocess",transform:e},typeName:p.ZodEffects,...ej(r)});class tf extends eU{_parse(e){return this._getType(e)===eb.undefined?eI(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}tf.create=(e,t)=>new tf({innerType:e,typeName:p.ZodOptional,...ej(t)});class tp extends eU{_parse(e){return this._getType(e)===eb.null?eI(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}tp.create=(e,t)=>new tp({innerType:e,typeName:p.ZodNullable,...ej(t)});class tg extends eU{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return t.parsedType===eb.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}tg.create=(e,t)=>new tg({innerType:e,typeName:p.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...ej(t)});class tm extends eU{_parse(e){let{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return eR(i)?i.then(e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new ex(r.common.issues)},input:r.data})})):{status:"valid",value:"valid"===i.status?i.value:this._def.catchValue({get error(){return new ex(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}tm.create=(e,t)=>new tm({innerType:e,typeName:p.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...ej(t)});class tw extends eU{_parse(e){if(this._getType(e)!==eb.nan){let t=this._getOrReturnCtx(e);return ek(t,{code:ev.invalid_type,expected:eb.nan,received:t.parsedType}),eO}return{status:"valid",value:e.data}}}tw.create=e=>new tw({typeName:p.ZodNaN,...ej(e)});let tb=Symbol("zod_brand");class ty extends eU{_parse(e){let{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class tv extends eU{_parse(e){let{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?eO:"dirty"===e.status?(t.dirty(),e$(e.value)):this._def.out._parseAsync({data:e.value,path:r.path,parent:r})})();{let e=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return"aborted"===e.status?eO:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:r.path,parent:r})}}static create(e,t){return new tv({in:e,out:t,typeName:p.ZodPipeline})}}class tx extends eU{_parse(e){let t=this._def.innerType._parse(e);return eT(t)&&(t.value=Object.freeze(t.value)),t}}tx.create=(e,t)=>new tx({innerType:e,typeName:p.ZodReadonly,...ej(t)});let tC=(e,t={},r)=>e?e1.create().superRefine((i,n)=>{var o,a;if(!e(i)){let e="function"==typeof t?t(i):"string"==typeof t?{message:t}:t,s=null===(a=null!==(o=e.fatal)&&void 0!==o?o:r)||void 0===a||a;n.addIssue({code:"custom",..."string"==typeof e?{message:e}:e,fatal:s})}}):e1.create(),tE={object:e4.lazycreate};(u=p||(p={})).ZodString="ZodString",u.ZodNumber="ZodNumber",u.ZodNaN="ZodNaN",u.ZodBigInt="ZodBigInt",u.ZodBoolean="ZodBoolean",u.ZodDate="ZodDate",u.ZodSymbol="ZodSymbol",u.ZodUndefined="ZodUndefined",u.ZodNull="ZodNull",u.ZodAny="ZodAny",u.ZodUnknown="ZodUnknown",u.ZodNever="ZodNever",u.ZodVoid="ZodVoid",u.ZodArray="ZodArray",u.ZodObject="ZodObject",u.ZodUnion="ZodUnion",u.ZodDiscriminatedUnion="ZodDiscriminatedUnion",u.ZodIntersection="ZodIntersection",u.ZodTuple="ZodTuple",u.ZodRecord="ZodRecord",u.ZodMap="ZodMap",u.ZodSet="ZodSet",u.ZodFunction="ZodFunction",u.ZodLazy="ZodLazy",u.ZodLiteral="ZodLiteral",u.ZodEnum="ZodEnum",u.ZodEffects="ZodEffects",u.ZodNativeEnum="ZodNativeEnum",u.ZodOptional="ZodOptional",u.ZodNullable="ZodNullable",u.ZodDefault="ZodDefault",u.ZodCatch="ZodCatch",u.ZodPromise="ZodPromise",u.ZodBranded="ZodBranded",u.ZodPipeline="ZodPipeline",u.ZodReadonly="ZodReadonly";let t_=eG.create,tS=eV.create,tk=tw.create,tA=eK.create,tO=eY.create,t$=eQ.create,tI=eX.create,tD=eJ.create,tP=e0.create,tT=e1.create,tR=e2.create,tN=e3.create,tM=e5.create,tj=e6.create,tU=e4.create,tB=e4.strictCreate,tL=e8.create,tF=e7.create,tz=te.create,tW=tt.create,tH=tr.create,tZ=ti.create,tq=tn.create,tG=to.create,tV=ta.create,tK=ts.create,tY=tc.create,tQ=tu.create,tX=td.create,tJ=th.create,t0=tf.create,t1=tp.create,t2=th.createWithPreprocess,t3=tv.create;var t5=Object.freeze({__proto__:null,defaultErrorMap:eC,setErrorMap:function(e){eE=e},getErrorMap:e_,makeIssue:eS,EMPTY_PATH:[],addIssueToContext:ek,ParseStatus:eA,INVALID:eO,DIRTY:e$,OK:eI,isAborted:eD,isDirty:eP,isValid:eT,isAsync:eR,get util(){return d},get objectUtil(){return h},ZodParsedType:eb,getParsedType:ey,ZodType:eU,ZodString:eG,ZodNumber:eV,ZodBigInt:eK,ZodBoolean:eY,ZodDate:eQ,ZodSymbol:eX,ZodUndefined:eJ,ZodNull:e0,ZodAny:e1,ZodUnknown:e2,ZodNever:e3,ZodVoid:e5,ZodArray:e6,ZodObject:e4,ZodUnion:e8,ZodDiscriminatedUnion:e7,ZodIntersection:te,ZodTuple:tt,ZodRecord:tr,ZodMap:ti,ZodSet:tn,ZodFunction:to,ZodLazy:ta,ZodLiteral:ts,ZodEnum:tc,ZodNativeEnum:tu,ZodPromise:td,ZodEffects:th,ZodTransformer:th,ZodOptional:tf,ZodNullable:tp,ZodDefault:tg,ZodCatch:tm,ZodNaN:tw,BRAND:tb,ZodBranded:ty,ZodPipeline:tv,ZodReadonly:tx,custom:tC,Schema:eU,ZodSchema:eU,late:tE,get ZodFirstPartyTypeKind(){return p},coerce:{string:e=>eG.create({...e,coerce:!0}),number:e=>eV.create({...e,coerce:!0}),boolean:e=>eY.create({...e,coerce:!0}),bigint:e=>eK.create({...e,coerce:!0}),date:e=>eQ.create({...e,coerce:!0})},any:tT,array:tj,bigint:tA,boolean:tO,date:t$,discriminatedUnion:tF,effect:tJ,enum:tY,function:tG,instanceof:(e,t={message:`Input not instance of ${e.name}`})=>tC(t=>t instanceof e,t),intersection:tz,lazy:tV,literal:tK,map:tZ,nan:tk,nativeEnum:tQ,never:tN,null:tP,nullable:t1,number:tS,object:tU,oboolean:()=>tO().optional(),onumber:()=>tS().optional(),optional:t0,ostring:()=>t_().optional(),pipeline:t3,preprocess:t2,promise:tX,record:tH,set:tq,strictObject:tB,string:t_,symbol:tI,transformer:tJ,tuple:tW,undefined:tD,union:tL,unknown:tR,void:tM,NEVER:eO,ZodIssueCode:ev,quotelessJson:e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:ex});let t6=t5.object({message:t5.string()});function t4(e){return t5.literal(ew[e])}t5.object({accessList:t5.array(t5.string()),blockHash:t5.string().nullable(),blockNumber:t5.string().nullable(),chainId:t5.string(),from:t5.string(),gas:t5.string(),hash:t5.string(),input:t5.string().nullable(),maxFeePerGas:t5.string(),maxPriorityFeePerGas:t5.string(),nonce:t5.string(),r:t5.string(),s:t5.string(),to:t5.string(),transactionIndex:t5.string().nullable(),type:t5.string(),v:t5.string(),value:t5.string()});let t8=t5.object({chainId:t5.number()}),t9=t5.object({email:t5.string().email()}),t7=t5.object({otp:t5.string()}),re=t5.object({chainId:t5.optional(t5.number())}),rt=t5.object({email:t5.string().email()}),rr=t5.object({themeMode:t5.optional(t5.enum(["light","dark"])),themeVariables:t5.optional(t5.record(t5.string(),t5.string().or(t5.number())))}),ri=t5.object({metadata:t5.object({name:t5.string(),description:t5.string(),url:t5.string(),icons:t5.array(t5.string())}).optional(),sdkVersion:t5.string(),projectId:t5.string()}),rn=t5.object({action:t5.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),ro=t5.object({email:t5.string().email(),address:t5.string(),chainId:t5.number()}),ra=t5.object({isConnected:t5.boolean()}),rs=t5.object({chainId:t5.number()}),rl=t5.object({chainId:t5.number()}),rc=t5.object({email:t5.string().email()}),ru=t5.any(),rd=t5.object({method:t5.literal("personal_sign"),params:t5.array(t5.any())}),rh=t5.object({method:t5.literal("eth_sendTransaction"),params:t5.array(t5.any())}),rf=t5.object({method:t5.literal("eth_accounts")}),rp=t5.object({method:t5.literal("eth_getBalance"),params:t5.array(t5.any())}),rg=t5.object({method:t5.literal("eth_estimateGas"),params:t5.array(t5.any())}),rm=t5.object({method:t5.literal("eth_gasPrice")}),rw=t5.object({method:t5.literal("eth_signTypedData_v4"),params:t5.array(t5.any())}),rb=t5.object({method:t5.literal("eth_getTransactionByHash"),params:t5.array(t5.any())}),ry=t5.object({method:t5.literal("eth_blockNumber")}),rv=t5.object({method:t5.literal("eth_chainId")}),rx=t5.object({token:t5.string()});t5.object({type:t4("APP_SWITCH_NETWORK"),payload:t8}).or(t5.object({type:t4("APP_CONNECT_EMAIL"),payload:t9})).or(t5.object({type:t4("APP_CONNECT_DEVICE")})).or(t5.object({type:t4("APP_CONNECT_OTP"),payload:t7})).or(t5.object({type:t4("APP_GET_USER"),payload:t5.optional(re)})).or(t5.object({type:t4("APP_SIGN_OUT")})).or(t5.object({type:t4("APP_IS_CONNECTED"),payload:t5.optional(rx)})).or(t5.object({type:t4("APP_GET_CHAIN_ID")})).or(t5.object({type:t4("APP_RPC_REQUEST"),payload:rd.or(rh).or(rf).or(rp).or(rg).or(rm).or(rw).or(ry).or(rv).or(rb)})).or(t5.object({type:t4("APP_UPDATE_EMAIL"),payload:rt})).or(t5.object({type:t4("APP_AWAIT_UPDATE_EMAIL")})).or(t5.object({type:t4("APP_SYNC_THEME"),payload:rr})).or(t5.object({type:t4("APP_SYNC_DAPP_DATA"),payload:ri})),t5.object({type:t4("FRAME_SWITCH_NETWORK_ERROR"),payload:t6}).or(t5.object({type:t4("FRAME_SWITCH_NETWORK_SUCCESS"),payload:rl})).or(t5.object({type:t4("FRAME_CONNECT_EMAIL_ERROR"),payload:t6})).or(t5.object({type:t4("FRAME_CONNECT_EMAIL_SUCCESS"),payload:rn})).or(t5.object({type:t4("FRAME_CONNECT_OTP_ERROR"),payload:t6})).or(t5.object({type:t4("FRAME_CONNECT_OTP_SUCCESS")})).or(t5.object({type:t4("FRAME_CONNECT_DEVICE_ERROR"),payload:t6})).or(t5.object({type:t4("FRAME_CONNECT_DEVICE_SUCCESS")})).or(t5.object({type:t4("FRAME_GET_USER_ERROR"),payload:t6})).or(t5.object({type:t4("FRAME_GET_USER_SUCCESS"),payload:ro})).or(t5.object({type:t4("FRAME_SIGN_OUT_ERROR"),payload:t6})).or(t5.object({type:t4("FRAME_SIGN_OUT_SUCCESS")})).or(t5.object({type:t4("FRAME_IS_CONNECTED_ERROR"),payload:t6})).or(t5.object({type:t4("FRAME_IS_CONNECTED_SUCCESS"),payload:ra})).or(t5.object({type:t4("FRAME_GET_CHAIN_ID_ERROR"),payload:t6})).or(t5.object({type:t4("FRAME_GET_CHAIN_ID_SUCCESS"),payload:rs})).or(t5.object({type:t4("FRAME_RPC_REQUEST_ERROR"),payload:t6})).or(t5.object({type:t4("FRAME_RPC_REQUEST_SUCCESS"),payload:ru})).or(t5.object({type:t4("FRAME_SESSION_UPDATE"),payload:rx})).or(t5.object({type:t4("FRAME_UPDATE_EMAIL_ERROR"),payload:t6})).or(t5.object({type:t4("FRAME_UPDATE_EMAIL_SUCCESS")})).or(t5.object({type:t4("FRAME_AWAIT_UPDATE_EMAIL_ERROR"),payload:t6})).or(t5.object({type:t4("FRAME_AWAIT_UPDATE_EMAIL_SUCCESS"),payload:rc})).or(t5.object({type:t4("FRAME_SYNC_THEME_ERROR"),payload:t6})).or(t5.object({type:t4("FRAME_SYNC_THEME_SUCCESS")})).or(t5.object({type:t4("FRAME_SYNC_DAPP_DATA_ERROR"),payload:t6})).or(t5.object({type:t4("FRAME_SYNC_DAPP_DATA_SUCCESS")}));let rC={set(e,t){localStorage.setItem(`${ew.STORAGE_KEY}${e}`,t)},get:e=>localStorage.getItem(`${ew.STORAGE_KEY}${e}`),delete(e){localStorage.removeItem(`${ew.STORAGE_KEY}${e}`)}},rE=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],r_={getBlockchainApiUrl(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return rE.includes(t)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){let e=rC.get(ew.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)throw Error(`Please try again after ${Math.ceil((3e4-t)/1e3)} seconds`)}},getTimeToNextEmailLogin(){let e=rC.get(ew.LAST_EMAIL_LOGIN_TIME);if(e){let t=Date.now()-Number(e);if(t<3e4)return Math.ceil((3e4-t)/1e3)}return 0}};var rS=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rk=class extends y.oi{constructor(){super(...arguments),this.email=w.RouterController.state.data?.email,this.emailConnector=w.ConnectorController.getEmailConnector(),this.loading=!1,this.timeoutTimeLeft=r_.getTimeToNextEmailLogin(),this.error="",this.otp=""}firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}render(){if(!this.email)throw Error("w3m-email-verify-otp-view: No email provided");let e=!!this.timeoutTimeLeft;return(0,y.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100"> Enter the code we sent to </wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?(0,y.dy)`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:(0,y.dy)` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?(0,y.dy)`<wui-text variant="small-400" color="error-100"
                    >${this.error}. Try Again</wui-text
                  >`:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">Didn't receive it?</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=r_.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=r_.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{!this.loading&&(this.otp=e.detail,this.emailConnector&&6===this.otp.length&&(this.loading=!0,await this.emailConnector.provider.connectOtp({otp:this.otp}),w.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await w.ConnectionController.connectExternal(this.emailConnector),w.IN.close(),w.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}})))}catch(e){w.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),this.error=w.j1.parseError(e),this.loading=!1}}async onResendCode(){try{if(!this.loading&&!this.timeoutTimeLeft){this.error="",this.otp="";let e=w.ConnectorController.getEmailConnector();if(!e||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await e.provider.connectEmail({email:this.email}),w.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),this.startOTPTimeout(),w.SnackController.showSuccess("Code email resent")}}catch(e){w.SnackController.showError(e)}finally{this.loading=!1}}};rk.styles=em,rS([(0,v.SB)()],rk.prototype,"loading",void 0),rS([(0,v.SB)()],rk.prototype,"timeoutTimeLeft",void 0),rS([(0,v.SB)()],rk.prototype,"error",void 0),rk=rS([(0,b.customElement)("w3m-email-verify-otp-view")],rk);var rA=(0,y.iv)`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`,rO=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r$=class extends y.oi{constructor(){super(),this.email=w.RouterController.state.data?.email,this.emailConnector=w.ConnectorController.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw Error("w3m-email-verify-device-view: No email connector provided");return(0,y.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){this.emailConnector&&(await this.emailConnector.provider.connectDevice(),w.Xs.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),w.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),w.RouterController.replace("EmailVerifyOtp",{email:this.email}))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),w.SnackController.showSuccess("Code email resent")}}catch(e){w.SnackController.showError(e)}finally{this.loading=!1}}};r$.styles=rA,rO([(0,v.SB)()],r$.prototype,"loading",void 0),r$=rO([(0,b.customElement)("w3m-email-verify-device-view")],r$);var rI=(0,y.iv)`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`,rD=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rP=class extends y.oi{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(w.IN.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}firstUpdated(){this.iframe.style.display="block";let e=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{let t=e?.getBoundingClientRect()??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${t.width}px`,this.iframe.style.height=`${t.height-10}px`,this.iframe.style.left=`${t.left}px`,this.iframe.style.top=`${t.top+5}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),(0,y.dy)`<div data-ready=${this.ready}></div>`}onShowIframe(){let e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}};rP.styles=rI,rD([(0,v.SB)()],rP.prototype,"ready",void 0),rP=rD([(0,b.customElement)("w3m-approve-transaction-view")],rP);let rT=class extends y.oi{render(){return(0,y.dy)`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${w.bq.SECURE_SITE_DASHBOARD}
          imageSrc=${w.bq.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};rT=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,b.customElement)("w3m-upgrade-wallet-view")],rT);let{I:rR}=x._$LH,rN=e=>void 0===e.strings;class rM{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}let rj=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),rj(e,t);return!0},rU=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},rB=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),rz(t)}};function rL(e){void 0!==this._$AN?(rU(this),this._$AM=e,rB(this)):this._$AM=e}function rF(e,t=!1,r=0){let i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size){if(t){if(Array.isArray(i))for(let e=r;e<i.length;e++)rj(i[e],!1),rU(i[e]);else null!=i&&(rj(i,!1),rU(i))}else rj(this,e)}}let rz=e=>{2==e.type&&(e._$AP??=rF,e._$AQ??=rL)};class rW extends rM{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),rB(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(rj(this,e),rU(this))}setValue(e){if(rN(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}let rH=()=>new rZ;class rZ{}let rq=new WeakMap,rG=(o=class extends rW{render(e){return x.Ld}update(e,[t]){let r=t!==this.G;return r&&void 0!==this.G&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),x.Ld}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,r=rq.get(t);void 0===r&&(r=new WeakMap,rq.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ht,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?rq.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}},(...e)=>({_$litDirective$:o,values:e}));var rV=(0,y.iv)`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`,rK=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rY=class extends y.oi{constructor(){super(...arguments),this.formRef=rH(),this.initialValue=w.RouterController.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialValue;return(0,y.dy)`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${rG(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialValue}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${w.RouterController.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=w.ConnectorController.getEmailConnector();if(!t)throw Error("w3m-update-email-wallet: Email connector not found");await t.provider.updateEmail({email:this.email}),w.Xs.sendEvent({type:"track",event:"EMAIL_EDIT"}),w.RouterController.replace("UpdateEmailWalletWaiting",{email:this.email})}catch(e){w.SnackController.showError(e),this.loading=!1}}};rY.styles=rV,rK([(0,v.SB)()],rY.prototype,"email",void 0),rK([(0,v.SB)()],rY.prototype,"loading",void 0),rY=rK([(0,b.customElement)("w3m-update-email-wallet-view")],rY);var rQ=(0,y.iv)`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`,rX=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let rJ=class extends y.oi{constructor(){super(),this.email=w.RouterController.state.data?.email,this.emailConnector=w.ConnectorController.getEmailConnector(),this.loading=!1,this.listenForEmailUpdateApproval()}render(){if(!this.email)throw Error("w3m-update-email-wallet-waiting-view: No email provided");if(!this.emailConnector)throw Error("w3m-update-email-wallet-waiting-view: No email connector provided");return(0,y.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="mail"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve verification link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100">${this.email}</wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            You will receive an approval request on your former mail to confirm the new one
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForEmailUpdateApproval(){this.emailConnector&&(await this.emailConnector.provider.awaitUpdateEmail(),w.RouterController.replace("Account"),w.SnackController.showSuccess("Email updated"))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw Error("w3m-update-email-wallet-waiting-view: Unable to resend email");this.loading=!0,await this.emailConnector.provider.updateEmail({email:this.email}),this.listenForEmailUpdateApproval(),w.SnackController.showSuccess("Code email resent")}}catch(e){w.SnackController.showError(e)}finally{this.loading=!1}}};rJ.styles=rQ,rX([(0,v.SB)()],rJ.prototype,"loading",void 0),rJ=rX([(0,b.customElement)("w3m-update-email-wallet-waiting-view")],rJ);var r0=(0,y.iv)`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function r1(e){let{connectors:t}=w.ConnectorController.state,r=t.filter(e=>"ANNOUNCED"===e.type).reduce((e,t)=>(t.info?.rdns&&(e[t.info.rdns]=!0),e),{});return e.map(e=>({...e,installed:!!e.rdns&&!!r[e.rdns??""]})).sort((e,t)=>Number(t.installed)-Number(e.installed))}var r2=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r3="local-paginator",r5=class extends y.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!w.ApiController.state.wallets.length,this.wallets=w.ApiController.state.wallets,this.recommended=w.ApiController.state.recommended,this.featured=w.ApiController.state.featured,this.unsubscribe.push(w.ApiController.subscribeKey("wallets",e=>this.wallets=e),w.ApiController.subscribeKey("recommended",e=>this.recommended=e),w.ApiController.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return(0,y.dy)`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await w.ApiController.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>(0,y.dy)`
        <wui-card-select-loader type="wallet" id=${C(t)}></wui-card-select-loader>
      `)}walletsTemplate(){return r1([...this.featured,...this.recommended,...this.wallets]).map(e=>(0,y.dy)`
        <wui-card-select
          imageSrc=${C(w.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
          .installed=${e.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:r,count:i}=w.ApiController.state,n=window.innerWidth<352?3:4,o=e.length+t.length,a=Math.ceil(o/n)*n-o+n;return(a-=e.length?r.length%n:0,0===i&&r.length>0)?null:0===i||[...r,...e,...t].length<i?this.shimmerTemplate(a,r3):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${r3}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.initial){let{page:e,count:t,wallets:r}=w.ApiController.state;r.length<t&&w.ApiController.fetchWallets({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){let{connectors:t}=w.ConnectorController.state,r=t.find(({explorerId:t})=>t===e.id);r?w.RouterController.push("ConnectingExternal",{connector:r}):w.RouterController.push("ConnectingWalletConnect",{wallet:e})}};r5.styles=r0,r2([(0,v.SB)()],r5.prototype,"initial",void 0),r2([(0,v.SB)()],r5.prototype,"wallets",void 0),r2([(0,v.SB)()],r5.prototype,"recommended",void 0),r2([(0,v.SB)()],r5.prototype,"featured",void 0),r5=r2([(0,b.customElement)("w3m-all-wallets-list")],r5);var r6=(0,y.iv)`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,r4=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r8=class extends y.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?(0,y.dy)`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await w.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:e}=w.ApiController.state,t=r1(e);return e.length?(0,y.dy)`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(e=>(0,y.dy)`
            <wui-card-select
              imageSrc=${C(w.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
              .installed=${e.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:(0,y.dy)`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){let{connectors:t}=w.ConnectorController.state,r=t.find(({explorerId:t})=>t===e.id);r?w.RouterController.push("ConnectingExternal",{connector:r}):w.RouterController.push("ConnectingWalletConnect",{wallet:e})}};r8.styles=r6,r4([(0,v.SB)()],r8.prototype,"loading",void 0),r4([(0,v.Cb)()],r8.prototype,"query",void 0),r8=r4([(0,b.customElement)("w3m-all-wallets-search")],r8);var r9=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let r7=class extends y.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(w.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return(0,y.dy)`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};r9([(0,v.Cb)({type:Array})],r7.prototype,"platforms",void 0),r9([(0,v.Cb)()],r7.prototype,"onSelectPlatfrom",void 0),r9([(0,v.SB)()],r7.prototype,"buffering",void 0),r7=r9([(0,b.customElement)("w3m-connecting-header")],r7);let ie=class extends q{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),w.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=w.ConnectorController.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns),r=e.find(e=>"INJECTED"===e.type);t?await w.ConnectionController.connectExternal(t):r&&await w.ConnectionController.connectExternal(r),w.IN.close(),w.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){w.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};ie=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,b.customElement)("w3m-connecting-wc-browser")],ie);let it=class extends q{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),w.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:r,href:i}=w.j1.formatNativeUrl(e,this.uri);w.ConnectionController.setWcLinking({name:t,href:i}),w.ConnectionController.setRecentWallet(this.wallet),w.j1.openHref(r,"_blank")}catch{this.error=!0}}};it=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,b.customElement)("w3m-connecting-wc-desktop")],it);let ir=class extends q{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),w.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:r,href:i}=w.j1.formatNativeUrl(e,this.uri);w.ConnectionController.setWcLinking({name:t,href:i}),w.ConnectionController.setRecentWallet(this.wallet),w.j1.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){let e=w.j1.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(w.ConnectionController.setBuffering(!0),setTimeout(()=>{w.ConnectionController.setBuffering(!1)},5e3))}};ir=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,b.customElement)("w3m-connecting-wc-mobile")],ir);var ii=(0,y.iv)`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let io=class extends q{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),w.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),(0,y.dy)`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return w.ConnectionController.setWcLinking(void 0),w.ConnectionController.setRecentWallet(this.wallet),(0,y.dy)` <wui-qr-code
      size=${e}
      theme=${w.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${C(w.fz.getWalletImage(this.wallet))}
      alt=${C(t)}
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return(0,y.dy)`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};io.styles=ii,io=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,b.customElement)("w3m-connecting-wc-qrcode")],io);var ia=(0,y.iv)`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let is=class extends y.oi{constructor(){super(...arguments),this.dappImageUrl=w.OptionsController.state.metadata?.icons,this.walletImageUrl=w.MO.getConnectedWalletImageUrl()}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return(0,y.dy)`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};is.styles=ia,is=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,b.customElement)("w3m-connecting-siwe")],is);let il=class extends y.oi{constructor(){if(super(),this.wallet=w.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");w.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return(0,y.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${C(w.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};il=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,b.customElement)("w3m-connecting-wc-unsupported")],il);let ic=class extends q{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",w.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:r,href:i}=w.j1.formatUniversalUrl(e,this.uri);w.ConnectionController.setWcLinking({name:t,href:i}),w.ConnectionController.setRecentWallet(this.wallet),w.j1.openHref(r,"_blank")}catch{this.error=!0}}};ic=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,b.customElement)("w3m-connecting-wc-web")],ic);var iu=(0,y.iv)`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,id=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};function ih(){let e=w.RouterController.state.data?.connector?.name,t=w.RouterController.state.data?.wallet?.name,r=w.RouterController.state.data?.network?.name,i=t??e,n=w.ConnectorController.getConnectors(),o=1===n.length&&n[0]?.id==="w3m-email";return{Connect:`Connect ${o?"Email":""} Wallet`,Account:void 0,ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:i?`Get ${i}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailWalletWaiting:"Approve Email"}}let ip=class extends y.oi{constructor(){super(),this.unsubscribe=[],this.heading=ih()[w.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(w.RouterController.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),w.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,y.dy)`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){w.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),w.RouterController.push("WhatIsAWallet")}async onClose(){w.yD.state.isSiweEnabled&&"success"!==w.yD.state.status&&await w.ConnectionController.disconnect(),w.IN.close()}titleTemplate(){return(0,y.dy)`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:e}=w.RouterController.state;return this.showBack&&"ApproveTransaction"!==e?(0,y.dy)`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:(0,y.dy)`<wui-icon-link
      data-hidden=${"Connect"!==e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?(0,y.dy)`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){let t=this.shadowRoot?.querySelector("wui-text");if(t){let r=ih()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:e}=w.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){"ConnectingSiwe"===w.RouterController.state.view?w.RouterController.push("Connect"):w.RouterController.goBack()}};ip.styles=[iu],id([(0,v.SB)()],ip.prototype,"heading",void 0),id([(0,v.SB)()],ip.prototype,"buffering",void 0),id([(0,v.SB)()],ip.prototype,"showBack",void 0),ip=id([(0,b.customElement)("w3m-header")],ip);var ig=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let im=class extends y.oi{constructor(){super(...arguments),this.data=[]}render(){return(0,y.dy)`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>(0,y.dy)`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>(0,y.dy)`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};ig([(0,v.Cb)({type:Array})],im.prototype,"data",void 0),im=ig([(0,b.customElement)("w3m-help-widget")],im);var iw=(0,y.iv)`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;let ib=class extends y.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=w.OptionsController.state;return e||t?(0,y.dy)`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=w.OptionsController.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=w.OptionsController.state;return e?(0,y.dy)`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=w.OptionsController.state;return e?(0,y.dy)`<a href=${e}>Privacy Policy</a>`:null}};ib.styles=[iw],ib=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}([(0,b.customElement)("w3m-legal-footer")],ib);var iy=(0,y.iv)`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,iv=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let ix=class extends y.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:r,chrome_store:i,homepage:n}=this.wallet,o=w.j1.isMobile(),a=w.j1.isIos(),s=w.j1.isAndroid(),l=[t,r,n,i].filter(Boolean).length>1,c=b.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!o?(0,y.dy)`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>w.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&n?(0,y.dy)`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?(0,y.dy)`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&s?(0,y.dy)`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&w.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&w.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&w.j1.openHref(this.wallet.homepage,"_blank")}};ix.styles=[iy],iv([(0,v.Cb)({type:Object})],ix.prototype,"wallet",void 0),ix=iv([(0,b.customElement)("w3m-mobile-download-links")],ix);var iC=(0,y.iv)`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,iE=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let i_={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},iS=class extends y.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=w.SnackController.state.open,this.unsubscribe.push(w.SnackController.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=w.SnackController.state,r=i_[t];return(0,y.dy)`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>w.SnackController.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};iS.styles=iC,iE([(0,v.SB)()],iS.prototype,"open",void 0),iS=iE([(0,b.customElement)("w3m-snackbar")],iS);var ik=(0,y.iv)`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  .alphaBanner {
    padding: 10px 12px 10px 10px;
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-accent-glass-010);
    margin-bottom: var(--wui-spacing-s);
  }
`,iA=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a};let iO=class extends y.oi{constructor(){super(),this.unsubscribe=[],this.formRef=rH(),this.connectors=w.ConnectorController.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(w.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=this.connectors.length>1;return this.connectors.find(e=>"EMAIL"===e.type)?(0,y.dy)`
      ${this.alphaWarningTemplate()}
      <form ${rG(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?(0,y.dy)`<wui-separator text="or"></wui-separator>`:null}
    `:null}alphaWarningTemplate(){return(0,y.dy)`
          <wui-flex class="alphaBanner" gap="xs" alignItems="center" justifyContent="center">
            <wui-icon-box
              size="sm"
              icon="alpha"
              iconColor="accent-100"
              background="opaque"
              backgroundColor="accent-100"
            ></wui-icon-box>
            <wui-text variant="small-400" color="accent-100">
              This is an alpha version to test before launch
            </wui-text>
          </wui-flex>
        `}submitButtonTemplate(){return!this.loading&&this.email.length>3?(0,y.dy)`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?(0,y.dy)`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=w.ConnectorController.getEmailConnector();if(!t)throw Error("w3m-email-login-widget: Email connector not found");let{action:r}=await t.provider.connectEmail({email:this.email});w.Xs.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===r?(w.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),w.RouterController.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===r&&w.RouterController.push("EmailVerifyDevice",{email:this.email})}catch(t){let e=w.j1.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":w.SnackController.showError(t)}finally{this.loading=!1}}onFocusEvent(){w.Xs.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};iO.styles=ik,iA([(0,v.SB)()],iO.prototype,"connectors",void 0),iA([(0,v.SB)()],iO.prototype,"email",void 0),iA([(0,v.SB)()],iO.prototype,"loading",void 0),iA([(0,v.SB)()],iO.prototype,"error",void 0),iO=iA([(0,b.customElement)("w3m-email-login-widget")],iO);let i$=!1;class iI{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{w.AccountController.setIsConnected(e)},this.setCaipAddress=e=>{w.AccountController.setCaipAddress(e)},this.setBalance=(e,t)=>{w.AccountController.setBalance(e,t)},this.setProfileName=e=>{w.AccountController.setProfileName(e)},this.setProfileImage=e=>{w.AccountController.setProfileImage(e)},this.resetAccount=()=>{w.AccountController.resetAccount()},this.setCaipNetwork=e=>{w.NetworkController.setCaipNetwork(e)},this.getCaipNetwork=()=>w.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=e=>{w.NetworkController.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>w.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{w.NetworkController.resetNetwork()},this.setConnectors=e=>{w.ConnectorController.setConnectors(e)},this.addConnector=e=>{w.ConnectorController.addConnector(e)},this.getConnectors=()=>w.ConnectorController.getConnectors(),this.resetWcConnection=()=>{w.ConnectionController.resetWcConnection()},this.fetchIdentity=e=>w.Lr.fetchIdentity(e),this.setAddressExplorerUrl=e=>{w.AccountController.setAddressExplorerUrl(e)},this.setSIWENonce=e=>{w.yD.setNonce(e)},this.setSIWESession=e=>{w.yD.setSession(e)},this.setSIWEStatus=e=>{w.yD.setStatus(e)},this.setSIWEMessage=e=>{w.yD.setMessage(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),w.IN.open(e)}async close(){await this.initOrContinue(),w.IN.close()}setLoading(e){w.IN.setLoading(e)}getThemeMode(){return w.ThemeController.state.themeMode}getThemeVariables(){return w.ThemeController.state.themeVariables}setThemeMode(e){w.ThemeController.setThemeMode(e),(0,b.setColorTheme)(w.ThemeController.state.themeMode);try{let e=w.ConnectorController.getEmailConnector();e&&e.provider.syncTheme({themeMode:w.ThemeController.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}}setThemeVariables(e){w.ThemeController.setThemeVariables(e),(0,b.setThemeVariables)(w.ThemeController.state.themeVariables);try{let e=w.ConnectorController.getEmailConnector();e&&e.provider.syncTheme({themeVariables:w.ThemeController.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}}subscribeTheme(e){return w.ThemeController.subscribe(e)}getState(){return{...w.Ie.state}}subscribeState(e){return w.Ie.subscribe(e)}getEvent(){return{...w.Xs.state}}subscribeEvents(e){return w.Xs.subscribe(e)}subscribeSIWEState(e){return w.yD.subscribe(e)}initControllers(e){if(w.NetworkController.setClient(e.networkControllerClient),w.NetworkController.setDefaultCaipNetwork(e.defaultChain),w.OptionsController.setProjectId(e.projectId),w.OptionsController.setIncludeWalletIds(e.includeWalletIds),w.OptionsController.setExcludeWalletIds(e.excludeWalletIds),w.OptionsController.setFeaturedWalletIds(e.featuredWalletIds),w.OptionsController.setTokens(e.tokens),w.OptionsController.setTermsConditionsUrl(e.termsConditionsUrl),w.OptionsController.setPrivacyPolicyUrl(e.privacyPolicyUrl),w.OptionsController.setCustomWallets(e.customWallets),w.OptionsController.setEnableAnalytics(e.enableAnalytics),w.OptionsController.setSdkVersion(e._sdkVersion),w.ConnectionController.setClient(e.connectionControllerClient),e.siweControllerClient){let t=e.siweControllerClient;w.yD.setSIWEClient(t)}e.metadata&&w.OptionsController.setMetadata(e.metadata),e.themeMode&&w.ThemeController.setThemeMode(e.themeMode),e.themeVariables&&w.ThemeController.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!i$&&w.j1.isClient()&&(i$=!0,this.initPromise=new Promise(async e=>{await Promise.all([Promise.resolve().then(r.bind(r,95128)),Promise.resolve().then(r.bind(r,90078))]);let t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}let iD={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.5.7"},iP={ConnectorExplorerIds:{[iD.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[iD.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[iD.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[iD.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[iD.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[iD.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[iD.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[iD.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[iD.INJECTED_CONNECTOR_ID]:"Browser Wallet",[iD.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[iD.COINBASE_CONNECTOR_ID]:"Coinbase",[iD.LEDGER_CONNECTOR_ID]:"Ledger",[iD.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[iD.INJECTED_CONNECTOR_ID]:"INJECTED",[iD.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[iD.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[iD.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},iT={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0,getCaipTokens(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,r])=>{t[`${iD.EIP155}:${e}`]=r}),t}};class iR extends iI{constructor(e){let{wagmiConfig:t,siweConfig:r,chains:i,defaultChain:n,tokens:o,_sdkVersion:a,...s}=e;if(!t)throw Error("web3modal:constructor - wagmiConfig is undefined");if(!s.projectId)throw Error("web3modal:constructor - projectId is undefined");super({networkControllerClient:{switchCaipNetwork:async e=>{let t=iT.caipNetworkIdToNumber(e?.id);t&&await (0,g.If)({chainId:t})},async getApprovedCaipNetworksData(){let e=localStorage.getItem("wagmi.wallet");if(e?.includes(iD.EMAIL_CONNECTOR_ID))return{supportsAllNetworks:!1,approvedCaipNetworkIds:iP.WalletConnectRpcChainIds.map(e=>`${iD.EIP155}:${e}`)};if(e?.includes(iD.WALLET_CONNECT_CONNECTOR_ID)){let e=t.connectors.find(e=>e.id===iD.WALLET_CONNECT_CONNECTOR_ID);if(!e)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let r=await e.getProvider(),i=r.signer?.session?.namespaces,n=i?.[iD.EIP155]?.methods,o=i?.[iD.EIP155]?.chains;return{supportsAllNetworks:n?.includes(iD.ADD_CHAIN_METHOD),approvedCaipNetworkIds:o}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},connectionControllerClient:{connectWalletConnect:async e=>{let r=t.connectors.find(e=>e.id===iD.WALLET_CONNECT_CONNECTOR_ID);if(!r)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");r.on("message",t=>{"display_uri"===t.type&&(e(t.data),r.removeAllListeners())});let i=iT.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,g.$j)({connector:r,chainId:i})},connectExternal:async({id:e,provider:r,info:i})=>{let n=t.connectors.find(t=>t.id===e);if(!n)throw Error("connectionControllerClient:connectExternal - connector is undefined");r&&i&&n.id===iD.EIP6963_CONNECTOR_ID&&n.setEip6963Wallet?.({provider:r,info:i});let o=iT.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,g.$j)({connector:n,chainId:o})},checkInstalled:e=>{let t=this.getConnectors().filter(e=>"ANNOUNCED"===e.type),r=this.getConnectors().find(e=>"INJECTED"===e.type);return e?!!(t.length&&e.some(e=>t.some(t=>t.info?.rdns===e)))||!!r&&!!window?.ethereum&&e.some(e=>!!window.ethereum?.[String(e)]):!!window.ethereum},disconnect:async()=>{await (0,g.zP)(),r?.options?.signOutOnDisconnect&&await r.signOut()},signMessage:async e=>(0,g.l)({message:e})},siweControllerClient:r,defaultChain:function(e){if(e)return{id:`${iD.EIP155}:${e.id}`,name:e.name,imageId:iP.EIP155NetworkImageIds[e.id]}}(n),tokens:iT.getCaipTokens(o),_sdkVersion:a??`html-wagmi-${iD.VERSION}`,...s}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(i),this.syncConnectors(t),this.syncEmailConnector(t),this.listenEIP6963Connector(t),this.listenEmailConnector(t),(0,g.uH)(()=>this.syncAccount()),(0,g.QC)(()=>this.syncNetwork())}getState(){let e=super.getState();return{...e,selectedNetworkId:iT.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:iT.caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){let t=e?.map(e=>({id:`${iD.EIP155}:${e.id}`,name:e.name,imageId:iP.EIP155NetworkImageIds[e.id],imageUrl:this.options?.chainImages?.[e.id]}));this.setRequestedCaipNetworks(t??[])}async syncAccount(){let{address:e,isConnected:t}=(0,g.D0)(),{chain:r}=(0,g.Hy)();if(this.resetAccount(),t&&e&&r){let i=`${iD.EIP155}:${r.id}:${e}`;this.setIsConnected(t),this.setCaipAddress(i),await Promise.all([this.syncProfile(e,r),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){let{address:e,isConnected:t}=(0,g.D0)(),{chain:r}=(0,g.Hy)();if(r){let i=String(r.id),n=`${iD.EIP155}:${i}`;if(this.setCaipNetwork({id:n,name:r.name,imageId:iP.EIP155NetworkImageIds[r.id],imageUrl:this.options?.chainImages?.[r.id]}),t&&e){let t=`${iD.EIP155}:${r.id}:${e}`;if(this.setCaipAddress(t),r.blockExplorers?.default?.url){let t=`${r.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(t)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,r),await this.syncBalance(e,r))}}}async syncProfile(e,t){if(t.id!==m.R.id){this.setProfileName(null),this.setProfileImage(null);return}try{let{name:r,avatar:i}=await this.fetchIdentity({caipChainId:`${iD.EIP155}:${t.id}`,address:e});this.setProfileName(r),this.setProfileImage(i)}catch{let r=await (0,g.Lk)({address:e,chainId:t.id});if(r){this.setProfileName(r);let e=await (0,g.w6)({name:r,chainId:t.id});e&&this.setProfileImage(e)}}}async syncBalance(e,t){let r=await (0,g.EG)({address:e,chainId:t.id,token:this.options?.tokens?.[t.id]?.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(e){let t=[];e.connectors.forEach(({id:e,name:r})=>{[iD.EIP6963_CONNECTOR_ID,iD.EMAIL_CONNECTOR_ID].includes(e)||t.push({id:e,explorerId:iP.ConnectorExplorerIds[e],imageId:iP.ConnectorImageIds[e],imageUrl:this.options?.connectorImages?.[e],name:iP.ConnectorNamesMap[e]??r,type:iP.ConnectorTypesMap[e]??"EXTERNAL"})}),this.setConnectors(t)}async syncEmailConnector(e){let t=e.connectors.find(({id:e})=>"w3mEmail"===e);if(t){let e=await t.getProvider();this.addConnector({id:iD.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:e})}}eip6963EventHandler(e,t){if(t.detail){let{info:r,provider:i}=t.detail;this.getConnectors().find(e=>e.name===r.name)||(this.addConnector({id:iD.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:r.icon??this.options?.connectorImages?.[iD.EIP6963_CONNECTOR_ID],name:r.name,provider:i,info:r}),e.isAuthorized({info:r,provider:i}))}}listenEIP6963Connector(e){let t=e.connectors.find(e=>e.id===iD.EIP6963_CONNECTOR_ID);if("undefined"!=typeof window&&t){let e=this.eip6963EventHandler.bind(this,t);window.addEventListener(iD.EIP6963_ANNOUNCE_EVENT,e),window.dispatchEvent(new Event(iD.EIP6963_REQUEST_EVENT))}}async listenEmailConnector(e){let t=e.connectors.find(e=>e.id===iD.EMAIL_CONNECTOR_ID);if("undefined"!=typeof window&&t){super.setLoading(!0);let e=await t.getProvider(),r=e.getLoginEmailUsed();super.setLoading(r),e.onRpcRequest(()=>{super.open({view:"ApproveTransaction"})}),e.onRpcResponse(()=>{super.close()}),e.onIsConnected(()=>{super.setLoading(!1)})}}}r(92219),r(45775),new WeakMap,new WeakMap;var iN=r(48764);function iM(e){return!a&&(n=a=new iR({...e,_sdkVersion:`react-wagmi-${iD.VERSION}`})),a}"undefined"==typeof window||(window.Buffer||(window.Buffer=iN.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}})),r(75276),r(39028),r(79578),r(3980),w.j1.getBlockchainApiUrl()},75384:function(e,t,r){"use strict";r.d(t,{zo:function(){return y},mL:function(){return eY},BB:function(){return eQ}});var i={};r.r(i),r.d(i,{identity:function(){return N}});var n={};r.r(n),r.d(n,{base2:function(){return M}});var o={};r.r(o),r.d(o,{base8:function(){return j}});var a={};r.r(a),r.d(a,{base10:function(){return U}});var s={};r.r(s),r.d(s,{base16:function(){return B},base16upper:function(){return L}});var l={};r.r(l),r.d(l,{base32:function(){return F},base32hex:function(){return Z},base32hexpad:function(){return G},base32hexpadupper:function(){return V},base32hexupper:function(){return q},base32pad:function(){return W},base32padupper:function(){return H},base32upper:function(){return z},base32z:function(){return K}});var c={};r.r(c),r.d(c,{base36:function(){return Y},base36upper:function(){return Q}});var u={};r.r(u),r.d(u,{base58btc:function(){return X},base58flickr:function(){return J}});var d={};r.r(d),r.d(d,{base64:function(){return ee},base64pad:function(){return et},base64url:function(){return er},base64urlpad:function(){return ei}});var h={};r.r(h),r.d(h,{base256emoji:function(){return es}});var f={};r.r(f),r.d(f,{sha256:function(){return ev},sha512:function(){return ex}});var p={};r.r(p),r.d(p,{identity:function(){return eC}});var g={};r.r(g),r.d(g,{code:function(){return e_},decode:function(){return ek},encode:function(){return eS},name:function(){return eE}});var m={};function w(e){return null!=globalThis.Buffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}function b(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?w(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}function y(e,t){t||(t=e.reduce((e,t)=>e+t.length,0));let r=b(t),i=0;for(let t of e)r.set(t,i),i+=t.length;return w(r)}r.r(m),r.d(m,{code:function(){return eI},decode:function(){return eP},encode:function(){return eD},name:function(){return e$}});var v=function(e,t){if(e.length>=255)throw TypeError("Alphabet too long");for(var r=new Uint8Array(256),i=0;i<r.length;i++)r[i]=255;for(var n=0;n<e.length;n++){var o=e.charAt(n),a=o.charCodeAt(0);if(255!==r[a])throw TypeError(o+" is ambiguous");r[a]=n}var s=e.length,l=e.charAt(0),c=Math.log(s)/Math.log(256),u=Math.log(256)/Math.log(s);function d(e){if("string"!=typeof e)throw TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[0]){for(var i=0,n=0;e[t]===l;)i++,t++;for(var o=(e.length-t)*c+1>>>0,a=new Uint8Array(o);e[t];){var u=r[e.charCodeAt(t)];if(255===u)return;for(var d=0,h=o-1;(0!==u||d<n)&&-1!==h;h--,d++)u+=s*a[h]>>>0,a[h]=u%256>>>0,u=u/256>>>0;if(0!==u)throw Error("Non-zero carry");n=d,t++}if(" "!==e[t]){for(var f=o-n;f!==o&&0===a[f];)f++;for(var p=new Uint8Array(i+(o-f)),g=i;f!==o;)p[g++]=a[f++];return p}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===t.length)return"";for(var r=0,i=0,n=0,o=t.length;n!==o&&0===t[n];)n++,r++;for(var a=(o-n)*u+1>>>0,c=new Uint8Array(a);n!==o;){for(var d=t[n],h=0,f=a-1;(0!==d||h<i)&&-1!==f;f--,h++)d+=256*c[f]>>>0,c[f]=d%s>>>0,d=d/s>>>0;if(0!==d)throw Error("Non-zero carry");i=h,n++}for(var p=a-i;p!==a&&0===c[p];)p++;for(var g=l.repeat(r);p<a;++p)g+=e.charAt(c[p]);return g},decodeUnsafe:d,decode:function(e){var r=d(e);if(r)return r;throw Error(`Non-${t} character`)}}};new Uint8Array(0);let x=(e,t)=>{if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(let r=0;r<e.byteLength;r++)if(e[r]!==t[r])return!1;return!0},C=e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw Error("Unknown type, must be binary type")},E=e=>new TextEncoder().encode(e),_=e=>new TextDecoder().decode(e);class S{constructor(e,t,r){this.name=e,this.prefix=t,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class k{constructor(e,t,r){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=r}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return O(this,e)}}class A{constructor(e){this.decoders=e}or(e){return O(this,e)}decode(e){let t=e[0],r=this.decoders[t];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}let O=(e,t)=>new A({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class ${constructor(e,t,r,i){this.name=e,this.prefix=t,this.baseEncode=r,this.baseDecode=i,this.encoder=new S(e,t,r),this.decoder=new k(e,t,i)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}let I=({name:e,prefix:t,encode:r,decode:i})=>new $(e,t,r,i),D=({prefix:e,name:t,alphabet:r})=>{let{encode:i,decode:n}=v(r,t);return I({prefix:e,name:t,encode:i,decode:e=>C(n(e))})},P=(e,t,r,i)=>{let n={};for(let e=0;e<t.length;++e)n[t[e]]=e;let o=e.length;for(;"="===e[o-1];)--o;let a=new Uint8Array(o*r/8|0),s=0,l=0,c=0;for(let t=0;t<o;++t){let o=n[e[t]];if(void 0===o)throw SyntaxError(`Non-${i} character`);l=l<<r|o,(s+=r)>=8&&(s-=8,a[c++]=255&l>>s)}if(s>=r||255&l<<8-s)throw SyntaxError("Unexpected end of data");return a},T=(e,t,r)=>{let i="="===t[t.length-1],n=(1<<r)-1,o="",a=0,s=0;for(let i=0;i<e.length;++i)for(s=s<<8|e[i],a+=8;a>r;)a-=r,o+=t[n&s>>a];if(a&&(o+=t[n&s<<r-a]),i)for(;o.length*r&7;)o+="=";return o},R=({name:e,prefix:t,bitsPerChar:r,alphabet:i})=>I({prefix:t,name:e,encode:e=>T(e,i,r),decode:t=>P(t,i,r,e)}),N=I({prefix:"\0",name:"identity",encode:e=>_(e),decode:e=>E(e)}),M=R({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),j=R({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),U=D({prefix:"9",name:"base10",alphabet:"0123456789"}),B=R({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),L=R({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),F=R({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),z=R({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),W=R({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),H=R({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),Z=R({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),q=R({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),G=R({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),V=R({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),K=R({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),Y=D({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),Q=D({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),X=D({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),J=D({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),ee=R({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),et=R({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),er=R({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),ei=R({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),en=Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),eo=en.reduce((e,t,r)=>(e[r]=t,e),[]),ea=en.reduce((e,t,r)=>(e[t.codePointAt(0)]=r,e),[]),es=I({prefix:"\uD83D\uDE80",name:"base256emoji",encode:function(e){return e.reduce((e,t)=>e+=eo[t],"")},decode:function(e){let t=[];for(let r of e){let e=ea[r.codePointAt(0)];if(void 0===e)throw Error(`Non-base256emoji character: ${r}`);t.push(e)}return new Uint8Array(t)}});var el=function e(t,r,i){r=r||[];for(var n=i=i||0;t>=2147483648;)r[i++]=255&t|128,t/=128;for(;-128&t;)r[i++]=255&t|128,t>>>=7;return r[i]=0|t,e.bytes=i-n+1,r},ec=function e(t,r){var i,n=0,r=r||0,o=0,a=r,s=t.length;do{if(a>=s)throw e.bytes=0,RangeError("Could not decode varint");i=t[a++],n+=o<28?(127&i)<<o:(127&i)*Math.pow(2,o),o+=7}while(i>=128);return e.bytes=a-r,n};let eu=(e,t=0)=>[ec(e,t),ec.bytes],ed=(e,t,r=0)=>(el(e,t,r),t),eh=e=>e<128?1:e<16384?2:e<2097152?3:e<268435456?4:e<34359738368?5:e<4398046511104?6:e<562949953421312?7:e<72057594037927940?8:e<0x7fffffffffffffff?9:10,ef=(e,t)=>{let r=t.byteLength,i=eh(e),n=i+eh(r),o=new Uint8Array(n+r);return ed(e,o,0),ed(r,o,i),o.set(t,n),new em(e,r,t,o)},ep=e=>{let t=C(e),[r,i]=eu(t),[n,o]=eu(t.subarray(i)),a=t.subarray(i+o);if(a.byteLength!==n)throw Error("Incorrect length");return new em(r,n,a,t)},eg=(e,t)=>e===t||e.code===t.code&&e.size===t.size&&x(e.bytes,t.bytes);class em{constructor(e,t,r,i){this.code=e,this.size=t,this.digest=r,this.bytes=i}}let ew=({name:e,code:t,encode:r})=>new eb(e,t,r);class eb{constructor(e,t,r){this.name=e,this.code=t,this.encode=r}digest(e){if(e instanceof Uint8Array){let t=this.encode(e);return t instanceof Uint8Array?ef(this.code,t):t.then(e=>ef(this.code,e))}throw Error("Unknown type, must be binary type")}}let ey=e=>async t=>new Uint8Array(await crypto.subtle.digest(e,t)),ev=ew({name:"sha2-256",code:18,encode:ey("SHA-256")}),ex=ew({name:"sha2-512",code:19,encode:ey("SHA-512")}),eC={code:0,name:"identity",encode:C,digest:e=>ef(0,C(e))},eE="raw",e_=85,eS=e=>C(e),ek=e=>C(e),eA=new TextEncoder,eO=new TextDecoder,e$="json",eI=512,eD=e=>eA.encode(JSON.stringify(e)),eP=e=>JSON.parse(eO.decode(e));class eT{constructor(e,t,r,i){this.code=t,this.version=e,this.multihash=r,this.bytes=i,this.byteOffset=i.byteOffset,this.byteLength=i.byteLength,this.asCID=this,this._baseCache=new Map,Object.defineProperties(this,{byteOffset:ez,byteLength:ez,code:eF,version:eF,multihash:eF,bytes:eF,_baseCache:ez,asCID:ez})}toV0(){if(0===this.version)return this;{let{code:e,multihash:t}=this;if(e!==ej)throw Error("Cannot convert a non dag-pb CID to CIDv0");if(t.code!==eU)throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");return eT.createV0(t)}}toV1(){switch(this.version){case 0:{let{code:e,digest:t}=this.multihash,r=ef(e,t);return eT.createV1(this.code,r)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}equals(e){return e&&this.code===e.code&&this.version===e.version&&eg(this.multihash,e.multihash)}toString(e){let{bytes:t,version:r,_baseCache:i}=this;return 0===r?eN(t,i,e||X.encoder):eM(t,i,e||F.encoder)}toJSON(){return{code:this.code,version:this.version,hash:this.multihash.bytes}}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}static isCID(e){return eW(/^0\.0/,eH),!!(e&&(e[eL]||e.asCID===e))}get toBaseEncodedString(){throw Error("Deprecated, use .toString()")}get codec(){throw Error('"codec" property is deprecated, use integer "code" property instead')}get buffer(){throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")}get multibaseName(){throw Error('"multibaseName" property is deprecated')}get prefix(){throw Error('"prefix" property is deprecated')}static asCID(e){if(e instanceof eT)return e;if(null!=e&&e.asCID===e){let{version:t,code:r,multihash:i,bytes:n}=e;return new eT(t,r,i,n||eB(t,r,i.bytes))}if(null==e||!0!==e[eL])return null;{let{version:t,multihash:r,code:i}=e,n=ep(r);return eT.create(t,i,n)}}static create(e,t,r){if("number"!=typeof t)throw Error("String codecs are no longer supported");switch(e){case 0:if(t===ej)return new eT(e,t,r,r.bytes);throw Error(`Version 0 CID must use dag-pb (code: ${ej}) block encoding`);case 1:{let i=eB(e,t,r.bytes);return new eT(e,t,r,i)}default:throw Error("Invalid version")}}static createV0(e){return eT.create(0,ej,e)}static createV1(e,t){return eT.create(1,e,t)}static decode(e){let[t,r]=eT.decodeFirst(e);if(r.length)throw Error("Incorrect length");return t}static decodeFirst(e){let t=eT.inspectBytes(e),r=t.size-t.multihashSize,i=C(e.subarray(r,r+t.multihashSize));if(i.byteLength!==t.multihashSize)throw Error("Incorrect length");let n=i.subarray(t.multihashSize-t.digestSize),o=new em(t.multihashCode,t.digestSize,n,i);return[0===t.version?eT.createV0(o):eT.createV1(t.codec,o),e.subarray(t.size)]}static inspectBytes(e){let t=0,r=()=>{let[r,i]=eu(e.subarray(t));return t+=i,r},i=r(),n=ej;if(18===i?(i=0,t=0):1===i&&(n=r()),0!==i&&1!==i)throw RangeError(`Invalid CID version ${i}`);let o=t,a=r(),s=r(),l=t+s;return{version:i,codec:n,multihashCode:a,digestSize:s,multihashSize:l-o,size:l}}static parse(e,t){let[r,i]=eR(e,t),n=eT.decode(i);return n._baseCache.set(r,e),n}}let eR=(e,t)=>{switch(e[0]){case"Q":return[X.prefix,(t||X).decode(`${X.prefix}${e}`)];case X.prefix:return[X.prefix,(t||X).decode(e)];case F.prefix:return[F.prefix,(t||F).decode(e)];default:if(null==t)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[e[0],t.decode(e)]}},eN=(e,t,r)=>{let{prefix:i}=r;if(i!==X.prefix)throw Error(`Cannot string encode V0 in ${r.name} encoding`);let n=t.get(i);if(null!=n)return n;{let n=r.encode(e).slice(1);return t.set(i,n),n}},eM=(e,t,r)=>{let{prefix:i}=r,n=t.get(i);if(null!=n)return n;{let n=r.encode(e);return t.set(i,n),n}},ej=112,eU=18,eB=(e,t,r)=>{let i=eh(e),n=i+eh(t),o=new Uint8Array(n+r.byteLength);return ed(e,o,0),ed(t,o,i),o.set(r,n),o},eL=Symbol.for("@ipld/js-cid/CID"),eF={writable:!1,configurable:!1,enumerable:!0},ez={writable:!1,enumerable:!1,configurable:!1},eW=(e,t)=>{if(e.test("0.0.0-dev"))console.warn(t);else throw Error(t)},eH=`CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,eZ={...i,...n,...o,...a,...s,...l,...c,...u,...d,...h};function eq(e,t,r,i){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:r},decoder:{decode:i}}}({...f,...p});let eG=eq("utf8","u",e=>"u"+new TextDecoder("utf8").decode(e),e=>new TextEncoder().encode(e.substring(1))),eV=eq("ascii","a",e=>{let t="a";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},e=>{let t=b((e=e.substring(1)).length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}),eK={utf8:eG,"utf-8":eG,hex:eZ.base16,latin1:eV,ascii:eV,binary:eV,...eZ};function eY(e,t="utf8"){let r=eK[t];if(!r)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?w(globalThis.Buffer.from(e,"utf-8")):r.decoder.decode(`${r.prefix}${e}`)}function eQ(e,t="utf8"){let r=eK[t];if(!r)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8"):r.encoder.encode(e).substring(1)}},17832:function(e,t,r){"use strict";r.d(t,{sj:function(){return f},iH:function(){return m},CO:function(){return g},Ld:function(){return p}}),Symbol();let i=Symbol(),n=Object.getPrototypeOf,o=new WeakMap,a=e=>e&&(o.has(e)?o.get(e):n(e)===Object.prototype||n(e)===Array.prototype),s=e=>a(e)&&e[i]||null,l=(e,t=!0)=>{o.set(e,t)},c=e=>"object"==typeof e&&null!==e,u=new WeakMap,d=new WeakSet,[h]=((e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>c(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),i=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},n=new WeakMap,o=(e,t,r=i)=>{let a=n.get(e);if((null==a?void 0:a[0])===t)return a[1];let s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return l(s,!0),n.set(e,[t,s]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(s,t))return;let i=Reflect.get(e,t),n={value:i,enumerable:!0,configurable:!0};if(d.has(i))l(i,!1);else if(i instanceof Promise)delete n.value,n.get=()=>r(i);else if(u.has(i)){let[e,t]=u.get(i);n.value=o(e,t(),r)}Object.defineProperty(s,t,n)}),Object.preventExtensions(s)},a=new WeakMap,h=[1,1],f=i=>{if(!c(i))throw Error("object required");let n=a.get(i);if(n)return n;let l=h[0],p=new Set,g=(e,t=++h[0])=>{l!==t&&(l=t,p.forEach(r=>r(e,t)))},m=h[1],w=(e=++h[1])=>(m===e||p.size||(m=e,y.forEach(([t])=>{let r=t[1](e);r>l&&(l=r)})),l),b=e=>(t,r)=>{let i=[...t];i[1]=[e,...i[1]],g(i,r)},y=new Map,v=(e,t)=>{if(y.has(e))throw Error("prop listener already exists");if(p.size){let r=t[3](b(e));y.set(e,[t,r])}else y.set(e,[t])},x=e=>{var t;let r=y.get(e);r&&(y.delete(e),null==(t=r[1])||t.call(r))},C=e=>{p.add(e),1===p.size&&y.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let i=e[3](b(r));y.set(r,[e,i])});let t=()=>{p.delete(e),0===p.size&&y.forEach(([e,t],r)=>{t&&(t(),y.set(r,[e]))})};return t},E=Array.isArray(i)?[]:Object.create(Object.getPrototypeOf(i)),_={deleteProperty(e,t){let r=Reflect.get(e,t);x(t);let i=Reflect.deleteProperty(e,t);return i&&g(["delete",[t],r]),i},set(t,i,n,o){let l=Reflect.has(t,i),h=Reflect.get(t,i,o);if(l&&(e(h,n)||a.has(n)&&e(h,a.get(n))))return!0;x(i),c(n)&&(n=s(n)||n);let p=n;if(n instanceof Promise)n.then(e=>{n.status="fulfilled",n.value=e,g(["resolve",[i],e])}).catch(e=>{n.status="rejected",n.reason=e,g(["reject",[i],e])});else{!u.has(n)&&r(n)&&(p=f(n));let e=!d.has(p)&&u.get(p);e&&v(i,e)}return Reflect.set(t,i,p,o),g(["set",[i],n,h]),!0}},S=t(E,_);a.set(i,S);let k=[E,w,o,C];return u.set(S,k),Reflect.ownKeys(i).forEach(e=>{let t=Object.getOwnPropertyDescriptor(i,e);"value"in t&&(S[e]=i[e],delete t.value,delete t.writable),Object.defineProperty(E,e,t)}),S})=>[f,u,d,e,t,r,i,n,o,a,h])();function f(e={}){return h(e)}function p(e,t,r){let i;let n=u.get(e);n||console.warn("Please use proxy object");let o=[],a=n[3],s=!1,l=a(e=>{if(o.push(e),r){t(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,s&&t(o.splice(0))}))});return s=!0,()=>{s=!1,l()}}function g(e,t){let r=u.get(e);r||console.warn("Please use proxy object");let[i,n,o]=r;return o(i,n(),t)}function m(e){return d.add(e),e}},14503:function(e,t,r){"use strict";function i(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}r.d(t,{T:function(){return i}})},61376:function(e,t,r){"use strict";r.d(t,{R:function(){return b}});var i=r(14503),n=r(16693),o=r(62027),a=r(80377),s=r(97405),l=r(7210),c=r(77799),u=r(47864),d=r(92106),h=r(26445),f=r(87469),p=r(61163),g=r(74688),m=r(32357),w=r(47531);async function b(e,t){let{account:n=e.account,batch:l=!!e.batch?.multicall,blockNumber:c,blockTag:u="latest",accessList:m,data:b,gas:v,gasPrice:x,maxFeePerGas:C,maxPriorityFeePerGas:E,nonce:_,to:S,value:k,...A}=t,O=n?(0,i.T)(n):void 0;try{(0,w.F)(t);let r=(c?(0,d.eC)(c):void 0)||u,i=e.chain?.formatters?.transactionRequest?.format,n=(i||g.tG)({...(0,p.K)(A,{format:i}),from:O?.address,accessList:m,data:b,gas:v,gasPrice:x,maxFeePerGas:C,maxPriorityFeePerGas:E,nonce:_,to:S,value:k});if(l&&function({request:e}){let{data:t,to:r,...i}=e;return!(!t||t.startsWith("0x82ad56cb"))&&!!r&&!(Object.values(i).filter(e=>void 0!==e).length>0)}({request:n}))try{return await y(e,{...n,blockNumber:c,blockTag:u})}catch(e){if(!(e instanceof a.pZ)&&!(e instanceof a.mm))throw e}let o=await e.request({method:"eth_call",params:r?[n,r]:[n]});if("0x"===o)return{data:void 0};return{data:o}}catch(l){let i=function(e){if(!(e instanceof o.G))return;let t=e.walk();return"object"==typeof t.data?t.data.data:t.data}(l),{offchainLookup:n,offchainLookupSignature:a}=await r.e(422).then(r.bind(r,10422));if(i?.slice(0,10)===a&&S)return{data:await n(e,{data:i,to:S})};throw function(e,{docsPath:t,...r}){let i=(()=>{let t=(0,f.k)(e,r);return t instanceof h.cj?e:t})();return new s.cg(i,{docsPath:t,...r})}(l,{...t,account:O,chain:e.chain})}}async function y(e,t){let{batchSize:r=1024,wait:i=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:o,blockTag:h="latest",data:f,multicallAddress:p,to:g}=t,w=p;if(!w){if(!e.chain)throw new a.pZ;w=(0,u.L)({blockNumber:o,chain:e.chain,contract:"multicall3"})}let b=(o?(0,d.eC)(o):void 0)||h,{schedule:y}=(0,m.S)({id:`${e.uid}.${b}`,wait:i,shouldSplitBatch:e=>e.reduce((e,{data:t})=>e+(t.length-2),0)>2*r,fn:async t=>{let r=t.map(e=>({allowFailure:!0,callData:e.data,target:e.to})),i=(0,c.R)({abi:n.F8,args:[r],functionName:"aggregate3"}),o=await e.request({method:"eth_call",params:[{data:i,to:w},b]});return(0,l.k)({abi:n.F8,args:[r],functionName:"aggregate3",data:o||"0x"})}}),[{returnData:v,success:x}]=await y({data:f,to:g});if(!x)throw new s.VQ({data:v});return"0x"===v?{data:void 0}:{data:v}}},43861:function(e,t,r){"use strict";r.d(t,{C:function(){return c},X:function(){return l}});var i=r(15371),n=r(93714),o=r(79379),a=r(75016),s=r(24453);async function l(e,t){return c(e,t)}async function c(e,t){let{block:r,chain:l=e.chain,request:c,type:u="eip1559"}=t||{},d=await (async()=>"function"==typeof l?.fees?.baseFeeMultiplier?l.fees.baseFeeMultiplier({block:r,client:e,request:c}):l?.fees?.baseFeeMultiplier??1.2)();if(d<1)throw new i.Fz;let h=10**(d.toString().split(".")[1]?.length??0),f=e=>e*BigInt(Math.ceil(d*h))/BigInt(h),p=r||await (0,n.s)(e,a.Q,"getBlock")({});if("function"==typeof l?.fees?.estimateFeesPerGas)return l.fees.estimateFeesPerGas({block:r,client:e,multiply:f,request:c,type:u});if("eip1559"===u){if("bigint"!=typeof p.baseFeePerGas)throw new i.e5;let t=c?.maxPriorityFeePerGas?c.maxPriorityFeePerGas:await (0,o.h)(e,{block:p,chain:l,request:c}),r=f(p.baseFeePerGas);return{maxFeePerGas:c?.maxFeePerGas??r+t,maxPriorityFeePerGas:t}}return{gasPrice:c?.gasPrice??f(await (0,n.s)(e,s.o,"getGasPrice")({}))}}},81841:function(e,t,r){"use strict";r.d(t,{Q:function(){return w}});var i=r(14503),n=r(8998),o=r(92106),a=r(39625),s=r(67795),l=r(62027),c=r(33639);class u extends l.G{constructor(e,{account:t,docsPath:r,chain:i,data:n,gas:o,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:f,value:p}){super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",(0,c.xr)({from:t?.address,to:f,value:void 0!==p&&`${(0,a.d)(p)} ${i?.nativeCurrency?.symbol||"ETH"}`,data:n,gas:o,gasPrice:void 0!==l&&`${(0,s.o)(l)} gwei`,maxFeePerGas:void 0!==u&&`${(0,s.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==d&&`${(0,s.o)(d)} gwei`,nonce:h})].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}var d=r(26445),h=r(87469),f=r(61163),p=r(74688),g=r(47531),m=r(57331);async function w(e,t){let r=t.account??e.account;if(!r)throw new n.o({docsPath:"/docs/actions/public/estimateGas"});let a=(0,i.T)(r);try{let{accessList:r,blockNumber:i,blockTag:n,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:w,value:b,...y}="local"===a.type?await (0,m.Z)(e,t):t,v=(i?(0,o.eC)(i):void 0)||n;(0,g.F)(t);let x=e.chain?.formatters?.transactionRequest?.format,C=(x||p.tG)({...(0,f.K)(y,{format:x}),from:a.address,accessList:r,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:w,value:b}),E=await e.request({method:"eth_estimateGas",params:v?[C,v]:[C]});return BigInt(E)}catch(r){throw function(e,{docsPath:t,...r}){return new u((()=>{let t=(0,h.k)(e,r);return t instanceof d.cj?e:t})(),{docsPath:t,...r})}(r,{...t,account:a,chain:e.chain})}}},79379:function(e,t,r){"use strict";r.d(t,{_:function(){return l},h:function(){return c}});var i=r(15371),n=r(95946),o=r(93714),a=r(75016),s=r(24453);async function l(e,t){return c(e,t)}async function c(e,t){let{block:r,chain:l=e.chain,request:c}=t||{};if("function"==typeof l?.fees?.defaultPriorityFee){let t=r||await (0,o.s)(e,a.Q,"getBlock")({});return l.fees.defaultPriorityFee({block:t,client:e,request:c})}if(void 0!==l?.fees?.defaultPriorityFee)return l?.fees?.defaultPriorityFee;try{let t=await e.request({method:"eth_maxPriorityFeePerGas"});return(0,n.y_)(t)}catch{let[t,n]=await Promise.all([r?Promise.resolve(r):(0,o.s)(e,a.Q,"getBlock")({}),(0,o.s)(e,s.o,"getGasPrice")({})]);if("bigint"!=typeof t.baseFeePerGas)throw new i.e5;let l=n-t.baseFeePerGas;if(l<0n)return 0n;return l}}},75016:function(e,t,r){"use strict";r.d(t,{Q:function(){return a}});var i=r(79814),n=r(92106),o=r(43310);async function a(e,{blockHash:t,blockNumber:r,blockTag:a,includeTransactions:s}={}){let l=s??!1,c=void 0!==r?(0,n.eC)(r):void 0,u=null;if(!(u=t?await e.request({method:"eth_getBlockByHash",params:[t,l]}):await e.request({method:"eth_getBlockByNumber",params:[c||(a??"latest"),l]})))throw new i.f({blockHash:t,blockNumber:r});return(e.chain?.formatters?.block?.format||o.Z)(u)}},79524:function(e,t,r){"use strict";r.d(t,{L:function(){return n}});var i=r(95946);async function n(e){let t=await e.request({method:"eth_chainId"});return(0,i.ly)(t)}},24453:function(e,t,r){"use strict";async function i(e){return BigInt(await e.request({method:"eth_gasPrice"}))}r.d(t,{o:function(){return i}})},86162:function(e,t,r){"use strict";r.d(t,{K:function(){return o}});var i=r(95946),n=r(92106);async function o(e,{address:t,blockTag:r="latest",blockNumber:o}){let a=await e.request({method:"eth_getTransactionCount",params:[t,o?(0,n.eC)(o):r]});return(0,i.ly)(a)}},57331:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var i=r(14503),n=r(43861),o=r(81841),a=r(75016),s=r(86162),l=r(8998),c=r(15371),u=r(93714),d=r(47531),h=r(33639);async function f(e,t){let{account:r=e.account,chain:f,gas:p,nonce:g,type:m}=t;if(!r)throw new l.o;let w=(0,i.T)(r),b=await (0,u.s)(e,a.Q,"getBlock")({blockTag:"latest"}),y={...t,from:w.address};if(void 0===g&&(y.nonce=await (0,u.s)(e,s.K,"getTransactionCount")({address:w.address,blockTag:"pending"})),void 0===m)try{y.type=function(e){if(e.type)return e.type;if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new h.j3({transaction:e})}(y)}catch{y.type="bigint"==typeof b.baseFeePerGas?"eip1559":"legacy"}if("eip1559"===y.type){let{maxFeePerGas:r,maxPriorityFeePerGas:i}=await (0,n.C)(e,{block:b,chain:f,request:y});if(void 0===t.maxPriorityFeePerGas&&t.maxFeePerGas&&t.maxFeePerGas<i)throw new c.ld({maxPriorityFeePerGas:i});y.maxPriorityFeePerGas=i,y.maxFeePerGas=r}else{if(void 0!==t.maxFeePerGas||void 0!==t.maxPriorityFeePerGas)throw new c.e5;let{gasPrice:r}=await (0,n.C)(e,{block:b,chain:f,request:y,type:"legacy"});y.gasPrice=r}return void 0===p&&(y.gas=await (0,u.s)(e,o.Q,"estimateGas")({...y,account:{address:w.address,type:"json-rpc"}})),(0,d.F)(y),y}},99238:function(e,t,r){"use strict";async function i(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]})}r.d(t,{p:function(){return i}})},66403:function(e,t,r){"use strict";r.d(t,{R:function(){return i}});let i=(0,r(86164).a)({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}})},16189:function(e,t,r){"use strict";let i;r.d(t,{e:function(){return a}});var n=r(14503);let o=256;function a(e){let{batch:t,cacheTime:r=e.pollingInterval??4e3,key:a="base",name:s="Base Client",pollingInterval:l=4e3,type:c="base"}=e,u=e.chain,d=e.account?(0,n.T)(e.account):void 0,{config:h,request:f,value:p}=e.transport({chain:u,pollingInterval:l}),g={account:d,batch:t,cacheTime:r,chain:u,key:a,name:s,pollingInterval:l,request:f,transport:{...h,...p},type:c,uid:function(e=11){if(!i||o+e>512){i="",o=0;for(let e=0;e<256;e++)i+=(256+256*Math.random()|0).toString(16).substring(1)}return i.substring(o,o+++e)}()};return Object.assign(g,{extend:function e(t){return r=>{let i=r(t);for(let e in g)delete i[e];let n={...t,...i};return Object.assign(n,{extend:e(n)})}}(g)})}},79578:function(e,t,r){"use strict";r.d(t,{K:function(){return U}});var i=r(16189),n=r(79524),o=r(92106);async function a(e,{chain:t}){let{id:r,name:i,nativeCurrency:n,rpcUrls:a,blockExplorers:s}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:(0,o.eC)(r),chainName:i,nativeCurrency:n,rpcUrls:a.default.http,blockExplorerUrls:s?Object.values(s).map(({url:e})=>e):void 0}]})}var s=r(30286),l=r(14503),c=r(8998),u=r(80377);function d({chain:e,currentChainId:t}){if(!e)throw new u.Bk;if(t!==e.id)throw new u.Yl({chain:e,currentChainId:t})}var h=r(26445),f=r(33639),p=r(87469),g=r(61163),m=r(74688),w=r(93714),b=r(47531),y=r(57331),v=r(99238);async function x(e,t){let{account:r=e.account,chain:i=e.chain,accessList:o,data:a,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:E,to:_,value:S,...k}=t;if(!r)throw new c.o({docsPath:"/docs/actions/wallet/sendTransaction"});let A=(0,l.T)(r);try{let r;if((0,b.F)(t),null!==i&&(r=await (0,w.s)(e,n.L,"getChainId")({}),d({currentChainId:r,chain:i})),"local"===A.type){let t=await (0,w.s)(e,y.Z,"prepareTransactionRequest")({account:A,accessList:o,chain:i,data:a,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:E,to:_,value:S,...k});r||(r=await (0,w.s)(e,n.L,"getChainId")({}));let l=i?.serializers?.transaction,c=await A.signTransaction({...t,chainId:r},{serializer:l});return await (0,w.s)(e,v.p,"sendRawTransaction")({serializedTransaction:c})}let l=e.chain?.formatters?.transactionRequest?.format,c=(l||m.tG)({...(0,g.K)(k,{format:l}),accessList:o,data:a,from:A.address,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:E,to:_,value:S});return await e.request({method:"eth_sendTransaction",params:[c]})}catch(e){throw function(e,{docsPath:t,...r}){let i=(()=>{let t=(0,p.k)(e,r);return t instanceof h.cj?e:t})();return new f.mk(i,{docsPath:t,...r})}(e,{...t,account:A,chain:t.chain||void 0})}}var C=r(45775);async function E(e){return e.account?.type==="local"?[e.account.address]:(await e.request({method:"eth_accounts"})).map(e=>(0,C.x)(e))}async function _(e){return await e.request({method:"wallet_getPermissions"})}async function S(e){return(await e.request({method:"eth_requestAccounts"})).map(e=>(0,C.K)(e))}async function k(e,t){return e.request({method:"wallet_requestPermissions",params:[t]})}async function A(e,{account:t=e.account,message:r}){if(!t)throw new c.o({docsPath:"/docs/actions/wallet/signMessage"});let i=(0,l.T)(t);if("local"===i.type)return i.signMessage({message:r});let n="string"==typeof r?(0,o.$G)(r):r.raw instanceof Uint8Array?(0,o.NC)(r.raw):r.raw;return e.request({method:"personal_sign",params:[n,i.address]})}async function O(e,t){let{account:r=e.account,chain:i=e.chain,...a}=t;if(!r)throw new c.o({docsPath:"/docs/actions/wallet/signTransaction"});let s=(0,l.T)(r);(0,b.F)({account:s,...t});let u=await (0,w.s)(e,n.L,"getChainId")({});null!==i&&d({currentChainId:u,chain:i});let h=i?.formatters||e.chain?.formatters,f=h?.transactionRequest?.format||m.tG;return"local"===s.type?s.signTransaction({...a,chainId:u},{serializer:e.chain?.serializers?.transaction}):await e.request({method:"eth_signTransaction",params:[{...f(a),chainId:(0,o.eC)(u),from:s.address}]})}var $=r(15102),I=r(96070),D=r(71352);async function P(e,{account:t=e.account,domain:r,message:i,primaryType:n,types:o}){if(!t)throw new c.o({docsPath:"/docs/actions/wallet/signTypedData"});let a=(0,l.T)(t),s={EIP712Domain:(0,D.cj)({domain:r}),...o};if((0,D.iC)({domain:r,message:i,primaryType:n,types:s}),"local"===a.type)return a.signTypedData({domain:r,primaryType:n,types:s,message:i});let u=(0,I.P)({domain:r??{},primaryType:n,types:s,message:i},(e,t)=>(0,$.v)(t)?t.toLowerCase():t);return e.request({method:"eth_signTypedData_v4",params:[a.address,u]})}async function T(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,o.eC)(t)}]})}async function R(e,t){return await e.request({method:"wallet_watchAsset",params:t})}var N=r(77799);async function M(e,{abi:t,address:r,args:i,dataSuffix:n,functionName:o,...a}){let s=(0,N.R)({abi:t,args:i,functionName:o});return await (0,w.s)(e,x,"sendTransaction")({data:`${s}${n?n.replace("0x",""):""}`,to:r,...a})}function j(e){return{addChain:t=>a(e,t),deployContract:t=>(function(e,{abi:t,args:r,bytecode:i,...n}){let o=(0,s.w)({abi:t,args:r,bytecode:i});return x(e,{...n,data:o})})(e,t),getAddresses:()=>E(e),getChainId:()=>(0,n.L)(e),getPermissions:()=>_(e),prepareTransactionRequest:t=>(0,y.Z)(e,t),requestAddresses:()=>S(e),requestPermissions:t=>k(e,t),sendRawTransaction:t=>(0,v.p)(e,t),sendTransaction:t=>x(e,t),signMessage:t=>A(e,t),signTransaction:t=>O(e,t),signTypedData:t=>P(e,t),switchChain:t=>T(e,t),watchAsset:t=>R(e,t),writeContract:t=>M(e,t)}}function U(e){let{key:t="wallet",name:r="Wallet Client",transport:n}=e;return(0,i.e)({...e,key:t,name:r,transport:e=>n({...e,retryCount:0}),type:"walletClient"}).extend(j)}},31031:function(e,t,r){"use strict";r.d(t,{q:function(){return n}});var i=r(37029);function n({key:e,name:t,request:r,retryCount:n=3,retryDelay:o=150,timeout:a,type:s},l){return{config:{key:e,name:t,request:r,retryCount:n,retryDelay:o,timeout:a,type:s},request:(0,i.n)(r,{retryCount:n,retryDelay:o}),value:l}}},3980:function(e,t,r){"use strict";r.d(t,{P:function(){return n}});var i=r(31031);function n(e,t={}){let{key:r="custom",name:n="Custom Provider",retryDelay:o}=t;return({retryCount:a})=>(0,i.q)({key:r,name:n,request:e.request.bind(e),retryCount:t.retryCount??a,retryDelay:o,type:"custom"})}},16693:function(e,t,r){"use strict";r.d(t,{$o:function(){return c},F8:function(){return i},X$:function(){return l},du:function(){return a},k3:function(){return o},nZ:function(){return s}});let i=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],n=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],o=[...n,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],a=[...n,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],s=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],l=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],c=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},21746:function(e,t,r){"use strict";r.d(t,{$:function(){return i},Up:function(){return n},hZ:function(){return o}});let i={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},n={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},o={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},84192:function(e,t,r){"use strict";r.d(t,{Bd:function(){return o},Zn:function(){return n},ez:function(){return i}});let i={gwei:9,wei:18},n={ether:-9,wei:9},o={ether:-18,gwei:-9}},57412:function(e,t,r){"use strict";r.d(t,{CI:function(){return _},FM:function(){return p},Gy:function(){return C},KY:function(){return v},M4:function(){return d},MX:function(){return b},S4:function(){return y},SM:function(){return x},cO:function(){return s},dh:function(){return E},fM:function(){return a},fs:function(){return h},gr:function(){return u},hn:function(){return S},lC:function(){return g},mv:function(){return m},wM:function(){return k},wb:function(){return c},xB:function(){return l},xL:function(){return w},yP:function(){return f}});var i=r(80522),n=r(39135),o=r(62027);class a extends o.G{constructor({docsPath:e}){super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class s extends o.G{constructor({docsPath:e}){super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class l extends o.G{constructor({data:e,params:t,size:r}){super(`Data size of ${r} bytes is too small for given parameters.`,{metaMessages:[`Params: (${(0,i.h)(t,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=r}}class c extends o.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class u extends o.G{constructor({expectedLength:e,givenLength:t,type:r}){super(`ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class d extends o.G{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,n.d)(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class h extends o.G{constructor({expectedLength:e,givenLength:t}){super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class f extends o.G{constructor(e,{docsPath:t}){super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class p extends o.G{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class g extends o.G{constructor(e,{docsPath:t}){super(`Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class m extends o.G{constructor(e,{docsPath:t}={}){super(`Event ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class w extends o.G{constructor(e,{docsPath:t}={}){super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class b extends o.G{constructor(e,{docsPath:t}){super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class y extends o.G{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${(0,i.t)(e.abiItem)}\`, and`,`\`${t.type}\` in \`${(0,i.t)(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class v extends o.G{constructor({expectedSize:e,givenSize:t}){super(`Expected bytes${e}, got bytes${t}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class x extends o.G{constructor({abiItem:e,data:t,params:r,size:n}){super(`Data size of ${n} bytes is too small for non-indexed event parameters.`,{metaMessages:[`Params: (${(0,i.h)(r,{includeName:!0})})`,`Data:   ${t} (${n} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=t,this.params=r,this.size=n}}class C extends o.G{constructor({abiItem:e,param:t}){super(`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,i.t)(e,{includeName:!0})}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class E extends o.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class _ extends o.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class S extends o.G{constructor(e){super(`Value "${e}" is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class k extends o.G{constructor(e){super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},8998:function(e,t,r){"use strict";r.d(t,{o:function(){return n}});var i=r(62027);class n extends i.G{constructor({docsPath:e}={}){super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},26087:function(e,t,r){"use strict";r.d(t,{b:function(){return n}});var i=r(62027);class n extends i.G{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},62027:function(e,t,r){"use strict";r.d(t,{G:function(){return n}});var i=r(35280);class n extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,i.bo)()});let r=t.cause instanceof n?t.cause.details:t.cause?.message?t.cause.message:t.details,o=t.cause instanceof n&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=o,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return function e(t,r){return r?.(t)?t:t&&"object"==typeof t&&"cause"in t?e(t.cause,r):r?null:t}(this,e)}}},79814:function(e,t,r){"use strict";r.d(t,{f:function(){return n}});var i=r(62027);class n extends i.G{constructor({blockHash:e,blockNumber:t}){let r="Block";e&&(r=`Block at hash "${e}"`),t&&(r=`Block at number "${t}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}},80377:function(e,t,r){"use strict";r.d(t,{Bk:function(){return a},Yl:function(){return o},mm:function(){return n},pZ:function(){return s}});var i=r(62027);class n extends i.G{constructor({blockNumber:e,chain:t,contract:r}){super(`Chain "${t.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class o extends i.G{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class a extends i.G{constructor(){super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class s extends i.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}},97405:function(e,t,r){"use strict";r.d(t,{cg:function(){return m},uq:function(){return w},Lu:function(){return b},Dk:function(){return y},VQ:function(){return v}});var i=r(14503),n=r(21746),o=r(86899),a=r(80522),s=r(96070);function l({abiItem:e,args:t,includeFunctionName:r=!0,includeName:i=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${r?e.name:""}(${e.inputs.map((e,r)=>`${i&&e.name?`${e.name}: `:""}${"object"==typeof t[r]?(0,s.P)(t[r]):t[r]}`).join(", ")})`}var c=r(40840),u=r(39625),d=r(67795),h=r(57412),f=r(62027),p=r(33639),g=r(35280);class m extends f.G{constructor(e,{account:t,docsPath:r,chain:n,data:o,gas:a,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:h,to:f,value:g}){super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",(0,p.xr)({from:(t?(0,i.T)(t):void 0)?.address,to:f,value:void 0!==g&&`${(0,u.d)(g)} ${n?.nativeCurrency?.symbol||"ETH"}`,data:o,gas:a,gasPrice:void 0!==s&&`${(0,d.o)(s)} gwei`,maxFeePerGas:void 0!==l&&`${(0,d.o)(l)} gwei`,maxPriorityFeePerGas:void 0!==c&&`${(0,d.o)(c)} gwei`,nonce:h})].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class w extends f.G{constructor(e,{abi:t,args:r,contractAddress:i,docsPath:n,functionName:o,sender:s}){let u=(0,c.mE)({abi:t,args:r,name:o}),d=u?l({abiItem:u,args:r,includeFunctionName:!1,includeName:!1}):void 0;super(e.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",(0,p.xr)({address:i&&(0,g.CR)(i),function:u?(0,a.t)(u,{includeName:!0}):void 0,args:d&&"()"!==d&&`${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${d}`,sender:s})].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=r,this.cause=e,this.contractAddress=i,this.functionName=o,this.sender=s}}class b extends f.G{constructor({abi:e,data:t,functionName:r,message:i}){let s,c,u,d,f;if(t&&"0x"!==t)try{let{abiItem:r,errorName:i,args:s}=f=(0,o.p)({abi:e,data:t});if("Error"===i)u=s[0];else if("Panic"===i){let[e]=s;u=n.$[e]}else{let e=r?(0,a.t)(r,{includeName:!0}):void 0,t=r&&s?l({abiItem:r,args:s,includeFunctionName:!1,includeName:!1}):void 0;c=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(i?.length??0).keys()].map(()=>" ").join("")}${t}`:""]}}catch(e){s=e}else i&&(u=i);s instanceof h.yP&&(d=s.signature,c=[`Unable to decode signature "${d}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`]),super(u&&"execution reverted"!==u||d?[`The contract function "${r}" reverted with the following ${d?"signature":"reason"}:`,u||d].join("\n"):`The contract function "${r}" reverted.`,{cause:s,metaMessages:c}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=f,this.reason=u,this.signature=d}}class y extends f.G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class v extends f.G{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},69760:function(e,t,r){"use strict";r.d(t,{$:function(){return o},m:function(){return n}});var i=r(62027);class n extends i.G{constructor({offset:e,position:t,size:r}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class o extends i.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}},87788:function(e,t,r){"use strict";r.d(t,{Cd:function(){return o},J5:function(){return n},M6:function(){return a}});var i=r(62027);class n extends i.G{constructor({max:e,min:t,signed:r,size:i,value:n}){super(`Number "${n}" is not in safe ${i?`${8*i}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class o extends i.G{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class a extends i.G{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},15371:function(e,t,r){"use strict";r.d(t,{Fz:function(){return o},e5:function(){return a},ld:function(){return s}});var i=r(67795),n=r(62027);class o extends n.G{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class a extends n.G{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class s extends n.G{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,i.o)(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}},26445:function(e,t,r){"use strict";r.d(t,{C_:function(){return d},G$:function(){return s},Hh:function(){return a},M_:function(){return o},WF:function(){return h},ZI:function(){return l},cj:function(){return m},cs:function(){return g},dR:function(){return f},pZ:function(){return p},se:function(){return u},vU:function(){return c}});var i=r(67795),n=r(62027);class o extends n.G{constructor({cause:e,message:t}={}){let r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(o,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class a extends n.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,i.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class s extends n.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,i.o)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class l extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class c extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends n.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class d extends n.G{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class h extends n.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class f extends n.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class p extends n.G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class g extends n.G{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:r}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,i.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${(0,i.o)(r)} gwei`:""}).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(g,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class m extends n.G{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},78863:function(e,t,r){"use strict";r.d(t,{Gg:function(){return a},W5:function(){return c},bs:function(){return l},c9:function(){return s}});var i=r(96070),n=r(62027),o=r(35280);class a extends n.G{constructor({body:e,details:t,headers:r,status:n,url:a}){super("HTTP request failed.",{details:t,metaMessages:[n&&`Status: ${n}`,`URL: ${(0,o.Gr)(a)}`,e&&`Request body: ${(0,i.P)(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=n,this.url=a}}class s extends n.G{constructor({body:e,details:t,url:r}){super("WebSocket request failed.",{details:t,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class l extends n.G{constructor({body:e,error:t,url:r}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,o.Gr)(r)}`,`Request body: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class c extends n.G{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,o.Gr)(t)}`,`Request body: ${(0,i.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},39028:function(e,t,r){"use strict";r.d(t,{B:function(){return l},GD:function(){return b},I0:function(){return E},KB:function(){return g},LX:function(){return c},Og:function(){return f},PE:function(){return v},Pv:function(){return w},Ts:function(){return x},XS:function(){return d},ab:function(){return y},gS:function(){return m},ir:function(){return S},nY:function(){return u},pT:function(){return p},s7:function(){return s},u5:function(){return C},x3:function(){return _},yR:function(){return h}});var i=r(62027),n=r(78863);class o extends i.G{constructor(e,{code:t,docsPath:r,metaMessages:i,shortMessage:o}){super(o,{cause:e,docsPath:r,metaMessages:i||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof n.bs?e.code:t??-1}}class a extends o{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class s extends o{constructor(e){super(e,{code:s.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class l extends o{constructor(e){super(e,{code:l.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class c extends o{constructor(e){super(e,{code:c.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(c,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class u extends o{constructor(e){super(e,{code:u.code,shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class d extends o{constructor(e){super(e,{code:d.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class h extends o{constructor(e){super(e,{code:h.code,shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class f extends o{constructor(e){super(e,{code:f.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class p extends o{constructor(e){super(e,{code:p.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class g extends o{constructor(e){super(e,{code:g.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class m extends o{constructor(e){super(e,{code:m.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class w extends o{constructor(e){super(e,{code:w.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class b extends o{constructor(e){super(e,{code:b.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class y extends a{constructor(e){super(e,{code:y.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class v extends a{constructor(e){super(e,{code:v.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class x extends a{constructor(e){super(e,{code:x.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class C extends a{constructor(e){super(e,{code:C.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class E extends a{constructor(e){super(e,{code:E.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class _ extends a{constructor(e){super(e,{code:_.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(_,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class S extends o{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}},33639:function(e,t,r){"use strict";r.d(t,{Bh:function(){return u},Yb:function(){return d},j3:function(){return l},mc:function(){return h},mk:function(){return c},xY:function(){return s},xr:function(){return a}});var i=r(39625),n=r(67795),o=r(62027);function a(e){let t=Object.entries(e).map(([e,t])=>void 0===t||!1===t?null:[e,t]).filter(Boolean),r=t.reduce((e,[t])=>Math.max(e,t.length),0);return t.map(([e,t])=>`  ${`${e}:`.padEnd(r+1)}  ${t}`).join("\n")}class s extends o.G{constructor(){super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class l extends o.G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",a(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class c extends o.G{constructor(e,{account:t,docsPath:r,chain:o,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:f,value:p}){super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",a({chain:o&&`${o?.name} (id: ${o?.id})`,from:t?.address,to:f,value:void 0!==p&&`${(0,i.d)(p)} ${o?.nativeCurrency?.symbol||"ETH"}`,data:s,gas:l,gasPrice:void 0!==c&&`${(0,n.o)(c)} gwei`,maxFeePerGas:void 0!==u&&`${(0,n.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==d&&`${(0,n.o)(d)} gwei`,nonce:h})].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class u extends o.G{constructor({blockHash:e,blockNumber:t,blockTag:r,hash:i,index:n}){let o="Transaction";r&&void 0!==n&&(o=`Transaction at block time "${r}" at index "${n}"`),e&&void 0!==n&&(o=`Transaction at block hash "${e}" at index "${n}"`),t&&void 0!==n&&(o=`Transaction at block number "${t}" at index "${n}"`),i&&(o=`Transaction with hash "${i}"`),super(`${o} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class d extends o.G{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class h extends o.G{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}},35280:function(e,t,r){"use strict";r.d(t,{CR:function(){return i},Gr:function(){return n},bo:function(){return o}});let i=e=>e,n=e=>e,o=()=>"viem@1.21.3"},34450:function(e,t,r){"use strict";r.d(t,{r:function(){return u}});var i=r(57412),n=r(45775),o=r(39135),a=r(3972),s=r(61836),l=r(95946),c=r(45444);function u(e,t){if("0x"===t&&e.length>0)throw new i.wb;if((0,o.d)(t)&&32>(0,o.d)(t))throw new i.xB({data:t,params:e,size:(0,o.d)(t)});return function({data:e,params:t}){let r=[],u=0;for(let h=0;h<t.length;h++){if(u>=(0,o.d)(e))throw new i.xB({data:e,params:t,size:(0,o.d)(e)});let{consumed:f,value:p}=function e({data:t,param:r,position:o}){let u=(0,c.S)(r.type);if(u){let[i,n]=u;return function(t,{param:r,length:i,position:n}){if(!i){let i=(0,l.ly)((0,a.tP)(t,n,n+32,{strict:!0})),o=(0,l.ly)((0,a.tP)(t,i,i+32,{strict:!0})),s=0,c=[];for(let n=0;n<o;++n){let n=e({data:(0,a.tP)(t,i+32),param:r,position:s});s+=n.consumed,c.push(n.value)}return{value:c,consumed:32}}if(d(r)){let o=(0,c.S)(r.type),s=!o?.[0],u=0,d=[];for(let o=0;o<i;++o){let i=(0,l.ly)((0,a.tP)(t,n,n+32,{strict:!0})),c=e({data:(0,a.tP)(t,i),param:r,position:s?u:32*o});u+=c.consumed,d.push(c.value)}return{value:d,consumed:32}}let o=0,s=[];for(let a=0;a<i;++a){let i=e({data:t,param:r,position:n+o});o+=i.consumed,s.push(i.value)}return{value:s,consumed:o}}(t,{length:i,param:{...r,type:n},position:o})}if("tuple"===r.type)return function(t,{param:r,position:i}){let n=0===r.components.length||r.components.some(({name:e})=>!e),o=n?[]:{},s=0;if(d(r)){let c=(0,l.ly)((0,a.tP)(t,i,i+32,{strict:!0}));for(let i=0;i<r.components.length;++i){let l=r.components[i],u=e({data:(0,a.tP)(t,c),param:l,position:s});s+=u.consumed,o[n?i:l?.name]=u.value}return{consumed:32,value:o}}for(let a=0;a<r.components.length;++a){let l=r.components[a],c=e({data:t,param:l,position:i+s});s+=c.consumed,o[n?a:l?.name]=c.value}return{consumed:s,value:o}}(t,{param:r,position:o});if("string"===r.type)return function(e,{position:t}){let r=(0,l.ly)((0,a.tP)(e,t,t+32,{strict:!0})),i=(0,l.ly)((0,a.tP)(e,r,r+32,{strict:!0}));return 0===i?{consumed:32,value:""}:{consumed:32,value:(0,l.rR)((0,s.f)((0,a.tP)(e,r+32,r+32+i,{strict:!0})))}}(t,{position:o});if(r.type.startsWith("bytes"))return function(e,{param:t,position:r}){let[i,n]=t.type.split("bytes");if(!n){let t=(0,l.ly)((0,a.tP)(e,r,r+32,{strict:!0})),i=(0,l.ly)((0,a.tP)(e,t,t+32,{strict:!0}));return 0===i?{consumed:32,value:"0x"}:{consumed:32,value:(0,a.tP)(e,t+32,t+32+i,{strict:!0})}}return{consumed:32,value:(0,a.tP)(e,r,r+parseInt(n),{strict:!0})}}(t,{param:r,position:o});let h=(0,a.tP)(t,o,o+32,{strict:!0});if(r.type.startsWith("uint")||r.type.startsWith("int"))return function(e,{param:t}){let r=t.type.startsWith("int");return{consumed:32,value:parseInt(t.type.split("int")[1]||"256")>48?(0,l.y_)(e,{signed:r}):(0,l.ly)(e,{signed:r})}}(h,{param:r});if("address"===r.type)return{consumed:32,value:(0,n.x)((0,a.tP)(h,-20))};if("bool"===r.type)return{consumed:32,value:(0,l.XA)(h)};throw new i.CI(r.type,{docsPath:"/docs/contract/decodeAbiParameters"})}({data:e,param:t[h],position:u});r.push(p),u+=f}return r}({data:t,params:e})}function d(e){let{type:t}=e;if("string"===t||"bytes"===t||t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(d);let r=(0,c.S)(e.type);return!!(r&&d({...e,type:r[1]}))}},86899:function(e,t,r){"use strict";r.d(t,{p:function(){return c}});var i=r(21746),n=r(57412),o=r(3972),a=r(40552),s=r(34450),l=r(80522);function c({abi:e,data:t}){let r=(0,o.tP)(t,0,4);if("0x"===r)throw new n.wb;let c=[...e||[],i.Up,i.hZ].find(e=>"error"===e.type&&r===(0,a.o)((0,l.t)(e)));if(!c)throw new n.yP(r,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:c,args:"inputs"in c&&c.inputs&&c.inputs.length>0?(0,s.r)(c.inputs,(0,o.tP)(t,4)):void 0,errorName:c.name}}},7210:function(e,t,r){"use strict";r.d(t,{k:function(){return s}});var i=r(57412),n=r(34450),o=r(40840);let a="/docs/contract/decodeFunctionResult";function s({abi:e,args:t,functionName:r,data:s}){let l=e[0];if(r&&!(l=(0,o.mE)({abi:e,args:t,name:r})))throw new i.xL(r,{docsPath:a});if("function"!==l.type)throw new i.xL(void 0,{docsPath:a});if(!l.outputs)throw new i.MX(l.name,{docsPath:a});let c=(0,n.r)(l.outputs,s);return c&&c.length>1?c:c&&1===c.length?c[0]:void 0}},45444:function(e,t,r){"use strict";r.d(t,{E:function(){return d},S:function(){return f}});var i=r(57412),n=r(26087),o=r(49321),a=r(57040),s=r(61769),l=r(39135),c=r(3972),u=r(92106);function d(e,t){if(e.length!==t.length)throw new i.fs({expectedLength:e.length,givenLength:t.length});let r=h(function({params:e,values:t}){let r=[];for(let d=0;d<e.length;d++)r.push(function e({param:t,value:r}){let d=f(t.type);if(d){let[n,o]=d;return function(t,{length:r,param:n}){let o=null===r;if(!Array.isArray(t))throw new i.hn(t);if(!o&&t.length!==r)throw new i.gr({expectedLength:r,givenLength:t.length,type:`${n.type}[${r}]`});let s=!1,l=[];for(let r=0;r<t.length;r++){let i=e({param:n,value:t[r]});i.dynamic&&(s=!0),l.push(i)}if(o||s){let e=h(l);if(o){let t=(0,u.eC)(l.length,{size:32});return{dynamic:!0,encoded:l.length>0?(0,a.zo)([t,e]):t}}if(s)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,a.zo)(l.map(({encoded:e})=>e))}}(r,{length:n,param:{...t,type:o}})}if("tuple"===t.type)return function(t,{param:r}){let i=!1,n=[];for(let o=0;o<r.components.length;o++){let a=r.components[o],s=Array.isArray(t)?o:a.name,l=e({param:a,value:t[s]});n.push(l),l.dynamic&&(i=!0)}return{dynamic:i,encoded:i?h(n):(0,a.zo)(n.map(({encoded:e})=>e))}}(r,{param:t});if("address"===t.type)return function(e){if(!(0,o.U)(e))throw new n.b({address:e});return{dynamic:!1,encoded:(0,s.gc)(e.toLowerCase())}}(r);if("bool"===t.type)return{dynamic:!1,encoded:(0,s.gc)((0,u.C4)(r))};if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(e,{signed:t}){return{dynamic:!1,encoded:(0,u.eC)(e,{size:32,signed:t})}}(r,{signed:t.type.startsWith("int")});if(t.type.startsWith("bytes"))return function(e,{param:t}){let[,r]=t.type.split("bytes"),n=(0,l.d)(e);if(!r){let t=e;return n%32!=0&&(t=(0,s.gc)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,a.zo)([(0,s.gc)((0,u.eC)(n,{size:32})),t])}}if(n!==parseInt(r))throw new i.M4({expectedSize:parseInt(r),value:e});return{dynamic:!1,encoded:(0,s.gc)(e,{dir:"right"})}}(r,{param:t});if("string"===t.type)return function(e){let t=(0,u.$G)(e),r=Math.ceil((0,l.d)(t)/32),i=[];for(let e=0;e<r;e++)i.push((0,s.gc)((0,c.tP)(t,32*e,(e+1)*32),{dir:"right"}));return{dynamic:!0,encoded:(0,a.zo)([(0,s.gc)((0,u.eC)((0,l.d)(t),{size:32})),...i])}}(r);throw new i.dh(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}({param:e[d],value:t[d]}));return r}({params:e,values:t}));return 0===r.length?"0x":r}function h(e){let t=0;for(let r=0;r<e.length;r++){let{dynamic:i,encoded:n}=e[r];i?t+=32:t+=(0,l.d)(n)}let r=[],i=[],n=0;for(let o=0;o<e.length;o++){let{dynamic:a,encoded:s}=e[o];a?(r.push((0,u.eC)(t+n,{size:32})),i.push(s),n+=(0,l.d)(s)):r.push(s)}return(0,a.zo)([...r,...i])}function f(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},30286:function(e,t,r){"use strict";r.d(t,{w:function(){return s}});var i=r(57412),n=r(57040),o=r(45444);let a="/docs/contract/encodeDeployData";function s({abi:e,args:t,bytecode:r}){if(!t||0===t.length)return r;let s=e.find(e=>"type"in e&&"constructor"===e.type);if(!s)throw new i.fM({docsPath:a});if(!("inputs"in s)||!s.inputs||0===s.inputs.length)throw new i.cO({docsPath:a});let l=(0,o.E)(s.inputs,t);return(0,n.SM)([r,l])}},77799:function(e,t,r){"use strict";r.d(t,{R:function(){return c}});var i=r(57412),n=r(57040),o=r(40552),a=r(45444),s=r(80522),l=r(40840);function c({abi:e,args:t,functionName:r}){let c=e[0];if(r&&!(c=(0,l.mE)({abi:e,args:t,name:r})))throw new i.xL(r,{docsPath:"/docs/contract/encodeFunctionData"});if("function"!==c.type)throw new i.xL(void 0,{docsPath:"/docs/contract/encodeFunctionData"});let u=(0,s.t)(c),d=(0,o.o)(u),h="inputs"in c&&c.inputs?(0,a.E)(c.inputs,t??[]):void 0;return(0,n.SM)([d,h??"0x"])}},80522:function(e,t,r){"use strict";r.d(t,{h:function(){return o},t:function(){return n}});var i=r(57412);function n(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new i.wM(e.type);return`${e.name}(${o(e.inputs,{includeName:t})})`}function o(e,{includeName:t=!1}={}){return e?e.map(e=>(function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${o(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")})(e,{includeName:t})).join(t?", ":","):""}},40840:function(e,t,r){"use strict";r.d(t,{mE:function(){return l}});var i=r(57412),n=r(15102),o=r(74059),a=r(40552),s=r(49321);function l({abi:e,args:t=[],name:r}){let l;let c=(0,n.v)(r,{strict:!1}),u=e.filter(e=>c?"function"===e.type?(0,a.o)(e)===r:"event"===e.type&&(0,o.e)(e)===r:"name"in e&&e.name===r);if(0!==u.length){if(1===u.length)return u[0];for(let e of u)if("inputs"in e){if(!t||0===t.length){if(!e.inputs||0===e.inputs.length)return e;continue}if(e.inputs&&0!==e.inputs.length&&e.inputs.length===t.length&&t.every((t,r)=>{let i="inputs"in e&&e.inputs[r];return!!i&&function e(t,r){let i=typeof t,n=r.type;switch(n){case"address":return(0,s.U)(t);case"bool":return"boolean"===i;case"function":case"string":return"string"===i;default:if("tuple"===n&&"components"in r)return Object.values(r.components).every((r,i)=>e(Object.values(t)[i],r));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n))return"number"===i||"bigint"===i;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n))return"string"===i||t instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n))return Array.isArray(t)&&t.every(t=>e(t,{...r,type:n.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(t,i)})){if(l&&"inputs"in l&&l.inputs){let r=function e(t,r,i){for(let n in t){let o=t[n],a=r[n];if("tuple"===o.type&&"tuple"===a.type&&"components"in o&&"components"in a)return e(o.components,a.components,i[n]);let l=[o.type,a.type];if(l.includes("address")&&l.includes("bytes20")||(l.includes("address")&&l.includes("string")||l.includes("address")&&l.includes("bytes"))&&(0,s.U)(i[n]))return l}}(e.inputs,l.inputs,t);if(r)throw new i.S4({abiItem:e,type:r[0]},{abiItem:l,type:r[1]})}l=e}}return l||u[0]}}},45775:function(e,t,r){"use strict";r.d(t,{K:function(){return l},x:function(){return s}});var i=r(26087),n=r(11187),o=r(56254),a=r(49321);function s(e,t){let r=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),i=(0,o.w)((0,n.qX)(r),"bytes"),a=(t?r.substring(`${t}0x`.length):r).split("");for(let e=0;e<40;e+=2)i[e>>1]>>4>=8&&a[e]&&(a[e]=a[e].toUpperCase()),(15&i[e>>1])>=8&&a[e+1]&&(a[e+1]=a[e+1].toUpperCase());return`0x${a.join("")}`}function l(e,t){if(!(0,a.U)(e))throw new i.b({address:e});return s(e,t)}},49321:function(e,t,r){"use strict";r.d(t,{U:function(){return n}});let i=/^0x[a-fA-F0-9]{40}$/;function n(e){return i.test(e)}},37029:function(e,t,r){"use strict";r.d(t,{n:function(){return l},y:function(){return s}});var i=r(62027),n=r(78863),o=r(39028),a=r(7760);let s=e=>"code"in e?-1!==e.code&&-32004!==e.code&&-32005!==e.code&&-32042!==e.code&&-32603!==e.code:e instanceof n.Gg&&!!e.status&&403!==e.status&&408!==e.status&&413!==e.status&&429!==e.status&&500!==e.status&&502!==e.status&&503!==e.status&&504!==e.status;function l(e,{retryDelay:t=150,retryCount:r=3}={}){return async l=>(0,a.J)(async()=>{try{return await e(l)}catch(e){switch(e.code){case o.s7.code:throw new o.s7(e);case o.B.code:throw new o.B(e);case o.LX.code:throw new o.LX(e);case o.nY.code:throw new o.nY(e);case o.XS.code:throw new o.XS(e);case o.yR.code:throw new o.yR(e);case o.Og.code:throw new o.Og(e);case o.pT.code:throw new o.pT(e);case o.KB.code:throw new o.KB(e);case o.gS.code:throw new o.gS(e);case o.Pv.code:throw new o.Pv(e);case o.GD.code:throw new o.GD(e);case o.ab.code:throw new o.ab(e);case o.PE.code:throw new o.PE(e);case o.Ts.code:throw new o.Ts(e);case o.u5.code:throw new o.u5(e);case o.I0.code:throw new o.I0(e);case o.x3.code:throw new o.x3(e);case 5e3:throw new o.ab(e);default:if(e instanceof i.G)throw e;throw new o.ir(e)}}},{delay:({count:e,error:r})=>{if(r&&r instanceof n.Gg){let e=r?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*parseInt(e)}return~~(1<<e)*t},retryCount:r,shouldRetry:({error:e})=>!s(e)})}},86164:function(e,t,r){"use strict";function i(e,t={}){let{fees:r=e.fees,formatters:i=e.formatters,serializers:n=e.serializers}=t;return{...e,fees:r,formatters:i,serializers:n}}r.d(t,{a:function(){return i}})},47864:function(e,t,r){"use strict";r.d(t,{L:function(){return n}});var i=r(80377);function n({blockNumber:e,chain:t,contract:r}){let n=t?.contracts?.[r];if(!n)throw new i.mm({chain:t,contract:{name:r}});if(e&&n.blockCreated&&n.blockCreated>e)throw new i.mm({blockNumber:e,chain:t,contract:{name:r,blockCreated:n.blockCreated}});return n.address}},57040:function(e,t,r){"use strict";function i(e){return"string"==typeof e[0]?n(e):function(e){let t=0;for(let r of e)t+=r.length;let r=new Uint8Array(t),i=0;for(let t of e)r.set(t,i),i+=t.length;return r}(e)}function n(e){return`0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`}r.d(t,{SM:function(){return n},zo:function(){return i}})},15102:function(e,t,r){"use strict";function i(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}r.d(t,{v:function(){return i}})},61769:function(e,t,r){"use strict";r.d(t,{gc:function(){return o},vk:function(){return n}});var i=r(69760);function n(e,{dir:t,size:r=32}={}){return"string"==typeof e?o(e,{dir:t,size:r}):function(e,{dir:t,size:r=32}={}){if(null===r)return e;if(e.length>r)throw new i.$({size:e.length,targetSize:r,type:"bytes"});let n=new Uint8Array(r);for(let i=0;i<r;i++){let o="right"===t;n[o?i:r-i-1]=e[o?i:e.length-i-1]}return n}(e,{dir:t,size:r})}function o(e,{dir:t,size:r=32}={}){if(null===r)return e;let n=e.replace("0x","");if(n.length>2*r)throw new i.$({size:Math.ceil(n.length/2),targetSize:r,type:"hex"});return`0x${n["right"===t?"padEnd":"padStart"](2*r,"0")}`}},39135:function(e,t,r){"use strict";r.d(t,{d:function(){return n}});var i=r(15102);function n(e){return(0,i.v)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},3972:function(e,t,r){"use strict";r.d(t,{tP:function(){return a}});var i=r(69760),n=r(15102),o=r(39135);function a(e,t,r,{strict:i}={}){return(0,n.v)(e,{strict:!1})?function(e,t,r,{strict:i}={}){s(e,t);let n=`0x${e.replace("0x","").slice((t??0)*2,(r??e.length)*2)}`;return i&&l(n,t,r),n}(e,t,r,{strict:i}):function(e,t,r,{strict:i}={}){s(e,t);let n=e.slice(t,r);return i&&l(n,t,r),n}(e,t,r,{strict:i})}function s(e,t){if("number"==typeof t&&t>0&&t>(0,o.d)(e)-1)throw new i.m({offset:t,position:"start",size:(0,o.d)(e)})}function l(e,t,r){if("number"==typeof t&&"number"==typeof r&&(0,o.d)(e)!==r-t)throw new i.m({offset:r,position:"end",size:(0,o.d)(e)})}},61836:function(e,t,r){"use strict";function i(e,{dir:t="left"}={}){let r="string"==typeof e?e.replace("0x",""):e,i=0;for(let e=0;e<r.length-1&&"0"===r["left"===t?e:r.length-e-1].toString();e++)i++;return(r="left"===t?r.slice(i):r.slice(0,r.length-i),"string"==typeof e)?(1===r.length&&"right"===t&&(r=`${r}0`),`0x${r.length%2==1?`0${r}`:r}`):r}r.d(t,{f:function(){return i}})},95946:function(e,t,r){"use strict";r.d(t,{XA:function(){return c},Yf:function(){return s},ly:function(){return u},rR:function(){return d},y_:function(){return l}});var i=r(87788),n=r(39135),o=r(61836),a=r(11187);function s(e,{size:t}){if((0,n.d)(e)>t)throw new i.M6({givenSize:(0,n.d)(e),maxSize:t})}function l(e,t={}){let{signed:r}=t;t.size&&s(e,{size:t.size});let i=BigInt(e);if(!r)return i;let n=(e.length-2)/2;return i<=(1n<<8n*BigInt(n)-1n)-1n?i:i-BigInt(`0x${"f".padStart(2*n,"f")}`)-1n}function c(e,t={}){let r=e;if(t.size&&(s(r,{size:t.size}),r=(0,o.f)(r)),"0x00"===(0,o.f)(r))return!1;if("0x01"===(0,o.f)(r))return!0;throw new i.Cd(r)}function u(e,t={}){return Number(l(e,t))}function d(e,t={}){let r=(0,a.nr)(e);return t.size&&(s(r,{size:t.size}),r=(0,o.f)(r,{dir:"right"})),new TextDecoder().decode(r)}},11187:function(e,t,r){"use strict";r.d(t,{O0:function(){return c},nr:function(){return h},qX:function(){return f}});var i=r(62027),n=r(15102),o=r(61769),a=r(95946),s=r(92106);let l=new TextEncoder;function c(e,t={}){return"number"==typeof e||"bigint"==typeof e?h((0,s.eC)(e,t)):"boolean"==typeof e?function(e,t={}){let r=new Uint8Array(1);return(r[0]=Number(e),"number"==typeof t.size)?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{size:t.size})):r}(e,t):(0,n.v)(e)?h(e,t):f(e,t)}let u={zero:48,nine:57,A:65,F:70,a:97,f:102};function d(e){return e>=u.zero&&e<=u.nine?e-u.zero:e>=u.A&&e<=u.F?e-(u.A-10):e>=u.a&&e<=u.f?e-(u.a-10):void 0}function h(e,t={}){let r=e;t.size&&((0,a.Yf)(r,{size:t.size}),r=(0,o.vk)(r,{dir:"right",size:t.size}));let n=r.slice(2);n.length%2&&(n=`0${n}`);let s=n.length/2,l=new Uint8Array(s);for(let e=0,t=0;e<s;e++){let r=d(n.charCodeAt(t++)),o=d(n.charCodeAt(t++));if(void 0===r||void 0===o)throw new i.G(`Invalid byte sequence ("${n[t-2]}${n[t-1]}" in "${n}").`);l[e]=16*r+o}return l}function f(e,t={}){let r=l.encode(e);return"number"==typeof t.size?((0,a.Yf)(r,{size:t.size}),(0,o.vk)(r,{dir:"right",size:t.size})):r}},92106:function(e,t,r){"use strict";r.d(t,{$G:function(){return h},C4:function(){return l},NC:function(){return s},ci:function(){return c},eC:function(){return u}});var i=r(87788),n=r(61769),o=r(95946);let a=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function s(e,t={}){return"number"==typeof e||"bigint"==typeof e?u(e,t):"string"==typeof e?h(e,t):"boolean"==typeof e?l(e,t):c(e,t)}function l(e,t={}){let r=`0x${Number(e)}`;return"number"==typeof t.size?((0,o.Yf)(r,{size:t.size}),(0,n.vk)(r,{size:t.size})):r}function c(e,t={}){let r="";for(let t=0;t<e.length;t++)r+=a[e[t]];let i=`0x${r}`;return"number"==typeof t.size?((0,o.Yf)(i,{size:t.size}),(0,n.vk)(i,{dir:"right",size:t.size})):i}function u(e,t={}){let r;let{signed:o,size:a}=t,s=BigInt(e);a?r=o?(1n<<8n*BigInt(a)-1n)-1n:2n**(8n*BigInt(a))-1n:"number"==typeof e&&(r=BigInt(Number.MAX_SAFE_INTEGER));let l="bigint"==typeof r&&o?-r-1n:0;if(r&&s>r||s<l){let t="bigint"==typeof e?"n":"";throw new i.J5({max:r?`${r}${t}`:void 0,min:`${l}${t}`,signed:o,size:a,value:`${e}${t}`})}let c=`0x${(o&&s<0?(1n<<BigInt(8*a))+BigInt(s):s).toString(16)}`;return a?(0,n.vk)(c,{size:a}):c}let d=new TextEncoder;function h(e,t={}){return c(d.encode(e),t)}},87469:function(e,t,r){"use strict";r.d(t,{k:function(){return o}});var i=r(62027),n=r(26445);function o(e,t){let r=(e.details||"").toLowerCase(),o=e.walk(e=>e.code===n.M_.code);return o instanceof i.G?new n.M_({cause:e,message:o.details}):n.M_.nodeMessage.test(r)?new n.M_({cause:e,message:e.details}):n.Hh.nodeMessage.test(r)?new n.Hh({cause:e,maxFeePerGas:t?.maxFeePerGas}):n.G$.nodeMessage.test(r)?new n.G$({cause:e,maxFeePerGas:t?.maxFeePerGas}):n.ZI.nodeMessage.test(r)?new n.ZI({cause:e,nonce:t?.nonce}):n.vU.nodeMessage.test(r)?new n.vU({cause:e,nonce:t?.nonce}):n.se.nodeMessage.test(r)?new n.se({cause:e,nonce:t?.nonce}):n.C_.nodeMessage.test(r)?new n.C_({cause:e}):n.WF.nodeMessage.test(r)?new n.WF({cause:e,gas:t?.gas}):n.dR.nodeMessage.test(r)?new n.dR({cause:e,gas:t?.gas}):n.pZ.nodeMessage.test(r)?new n.pZ({cause:e}):n.cs.nodeMessage.test(r)?new n.cs({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas}):new n.cj({cause:e})}},43310:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var i=r(6073);function n(e){let t=e.transactions?.map(e=>"string"==typeof e?e:i.Tr(e));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,difficulty:e.difficulty?BigInt(e.difficulty):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}},61163:function(e,t,r){"use strict";function i(e,{format:t}){if(!t)return{};let r={};return!function t(i){for(let n of Object.keys(i))n in e&&(r[n]=e[n]),i[n]&&"object"==typeof i[n]&&!Array.isArray(i[n])&&t(i[n])}(t(e||{})),r}r.d(t,{K:function(){return i}})},6073:function(e,t,r){"use strict";r.d(t,{Tr:function(){return o},c8:function(){return n}});var i=r(95946);let n={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function o(e){let t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,i.ly)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,i.ly)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?n[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if("bigint"==typeof t.v){if(0n===t.v||27n===t.v)return 0;if(1n===t.v||28n===t.v)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),"eip2930"===t.type&&(delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t}},74688:function(e,t,r){"use strict";r.d(t,{tG:function(){return o}});var i=r(92106);let n={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function o(e){return{...e,gas:void 0!==e.gas?(0,i.eC)(e.gas):void 0,gasPrice:void 0!==e.gasPrice?(0,i.eC)(e.gasPrice):void 0,maxFeePerGas:void 0!==e.maxFeePerGas?(0,i.eC)(e.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==e.maxPriorityFeePerGas?(0,i.eC)(e.maxPriorityFeePerGas):void 0,nonce:void 0!==e.nonce?(0,i.eC)(e.nonce):void 0,type:void 0!==e.type?n[e.type]:void 0,value:void 0!==e.value?(0,i.eC)(e.value):void 0}}},93714:function(e,t,r){"use strict";function i(e,t,r){return i=>e[t.name||r]?.(i)??t(e,i)}r.d(t,{s:function(){return i}})},74059:function(e,t,r){"use strict";r.d(t,{e:function(){return l}});var i=r(11187),n=r(66620);let o=e=>(0,n.r)(e);var a=r(56254);let s=e=>(0,a.w)((0,i.O0)(e)),l=e=>s(o(e))},40552:function(e,t,r){"use strict";r.d(t,{o:function(){return l}});var i=r(3972),n=r(11187),o=r(66620),a=r(56254);let s=e=>(0,a.w)((0,n.O0)(e)),l=e=>(0,i.tP)(s((0,o.r)(e)),0,4)},66620:function(e,t,r){"use strict";r.d(t,{r:function(){return a}});let i=/^tuple(?<array>(\[(\d*)\])*)$/;function n(e){let t="",r=e.length;for(let n=0;n<r;n++)t+=function e(t){let r=t.type;if(i.test(t.type)&&"components"in t){r="(";let n=t.components.length;for(let i=0;i<n;i++)r+=e(t.components[i]),i<n-1&&(r+=", ");let o=function(e,t){let r=e.exec(t);return r?.groups}(i,t.type);return r+=`)${o?.array??""}`,e({...t,type:r})}return("indexed"in t&&t.indexed&&(r=`${r} indexed`),t.name)?`${r} ${t.name}`:r}(e[n]),n!==r-1&&(t+=", ");return t}var o=r(62027);let a=e=>{var t;return function(e){let t=!0,r="",i=0,n="",a=!1;for(let o=0;o<e.length;o++){let s=e[o];if(["(",")",","].includes(s)&&(t=!0),"("===s&&i++,")"===s&&i--,t){if(0===i){if(" "===s&&["event","function",""].includes(n))n="";else if(n+=s,")"===s){a=!0;break}continue}if(" "===s){","!==e[o-1]&&","!==r&&",("!==r&&(r="",t=!1);continue}n+=s,r+=s}}if(!a)throw new o.G("Unable to normalize signature.");return n}("string"==typeof e?e:"function"===(t=e).type?`function ${t.name}(${n(t.inputs)})${t.stateMutability&&"nonpayable"!==t.stateMutability?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${n(t.outputs)})`:""}`:"event"===t.type?`event ${t.name}(${n(t.inputs)})`:"error"===t.type?`error ${t.name}(${n(t.inputs)})`:"constructor"===t.type?`constructor(${n(t.inputs)})${"payable"===t.stateMutability?" payable":""}`:"fallback"===t.type?"fallback()":"receive() external payable")}},56254:function(e,t,r){"use strict";function i(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function n(e,...t){if(!(e instanceof Uint8Array))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function o(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}r.d(t,{w:function(){return R}});let a=BigInt(4294967296-1),s=BigInt(32),l=(e,t,r)=>e<<r|t>>>32-r,c=(e,t,r)=>t<<r|e>>>32-r,u=(e,t,r)=>t<<r-32|e>>>64-r,d=(e,t,r)=>e<<r-32|t>>>64-r,h=e=>e instanceof Uint8Array,f=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4));if(68!==new Uint8Array(new Uint32Array([287454020]).buffer)[0])throw Error("Non little-endian hardware is not supported");function p(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}(e)),!h(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}class g{clone(){return this._cloneInto()}}let[m,w,b]=[[],[],[]],y=BigInt(0),v=BigInt(1),x=BigInt(2),C=BigInt(7),E=BigInt(256),_=BigInt(113);for(let e=0,t=v,r=1,i=0;e<24;e++){[r,i]=[i,(2*r+3*i)%5],m.push(2*(5*i+r)),w.push((e+1)*(e+2)/2%64);let n=y;for(let e=0;e<7;e++)(t=(t<<v^(t>>C)*_)%E)&x&&(n^=v<<(v<<BigInt(e))-v);b.push(n)}let[S,k]=function(e,t=!1){let r=new Uint32Array(e.length),i=new Uint32Array(e.length);for(let n=0;n<e.length;n++){let{h:o,l}=function(e,t=!1){return t?{h:Number(e&a),l:Number(e>>s&a)}:{h:0|Number(e>>s&a),l:0|Number(e&a)}}(e[n],t);[r[n],i[n]]=[o,l]}return[r,i]}(b,!0),A=(e,t,r)=>r>32?u(e,t,r):l(e,t,r),O=(e,t,r)=>r>32?d(e,t,r):c(e,t,r);class $ extends g{constructor(e,t,r,n=!1,o=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=r,this.enableXOF=n,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,i(r),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=f(this.state)}keccak(){!function(e,t=24){let r=new Uint32Array(10);for(let i=24-t;i<24;i++){for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let i=(t+8)%10,n=(t+2)%10,o=r[n],a=r[n+1],s=A(o,a,1)^r[i],l=O(o,a,1)^r[i+1];for(let r=0;r<50;r+=10)e[t+r]^=s,e[t+r+1]^=l}let t=e[2],n=e[3];for(let r=0;r<24;r++){let i=w[r],o=A(t,n,i),a=O(t,n,i),s=m[r];t=e[s],n=e[s+1],e[s]=o,e[s+1]=a}for(let t=0;t<50;t+=10){for(let i=0;i<10;i++)r[i]=e[t+i];for(let i=0;i<10;i++)e[t+i]^=~r[(i+2)%10]&r[(i+4)%10]}e[0]^=S[i],e[1]^=k[i]}r.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){o(this);let{blockLen:t,state:r}=this,i=(e=p(e)).length;for(let n=0;n<i;){let o=Math.min(t-this.pos,i-n);for(let t=0;t<o;t++)r[this.pos++]^=e[n++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:r,blockLen:i}=this;e[r]^=t,(128&t)!=0&&r===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){o(this,!1),n(e),this.finish();let t=this.state,{blockLen:r}=this;for(let i=0,n=e.length;i<n;){this.posOut>=r&&this.keccak();let o=Math.min(r-this.posOut,n-i);e.set(t.subarray(this.posOut,this.posOut+o),i),this.posOut+=o,i+=o}return e}xofInto(e){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return i(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(!function(e,t){n(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}(e,this),this.finished)throw Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:t,suffix:r,outputLen:i,rounds:n,enableXOF:o}=this;return e||(e=new $(t,r,i,o,n)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=n,e.suffix=r,e.outputLen=i,e.enableXOF=o,e.destroyed=this.destroyed,e}}let I=function(e){let t=t=>e().update(p(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}(()=>new $(136,1,32));var D=r(15102),P=r(11187),T=r(92106);function R(e,t){let r=I((0,D.v)(e,{strict:!1})?(0,P.O0)(e):e);return"bytes"===(t||"hex")?r:(0,T.NC)(r)}},32357:function(e,t,r){"use strict";r.d(t,{S:function(){return n}});let i=new Map;function n({fn:e,id:t,shouldSplitBatch:r,wait:n=0,sort:o}){let a=async()=>{let t=c();s();let r=t.map(({args:e})=>e);0!==r.length&&e(r).then(e=>{o&&Array.isArray(e)&&e.sort(o);for(let r=0;r<t.length;r++){let{pendingPromise:i}=t[r];i.resolve?.([e[r],e])}}).catch(e=>{for(let r=0;r<t.length;r++){let{pendingPromise:i}=t[r];i.reject?.(e)}})},s=()=>i.delete(t),l=()=>c().map(({args:e})=>e),c=()=>i.get(t)||[],u=e=>i.set(t,[...c(),e]);return{flush:s,async schedule(e){let t={},i=new Promise((e,r)=>{t.resolve=e,t.reject=r});return(r?.([...l(),e])&&a(),c().length>0)?u({args:e,pendingPromise:t}):(u({args:e,pendingPromise:t}),setTimeout(a,n)),i}}}},7760:function(e,t,r){"use strict";r.d(t,{J:function(){return n}});var i=r(62914);function n(e,{delay:t=100,retryCount:r=2,shouldRetry:n=()=>!0}={}){return new Promise((o,a)=>{let s=async({count:l=0}={})=>{let c=async({error:e})=>{let r="function"==typeof t?t({count:l,error:e}):t;r&&await (0,i.D)(r),s({count:l+1})};try{let t=await e();o(t)}catch(e){if(l<r&&await n({count:l,error:e}))return c({error:e});a(e)}};s()})}},96070:function(e,t,r){"use strict";r.d(t,{P:function(){return i}});let i=(e,t,r)=>JSON.stringify(e,(e,r)=>{let i="bigint"==typeof r?r.toString():r;return"function"==typeof t?t(e,i):i},r)},47531:function(e,t,r){"use strict";r.d(t,{F:function(){return l}});var i=r(14503),n=r(26087),o=r(26445),a=r(33639),s=r(49321);function l(e){let{account:t,gasPrice:r,maxFeePerGas:l,maxPriorityFeePerGas:c,to:u}=e,d=t?(0,i.T)(t):void 0;if(d&&!(0,s.U)(d.address))throw new n.b({address:d.address});if(u&&!(0,s.U)(u))throw new n.b({address:u});if(void 0!==r&&(void 0!==l||void 0!==c))throw new a.xY;if(l&&l>2n**256n-1n)throw new o.Hh({maxFeePerGas:l});if(c&&l&&c>l)throw new o.cs({maxFeePerGas:l,maxPriorityFeePerGas:c})}},71352:function(e,t,r){"use strict";r.d(t,{cj:function(){return d},iC:function(){return u}});var i=r(57412),n=r(26087),o=r(49321),a=r(39135),s=r(92106);let l=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,c=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function u({domain:e,message:t,primaryType:r,types:u}){let d=(e,t)=>{for(let r of e){let{name:e,type:h}=r,f=t[e],p=h.match(c);if(p&&("number"==typeof f||"bigint"==typeof f)){let[e,t,r]=p;(0,s.eC)(f,{signed:"int"===t,size:parseInt(r)/8})}if("address"===h&&"string"==typeof f&&!(0,o.U)(f))throw new n.b({address:f});let g=h.match(l);if(g){let[e,t]=g;if(t&&(0,a.d)(f)!==parseInt(t))throw new i.KY({expectedSize:parseInt(t),givenSize:(0,a.d)(f)})}let m=u[h];m&&d(m,f)}};u.EIP712Domain&&e&&d(u.EIP712Domain,e),"EIP712Domain"!==r&&d(u[r],t)}function d({domain:e}){return["string"==typeof e?.name&&{name:"name",type:"string"},e?.version&&{name:"version",type:"string"},"number"==typeof e?.chainId&&{name:"chainId",type:"uint256"},e?.verifyingContract&&{name:"verifyingContract",type:"address"},e?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}},39625:function(e,t,r){"use strict";r.d(t,{d:function(){return o}});var i=r(84192),n=r(15229);function o(e,t="wei"){return(0,n.b)(e,i.ez[t])}},67795:function(e,t,r){"use strict";r.d(t,{o:function(){return o}});var i=r(84192),n=r(15229);function o(e,t="wei"){return(0,n.b)(e,i.Zn[t])}},15229:function(e,t,r){"use strict";function i(e,t){let r=e.toString(),i=r.startsWith("-");i&&(r=r.slice(1));let[n,o]=[(r=r.padStart(t,"0")).slice(0,r.length-t),r.slice(r.length-t)];return o=o.replace(/(0+)$/,""),`${i?"-":""}${n||"0"}${o?`.${o}`:""}`}r.d(t,{b:function(){return i}})},62914:function(e,t,r){"use strict";async function i(e){return new Promise(t=>setTimeout(t,e))}r.d(t,{D:function(){return i}})},38793:function(e,t,r){"use strict";let i;function n(){}r.d(t,{eM:function(){return eC},_g:function(){return ey},mA:function(){return eN},KQ:function(){return ej},qL:function(){return eL},LN:function(){return eF}});let o="undefined"==typeof window||"Deno"in window;function a(){}function s(e){return"number"==typeof e&&e>=0&&e!==1/0}function l(e,t){return Math.max(e+(t||0)-Date.now(),0)}function c(e,t,r){return x(e)?"function"==typeof t?{...r,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function u(e,t,r){return x(e)?"function"==typeof t?{...r,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:"function"==typeof e?{...t,mutationFn:e}:{...e}}function d(e,t,r){return x(e)?[{...t,queryKey:e},r]:[e||{},t]}function h(e,t){let{type:r="all",exact:i,fetchStatus:n,predicate:o,queryKey:a,stale:s}=e;if(x(a)){if(i){if(t.queryHash!==p(a,t.options))return!1}else{if(!m(t.queryKey,a))return!1}}if("all"!==r){let e=t.isActive();if("active"===r&&!e||"inactive"===r&&e)return!1}return("boolean"!=typeof s||t.isStale()===s)&&(void 0===n||n===t.state.fetchStatus)&&(!o||!!o(t))}function f(e,t){let{exact:r,fetching:i,predicate:n,mutationKey:o}=e;if(x(o)){if(!t.options.mutationKey)return!1;if(r){if(g(t.options.mutationKey)!==g(o))return!1}else{if(!m(t.options.mutationKey,o))return!1}}return("boolean"!=typeof i||"loading"===t.state.status===i)&&(!n||!!n(t))}function p(e,t){return((null==t?void 0:t.queryKeyHashFn)||g)(e)}function g(e){return JSON.stringify(e,(e,t)=>y(t)?Object.keys(t).sort().reduce((e,r)=>(e[r]=t[r],e),{}):t)}function m(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(r=>!m(e[r],t[r]))}function w(e,t){if(e&&!t||t&&!e)return!1;for(let r in e)if(e[r]!==t[r])return!1;return!0}function b(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function y(e){if(!v(e))return!1;let t=e.constructor;if(void 0===t)return!0;let r=t.prototype;return!!(v(r)&&r.hasOwnProperty("isPrototypeOf"))}function v(e){return"[object Object]"===Object.prototype.toString.call(e)}function x(e){return Array.isArray(e)}function C(e){return new Promise(t=>{setTimeout(t,e)})}function E(e){C(0).then(e)}function _(e,t,r){return null!=r.isDataEqual&&r.isDataEqual(e,t)?e:"function"==typeof r.structuralSharing?r.structuralSharing(e,t):!1!==r.structuralSharing?function e(t,r){if(t===r)return t;let i=b(t)&&b(r);if(i||y(t)&&y(r)){let n=i?t.length:Object.keys(t).length,o=i?r:Object.keys(r),a=o.length,s=i?[]:{},l=0;for(let n=0;n<a;n++){let a=i?n:o[n];s[a]=e(t[a],r[a]),s[a]===t[a]&&l++}return n===a&&l===n?t:s}return r}(e,t):t}let S=console,k=function(){let e=[],t=0,r=e=>{e()},i=e=>{e()},n=i=>{t?e.push(i):E(()=>{r(i)})},o=()=>{let t=e;e=[],t.length&&E(()=>{i(()=>{t.forEach(e=>{r(e)})})})};return{batch:e=>{let r;t++;try{r=e()}finally{--t||o()}return r},batchCalls:e=>(...t)=>{n(()=>{e(...t)})},schedule:n,setNotifyFunction:e=>{r=e},setBatchNotifyFunction:e=>{i=e}}}();class A{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){let t={listener:e};return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}class O extends A{constructor(){super(),this.setup=e=>{if(!o&&window.addEventListener){let t=()=>e();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){this.focused!==e&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}}let $=new O,I=["online","offline"];class D extends A{constructor(){super(),this.setup=e=>{if(!o&&window.addEventListener){let t=()=>e();return I.forEach(e=>{window.addEventListener(e,t,!1)}),()=>{I.forEach(e=>{window.removeEventListener(e,t)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()})}setOnline(e){this.online!==e&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}}let P=new D;function T(e){return Math.min(1e3*2**e,3e4)}function R(e){return(null!=e?e:"online")!=="online"||P.isOnline()}class N{constructor(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent}}function M(e){return e instanceof N}function j(e){let t,r,i,n=!1,o=0,a=!1,s=new Promise((e,t)=>{r=e,i=t}),l=()=>!$.isFocused()||"always"!==e.networkMode&&!P.isOnline(),c=i=>{a||(a=!0,null==e.onSuccess||e.onSuccess(i),null==t||t(),r(i))},u=r=>{a||(a=!0,null==e.onError||e.onError(r),null==t||t(),i(r))},d=()=>new Promise(r=>{t=e=>{let t=a||!l();return t&&r(e),t},null==e.onPause||e.onPause()}).then(()=>{t=void 0,a||null==e.onContinue||e.onContinue()}),h=()=>{let t;if(!a){try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(c).catch(t=>{var r,i;if(a)return;let s=null!=(r=e.retry)?r:3,c=null!=(i=e.retryDelay)?i:T,f="function"==typeof c?c(o,t):c,p=!0===s||"number"==typeof s&&o<s||"function"==typeof s&&s(o,t);if(n||!p){u(t);return}o++,null==e.onFail||e.onFail(o,t),C(f).then(()=>{if(l())return d()}).then(()=>{n?u(t):h()})})}};return R(e.networkMode)?h():d().then(h),{promise:s,cancel:t=>{a||(u(new N(t)),null==e.abort||e.abort())},continue:()=>(null==t?void 0:t())?s:Promise.resolve(),cancelRetry:()=>{n=!0},continueRetry:()=>{n=!1}}}class U{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),s(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,null!=e?e:o?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class B extends U{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||S,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,r=void 0!==t,i=r?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?null!=i?i:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(e,t){let r=_(this.state.data,e,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:null==t?void 0:t.updatedAt,manual:null==t?void 0:t.manual}),r}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;let r=this.promise;return null==(t=this.retryer)||t.cancel(e),r?r.then(a).catch(a):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>!1!==e.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!l(this.state.dataUpdatedAt,e)}onFocus(){var e;let t=this.observers.find(e=>e.shouldFetchOnWindowFocus());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}onOnline(){var e;let t=this.observers.find(e=>e.shouldFetchOnReconnect());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var r,i,n,o;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=t&&t.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(n=this.retryer)||n.continueRetry(),this.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let a=function(){if("function"==typeof AbortController)return new AbortController}(),s={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{if(a)return this.abortSignalConsumed=!0,a.signal}})};l(s);let c={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(s)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'")};l(c),null==(r=this.options.behavior)||r.onFetch(c),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(i=c.fetchOptions)?void 0:i.meta))&&this.dispatch({type:"fetch",meta:null==(o=c.fetchOptions)?void 0:o.meta});let u=e=>{if(M(e)&&e.silent||this.dispatch({type:"error",error:e}),!M(e)){var t,r,i,n;null==(t=(r=this.cache.config).onError)||t.call(r,e,this),null==(i=(n=this.cache.config).onSettled)||i.call(n,this.state.data,e,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=j({fn:c.fetchFn,abort:null==a?void 0:a.abort.bind(a),onSuccess:e=>{var t,r,i,n;if(void 0===e){u(Error(this.queryHash+" data is undefined"));return}this.setData(e),null==(t=(r=this.cache.config).onSuccess)||t.call(r,e,this),null==(i=(n=this.cache.config).onSettled)||i.call(n,e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:u,onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){this.state=(t=>{var r,i;switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(r=e.meta)?r:null,fetchStatus:R(this.options.networkMode)?"fetching":"paused",...!t.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:null!=(i=e.dataUpdatedAt)?i:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let n=e.error;if(M(n)&&n.revert&&this.revertState)return{...this.revertState,fetchStatus:"idle"};return{...t,error:n,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),k.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}class L extends A{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,r){var i;let n=t.queryKey,o=null!=(i=t.queryHash)?i:p(n,t),a=this.get(o);return a||(a=new B({cache:this,logger:e.getLogger(),queryKey:n,queryHash:o,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(n)}),this.add(a)),a}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){let t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter(t=>t!==e),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){k.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){let[r]=d(e,t);return void 0===r.exact&&(r.exact=!0),this.queries.find(e=>h(r,e))}findAll(e,t){let[r]=d(e,t);return Object.keys(r).length>0?this.queries.filter(e=>h(r,e)):this.queries}notify(e){k.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}onFocus(){k.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){k.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class F extends U{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||S,this.observers=[],this.state=e.state||z(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(t=>t!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,t;return null!=(e=null==(t=this.retryer)?void 0:t.continue())?e:this.execute()}async execute(){var e,t,r,i,n,o,a,s,l,c,u,d,h,f,p,g,m,w,b,y;let v="loading"===this.state.status;try{if(!v){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(l=(c=this.mutationCache.config).onMutate)?void 0:l.call(c,this.state.variables,this));let e=await (null==(u=(d=this.options).onMutate)?void 0:u.call(d,this.state.variables));e!==this.state.context&&this.dispatch({type:"loading",context:e,variables:this.state.variables})}let h=await (()=>{var e;return this.retryer=j({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(e=this.options.retry)?e:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(e=(t=this.mutationCache.config).onSuccess)?void 0:e.call(t,h,this.state.variables,this.state.context,this)),await (null==(r=(i=this.options).onSuccess)?void 0:r.call(i,h,this.state.variables,this.state.context)),await (null==(n=(o=this.mutationCache.config).onSettled)?void 0:n.call(o,h,null,this.state.variables,this.state.context,this)),await (null==(a=(s=this.options).onSettled)?void 0:a.call(s,h,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:h}),h}catch(e){try{throw await (null==(h=(f=this.mutationCache.config).onError)?void 0:h.call(f,e,this.state.variables,this.state.context,this)),await (null==(p=(g=this.options).onError)?void 0:p.call(g,e,this.state.variables,this.state.context)),await (null==(m=(w=this.mutationCache.config).onSettled)?void 0:m.call(w,void 0,e,this.state.variables,this.state.context,this)),await (null==(b=(y=this.options).onSettled)?void 0:b.call(y,void 0,e,this.state.variables,this.state.context)),e}finally{this.dispatch({type:"error",error:e})}}}dispatch(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"loading":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!R(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...t,...e.state}}})(this.state),k.batch(()=>{this.observers.forEach(t=>{t.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function z(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class W extends A{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,r){let i=new F({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:r,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0});return this.add(i),i}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){k.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return void 0===e.exact&&(e.exact=!0),this.mutations.find(t=>f(e,t))}findAll(e){return this.mutations.filter(t=>f(e,t))}notify(e){k.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}resumePausedMutations(){var e;return this.resuming=(null!=(e=this.resuming)?e:Promise.resolve()).then(()=>{let e=this.mutations.filter(e=>e.state.isPaused);return k.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(a)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function H(e,t){return null==e.getNextPageParam?void 0:e.getNextPageParam(t[t.length-1],t)}class Z{constructor(e={}){this.queryCache=e.queryCache||new L,this.mutationCache=e.mutationCache||new W,this.logger=e.logger||S,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=$.subscribe(()=>{$.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=P.subscribe(()=>{P.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,t;this.mountCount--,0===this.mountCount&&(null==(e=this.unsubscribeFocus)||e.call(this),this.unsubscribeFocus=void 0,null==(t=this.unsubscribeOnline)||t.call(this),this.unsubscribeOnline=void 0)}isFetching(e,t){let[r]=d(e,t);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,t){var r;return null==(r=this.queryCache.find(e,t))?void 0:r.state.data}ensureQueryData(e,t,r){let i=c(e,t,r),n=this.getQueryData(i.queryKey);return n?Promise.resolve(n):this.fetchQuery(i)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,r){let i=this.queryCache.find(e),n=null==i?void 0:i.state.data,o="function"==typeof t?t(n):t;if(void 0===o)return;let a=c(e),s=this.defaultQueryOptions(a);return this.queryCache.build(this,s).setData(o,{...r,manual:!0})}setQueriesData(e,t,r){return k.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e,t){var r;return null==(r=this.queryCache.find(e,t))?void 0:r.state}removeQueries(e,t){let[r]=d(e,t),i=this.queryCache;k.batch(()=>{i.findAll(r).forEach(e=>{i.remove(e)})})}resetQueries(e,t,r){let[i,n]=d(e,t,r),o=this.queryCache,a={type:"active",...i};return k.batch(()=>(o.findAll(i).forEach(e=>{e.reset()}),this.refetchQueries(a,n)))}cancelQueries(e,t,r){let[i,n={}]=d(e,t,r);return void 0===n.revert&&(n.revert=!0),Promise.all(k.batch(()=>this.queryCache.findAll(i).map(e=>e.cancel(n)))).then(a).catch(a)}invalidateQueries(e,t,r){let[i,n]=d(e,t,r);return k.batch(()=>{var e,t;if(this.queryCache.findAll(i).forEach(e=>{e.invalidate()}),"none"===i.refetchType)return Promise.resolve();let r={...i,type:null!=(e=null!=(t=i.refetchType)?t:i.type)?e:"active"};return this.refetchQueries(r,n)})}refetchQueries(e,t,r){let[i,n]=d(e,t,r),o=Promise.all(k.batch(()=>this.queryCache.findAll(i).filter(e=>!e.isDisabled()).map(e=>{var t;return e.fetch(void 0,{...n,cancelRefetch:null==(t=null==n?void 0:n.cancelRefetch)||t,meta:{refetchPage:i.refetchPage}})}))).then(a);return null!=n&&n.throwOnError||(o=o.catch(a)),o}fetchQuery(e,t,r){let i=c(e,t,r),n=this.defaultQueryOptions(i);void 0===n.retry&&(n.retry=!1);let o=this.queryCache.build(this,n);return o.isStaleByTime(n.staleTime)?o.fetch(n):Promise.resolve(o.state.data)}prefetchQuery(e,t,r){return this.fetchQuery(e,t,r).then(a).catch(a)}fetchInfiniteQuery(e,t,r){let i=c(e,t,r);return i.behavior={onFetch:e=>{e.fetchFn=()=>{var t,r,i,n,o,a,s;let l;let c=null==(t=e.fetchOptions)?void 0:null==(r=t.meta)?void 0:r.refetchPage,u=null==(i=e.fetchOptions)?void 0:null==(n=i.meta)?void 0:n.fetchMore,d=null==u?void 0:u.pageParam,h=(null==u?void 0:u.direction)==="forward",f=(null==u?void 0:u.direction)==="backward",p=(null==(o=e.state.data)?void 0:o.pages)||[],g=(null==(a=e.state.data)?void 0:a.pageParams)||[],m=g,w=!1,b=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{var t,r;return null!=(t=e.signal)&&t.aborted?w=!0:null==(r=e.signal)||r.addEventListener("abort",()=>{w=!0}),e.signal}})},y=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),v=(e,t,r,i)=>(m=i?[t,...m]:[...m,t],i?[r,...e]:[...e,r]),x=(t,r,i,n)=>{if(w)return Promise.reject("Cancelled");if(void 0===i&&!r&&t.length)return Promise.resolve(t);let o={queryKey:e.queryKey,pageParam:i,meta:e.options.meta};return b(o),Promise.resolve(y(o)).then(e=>v(t,i,e,n))};if(p.length){if(h){let t=void 0!==d,r=t?d:H(e.options,p);l=x(p,t,r)}else if(f){let t=void 0!==d,r=t?d:null==(s=e.options).getPreviousPageParam?void 0:s.getPreviousPageParam(p[0],p);l=x(p,t,r,!0)}else{m=[];let t=void 0===e.options.getNextPageParam;l=!c||!p[0]||c(p[0],0,p)?x([],t,g[0]):Promise.resolve(v([],g[0],p[0]));for(let r=1;r<p.length;r++)l=l.then(i=>{if(!c||!p[r]||c(p[r],r,p)){let n=t?g[r]:H(e.options,i);return x(i,t,n)}return Promise.resolve(v(i,g[r],p[r]))})}}else l=x([]);return l.then(e=>({pages:e,pageParams:m}))}}},this.fetchQuery(i)}prefetchInfiniteQuery(e,t,r){return this.fetchInfiniteQuery(e,t,r).then(a).catch(a)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){let r=this.queryDefaults.find(t=>g(e)===g(t.queryKey));r?r.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){if(!e)return;let t=this.queryDefaults.find(t=>m(e,t.queryKey));return null==t?void 0:t.defaultOptions}setMutationDefaults(e,t){let r=this.mutationDefaults.find(t=>g(e)===g(t.mutationKey));r?r.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){if(!e)return;let t=this.mutationDefaults.find(t=>m(e,t.mutationKey));return null==t?void 0:t.defaultOptions}defaultQueryOptions(e){if(null!=e&&e._defaulted)return e;let t={...this.defaultOptions.queries,...this.getQueryDefaults(null==e?void 0:e.queryKey),...e,_defaulted:!0};return!t.queryHash&&t.queryKey&&(t.queryHash=p(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.useErrorBoundary&&(t.useErrorBoundary=!!t.suspense),t}defaultMutationOptions(e){return null!=e&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==e?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}function q(e){return e.state.isPaused}function G(e){return"success"===e.state.status}let V=["added","removed","updated"];function K(e){return V.includes(e)}async function Y({queryClient:e,persister:t,maxAge:r=864e5,buster:i="",hydrateOptions:n}){try{let o=await t.restoreClient();if(o){if(o.timestamp){let a=Date.now()-o.timestamp>r,s=o.buster!==i;a||s?t.removeClient():function(e,t,r){if("object"!=typeof t||null===t)return;let i=e.getMutationCache(),n=e.getQueryCache(),o=t.mutations||[],a=t.queries||[];o.forEach(t=>{var n;i.build(e,{...null==r?void 0:null==(n=r.defaultOptions)?void 0:n.mutations,mutationKey:t.mutationKey},t.state)}),a.forEach(({queryKey:t,state:i,queryHash:o})=>{var a;let s=n.get(o);if(s){if(s.state.dataUpdatedAt<i.dataUpdatedAt){let{fetchStatus:e,...t}=i;s.setState(t)}return}n.build(e,{...null==r?void 0:null==(a=r.defaultOptions)?void 0:a.queries,queryKey:t,queryHash:o},{...i,fetchStatus:"idle"})})}(e,o.clientState,n)}else t.removeClient()}}catch(e){t.removeClient()}}async function Q({queryClient:e,persister:t,buster:r="",dehydrateOptions:i}){let n={buster:r,timestamp:Date.now(),clientState:function(e,t={}){let r=[],i=[];if(!1!==t.dehydrateMutations){let i=t.shouldDehydrateMutation||q;e.getMutationCache().getAll().forEach(e=>{i(e)&&r.push({mutationKey:e.options.mutationKey,state:e.state})})}if(!1!==t.dehydrateQueries){let r=t.shouldDehydrateQuery||G;e.getQueryCache().getAll().forEach(e=>{r(e)&&i.push({state:e.state,queryKey:e.queryKey,queryHash:e.queryHash})})}return{mutations:r,queries:i}}(e,i)};await t.persistClient(n)}var X=r(63190),J=r(67294);let ee=J.createContext(void 0),et=J.createContext(!1);function er(e,t){return e||(t&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=ee),window.ReactQueryClientContext):ee)}let ei=({context:e}={})=>{let t=J.useContext(er(e,J.useContext(et)));if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},en=({client:e,children:t,context:r,contextSharing:i=!1})=>{J.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);let n=er(r,i);return J.createElement(et.Provider,{value:!r&&i},J.createElement(n.Provider,{value:e},t))},eo=J.createContext(!1),ea=()=>J.useContext(eo);eo.Provider;let es=J.createContext((i=!1,{clearReset:()=>{i=!1},reset:()=>{i=!0},isReset:()=>i})),el=()=>J.useContext(es);var ec=r(61688);class eu extends A{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var t;let r=this.options;this.options=this.client.defaultMutationOptions(e),w(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(t=this.currentMutation)||t.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.currentMutation)||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();let t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==e?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let e=this.currentMutation?this.currentMutation.state:z(),t="loading"===e.status,r={...e,isLoading:t,isPending:t,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset};this.currentResult=r}notify(e){k.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var t,r,i,n,o,a,s,l;e.onSuccess?(null==(t=(r=this.mutateOptions).onSuccess)||t.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(i=(n=this.mutateOptions).onSettled)||i.call(n,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):e.onError&&(null==(o=(a=this.mutateOptions).onError)||o.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(s=(l=this.mutateOptions).onSettled)||s.call(l,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)})})}}let ed=ec.useSyncExternalStore;function eh(){}class ef extends A{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),ep(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return eg(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return eg(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){let r=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),w(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();let n=this.hasListeners();n&&em(this.currentQuery,i,this.options,r)&&this.executeFetch(),this.updateResult(t),n&&(this.currentQuery!==i||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();let o=this.computeRefetchInterval();n&&(this.currentQuery!==i||this.options.enabled!==r.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)}getOptimisticResult(e){let t=this.client.getQueryCache().build(this.client,e),r=this.createResult(t,e);return e.keepPreviousData||(void 0!==e.placeholderData?!r.isPlaceholderData:w(this.getCurrentResult(),r))||(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}getCurrentResult(){return this.currentResult}trackResult(e){let t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){let t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:null==(t=e.cancelRefetch)||t}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(a)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),o||this.currentResult.isStale||!s(this.options.staleTime))return;let e=l(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},e+1)}computeRefetchInterval(){var e;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!o&&!1!==this.options.enabled&&s(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||$.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){let r;let i=this.currentQuery,n=this.options,o=this.currentResult,a=this.currentResultState,s=this.currentResultOptions,l=e!==i,c=l?e.state:this.currentQueryInitialState,u=l?this.currentResult:this.previousQueryResult,{state:d}=e,{dataUpdatedAt:h,error:f,errorUpdatedAt:p,fetchStatus:g,status:m}=d,w=!1,b=!1;if(t._optimisticResults){let r=this.hasListeners(),o=!r&&ep(e,t),a=r&&em(e,i,t,n);(o||a)&&(g=R(e.options.networkMode)?"fetching":"paused",h||(m="loading")),"isRestoring"===t._optimisticResults&&(g="idle")}if(t.keepPreviousData&&!d.dataUpdatedAt&&null!=u&&u.isSuccess&&"error"!==m)r=u.data,h=u.dataUpdatedAt,m=u.status,w=!0;else if(t.select&&void 0!==d.data){if(o&&d.data===(null==a?void 0:a.data)&&t.select===this.selectFn)r=this.selectResult;else try{this.selectFn=t.select,r=t.select(d.data),r=_(null==o?void 0:o.data,r,t),this.selectResult=r,this.selectError=null}catch(e){this.selectError=e}}else r=d.data;if(void 0!==t.placeholderData&&void 0===r&&"loading"===m){let e;if(null!=o&&o.isPlaceholderData&&t.placeholderData===(null==s?void 0:s.placeholderData))e=o.data;else if(e="function"==typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.selectError=null}catch(e){this.selectError=e}void 0!==e&&(m="success",r=_(null==o?void 0:o.data,e,t),b=!0)}this.selectError&&(f=this.selectError,r=this.selectResult,p=Date.now(),m="error");let y="fetching"===g,v="loading"===m,x="error"===m;return{status:m,fetchStatus:g,isLoading:v,isSuccess:"success"===m,isError:x,isInitialLoading:v&&y,data:r,dataUpdatedAt:h,error:f,errorUpdatedAt:p,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>c.dataUpdateCount||d.errorUpdateCount>c.errorUpdateCount,isFetching:y,isRefetching:y&&!v,isLoadingError:x&&0===d.dataUpdatedAt,isPaused:"paused"===g,isPlaceholderData:b,isPreviousData:w,isRefetchError:x&&0!==d.dataUpdatedAt,isStale:ew(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){let t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,w(r,t))return;this.currentResult=r;let i={cache:!0};(null==e?void 0:e.listeners)!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options,r="function"==typeof e?e():e;if("all"===r||!r&&!this.trackedProps.size)return!0;let i=new Set(null!=r?r:this.trackedProps);return this.options.useErrorBoundary&&i.add("error"),Object.keys(this.currentResult).some(e=>this.currentResult[e]!==t[e]&&i.has(e))})()&&(i.listeners=!0),this.notify({...i,...e})}updateQuery(){let e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;let t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){let t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||M(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){k.batch(()=>{var t,r,i,n,o,a,s,l;e.onSuccess?(null==(t=(r=this.options).onSuccess)||t.call(r,this.currentResult.data),null==(i=(n=this.options).onSettled)||i.call(n,this.currentResult.data,null)):e.onError&&(null==(o=(a=this.options).onError)||o.call(a,this.currentResult.error),null==(s=(l=this.options).onSettled)||s.call(l,void 0,this.currentResult.error)),e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function ep(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)||e.state.dataUpdatedAt>0&&eg(e,t,t.refetchOnMount)}function eg(e,t,r){if(!1!==t.enabled){let i="function"==typeof r?r(e):r;return"always"===i||!1!==i&&ew(e,t)}return!1}function em(e,t,r,i){return!1!==r.enabled&&(e!==t||!1===i.enabled)&&(!r.suspense||"error"!==e.state.status)&&ew(e,r)}function ew(e,t){return e.isStaleByTime(t.staleTime)}var eb=r(52798);function ey({queryClient:e=new Z({defaultOptions:{queries:{cacheTime:864e5,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:t=(0,X.o6)({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:X.wp}),persister:r="undefined"!=typeof window?function({storage:e,key:t="REACT_QUERY_OFFLINE_CACHE",throttleTime:r=1e3,serialize:i=JSON.stringify,deserialize:o=JSON.parse,retry:a}){if(e){let n=r=>{try{e.setItem(t,i(r));return}catch(e){return e}};return{persistClient:function(e,t=100){let r,i=null;return function(...n){r=n,null===i&&(i=setTimeout(()=>{e(...r),i=null},t))}}(e=>{let t=e,r=n(t),i=0;for(;r&&t;)i++,(t=null==a?void 0:a({persistedClient:t,error:r,errorCount:i}))&&(r=n(t))},r),restoreClient:()=>{let r=e.getItem(t);if(r)return o(r)},removeClient:()=>{e.removeItem(t)}}}return{persistClient:n,restoreClient:()=>void 0,removeClient:n}}({key:"cache",storage:t,serialize:e=>e,deserialize:e=>e}):void 0,...i}){let o=(0,X._g)({...i,storage:t});if(r){var a;let t,i;i=!1,Y(a={queryClient:e,persister:r,dehydrateOptions:{shouldDehydrateQuery:e=>0!==e.cacheTime&&!1!==e.queryKey[0].persist}}).then(()=>{i||(t=function(e){let t=e.queryClient.getQueryCache().subscribe(t=>{K(t.type)&&Q(e)}),r=e.queryClient.getMutationCache().subscribe(t=>{K(t.type)&&Q(e)});return()=>{t(),r()}}(a))})}return Object.assign(o,{queryClient:e})}var ev=J.createContext(void 0),ex=J.createContext(void 0);function eC({children:e,config:t}){return J.createElement(ev.Provider,{children:J.createElement(en,{children:e,client:t.queryClient,context:ex}),value:t})}function eE(){let e=J.useContext(ev);if(!e)throw Error("`useConfig` must be used within `WagmiConfig`.\n\nRead more: https://wagmi.sh/react/WagmiConfig");return e}var e_=ec.useSyncExternalStore;function eS(e){return"[object Object]"===Object.prototype.toString.call(e)}function ek(e){return JSON.stringify(e,(e,t)=>!function(e){if(!eS(e))return!1;let t=e.constructor;if(void 0===t)return!0;let r=t.prototype;return!!(eS(r)&&r.hasOwnProperty("isPrototypeOf"))}(t)?"bigint"==typeof t?t.toString():t:Object.keys(t).sort().reduce((e,r)=>(e[r]=t[r],e),{}))}function eA(e,t,r){let i=function(e,t){var r,i;let n=ei({context:e.context}),o=ea(),a=el(),s=n.defaultQueryOptions({...e,queryKeyHashFn:ek});s._optimisticResults=o?"isRestoring":"optimistic",s.onError&&(s.onError=k.batchCalls(s.onError)),s.onSuccess&&(s.onSuccess=k.batchCalls(s.onSuccess)),s.onSettled&&(s.onSettled=k.batchCalls(s.onSettled)),s.suspense&&"number"!=typeof s.staleTime&&(s.staleTime=1e3),(s.suspense||s.useErrorBoundary)&&!a.isReset()&&(s.retryOnMount=!1);let[l]=J.useState(()=>new t(n,s)),c=l.getOptimisticResult(s);if(e_(J.useCallback(e=>o?()=>void 0:l.subscribe(k.batchCalls(e)),[l,o]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),J.useEffect(()=>{a.clearReset()},[a]),J.useEffect(()=>{l.setOptions(s,{listeners:!1})},[s,l]),s.suspense&&c.isLoading&&c.isFetching&&!o)throw l.fetchOptimistic(s).then(({data:e})=>{s.onSuccess?.(e),s.onSettled?.(e,null)}).catch(e=>{a.clearReset(),s.onError?.(e),s.onSettled?.(void 0,e)});if(c.isError&&!a.isReset()&&!c.isFetching&&(r=s.useErrorBoundary,i=[c.error,l.getCurrentQuery()],"function"==typeof r?r(...i):!!r))throw c.error;let u="loading"===c.status&&"idle"===c.fetchStatus?"idle":c.status,d="loading"===u&&"fetching"===c.fetchStatus;return{...c,defaultedOptions:s,isIdle:"idle"===u,isLoading:d,observer:l,status:u}}({context:ex,...Array.isArray(e)?"function"==typeof t?{...r,queryKey:e,queryFn:t}:{...t,queryKey:e}:e},ef),n={data:i.data,error:i.error,fetchStatus:i.fetchStatus,isError:i.isError,isFetched:i.isFetched,isFetchedAfterMount:i.isFetchedAfterMount,isFetching:i.isFetching,isIdle:i.isIdle,isLoading:i.isLoading,isRefetching:i.isRefetching,isSuccess:i.isSuccess,refetch:i.refetch,status:i.status,internal:{dataUpdatedAt:i.dataUpdatedAt,errorUpdatedAt:i.errorUpdatedAt,failureCount:i.failureCount,isFetchedAfterMount:i.isFetchedAfterMount,isLoadingError:i.isLoadingError,isPaused:i.isPaused,isPlaceholderData:i.isPlaceholderData,isPreviousData:i.isPreviousData,isRefetchError:i.isRefetchError,isStale:i.isStale,remove:i.remove}};return i.defaultedOptions.notifyOnChangeProps?n:function(e,t){let r={};return Object.keys(e).forEach(i=>{Object.defineProperty(r,i,{configurable:!1,enumerable:!0,get:()=>(t.trackedProps.add(i),e[i])})}),r}(n,i.observer)}var eO=()=>ei({context:ex});function e$({chainId:e}={}){return(0,eb.useSyncExternalStoreWithSelector)(t=>(0,X.pC)({chainId:e},t),()=>(0,X.uV)({chainId:e}),()=>(0,X.uV)({chainId:e}),e=>e,(e,t)=>e.uid===t.uid)}function eI({chainId:e}={}){return e$({chainId:e}).chain.id}function eD({chainId:e,scopeKey:t}){return[{entity:"blockNumber",chainId:e,scopeKey:t}]}function eP({queryKey:[{chainId:e}]}){return(0,X.RQ)({chainId:e})}var eT=e=>"object"==typeof e&&!Array.isArray(e);function eR(e,t,r=t,i=X.vZ){let n=J.useRef([]),o=(0,eb.useSyncExternalStoreWithSelector)(e,t,r,e=>e,(e,t)=>{if(eT(e)&&eT(t)&&n.current.length){for(let r of n.current)if(!i(e[r],t[r]))return!1;return!0}return i(e,t)});if(eT(o)){let e={...o};return Object.defineProperties(e,Object.entries(e).reduce((e,[t,r])=>({...e,[t]:{configurable:!1,enumerable:!0,get:()=>(n.current.includes(t)||n.current.push(t),r)}}),{})),e}return o}function eN({onConnect:e,onDisconnect:t}={}){let r=eE(),i=eR(J.useCallback(e=>(0,X.uH)(e),[r]),X.D0),n=J.useRef(),o=n.current;return J.useEffect(()=>{o?.status!=="connected"&&"connected"===i.status&&e?.({address:i.address,connector:i.connector,isReconnected:o?.status==="reconnecting"||o?.status===void 0}),o?.status==="connected"&&"disconnected"===i.status&&t?.(),n.current=i},[e,t,o,i]),i}function eM({queryKey:[{address:e,chainId:t,formatUnits:r,token:i}]}){if(!e)throw Error("address is required");return(0,X.EG)({address:e,chainId:t,formatUnits:r,token:i})}function ej({address:e,cacheTime:t,chainId:r,enabled:i=!0,formatUnits:n,scopeKey:o,staleTime:a,suspense:s,token:l,watch:c,onError:u,onSettled:d,onSuccess:h}={}){let f=eI({chainId:r}),p=J.useMemo(()=>(function({address:e,chainId:t,formatUnits:r,scopeKey:i,token:n}){return[{entity:"balance",address:e,chainId:t,formatUnits:r,scopeKey:i,token:n}]})({address:e,chainId:f,formatUnits:n,scopeKey:o,token:l}),[e,f,n,o,l]),g=eA(p,eM,{cacheTime:t,enabled:!!(i&&e),staleTime:a,suspense:s,onError:u,onSettled:d,onSuccess:h});return!function({chainId:e,enabled:t,queryKey:r}){let i=eO(),n=J.useCallback(()=>i.invalidateQueries({queryKey:r},{cancelRefetch:!1}),[i,r]);!function({cacheTime:e=0,chainId:t,enabled:r=!0,scopeKey:i,staleTime:n,suspense:o,watch:a=!1,onBlock:s,onError:l,onSettled:c,onSuccess:u}={}){let d=eI({chainId:t}),h=e$({chainId:d}),f=function({chainId:e}={}){return(0,eb.useSyncExternalStoreWithSelector)(t=>(0,X.fq)({chainId:e},t),()=>(0,X.jr)({chainId:e}),()=>(0,X.jr)({chainId:e}),e=>e,(e,t)=>e?.uid===t?.uid)}({chainId:d}),p=eO();J.useEffect(()=>{if(r&&(a||s))return(f??h).watchBlockNumber({onBlockNumber:e=>{a&&p.setQueryData(eD({chainId:d,scopeKey:i}),e),s&&s(e)},emitOnBegin:!0})},[d,i,s,h,p,a,f,r]),eA(eD({scopeKey:i,chainId:d}),eP,{cacheTime:e,enabled:r,staleTime:n,suspense:o,onError:l,onSettled:c,onSuccess:u})}({chainId:e,enabled:t,onBlock:t?n:void 0,scopeKey:t?void 0:"idle"})}({chainId:f,enabled:!!(i&&c&&e),queryKey:p}),g}var eU=[{entity:"disconnect"}],eB=()=>(0,X.zP)();function eL({onError:e,onMutate:t,onSettled:r,onSuccess:i}={}){let{error:n,isError:o,isIdle:a,isLoading:s,isSuccess:l,mutate:c,mutateAsync:d,reset:h,status:f}=function(e,t,r){var i,n;let o=u(e,void 0,void 0),a=ei({context:o.context}),[s]=J.useState(()=>new eu(a,o));J.useEffect(()=>{s.setOptions(o)},[s,o]);let l=ed(J.useCallback(e=>s.subscribe(k.batchCalls(e)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),c=J.useCallback((e,t)=>{s.mutate(e,t).catch(eh)},[s]);if(l.error&&(i=s.options.useErrorBoundary,n=[l.error],"function"==typeof i?i(...n):!!i))throw l.error;return{...l,mutate:c,mutateAsync:l.mutate}}({context:ex,...u(eU,eB,{...e?{onError(t,r,i){e(t,i)}}:{},onMutate:t,...r?{onSettled(e,t,i,n){r(t,n)}}:{},...i?{onSuccess(e,t,r){i(r)}}:{}})});return{disconnect:c,disconnectAsync:d,error:n,isError:o,isIdle:a,isLoading:s,isSuccess:l,reset:h,status:f}}function eF(){let e=eE();return eR((0,J.useCallback)(e=>(0,X.QC)(e),[e]),X.Hy)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(43079)}),_N_E=e.O()}]);