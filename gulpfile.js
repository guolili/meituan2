var gulp = require('gulp');
var webserver = require('gulp-webserver');
var path = require('path');
var fs = require('fs');
var url = require('url');
gulp.task('page', function() {
    gulp.src('./')
        .pipe(webserver({
            port: 8010,
            livereload: true
        }))
})
gulp.task('server', function() {
    gulp.src('./')
        .pipe(webserver({
            port: 8020,
            middleware: function(request, response, next) {
                if (request.url === '/') {
                    return;
                }
                var file = url.parse(request.url).pathname.split('/')[1];
                var filePath = path.resolve('Data', file + '.json');
                if (fs.existsSync(filePath)) {
                    var data = fs.readFileSync(filePath);
                    response.writeHead(200, {
                        'Content-Type': 'text/json',
                        'Access-Control-Allow-Origin': '*'
                    })
                    response.end(data);
                } else {
                    response.end('not found!!!')
                }
            }
        }))
})
gulp.task('default', ['page', 'server']);