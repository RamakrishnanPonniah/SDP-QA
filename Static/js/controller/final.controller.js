(function () {
    'use strict';

    angular.module('app').controller('FinalController', FinalController);
    FinalController.$inject = ['$rootScope', '$scope', '$cookieStore', '$http', '$location', '$filter'];

    function FinalController($rootScope, $scope, $cookieStore, $http, $location, $filter) {

        $rootScope.Title = 'Dispute Alert Prediction Result';

        $scope.allAlerts = false;
        $scope.allMonitorsScore = false;
        $scope.perset = $rootScope.perset;

        if (angular.isUndefined($rootScope.authenticated)) {
            window.location.href = "/";
        }

        if ($rootScope.authenticated == false) {
            window.location.href = "/";
        }

        $scope.customers = [
            { customerId: "3DKKMM502", alert: 'N' },
            { customerId: "3DKKMM553", alert: 'N' },
            { customerId: "3DKKMM701", alert: 'N' },
            { customerId: "3DKKMM757", alert: 'N' },
            { customerId: "6DKKMM101", alert: 'N' },
            { customerId: "6DKKMM111", alert: 'N' },
            { customerId: "6DKKMM153", alert: 'N' },
            { customerId: "6DKKMM201", alert: 'N' },
            { customerId: "6DKKMM11", alert: 'N' },
            { customerId: "6DKKMM253", alert: 'N' },
            { customerId: "6DKKMM301", alert: 'N' },
            { customerId: "6DKKMM353", alert: 'N' },
            { customerId: "6DKKMM401", alert: 'N' },
            { customerId: "6DKKMM453", alert: 'N' },
            { customerId: "6DKKMM501", alert: 'N' },
            { customerId: "6DKKMM53", alert: 'N' },
            { customerId: "6DKKMM554", alert: 'N' },
            { customerId: "6DKKMM601", alert: 'N' },
            { customerId: "6DKKMM653", alert: 'N' },
            { customerId: "6DKKMM702", alert: 'N' },
            { customerId: "6DKKMM93", alert: 'N' },
            { customerId: "6ABBCC09", alert: 'N' },
            { customerId: "6DEEFF89", alert: 'N' }
        ];

        $scope.init = function () {
            $scope.office = {
                disputeAlert: ($rootScope.transactionResults.Results.output1.value.Values[0][1] == 'Y') ? 'Yes' : 'No',
                disputeCategory: ($rootScope.transactionResults.Results.output1.value.Values[0][1] == 'Y') ? 'Duplicate Processing' : 'NA'
            };

            if ($scope.office.disputeAlert != 'Yes') {
                $scope.office = {
                    disputeAlert: 'No',
                    disputeCategory: 'Null'
                };
            }

            $scope.customer = {
                disputeAlert: '',
                alertRef: ''
            }

            if ($filter('filter')($scope.customers, function (item) {
                return item.customerId == $rootScope.transactionDetails.CustomerID;
            })[0]) {
                $scope.customer.alertRef = 'No';
            } else {
                $scope.customer.alertRef = 'Yes';
            }

            if ($scope.customer.alertRef != 'Yes') {
                $scope.customer = {
                    alertRef: 'No',
                    disputeAlert: 'No'
                };
            }


            if ($scope.customer.alertRef == 'Yes' && $scope.office.disputeAlert == 'Yes') {
                $scope.customer = {
                    alertRef: 'Yes',
                    disputeAlert: 'Yes'
                };
            } else {                
                $scope.customer = {
                    alertRef: 'No',
                    disputeAlert: 'No'
                };
            }

            $scope.disputeProbability = Math.round($rootScope.transactionResults.Results.output1.value.Values[0][2] * 100);// / 100;
        }

        $scope.init();

        $scope.redirectToHome = function () {
            $location.path("home");
        }
        
    }
})();