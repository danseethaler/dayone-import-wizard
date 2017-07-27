// http://help.dayoneapp.com/day-one-2-0/command-line-interface-cli
// -p, --photos
// -z, --time-zone
// -s, --starred
// -d, --date
// --coordinate
// --isoDate
// -j, --journal
// -t, --tags

import moment from 'moment';

export default [
  {
    key: 'photos',
    create: function(item) {
      return '--photos' + item;
    }
  },
  {
    key: 'timezone',
    create: function(item) {
      return '--time-zone' + item;
    }
  },
  {
    key: 'starred',
    create: function(item) {
      return '--starred' + item;
    }
  },
  {
    key: 'date',
    create: function(item) {
      if (!moment(item).isValid()) return '';
      return `--date '${moment(item).format('YYYY-MM-DD hh:mm A')}'`;
    }
  },
  {
    key: 'coordinate',
    create: function(item) {
      return '--coordinate' + item;
    }
  },
  {
    key: 'isoDate',
    create: function(item) {
      return '--isoDate' + item;
    }
  },
  {
    key: 'journal',
    create: function(item) {
      return '--journal' + item;
    }
  },
  {
    key: 'tags',
    create: function(item) {
      return '--tags' + item;
    }
  }
];
