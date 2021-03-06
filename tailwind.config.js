module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        inset: {
            '0': '0',
            'auto': 'auto',
            '1/2': '50%',
        },
        extend: {
            margin: {
                '05' : '0.125rem',
                'screen' : '100vh'
            },
            width: {
                '72' : '18rem',
                '80' : '20rem',
                '88' : '22rem',
                '96' : '24rem',
                '2full' : '200%',
                '2full-10' : '210%'
            },
            boxShadow: {
                'profile' : '0px 0px 7px gray',
                'project' : '1px 1px 7px #A4A4A4',
                'profile-hover' : '-0.5em 0.5em 7px lightgray',
                'header' : '0px 0px 7px #525252',
                'about' : '1px 1px 10px #3B3B3B',
                'hobby' : '1px 1px 10px gray',
            },
            opacity: {
                '20' : '0.2',
                '40' : '0.4',
                '80' : '0.8',
                '90' : '0.9'
            },
            borderColor: {
                'average' : '#adadad'
            },
            borderWidth: {
                '1' : '1px',
                '3' : '3px'
            },
            transitionProperty: {
                'height': 'height',
            }
        },
    },
    variants: {
        borderWidth: ['responsive', 'hover', 'focus'],
        borderRadius: ['responsive', 'hover', 'focus'],
        borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
        height: ['responsive', 'hover', 'focus'],
    },
    plugins: [],
};
