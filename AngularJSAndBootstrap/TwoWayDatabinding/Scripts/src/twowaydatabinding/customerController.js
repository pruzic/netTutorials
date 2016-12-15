(function() {
    'use strict';

    angular.module('app')
        .controller('customerController', CustomerController);

    function CustomerController() {

        var cst = this;
        console.log("From Controller");
        cst.customer = {
            firstName: 'Predrag',
            lastName: 'Ruzic',
            gender: 'M'
        };



        console.log("Customer: " + cst.customer.firstName);
    }

})();