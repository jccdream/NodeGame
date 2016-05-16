var table = new UpgradeGameTable();
exports.index = function (req, res) {
    res.render('index', { title: 'Index' });
};
exports.play = function (req, res) {
    res.render('table', { name: req.body.name });
};
//# sourceMappingURL=index.js.map