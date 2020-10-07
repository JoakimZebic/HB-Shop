import {
  animate,
  animation,
  keyframes,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

export let bounceOutLeftAnimation = animation(
  animate(
    '0.5s ease-out',
    keyframes([
      style({
        offset: 0.2,
        opacity: 1,
        transform: 'translateX(20px)',
      }),
      style({
        offset: 1,
        opacity: 0,
        transform: 'translateX(-100%)',
      }),
    ])
  )
);

export let slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-10px)' }),
    animate(500),
  ]),

  transition(':leave', useAnimation(bounceOutLeftAnimation)),
]);
