// http://help.dayoneapp.com/day-one-2-0/command-line-interface-cli

const dayoneOptions = [
  {
    key: 'j',
    create: function(item) {
      return item;
    }
  },
  {
    key: 'd',
    create: function(item) {
      return item;
    }
  },
  {
    key: 'z',
    create: function(item) {
      return item;
    }
  },
  {
    key: 's',
    create: function(item) {
      return item;
    }
  },
  {
    key: 't',
    create: function(item) {
      return item;
    }
  },
  {
    key: 'p',
    create: function(item) {
      return item;
    }
  }
];

export default function(config) {
  var commandArray = dayoneOptions.reduce((prev, cur) => {
    var option = config[cur.key];
    if (option) prev.push(cur.create(option));
    return prev;
  }, []);

  return `dayone2 ${commandArray.join(' ')} new`;
}
