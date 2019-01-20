function getMiddle(s)
{
  return s.length % 2 ? s[Math.floor(s.length/2)] : s.substr(s.length/2 -1, 2);
}