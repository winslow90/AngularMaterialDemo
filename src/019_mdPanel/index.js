/**
 * Created by superman90 on 8/7/16.
 */
(function(angular, undefined) {

    angular
        .module('demoApp', ['ngMaterial'])
        .controller('DemoDialogController', DialogController)
        .controller('MainCtl',function($scope){
            var panelRef;

            $scope.showPanel = function showPanel($event,$mdPanel) {
                var panelPosition = $mdPanel.newPanelPosition()
                    .absolute()
                    .top('50%')
                    .left('50%');

                var panelAnimation = $mdPanel.newPanelAnimation()
                    .targetEvent($event)
                    .defaultAnimation('md-panel-animate-fly')
                    .closeTo('.show-button');

                var config = {
                    attachTo: angular.element(document.body),
                    controller: DialogController,
                    controllerAs: 'ctrl',
                    position: panelPosition,
                    animation: panelAnimation,
                    targetEvent: $event,
                    templateUrl: 'dialog-template.html',
                    clickOutsideToClose: true,
                    escapeToClose: true,
                    focusOnOpen: true
                }

                $mdPanel.open(config)
                    .then(function(result) {
                        panelRef = result;
                    });
            }
        });

    function DialogController(MdPanelRef, toppings) {
        var toppings;

        function closeDialog() {
            MdPanelRef.close();
        }
    }
})(angular);