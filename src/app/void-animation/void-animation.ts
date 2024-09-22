import { animate, group, keyframes, style, transition, trigger } from '@angular/animations';

export const conditionAnimation = trigger('conditionAnimation',[
    // Void :-
    // 1) If we are dealing with *ngIf in the elements then, we should not make use of 'void' as stateName,
    // 2) We shouldn't override it. because, that element will not be present, it is completely removed from the DOM,
    // 3) there is an another reserve word which we can take in expression as 'void'
    // 4) We can directly take it in transition expression and apply styles over there.

    // * (Wildcard state) :-
    // 1) If we're not taking any state and we're interacting with void elements using *ngIf or dynamic content
    //  then, we have to make use of "*".
    // ****** Shorthand for ( * => void ) is ':leave' ******
    transition(':leave',animate(1000,style({ opacity: 0 }))),
    // We're using style before animate because, the element comes suddenly after *ngIf='true' in the DOM.
    // so, First, we have to hide it & then, we have to make it visible smoothly.
    // ****** Shorthand for ( void => * ) is ':enter' ******
    transition(':enter',[style({
        opacity: 0
    }),animate(1000,style({ opacity: 1 }))])
])


// (* => *) = From any state to any state
export const shrinkAnimation = trigger('shrinkAnimation',[
    transition('* => *',[
        animate('400ms 100ms cubic-bezier(.44,.68,.88,.77)',style({ width: 0 })),
        animate(400,style({ width: '*' }))
    ])
])

export const listAnimation = trigger('listAnimation',[
    transition(':enter',[
        style({ 
            opacity: 0,
            backgroundColor:'white'
        }),

        // If you want to do animations parallely for different timeouts then, use group() option
        group([
            animate(1000,style({ opacity: 1 })),

            // ****** KEYFRAMES ******
            // keyframes :- In those particular seconds, if you want to do one or more transitions then,
            //              you can make use of keyframes.
            animate('4000ms ease-in',keyframes([
                style({ 
                    backgroundColor : 'red',
                    // Offset basically, defines the transition time means, how much time it is taking
                    // From one style to another style
                    offset: 0
                }),
                style({ 
                    backgroundColor : 'yellow',
                    offset: 0.7
                }),
                style({ 
                    backgroundColor : 'green',
                    offset: 1
                }),
            ])),
        ]),
        animate(400)]),
    transition(':leave',animate(400,style({ opacity: 0 }))),
]);