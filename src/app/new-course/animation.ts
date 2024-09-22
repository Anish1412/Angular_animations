import { animate, group, query, state, style, transition, trigger } from "@angular/animations";

export const buttonTriggeredState = trigger('buttonState',[
    state('valid',style({
        backgroundColor: 'green'
    })),
    state('invalid',style({
        backgroundColor:'red'
    })),
    transition('invalid => valid',[
        group([
            animate(500,style({
                transform: 'scale(1.1)'
            })),
            animate(500,style({
                backgroundColor:'green'
            }))
        ]),
        animate(500,style({
            transform: 'scale(1)'
        }))
    ]),
    transition('valid => invalid',[
        group([
            animate(500,style({
                transform: 'scale(1.1)'
            })),
            animate(500,style({
                backgroundColor: 'red'
            }))
        ]),
        animate(500,style({
            transform: 'scale(1)'
        }))
    ])
])

export const courseFormTriggeredState = trigger('courseFormState',[
    transition('* => *',[
        query('.ng-invalid:focus',[
            animate(300,style({
                backgroundColor:'red'
            }))
        ],{ optional: true })
    ])
])