import {
  trigger,
  transition,
  sequence,
  animate,
  style,
} from '@angular/animations';

export const singleHeartBeatAnimation = trigger('singleHeartBeat', [
  transition('* => beatIt', [
    sequence([
      animate('300ms ease-in', style({ transform: 'scale(1.6)' })),
      animate('600ms ease-out', style({ transform: 'scale(1)' })),
    ]),
  ]),
]);
