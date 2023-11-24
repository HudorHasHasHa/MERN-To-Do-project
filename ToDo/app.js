import express from 'express';
import path from 'path';
import "./config.js";
import debug from 'debug';
import cors from 'cors';
import bodyParser from 'body-parser';
import indexRouter from './routes/index.js';
import eventRouter from './routes/events.js';
const debugInstance = debug('my express app');
const app = express();
const currentModuleUrl = new URL(import.meta.url);
const currentModuleDirectory = path.dirname(currentModuleUrl.pathname);
app.use(express.static(path.join(currentModuleDirectory, 'public')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/events', eventRouter);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err['status'] || 500)
            .json({
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to the user
app.use((err, req, res, next) => {
    res.status(err.status || 500)
        .json({
        message: err.message,
        error: err
    });
});
app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
    debugInstance(`Express server listening on port ${server.address().port}`);
});
//# sourceMappingURL=app.js.map