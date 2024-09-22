import { animate, group, query, style, transition, trigger } from "@angular/animations";

export const cardTriggeredState = trigger('cardState',[
    transition(':enter',[
        group([
            query('.card-header',[
                style({
                    opacity:0
                })
            ]),
            query('.card-footer',[
                style({
                    opacity:0
                })
            ]),
            style({
                opacity: 0,
                transform: 'translateX(100%)'
            }),
            animate(3000),
            query('.card-header',[
                style({
                    transform: 'translateY(-100%)',
                    opacity: 0
                }),
                animate(3000)
            ]),
            query('.card-footer',[
                style({
                    transform: 'translateY(100%)',
                    opacity:0
                }),
                animate(3000)
            ])
        ]) 
    ]),
    transition(':leave',animate(300,style({
        transform: 'translateX(-100%)'
    }))),
    transition('* => *',[
        query('.card-body',[
            style({
                transform: 'scale(1)'
            }),
            animate(300,style({
                transform: 'scale(1.04)'
            })),
            animate(300)
        ],{ optional: true })
    ])
])