export const op1 = {
    background: {
        color: { value: "rgb(10, 10, 30)" },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
        },
        modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
        },
    },
    particles: {
        color: { value: "#FF61C7" },
        links: {
            color: "#FF61C7",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            speed: 6,
        },
        number: {
            density: { enable: true, area: 800 },
            value: 80,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
}
export const op2 = {
    background: { color: { value: "rgb(10, 10, 30)" } },
    fpsLimit: 60,
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: { enable: true, mode: ["grab", "repulse"] },
            onClick: { enable: true, mode: "push" },
            resize: true,
        },
        modes: {
            grab: {
                distance: 200,
                links: { opacity: 0.7 },
            },
            repulse: {
                distance: 150,
                duration: 0.6,
            },
            push: { quantity: 4 },
        },
    },
    particles: {
        color: { value: ["#FF61C7", "#FFD166", "#06D6A0", "#118AB2"] },
        links: {
            color: "#FF61C7",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
            triangles: { enable: true, opacity: 0.1 }, // add triangles between particles
        },
        move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 3,
            straight: false,
            wobble: { enable: true, distance: 5, speed: 2 }, // wobble effect
        },
        number: {
            density: { enable: true, area: 900 },
            value: 70,
        },
        opacity: {
            value: 0.6,
            random: { enable: true, minimumValue: 0.3 },
            animation: { enable: true, speed: 0.5, minimumValue: 0.3, sync: false },
        },
        shape: {
            type: ["circle", "triangle", "star", "polygon"],
            options: {
                polygon: { sides: 6 },
                star: { sides: 5 },
            },
        },
        size: {
            value: { min: 2, max: 6 },
            random: true,
            animation: {
                enable: true,
                speed: 4,
                minimumValue: 2,
                sync: false,
            },
        },
        rotate: {
            value: 0,
            random: true,
            direction: "random",
            animation: {
                enable: true,
                speed: 5,
                sync: false,
            },
        },
    },
    detectRetina: true,
}
export const globeOptions = {
    background: {
        color: { value: "rgb(10, 10, 30)" },
    },
    fpsLimit: 60,
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "grab",
            },
            onClick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 200,
                links: {
                    opacity: 0.8,
                },
            },
            push: {
                quantity: 4,
            },
        },
    },
    particles: {
        number: {
            value: 120,
            density: {
                enable: true,
                area: 800,
            },
        },
        color: {
            value: "#FF61C7",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.7,
            random: false,
        },
        size: {
            value: 3,
            random: { enable: true, minimumValue: 1 },
            animation: {
                enable: true,
                speed: 4,
                minimumValue: 1,
                sync: false,
            },
        },
        links: {
            enable: true,
            distance: 120,
            color: "#FF61C7",
            opacity: 0.3,
            width: 1,
            triangles: {
                enable: true,
                opacity: 0.05,
            },
            warp: true,
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
                default: "bounce",
            },
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
            },
        },
        orbit: {
            enable: true,
            radius: 100,
            rotation: {
                speed: 0.2,
                sync: false,
            },
            animation: {
                enable: true,
                speed: 0.1,
                sync: false,
            },
        },
    },
    detectRetina: true,
};
