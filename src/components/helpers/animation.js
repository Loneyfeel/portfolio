export const appOnTheLeftAnimation = {
    initial: {
        opacity: 0,
        transform: 'translateX(100px)',
    },
    animate: {
        opacity: 1,
        transform: 'translateX(0)',
        transition:{
            duration: 1,
            delay: 0.3,
            ease: "easeInOut",
        }
    },
}
export const appOnTheRightAnimation = {
    initial: {
        opacity: 0,
        transform: 'translateX(-100px)',
    },
    animate: {
        opacity: 1,
        transform: 'translateX(0)',
        transition:{
            duration: 1,
            delay: 0.3,
            ease: "easeInOut"
        }
    },
}
export const appCardAnimation = {
    initial: {
        opacity: 0,
        y: -30,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition:{
            duration: 0.5,
            delay: 0.1 * index,
            ease: "easeInOut",
        }
    }),
}