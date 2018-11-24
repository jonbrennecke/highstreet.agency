// @flow
import moment from 'moment';

import {
  MOMENT_DEFAULT_TIMESTAMP_FORMAT,
  MOMENT_DAY_MONTH_CALENDAR_FORMAT,
  MOMENT_DAY_MONTH_YEAR_CALENDAR_FORMAT,
} from '../constants';

export function timestamp(): string {
  return moment().format(MOMENT_DEFAULT_TIMESTAMP_FORMAT);
}

export function parseTimestamp(
  timestamp: string,
  utc?: boolean = false,
  format?: ?string = MOMENT_DEFAULT_TIMESTAMP_FORMAT
): moment {
  if (utc) {
    return moment.utc(timestamp, format);
  }
  return moment(timestamp, format);
}

export function formatCalendarDate(
  timestamp: string,
  utc?: boolean = false
): string {
  const m = parseTimestamp(timestamp, utc);
  return m.calendar(null, MOMENT_DAY_MONTH_CALENDAR_FORMAT);
}

export function formatCalendarDateWithYear(
  timestamp: string,
  utc?: boolean = false
): string {
  const m = parseTimestamp(timestamp, utc);
  return m.calendar(null, MOMENT_DAY_MONTH_YEAR_CALENDAR_FORMAT);
}
