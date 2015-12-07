var days = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
  'eleventh',
  'twelfth'
];

var gifts = [
  'Partridge in a Pear Tree',
  'Two Turtle Doves',
  'Three French Hens',
  'Four Calling Birds',
  'Five Golden Rings',
  'Six Geese a Laying',
  'Seven Swans a Swimming',
  'Eight Maids a Milking',
  'Nine Ladies Dancing',
  'Ten Lords a Leaping',
  'Eleven Pipers Piping',
  'Twelve Drummers Drumming',
];

var lastDayPrefix = 'A';

// Print out the lyrics to the 12 days of Christmas
for (var day=1; day <= 12; day++) {
  console.log();
  console.log('On the ' + days[day-1] + ' day of Christmas');
  console.log('my true love sent to me:');
  for (var g=day-1; g >= 0; g--) {
    if (g === 0) {
      console.log(lastDayPrefix + ' ' + gifts[g]);
    }
    else {
      console.log(gifts[g]);
    }
  }
  lastDayPrefix = 'and a';
}
