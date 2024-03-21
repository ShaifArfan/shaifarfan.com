import dayjs from 'dayjs';

export const formattedPublishDate = (date: string | Date) => {
  return dayjs(date).format('MMM D, YYYY');
};
