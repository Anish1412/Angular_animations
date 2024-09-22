import { animate, animation, style, transition, trigger, useAnimation } from "@angular/animations";

// Using Reusable Animations using animation() & useAnimation()
// 1) ******** First method ********
// const fadeAnimation = animation([
//     style({
//         opacity: 0
//     }),
//     animate(500)
// ])

// 2) ******** Second method passing parameters and binding values in string interpolation in string format ********
const fadeAnimation = animation([
    style({
        opacity: '{{ opacity }}'
    }),
    animate('{{ duration }}')
],{ params : { opacity : 0, duration : '500ms'}})

// export const routerTriggerState = trigger('routerState',[
//     transition(':enter',useAnimation(fadeAnimation,{ params : { opacity : 0, duration : '2000ms'}})),
//     transition(':leave',animate(500,style({
//         opacity: 0
//     })))
// ])

// 3) ******** Third method getting parameters from another component from animations array in users.component.ts ********
// Using as Arrow functions to take parameters
export const routerTriggerState = (params:any) => trigger('routerState',[
    transition(':enter',useAnimation(fadeAnimation,{ params })),
    transition(':leave',animate(500,style({
        opacity: 0
    })))
])

export const routerSliderTriggerState = trigger('routerSlideState',[
    transition(':enter',[
        style({
            transform : 'translateY(-100%)',
            opacity: 0
        }),
        animate(300)
    ]),
    transition(':leave',animate(300,style({
        transform: 'translateY(100%)'
    })))
])