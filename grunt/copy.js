module.exports = {
    main: {
        expand: true,
        cwd: '../../CSS/ratchet/dist/',
        src: '**',
        dest: 'src/'
    },
    preloadjs:{
        expand:true,
        cwd:'../../JS/PreloadJS/lib/',
        src:'preloadjs-0.4.1.combined.js',
        dest:'src/js/libs/PreloadJS/'
    }
};