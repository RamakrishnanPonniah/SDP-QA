(function () {
    'use strict';

    angular.module('app').controller('TransactionController', TransactionController);
    TransactionController.$inject = ['$rootScope', '$scope', '$cookieStore', '$http', '$location'];

    function TransactionController($rootScope, $scope, $cookieStore, $http, $location) {
        var transCtrl = this;
        $rootScope.Title = 'Transaction Details';
        if (angular.isUndefined($rootScope.authenticated)) {
            window.location.href = "/";
        }
        if ($rootScope.authenticated == false) {
            window.location.href = "/";
        }

        transCtrl.transactionDetails = {
            CardNumber: "",
            FundingAccountNumber: "",
            CustomerID: "",
            PostedAmount: "",
            AuthorizationAmount: "",
            TxnTimestamp: "",
            AuthorizationTimestamp: "",
            Txn_Type: "",
            ReferenceNumber: "",
            IssuerCountry: "",
            MerchantCountry: "",
            IssuerCurrencyCode: "",
            MerchantCurrencyCode: "",
            MerchantName: "",
            MerchantCategoryCode: "",
            NetworkID: "",
            POSEntryMode: "",
            POSEntryModeonAuth: "",
            POSEnvironment: "",
            ServiceCode: "",
            MOTO_ECI_Ind: "",
            PhysicalCardPresent: "",
            TerminalIndicator: "",
            Terminalcapabilitycode: "",
            CardholderIDMethod: "",
            RPSInd: "",
            UCAF: "",
            FloorLimit: "",
            CVV2Result: "",
            CAVVResult: "",
            PinPresent: "",
            AcquirerBIN: "",
            CardAcceptorID: "",
            MultiClearing: "",
            Authorizationcode: "",
            Caseid: "",
            DisputeAmount: "",
            OnUs: "",
            FraudReported: "",
            Dispute: "",
            DecisionType: "",
            ChargebackAttempt: "",
            Recovered: "",
            DisputeCategory: "",
            CustomerInitiatedDispute: "",
            ReconsideredDispute: "",
            RFCFulfilled: "",
            MerchantCreditResolve: "",
            RepresentmentIndicator: "",
            DisputeAlertSubscription: "",
            PotentialDisputeAlerttoCustomer: "",
            PotentialDisputeAlerttoBackOffice: "",
            PotentialDisputeAlertOverriddenbyCustomer: "",
            PotentialDisputeAlertHonoredbyCustomer: "",
            POC: ""
        };
        transCtrl.init = init;
        transCtrl.onSubmit = onSubmit;
        transCtrl.reset = reset;
        transCtrl.presetFunction = presetFunction;
        init();

        function presetFunction() {
            if (transCtrl.perset == 1) {
                transCtrl.transactionDetails = {
                    CardNumber: "4AAABBBBCCCC8333",
                    FundingAccountNumber: "6AAABBC8333",
                    CustomerID: "6ABBCC33",
                    PostedAmount: "56.00",
                    AuthorizationAmount: "126.00",
                    TxnTimestamp: "2/27/2018",
                    AuthorizationTimestamp: "2/26/2018",
                    Txn_Type: "POS Purchase",
                    ReferenceNumber: "43444413033325600723",
                    IssuerCountry: "US",
                    MerchantCountry: "US",
                    IssuerCurrencyCode: "840",
                    MerchantCurrencyCode: "840",
                    MerchantName: "US4000POS",
                    MerchantCategoryCode: "4000",
                    NetworkID: "BII",
                    POSEntryMode: "90",
                    POSEntryModeonAuth: "90",
                    POSEnvironment: "Space",
                    ServiceCode: "201",
                    MOTO_ECI_Ind: "Null",
                    PhysicalCardPresent: "N",
                    TerminalIndicator: "3",
                    Terminalcapabilitycode: "1",
                    CardholderIDMethod: "1",
                    RPSInd: "Space",
                    UCAF: "Null",
                    FloorLimit: "I",
                    CVV2Result: "M",
                    CAVVResult: "Space",
                    PinPresent: "N",
                    AcquirerBIN: "434444",
                    CardAcceptorID: "1303332",
                    MultiClearing: "Y",
                    Authorizationcode: "43284",
                    Caseid: "0",
                    DisputeAmount: "0",
                    OnUs: "",
                    FraudReported: "",
                    Dispute: "",
                    DecisionType: "",
                    ChargebackAttempt: "",
                    Recovered: "",
                    DisputeCategory: "",
                    CustomerInitiatedDispute: "",
                    ReconsideredDispute: "",
                    RFCFulfilled: "",
                    MerchantCreditResolve: "",
                    RepresentmentIndicator: "",
                    DisputeAlertSubscription: "",
                    PotentialDisputeAlerttoCustomer: "",
                    PotentialDisputeAlerttoBackOffice: "",
                    PotentialDisputeAlertOverriddenbyCustomer: "",
                    PotentialDisputeAlertHonoredbyCustomer: "",
                    POC: ""
                };
            }
            if (transCtrl.perset == 2) {
                transCtrl.transactionDetails = {
                    CardNumber: "4AAABBBBCCCC0109",
                    FundingAccountNumber: "6AAABBC0109",
                    CustomerID: "6ABBCC09",
                    PostedAmount: "602.00",
                    AuthorizationAmount: "602.00",
                    TxnTimestamp: "1/18/2018",
                    AuthorizationTimestamp: "1/18/2018",
                    Txn_Type: "POS Purchase",
                    ReferenceNumber: "43444613033386000009",
                    IssuerCountry: "US",
                    MerchantCountry: "FR",
                    IssuerCurrencyCode: "840",
                    MerchantCurrencyCode: "250",
                    MerchantName: "FR3013POS",
                    MerchantCategoryCode: "3013",
                    NetworkID: "VSV",
                    POSEntryMode: "2",
                    POSEntryModeonAuth: "2",
                    POSEnvironment: "Space",
                    ServiceCode: "201",
                    MOTO_ECI_Ind: "Null",
                    PhysicalCardPresent: "Y",
                    TerminalIndicator: "3",
                    Terminalcapabilitycode: "4",
                    CardholderIDMethod: "1",
                    RPSInd: "Space",
                    UCAF: "Null",
                    FloorLimit: "Space",
                    CVV2Result: "Space",
                    CAVVResult: "Space",
                    PinPresent: "N",
                    AcquirerBIN: "434446",
                    CardAcceptorID: "1303338",
                    MultiClearing: "N",
                    Authorizationcode: "43720",
                    Caseid: "0",
                    DisputeAmount: "0",
                    OnUs: "",
                    FraudReported: "",
                    Dispute: "",
                    DecisionType: "",
                    ChargebackAttempt: "",
                    Recovered: "",
                    DisputeCategory: "",
                    CustomerInitiatedDispute: "",
                    ReconsideredDispute: "",
                    RFCFulfilled: "",
                    MerchantCreditResolve: "",
                    RepresentmentIndicator: "",
                    DisputeAlertSubscription: "",
                    PotentialDisputeAlerttoCustomer: "",
                    PotentialDisputeAlerttoBackOffice: "",
                    PotentialDisputeAlertOverriddenbyCustomer: "",
                    PotentialDisputeAlertHonoredbyCustomer: "",
                    POC: ""
                };
            }
            if (transCtrl.perset == 3) {
                transCtrl.transactionDetails = {
                    CardNumber: "4AAABBBBCCCC8689",
                    FundingAccountNumber: "6AAABBC8689",
                    CustomerID: "6DEEFF89",
                    PostedAmount: "1809.00",
                    AuthorizationAmount: "1809.00",
                    TxnTimestamp: "3/9/2018",
                    AuthorizationTimestamp: "3/9/2018",
                    Txn_Type: "POS Purchase",
                    ReferenceNumber: "4450091335027180943168",
                    IssuerCountry: "US",
                    MerchantCountry: "US",
                    IssuerCurrencyCode: "840",
                    MerchantCurrencyCode: "840",
                    MerchantName: "US6399POS",
                    MerchantCategoryCode: "6399",
                    NetworkID: "BII",
                    POSEntryMode: "01",
                    POSEntryModeonAuth: "01",
                    POSEnvironment: "Space",
                    ServiceCode: "201",
                    MOTO_ECI_Ind: "Null",
                    PhysicalCardPresent: "N",
                    TerminalIndicator: "3",
                    Terminalcapabilitycode: "8",
                    CardholderIDMethod: "Null",
                    RPSInd: "Null",
                    UCAF: "Null",
                    FloorLimit: "Null",
                    CVV2Result: "Null",
                    CAVVResult: "Null",
                    PinPresent: "N",
                    AcquirerBIN: "445009",
                    CardAcceptorID: "1335027",
                    MultiClearing: "N",
                    Authorizationcode: "44977",
                    Caseid: "0",
                    DisputeAmount: "0",
                    OnUs: "",
                    FraudReported: "",
                    Dispute: "",
                    DecisionType: "",
                    ChargebackAttempt: "",
                    Recovered: "",
                    DisputeCategory: "",
                    CustomerInitiatedDispute: "",
                    ReconsideredDispute: "",
                    RFCFulfilled: "",
                    MerchantCreditResolve: "",
                    RepresentmentIndicator: "",
                    DisputeAlertSubscription: "",
                    PotentialDisputeAlerttoCustomer: "",
                    PotentialDisputeAlerttoBackOffice: "",
                    PotentialDisputeAlertOverriddenbyCustomer: "",
                    PotentialDisputeAlertHonoredbyCustomer: "",
                    POC: ""
                };
            }
        }

        function reset() {
            transCtrl.transactionDetails = {
                CardNumber: "",
                FundingAccountNumber: "",
                CustomerID: "",
                PostedAmount: "",
                AuthorizationAmount: "",
                TxnTimestamp: "",
                AuthorizationTimestamp: "",
                Txn_Type: "",
                ReferenceNumber: "",
                IssuerCountry: "",
                MerchantCountry: "",
                IssuerCurrencyCode: "",
                MerchantCurrencyCode: "",
                MerchantName: "",
                MerchantCategoryCode: "",
                NetworkID: "",
                POSEntryMode: "",
                POSEntryModeonAuth: "",
                POSEnvironment: "",
                ServiceCode: "",
                MOTO_ECI_Ind: "",
                PhysicalCardPresent: "",
                TerminalIndicator: "",
                Terminalcapabilitycode: "",
                CardholderIDMethod: "",
                RPSInd: "",
                UCAF: "",
                FloorLimit: "",
                CVV2Result: "",
                CAVVResult: "",
                PinPresent: "",
                AcquirerBIN: "",
                CardAcceptorID: "",
                MultiClearing: "",
                Authorizationcode: "",
                Caseid: "",
                DisputeAmount: "",
                OnUs: "",
                FraudReported: "",
                Dispute: "",
                DecisionType: "",
                ChargebackAttempt: "",
                Recovered: "",
                DisputeCategory: "",
                CustomerInitiatedDispute: "",
                ReconsideredDispute: "",
                RFCFulfilled: "",
                MerchantCreditResolve: "",
                RepresentmentIndicator: "",
                DisputeAlertSubscription: "",
                PotentialDisputeAlerttoCustomer: "",
                PotentialDisputeAlerttoBackOffice: "",
                PotentialDisputeAlertOverriddenbyCustomer: "",
                PotentialDisputeAlertHonoredbyCustomer: "",
                POC: ""
            };
        }

        function init() {
            transCtrl.transactionDetails = {
                CardNumber: "4AAABBBBCCCC8333",
                FundingAccountNumber: "6AAABBC8333",
                CustomerID: "6ABBCC33",
                PostedAmount: "56.00",
                AuthorizationAmount: "126.00",
                TxnTimestamp: "2/27/2018",
                AuthorizationTimestamp: "2/27/2018",
                Txn_Type: "POS Purchase",
                ReferenceNumber: "43444413033325600723",
                IssuerCountry: "US",
                MerchantCountry: "US",
                IssuerCurrencyCode: "840",
                MerchantCurrencyCode: "840",
                MerchantName: "US4000POS",
                MerchantCategoryCode: "4000",
                NetworkID: "BII",
                POSEntryMode: "90",
                POSEntryModeonAuth: "90",
                POSEnvironment: "Space",
                ServiceCode: "201",
                MOTO_ECI_Ind: "Null",
                PhysicalCardPresent: "N",
                TerminalIndicator: "3",
                Terminalcapabilitycode: "1",
                CardholderIDMethod: "1",
                RPSInd: "Space",
                UCAF: "Null",
                FloorLimit: "I",
                CVV2Result: "M",
                CAVVResult: "Space",
                PinPresent: "N",
                AcquirerBIN: "434444",
                CardAcceptorID: "1303332",
                MultiClearing: "Y",
                Authorizationcode: "43284",
                Caseid: "0",
                DisputeAmount: "0",
                OnUs: "",
                FraudReported: "",
                Dispute: "",
                DecisionType: "",
                ChargebackAttempt: "",
                Recovered: "",
                DisputeCategory: "",
                CustomerInitiatedDispute: "",
                ReconsideredDispute: "",
                RFCFulfilled: "",
                MerchantCreditResolve: "",
                RepresentmentIndicator: "",
                DisputeAlertSubscription: "",
                PotentialDisputeAlerttoCustomer: "",
                PotentialDisputeAlerttoBackOffice: "",
                PotentialDisputeAlertOverriddenbyCustomer: "",
                PotentialDisputeAlertHonoredbyCustomer: "",
                POC: ""
            };
        }

        function onSubmit() {
            var testParam = {
                CardNumber: transCtrl.transactionDetails.CardNumber,
                FundingAccountNumber: transCtrl.transactionDetails.FundingAccountNumber,
                CustomerID: transCtrl.transactionDetails.CustomerID,
                PostedAmount: transCtrl.transactionDetails.PostedAmount,
                AuthorizationAmount: transCtrl.transactionDetails.AuthorizationAmount,
                TxnTimestamp: transCtrl.transactionDetails.TxnTimestamp,
                AuthorizationTimestamp: transCtrl.transactionDetails.AuthorizationTimestamp,
                Txn_Type: transCtrl.transactionDetails.Txn_Type,
                ReferenceNumber: transCtrl.transactionDetails.ReferenceNumber,
                IssuerCountry: "Null",
                MerchantCountry: transCtrl.transactionDetails.MerchantCountry,
                IssuerCurrencyCode: "Null",
                MerchantCurrencyCode: transCtrl.transactionDetails.MerchantCurrencyCode,
                MerchantName: transCtrl.transactionDetails.MerchantName,
                MerchantCategoryCode: transCtrl.transactionDetails.MerchantCategoryCode,
                NetworkID: transCtrl.transactionDetails.NetworkID,
                POSEntryMode: transCtrl.transactionDetails.POSEntryMode,
                POSEntryModeonAuth: transCtrl.transactionDetails.POSEntryModeonAuth,
                POSEnvironment: transCtrl.transactionDetails.POSEnvironment,
                ServiceCode: transCtrl.transactionDetails.ServiceCode,
                MOTO_ECI_Ind: transCtrl.transactionDetails.MOTO_ECI_Ind,
                PhysicalCardPresent: transCtrl.transactionDetails.PhysicalCardPresent,
                TerminalIndicator: transCtrl.transactionDetails.TerminalIndicator,
                Terminalcapabilitycode: transCtrl.transactionDetails.Terminalcapabilitycode,
                CardholderIDMethod: transCtrl.transactionDetails.CardholderIDMethod,
                RPSInd: transCtrl.transactionDetails.RPSInd,
                UCAF: transCtrl.transactionDetails.UCAF,
                FloorLimit: transCtrl.transactionDetails.FloorLimit,
                CVV2Result: transCtrl.transactionDetails.CVV2Result,
                CAVVResult: transCtrl.transactionDetails.CAVVResult,
                PinPresent: transCtrl.transactionDetails.PinPresent,
                AcquirerBIN: transCtrl.transactionDetails.AcquirerBIN,
                CardAcceptorID: transCtrl.transactionDetails.CardAcceptorID,
                MultiClearing: transCtrl.transactionDetails.MultiClearing,
                Authorizationcode: transCtrl.transactionDetails.Authorizationcode,
                Caseid: 0,
                DisputeAmount: 0,
                OnUs: "",
                FraudReported: "",
                Dispute: "",
                DecisionType: "",
                ChargebackAttempt: "",
                Recovered: "",
                DisputeCategory: "",
                CustomerInitiatedDispute: "",
                ReconsideredDispute: "",
                RFCFulfilled: "",
                MerchantCreditResolve: "",
                RepresentmentIndicator: "",
                DisputeAlertSubscription: "",
                PotentialDisputeAlerttoCustomer: "",
                PotentialDisputeAlerttoBackOffice: "",
                PotentialDisputeAlertOverriddenbyCustomer: "",
                PotentialDisputeAlertHonoredbyCustomer: "",
                POC: ""
            };

            $http({
                url: '../../Services/SDPService.asmx/TransactionService',
                method: 'POST',
                headers: { "Content-Type": "application/json; charset=UTF-8" },
                data: JSON.stringify({ request: testParam }), //{ name: $scope.Name },
                dataType: 'json'

            }).then(function (response) {
                if (response.data.d) {
                    $rootScope.transactionDetails = transCtrl.transactionDetails;
                    $rootScope.perset = transCtrl.perset;
                    $rootScope.transactionResults = JSON.parse(response.data.d);
                    $location.path('final');
                }
            }, function (response) {
                debugger;
            });


            //$http({
            //    url: 'https://sdp-test3.azurewebsites.net/predictDisputeInfo',
            //    method: 'POST',
            //    data: testParam,
            //}).then(function (response) {
            //    //debugger;
            //    if (response.data) {
            //        $rootScope.transactionDetails = transCtrl.transactionDetails;
            //        $rootScope.transactionResults = response.data;
            //        $location.path('final');
            //    }
            //}, function (response) {
            //    //debugger;
            //});


            //var baseUrl = "https://ussouthcentral.services.azureml.net/workspaces/97483786c0a24d89960516343f205705/services/533d3545aeaf4418900fccca5b9e2f9f/execute?api-version=2.0&details=true";

            //$http({
            //    url: baseUrl,
            //    method: 'POST',
            //    withCredentials: true,
            //    headers: {
            //        'Content-Type': 'application/json; charset=utf-8',
            //        'Authorization': 'bearer ' + 'V6bJKdn0R0Kcu+G8yW6cR9wtmnWJO/x+KOHyNvRVKEd+b5nrzl05C6K6EY1dHEqZRYaRXa1kbc508vsb8OkZtA=='
            //    },
            //    data: JSON.stringify({ "Inputs": param, "GlobalParameters": {} })
            //}).then(function (response) {
            //    debugger;
            //    if (!response.data) {
            //    }
            //}, function (response) {
            //    debugger;
            //});



            //$rootScope.authenticated = true;
            //$location.url('final');
        }

    }
})();
