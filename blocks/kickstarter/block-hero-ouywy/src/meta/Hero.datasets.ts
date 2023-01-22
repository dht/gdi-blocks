const TS_START = 1000;

export const datasets: Json = {
    hudHero: {
        config: {
            color: '#00ff15',
            height: 700,
            width: 1000,
            radius: 7,
            alpha: 0.2,
            beta: 1.5,
            glbPath: '/bag.glb',
        },
        items: [
            {
                id: '1',
                text: 'Ergonomic back system',
                origin: [0, -250],
                textTop: 60,
                isLeft: true,
            },
            {
                id: '2',
                text: '20L capacity (+13" laptop)',
                origin: [100, -100],
                textTop: 200,
                isLeft: false,
            },
            {
                id: '3',
                text: 'Rain & dust protection',
                origin: [80, -60],
                textTop: 450,
                isLeft: false,
            },
            {
                id: '4',
                text: 'Durable materials',
                origin: [0, 80],
                textTop: 550,
                isLeft: true,
            },
        ],
        timeline: [
            {
                id: '1',
                itemId: '1',
                millis: TS_START + 100,
                visibility: 'APPEAR',
            },
            {
                id: '2',
                itemId: '1',
                millis: TS_START + 3100,
                visibility: 'DISAPPEAR',
                cameraPosition: {
                    alpha: 1,
                },
            },
            {
                id: '3',
                itemId: '2',
                millis: TS_START + 3600,
                visibility: 'APPEAR',
            },
            {
                id: '4',
                itemId: '2',
                millis: TS_START + 6600,
                visibility: 'DISAPPEAR',
                cameraPosition: {
                    alpha: 0,
                    beta: 0.5,
                },
            },
            {
                id: '5',
                itemId: '3',
                millis: TS_START + 7100,
                visibility: 'APPEAR',
            },
            {
                id: '6',
                itemId: '3',
                millis: TS_START + 10100,
                visibility: 'DISAPPEAR',
                cameraPosition: {
                    alpha: 0.5,
                    beta: 1.5,
                },
            },
            {
                id: '7',
                itemId: '4',
                millis: TS_START + 10600,
                visibility: 'APPEAR',
            },
            {
                id: '8',
                itemId: '4',
                millis: TS_START + 13600,
                visibility: 'DISAPPEAR',
                cameraPosition: {
                    alpha: 0,
                    beta: 1.5,
                },
            },
        ],
    },
};
