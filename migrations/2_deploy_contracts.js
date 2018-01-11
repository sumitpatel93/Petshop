var Adoption = artifacts.require('./Adoption.sol')

module.export = function(deployer){
	deployer.deploy(Adoption);
}