const GuessAndWin = artifacts.require("GuessAndWin");

module.exports = function (deployer) {
  deployer.deploy(GuessAndWin, 'Mot de 11 lettres qui contient toutes les voyelles de l alphabet', 'introuvable');
};