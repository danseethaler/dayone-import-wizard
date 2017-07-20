// http://help.dayoneapp.com/day-one-2-0/command-line-interface-cli

import dayoneOptions from './dayoneOptions';

export default function(config) {
  var commandArray = dayoneOptions.reduce((prev, cur) => {
    var option = config[cur.key];
    if (option) prev.push(cur.create(option));
    return prev;
  }, []);

  return `dayone2 ${commandArray.join(' ')} new`;
}
