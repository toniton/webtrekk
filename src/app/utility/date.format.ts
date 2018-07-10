import * as Moment from 'moment';

export const DATEFORMAT = {
    sameDay: '[Today], HH:MM A',
    nextDay: '[Tomorrow], HH:MM A',
    nextWeek: 'Do MMM, YYYY',
    lastDay: '[Yesterday], HH:MM A',
    lastWeek: 'Do MMM, YYYY',
    sameElse: 'Do MMM, YYYY',
    easyToRead: 'Do MMM, YYYY'
};

export function formatDate(date, format) {
    return Moment(date).format(format);
}
