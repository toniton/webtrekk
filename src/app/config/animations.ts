import {
    trigger, transition, animate, style, state,
    keyframes, query, group, sequence, animateChild, stagger
} from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export function FADE_IN_SCALEUP(): AnimationEntryMetadata {
    return trigger('fadeInScaleUp', [
        transition(':enter', [
            style({ transform: 'scale(0.8)', opacity: 0 }),
            animate('.2s', style({ transform: 'scale(1.0)', opacity: 1 }))
        ])
    ])
};


export function SLIDE_IN_OUT(): AnimationEntryMetadata {
    return trigger('slideInOutAnimation', [
        transition('* => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),
            sequence([
                query(':leave', animateChild(), { optional: true }),
                group([
                    query(':leave', [
                        style({ transform: 'translateX(0%)' }),
                        animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
                            style({ transform: 'translateX(-100%)' }))
                    ], { optional: true }),
                    query(':enter', [
                        style({ transform: 'translateX(100%)' }),
                        animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
                            style({ transform: 'translateX(0%)' })),
                    ], { optional: true }),
                ]),
                query(':enter', animateChild(), { optional: true }),
            ])
        ])
    ]);
};
// Component transition animations
export function SLIDE_IN_DOWN(): AnimationEntryMetadata {
    return trigger('slideInDownAnimation', [
        state('*',
            style({
                opacity: 1,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate('0.2s ease-in')
        ]),
        transition(':leave', [
            animate('0.5s ease-out', style({
                opacity: 0,
                transform: 'translateY(100%)'
            }))
        ])
    ]);
}

export function SLIDE_IN_LEFT(): AnimationEntryMetadata {
    return trigger('slideInLeftAnimation', [
        state('* <=> *',
            style({
                opacity: 0,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate('0.4s ease-in')
        ]),
        transition(':leave', [
            animate('0.8s ease-out', style({
                opacity: 0,
                transform: 'translateY(100%)'
            }))
        ])
    ]);
}

export function FLY_IN_OUT(): AnimationEntryMetadata {

    return trigger('flyInOut', [
        state('', style({ opacity: 0.4, transform: 'translateY(-10%)' })),
        transition('* => in', [
            animate('0.6s 0.2s ease-out', style({
                opacity: 1,
                transform: 'translateY(0)'
            }))
        ]),
        transition('in => out', [
            animate('0.3s ease-out', style({
                opacity: 0,
                transform: 'translateY(-15%)'
            }))
        ])
    ])
}

export function FLY_IN_OUT_LIST(): AnimationEntryMetadata {

    return trigger('flyInOutList', [
        state('', style({ opacity: 1, transform: 'translateY(0)' })),
        transition('* => *', [
            query(':enter', [
                style({
                    opacity: 0,
                    transform: 'translateY(15%)'
                }),
                stagger(180, [
                    animate('0.4s ease-in')
                ])
            ], { optional: true }),
            query(':leave', [
                stagger(-60, [
                    animate('0.4s 0.2s ease-out', style({
                        opacity: 0,
                        transform: 'translateY(60%)'
                    }))
                ])
            ], { optional: true })
        ])
    ])
}

export function FLY_IN_OUT_LIST_PARENT(): AnimationEntryMetadata {
    return trigger('flyInOutListParent', [
        transition(':enter', group([
            // style({ transform: 'translate(-100px)' }),
            // animate('500ms', style({ transform: 'translate(0px)' })),
            query(':enter', [
                stagger(180, [
                    animateChild()
                ])
            ], { optional: true })
        ]))
    ])
}

export function ROUTER_FADE_ANIMATION(): AnimationEntryMetadata {
    return trigger('routerFadeAnimation', [
        transition('* => *', [
            query(':enter',
                [
                    style({ opacity: 0 }),
                    animate('0.2s', style({ opacity: 1 }))
                ],
                { optional: true }
            ),
            query(':leave',
                [
                    style({ opacity: 1 }),
                    animate('0.1s', style({ opacity: 0 }))
                ],
                { optional: true }
            )
        ])
    ])
}
