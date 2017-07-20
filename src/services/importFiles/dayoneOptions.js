import moment from 'moment';
export default [
  {
    key: 'j',
    create: function(item) {
      return '-j ' + item;
    }
  },
  {
    key: 'd',
    create: function(item) {
      if (!moment(item).isValid()) return '';
      return `-d '${moment(item).format('YYYY-MM-DD hh:mm A')}'`;
    }
  },
  {
    key: 'z',
    create: function(item) {
      return '-z ' + item;
    }
  },
  {
    key: 's',
    create: function(item) {
      return '-s ' + item;
    }
  },
  {
    key: 't',
    create: function(item) {
      return '-t ' + item;
    }
  },
  {
    key: 'p',
    create: function(item) {
      return '-p ' + item;
    }
  }
];
