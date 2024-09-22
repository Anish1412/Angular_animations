import { animate, state, style, transition, trigger, keyframes, query, stagger } from "@angular/animations";


export const triggeredState = trigger('selectedCard',[
    state('select',style({
        border: '3px solid blue',
        transform: 'scale(1.02)'
    })),
    state('unselect',style({
        border: '2px solid black',
        transform: 'scale(1)'
    })),
    transition('select => unselect',animate('500ms')),
    transition('unselect => select',animate('500ms'))
])


export const courseAnimation = trigger('courseTransition',[
    transition(':enter',[
        animate('500ms ease-out',keyframes([
        style({ 
          opacity : 0, 
          transform : 'translateX(-100%)',
          offset: 0
        }),
        style({ 
          opacity : 1, 
          transform : 'translateX(15%)',
          offset: 0.4
        }),
        style({
            transform : 'translateX(0%)',
            offset: 1
        })
    ])
  )
]),
    transition(':leave',
        animate(
            '500ms ease-in',
            keyframes([
                style({
                    transform: 'translateX(0%)',
                    offset:0
                }),
                style({ 
                    transform : 'translateX(-15%)',
                    offset: 0.4
                }),
                style({
                    opacity: 0,
                    transform: 'translateX(100%)',
                    offset: 1
                })
            ])
        )),

        // ****** Course Card SlideUp & SlideDown ******
        transition('slideUp => slideDown',[
            style({
                transform: 'translateY(-100%)'
            }),
            animate('500ms ease-out',style({
                transform: 'translateY(0%)'
            }))
        ]),
        transition('slideDown => slideUp',[
            style({
            transform: 'translateY(0%)',
        }),animate('500ms',style({
            transform: 'translateY(-100%)'
        }))])
])


export const newCourseState = trigger('newCourseState',[
    transition(':enter',[style({
        transform: 'translateY(-100%)'
    }),animate('500ms ease-out',style({
        transform : 'translateY(0%)'
    }))]),
    transition(':leave',[style({
        transform: 'translateY(0%)'
    }),animate('500ms ease-in',style({
        transform: 'translateY(-100%)'
    }))])
])

export const staggerListTriggerState = trigger('staggerState',[
    transition('* => *',[
        // query & stagger should be used in combination
        query(':enter',[
            style({ 
                opacity : 0, 
                transform : 'translateX(-100%)',
              }),
            stagger(500,[
                animate('500ms ease-out',keyframes([
                    style({ 
                      opacity : 1, 
                      transform : 'translateX(15%)',
                      offset: 0.4
                    }),
                    style({
                        transform : 'translateX(0%)',
                        offset: 1
                    })
                ])
              )
            ]) 
        ],{ optional : true})
    ])
])