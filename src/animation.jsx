export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.25
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    }
}

export const fadeInDown = {
    hidden: { opacity: 0, y: -200 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.25,
            duration: 1,
        }
    }
}

export const fadeInLeft = {
    hidden: { opacity: 0, x: -200 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.25,
            duration: 1,
        }
    }
}

export const titleAnimation = {
    hidden: {
        opacity: 0,
        y: 100
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.25,
            duration: 0.6,
        }
    }
}

export const zoom = {
    hidden: {
        opacity: 0,
        scale: 0.1
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1
        }
    }
}

export const cardAnimationRight = {
    hidden: {
        x: "100%",
    },
    show: {
        x: "0%",
        transition: {
            duration: 1.5,
        }
    }
}

export const cardAnimationLeft = {
    hidden: {
        x: "-100%",
    },
    show: {
        x: "0%",
        transition: {
            duration: 1.5,
        }
    }
}

export const aboutCardAnimationA = {
    hidden: {
        y: 200,
    },
    show: {
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

export const aboutCardAnimationB = {
    hidden: {
        y: 200,
    },
    show: {
        y: 0,
        transition: {
            duration: 1.5,
        }
    }
}

export const aboutCardAnimationC = {
    hidden: {
        y: 200,
    },
    show: {
        y: 0,
        transition: {
            duration: 2,
        }
    }
}