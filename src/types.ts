export type EventCategory = 'sightseeing' | 'food' | 'transport' | 'shopping' | 'activity' | 'flight' | 'hotel';

export interface ItineraryEvent {
  time: string;
  title: string;
  desc: string;
  transport?: string;
  highlight?: boolean;
  category?: EventCategory;
  mapQuery?: string;
}

export interface Accommodation {
  name: string;
  checkIn?: string;
}

export interface ItineraryDay {
  day: string;
  date: string;
  weekday: string;
  title: string;
  desc: string;
  pass: boolean;
  bg: string;
  weatherIcon?: 'sunny' | 'cloudy' | 'rain' | 'snow';
  temp?: string;
  tips?: string;
  accommodation?: Accommodation;
  events: ItineraryEvent[];
}