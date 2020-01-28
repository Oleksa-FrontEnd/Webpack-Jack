module.exports = {
    plugins: [
        require('autoprefixer'),
        require('css-mqpacker'), //для грперовки медиа-запросов
        require('cssnano')({ //поджимает и удалит комментарии в продакшене с main.css
            preset: [
                'default', {
                discardComments: {
                    removeAll: true,
                }
                }
            ]
        })
    ]
}