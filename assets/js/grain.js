/* Monroe Elementary — rice-paper grain texture overlay */
(function () {
  var c = document.createElement('canvas');
  c.width = 256; c.height = 256;
  var ctx = c.getContext('2d');
  var d = ctx.createImageData(256, 256);
  var s = 42;
  var rnd = function () { s = (Math.imul(s, 1664525) + 1013904223) | 0; return (s >>> 0) / 0xffffffff; };
  for (var i = 0; i < d.data.length; i += 4) {
    var v = Math.floor(rnd() * 200 + 55);
    d.data[i]   = v;
    d.data[i+1] = Math.floor(v * 0.97);
    d.data[i+2] = Math.floor(v * 0.93);
    d.data[i+3] = Math.floor(rnd() * 22);
  }
  ctx.putImageData(d, 0, 0);
  var el = document.getElementById('grain-overlay');
  if (el) {
    el.style.backgroundImage = 'url(' + c.toDataURL() + ')';
    el.style.backgroundRepeat = 'repeat';
  }
})();
