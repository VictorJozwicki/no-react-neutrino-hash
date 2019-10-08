module.exports = {
    use: [
        '@neutrinojs/react',
        (neutrino) => {
            neutrino.config.output.filename('[name].js');
        }
    ]
};