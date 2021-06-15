  module.exports = {
    purge: {
        content: [
            './resources/**/*.antlers.html',
            './resources/**/*.blade.php',
            './content/**/*.md'
        ]
    },
    theme: {
        extend: {
            flex: {
                '2': '2 2 0%'
            },
            inset: {
                '24': '6rem'
            },
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                green: {
                  light: 'var(--color-primary-light)',
                  DEFAULT: 'var(--color-primary)',
                  dark: 'var(--color-primary-dark)',
                },
            },
            width: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
                '108': '27rem',
                '120': '30rem',
                '132': '33rem',
                '144': '36rem'
            },
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%'
            },
            screens: {
                'sm-max': {
                    'max': '639px'
                },
                'md-max': {
                    'max': '739px'
                }
            }
        },
        fontFamily: {
            'sans': 'Montserrat, sans-serif',
            'serif': 'Libre Baskerville, serif',
            // 'headings': 'GTAmericaCompressedLight, sans-serif',
            // 'headings-alt': 'LOUDCompressedLight, sans-serif'
        },
        fontSize: {
            xs: ['0.4rem', '1.5'],
            sm: ['1.2rem', '1.5'],
            base: ['1.3rem', '1.5'],
            lg: ['1.6rem', '1.5'],
            xl: ['1.8rem', '1.5'],
            '2xl': ['2rem', '1.5'],
            '3xl': ['2.4rem', '1.5'],
            '4xl': ['3rem', '1.5'], 
            '5xl': ['3.6rem', '1.5']
        }
    },
    variants: {},
    plugins: []
}
 