module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            margin: {
                'screen' : '100vh'
            },
            width: {
                '72' : '18rem',
                '80' : '20rem',
                '88' : '22rem',
                '96' : '24rem',
            },
            boxShadow: {
                'profile' : '0px 0px 7px gray',
                'profile-hover' : '-0.5em 0.5em 7px lightgray',
                'header' : '0px 0px 7px #525252'
            },
            borderColor: {
                'average' : '#adadad'
            }
        },
    },
    variants: {
        borderWidth: ['responsive', 'hover', 'focus'],
    },
    plugins: [],
};
