const router = require('express').Router();
const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes');
// const dashboardRoutes = require('./dashboard-routes');
console.log('hello');

console.log(apiRoutes);
router.use('/api', apiRoutes);
// router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);
console.log('goodbye');

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;