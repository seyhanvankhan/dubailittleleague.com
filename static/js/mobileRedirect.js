const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
];

isMobile = toMatch.some((toMatchItem) => {
  return navigator.userAgent.match(toMatchItem);
});

if (isMobile) {
  window.open('/error', '_self');
}
